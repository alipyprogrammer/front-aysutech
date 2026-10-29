/**
 * تنظیمات دستیار آیسو تک — اینجا را ویرایش کن.
 *
 * در Cloudflare Workers، کد سمت سرور متغیرهای .env زمان بیلد را همیشه نمی‌بیند؛
 * برای همین مقادیر اصلی همین‌جا نوشته شده‌اند. اگر متغیر محیطی هم تعریف شده
 * باشد، آن اولویت دارد.
 */

/** آدرس سرور جنگو (می‌تواند http و روی IP باشد؛ فقط درگاه به آن وصل می‌شود) */
export const ASSISTANT_ORIGIN = "http://a1.aysutech.ir";

/** کلید عمومی دستیار خود آیسو تک (خروجی: python manage.py seed_aysutech) */
export const ASSISTANT_KEY = "sk_n7lRScrPMCFKIZ0U1XDACADigZqS9bgregbU9_fEVjs";

/** آدرس پنل مدیریت (لینک «ورود به پنل») */
export const PANEL_URL = `${ASSISTANT_ORIGIN}/panel`;

/** مسیر درگاه روی همین سایت. همه‌ی سایت‌ها به https://aysutech.ir/assistant وصل می‌شوند. */
export const GATEWAY_PATH = "/assistant";
