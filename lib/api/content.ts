/**
 * Content API Layer
 * 
 * This layer abstracts data access and can be easily swapped between:
 * - Static data (current implementation)
 * - CMS API (future implementation)
 * - Database queries (future implementation)
 * 
 * All pages should use these functions instead of directly importing data files.
 */

import {
  getAllArticles,
  getArticleBySlug,
  getFeaturedArticles,
  getArticlesByCategory,
  getArticleCategories,
} from "@/lib/data/articles";

import {
  getAllBooks,
  getBookBySlug,
  getBooksByCategory,
  getBookCategories,
  getNewBooks,
} from "@/lib/data/books";

import {
  getAllVenerables,
  getVenerableBySlug,
  getVenerableById,
} from "@/lib/data/venerables";

import {
  getAllPractices,
  getPracticeBySlug,
  getAllCourses,
  getCoursesByLevel,
  getCourseBySlug,
  getAllMeditations,
  getMeditationsByType,
  getMeditationBySlug,
} from "@/lib/data/practices";

import {
  getAllResources,
  getResourcesByCategory,
  getResourcesByType,
  getResourceCategories,
} from "@/lib/data/resources";

import {
  getEventsByYear,
  getAllYears,
  getLatestYear,
  getEventBySlug,
} from "@/lib/data/events";

import { navigationItems } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/data/site-config";

// Article API
export const articlesAPI = {
  getAll: getAllArticles,
  getBySlug: getArticleBySlug,
  getFeatured: getFeaturedArticles,
  getByCategory: getArticlesByCategory,
  getCategories: getArticleCategories,
};

// Book API
export const booksAPI = {
  getAll: getAllBooks,
  getBySlug: getBookBySlug,
  getByCategory: getBooksByCategory,
  getCategories: getBookCategories,
  getNew: getNewBooks,
};

// Venerable API
export const venerablesAPI = {
  getAll: getAllVenerables,
  getBySlug: getVenerableBySlug,
  getById: getVenerableById,
};

// Practice API
export const practicesAPI = {
  getAll: getAllPractices,
  getBySlug: getPracticeBySlug,
  courses: {
    getAll: getAllCourses,
    getByLevel: getCoursesByLevel,
    getBySlug: getCourseBySlug,
  },
  meditations: {
    getAll: getAllMeditations,
    getByType: getMeditationsByType,
    getBySlug: getMeditationBySlug,
  },
};

// Resource API
export const resourcesAPI = {
  getAll: getAllResources,
  getByCategory: getResourcesByCategory,
  getByType: getResourcesByType,
  getCategories: getResourceCategories,
};

// Events API
export const eventsAPI = {
  getByYear: getEventsByYear,
  getAllYears: getAllYears,
  getLatestYear: getLatestYear,
  getBySlug: getEventBySlug,
};

// Navigation API
export const navigationAPI = {
  getItems: () => [...navigationItems].sort((a, b) => a.order - b.order),
  getItemById: (id: string) => navigationItems.find(item => item.id === id),
};

// Site Config API
export const siteAPI = {
  getConfig: () => siteConfig,
};

/**
 * Future: CMS Integration Example
 * 
 * When integrating with a CMS, replace the above implementations with:
 * 
 * export const articlesAPI = {
 *   getAll: async () => {
 *     const response = await fetch(`${CMS_API_URL}/articles`);
 *     return response.json();
 *   },
 *   getBySlug: async (slug: string) => {
 *     const response = await fetch(`${CMS_API_URL}/articles?slug=${slug}`);
 *     const data = await response.json();
 *     return data[0];
 *   },
 *   // ... etc
 * };
 */

