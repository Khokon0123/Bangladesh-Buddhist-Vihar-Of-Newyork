"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, calmTransition } from "@/lib/animations";

// Icon Components
const SchoolIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-16 h-16"
    aria-hidden="true"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
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
    className="w-16 h-16"
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

interface PracticeCardProps {
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const PracticeCard = ({
  title,
  description,
  features,
  href,
  icon,
  gradientFrom,
  gradientTo,
}: PracticeCardProps) => {
  return (
    <Link
      href={href}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={calmTransition}
        className={`relative h-full min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br ${gradientFrom} ${gradientTo} p-10 sm:p-12 lg:p-16 flex flex-col justify-between transition-all duration-500 hover:scale-[1.02]`}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="text-white/90 mb-8 group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="relative z-10 mt-auto">
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-white/90 text-lg"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="inline-flex items-center gap-3 text-white font-medium text-lg group-hover:gap-4 transition-all duration-300">
            <span>Learn More</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function PracticesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-primary-dark mb-8 leading-tight">
              Our Practices
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Explore the paths of learning and meditation that guide our
              community toward wisdom, compassion, and inner peace.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Quote */}
      <section className="py-12 border-y border-neutral-200 bg-neutral-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-quote text-quote-xl text-neutral-700 italic leading-relaxed">
              &ldquo;The way is not in the sky. The way is in the heart.&rdquo;
              <footer className="mt-6 text-base text-neutral-500 not-italic">
                — Buddha
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Practices Grid */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Dhamma School */}
              <PracticeCard
                title="Dhamma School"
                description="A structured learning environment where students of all ages explore Buddhist teachings, philosophy, and ethics in a supportive community setting."
                features={[
                  "Weekly classes for children and adults",
                  "Study of Buddhist texts and teachings",
                  "Ethical living and moral development",
                  "Community building and fellowship",
                ]}
                href="/practices/dhamma-school"
                icon={<SchoolIcon />}
                gradientFrom="from-primary-dark"
                gradientTo="to-primary"
              />

              {/* Meditation */}
              <PracticeCard
                title="Meditation"
                description="Cultivate mindfulness, concentration, and inner peace through guided meditation sessions and personal practice guidance."
                features={[
                  "Guided meditation sessions",
                  "Mindfulness practice techniques",
                  "Walking and sitting meditation",
                  "Personal guidance from teachers",
                ]}
                href="/practices/meditation"
                icon={<MeditationIcon />}
                gradientFrom="from-primary"
                gradientTo="to-primary-light"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 sm:py-24 border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8">
              Both practices complement each other, offering a complete path of
              study and practice. Whether you are drawn to learning the
              teachings or developing your meditation practice, you are welcome
              to join us.
            </p>
            <Link
              href="/venerable-introduction"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
      </section>
    </main>
  );
}

