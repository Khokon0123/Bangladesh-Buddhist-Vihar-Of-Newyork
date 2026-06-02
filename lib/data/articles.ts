/**
 * Blog Articles Data
 * CMS-ready structure for blog posts
 */

import { Article } from "@/lib/types/content";

export const articles: Article[] = [
  {
    id: "understanding-mindfulness",
    slug: "understanding-mindfulness",
    title: "Understanding Mindfulness: A Beginner's Guide to Present-Moment Awareness",
    excerpt: "Discover the transformative power of mindfulness and learn practical techniques to cultivate present-moment awareness in your daily life.",
    category: "Meditation",
    author: "Venerable Master Chen",
    authorId: "venerable-master-chen",
    publishedAt: "2024-03-15T00:00:00Z",
    readTime: "8 min",
    featured: true,
    tags: ["mindfulness", "meditation", "beginner"],
    seo: {
      metaTitle: "Understanding Mindfulness: A Beginner's Guide",
      metaDescription: "Learn practical mindfulness techniques to cultivate present-moment awareness in your daily life.",
      keywords: ["mindfulness", "meditation", "awareness", "buddhism"],
    },
  },
  {
    id: "compassion-practice",
    slug: "compassion-practice",
    title: "Cultivating Compassion: The Heart of Buddhist Practice",
    excerpt: "Explore how compassion practice can transform your relationships and bring greater peace to your life through loving-kindness meditation.",
    category: "Practice",
    author: "Venerable Bhikkhuni Sunita",
    authorId: "venerable-bhikkhuni-sunita",
    publishedAt: "2024-03-10T00:00:00Z",
    readTime: "6 min",
    featured: false,
    tags: ["compassion", "loving-kindness", "practice"],
  },
  {
    id: "four-noble-truths-modern-life",
    slug: "four-noble-truths-modern-life",
    title: "Applying the Four Noble Truths to Modern Life",
    excerpt: "How ancient Buddhist wisdom can help us navigate the challenges and stresses of contemporary living with greater clarity and peace.",
    category: "Teachings",
    author: "Venerable Master Li",
    authorId: "venerable-master-li",
    publishedAt: "2024-03-05T00:00:00Z",
    readTime: "10 min",
    featured: false,
    tags: ["four-noble-truths", "teachings", "modern-life"],
  },
  {
    id: "walking-meditation",
    slug: "walking-meditation",
    title: "The Art of Walking Meditation: Finding Peace in Motion",
    excerpt: "Learn the practice of walking meditation, a powerful way to cultivate mindfulness and awareness through gentle movement.",
    category: "Meditation",
    author: "Venerable Ajahn Somchai",
    authorId: "venerable-ajahn-somchai",
    publishedAt: "2024-02-28T00:00:00Z",
    readTime: "7 min",
    featured: false,
    tags: ["walking-meditation", "meditation", "mindfulness"],
  },
  {
    id: "karma-understanding",
    slug: "karma-understanding",
    title: "Understanding Karma: The Law of Cause and Effect",
    excerpt: "A deep dive into the Buddhist concept of karma and how understanding it can transform how we live our lives.",
    category: "Teachings",
    author: "Venerable Master Chen",
    authorId: "venerable-master-chen",
    publishedAt: "2024-02-20T00:00:00Z",
    readTime: "9 min",
    featured: false,
    tags: ["karma", "teachings", "philosophy"],
  },
  {
    id: "daily-practice",
    slug: "daily-practice",
    title: "Establishing a Daily Meditation Practice",
    excerpt: "Practical tips and guidance for creating and maintaining a consistent daily meditation practice that fits into your busy life.",
    category: "Practice",
    author: "Venerable Bhikkhuni Pema",
    authorId: "venerable-bhikkhuni-pema",
    publishedAt: "2024-02-15T00:00:00Z",
    readTime: "5 min",
    featured: false,
    tags: ["meditation", "practice", "daily-life"],
  },
];

/**
 * Get all articles
 */
export function getAllArticles(): Article[] {
  return articles.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

/**
 * Get featured articles
 */
export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured);
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(article => article.category === category);
}

/**
 * Get all unique categories
 */
export function getArticleCategories(): string[] {
  return Array.from(new Set(articles.map(article => article.category))).sort();
}

