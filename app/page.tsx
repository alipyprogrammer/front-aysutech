import {
  ArrowLeft, ArrowUpLeft, Bot, BrainCircuit, Check, ChevronDown, Code2,
  Cpu, Gauge, Layers3, Mail, MapPin, Megaphone, MessagesSquare, Mic,
  Clock, MoonStar, MoveLeft, Network, Phone, Rocket, Sparkles, Workflow, Zap,
} from "lucide-react";
import GetAssistant from "@/components/get-assistant";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Developers from "@/components/developers";
import { CONTACT, EMAIL } from "@/lib/site-info";

const services = [
  { number: "01", title: "دستیار هوشمند فروش", description: "یک فروشنده همیشه‌آماده که نیاز مشتری را می‌فهمد، محصول مناسب پیشنهاد می‌دهد و مسیر خرید را کوتاه‌تر می‌کند.", icon: Bot, accent: "service-cyan", tags: ["پیشنهاد محصول", "پاسخ‌گویی هوشمند", "گفتگوی صوتی", "تحلیل گفتگو"] },
  { number: "02", title: "هوشمندسازی و IoT", description: "تأمین و یکپارچه‌سازی قطعات الکترونیکی برای کنترل، پایش و خودکارسازی محیط‌های واقعی.", icon: Cpu, accent: "service-blue", tags: ["سنسور و کنترلر", "اینترنت اشیا", "اتوماسیون"], link: { href: "/iot", label: "دیدن محصولات IoT" } },
  { number: "03", title: "برنامه‌نویسی اختصاصی", description: "طراحی و توسعه نرم‌افزارهای وب، پنل‌های مدیریتی و API بر اساس فرآیند واقعی کسب‌وکار شما.", icon: Code2, accent: "service-violet", tags: ["وب‌اپلیکیشن", "پنل مدیریت", "API و یکپارچه‌سازی"] },
  { number: "04", title: "مارکتینگ داده‌محور", description: "از استراتژی محتوا تا تحلیل کمپین؛ تصمیم‌های بازاریابی را به داده و نتیجه قابل اندازه‌گیری متصل می‌کنیم.", icon: Megaphone, accent: "service-green", tags: ["استراتژی رشد", "تولید محتوا", "تحلیل کمپین"] },
];

const team = [
  { title: "توسعه Front-end", text: "رابط‌های سریع، دقیق و خوش‌ساخت برای وب و موبایل.", icon: Layers3 },
  { title: "توسعه Back-end", text: "زیرساخت امن و مقیاس‌پذیر برای محصولاتی که قرار است رشد کنند.", icon: Network },
  { title: "هوش مصنوعی و داده", text: "مدل‌های کاربردی برای فروش، پیشنهاد محصول و تصمیم‌گیری بهتر.", icon: BrainCircuit },
  { title: "سخت‌افزار و IoT", text: "پیوند نرم‌افزار با سنسورها، کنترلرها و تجهیزات هوشمند.", icon: Cpu },
];

const process = [
  { number: "۱", title: "شناخت مسئله", text: "هدف، کاربر و محدودیت‌های پروژه را دقیق مشخص می‌کنیم." },
  { number: "۲", title: "طراحی راه‌حل", text: "مسیر فنی، زمان‌بندی و خروجی قابل تحویل را شفاف می‌سازیم." },
  { number: "۳", title: "ساخت و تحویل", text: "نسخه‌های قابل تست می‌سازیم و مرحله‌به‌مرحله به نتیجه می‌رسیم." },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" />راهکارهای هوشمند برای کسب‌وکارهای رو به رشد</div>
            <h1 id="hero-title">ایده شما،<br />با <span>فناوری</span> جان می‌گیرد.</h1>
            <p>در آیسو تک، هوش مصنوعی، برنامه‌نویسی، الکترونیک و مارکتینگ را کنار هم می‌آوریم تا مسئله واقعی کسب‌وکار شما را حل کنیم.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">درباره پروژه‌تان بگویید<ArrowLeft size={18} /></a>
              <a className="text-link" href="#services">دیدن خدمات<ChevronDown size={18} /></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true"><span>AI</span><span>UX</span><span>DEV</span></div>
              <p><b>یک تیم، چهار تخصص</b><small>از ایده تا اجرای کامل محصول</small></p>
            </div>
          </div>

          <div className="hero-visual" aria-label="نمایش نمونه دستیار هوشمند فروش">
            <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" /><div className="glow" aria-hidden="true" />
            <div className="assistant-card">
              <div className="assistant-head">
                <div className="assistant-brand"><span className="assistant-logo"><Sparkles size={18} /></span><div><b>دستیار فروش آیسو</b><span><i /> آنلاین و آماده پاسخ‌گویی</span></div></div>
                <span className="mini-pill">AI</span>
              </div>
              <div className="assistant-body">
                <div className="chat-row customer-message"><span className="chat-avatar">م</span><p>برای یک دفتر ۱۲۰ متری چه سیستم هوشمندی پیشنهاد می‌دید؟</p></div>
                <div className="chat-row ai-message"><span className="chat-avatar"><Bot size={16} /></span><div><p>برای شروع، کنترل روشنایی و تهویه بیشترین صرفه‌جویی را ایجاد می‌کند. یک پکیج متناسب پیدا کردم:</p><div className="product-suggestion"><span className="product-icon"><Cpu size={21} /></span><div><b>پکیج هوشمندسازی دفتر</b><small>کنترل مرکزی + ۸ سنسور + نصب</small></div><ArrowUpLeft size={18} /></div></div></div>
              </div>
              <div className="assistant-input"><span>بنویسید یا حرف بزنید...</span><div className="assistant-input-actions"><button className="assistant-mic" aria-label="پیام صوتی"><Mic size={17} /></button><button aria-label="ارسال پیام"><ArrowLeft size={18} /></button></div></div>
            </div>
            <div className="floating-stat floating-stat-top"><Gauge size={18} /><div><b>پاسخ فوری</b><small>۲۴ ساعت شبانه‌روز</small></div></div>
            <div className="floating-stat floating-stat-bottom"><Zap size={18} /><div><b>فروش هوشمند</b><small>بر اساس نیاز واقعی مشتری</small></div></div>
          </div>
        </div>
        <div className="container capabilities" aria-label="حوزه‌های فعالیت"><span>AI &amp; AUTOMATION</span><i /><span>SOFTWARE DEVELOPMENT</span><i /><span>SMART ELECTRONICS</span><i /><span>GROWTH MARKETING</span></div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading split-heading"><div><span className="section-kicker">خدمات آیسو تک</span><h2>چه کاری برای کسب‌وکار شما انجام می‌دهیم؟</h2></div><p>به‌جای راه‌حل‌های آماده، ترکیب مناسبی از نرم‌افزار، سخت‌افزار و بازاریابی را برای هدف شما می‌سازیم.</p></div>
          <div className="services-grid">
            {services.map((service) => { const Icon = service.icon; return (
              <article className={`service-card ${service.accent}`} key={service.title}>
                <div className="service-top"><span className="service-icon"><Icon size={25} strokeWidth={1.8} /></span><span className="service-number">{service.number}</span></div>
                <h3>{service.title}</h3><p>{service.description}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {"link" in service && service.link
                  ? <a href={service.link.href}>{service.link.label}<ArrowLeft size={16} /></a>
                  : <a href="#contact" aria-label={`مشاوره درباره ${service.title}`}>مشاوره این خدمت<ArrowLeft size={16} /></a>}
              </article>
            ); })}
          </div>
        </div>
      </section>

      <section className="assistant-section" id="assistant">
        <div className="container assistant-layout">
          <div className="assistant-content">
            <span className="section-kicker light">محصول ویژه آیسو تک</span><h2>دستیار فروش شما، همیشه بیدار و همیشه دقیق</h2>
            <p className="assistant-lead">دستیار هوشمند فروش، محصولات و قواعد کسب‌وکار شما را یاد می‌گیرد و در لحظه، مشتری را به بهترین انتخاب می‌رساند.</p>
            <div className="feature-list">{["گفت‌وگوی طبیعی و پاسخ‌گویی به سوالات مشتری", "گفتگو و تماس صوتی، با لهجه‌ی دلخواه شما", "پیشنهاد محصول بر اساس بودجه و نیاز واقعی", "اتصال به فروشگاه، CRM و اطلاعات موجودی", "گزارش از سوال‌ها، نیازها و فرصت‌های فروش"].map((item) => <div key={item}><span><Check size={15} /></span>{item}</div>)}</div>
            <a className="button button-light" href="#get-assistant">همین حالا دستیار بسازید<ArrowLeft size={18} /></a>
          </div>
          <div className="flow-board" aria-label="فرآیند دستیار فروش هوشمند">
            <div className="flow-label">AYSU SALES ASSISTANT</div>
            <div className="flow-core"><span><BrainCircuit size={30} /></span><b>موتور هوشمند</b><small>تحلیل نیاز + پیشنهاد دقیق</small></div>
            <div className="flow-node node-one"><MessagesSquare size={18} /><span>گفت‌وگو با مشتری</span></div>
            <div className="flow-node node-two"><Layers3 size={18} /><span>اطلاعات محصولات</span></div>
            <div className="flow-node node-three"><Workflow size={18} /><span>اتصال به سیستم شما</span></div>
            <div className="flow-node node-four"><Gauge size={18} /><span>گزارش و تحلیل</span></div>
            <div className="flow-pulse pulse-one" /><div className="flow-pulse pulse-two" />
          </div>
        </div>
      </section>

      <GetAssistant />

      <section className="section team-section" id="team">
        <div className="container">
          <div className="section-heading centered-heading"><span className="section-kicker">تیم برنامه‌نویسی</span><h2>یک تیم فنی، برای ساختن محصول کامل</h2><p>متخصص‌هایی که زبان کسب‌وکار را می‌فهمند و آن را به محصولی سریع، امن و قابل توسعه تبدیل می‌کنند.</p></div>
          <div className="team-grid">{team.map((member, index) => { const Icon = member.icon; return <article className="team-card" key={member.title}><div className="team-card-head"><span className={`team-icon team-icon-${index + 1}`}><Icon size={24} /></span><span className="team-index">0{index + 1}</span></div><h3>{member.title}</h3><p>{member.text}</p></article>; })}</div>
        </div>
      </section>

      <Developers />

      <section className="section process-section" id="about">
        <div className="container process-layout">
          <div className="process-intro"><span className="section-kicker">روش همکاری با ما</span><h2>شفاف، مرحله‌ای و بدون پیچیدگی اضافه</h2><p>شما همیشه می‌دانید پروژه در چه مرحله‌ای است، خروجی بعدی چیست و هر تصمیم چرا گرفته می‌شود.</p><div className="process-note"><Rocket size={22} /><div><b>شروع سریع</b><span>اولین مسیر پیشنهادی پس از جلسه شناخت ارائه می‌شود.</span></div></div></div>
          <div className="steps">{process.map((step, index) => <article className="step" key={step.title}><span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div>{index < process.length - 1 && <MoveLeft className="step-arrow" size={19} />}</article>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container"><div className="contact-card">
          <div className="contact-orb" aria-hidden="true"><MoonStar size={94} strokeWidth={0.8} /></div>
          <div className="contact-copy"><span className="contact-label">یک ایده دارید؟</span><h2>بیایید با هم آن را به یک محصول واقعی تبدیل کنیم.</h2><p>در یک گفت‌وگوی کوتاه، نیاز شما را بررسی می‌کنیم و مسیر مناسب را پیشنهاد می‌دهیم.</p></div>
          <div className="contact-actions"><a className="button button-white" href={`tel:${CONTACT.phone}`}><Phone size={18} />{CONTACT.phoneFa}</a><a className="contact-phone" href={`mailto:${EMAIL}`}><Mail size={17} />{EMAIL}</a><span className="placeholder-note"><Clock size={14} />ساعت پاسخگویی: {CONTACT.hours}</span></div>
        </div>

        <div className="contact-info">
          <div className="info-item"><span className="info-icon"><MapPin size={18} /></span><div><b>آدرس</b><p>{CONTACT.address}</p></div></div>
          <div className="info-item"><span className="info-icon"><Phone size={18} /></span><div><b>تلفن</b><p><a href={`tel:${CONTACT.phone}`} dir="ltr">{CONTACT.phoneFa}</a></p></div></div>
          <div className="info-item"><span className="info-icon"><Mail size={18} /></span><div><b>پست الکترونیکی</b><p><a href={`mailto:${EMAIL}`} dir="ltr">{EMAIL}</a></p></div></div>
          <div className="info-item"><span className="info-icon"><Clock size={18} /></span><div><b>ساعت پاسخگویی</b><p>{CONTACT.hours}</p></div></div>
        </div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
