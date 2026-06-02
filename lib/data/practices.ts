/**
 * Practices Data
 * CMS-ready structure for practice programs
 */

import { Practice, Course, Meditation } from "@/lib/types/content";

export const practices: Practice[] = [
  {
    id: "dhamma-school",
    slug: "dhamma-school",
    title: "Dhamma School",
    description: "Structured learning for all ages to understand Buddhist principles and ethics.",
    longDescription: "Our Dhamma School offers structured learning programs for students of all ages. Through age-appropriate curriculum, interactive lessons, and community building activities, students develop a deep understanding of Buddhist principles, ethics, and practices. Our programs are designed to support ethical development and spiritual growth in a supportive community environment.",
    features: [
      "Age-appropriate curriculum",
      "Interactive lessons",
      "Community building",
      "Ethical development",
    ],
    gradientFrom: "from-maroon-700",
    gradientTo: "to-maroon-900",
    order: 1,
  },
  {
    id: "meditation",
    slug: "meditation",
    title: "Meditation",
    description: "Cultivate mindfulness, concentration, and wisdom through various meditation techniques.",
    longDescription: "Our meditation programs offer a variety of techniques to help you cultivate mindfulness, concentration, and wisdom. From guided sessions for beginners to silent retreats for experienced practitioners, we provide opportunities for all levels. Our programs include mindfulness practices, stress reduction techniques, and deep concentration practices.",
    features: [
      "Guided sessions",
      "Silent retreats",
      "Mindfulness practices",
      "Stress reduction",
    ],
    gradientFrom: "from-primary-dark",
    gradientTo: "to-primary-800",
    order: 2,
  },
];

export const courses: Course[] = [
  {
    id: "beginner-foundations",
    slug: "beginner-foundations",
    title: "Foundations of Buddhism",
    description: "An introduction to core Buddhist concepts and practices for beginners.",
    level: "beginner",
    duration: "12 weeks",
    order: 1,
    lessons: [
      {
        id: "lesson-1",
        title: "Introduction to Buddhism",
        description: "Overview of Buddhist history and core teachings",
        duration: "45 min",
        order: 1,
      },
      {
        id: "lesson-2",
        title: "The Four Noble Truths",
        description: "Understanding the foundation of Buddhist philosophy",
        duration: "60 min",
        order: 2,
      },
      {
        id: "lesson-3",
        title: "The Eightfold Path",
        description: "Exploring the practical path to liberation",
        duration: "60 min",
        order: 3,
      },
      {
        id: "lesson-4",
        title: "Karma and Rebirth",
        description: "Understanding cause and effect in Buddhist thought",
        duration: "45 min",
        order: 4,
      },
    ],
  },
  {
    id: "intermediate-practice",
    slug: "intermediate-practice",
    title: "Deepening Your Practice",
    description: "Advanced concepts and practices for intermediate students.",
    level: "intermediate",
    duration: "16 weeks",
    order: 2,
    lessons: [
      {
        id: "lesson-5",
        title: "Advanced Meditation Techniques",
        description: "Exploring deeper states of concentration",
        duration: "60 min",
        order: 1,
      },
      {
        id: "lesson-6",
        title: "Buddhist Ethics in Daily Life",
        description: "Applying ethical principles to modern challenges",
        duration: "45 min",
        order: 2,
      },
    ],
  },
  {
    id: "advanced-study",
    slug: "advanced-study",
    title: "Advanced Buddhist Studies",
    description: "In-depth study of Buddhist philosophy and texts for advanced practitioners.",
    level: "advanced",
    duration: "20 weeks",
    order: 3,
    lessons: [
      {
        id: "lesson-7",
        title: "Abhidhamma Studies",
        description: "Deep dive into Buddhist psychology and metaphysics",
        duration: "90 min",
        order: 1,
      },
      {
        id: "lesson-8",
        title: "Mahayana Philosophy",
        description: "Exploring the Bodhisattva path and emptiness",
        duration: "90 min",
        order: 2,
      },
    ],
  },
];

export const meditations: Meditation[] = [
  {
    id: "breathing-meditation",
    slug: "breathing-meditation",
    title: "Breathing Meditation",
    description: "A foundational practice focusing on the breath to develop concentration and mindfulness.",
    type: "guided",
    duration: "10 min",
    order: 1,
    instructions: [
      "Find a comfortable seated position",
      "Close your eyes or lower your gaze",
      "Bring attention to your breath",
      "Notice each inhale and exhale",
      "When the mind wanders, gently return to the breath",
    ],
  },
  {
    id: "loving-kindness",
    slug: "loving-kindness",
    title: "Loving-Kindness Meditation",
    description: "Cultivate compassion and loving-kindness for yourself and others.",
    type: "loving-kindness",
    duration: "15 min",
    order: 2,
    instructions: [
      "Begin by generating feelings of kindness toward yourself",
      "Extend these feelings to a loved one",
      "Include a neutral person",
      "Include someone you find difficult",
      "Extend to all beings everywhere",
    ],
  },
  {
    id: "body-scan",
    slug: "body-scan",
    title: "Body Scan Meditation",
    description: "Develop awareness of physical sensations throughout the body.",
    type: "body-scan",
    duration: "20 min",
    order: 3,
    instructions: [
      "Lie down or sit comfortably",
      "Bring attention to your toes",
      "Slowly move attention through each part of the body",
      "Notice sensations without judgment",
      "Complete the scan from head to toe",
    ],
  },
  {
    id: "walking-meditation",
    slug: "walking-meditation",
    title: "Walking Meditation",
    description: "Practice mindfulness through gentle, deliberate movement.",
    type: "walking",
    duration: "15 min",
    order: 4,
    instructions: [
      "Find a quiet path, indoors or outdoors",
      "Walk slowly and deliberately",
      "Focus on the sensation of each step",
      "Notice the lifting, moving, and placing of each foot",
      "Maintain awareness of your body and surroundings",
    ],
  },
  {
    id: "silent-sitting",
    slug: "silent-sitting",
    title: "Silent Sitting Meditation",
    description: "An unguided practice for experienced meditators.",
    type: "silent",
    duration: "30 min",
    order: 5,
  },
];

/**
 * Get all practices
 */
export function getAllPractices(): Practice[] {
  return practices.sort((a, b) => a.order - b.order);
}

/**
 * Get practice by slug
 */
export function getPracticeBySlug(slug: string): Practice | undefined {
  return practices.find(practice => practice.slug === slug);
}

/**
 * Get all courses
 */
export function getAllCourses(): Course[] {
  return courses.sort((a, b) => a.order - b.order);
}

/**
 * Get courses by level
 */
export function getCoursesByLevel(level: "beginner" | "intermediate" | "advanced"): Course[] {
  return courses.filter(course => course.level === level);
}

/**
 * Get course by slug
 */
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}

/**
 * Get all meditations
 */
export function getAllMeditations(): Meditation[] {
  return meditations.sort((a, b) => a.order - b.order);
}

/**
 * Get meditations by type
 */
export function getMeditationsByType(type: Meditation["type"]): Meditation[] {
  return meditations.filter(meditation => meditation.type === type);
}

/**
 * Get meditation by slug
 */
export function getMeditationBySlug(slug: string): Meditation | undefined {
  return meditations.find(meditation => meditation.slug === slug);
}

