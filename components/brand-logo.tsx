/* لوگوی آیسو تک — فایل‌ها در public/brand/
   aysutech-mark.webp : فقط نشان (ماه و موج) برای هدر و فوتر
   aysutech-logo.webp : لوگوی کامل با نوشته                                   */
export default function BrandLogo({ footer = false, href = "/" }: { footer?: boolean; href?: string }) {
  return (
    <a className="brand" href={href} aria-label="آیسو تک - صفحه نخست">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="brand-mark" src="/brand/aysutech-mark.webp" alt="" width={46} height={46} aria-hidden="true" />
      <span className="brand-name"><b>Aysu</b><em>Tech</em>{footer && <small>آب + ماه، فناوری برای فردا</small>}</span>
    </a>
  );
}
