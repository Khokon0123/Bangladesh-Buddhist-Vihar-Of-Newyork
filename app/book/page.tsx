import Link from "next/link";

const categoryColors: Record<string, { bg: string; text: string; accent: string }> = {
  Sutras: { bg: "#3d1f1f", text: "#f5c21a", accent: "#c9a227" },
  Meditation: { bg: "#1a3a4a", text: "#7ecbf0", accent: "#5ab3de" },
  Philosophy: { bg: "#2a1a3e", text: "#c9a8f5", accent: "#a87de8" },
  Zen: { bg: "#1a3a2a", text: "#7ecfa8", accent: "#5abf8a" },
  Teachings: { bg: "#3a2a1a", text: "#f0c07e", accent: "#e0a855" },
  Practice: { bg: "#1a2a3a", text: "#7eaecf", accent: "#5a8fbf" },
  Psychology: { bg: "#2a1a2a", text: "#d07ecf", accent: "#b85db7" },
};

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  coverUrl?: string;
  isNew?: boolean;
}

const BookCard = ({
  id,
  title,
  author,
  category,
  description,
  coverUrl,
  isNew = false,
}: BookCardProps) => {
  const colors = categoryColors[category] || categoryColors["Teachings"];

  return (
    <Link
      href={`/book/${id}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="relative">
        {/* Book Cover */}
        <div
          className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 mb-4"
          style={{ backgroundColor: colors.bg }}
        >
          {/* Styled placeholder — always visible underneath */}
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: colors.accent }}>
              {category}
            </div>
            <div className="flex-1 flex items-center justify-center py-3">
              <svg viewBox="0 0 40 40" className="w-10 h-10 opacity-25" fill={colors.text} aria-hidden="true">
                <path d="M20 2C10.06 2 2 10.06 2 20s8.06 18 18 18 18-8.06 18-18S29.94 2 20 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 28h-8v-2h2V18h-2v-2h6v14h2v2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold leading-tight mb-1 line-clamp-3" style={{ color: colors.text }}>
                {title}
              </p>
              <p className="text-xs opacity-50 line-clamp-1" style={{ color: colors.text }}>
                {author}
              </p>
            </div>
          </div>

          {/* Cover image via background-image — covers placeholder when loaded, transparent when failed */}
          {coverUrl && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('${coverUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}

          {/* New Badge */}
          {isNew && (
            <div className="absolute top-3 right-3 bg-gold-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md z-10">
              New
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 z-10" />
        </div>

        {/* Book Info */}
        <div className="space-y-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">{category}</p>
            <h3 className="text-lg font-semibold text-primary-dark group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
              {title}
            </h3>
            <p className="text-sm text-neutral-600 mt-1">{author}</p>
          </div>
          <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default function BookPage() {
  const books: BookCardProps[] = [
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

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "480px", display: "flex", alignItems: "center" }} className="py-20 sm:py-24 lg:py-32">
        <img
          src="/images/360_F_208023141_dvQSqwEocLZ3qMXMx914GqRgzpXW7MUb.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", zIndex: 0 }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1 }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 2 }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <BookIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Digital Library
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
              Explore our collection of Buddhist texts, teachings, and meditation guides
            </p>
          </div>
        </div>
      </section>

      {/* Library Description */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our digital library contains carefully selected Buddhist texts, from ancient sutras to
              modern interpretations. Each book offers wisdom and guidance for your spiritual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
              {books.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Library Quote */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-quote text-quote-lg text-neutral-600 italic leading-relaxed border-l-4 border-gold-500 pl-6 py-2">
              &ldquo;Books are the quietest and most constant of friends; they are the most
              accessible and wisest of counselors, and the most patient of teachers.&rdquo;
              <footer className="mt-4 text-sm text-neutral-500 not-italic">— Charles W. Eliot</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
