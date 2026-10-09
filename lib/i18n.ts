// UI strings in English and Bangla. Add a key to `en`, then TypeScript forces the same key in `bn`.

export type Lang = "en" | "bn";

const en = {
  siteName: "Bangladesh Buddhist Vihara Of New York",
  skipToContent: "Skip to main content",
  switchTo: "বাংলা",
  aria: {
    mainNav: "Main navigation",
    home: "Home",
    search: "Search",
    searchSite: "Search the site",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileMenu: "Mobile navigation menu",
    mobileNav: "Mobile navigation",
    footerNav: "Footer navigation",
  },
  nav: {
    home: "Home",
    learnBuddhism: "Learn Buddhism",
    venerables: "Venerable Introduction",
    blog: "Blog",
    events: "Events",
    book: "Book",
    resources: "Resources",
    dhammaSchool: "Dhamma School",
    meditation: "Meditation",
    about: "About",
  },
  search: {
    placeholder: "Search pages, articles, books, events…",
    noResults: "No results for",
    kinds: { page: "Page", blog: "Blog", book: "Book", event: "Event" },
  },
  footer: {
    tagline: "A sanctuary for peace, wisdom, and compassion in the heart of Queens, New York.",
    quote: "Peace comes from within. Do not seek it without.",
    quoteAuthor: "Buddha",
    quickLinks: "Quick Links",
    connect: "Connect",
    follow: "Follow us for daily inspiration, teachings, and updates from our temple community.",
    copyright: "Bangladesh Buddhist Vihara Of New York. All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  home: {
    heroTitle: "Welcome to Peace",
    heroSubtitle: "A sanctuary for wisdom, compassion, and inner transformation",
    heroQuote: "The mind is everything. What you think you become.",
    heroQuoteAuthor: "Buddha",
    cta: "Begin Your Journey",
    exploreTitle: "Explore Our Path",
    exploreSubtitle: "Discover teachings, practices, and community that guide you toward inner peace and wisdom",
    learnMore: "Learn More",
    learnTitle: "Learn Buddhism",
    learnText: "Explore the profound teachings of the Buddha, understand the Four Noble Truths, and discover the path to enlightenment.",
    meditateTitle: "Practice Meditation",
    meditateText: "Cultivate mindfulness and inner peace through guided meditation sessions and mindfulness practices for daily life.",
    venerablesTitle: "Meet the Venerables",
    venerablesText: "Connect with our respected teachers and learn from their wisdom, experience, and compassionate guidance.",
  },
};

export type Dict = typeof en;

const bn: Dict = {
  siteName: "বাংলাদেশ বৌদ্ধ বিহার, নিউ ইয়র্ক",
  skipToContent: "মূল বিষয়বস্তুতে যান",
  switchTo: "English",
  aria: {
    mainNav: "প্রধান নেভিগেশন",
    home: "হোম",
    search: "খুঁজুন",
    searchSite: "সাইটে খুঁজুন",
    openMenu: "মেনু খুলুন",
    closeMenu: "মেনু বন্ধ করুন",
    mobileMenu: "মোবাইল নেভিগেশন মেনু",
    mobileNav: "মোবাইল নেভিগেশন",
    footerNav: "ফুটার নেভিগেশন",
  },
  nav: {
    home: "হোম",
    learnBuddhism: "বৌদ্ধধর্ম শিক্ষা",
    venerables: "ভান্তে পরিচিতি",
    blog: "ব্লগ",
    events: "অনুষ্ঠান",
    book: "বই",
    resources: "উপকরণ",
    dhammaSchool: "ধর্মীয় বিদ্যালয়",
    meditation: "ধ্যান",
    about: "আমাদের কথা",
  },
  search: {
    placeholder: "পৃষ্ঠা, প্রবন্ধ, বই, অনুষ্ঠান খুঁজুন…",
    noResults: "কিছু পাওয়া যায়নি:",
    kinds: { page: "পৃষ্ঠা", blog: "ব্লগ", book: "বই", event: "অনুষ্ঠান" },
  },
  footer: {
    tagline: "নিউ ইয়র্কের কুইন্সের প্রাণকেন্দ্রে শান্তি, প্রজ্ঞা ও করুণার এক আশ্রয়স্থল।",
    quote: "শান্তি আসে ভেতর থেকে। বাইরে তা খুঁজো না।",
    quoteAuthor: "বুদ্ধ",
    quickLinks: "দ্রুত লিংক",
    connect: "যুক্ত থাকুন",
    follow: "প্রতিদিনের অনুপ্রেরণা, ধর্মদেশনা ও বিহারের খবরাখবরের জন্য আমাদের অনুসরণ করুন।",
    copyright: "বাংলাদেশ বৌদ্ধ বিহার, নিউ ইয়র্ক। সর্বস্বত্ব সংরক্ষিত।",
    privacy: "গোপনীয়তা নীতি",
    terms: "ব্যবহারের শর্তাবলি",
  },
  home: {
    heroTitle: "শান্তিতে স্বাগতম",
    heroSubtitle: "প্রজ্ঞা, করুণা ও অন্তরের রূপান্তরের এক আশ্রয়স্থল",
    heroQuote: "মনই সবকিছু। তুমি যা ভাবো, তা-ই হয়ে ওঠো।",
    heroQuoteAuthor: "বুদ্ধ",
    cta: "আপনার যাত্রা শুরু করুন",
    exploreTitle: "আমাদের পথ অন্বেষণ করুন",
    exploreSubtitle: "এমন শিক্ষা, অনুশীলন ও সংঘের সন্ধান করুন, যা আপনাকে অন্তরের শান্তি ও প্রজ্ঞার পথে এগিয়ে নেবে",
    learnMore: "আরও জানুন",
    learnTitle: "বৌদ্ধধর্ম শিক্ষা",
    learnText: "বুদ্ধের গভীর শিক্ষা অন্বেষণ করুন, চার আর্যসত্য উপলব্ধি করুন এবং নির্বাণের পথের সন্ধান পান।",
    meditateTitle: "ধ্যান অনুশীলন",
    meditateText: "নির্দেশিত ধ্যান ও দৈনন্দিন জীবনের স্মৃতিচর্চার মাধ্যমে সচেতনতা ও অন্তরের শান্তি গড়ে তুলুন।",
    venerablesTitle: "ভান্তেদের সাথে পরিচিত হোন",
    venerablesText: "আমাদের শ্রদ্ধেয় গুরুদের সাথে যুক্ত হোন এবং তাঁদের প্রজ্ঞা, অভিজ্ঞতা ও করুণাময় দিকনির্দেশনা থেকে শিখুন।",
  },
};

export const dictionaries: Record<Lang, Dict> = { en, bn };

// Content items carry their Bangla text in a `bn` block; loc() picks the right fields.
export type WithBn<T> = T & { bn?: Partial<T> };

export function loc<T extends object>(item: WithBn<T>, lang: Lang): T {
  return lang === "bn" && item.bn ? { ...item, ...item.bn } : item;
}

const bnDigits = "০১২৩৪৫৬৭৮৯";
// Converts Western digits in a string to Bangla digits when lang is bn.
export function num(value: string | number, lang: Lang): string {
  const s = String(value);
  return lang === "bn" ? s.replace(/\d/g, (d) => bnDigits[+d]) : s;
}
