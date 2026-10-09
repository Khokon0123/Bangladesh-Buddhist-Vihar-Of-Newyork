"use client";

import { useLang } from "@/components/LanguageProvider";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, calmTransition } from "@/lib/animations";

const en = {
  title: "Our Practices",
  subtitle: "Explore the paths of learning and meditation that guide our community toward wisdom, compassion, and inner peace.",
  quote: "The way is not in the sky. The way is in the heart.",
  buddha: "— Buddha",
  dsTitle: "Dhamma School",
  dsText: "A structured learning environment where students of all ages explore Buddhist teachings, philosophy, and ethics in a supportive community setting.",
  medTitle: "Meditation",
  medText: "Cultivate mindfulness, concentration, and inner peace through guided meditation sessions and personal practice guidance.",
  closing: "Both practices complement each other, offering a complete path of study and practice. Whether you are drawn to learning the teachings or developing your meditation practice, you are welcome to join us.",
  teachers: "Meet Our Teachers",
  more: "Learn More",
  dsFeatures: ["Weekly classes for children and adults", "Study of Buddhist texts and teachings", "Ethical living and moral development", "Community building and fellowship"],
  medFeatures: ["Guided meditation sessions", "Mindfulness practice techniques", "Walking and sitting meditation", "Personal guidance from teachers"],
};

const bn: typeof en = {
  title: "আমাদের সাধনা",
  subtitle: "শিক্ষা ও ধ্যানের সেই পথগুলো অন্বেষণ করুন, যা আমাদের সংঘকে প্রজ্ঞা, করুণা ও অন্তরের শান্তির দিকে এগিয়ে নেয়।",
  quote: "পথ আকাশে নেই। পথ রয়েছে হৃদয়ে।",
  buddha: "— বুদ্ধ",
  dsTitle: "ধর্মীয় বিদ্যালয়",
  dsText: "একটি সুসংগঠিত শিক্ষার পরিবেশ, যেখানে সব বয়সের শিক্ষার্থীরা সহায়ক সামাজিক পরিবেশে বুদ্ধের শিক্ষা, দর্শন ও নৈতিকতা সম্পর্কে জানতে পারে।",
  medTitle: "ধ্যান",
  medText: "নির্দেশিত ধ্যান সেশন ও ব্যক্তিগত সাধনা-নির্দেশনার মাধ্যমে সচেতনতা, একাগ্রতা ও অন্তরের শান্তি গড়ে তুলুন।",
  closing: "এই দুই সাধনা একে অপরের পরিপূরক এবং অধ্যয়ন ও অনুশীলনের এক পূর্ণাঙ্গ পথ দেখায়। আপনি শিক্ষা গ্রহণে আগ্রহী হোন বা ধ্যান অনুশীলন গড়ে তুলতে চান, আমাদের সাথে যোগ দিতে আপনাকে স্বাগতম।",
  teachers: "আমাদের গুরুদের সাথে পরিচিত হোন",
  more: "আরও জানুন",
  dsFeatures: ["শিশু ও প্রাপ্তবয়স্কদের জন্য সাপ্তাহিক ক্লাস", "বৌদ্ধ গ্রন্থ ও শিক্ষা অধ্যয়ন", "নৈতিক জীবনযাপন ও চরিত্র গঠন", "সংঘ গঠন ও সৌহার্দ্য"],
  medFeatures: ["নির্দেশিত ধ্যান সেশন", "সচেতনতা চর্চার কৌশল", "চংক্রমণ ও উপবেশন ধ্যান", "গুরুদের ব্যক্তিগত নির্দেশনা"],
};

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
  moreLabel: string;
}

const PracticeCard = ({
  title,
  description,
  features,
  href,
  icon,
  gradientFrom,
  gradientTo,
  moreLabel,
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
            <span>{moreLabel}</span>
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
  const { lang } = useLang();
  const t = lang === "bn" ? bn : en;
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-primary-dark mb-8 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Quote */}
      <section className="py-12 border-y border-neutral-200 bg-neutral-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-quote text-quote-xl text-neutral-700 italic leading-relaxed">
              &ldquo;{t.quote}&rdquo;
              <footer className="mt-6 text-base text-neutral-500 not-italic">
                {t.buddha}
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
                title={t.dsTitle}
                description={t.dsText}
                features={t.dsFeatures}
                href="/practices/dhamma-school"
                icon={<SchoolIcon />}
                gradientFrom="from-primary-dark"
                gradientTo="to-primary"
                moreLabel={t.more}
              />

              {/* Meditation */}
              <PracticeCard
                title={t.medTitle}
                description={t.medText}
                features={t.medFeatures}
                href="/practices/meditation"
                icon={<MeditationIcon />}
                gradientFrom="from-primary"
                gradientTo="to-primary-light"
                moreLabel={t.more}
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
              {t.closing}
            </p>
            <Link
              href="/venerable-introduction"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t.teachers}
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

