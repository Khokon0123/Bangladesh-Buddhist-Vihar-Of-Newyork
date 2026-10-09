/**
 * Venerables Data
 * CMS-ready structure for teachers and venerables
 */

import { Venerable } from "@/lib/types/content";
import type { WithBn } from "@/lib/i18n";

export const venerables: WithBn<Venerable>[] = [
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
    bn: { name: "ভদন্ত মুদিতা রত্ন ভিক্ষু", title: "বিহারাধ্যক্ষ", lineage: "চান (জেন) বৌদ্ধধর্ম, লিনজি ধারা", teachingFocus: "ধ্যান অনুশীলন, দৈনন্দিন জীবনে সচেতনতা এবং প্রজ্ঞা ও করুণার সমন্বয়", bio: "ভদন্ত মুদিতা রত্ন ভিক্ষু ২০ বছরেরও বেশি সময় ধরে বৌদ্ধধর্ম চর্চা করছেন। তিনি গত ২৫ বছর ধরে বাংলাদেশ বৌদ্ধ বিহার, নিউ ইয়র্কে ধ্যান ও বৌদ্ধ দর্শন শিক্ষা দিয়ে আসছেন। তাঁর শিক্ষায় সাধনা ও দৈনন্দিন জীবনের সমন্বয়ের ওপর জোর দেওয়া হয়, যা শিক্ষার্থীদের প্রতিটি মুহূর্তে প্রজ্ঞা ও করুণা খুঁজে পেতে সাহায্য করে।" },
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
    bn: { name: "ভদন্ত মুনীন্দ্র বংশ ভিক্ষু", title: "জ্যেষ্ঠ ধর্মগুরু", lineage: "থেরবাদ বৌদ্ধধর্ম", teachingFocus: "বুদ্ধের শিক্ষা, ধ্যান ও আধ্যাত্মিক দিকনির্দেশনা", bio: "ভদন্ত মুনীন্দ্র বংশ ভিক্ষু একজন জ্যেষ্ঠ ধর্মগুরু, যিনি সমাজের সাথে বুদ্ধের শিক্ষা ভাগ করে নিতে নিবেদিত। তাঁর দিকনির্দেশনা শিক্ষার্থীদের দৈনন্দিন জীবনে প্রজ্ঞা, সচেতনতা ও করুণা গড়ে তুলতে সাহায্য করে।" },
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
    bn: { name: "ভদন্ত বিশুদ্ধি বংশ ভিক্ষু", title: "আবাসিক ভিক্ষু", lineage: "থেরবাদ বৌদ্ধধর্ম", teachingFocus: "বুদ্ধের শিক্ষা, ধ্যান ও বিনয় সাধনা", bio: "ভদন্ত বিশুদ্ধি বংশ ভিক্ষু বাংলাদেশ বৌদ্ধ বিহার, নিউ ইয়র্কে আবাসিক ভিক্ষু হিসেবে দায়িত্ব পালন করছেন এবং বুদ্ধের শিক্ষা ও ধ্যান অনুশীলনে দিকনির্দেশনা দিচ্ছেন। তাঁর উপস্থিতি ও নিষ্ঠা সংঘের আধ্যাত্মিক জীবনকে সমৃদ্ধ করে।" },
  },
  {
    id: "venerable-placeholder-4",
    slug: "venerable-placeholder-4",
    name: "Coming Soon",
    bn: { name: "শীঘ্রই আসছে" },
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
    bn: { name: "শীঘ্রই আসছে" },
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
    bn: { name: "শীঘ্রই আসছে" },
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

