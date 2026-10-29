  /** اطلاعات رسمی کسب‌وکار — برای تماس با ما، فوتر و نماد اعتماد */
  export const CONTACT = {
    addressShort: "تهران، بهاران، بلوار کوهسار، خیابان بنفشه ۳",
    address:"استان : تهران - شهرستان : تهران - بخش : مرکزی - شهر : تهران - محله : بهاران - بلوار کوهسار - خیابان بنفشه 3 - پلاک : 7.0 - طبقه : 1 - واحد : ",
    phone: "09103103550",
    phoneFa: "۰۹۱۰ ۳۱۰ ۳۵۵۰",
    codePostal: "1488865361",
    emailUser: "ali.pyprogrammer",
    emailDomain: "gmail.com",
    hours: "۱۰:۰۰ الی ۲۱:۰۰",
  };
  export const EMAIL = `${CONTACT.emailUser}@${CONTACT.emailDomain}`;

  /** نماد اعتماد الکترونیکی */
  export const ENAMAD = {
    id: "7877441",
    code: "2eS8JfiHhxDn2MQ3sWORLPLtN8i5WNG2",
  };
  export const ENAMAD_LINK = `https://trustseal.enamad.ir/?id=${ENAMAD.id}&code=${ENAMAD.code}`;
  export const ENAMAD_LOGO = `https://trustseal.enamad.ir/logo.aspx?id=${ENAMAD.id}&Code=${ENAMAD.code}`;

  /** توسعه‌دهندگان */
  export const DEVELOPERS = [
    {
      name: "علی عبادی",
      role: "بک‌اند و هوش مصنوعی",
      photo: "/team/aliEbadi.jpg",
      bio: "طراحی و پیاده‌سازی دستیار هوشمند فروش: موتور پیشنهاد، سرویس مدل‌های زبانی و پنل چندمستأجری.",
      stack: ["Python", "Django", "LLM / RAG", "PostgreSQL"],
    },
    {
      name: "سینا صابری",
      role: "فرانت‌اند و تجربه کاربری",
      photo: "/team/sinaSaberi.jpg",
      bio: "ساخت رابط‌های سریع و راست‌چین: سایت، پنل مدیریت و ویجت گفتگو روی سایت مشتری‌ها.",
      stack: ["Next.js", "React", "TypeScript", "UI/UX"],
    },
  ];
