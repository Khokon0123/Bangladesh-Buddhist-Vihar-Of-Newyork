import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Merriweather } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundaryWrapper from "@/components/ErrorBoundary";
import "./globals.css";

// Calm sans-serif font for body and headings
// Optimized: preload and swap for better LCP and FOUT prevention
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Prevents FOIT (Flash of Invisible Text), shows fallback immediately
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  preload: true, // Preload critical font for faster LCP
  fallback: ["system-ui", "-apple-system", "sans-serif"], // Immediate fallback prevents layout shift
  adjustFontFallback: true, // Automatically adjust fallback font metrics to reduce CLS
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

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        className={`${inter.variable} ${merriweather.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <ErrorBoundaryWrapper>
          {/* Skip to main content link for accessibility */}
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          <Header />
          <div className="flex-1 w-full">
            {children}
          </div>
          <Footer />
        </ErrorBoundaryWrapper>
      </body>
    </html>
  );
}
