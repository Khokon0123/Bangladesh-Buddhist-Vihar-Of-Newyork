import Link from "next/link";

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <section style={{ position: "relative", overflow: "hidden", minHeight: "560px", display: "flex", alignItems: "center" }} className="py-20 sm:py-24 lg:py-32">
        <img
          src="/images/WhatsApp Image 2026-04-25 at 14.44.57.jpeg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", zIndex: 0 }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.48)", zIndex: 1 }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 2 }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
              About Our Temple
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
              A place of peace, wisdom, and compassion in the heart of our
              community
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg">
                <p>
                  Our temple was founded with a simple yet profound vision: to
                  create a sanctuary where people from all walks of life can
                  come together to learn, practice, and find peace. What began
                  as a small gathering of practitioners has grown into a vibrant
                  community dedicated to the teachings of the Buddha.
                </p>
                <p>
                  Over the years, we have welcomed thousands of visitors,
                  students, and practitioners. Each person brings their own
                  unique journey, their own questions, and their own search for
                  meaning. What unites us is not our background or beliefs, but
                  our shared aspiration to understand ourselves better and to
                  live with greater wisdom and compassion.
                </p>
                <p>
                  Our teachers come from diverse Buddhist traditions, bringing
                  together centuries of wisdom and practice. They share not just
                  knowledge, but their own experiences of struggle, discovery,
                  and transformation. This personal touch makes our teachings
                  accessible and relevant to modern life.
                </p>
                <p>
                  Today, we continue to serve our community through regular
                  meditation sessions, Dhamma school classes, and various
                  programs that support both beginners and experienced
                  practitioners. We believe that the path to peace is available
                  to everyone, regardless of their background or circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-8 text-center">
              Our Temple
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/WhatsApp Image 2026-04-25 at 14.44.55.jpeg"
                  alt="Bangladesh Buddhist Vihara Of New York"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/WhatsApp Image 2026-04-25 at 14.44.57.jpeg"
                  alt="Bangladesh Buddhist Vihara Of New York"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/WhatsApp Image 2026-04-25 at 14.44.58.jpeg"
                  alt="Bangladesh Buddhist Vihara Of New York"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <blockquote className="font-quote text-quote-xl sm:text-quote-2xl text-primary-dark italic leading-relaxed text-center border-l-0 pl-0">
              <p className="mb-6">
                Peace does not belong to any religion. It belongs to
                yourself.
              </p>
              <footer className="text-lg text-neutral-600 not-italic font-normal">
                — Our Guiding Principle
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-gentle">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  Our Mission
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  To provide a welcoming space where people can learn Buddhist
                  teachings, develop their meditation practice, and cultivate
                  wisdom and compassion in their daily lives. We are committed
                  to making these ancient teachings accessible and relevant to
                  modern practitioners.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-gentle">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  Our Vision
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  To be a beacon of peace and wisdom in our community, where
                  individuals can discover their own inner peace and contribute
                  to a more compassionate world. We envision a community where
                  the practice of mindfulness and compassion transforms not just
                  individuals, but our society as a whole.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200/50 shadow-gentle">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  Our Values
                </h3>
                <ul className="space-y-3 text-neutral-700 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Compassion for all beings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Wisdom through study and practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Inclusivity and welcoming all</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Authenticity and personal growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Service to the community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-8 text-center">
              Our Community
            </h2>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg">
                <p>
                  Our community is made up of people from all backgrounds and
                  walks of life. Some come seeking peace in times of difficulty.
                  Others are drawn to the wisdom of Buddhist philosophy. Many
                  simply want to learn meditation and mindfulness practices that
                  can help them navigate the challenges of modern life.
                </p>
                <p>
                  What brings us together is not uniformity, but our shared
                  commitment to practice and growth. We learn from each other,
                  support each other, and walk this path together. Whether you
                  are new to Buddhism or have been practicing for years, you are
                  welcome here.
                </p>
                <p>
                  Our programs are designed to meet people where they are. From
                  beginner-friendly meditation classes to advanced Dhamma study,
                  from weekly gatherings to intensive retreats, we offer
                  opportunities for everyone to deepen their practice and
                  understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-6">
              Join Us
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Whether you are curious about Buddhism, looking to start a
              meditation practice, or seeking a community of like-minded
              practitioners, we invite you to visit us and see what we have to
              offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/practices"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Explore Our Practices
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
              <Link
                href="/venerable-introduction"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Meet Our Teachers
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
