/**
 * درگاه عمومی دستیار: https://aysutech.ir/assistant/*
 *
 * همه‌ی سایت‌ها (سایت خود آیسو تک، سایت‌های شخصی مشتری‌ها با اسکریپت، و
 * وردپرسی‌ها با افزونه) فقط با همین آدرس https حرف می‌زنند. این مسیر سمت سرور
 * درخواست را به سرور جنگو (که می‌تواند http و روی IP باشد) می‌فرستد.
 *
 *   <script src="https://aysutech.ir/assistant/embed.js" data-key="sk_..." async></script>
 *
 * هویت هر فروشگاه با کلیدش (X-API-Key / X-Sync-Key) است و «دامنه‌ی مجاز» با
 * Origin واقعی مرورگر مشتری بررسی می‌شود، نه دامنه‌ی این درگاه.
 *
 * تنظیم: متغیر Worker  ASSISTANT_ORIGIN  یا هنگام بیلد  NEXT_PUBLIC_ASSISTANT_ORIGIN
 * WebSocket از اینجا رد نمی‌شود؛ ویجت پشت این درگاه با HTTP کار می‌کند.
 */
import { env } from "cloudflare:workers";
import { ASSISTANT_ORIGIN } from "@/lib/assistant-config";

// آنچه از مرورگر/وردپرس به جنگو می‌رود
const FORWARD_REQ = ["content-type", "accept", "x-api-key", "x-sync-key", "authorization",
                     "origin", "referer", "user-agent", "last-event-id", "cache-control"];
// آنچه از جنگو به مرورگر برمی‌گردد (CORS حیاتی است: سایت مشتری دامنه‌ی دیگری است)
const FORWARD_RES = ["content-type", "cache-control", "retry-after", "x-accel-buffering",
                     "access-control-allow-origin", "access-control-allow-headers",
                     "access-control-allow-methods", "access-control-max-age"];
const MAX_BODY = 8 * 1024 * 1024;     // دسته‌های همگام‌سازی وردپرس

/**
 * پاسخ «در حال تایپ» (استریم): SSE یا NDJSON یا هر پاسخی که طولش معلوم نیست.
 * این‌ها نباید جایی بافر یا فشرده شوند، وگرنه متن یک‌جا می‌رسد.
 */
function isStream(res: Response): boolean {
  const ct = (res.headers.get("content-type") || "").toLowerCase();
  if (ct.includes("text/event-stream") || ct.includes("ndjson") || ct.includes("x-stream")) return true;
  // فایل‌های ثابت (embed.js، css، عکس) و JSONهای معمولی طول مشخص دارند
  return !res.headers.has("content-length") && !/javascript|css|image|font|html/.test(ct);
}

function upstream(): string {
  const fromWorker = (env as unknown as Record<string, string | undefined>).ASSISTANT_ORIGIN;
  return (fromWorker || process.env.NEXT_PUBLIC_ASSISTANT_ORIGIN || ASSISTANT_ORIGIN || "").replace(/\/$/, "");
}

function cors(origin: string | null, h = new Headers()) {
  h.set("access-control-allow-origin", origin || "*");
  h.set("access-control-allow-headers", "X-API-Key, X-Sync-Key, Content-Type, Authorization");
  h.set("access-control-allow-methods", "GET, POST, PATCH, OPTIONS");
  h.set("vary", "Origin");
  return h;
}

type Ctx = { params: Promise<{ path: string[] }> };

/** هر خطای پیش‌بینی‌نشده‌ی خود درگاه را به‌صورت JSON برمی‌گرداند تا معلوم باشد
 *  ۵۰۰ از درگاه است (x-assistant-error) یا از جنگو (x-upstream-status). */
async function proxy(req: Request, ctx: Ctx) {
  try {
    return await proxyInner(req, ctx);
  } catch (e) {
    const msg = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
    console.error("[assistant-proxy]", msg);
    const h = cors(req.headers.get("origin"));
    h.set("x-assistant-error", "1");
    return Response.json({ error: "خطای داخلی درگاه دستیار", detail: msg }, { status: 502, headers: h });
  }
}

async function proxyInner(req: Request, ctx: Ctx) {
  const origin = req.headers.get("origin");
  const base = upstream();
  if (!base) {
    return Response.json({ error: "درگاه دستیار تنظیم نشده (ASSISTANT_ORIGIN)." },
                         { status: 500, headers: cors(origin) });
  }

  const { path } = await ctx.params;
  const url = new URL(req.url);
  const target = `${base}/${(path || []).map(encodeURIComponent).join("/")}${url.search}`;

  const headers = new Headers();
  for (const h of FORWARD_REQ) {
    const v = req.headers.get(h);
    if (v) headers.set(h, v);
  }
  headers.set("x-forwarded-for",
              req.headers.get("cf-connecting-ip") || req.headers.get("x-forwarded-for") || "");
  headers.set("x-forwarded-host", url.host);
  headers.set("x-assistant-proxy", "1");     // جنگو می‌فهمد پشت درگاه است (ویجت با HTTP)
  // فشرده‌سازی gzip سمت جنگو (GZipMiddleware) تکه‌های کوچک استریم را جمع می‌کند و
  // یک‌جا می‌فرستد؛ بین درگاه و جنگو فشرده‌سازی لازم نیست.
  headers.set("accept-encoding", "identity");

  let body: ArrayBuffer | undefined;
  if (req.method !== "GET" && req.method !== "HEAD") {
    body = await req.arrayBuffer();
    if (body.byteLength > MAX_BODY) {
      return Response.json({ error: "درخواست خیلی بزرگ است." }, { status: 413, headers: cors(origin) });
    }
  }

  let res: Response;
  try {
    res = await fetch(target, { method: req.method, headers, body, redirect: "manual" });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return Response.json(
      { error: "سرور دستیار از سمت درگاه در دسترس نیست.", detail: msg },
      { status: 502, headers: cors(origin) },
    );
  }

  const out = new Headers();
  for (const h of FORWARD_RES) {
    const v = res.headers.get(h);
    if (v) out.set(h, v);
  }
  // فایل‌های ویجت و embed.js روی هر سایتی لود می‌شوند
  if (!out.has("access-control-allow-origin")) cors(origin, out);
  out.set("x-assistant-proxy", "1");
  out.set("x-upstream-status", String(res.status));   // ۵۰۰ اینجا یعنی خطا از خود جنگوست

  if (res.body && isStream(res)) {
    // no-transform: Cloudflare پاسخ را فشرده (brotli/gzip) و در نتیجه بافر نکند
    out.set("cache-control", "no-cache, no-transform");
    out.set("x-accel-buffering", "no");
    out.set("x-assistant-stream", "1");       // برای عیب‌یابی در DevTools
    // هر تکه به‌محض رسیدن از جنگو، همان لحظه به مرورگر فرستاده می‌شود
    const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
    res.body.pipeTo(writable).catch(() => { /* قطع اتصال کاربر وسط پاسخ */ });
    return new Response(readable, { status: res.status, headers: out });
  }
  return new Response(res.body, { status: res.status, headers: out });
}

export const GET = proxy;
export const POST = proxy;
export const PATCH = proxy;
export const OPTIONS = proxy;
