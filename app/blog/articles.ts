export interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl?: string;
  featured?: boolean;
}

// Sample blog data - in a real app, this would come from a CMS
export const articles: ArticleCardProps[] = [
  {
    id: "understanding-mindfulness",
    title: "Understanding Mindfulness: A Beginner's Guide to Present-Moment Awareness",
    excerpt:
      "Discover the transformative power of mindfulness and learn practical techniques to cultivate present-moment awareness in your daily life.",
    category: "Meditation",
    author: "Venerable Master Chen",
    date: "March 15, 2024",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "compassion-practice",
    title: "Cultivating Compassion: The Heart of Buddhist Practice",
    excerpt:
      "Explore how compassion practice can transform your relationships and bring greater peace to your life through loving-kindness meditation.",
    category: "Practice",
    author: "Venerable Bhikkhuni Sunita",
    date: "March 10, 2024",
    readTime: "6 min",
  },
  {
    id: "four-noble-truths-modern-life",
    title: "Applying the Four Noble Truths to Modern Life",
    excerpt:
      "How ancient Buddhist wisdom can help us navigate the challenges and stresses of contemporary living with greater clarity and peace.",
    category: "Teachings",
    author: "Venerable Master Li",
    date: "March 5, 2024",
    readTime: "10 min",
  },
  {
    id: "walking-meditation",
    title: "The Art of Walking Meditation: Finding Peace in Motion",
    excerpt:
      "Learn the practice of walking meditation, a powerful way to cultivate mindfulness and awareness through gentle movement.",
    category: "Meditation",
    author: "Venerable Ajahn Somchai",
    date: "February 28, 2024",
    readTime: "7 min",
  },
  {
    id: "karma-understanding",
    title: "Understanding Karma: Beyond Cause and Effect",
    excerpt:
      "A deeper look into the Buddhist concept of karma and how understanding it can help us make wiser choices in our daily lives.",
    category: "Teachings",
    author: "Venerable Master Wang",
    date: "February 22, 2024",
    readTime: "9 min",
  },
  {
    id: "morning-routine",
    title: "Creating a Mindful Morning Routine",
    excerpt:
      "Start your day with intention and awareness. Practical tips for incorporating Buddhist practices into your morning routine.",
    category: "Practice",
    author: "Venerable Bhikkhuni Pema",
    date: "February 18, 2024",
    readTime: "5 min",
  },
  {
    id: "dealing-with-anxiety",
    title: "Buddhist Approaches to Dealing with Anxiety",
    excerpt:
      "How Buddhist meditation and mindfulness practices can help manage anxiety and cultivate inner calm in challenging times.",
    category: "Wellness",
    author: "Venerable Master Chen",
    date: "February 12, 2024",
    readTime: "8 min",
  },
  {
    id: "sutra-study",
    title: "An Introduction to Sutra Study",
    excerpt:
      "A guide to reading and understanding Buddhist sutras, with recommendations for beginners and practical study methods.",
    category: "Teachings",
    author: "Venerable Master Li",
    date: "February 8, 2024",
    readTime: "12 min",
  },
  {
    id: "gratitude-practice",
    title: "The Practice of Gratitude in Buddhism",
    excerpt:
      "Discover how gratitude practice can deepen your spiritual journey and bring more joy and contentment into your life.",
    category: "Practice",
    author: "Venerable Bhikkhuni Sunita",
    date: "February 3, 2024",
    readTime: "6 min",
  },
];
