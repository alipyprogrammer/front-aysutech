import type { Metadata } from "next";
import { ArrowLeft, Boxes, CircuitBoard, Headset, Lightbulb, Wifi } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import IotProductCard from "@/components/iot/product-card";
import IotProductShowcase from "@/components/iot/product-showcase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IOT_PRODUCTS } from "@/lib/iot-products";

export const metadata: Metadata = {
  title: "محصولات IoT | آیسو تک",
  description: "نمونه محصولات اینترنت اشیا و هوشمندسازی آیسو تک؛ از ماژول انتقال پیامک به تلگرام تا راهکارهای اختصاصی.",
};

const fa = (n: number) => n.toLocaleString("fa-IR");

const stats = [
  { icon: Boxes, value: fa(IOT_PRODUCTS.length), label: "محصول سخت‌افزاری" },
  { icon: CircuitBoard, value: "۱۰۰٪", label: "طراحی و مونتاژ داخلی" },
  { icon: Headset, value: "مستقیم", label: "پشتیبانی فنی" },
];

export default function IotPage() {
  return (
    <main id="top">
      <SiteHeader base="/" active="iot" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/5%)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/5%)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 mx-auto size-[520px] rounded-full bg-primary/40 blur-[120px]" />
        <div aria-hidden="true" className="absolute -bottom-48 -start-20 size-[380px] rounded-full bg-accent/20 blur-[110px]" />

        <div className="container relative py-20 text-center md:py-28">
          <Badge variant="outline" className="gap-2 border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-accent backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgb(19_217_206/20%)]" />
            هوشمندسازی و اینترنت اشیا
          </Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(34px,5vw,62px)] leading-[1.35] font-black tracking-tight">
            محصولات{" "}
            <span className="inline-block bg-gradient-to-l from-accent to-primary bg-clip-text text-transparent" dir="ltr">IoT</span>{" "}
            آیسو تک
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-background/70">
            سخت‌افزارهای کوچک و کاربردی که کارهای تکراری را خودکار می‌کنند و اطلاعات را همان‌جایی می‌آورند که شما هستید.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-xl px-6 font-bold max-sm:w-full">
              <a href="#catalog">مشاهده محصولات<ArrowLeft /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-xl border-white/20 bg-white/5 px-6 font-bold text-background hover:bg-white/10 hover:text-background max-sm:w-full">
              <a href="#custom">سفارش پروژه اختصاصی</a>
            </Button>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-3">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur">
                  <Icon className="mx-auto size-5 text-accent" />
                  <b className="mt-2 block text-lg font-black md:text-2xl">{s.value}</b>
                  <span className="text-[11px] text-background/60 md:text-xs">{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* کاتالوگ — با اضافه شدن محصول در lib/iot-products.ts خودکار بزرگ می‌شود */}
      <section id="catalog" className="scroll-mt-24 border-b bg-card py-16 md:py-20">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-sm font-extrabold text-primary">کاتالوگ محصولات</span>
              <h2 className="mt-2 text-[clamp(26px,3.2vw,40px)] leading-[1.45] font-black tracking-tight">دستگاه‌هایی که امروز می‌توانید سفارش دهید</h2>
            </div>
            <Badge variant="secondary" className="px-3 py-1 font-bold">{fa(IOT_PRODUCTS.length)} محصول</Badge>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {IOT_PRODUCTS.map((p) => <IotProductCard key={p.slug} product={p} />)}

            <a href="#custom" className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
              <Card className="h-full min-h-72 items-center justify-center gap-3 rounded-2xl border-2 border-dashed bg-muted/40 p-8 text-center shadow-none transition-colors group-hover:border-primary/40 group-hover:bg-secondary/60">
                <span className="grid size-14 place-items-center rounded-2xl bg-card text-primary shadow-sm transition-transform group-hover:scale-110"><Lightbulb className="size-6" /></span>
                <h3 className="m-0 text-base font-extrabold">محصول بعدی را با هم بسازیم</h3>
                <p className="m-0 max-w-60 text-sm leading-7 text-muted-foreground">ایده‌ی سخت‌افزاری دارید؟ از طراحی مدار تا ساخت نمونه همراهتان هستیم.</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">ثبت ایده<ArrowLeft className="size-4" /></span>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* معرفی کامل هر محصول */}
      <div className="divide-y">
        {IOT_PRODUCTS.map((p, i) => <IotProductShowcase key={p.slug} product={p} index={i} reverse={i % 2 === 1} />)}
      </div>

      {/* پروژه اختصاصی */}
      <section id="custom" className="scroll-mt-24 pt-6 pb-24">
        <div className="container">
          <div className="relative grid items-center gap-6 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary to-secondary-foreground px-6 py-10 text-center text-primary-foreground shadow-[0_30px_70px_rgb(21_94_239/25%)] md:grid-cols-[auto_1fr_auto] md:px-11 md:text-start">
            <div aria-hidden="true" className="absolute -end-16 -top-16 size-56 rounded-full bg-white/10 blur-2xl" />
            <span className="relative mx-auto grid size-16 place-items-center rounded-2xl bg-white/15"><Wifi className="size-7" /></span>
            <div className="relative">
              <h2 className="m-0 text-2xl font-black">ایده سخت‌افزاری خودتان را دارید؟</h2>
              <p className="m-0 mt-2 text-sm leading-7 text-primary-foreground/80">سنسور، کنترلر، اتصال به تلگرام یا پنل وب؛ دستگاه اختصاصی کسب‌وکار شما را طراحی و می‌سازیم.</p>
            </div>
            <Button asChild size="lg" variant="secondary" className="relative h-12 rounded-xl bg-white px-6 font-bold text-secondary-foreground hover:bg-white/90 max-md:mx-auto">
              <a href="/#contact">گفت‌وگو درباره پروژه<ArrowLeft /></a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter base="/" />
    </main>
  );
}
