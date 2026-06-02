"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Book cover placeholder
const BookCoverPlaceholder = ({ title }: { title: string }) => (
  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary-dark/20 to-primary/30 flex items-center justify-center p-8">
    <div className="text-center">
      <div className="text-6xl mb-4">📖</div>
      <p className="text-sm text-primary-dark/70 font-medium leading-tight">
        {title}
      </p>
    </div>
  </div>
);

interface BookDetail {
  id: string;
  title: string;
  author: string;
  translator?: string;
  category: string;
  description: string;
  longDescription: string;
  pages?: number;
  language: string;
  downloadUrl?: string;
  externalUrl?: string;
  isbn?: string;
  coverUrl?: string;
  isNew?: boolean;
}

// Sample book data - in a real app, this would come from a CMS or database
const booksData: Record<string, BookDetail> = {
  dhammapada: {
    id: "dhammapada",
    title: "The Dhammapada",
    author: "Buddha",
    translator: "Various Translators",
    category: "Sutras",
    description:
      "A collection of sayings of the Buddha in verse form, one of the most widely read and best known Buddhist scriptures.",
    longDescription:
      "The Dhammapada is a collection of sayings of the Buddha in verse form and one of the most widely read and best known Buddhist scriptures. The original version of the Dhammapada is in the Khuddaka Nikaya, a division of the Pali Canon of Theravada Buddhism. The Buddhist scholar and commentator Buddhaghosa explains that each saying recorded in the collection was made on a different occasion in response to a unique situation that had arisen in the life of the Buddha and his monastic community.",
    pages: 224,
    language: "English",
    downloadUrl: "#",
    isbn: "978-0-14-044558-9",
  },
  "heart-sutra": {
    id: "heart-sutra",
    title: "The Heart Sutra",
    author: "Buddha",
    translator: "Thich Nhat Hanh",
    category: "Sutras",
    description:
      "The most popular sutra in Mahayana Buddhism, explaining the nature of emptiness and the path to enlightenment.",
    longDescription:
      "The Heart Sutra is the most popular sutra in Mahayana Buddhism. It is said to contain the essence of the Perfection of Wisdom teachings. The sutra explains the nature of emptiness (shunyata) and how all phenomena are empty of inherent existence. This understanding is central to the Mahayana path to enlightenment. Thich Nhat Hanh's translation and commentary make this profound text accessible to modern readers.",
    pages: 160,
    language: "English",
    downloadUrl: "#",
    isNew: true,
  },
  "mindfulness-in-plain-english": {
    id: "mindfulness-in-plain-english",
    title: "Mindfulness in Plain English",
    author: "Bhante Henepola Gunaratana",
    category: "Meditation",
    description:
      "A practical guide to meditation that explains how to develop mindfulness and awareness in daily life.",
    longDescription:
      "This book is a practical guide to meditation that explains how to develop mindfulness and awareness in daily life. Written in clear, accessible language, it provides step-by-step instructions for establishing a meditation practice. The author, a Theravada Buddhist monk, draws on decades of teaching experience to offer practical advice and answer common questions about meditation practice.",
    pages: 256,
    language: "English",
    downloadUrl: "#",
    isbn: "978-0-86171-321-9",
  },
  "art-of-happiness": {
    id: "art-of-happiness",
    title: "The Art of Happiness",
    author: "Dalai Lama",
    translator: "Howard Cutler",
    category: "Philosophy",
    description:
      "A guide to finding happiness through Buddhist principles, combining ancient wisdom with modern psychology.",
    longDescription:
      "In this book, the Dalai Lama and psychiatrist Howard Cutler explore the nature of happiness and how to achieve it. Drawing on Buddhist philosophy and modern psychology, they discuss topics such as the sources of happiness, dealing with suffering, and cultivating compassion. The book offers practical advice for finding happiness in everyday life.",
    pages: 336,
    language: "English",
    externalUrl: "https://example.com",
    isbn: "978-1-57322-111-5",
  },
  "zen-mind-beginners-mind": {
    id: "zen-mind-beginners-mind",
    title: "Zen Mind, Beginner's Mind",
    author: "Shunryu Suzuki",
    category: "Zen",
    description:
      "Informal talks on Zen meditation and practice, offering insights into the nature of the beginner's mind.",
    longDescription:
      "This book consists of informal talks on Zen meditation and practice. Suzuki Roshi emphasizes the importance of maintaining a beginner's mind—an attitude of openness, eagerness, and lack of preconceptions. The book covers topics such as posture, breathing, and the nature of practice, offering insights that are valuable for both beginners and experienced practitioners.",
    pages: 176,
    language: "English",
    downloadUrl: "#",
    isbn: "978-0-8348-0079-3",
  },
  "what-the-buddha-taught": {
    id: "what-the-buddha-taught",
    title: "What the Buddha Taught",
    author: "Walpola Rahula",
    category: "Teachings",
    description:
      "A comprehensive introduction to the fundamental principles of Buddhist doctrine, written for the modern reader.",
    longDescription:
      "This book provides a comprehensive introduction to the fundamental principles of Buddhist doctrine. Written by a Theravada Buddhist monk and scholar, it explains core concepts such as the Four Noble Truths, the Eightfold Path, and the nature of reality. The book is written in clear, accessible language and is suitable for both beginners and those with some knowledge of Buddhism.",
    pages: 151,
    language: "English",
    downloadUrl: "#",
    isNew: true,
    isbn: "978-0-8021-3031-0",
  },
  "peace-is-every-step": {
    id: "peace-is-every-step",
    title: "Peace Is Every Step",
    author: "Thich Nhat Hanh",
    category: "Practice",
    description:
      "The path of mindfulness in everyday life, showing how to transform difficulties and find peace in each moment.",
    longDescription:
      "This book shows how to apply mindfulness to everyday life. Thich Nhat Hanh explains how to transform difficulties and find peace in each moment through simple practices such as mindful breathing, walking, and eating. The book offers practical guidance for living with greater awareness and compassion.",
    pages: 160,
    language: "English",
    downloadUrl: "#",
    isbn: "978-0-553-35139-4",
  },
  "buddhist-psychology": {
    id: "buddhist-psychology",
    title: "Buddhist Psychology",
    author: "Geshe Tashi Tsering",
    category: "Psychology",
    description:
      "An exploration of Buddhist psychology and how it can help us understand the mind and overcome suffering.",
    longDescription:
      "This book explores Buddhist psychology and how it can help us understand the mind and overcome suffering. The author, a Tibetan Buddhist teacher, explains key concepts such as the nature of consciousness, the five aggregates, and the relationship between mind and body. The book offers insights that are relevant to both Buddhist practice and modern psychology.",
    pages: 192,
    language: "English",
    downloadUrl: "#",
  },
  "lotus-sutra": {
    id: "lotus-sutra",
    title: "The Lotus Sutra",
    author: "Buddha",
    translator: "Burton Watson",
    category: "Sutras",
    description:
      "One of the most important and influential Mahayana sutras, teaching the universal potential for Buddhahood.",
    longDescription:
      "The Lotus Sutra is one of the most important and influential Mahayana sutras. It teaches that all beings have the potential to become Buddhas and emphasizes the importance of skillful means in teaching. The sutra contains many parables and stories that illustrate key Buddhist concepts. Burton Watson's translation is widely regarded as one of the best English translations.",
    pages: 384,
    language: "English",
    downloadUrl: "#",
    isbn: "978-0-231-08161-9",
  },
  "meditation-for-beginners": {
    id: "meditation-for-beginners",
    title: "Meditation for Beginners",
    author: "Jack Kornfield",
    category: "Meditation",
    description:
      "A practical guide to starting a meditation practice, with simple techniques and helpful guidance.",
    longDescription:
      "This book provides a practical guide to starting a meditation practice. Jack Kornfield, a renowned meditation teacher, offers simple techniques and helpful guidance for beginners. The book covers topics such as posture, breathing, dealing with distractions, and establishing a regular practice. It includes guided meditations and practical exercises.",
    pages: 128,
    language: "English",
    downloadUrl: "#",
    isNew: true,
    isbn: "978-1-59179-942-6",
  },
  "awakening-the-buddha-within": {
    id: "awakening-the-buddha-within",
    title: "Awakening the Buddha Within",
    author: "Lama Surya Das",
    category: "Practice",
    description:
      "A guide to Tibetan Buddhist practices for Westerners, making ancient wisdom accessible to modern life.",
    longDescription:
      "This book is a guide to Tibetan Buddhist practices for Westerners. Lama Surya Das makes ancient wisdom accessible to modern life, explaining key concepts and practices in clear, relatable language. The book covers topics such as meditation, compassion, and the path to enlightenment, offering practical guidance for integrating Buddhist practice into daily life.",
    pages: 432,
    language: "English",
    downloadUrl: "#",
    isbn: "978-0-7679-0157-7",
  },
  "diamond-sutra": {
    id: "diamond-sutra",
    title: "The Diamond Sutra",
    author: "Buddha",
    translator: "Red Pine",
    category: "Sutras",
    description:
      "A key Mahayana sutra on the perfection of wisdom, emphasizing the emptiness of all phenomena.",
    longDescription:
      "The Diamond Sutra is a key Mahayana sutra on the perfection of wisdom. It emphasizes the emptiness of all phenomena and the importance of non-attachment. The sutra is known for its paradoxical statements that challenge conventional understanding. Red Pine's translation includes extensive commentary that helps readers understand this profound text.",
    pages: 480,
    language: "English",
    downloadUrl: "#",
    isbn: "978-1-58243-256-9",
  },
};

export default function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const book = booksData[params.id];

  useEffect(() => {
    if (!book) {
      router.push("/book");
    }
  }, [book, router]);

  if (!book) {
    return null;
  }

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors duration-200 text-sm font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Library
          </Link>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
              {/* Book Cover */}
              <div className="w-full md:w-64 lg:w-80 flex-shrink-0">
                <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-neutral-100 shadow-2xl">
                  {book.coverUrl ? (
                    <Image
                      src={book.coverUrl}
                      alt={`${book.title} by ${book.author}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 320px"
                      priority
                      quality={85}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  ) : (
                    <BookCoverPlaceholder title={book.title} />
                  )}
                  {book.isNew && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg">
                      New
                    </div>
                  )}
                </div>
              </div>

              {/* Book Info */}
              <div className="flex-1 text-white">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                    {book.category}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
                  {book.title}
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-6">
                  by {book.author}
                </p>
                {book.translator && (
                  <p className="text-lg text-white/80 mb-6">
                    Translated by {book.translator}
                  </p>
                )}

                {/* Book Details */}
                <div className="space-y-3 pt-6 border-t border-white/20">
                  {book.pages && (
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="text-sm">Pages:</span>
                      <span className="font-medium">{book.pages}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-white/90">
                    <span className="text-sm">Language:</span>
                    <span className="font-medium">{book.language}</span>
                  </div>
                  {book.isbn && (
                    <div className="flex items-center gap-2 text-white/90">
                      <span className="text-sm">ISBN:</span>
                      <span className="font-medium text-sm">{book.isbn}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-10 lg:p-12 border border-neutral-200/50 shadow-gentle">
              {/* Description */}
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark mb-6">
                  About This Book
                </h2>
                <p className="text-neutral-700 leading-relaxed text-lg">
                  {book.longDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-10 border-t border-neutral-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  {book.downloadUrl && (
                    <a
                      href={book.downloadUrl}
                      download
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download PDF
                    </a>
                  )}
                  {book.externalUrl && (
                    <a
                      href={book.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <span>Read Online</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

