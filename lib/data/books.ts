/**
 * Books Data
 * CMS-ready structure for book library
 */

import { Book } from "@/lib/types/content";

export const books: Book[] = [
  {
    id: "dhammapada",
    slug: "dhammapada",
    title: "The Dhammapada",
    author: "Buddha",
    translator: "Various Translators",
    category: "Sutras",
    description: "A collection of sayings of the Buddha in verse form, one of the most widely read and best known Buddhist scriptures.",
    longDescription: "The Dhammapada is a collection of sayings of the Buddha in verse form and one of the most widely read and best known Buddhist scriptures. The original version of the Dhammapada is in the Khuddaka Nikaya, a division of the Pali Canon of Theravada Buddhism. The Buddhist scholar and commentator Buddhaghosa explains that each saying recorded in the collection was made on a different occasion in response to a unique situation that had arisen in the life of the Buddha and his monastic community.",
    pages: 224,
    language: "English",
    isbn: "978-0-14-044558-9",
    downloadUrl: "#",
    isNew: false,
  },
  {
    id: "heart-sutra",
    slug: "heart-sutra",
    title: "The Heart Sutra",
    author: "Buddha",
    translator: "Thich Nhat Hanh",
    category: "Sutras",
    description: "The most popular sutra in Mahayana Buddhism, explaining the nature of emptiness and the path to enlightenment.",
    longDescription: "The Heart Sutra is the most popular sutra in Mahayana Buddhism. It is said to contain the essence of the Perfection of Wisdom teachings. The sutra explains the nature of emptiness (shunyata) and how all phenomena are empty of inherent existence. This understanding is central to the Mahayana path to enlightenment. Thich Nhat Hanh's translation and commentary make this profound text accessible to modern readers.",
    pages: 160,
    language: "English",
    downloadUrl: "#",
    isNew: true,
  },
  {
    id: "mindfulness-in-plain-english",
    slug: "mindfulness-in-plain-english",
    title: "Mindfulness in Plain English",
    author: "Bhante Henepola Gunaratana",
    category: "Meditation",
    description: "A practical guide to meditation that explains how to develop mindfulness and awareness in daily life.",
    longDescription: "This book provides a step-by-step guide to insight meditation, written in clear and accessible language. It covers the basics of meditation practice, common obstacles, and how to integrate mindfulness into everyday activities.",
    pages: 256,
    language: "English",
    isbn: "978-0-86171-321-9",
    downloadUrl: "#",
    isNew: false,
  },
  {
    id: "art-of-happiness",
    slug: "art-of-happiness",
    title: "The Art of Happiness",
    author: "Dalai Lama & Howard Cutler",
    category: "Philosophy",
    description: "A guide to finding happiness through Buddhist principles, combining ancient wisdom with modern psychology.",
    longDescription: "In this book, the Dalai Lama and psychiatrist Howard Cutler explore the nature of happiness and how to achieve it. The book combines Buddhist philosophy with Western psychology to provide practical advice for living a happier life.",
    pages: 320,
    language: "English",
    isbn: "978-1-57322-111-5",
    downloadUrl: "#",
    isNew: false,
  },
  {
    id: "zen-mind-beginners-mind",
    slug: "zen-mind-beginners-mind",
    title: "Zen Mind, Beginner's Mind",
    author: "Shunryu Suzuki",
    category: "Zen",
    description: "Informal talks on Zen meditation and practice, offering insights into the nature of the beginner's mind.",
    longDescription: "This classic work presents the teachings of Zen master Shunryu Suzuki in a series of informal talks. The book emphasizes the importance of maintaining a 'beginner's mind' - an attitude of openness and eagerness, free from preconceptions.",
    pages: 176,
    language: "English",
    isbn: "978-0-8348-0079-3",
    downloadUrl: "#",
    isNew: false,
  },
  {
    id: "what-the-buddha-taught",
    slug: "what-the-buddha-taught",
    title: "What the Buddha Taught",
    author: "Walpola Rahula",
    category: "Philosophy",
    description: "A comprehensive introduction to the fundamental teachings of Buddhism, written by a Theravada monk and scholar.",
    longDescription: "This book provides a clear and comprehensive introduction to the fundamental teachings of Buddhism. Written by a Theravada monk and scholar, it covers the Four Noble Truths, the Eightfold Path, and other core Buddhist concepts.",
    pages: 151,
    language: "English",
    isbn: "978-0-8021-3031-0",
    downloadUrl: "#",
    isNew: false,
  },
  {
    id: "buddhism-plain-simple",
    slug: "buddhism-plain-simple",
    title: "Buddhism Plain and Simple",
    author: "Steve Hagen",
    category: "Philosophy",
    description: "A straightforward introduction to Buddhism that focuses on the essential teachings without religious trappings.",
    longDescription: "This book presents Buddhism in a clear and accessible way, focusing on the essential teachings without unnecessary religious trappings. It emphasizes the practical application of Buddhist principles in daily life.",
    pages: 160,
    language: "English",
    isbn: "978-0-7679-0350-1",
    downloadUrl: "#",
    isNew: false,
  },
  {
    id: "loving-kindness",
    slug: "loving-kindness",
    title: "Loving-Kindness: The Revolutionary Art of Happiness",
    author: "Sharon Salzberg",
    category: "Meditation",
    description: "A guide to the practice of metta (loving-kindness) meditation, one of the most powerful practices in Buddhism.",
    longDescription: "This book explores the practice of metta, or loving-kindness meditation, which is one of the most powerful practices in Buddhism. The author provides practical instructions and shares personal stories of transformation through this practice.",
    pages: 240,
    language: "English",
    isbn: "978-1-57062-903-7",
    downloadUrl: "#",
    isNew: false,
  },
];

/**
 * Get all books
 */
export function getAllBooks(): Book[] {
  return books;
}

/**
 * Get book by slug
 */
export function getBookBySlug(slug: string): Book | undefined {
  return books.find(book => book.slug === slug);
}

/**
 * Get books by category
 */
export function getBooksByCategory(category: string): Book[] {
  return books.filter(book => book.category === category);
}

/**
 * Get all unique categories
 */
export function getBookCategories(): string[] {
  return Array.from(new Set(books.map(book => book.category))).sort();
}

/**
 * Get new books
 */
export function getNewBooks(): Book[] {
  return books.filter(book => book.isNew);
}

