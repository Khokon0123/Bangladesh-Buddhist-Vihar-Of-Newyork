"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Category filter component
interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <button
        onClick={() => onCategoryChange("All")}
        aria-pressed={activeCategory === "All"}
        aria-label="Show all articles"
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
          activeCategory === "All"
            ? "bg-primary text-white shadow-soft"
            : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
        }`}
      >
        All Articles
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          aria-pressed={activeCategory === category}
          aria-label={`Filter articles by ${category} category`}
          className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? "bg-primary text-white shadow-soft"
              : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

// Article card component
interface ArticleCardProps {
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

const ArticleCard = ({
  id,
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  imageUrl,
  featured = false,
}: ArticleCardProps) => {
  if (featured) {
    return (
      <article>
        <Link
          href={`/blog/${id}`}
          className="group block bg-white rounded-2xl overflow-hidden border border-neutral-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
        >
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`Featured article: ${title} - ${excerpt.substring(0, 100)}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" role="img" aria-label={`Placeholder image for article: ${title}`}>
              <span className="text-6xl text-neutral-300" aria-hidden="true">📿</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
              {category}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3 leading-tight group-hover:underline">
              {title}
            </h2>
            <p className="text-lg text-white/90 mb-4 line-clamp-2">{excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span>{author}</span>
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{readTime} read</span>
            </div>
          </div>
        </div>
        </Link>
      </article>
    );
  }

  return (
    <article>
      <Link
        href={`/blog/${id}`}
        className="group block bg-white rounded-xl overflow-hidden border border-neutral-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gentle"
      >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
        {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`Article: ${title} in ${category} category`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl text-neutral-300">📿</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary-dark">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-neutral-500">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>
      </Link>
    </article>
  );
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      setEmailError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setSubscribed(true);
  };

  // Sample blog data - in a real app, this would come from a CMS
  const allArticles: ArticleCardProps[] = [
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

  const categories = [
    "Meditation",
    "Teachings",
    "Practice",
    "Wellness",
  ];

  const filteredArticles =
    activeCategory === "All"
      ? allArticles
      : allArticles.filter((article) => article.category === activeCategory);

  const featuredArticle = filteredArticles.find((article) => article.featured);
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured
  );

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "480px", display: "flex", alignItems: "center" }} className="py-20 sm:py-24 lg:py-32">
        <img
          src="/images/buddhism-2.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% center", zIndex: 0 }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.48)", zIndex: 1 }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 2 }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Buddhist Wisdom & Insights
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
              Explore teachings, practices, and reflections from our community
              of practitioners and teachers
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <nav aria-label="Article categories" className="py-8 bg-white border-b border-neutral-200 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </nav>

      {/* Featured Article */}
      {featuredArticle && (
        <section aria-labelledby="featured-article-heading" className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto mb-4">
              <h2 id="featured-article-heading" className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                Featured Article
              </h2>
            </div>
            <div className="max-w-5xl mx-auto">
              <ArticleCard {...featuredArticle} />
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section aria-labelledby="articles-heading" className="py-8 sm:py-12 lg:py-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {regularArticles.length > 0 ? (
            <>
              <div className="max-w-7xl mx-auto mb-8">
                <h2 id="articles-heading" className="text-2xl sm:text-3xl font-semibold text-primary-dark">
                  {activeCategory === "All" ? "All Articles" : `${activeCategory} Articles`}
                </h2>
              </div>
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
                  {regularArticles.map((article) => (
                    <ArticleCard key={article.id} {...article} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-16">
              <p className="text-lg text-neutral-600" role="status" aria-live="polite">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary-dark mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Receive our latest articles and teachings directly in your inbox
            </p>
            {subscribed ? (
              <div className="max-w-md mx-auto px-6 py-4 rounded-lg border border-primary/30 bg-primary/5">
                <p className="text-primary-dark font-medium text-lg">
                  🙏 Thank you for subscribing!
                </p>
                <p className="text-neutral-600 text-sm mt-1">
                  You'll receive our latest teachings and articles in your inbox.
                </p>
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    placeholder="Enter your email"
                    aria-label="Email address for newsletter subscription"
                    className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={handleSubscribe}
                    aria-label="Subscribe to newsletter"
                    className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Subscribe
                  </button>
                </div>
                {emailError && (
                  <p className="text-red-600 text-sm mt-2 text-left">{emailError}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

