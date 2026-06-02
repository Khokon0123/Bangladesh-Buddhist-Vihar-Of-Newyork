/**
 * Site Configuration
 * Centralized site metadata and configuration
 */

import { SiteConfig } from "@/lib/types/content";

export const siteConfig: SiteConfig = {
  name: "Bangladesh Buddhist Vihara Of New York",
  description: "A place of peace, wisdom, and compassion. Explore Buddhist teachings, meditation practices, and spiritual guidance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  socialLinks: {
    facebook: "https://www.facebook.com/mudita.bhikkhu",
    instagram: "https://www.instagram.com/buddhisttemple",
    youtube: "https://www.youtube.com/buddhisttemple",
  },
  contact: {
    email: "info@buddhisttemple.org",
    phone: "+1 (555) 123-4567",
    address: "Queens, NY, USA",
  },
  footer: {
    quote: "Peace comes from within. Do not seek it without.",
    quoteAuthor: "Buddha",
    copyright: `© ${new Date().getFullYear()} Bangladesh Buddhist Vihara Of New York. All rights reserved.`,
  },
};

