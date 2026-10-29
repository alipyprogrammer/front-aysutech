---
name: shadcn
description: Use when building or restyling UI in this project (front-aysutech) — pages, sections, cards, forms, dialogs, tabs — with shadcn/ui components, Tailwind v4 and the Aysutech design tokens. Covers which components already exist, how to add new ones without breaking RTL, theming, and the data-driven pattern for product pages like /iot.
---

# shadcn/ui در پروژه‌ی آیسو تک

## وضعیت فعلی
- تنظیمات در `components.json`: style `new-york`، `rsc: true`، baseColor `neutral`، cssVariables فعال.
- کامپوننت‌ها روی **`radix-ui`** (پکیج یکپارچه) ساخته شده‌اند؛ برای رندر لینک به شکل دکمه از `asChild` استفاده کن:
  `<Button asChild><a href="/#contact">...</a></Button>`
- کامپوننت‌های موجود در `components/ui/` (قبل از ساختن چیز جدید اینجا را نگاه کن):
  accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card,
  carousel, chart, checkbox, collapsible, combobox, command, context-menu, dialog, direction, drawer, dropdown-menu,
  empty, field, form, hover-card, input, input-group, input-otp, item, kbd, label, menubar, native-select,
  navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet,
  sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toggle, toggle-group, tooltip
  (+ کامپوننت‌های چت: attachment, bubble, marker, message, message-scroller).
- ابزار کلاس: `cn()` از `@/lib/utils` (clsx + tailwind-merge).

## افزودن کامپوننت جدید
- **بدون اجازه‌ی صریح کاربر هیچ دستوری اجرا نکن** (`npx shadcn add`، `pnpm install`، dev server).
- اگر کامپوننتی لازم بود و وجود نداشت: یا از کاربر بخواه `pnpm dlx shadcn@latest add <name>` را خودش اجرا کند،
  یا سورس رسمی new-york را دستی در `components/ui/<name>.tsx` بنویس و وابستگی‌اش را در `package.json` اضافه کن.
- فایل‌های `components/ui/*` را برای یک صفحه‌ی خاص دست‌کاری نکن؛ سفارشی‌سازی با `className` یا یک wrapper در
  `components/<feature>/` انجام شود.

## تم و رنگ
- توکن‌ها در `app/globals.css` (`:root` + `@theme inline`) تعریف شده‌اند. از کلاس‌های معنایی استفاده کن:
  `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `bg-primary`, `text-primary`,
  `bg-secondary`, `border-border`, `ring-ring`, `rounded-lg/xl`.
- رنگ برند: آبی `primary` (#155eef)، فیروزه‌ای `accent` (#13d9ce)، سرمه‌ای تیره `foreground` (#07162c).
  برای بخش‌های تیره از `bg-foreground text-background` استفاده کن نه رنگ هگز تازه.
- استایل‌های قدیمی سایت (کلاس‌هایی مثل `.button`, `.section`, `.container`) خارج از `@layer` هستند و بر utilityهای
  Tailwind غلبه می‌کنند. ریست‌های پایه (`a`, `body`, `*`) داخل `@layer base` گذاشته شده‌اند تا مزاحم Tailwind نشوند؛
  قاعده‌ی سراسری جدید را هم اگر روی تگ است داخل `@layer base` بنویس.
- `.container` کلاس سفارشی سایت است (عرض ۱۱۸۰px) و همان را برای چیدمان صفحه استفاده کن.

## راست‌به‌چپ (RTL)
- `<html dir="rtl" lang="fa">` است. همیشه از ویژگی‌های منطقی استفاده کن: `ps-*`/`pe-*`، `ms-*`/`me-*`،
  `start-*`/`end-*`، `text-start`، `rounded-s-*`. از `pl/pr/left/right` فقط وقتی جهت فیزیکی واقعاً مهم است.
- آیکون فلش «ادامه/بعدی» در RTL `ArrowLeft` است.
- برای کامپوننت‌های Radix با ناوبری کیبورد (Tabs, ToggleGroup, Menu...) `dir="rtl"` بده.
- اعداد و متن انگلیسی کوتاه (شماره تلفن، `IoT`، `Wi-Fi`) را با `dir="ltr"` یا `inline-block` جدا کن؛
  اعداد را با `toLocaleString("fa-IR")` فارسی کن.

## الگوی صفحه‌های داده‌محور (مثل /iot)
- محتوا در `lib/<feature>.ts` (آرایه‌ی تایپ‌شده)، کامپوننت‌ها در `components/<feature>/`، صفحه در `app/<feature>/page.tsx`
  فقط داده را map می‌کند. هیچ شرطی روی `slug` خاص در کامپوننت‌ها نگذار؛ اگر محصولی بخش اضافه دارد، فیلد اختیاری
  به تایپ اضافه کن (مثل `flow?`).
- چیدمان باید با ۱ آیتم و با ۱۰ آیتم هر دو درست باشد (grid با `sm:grid-cols-2 lg:grid-cols-3`، کارت «پروژه‌ی اختصاصی»
  برای پر کردن جای خالی).
- صفحه‌ها Server Component هستند؛ کامپوننت‌های تعاملی shadcn (`tabs`, `accordion`, ...) خودشان `"use client"` دارند
  و می‌شود مستقیم در Server Component استفاده‌شان کرد.

## چک‌لیست قبل از تحویل
- فقط کلاس‌های معنایی/توکن‌ها، بدون رنگ هگز تازه در JSX.
- موبایل (۳۷۵px): بدون اسکرول افقی، دکمه‌ها تمام‌عرض یا wrap.
- `alt` فارسی برای تصاویر، `aria-label` برای دکمه‌های فقط-آیکون.
