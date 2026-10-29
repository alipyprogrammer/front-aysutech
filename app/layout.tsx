import type { Metadata } from "next";
import "./globals.css";
import AssistantEmbed from "@/components/assistant-embed";

export const metadata: Metadata = {
  title: "آیسو تک | فناوری برای رشد کسب‌وکار",
  description: "خدمات دستیار هوشمند فروش، برنامه‌نویسی اختصاصی، هوشمندسازی و مارکتینگ داده‌محور در آیسو تک.",
  keywords: ["آیسو تک", "Aysutech", "دستیار هوشمند فروش", "برنامه نویسی", "هوشمند سازی", "مارکتینگ"],
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/apple-touch-icon.png" },
  openGraph: { images: ["/brand/aysutech-logo.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300..900&display=swap" />
      </head>
      <body>{children}<AssistantEmbed /></body>
    </html>
  );
}
