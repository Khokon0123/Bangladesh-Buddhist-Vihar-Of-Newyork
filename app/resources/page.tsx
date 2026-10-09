"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { useLang } from "@/components/LanguageProvider";
import { loc, num, type WithBn } from "@/lib/i18n";

const en = {
  heroAlt: "Buddhist Digital Resource Center",
  searchPh: "Search resources...",
  none: "No resources found matching your criteria.",
  clear: "Clear filters",
  helpTitle: "Need Help Finding Resources?",
  helpText: "Our teachers can help guide you to the right resources for your practice and learning goals.",
  contact: "Contact Our Teachers",
  pdf: "PDF",
  video: "Video",
  external: "External Link",
  categories: { All: "All", Sutras: "Sutras", Meditation: "Meditation", Teachings: "Teachings", Practice: "Practice", Reference: "Reference" },
  found: (n: string, one: boolean) => `${n} ${one ? "resource" : "resources"} found`,
  inCategory: (c: string) => ` in ${c}`,
  forQuery: (q: string) => ` for "${q}"`,
};

const bn: typeof en = {
  heroAlt: "বৌদ্ধ ডিজিটাল রিসোর্স সেন্টার",
  searchPh: "উপকরণ খুঁজুন...",
  none: "আপনার খোঁজের সাথে মেলে এমন কোনো উপকরণ পাওয়া যায়নি।",
  clear: "ফিল্টার মুছুন",
  helpTitle: "উপকরণ খুঁজে পেতে সাহায্য প্রয়োজন?",
  helpText: "আপনার সাধনা ও শিক্ষার লক্ষ্য অনুযায়ী সঠিক উপকরণ খুঁজে পেতে আমাদের গুরুগণ আপনাকে সাহায্য করতে পারেন।",
  contact: "আমাদের গুরুদের সাথে যোগাযোগ করুন",
  pdf: "পিডিএফ",
  video: "ভিডিও",
  external: "বাহ্যিক লিংক",
  categories: { All: "সব", Sutras: "সূত্র", Meditation: "ধ্যান", Teachings: "শিক্ষা", Practice: "অনুশীলন", Reference: "সহায়িকা" },
  found: (n: string) => `${n}টি উপকরণ পাওয়া গেছে`,
  inCategory: (c: string) => ` (${c})`,
  forQuery: (q: string) => ` — “${q}”`,
};

// Icon Components
const PDFIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const VideoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "pdf" | "video" | "external";
  url: string;
  author?: string;
  duration?: string;
}

// Sample resource data - in a real app, this would come from a CMS or database
const resources: WithBn<Resource>[] = [
  {
    id: "dhammapada-pdf",
    title: "The Dhammapada (PDF)",
    description: "Complete text of the Dhammapada with commentary",
    category: "Sutras",
    type: "pdf",
    url: "#",
    author: "Various Translators",
    bn: { title: "ধম্মপদ (পিডিএফ)", description: "অট্ঠকথাসহ ধম্মপদের পূর্ণাঙ্গ পাঠ", author: "বিভিন্ন অনুবাদক" },
  },
  {
    id: "meditation-guide",
    title: "Meditation Guide for Beginners",
    description: "Step-by-step guide to starting your meditation practice",
    category: "Meditation",
    type: "pdf",
    url: "#",
    author: "Venerable Master Chen",
    bn: { title: "নবীনদের জন্য ধ্যান নির্দেশিকা", description: "ধ্যান অনুশীলন শুরু করার ধাপে ধাপে নির্দেশিকা", author: "শ্রদ্ধেয় মাস্টার চেন" },
  },
  {
    id: "buddhist-philosophy-video",
    title: "Introduction to Buddhist Philosophy",
    description: "Video series exploring core Buddhist concepts",
    category: "Teachings",
    type: "video",
    url: "#",
    author: "Venerable Bhikkhuni Sunita",
    duration: "45 min",
    bn: { title: "বৌদ্ধ দর্শনের পরিচিতি", description: "বৌদ্ধধর্মের মূল ধারণাগুলো নিয়ে ভিডিও সিরিজ", author: "শ্রদ্ধেয় ভিক্ষুণী সুনীতা", duration: "৪৫ মিনিট" },
  },
  {
    id: "mindfulness-practice",
    title: "Mindfulness Practice Resources",
    description: "Collection of mindfulness exercises and practices",
    category: "Practice",
    type: "external",
    url: "#",
    bn: { title: "সচেতনতা চর্চার উপকরণ", description: "সচেতনতা চর্চার অনুশীলন ও কৌশলের সংকলন" },
  },
  {
    id: "heart-sutra-pdf",
    title: "The Heart Sutra (PDF)",
    description: "Translation and commentary on the Heart Sutra",
    category: "Sutras",
    type: "pdf",
    url: "#",
    author: "Thich Nhat Hanh",
    bn: { title: "হৃদয় সূত্র (পিডিএফ)", description: "হৃদয় সূত্রের অনুবাদ ও ব্যাখ্যা", author: "থিক নাত হান" },
  },
  {
    id: "walking-meditation-video",
    title: "Walking Meditation Instruction",
    description: "Video guide to practicing walking meditation",
    category: "Meditation",
    type: "video",
    url: "#",
    author: "Venerable Ajahn Somchai",
    duration: "20 min",
    bn: { title: "চংক্রমণ ধ্যানের নির্দেশনা", description: "চংক্রমণ ধ্যান অনুশীলনের ভিডিও নির্দেশিকা", author: "শ্রদ্ধেয় আজান সমচাই", duration: "২০ মিনিট" },
  },
  {
    id: "buddhist-dictionary",
    title: "Buddhist Terms Dictionary",
    description: "Comprehensive dictionary of Buddhist terminology",
    category: "Reference",
    type: "external",
    url: "#",
    bn: { title: "বৌদ্ধ পরিভাষা অভিধান", description: "বৌদ্ধ পরিভাষার একটি পূর্ণাঙ্গ অভিধান" },
  },
  {
    id: "compassion-practice-pdf",
    title: "Compassion Practice Guide",
    description: "Detailed guide to loving-kindness and compassion practices",
    category: "Practice",
    type: "pdf",
    url: "#",
    author: "Venerable Bhikkhuni Pema",
    bn: { title: "করুণা অনুশীলন নির্দেশিকা", description: "মৈত্রী ও করুণা অনুশীলনের বিস্তারিত নির্দেশিকা", author: "শ্রদ্ধেয় ভিক্ষুণী পেমা" },
  },
  {
    id: "zen-teachings-video",
    title: "Zen Teachings Series",
    description: "Video series on Zen Buddhism and meditation",
    category: "Teachings",
    type: "video",
    url: "#",
    author: "Venerable Master Wang",
    duration: "60 min",
    bn: { title: "জেন শিক্ষা সিরিজ", description: "জেন বৌদ্ধধর্ম ও ধ্যান নিয়ে ভিডিও সিরিজ", author: "শ্রদ্ধেয় মাস্টার ওয়াং", duration: "৬০ মিনিট" },
  },
  {
    id: "sutra-library",
    title: "Digital Sutra Library",
    description: "Online collection of Buddhist sutras and texts",
    category: "Sutras",
    type: "external",
    url: "#",
    bn: { title: "ডিজিটাল সূত্র গ্রন্থাগার", description: "বৌদ্ধ সূত্র ও গ্রন্থের অনলাইন সংকলন" },
  },
  {
    id: "meditation-schedule",
    title: "Meditation Schedule Template",
    description: "Printable template for tracking your meditation practice",
    category: "Practice",
    type: "pdf",
    url: "#",
    bn: { title: "ধ্যানের সময়সূচি টেমপ্লেট", description: "আপনার ধ্যান অনুশীলনের হিসাব রাখার জন্য প্রিন্টযোগ্য টেমপ্লেট" },
  },
  {
    id: "buddhist-ethics-video",
    title: "Buddhist Ethics and Precepts",
    description: "Video lecture on Buddhist ethical guidelines",
    category: "Teachings",
    type: "video",
    url: "#",
    author: "Venerable Master Li",
    duration: "35 min",
    bn: { title: "বৌদ্ধ নৈতিকতা ও শীল", description: "বৌদ্ধ নৈতিক নির্দেশনা নিয়ে ভিডিও বক্তৃতা", author: "শ্রদ্ধেয় মাস্টার লি", duration: "৩৫ মিনিট" },
  },
];

const categories = ["All", "Sutras", "Meditation", "Teachings", "Practice", "Reference"] as const;
type Category = (typeof categories)[number];

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const { lang } = useLang();
  const ui = lang === "bn" ? bn : en;
  const getIcon = () => {
    switch (resource.type) {
      case "pdf":
        return <PDFIcon />;
      case "video":
        return <VideoIcon />;
      case "external":
        return <ExternalLinkIcon />;
    }
  };

  const getTypeLabel = () => {
    switch (resource.type) {
      case "pdf":
        return ui.pdf;
      case "video":
        return ui.video;
      case "external":
        return ui.external;
    }
  };

  const getTypeColor = () => {
    switch (resource.type) {
      case "pdf":
        return "bg-red-100 text-red-700";
      case "video":
        return "bg-blue-100 text-blue-700";
      case "external":
        return "bg-green-100 text-green-700";
    }
  };

  const cardContent = (
    <div className="bg-white rounded-xl p-6 border border-neutral-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gentle h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className={`p-2 rounded-lg ${getTypeColor()}`}>
              {getIcon()}
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor()}`}>
              {getTypeLabel()}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary transition-colors duration-300">
            {resource.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-600 text-sm mb-4 leading-relaxed flex-1">
        {resource.description}
      </p>

      {/* Footer */}
      <div className="pt-4 border-t border-neutral-100">
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-3">
            {resource.author && <span>{resource.author}</span>}
            {resource.duration && (
              <>
                {resource.author && <span>•</span>}
                <span>{resource.duration}</span>
              </>
            )}
          </div>
          <span className="text-primary font-medium">{ui.categories[resource.category as Category]}</span>
        </div>
      </div>
    </div>
  );

  if (resource.type === "external") {
    return (
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <a
      href={resource.url}
      download={resource.type === "pdf"}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {cardContent}
    </a>
  );
};

export default function ResourcesPage() {
  const { lang } = useLang();
  const t = lang === "bn" ? bn : en;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredResources = useMemo(() => {
    return resources.map((r) => loc(r, lang)).filter((resource) => {
      const matchesSearch =
        searchQuery === "" ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.author?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, lang]);

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "300px" }}>
        <img
          src="/images/Buddhist_Digital_Resource_Center_Logo.jpg"
          alt={t.heroAlt}
          style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "center center", display: "block" }}
        />
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/95 border-b border-neutral-200 sticky top-[var(--header-h,64px)] z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder={t.searchPh}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-neutral-900 placeholder-neutral-400"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-soft"
                      : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  {t.categories[category]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-neutral-600">
                {t.found(num(filteredResources.length, lang), filteredResources.length === 1)}
                {selectedCategory !== "All" && t.inCategory(t.categories[selectedCategory])}
                {searchQuery && t.forQuery(searchQuery)}
              </p>
            </div>

            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-neutral-600 mb-4">
                  {t.none}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  {t.clear}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary-dark mb-4">
              {t.helpTitle}
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              {t.helpText}
            </p>
            <Link
              href="/venerable-introduction"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t.contact}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

