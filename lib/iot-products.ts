import { Cpu, Radio, Send, type LucideIcon } from "lucide-react";

/**
 * محصولات IoT آیسو تک — برای افزودن/ویرایش محصول فقط همین فایل را عوض کن.
 * صفحه /iot و کاتالوگ به‌صورت خودکار از همین آرایه ساخته می‌شوند.
 * عکس‌ها را در public/iot/ بگذار و مسیرشان را در image بنویس (png/jpg/webp/svg).
 */
export type IotProduct = {
  slug: string;
  name: string;
  /** دسته‌بندی کوتاه برای کارت کاتالوگ، مثلاً «ارتباطات» یا «پایش محیط» */
  category: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  status: "available" | "preorder" | "soon";
  /** ۲ تا ۳ مشخصه‌ی کلیدی که روی کارت و کنار عکس نشان داده می‌شود */
  highlights: { label: string; value: string }[];
  features: string[];
  specs: { label: string; value: string }[];
  uses: string[];
  /** اختیاری: مراحل «نحوه کار» دستگاه */
  flow?: { icon: LucideIcon; title: string; text: string }[];
};

export const IOT_PRODUCTS: IotProduct[] = [
  {
    slug: "sms-to-telegram",
    name: "ماژول انتقال پیامک به تلگرام",
    category: "ارتباطات",
    tagline: "هر پیامکی که روی سیم‌کارت بیاید، همان لحظه در تلگرام شما",
    description:
      "سیم‌کارت را داخل ماژول بگذارید و برقش را وصل کنید؛ پیامک‌های دریافتی (کد تأیید، پیامک بانکی، پیام مشتری) " +
      "خودکار به ربات یا گروه تلگرامی شما فرستاده می‌شود. دیگر لازم نیست گوشی دوم همراهتان باشد.",
    image: "/iot/sms-to-telegram.svg",
    imageAlt: "ماژول سیم‌کارت که پیامک‌های دریافتی را به تلگرام می‌فرستد",
    badge: "محصول جدید",
    status: "available",
    highlights: [
      { label: "زمان تحویل پیام", value: "چند ثانیه" },
      { label: "اتصال", value: "Wi-Fi" },
      { label: "تغذیه", value: "USB ۵ ولت" },
    ],
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
    flow: [
      { icon: Radio, title: "پیامک می‌رسد", text: "سیم‌کارت داخل ماژول مثل یک گوشی پیامک را دریافت می‌کند." },
      { icon: Cpu, title: "ماژول پردازش می‌کند", text: "فرستنده، متن و زمان پیامک استخراج و آماده ارسال می‌شود." },
      { icon: Send, title: "تلگرام شما خبر می‌دهد", text: "پیام در کمتر از چند ثانیه در ربات یا گروه تلگرامی شما است." },
    ],
  },
];

export const IOT_STATUS_LABEL: Record<IotProduct["status"], string> = {
  available: "آماده سفارش",
  preorder: "پیش‌سفارش",
  soon: "به‌زودی",
};
