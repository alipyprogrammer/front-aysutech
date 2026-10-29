import { Clock, Code2, Mail, MapPin, Phone } from "lucide-react";
import BrandLogo from "@/components/brand-logo";
import { CONTACT, EMAIL, ENAMAD_LINK, ENAMAD_LOGO } from "@/lib/site-info";

/* فوتر مشترک همه‌ی صفحه‌ها (base مثل هدر) */
export default function SiteFooter({ base = "" }: { base?: "" | "/" }) {
  return (
    <footer>
      <div className="container footer-main">
        <div className="footer-brand"><BrandLogo footer href={base ? "/" : "#top"} /><p>راهکارهای هوشمند، برای رشد واقعی.</p></div>
        <div className="footer-links"><b>دسترسی سریع</b><a href={`${base}#services`}>خدمات</a><a href={`${base}#assistant`}>دستیار فروش</a><a href="/iot">محصولات IoT</a><a href={`${base}#developers`}>سازندگان</a><a href={`${base}#contact`}>تماس با ما</a></div>
        <div className="footer-links"><b>حوزه‌ها</b><a href={`${base}#services`}>برنامه‌نویسی</a><a href="/iot">هوشمندسازی</a><a href={`${base}#services`}>مارکتینگ</a></div>
        <div className="footer-contact"><b>ارتباط با ما</b>
        <a dir="ltr">{CONTACT.codePostal} :کد پستی<Phone size={16} /></a> 
        <a href={`mailto:${EMAIL}`}>{EMAIL}<Mail size={16} /></a><span className="footer-address">{CONTACT.addressShort}<MapPin size={16} /></span><span className="footer-address">ساعت پاسخگویی {CONTACT.hours}<Clock size={16} /></span></div>
        <div className="footer-trust"><b>نماد اعتماد</b>
          
              <a
      referrerPolicy="origin"
      target="_blank"
      rel="noopener"
      href="https://trustseal.enamad.ir/?id=7877441&Code=2eS8JfiHhxDn2MQ3sWORLPLtN8i5WNG2"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        referrerPolicy="origin"
        src="https://trustseal.enamad.ir/logo.aspx?id=7877441&Code=2eS8JfiHhxDn2MQ3sWORLPLtN8i5WNG2"
        alt="نماد اعتماد الکترونیکی"
        style={{ cursor: "pointer" }}
        {...{ code: "2eS8JfiHhxDn2MQ3sWORLPLtN8i5WNG2" }}
      />
    </a>
          
        </div>
      </div>
      <div className="container footer-bottom"><span>© ۱۴۰۵ آیسو تک — تمامی حقوق محفوظ است.</span><span>طراحی و توسعه با <Code2 size={14} /> در Aysutech</span></div>
    </footer>
  );
}
