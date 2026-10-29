import type { Metadata } from "next";
import { ArrowLeft, Check, Cpu, MessageSquareText, Phone, Radio, Send, Settings2, Wifi } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { CONTACT } from "@/lib/site-info";
import { IOT_PRODUCTS, IOT_STATUS_LABEL } from "@/lib/iot-products";

export const metadata: Metadata = {
  title: "محصولات IoT | آیسو تک",
  description: "نمونه محصولات اینترنت اشیا و هوشمندسازی آیسو تک؛ از ماژول انتقال پیامک به تلگرام تا راهکارهای اختصاصی.",
};

const steps = [
  { icon: Radio, title: "پیامک می‌رسد", text: "سیم‌کارت داخل ماژول مثل یک گوشی پیامک را دریافت می‌کند." },
  { icon: Cpu, title: "ماژول پردازش می‌کند", text: "فرستنده، متن و زمان پیامک استخراج و آماده ارسال می‌شود." },
  { icon: Send, title: "تلگرام شما خبر می‌دهد", text: "پیام در کمتر از چند ثانیه در ربات یا گروه تلگرامی شما است." },
];

export default function IotPage() {
  return (
    <main id="top">
      <SiteHeader base="/" active="iot" />

      <section className="iot-hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container iot-hero-inner">
          <span className="eyebrow"><span className="eyebrow-dot" />هوشمندسازی و اینترنت اشیا</span>
          <h1>محصولات <span>IoT</span> آیسو تک</h1>
          <p>سخت‌افزارهای کوچک و کاربردی که کارهای تکراری را خودکار می‌کنند و اطلاعات را همان‌جایی می‌آورند که شما هستید.</p>
        </div>
      </section>

      {IOT_PRODUCTS.map((p) => (
        <section className="section iot-product" id={p.slug} key={p.slug}>
          <div className="container iot-product-grid">
            <div className="iot-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.imageAlt} width={1200} height={900} loading="eager" />
              {p.badge && <span className="iot-badge">{p.badge}</span>}
            </div>

            <div className="iot-info">
              <span className={`iot-status iot-status-${p.status}`}>{IOT_STATUS_LABEL[p.status]}</span>
              <h2>{p.name}</h2>
              <p className="iot-tagline">{p.tagline}</p>
              <p className="iot-desc">{p.description}</p>
              <ul className="iot-features">
                {p.features.map((f) => <li key={f}><span><Check size={14} /></span>{f}</li>)}
              </ul>
              <div className="iot-actions">
                <a className="button button-primary" href="/#contact">سفارش و مشاوره<ArrowLeft size={18} /></a>
                <a className="text-link" href={`tel:${CONTACT.phone}`} dir="ltr"><Phone size={16} />{CONTACT.phoneFa}</a>
              </div>
            </div>
          </div>

          <div className="container iot-details">
            <div className="iot-card">
              <h3><Settings2 size={18} />مشخصات</h3>
              <dl>{p.specs.map((s) => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}</dl>
            </div>
            <div className="iot-card">
              <h3><MessageSquareText size={18} />کاربردها</h3>
              <div className="iot-uses">{p.uses.map((u) => <span key={u}>{u}</span>)}</div>
            </div>
          </div>

          {p.slug === "sms-to-telegram" && (
            <div className="container iot-flow">
              {steps.map((s, i) => { const Icon = s.icon; return (
                <article key={s.title}>
                  <span className="iot-flow-icon"><Icon size={22} /></span>
                  <small>مرحله {["۱", "۲", "۳"][i]}</small>
                  <h4>{s.title}</h4><p>{s.text}</p>
                </article>
              ); })}
            </div>
          )}
        </section>
      ))}

      <section className="iot-custom">
        <div className="container iot-custom-card">
          <span className="iot-custom-icon"><Wifi size={26} /></span>
          <div><h2>ایده سخت‌افزاری خودتان را دارید؟</h2><p>سنسور، کنترلر، اتصال به تلگرام یا پنل وب؛ دستگاه اختصاصی کسب‌وکار شما را طراحی و می‌سازیم.</p></div>
          <a className="button button-white" href="/#contact">گفت‌وگو درباره پروژه<ArrowLeft size={18} /></a>
        </div>
      </section>

      <SiteFooter base="/" />
    </main>
  );
}
