import type { Metadata } from "next";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Lama IT Studio | Web, Mobile va IT Yechimlar",
  description:
    "Lama IT Studio — Sizning ishonchli IT hamkoringiz. Biz vebsaytlar, mobil ilovalar, SEO, dizayn, SMM, botlar, CRM tizimlar va boshqa zamonaviy yechimlar yaratamiz.",
  keywords: [
    "Lama IT Studio",
    "IT xizmatlar",
    "web sayt yasash",
    "mobil ilova",
    "SEO xizmati",
    "UI/UX dizayn",
    "CRM tizim",
    "Telegram bot",
    "smm",
    "vebsayt yaratish",
    "dasturlash",
    "Lama studio",
    "uzbek IT kompaniya"
  ],
  authors: [{ name: "Lama IT Team", url: "https://lama.uz" }],
  creator: "Lama IT Studio",
  publisher: "Lama IT Studio",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Lama IT Studio | Web, Mobile va IT Yechimlar",
    description:
      "Web saytlar, mobil ilovalar, SMM, CRM, botlar va boshqa IT xizmatlar — barchasi Lama IT Studio’da!",
    url: "https://lama.uz",
    siteName: "Lama IT Studio",
    images: [
      {
        url: "https://lama.uz/og-image.jpg", // og:image uchun rasm
        width: 1200,
        height: 630,
        alt: "Lama IT Studio - Web & IT Yechimlar",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lama IT Studio | Web, Mobile va IT Yechimlar",
    description:
      "Web saytlar, mobil ilovalar, SEO, SMM, CRM va boshqa zamonaviy IT xizmatlari.",
    site: "@lama_it",
    creator: "@lama_it",
    images: ["https://lama.uz/og-image.jpg"],
  },
  category: "technology",
  metadataBase: new URL("https://lama.uz"),
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }>; }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
