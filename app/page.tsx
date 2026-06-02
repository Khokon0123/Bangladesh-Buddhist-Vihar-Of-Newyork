import Link from "next/link";

// Icon Components for Feature Cards
const BookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12"
    aria-hidden="true"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const MeditationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
  </svg>
);

const PeopleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Full-Screen Hero Section */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src="/images/buddha-lotus.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Dark Overlay for Text Contrast */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
            zIndex: 1,
          }}
        />

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 1.5rem",
            maxWidth: "56rem",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            Welcome to Peace
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
              color: "rgba(255,255,255,0.95)",
              marginBottom: "2rem",
              fontWeight: 300,
              lineHeight: 1.7,
              textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          >
            A sanctuary for wisdom, compassion, and inner transformation
          </p>

          {/* Inspirational Quote */}
          <blockquote
            style={{
              maxWidth: "42rem",
              margin: "0 auto 2rem",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(8px)",
              borderRadius: "1rem",
              padding: "2rem",
              borderLeft: "4px solid #f5c21a",
            }}
          >
            <p style={{ fontStyle: "italic", lineHeight: 1.8, color: "#823C3C", fontSize: "1.25rem", marginBottom: 0 }}>
              &ldquo;The mind is everything. What you think you become.&rdquo;
            </p>
            <footer style={{ marginTop: "1rem", color: "#823C3C", fontSize: "1rem" }}>
              — Buddha
            </footer>
          </blockquote>

          {/* CTA Button */}
          <Link
            href="/learn-buddhism"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              background: "#ffffff",
              color: "#823C3C",
              borderRadius: "0.75rem",
              fontWeight: 500,
              fontSize: "1.125rem",
              textDecoration: "none",
            }}
          >
            Begin Your Journey
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        >
          <svg
            style={{ width: "1.5rem", height: "1.5rem", color: "rgba(255,255,255,0.8)" }}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-dark mb-4">
              Explore Our Path
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Discover teachings, practices, and community that guide you toward
              inner peace and wisdom
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto" role="list">
            {/* Learn Buddhism Card */}
            <article className="group bg-white rounded-2xl p-8 shadow-gentle hover:shadow-lg border border-neutral-100 hover:border-primary/20" role="listitem">
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookIcon />
              </div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                Learn Buddhism
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Explore the profound teachings of the Buddha, understand the
                Four Noble Truths, and discover the path to enlightenment.
              </p>
              <Link
                href="/learn-buddhism"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium group-hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            {/* Practice Meditation Card */}
            <article className="group bg-white rounded-2xl p-8 shadow-gentle hover:shadow-lg border border-neutral-100 hover:border-primary/20" role="listitem">
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <MeditationIcon />
              </div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                Practice Meditation
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Cultivate mindfulness and inner peace through guided meditation
                sessions and mindfulness practices for daily life.
              </p>
              <Link
                href="/practices/meditation"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium group-hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>

            {/* Meet the Venerables Card */}
            <article className="group bg-white rounded-2xl p-8 shadow-gentle hover:shadow-lg border border-neutral-100 hover:border-primary/20" role="listitem">
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <PeopleIcon />
              </div>
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                Meet the Venerables
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Connect with our respected teachers and learn from their wisdom,
                experience, and compassionate guidance.
              </p>
              <Link
                href="/venerable-introduction"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium group-hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
