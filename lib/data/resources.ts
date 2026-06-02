/**
 * Resources Data
 * CMS-ready structure for downloadable resources
 */

import { Resource } from "@/lib/types/content";

export const resources: Resource[] = [
  {
    id: "dhammapada-pdf",
    title: "The Dhammapada (PDF)",
    description: "Complete text of the Dhammapada with commentary",
    category: "Sutras",
    type: "pdf",
    url: "#",
    author: "Various Translators",
    fileSize: "2.5 MB",
    order: 1,
  },
  {
    id: "meditation-guide",
    title: "Meditation Guide for Beginners",
    description: "Step-by-step guide to starting your meditation practice",
    category: "Meditation",
    type: "pdf",
    url: "#",
    author: "Venerable Master Chen",
    fileSize: "1.8 MB",
    order: 2,
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
    order: 3,
  },
  {
    id: "mindfulness-practice",
    title: "Mindfulness Practice Resources",
    description: "Collection of mindfulness exercises and practices",
    category: "Practice",
    type: "external",
    url: "#",
    order: 4,
  },
  {
    id: "heart-sutra-pdf",
    title: "The Heart Sutra (PDF)",
    description: "Translation and commentary on the Heart Sutra",
    category: "Sutras",
    type: "pdf",
    url: "#",
    author: "Thich Nhat Hanh",
    fileSize: "1.2 MB",
    order: 5,
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
    order: 6,
  },
  {
    id: "buddhist-dictionary",
    title: "Buddhist Terms Dictionary",
    description: "Comprehensive dictionary of Buddhist terminology",
    category: "Reference",
    type: "external",
    url: "#",
    order: 7,
  },
  {
    id: "compassion-practice-pdf",
    title: "Compassion Practice Guide",
    description: "Guide to developing compassion through loving-kindness meditation",
    category: "Practice",
    type: "pdf",
    url: "#",
    author: "Venerable Bhikkhuni Pema",
    fileSize: "2.1 MB",
    order: 8,
  },
  {
    id: "daily-practice-audio",
    title: "Daily Practice Audio Recordings",
    description: "Audio recordings for daily meditation practice",
    category: "Meditation",
    type: "audio",
    url: "#",
    duration: "Various",
    order: 9,
  },
];

/**
 * Get all resources
 */
export function getAllResources(): Resource[] {
  return resources.sort((a, b) => a.order - b.order);
}

/**
 * Get resources by category
 */
export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter(resource => resource.category === category);
}

/**
 * Get resources by type
 */
export function getResourcesByType(type: Resource["type"]): Resource[] {
  return resources.filter(resource => resource.type === type);
}

/**
 * Get all unique categories
 */
export function getResourceCategories(): string[] {
  return Array.from(new Set(resources.map(resource => resource.category))).sort();
}

