import type { Metadata } from "next";
import { Anek_Bangla, Merriweather } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundaryWrapper from "@/components/ErrorBoundary";
import { LanguageProvider } from "@/components/LanguageProvider";
import { getLang } from "@/lib/getLang";
import { dictionaries } from "@/lib/i18n";
import { getUpcomingEvents } from "@/lib/server/kv";
import type { CSSProperties } from "react";
import "./globals.css";

// Main font for both English and Bangla text
const anekBangla = Anek_Bangla({
  subsets: ["bengali", "latin"],
  display: "swap",
  variable: "--font-anek-bangla",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

// Serif font for quotes and special text
// Optimized: only load when needed (quotes are typically below fold)
const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  preload: false, // Don't preload as it's used below fold
  fallback: ["Georgia", "serif"],
  adjustFontFallback: true, // Match fallback metrics to prevent CLS
});

const baseMetadata: Metadata = {
  title: {
    default: "Bangladesh Buddhist Vihara Of New York | Peace, Wisdom, and Compassion",
    template: "%s | Bangladesh Buddhist Vihara Of New York",
  },
  description:
    "A place of peace, wisdom, and compassion. Explore Buddhist teachings, meditation practices, and spiritual guidance.",
  keywords: [
    "Buddhism",
    "meditation",
    "spiritual practice",
    "mindfulness",
    "Buddhist teachings",
    "compassion",
    "wisdom",
    "peace",
  ],
  authors: [{ name: "Bangladesh Buddhist Vihara Of New York" }],
  creator: "Bangladesh Buddhist Vihara Of New York",
  publisher: "Bangladesh Buddhist Vihara Of New York",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.NODE_ENV === "production" 
      ? "https://yourdomain.com" 
      : "http://localhost:3000")
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Bangladesh Buddhist Vihara Of New York",
    title: "Bangladesh Buddhist Vihara Of New York | Peace, Wisdom, and Compassion",
    description:
      "A place of peace, wisdom, and compassion. Explore Buddhist teachings, meditation practices, and spiritual guidance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bangladesh Buddhist Vihara Of New York",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bangladesh Buddhist Vihara Of New York | Peace, Wisdom, and Compassion",
    description:
      "A place of peace, wisdom, and compassion. Explore Buddhist teachings, meditation practices, and spiritual guidance.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// Tab title and description follow the visitor's language.
export function generateMetadata(): Metadata {
  if (getLang() !== "bn") return baseMetadata;
  const title = "বাংলাদেশ বৌদ্ধ বিহার, নিউ ইয়র্ক | শান্তি, প্রজ্ঞা ও করুণা";
  const description = "শান্তি, প্রজ্ঞা ও করুণার এক আশ্রয়স্থল। বুদ্ধের শিক্ষা, ধ্যান অনুশীলন ও আধ্যাত্মিক দিকনির্দেশনা অন্বেষণ করুন।";
  return {
    ...baseMetadata,
    title: { default: title, template: "%s | বাংলাদেশ বৌদ্ধ বিহার, নিউ ইয়র্ক" },
    description,
    openGraph: { ...baseMetadata.openGraph, locale: "bn_BD", title, description },
    twitter: { ...baseMetadata.twitter, title, description },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = getLang();
  const upcoming = await getUpcomingEvents();
  // 64px nav + 36px events bar; fixed header spacer and sticky filter bars read this.
  const headerHeight = { "--header-h": upcoming.length > 0 ? "100px" : "64px" } as CSSProperties;
  return (
    <html lang={lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for social media */}
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
      </head>
      <body
        className={`${anekBangla.variable} ${merriweather.variable} font-sans antialiased flex flex-col min-h-screen`}
        style={headerHeight}
      >
        <LanguageProvider lang={lang}>
        <ErrorBoundaryWrapper>
          {/* Skip to main content link for accessibility */}
          <a href="#main-content" className="skip-to-main">
            {dictionaries[lang].skipToContent}
          </a>
          <Header upcoming={upcoming} />
          <div className="flex-1 w-full">
            {children}
          </div>
          <Footer />
        </ErrorBoundaryWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
