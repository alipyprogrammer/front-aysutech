"use client";

import { useState } from "react";
import { ArrowLeft, Bot, Check, Code2, Globe, Loader2, Sparkles } from "lucide-react";

import { GATEWAY_PATH as API, PANEL_URL as PANEL } from "@/lib/assistant-config";

type Form = {
  shop_name: string; site_url: string; site_type: "wordpress" | "custom";
  name: string; email: string; username: string; password: string;
};

const PERKS = [
  "دوره‌ی آزمایشی رایگان، بدون نیاز به کارت",
  "اتصال به ووکامرس، اکسل، PDF یا دیتابیس",
  "نصب روی وردپرس با افزونه، روی هر سایت دیگر با یک خط کد",
  "پنل اختصاصی: تست چت، گفتگوهای مشتری، گزارش سوال‌های بی‌جواب",
];

export default function GetAssistant() {
  const [f, setF] = useState<Form>({ shop_name: "", site_url: "", site_type: "wordpress",
                                     name: "", email: "", username: "", password: "" });
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF({ ...f, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    if (!API) { setErr("آدرس سرور دستیار تنظیم نشده."); return; }
    setBusy(true);
    try {
      const r = await fetch(`${API}/api/auth/signup`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f),
      });
      const d = (await r.json().catch(() => ({}))) as { error?: string; panel_url?: string };
      if (!r.ok) throw new Error(d.error || "ثبت‌نام انجام نشد.");
      if (d.panel_url) window.location.href = d.panel_url;   // مستقیم وارد پنل خودش می‌شود
    } catch (x) {
      setErr(x instanceof Error ? x.message : "خطای ناشناخته");
      setBusy(false);
    }
  }

  return (
    <section className="section get-assistant" id="get-assistant" aria-labelledby="ga-title">
      <div className="container ga-layout">
        <div className="ga-copy">
          <span className="section-kicker"><Sparkles size={15} />دستیار خودتان را بسازید</span>
          <h2 id="ga-title">در چند دقیقه، یک <span>فروشنده‌ی هوشمند</span> روی سایت شما.</h2>
          <p>ثبت‌نام کنید، محصولاتتان را وصل کنید و دستیار را روی سایت بگذارید. سوالی داشتید؟
             دستیار همین سایت (گوشه‌ی صفحه) قدم‌به‌قدم راهنمایی‌تان می‌کند.</p>
          <ul className="ga-perks">{PERKS.map((p) => <li key={p}><span><Check size={14} /></span>{p}</li>)}</ul>
        </div>

        <form className="ga-card" onSubmit={submit}>
          <div className="ga-card-head">
            <span className="assistant-logo"><Bot size={18} /></span>
            <div><b>ساخت دستیار</b><small>بعد از ثبت‌نام مستقیم وارد پنل می‌شوید</small></div>
          </div>

          <label>نام کسب‌وکار<input required value={f.shop_name} onChange={set("shop_name")} placeholder="مثلا: فروشگاه پی‌سی‌تولز" /></label>
          <div className="ga-row">
            <label>آدرس سایت<input value={f.site_url} onChange={set("site_url")} placeholder="https://example.com" dir="ltr" /></label>
            <label>نوع سایت
              <div className="ga-toggle">
                <button type="button" className={f.site_type === "wordpress" ? "on" : ""}
                        onClick={() => setF({ ...f, site_type: "wordpress" })}><Globe size={15} />وردپرس</button>
                <button type="button" className={f.site_type === "custom" ? "on" : ""}
                        onClick={() => setF({ ...f, site_type: "custom" })}><Code2 size={15} />سایت شخصی</button>
              </div>
            </label>
          </div>
          <div className="ga-row">
            <label>نام شما<input value={f.name} onChange={set("name")} /></label>
            <label>ایمیل<input type="email" value={f.email} onChange={set("email")} dir="ltr" /></label>
          </div>
          <div className="ga-row">
            <label>نام کاربری<input required value={f.username} onChange={set("username")} dir="ltr"
                   pattern="[a-zA-Z0-9_.\-]{3,30}" title="۳ تا ۳۰ حرف انگلیسی، عدد یا . _ -" /></label>
            <label>رمز عبور<input required type="password" minLength={8} value={f.password} onChange={set("password")} dir="ltr" /></label>
          </div>

          {err && <p className="ga-error">{err}</p>}
          <button className="button button-primary ga-submit" disabled={busy}>
            {busy ? <><Loader2 size={18} className="ga-spin" />در حال ساخت…</> : <>ساخت دستیار و ورود به پنل<ArrowLeft size={18} /></>}
          </button>
          <small className="ga-note">حساب دارید؟ <a href={PANEL}>ورود به پنل</a></small>
        </form>
      </div>
    </section>
  );
}
