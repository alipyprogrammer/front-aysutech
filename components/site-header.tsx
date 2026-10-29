import { ArrowLeft, Menu, X } from "lucide-react";
import BrandLogo from "@/components/brand-logo";

/* هدر مشترک همه‌ی صفحه‌ها.
   روی صفحه‌ی اصلی base="" (لینک‌ها #بخش) و در صفحه‌های دیگر base="/" (لینک‌ها /#بخش) */
export default function SiteHeader({ base = "", active }: { base?: "" | "/"; active?: "iot" }) {
  const links = [
    { href: `${base}#services`, label: "خدمات" },
    { href: `${base}#assistant`, label: "دستیار فروش" },
    { href: `${base}#get-assistant`, label: "دستیار بگیرید" },
    { href: "/iot", label: "محصولات IoT", key: "iot" },
    { href: "/terms", label: "قوانین و مقررات", key: "terms" },
    { href: `${base}#team`, label: "تیم برنامه‌نویسی" },
    { href: `${base}#about`, label: "درباره ما" },
  ];
  const cls = (key?: string) => (key && key === active ? "is-active" : undefined);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLogo href={base ? "/" : "#top"} />
        <nav className="desktop-nav" aria-label="منوی اصلی">
          {links.map((l) => <a key={l.href} href={l.href} className={cls(l.key)} aria-current={cls(l.key) ? "page" : undefined}>{l.label}</a>)}
        </nav>
        <a className="nav-cta" href={`${base}#contact`}>شروع همکاری<ArrowLeft size={17} /></a>
        <details className="mobile-nav">
          <summary aria-label="باز کردن منو"><Menu className="menu-open" size={22} /><X className="menu-close" size={22} /></summary>
          <div className="mobile-nav-panel">
            {links.map((l) => <a key={l.href} href={l.href} className={cls(l.key)}>{l.label}</a>)}
            <a href={`${base}#contact`}>شروع همکاری</a>
          </div>
        </details>
      </div>
    </header>
  );
}
