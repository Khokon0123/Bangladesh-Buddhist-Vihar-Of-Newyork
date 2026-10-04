export interface BookCardProps {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  coverUrl?: string;
  isNew?: boolean;
}

export const books: BookCardProps[] = [
  {
    id: "dhammapada",
    title: "The Dhammapada",
    author: "Translated by Various",
    category: "Sutras",
    description: "A collection of sayings of the Buddha in verse form, one of the most widely read and best known Buddhist scriptures.",
  },
  {
    id: "heart-sutra",
    title: "The Heart Sutra",
    author: "Translated by Thich Nhat Hanh",
    category: "Sutras",
    description: "The most popular sutra in Mahayana Buddhism, explaining the nature of emptiness and the path to enlightenment.",
    isNew: true,
  },
  {
    id: "mindfulness-in-plain-english",
    title: "Mindfulness in Plain English",
    author: "Bhante Henepola Gunaratana",
    category: "Meditation",
    description: "A practical guide to meditation that explains how to develop mindfulness and awareness in daily life.",
  },
  {
    id: "art-of-happiness",
    title: "The Art of Happiness",
    author: "Dalai Lama & Howard Cutler",
    category: "Philosophy",
    description: "A guide to finding happiness through Buddhist principles, combining ancient wisdom with modern psychology.",
  },
  {
    id: "zen-mind-beginners-mind",
    title: "Zen Mind, Beginner's Mind",
    author: "Shunryu Suzuki",
    category: "Zen",
    description: "Informal talks on Zen meditation and practice, offering insights into the nature of the beginner's mind.",
  },
  {
    id: "what-the-buddha-taught",
    title: "What the Buddha Taught",
    author: "Walpola Rahula",
    category: "Teachings",
    description: "A comprehensive introduction to the fundamental principles of Buddhist doctrine, written for the modern reader.",
    isNew: true,
  },
  {
    id: "peace-is-every-step",
    title: "Peace Is Every Step",
    author: "Thich Nhat Hanh",
    category: "Practice",
    description: "The path of mindfulness in everyday life, showing how to transform difficulties and find peace in each moment.",
  },
  {
    id: "buddhist-psychology",
    title: "Buddhist Psychology",
    author: "Geshe Tashi Tsering",
    category: "Psychology",
    description: "An exploration of Buddhist psychology and how it can help us understand the mind and overcome suffering.",
  },
  {
    id: "lotus-sutra",
    title: "The Lotus Sutra",
    author: "Translated by Burton Watson",
    category: "Sutras",
    description: "One of the most important and influential Mahayana sutras, teaching the universal potential for Buddhahood.",
  },
  {
    id: "meditation-for-beginners",
    title: "Meditation for Beginners",
    author: "Jack Kornfield",
    category: "Meditation",
    description: "A practical guide to starting a meditation practice, with simple techniques and helpful guidance.",
    isNew: true,
  },
  {
    id: "awakening-the-buddha-within",
    title: "Awakening the Buddha Within",
    author: "Lama Surya Das",
    category: "Practice",
    description: "A guide to Tibetan Buddhist practices for Westerners, making ancient wisdom accessible to modern life.",
  },
  {
    id: "diamond-sutra",
    title: "The Diamond Sutra",
    author: "Translated by Red Pine",
    category: "Sutras",
    description: "A key Mahayana sutra on the perfection of wisdom, emphasizing the emptiness of all phenomena.",
  },
];
