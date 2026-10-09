import type { WithBn } from "@/lib/i18n";

export interface BookCardProps {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  coverUrl?: string;
  isNew?: boolean;
}

export const bookCategoryBn: Record<string, string> = {
  Sutras: "সূত্র",
  Meditation: "ধ্যান",
  Philosophy: "দর্শন",
  Zen: "জেন",
  Teachings: "শিক্ষা",
  Practice: "অনুশীলন",
  Psychology: "মনোবিজ্ঞান",
};

export const books: WithBn<BookCardProps>[] = [
  {
    id: "dhammapada",
    title: "The Dhammapada",
    author: "Translated by Various",
    category: "Sutras",
    description: "A collection of sayings of the Buddha in verse form, one of the most widely read and best known Buddhist scriptures.",
    bn: { title: "ধম্মপদ", author: "বিভিন্ন অনুবাদক", description: "গাথা আকারে বুদ্ধের বাণীর সংকলন—সর্বাধিক পঠিত ও সুপরিচিত বৌদ্ধ ধর্মগ্রন্থগুলোর একটি।" },
  },
  {
    id: "heart-sutra",
    title: "The Heart Sutra",
    author: "Translated by Thich Nhat Hanh",
    category: "Sutras",
    description: "The most popular sutra in Mahayana Buddhism, explaining the nature of emptiness and the path to enlightenment.",
    isNew: true,
    bn: { title: "প্রজ্ঞাপারমিতা হৃদয় সূত্র", author: "অনুবাদ: থিক নাত হান", description: "মহাযান বৌদ্ধধর্মের সবচেয়ে জনপ্রিয় সূত্র, যা শূন্যতার প্রকৃতি ও বোধিলাভের পথ ব্যাখ্যা করে।" },
  },
  {
    id: "mindfulness-in-plain-english",
    title: "Mindfulness in Plain English",
    author: "Bhante Henepola Gunaratana",
    category: "Meditation",
    description: "A practical guide to meditation that explains how to develop mindfulness and awareness in daily life.",
    bn: { title: "সহজ ভাষায় সচেতনতা (Mindfulness in Plain English)", author: "ভান্তে হেনেপোলা গুণরত্ন", description: "ধ্যানের একটি ব্যবহারিক নির্দেশিকা, যা দৈনন্দিন জীবনে সচেতনতা ও মনোযোগ গড়ে তোলার উপায় ব্যাখ্যা করে।" },
  },
  {
    id: "art-of-happiness",
    title: "The Art of Happiness",
    author: "Dalai Lama & Howard Cutler",
    category: "Philosophy",
    description: "A guide to finding happiness through Buddhist principles, combining ancient wisdom with modern psychology.",
    bn: { title: "সুখের শিল্প (The Art of Happiness)", author: "দালাই লামা ও হাওয়ার্ড কাটলার", description: "বৌদ্ধ নীতির মাধ্যমে সুখ খুঁজে পাওয়ার নির্দেশিকা, যেখানে প্রাচীন প্রজ্ঞা ও আধুনিক মনোবিজ্ঞানের মেলবন্ধন ঘটেছে।" },
  },
  {
    id: "zen-mind-beginners-mind",
    title: "Zen Mind, Beginner's Mind",
    author: "Shunryu Suzuki",
    category: "Zen",
    description: "Informal talks on Zen meditation and practice, offering insights into the nature of the beginner's mind.",
    bn: { title: "জেন মন, নবীনের মন (Zen Mind, Beginner's Mind)", author: "শুনরিউ সুজুকি", description: "জেন ধ্যান ও সাধনা নিয়ে ঘরোয়া আলোচনা, যা নবীনের মনের প্রকৃতি সম্পর্কে অন্তর্দৃষ্টি দেয়।" },
  },
  {
    id: "what-the-buddha-taught",
    title: "What the Buddha Taught",
    author: "Walpola Rahula",
    category: "Teachings",
    description: "A comprehensive introduction to the fundamental principles of Buddhist doctrine, written for the modern reader.",
    isNew: true,
    bn: { title: "বুদ্ধ কী শিখিয়েছিলেন (What the Buddha Taught)", author: "ওয়ালপোলা রাহুল", description: "আধুনিক পাঠকের জন্য লেখা বৌদ্ধ মতবাদের মৌলিক নীতিগুলোর একটি পূর্ণাঙ্গ পরিচিতি।" },
  },
  {
    id: "peace-is-every-step",
    title: "Peace Is Every Step",
    author: "Thich Nhat Hanh",
    category: "Practice",
    description: "The path of mindfulness in everyday life, showing how to transform difficulties and find peace in each moment.",
    bn: { title: "প্রতিটি পদক্ষেপে শান্তি (Peace Is Every Step)", author: "থিক নাত হান", description: "দৈনন্দিন জীবনে সচেতনতার পথ, যা দেখায় কীভাবে কষ্টকে রূপান্তরিত করে প্রতিটি মুহূর্তে শান্তি খুঁজে পাওয়া যায়।" },
  },
  {
    id: "buddhist-psychology",
    title: "Buddhist Psychology",
    author: "Geshe Tashi Tsering",
    category: "Psychology",
    description: "An exploration of Buddhist psychology and how it can help us understand the mind and overcome suffering.",
    bn: { title: "বৌদ্ধ মনোবিজ্ঞান (Buddhist Psychology)", author: "গেশে তাশি সেরিং", description: "বৌদ্ধ মনোবিজ্ঞানের অন্বেষণ, এবং তা কীভাবে মনকে বুঝতে ও দুঃখ অতিক্রম করতে সাহায্য করে।" },
  },
  {
    id: "lotus-sutra",
    title: "The Lotus Sutra",
    author: "Translated by Burton Watson",
    category: "Sutras",
    description: "One of the most important and influential Mahayana sutras, teaching the universal potential for Buddhahood.",
    bn: { title: "সদ্ধর্মপুণ্ডরীক সূত্র (লোটাস সূত্র)", author: "অনুবাদ: বার্টন ওয়াটসন", description: "সবচেয়ে গুরুত্বপূর্ণ ও প্রভাবশালী মহাযান সূত্রগুলোর একটি, যা সকলের বুদ্ধত্ব লাভের সম্ভাবনার শিক্ষা দেয়।" },
  },
  {
    id: "meditation-for-beginners",
    title: "Meditation for Beginners",
    author: "Jack Kornfield",
    category: "Meditation",
    description: "A practical guide to starting a meditation practice, with simple techniques and helpful guidance.",
    isNew: true,
    bn: { title: "নবীনদের জন্য ধ্যান (Meditation for Beginners)", author: "জ্যাক কর্নফিল্ড", description: "ধ্যান অনুশীলন শুরু করার ব্যবহারিক নির্দেশিকা, সহজ কৌশল ও সহায়ক পরামর্শসহ।" },
  },
  {
    id: "awakening-the-buddha-within",
    title: "Awakening the Buddha Within",
    author: "Lama Surya Das",
    category: "Practice",
    description: "A guide to Tibetan Buddhist practices for Westerners, making ancient wisdom accessible to modern life.",
    bn: { title: "অন্তরের বুদ্ধকে জাগানো (Awakening the Buddha Within)", author: "লামা সূর্য দাস", description: "পশ্চিমা পাঠকদের জন্য তিব্বতি বৌদ্ধ সাধনার নির্দেশিকা, যা প্রাচীন প্রজ্ঞাকে আধুনিক জীবনের কাছে সহজলভ্য করে।" },
  },
  {
    id: "diamond-sutra",
    title: "The Diamond Sutra",
    author: "Translated by Red Pine",
    category: "Sutras",
    description: "A key Mahayana sutra on the perfection of wisdom, emphasizing the emptiness of all phenomena.",
    bn: { title: "বজ্রচ্ছেদিকা প্রজ্ঞাপারমিতা সূত্র (হীরক সূত্র)", author: "অনুবাদ: রেড পাইন", description: "প্রজ্ঞাপারমিতা বিষয়ক একটি প্রধান মহাযান সূত্র, যা সকল বিষয়ের শূন্যতার ওপর জোর দেয়।" },
  },
];
