import type { WithBn } from "@/lib/i18n";

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
export const articles: WithBn<ArticleCardProps>[] = [
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
    bn: { title: "সচেতনতাকে বোঝা: বর্তমান মুহূর্তের সচেতনতার জন্য নবীনদের নির্দেশিকা", excerpt: "সচেতনতার রূপান্তরকারী শক্তি আবিষ্কার করুন এবং দৈনন্দিন জীবনে বর্তমান মুহূর্তের সচেতনতা গড়ে তোলার ব্যবহারিক কৌশল শিখুন।", author: "শ্রদ্ধেয় মাস্টার চেন", date: "১৫ মার্চ, ২০২৪", readTime: "৮ মিনিট" },
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
    bn: { title: "করুণার চর্চা: বৌদ্ধ সাধনার প্রাণ", excerpt: "জানুন কীভাবে করুণার চর্চা আপনার সম্পর্কগুলোকে বদলে দিতে পারে এবং মৈত্রী ভাবনার মাধ্যমে জীবনে আরও শান্তি আনতে পারে।", author: "শ্রদ্ধেয় ভিক্ষুণী সুনীতা", date: "১০ মার্চ, ২০২৪", readTime: "৬ মিনিট" },
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
    bn: { title: "আধুনিক জীবনে চার আর্যসত্যের প্রয়োগ", excerpt: "প্রাচীন বৌদ্ধ প্রজ্ঞা কীভাবে আমাদের সমকালীন জীবনের চ্যালেঞ্জ ও চাপ আরও স্বচ্ছতা ও শান্তির সাথে মোকাবিলা করতে সাহায্য করতে পারে।", author: "শ্রদ্ধেয় মাস্টার লি", date: "৫ মার্চ, ২০২৪", readTime: "১০ মিনিট" },
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
    bn: { title: "চংক্রমণ ধ্যানের শিল্প: চলার মাঝে শান্তি", excerpt: "চংক্রমণ ধ্যানের অনুশীলন শিখুন—কোমল চলাচলের মাধ্যমে সচেতনতা ও মনোযোগ গড়ে তোলার এক শক্তিশালী উপায়।", author: "শ্রদ্ধেয় আজান সমচাই", date: "২৮ ফেব্রুয়ারি, ২০২৪", readTime: "৭ মিনিট" },
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
    bn: { title: "কর্মকে বোঝা: কার্যকারণের ঊর্ধ্বে", excerpt: "বৌদ্ধধর্মের কর্ম-ধারণার গভীরে দৃষ্টিপাত, এবং তা বোঝা কীভাবে দৈনন্দিন জীবনে আরও প্রজ্ঞাপূর্ণ সিদ্ধান্ত নিতে সাহায্য করে।", author: "শ্রদ্ধেয় মাস্টার ওয়াং", date: "২২ ফেব্রুয়ারি, ২০২৪", readTime: "৯ মিনিট" },
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
    bn: { title: "সচেতন সকালের রুটিন তৈরি", excerpt: "উদ্দেশ্য ও সচেতনতা নিয়ে দিন শুরু করুন। সকালের রুটিনে বৌদ্ধ অনুশীলন যুক্ত করার ব্যবহারিক পরামর্শ।", author: "শ্রদ্ধেয় ভিক্ষুণী পেমা", date: "১৮ ফেব্রুয়ারি, ২০২৪", readTime: "৫ মিনিট" },
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
    bn: { title: "উদ্বেগ মোকাবিলায় বৌদ্ধ পদ্ধতি", excerpt: "কঠিন সময়ে উদ্বেগ সামলাতে এবং অন্তরের প্রশান্তি গড়ে তুলতে বৌদ্ধ ধ্যান ও সচেতনতার চর্চা কীভাবে সাহায্য করতে পারে।", author: "শ্রদ্ধেয় মাস্টার চেন", date: "১২ ফেব্রুয়ারি, ২০২৪", readTime: "৮ মিনিট" },
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
    bn: { title: "সূত্র অধ্যয়নের পরিচিতি", excerpt: "বৌদ্ধ সূত্র পাঠ ও উপলব্ধির একটি নির্দেশিকা, নবীনদের জন্য সুপারিশ ও ব্যবহারিক অধ্যয়ন-পদ্ধতিসহ।", author: "শ্রদ্ধেয় মাস্টার লি", date: "৮ ফেব্রুয়ারি, ২০২৪", readTime: "১২ মিনিট" },
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
    bn: { title: "বৌদ্ধধর্মে কৃতজ্ঞতার চর্চা", excerpt: "জানুন কীভাবে কৃতজ্ঞতার চর্চা আপনার আধ্যাত্মিক যাত্রাকে গভীর করতে এবং জীবনে আরও আনন্দ ও তৃপ্তি আনতে পারে।", author: "শ্রদ্ধেয় ভিক্ষুণী সুনীতা", date: "৩ ফেব্রুয়ারি, ২০২৪", readTime: "৬ মিনিট" },
  },
];
