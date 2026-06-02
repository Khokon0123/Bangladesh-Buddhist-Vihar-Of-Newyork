/**
 * Venerables Data
 * CMS-ready structure for teachers and venerables
 */

import { Venerable } from "@/lib/types/content";

export const venerables: Venerable[] = [
  {
    id: "venerable-mudita-ratna-bhikkhu",
    slug: "venerable-mudita-ratna-bhikkhu",
    name: "Venerable Mudita Ratna Bhikkhu",
    title: "Abbot",
    lineage: "Chan (Zen) Buddhism, Linji School",
    teachingFocus: "Meditation practice, mindfulness in daily life, and the integration of wisdom and compassion",
    bio: "Venerable Mudita Ratna Bhikkhu has been practicing Buddhism for over 20 years. He received transmission in the and has been teaching meditation and Buddhist philosophy at Bangladesh Buddhist Vihara Of New York for the past 25 years. His teachings emphasize the integration of practice and daily life, helping students find wisdom and compassion in every moment.",
    imageUrl: "/images/venerables/mudita-ratna-bhikkhu.jpg",
    order: 1,
    specialties: ["Meditation", "Chan Buddhism", "Mindfulness"],
  },
  {
    id: "venerable-monindra-bangsha-bhikkhu",
    slug: "venerable-monindra-bangsha-bhikkhu",
    name: "Ven. Monindra Bangsha Bhikkhu",
    title: "Senior Teacher",
    lineage: "Theravada Buddhism",
    teachingFocus: "Buddhist teachings, meditation, and spiritual guidance",
    bio: "Ven. Monindra Bangsha Bhikkhu is a senior teacher dedicated to sharing the teachings of the Buddha with the community. His guidance helps students develop wisdom, mindfulness, and compassion in their daily lives.",
    imageUrl: "/images/venerables/PHOTO-2026-04-25-15-18-06.jpg",
    order: 2,
    specialties: ["Buddhist Teachings", "Meditation", "Spiritual Guidance"],
  },
  {
    id: "venerable-vishuddhi-bangsha-bhikkhu",
    slug: "venerable-vishuddhi-bangsha-bhikkhu",
    name: "Ven. Vishuddhi Bangsha Bhikkhu",
    title: "Resident Monk",
    lineage: "Theravada Buddhism",
    teachingFocus: "Buddhist teachings, meditation, and monastic practice",
    bio: "Ven. Vishuddhi Bangsha Bhikkhu serves as Resident Monk at Bangladesh Buddhist Vihara Of New York, offering guidance in Buddhist teachings and meditation practice. His presence and dedication support the spiritual life of the community.",
    imageUrl: "/images/venerables/vishuddhi-bangsha-bhikkhu.jpg",
    order: 3,
    specialties: ["Buddhist Teachings", "Meditation", "Monastic Practice"],
  },
  {
    id: "venerable-placeholder-4",
    slug: "venerable-placeholder-4",
    name: "Coming Soon",
    title: "",
    lineage: "",
    teachingFocus: "",
    bio: "",
    order: 4,
    specialties: [],
  },
  {
    id: "venerable-placeholder-5",
    slug: "venerable-placeholder-5",
    name: "Coming Soon",
    title: "",
    lineage: "",
    teachingFocus: "",
    bio: "",
    order: 5,
    specialties: [],
  },
  {
    id: "venerable-placeholder-6",
    slug: "venerable-placeholder-6",
    name: "Coming Soon",
    title: "",
    lineage: "",
    teachingFocus: "",
    bio: "",
    order: 6,
    specialties: [],
  },
];

/**
 * Get all venerables
 */
export function getAllVenerables(): Venerable[] {
  return venerables.sort((a, b) => a.order - b.order);
}

/**
 * Get venerable by slug
 */
export function getVenerableBySlug(slug: string): Venerable | undefined {
  return venerables.find(venerable => venerable.slug === slug);
}

/**
 * Get venerable by ID
 */
export function getVenerableById(id: string): Venerable | undefined {
  return venerables.find(venerable => venerable.id === id);
}

