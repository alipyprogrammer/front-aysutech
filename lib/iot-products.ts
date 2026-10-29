/**
 * محصولات IoT آیسو تک — برای افزودن/ویرایش محصول فقط همین فایل را عوض کن.
 * عکس‌ها را در public/iot/ بگذار و مسیرشان را در image بنویس (png/jpg/webp/svg).
 */
export type IotProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  status: "available" | "preorder" | "soon";
  features: string[];
  specs: { label: string; value: string }[];
  uses: string[];
};

export const IOT_PRODUCTS: IotProduct[] = [
  {
    slug: "sms-to-telegram",
    name: "ماژول انتقال پیامک به تلگرام",
    tagline: "هر پیامکی که روی سیم‌کارت بیاید، همان لحظه در تلگرام شما",
    description:
      "سیم‌کارت را داخل ماژول بگذارید و برقش را وصل کنید؛ پیامک‌های دریافتی (کد تأیید، پیامک بانکی، پیام مشتری) " +
      "خودکار به ربات یا گروه تلگرامی شما فرستاده می‌شود. دیگر لازم نیست گوشی دوم همراهتان باشد.",
    image: "/iot/sms-to-telegram.svg",
    imageAlt: "ماژول سیم‌کارت که پیامک‌های دریافتی را به تلگرام می‌فرستد",
    badge: "محصول جدید",
    status: "available",
    features: [
      "ارسال فوری پیامک‌های دریافتی به تلگرام",
      "ارسال به چند نفر یا یک گروه تلگرامی",
      "نمایش شماره فرستنده و زمان دریافت",
      "گزارش آنلاین بودن و کیفیت آنتن دستگاه",
      "راه‌اندازی ساده؛ بدون نیاز به گوشی و برنامه",
    ],
    specs: [
      { label: "سیم‌کارت", value: "یک سیم‌کارت معمولی (همه اپراتورها)" },
      { label: "اتصال اینترنت", value: "Wi-Fi" },
      { label: "مقصد", value: "ربات، کاربر یا گروه تلگرام" },
      { label: "تغذیه", value: "آداپتور ۵ ولت (USB)" },
    ],
    uses: ["دریافت کد تأیید سیم‌کارت شرکتی", "پیامک‌های بانکی و درگاه پرداخت", "خط پشتیبانی فروشگاه", "سیم‌کارت‌های خارج از دسترس"],
  },
];

export const IOT_STATUS_LABEL: Record<IotProduct["status"], string> = {
  available: "آماده سفارش",
  preorder: "پیش‌سفارش",
  soon: "به‌زودی",
};
