/**
 * Content Type Definitions
 * These types are CMS-ready and can be easily mapped to any headless CMS
 */

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href?: string;
  type: "link" | "dropdown";
  items?: NavSubItem[];
  order: number;
}

export interface NavSubItem {
  id: string;
  label: string;
  href: string;
  order: number;
}

// Blog/Article Types
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string; // Full content for detail pages
  category: string;
  author: string;
  authorId?: string; // Reference to venerable/author
  publishedAt: string; // ISO date string
  updatedAt?: string; // ISO date string
  readTime: string;
  imageUrl?: string;
  featured: boolean;
  tags?: string[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// Book Types
export interface Book {
  id: string;
  slug: string;
  title: string;
  author: string;
  translator?: string;
  category: string;
  description: string;
  longDescription?: string;
  pages?: number;
  language: string;
  isbn?: string;
  coverUrl?: string;
  downloadUrl?: string;
  externalUrl?: string;
  isNew: boolean;
  publishedAt?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

// Venerable/Teacher Types
export interface Venerable {
  id: string;
  slug: string;
  name: string;
  title: string;
  lineage: string;
  teachingFocus: string;
  bio?: string; // Full biography for detail pages
  imageUrl?: string;
  email?: string;
  socialLinks?: {
    website?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
  specialties?: string[];
  order: number;
}

// Resource Types
export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "pdf" | "video" | "audio" | "external" | "link";
  url: string;
  author?: string;
  duration?: string;
  fileSize?: string;
  order: number;
}

// Practice Types
export interface Practice {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  icon?: string;
  features: string[];
  gradientFrom: string;
  gradientTo: string;
  order: number;
}

// Dhamma School Types
export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  lessons: Lesson[];
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean; // For progress tracking
  order: number;
}

// Meditation Types
export interface Meditation {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: "guided" | "silent" | "walking" | "loving-kindness" | "body-scan";
  duration: string; // e.g., "10 min", "30 min"
  audioUrl?: string;
  videoUrl?: string;
  instructions?: string[];
  order: number;
}

// Event Types
export interface EventImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface TempleEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  year: number;
  description: string;
  images: EventImage[];
}

// Site Configuration Types
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo?: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
  contact: {
    email?: string;
    phone?: string;
    address?: string;
  };
  footer: {
    quote: string;
    quoteAuthor?: string;
    copyright: string;
  };
}

// Page Metadata Types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonical?: string;
}

// CMS Integration Types (for future use)
export interface CMSContent {
  id: string;
  contentType: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  status: "draft" | "published" | "archived";
}

// Generic Content Item (for CMS mapping)
export type ContentItem = Article | Book | Venerable | Resource | Practice | Course | Meditation;

