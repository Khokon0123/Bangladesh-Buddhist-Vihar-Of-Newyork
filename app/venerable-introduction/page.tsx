import Link from "next/link";
import Image from "next/image";
import { getAllVenerables } from "@/lib/data/venerables";

// Placeholder image component for when images aren't available
const PlaceholderAvatar = ({ name }: { name: string }) => (
  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center" role="img" aria-label={`Portrait placeholder for ${name}`}>
    <span className="text-4xl font-light text-primary-dark/60" aria-hidden="true">
      {name.charAt(0)}
    </span>
  </div>
);

interface VenerableCardProps {
  id: string;
  name: string;
  title: string;
  lineage: string;
  teachingFocus: string;
  imageUrl?: string;
}

const VenerableCard = ({
  id,
  name,
  title,
  lineage,
  teachingFocus,
  imageUrl,
}: VenerableCardProps) => {
  const isPlaceholder = id.startsWith("venerable-placeholder");

  if (isPlaceholder) {
    return (
      <div className="bg-white rounded-2xl overflow-hidden border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center min-h-[420px] p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-neutral-300">Coming Soon</p>
        <p className="text-sm text-neutral-300 mt-1">To be announced</p>
      </div>
    );
  }

  return (
    <Link
      href={`/venerable-introduction/${id}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-neutral-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gentle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {/* Photo Section */}
      <div className="relative w-full aspect-square overflow-hidden bg-neutral-100 rounded-2xl">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${name}, ${title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            quality={85}
            unoptimized
          />
        ) : (
          <PlaceholderAvatar name={name} />
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-8">
        <div className="mb-3">
          <h3 className="text-2xl font-semibold text-primary-dark mb-1 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-neutral-500 font-medium">{title}</p>
        </div>

        <div className="space-y-3 pt-3 border-t border-neutral-100">
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">Lineage</p>
            <p className="text-sm text-neutral-700 leading-relaxed">{lineage}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">Teaching Focus</p>
            <p className="text-sm text-neutral-600 leading-relaxed">{teachingFocus}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all duration-300">
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default function VenerableIntroduction() {
  // Get venerables from centralized data source
  const venerables = getAllVenerables();

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "500px", display: "flex", alignItems: "center" }} className="py-20 sm:py-24 lg:py-32">
        <img
          src="/images/imagesmonks-learning.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.50)", zIndex: 1 }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 2 }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <PeopleIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
              Meet Our Venerables
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
              Learn from our respected teachers who guide our community with
              wisdom, compassion, and dedication
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Text */}
      <section aria-labelledby="introduction-heading" className="py-12 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="introduction-heading" className="sr-only">About Our Teachers</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our venerable teachers come from diverse Buddhist traditions,
              bringing together centuries of wisdom and practice. Each teacher
              offers unique insights and guidance to help you on your spiritual
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Venerables Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {venerables.map((venerable) => (
              <VenerableCard
                key={venerable.id}
                id={venerable.slug}
                name={venerable.name}
                title={venerable.title}
                lineage={venerable.lineage}
                teachingFocus={venerable.teachingFocus}
                imageUrl={venerable.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-quote text-quote-lg text-neutral-600 italic leading-relaxed border-l-4 border-gold-500 pl-6 py-2">
              &ldquo;A teacher opens the door, but you must enter by yourself.&rdquo;
              <footer className="mt-4 text-sm text-neutral-500 not-italic">
                — Chinese Proverb
              </footer>
            </blockquote>
            <p className="mt-8 text-neutral-600 leading-relaxed">
              We invite you to explore the teachings of our venerables and find
              the guidance that resonates with your path. Each teacher offers
              their unique perspective while honoring the timeless wisdom of the
              Buddha.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

// People Icon component
function PeopleIcon({ className }: { className?: string }) {
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

