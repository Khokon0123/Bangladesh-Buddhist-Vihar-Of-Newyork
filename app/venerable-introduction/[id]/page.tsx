import Link from "next/link";
import { getLang } from "@/lib/getLang";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getVenerableBySlug } from "@/lib/data/venerables";
import { loc, type WithBn } from "@/lib/i18n";

const en = {
  back: "Back to All Venerables",
  lineage: "Lineage",
  focus: "Teaching Focus",
  bio: "Biography",
  teachings: "Teachings & Practices",
  schedule: "Teaching Schedule",
  join: "Join a Practice Session",

};

const bn: typeof en = {
  back: "সকল ভান্তের তালিকায় ফিরে যান",
  lineage: "ধারা",
  focus: "শিক্ষার মূল বিষয়",
  bio: "জীবনী",
  teachings: "শিক্ষা ও সাধনা",
  schedule: "শিক্ষাদানের সময়সূচি",
  join: "সাধনা সেশনে যোগ দিন",

};

// Placeholder image component
const PlaceholderAvatar = ({ name }: { name: string }) => (
  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
    <span className="text-6xl font-light text-primary-dark/60">
      {name.charAt(0)}
    </span>
  </div>
);

interface VenerableDetail {
  id: string;
  name: string;
  title: string;
  lineage: string;
  teachingFocus: string;
  biography: string;
  teachings: string[];
  schedule?: string;
  imageUrl?: string;
}

// Extended detail data for venerables
const venerablesExtendedData: Record<string, WithBn<{ teachings: string[]; schedule?: string }>> = {
  "venerable-mudita-ratna-bhikkhu": {
    teachings: [
      "Daily meditation practice and mindfulness",
      "Integration of Buddhist principles in modern life",
      "Chan meditation techniques and wisdom teachings",
      "Compassion practices and loving-kindness in daily life",
    ],
    schedule: "Weekly meditation sessions at Bangladesh Buddhist Vihara Of New York, Dharma talks monthly",
    bn: { teachings: ["প্রতিদিনের ধ্যান অনুশীলন ও সচেতনতা", "আধুনিক জীবনে বৌদ্ধ নীতির প্রয়োগ", "চান ধ্যানের কৌশল ও প্রজ্ঞার শিক্ষা", "দৈনন্দিন জীবনে করুণা ও মৈত্রীর চর্চা"], schedule: "বাংলাদেশ বৌদ্ধ বিহার, নিউ ইয়র্কে সাপ্তাহিক ধ্যান সেশন এবং মাসিক ধর্মদেশনা" },
  },
  "venerable-monindra-bangsha-bhikkhu": {
    teachings: [
      "Vipassana (insight) meditation",
      "Buddhist psychology and mental well-being",
      "Women's practice and empowerment in Buddhism",
      "Sutta study and Pali language",
    ],
    schedule: "Vipassana retreats monthly, weekly meditation classes on Wednesdays",
    bn: { teachings: ["বিদর্শন (বিপস্সনা) ধ্যান", "বৌদ্ধ মনোবিজ্ঞান ও মানসিক সুস্থতা", "বৌদ্ধধর্মে নারীর সাধনা ও ক্ষমতায়ন", "সুত্ত অধ্যয়ন ও পালি ভাষা"], schedule: "প্রতি মাসে বিদর্শন রিট্রিট এবং প্রতি বুধবার সাপ্তাহিক ধ্যান ক্লাস" },
  },
  "venerable-vishuddhi-bangsha-bhikkhu": {
    teachings: [
      "Buddhist teachings and Dhamma study",
      "Meditation practice and guidance",
      "Monastic discipline and Vinaya",
      "Community support and spiritual guidance",
    ],
    schedule: "Available for guidance at Bangladesh Buddhist Vihara Of New York throughout the week",
    bn: { teachings: ["বুদ্ধের শিক্ষা ও ধর্ম অধ্যয়ন", "ধ্যান অনুশীলন ও দিকনির্দেশনা", "ভিক্ষু-শৃঙ্খলা ও বিনয়", "সংঘের সহায়তা ও আধ্যাত্মিক দিকনির্দেশনা"], schedule: "সপ্তাহজুড়ে বাংলাদেশ বৌদ্ধ বিহার, নিউ ইয়র্কে দিকনির্দেশনার জন্য উপস্থিত থাকেন" },
  },
  "venerable-ajahn-somchai": {
    teachings: [
      "Jhana (absorption) meditation",
      "Walking meditation techniques",
      "Monastic discipline and Vinaya",
      "Intensive meditation retreats",
    ],
    schedule: "Monthly intensive retreats, weekly meditation guidance on Fridays",
  },
  "venerable-bhikkhuni-pema": {
    teachings: [
      "Mahamudra meditation",
      "Tonglen (giving and taking) practice",
      "Tibetan Buddhist philosophy",
      "Bodhisattva practices and vows",
    ],
    schedule: "Compassion practice sessions on Tuesdays, monthly Mahamudra workshops",
  },
  "venerable-master-wang": {
    teachings: [
      "Silent illumination (shikantaza) meditation",
      "Koan study and inquiry",
      "Integration of practice in daily activities",
      "Zen philosophy and literature",
    ],
    schedule: "Daily morning meditation, Dharma talks on second Saturday of each month",
  },
};

export default function VenerableDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const lang = getLang();
  const t = lang === "bn" ? bn : en;
  const found = getVenerableBySlug(params.id);
  const ext = venerablesExtendedData[params.id];
  const baseVenerable = found && loc(found, lang);
  const extendedData = ext && loc(ext, lang);

  // If venerable not found, show 404
  if (!baseVenerable || !extendedData) {
    notFound();
  }

  const venerable: VenerableDetail = {
    id: baseVenerable.id,
    name: baseVenerable.name,
    title: baseVenerable.title,
    lineage: baseVenerable.lineage,
    teachingFocus: baseVenerable.teachingFocus,
    biography: baseVenerable.bio ?? "",
    teachings: extendedData.teachings,
    schedule: extendedData.schedule,
    imageUrl: baseVenerable.imageUrl,
  };

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/venerable-introduction"
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
            {t.back}
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo */}
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-neutral-100 border border-white/20 shadow-lg">
                  {venerable.imageUrl ? (
                    <Image
                      src={venerable.imageUrl}
                      alt={`${venerable.name}, ${venerable.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 256px"
                      priority
                      quality={90}
                      unoptimized
                    />
                  ) : (
                    <PlaceholderAvatar name={venerable.name} />
                  )}
                </div>
              </div>

              {/* Header Info */}
              <div className="flex-1 text-white">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2">
                  {venerable.name}
                </h1>
                <p className="text-xl text-white/90 mb-6">{venerable.title}</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-white/70 mb-1">
                      {t.lineage}
                    </p>
                    <p className="text-white/95">{venerable.lineage}</p>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-wider text-white/70 mb-1">
                      {t.focus}
                    </p>
                    <p className="text-white/95">{venerable.teachingFocus}</p>
                  </div>
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
              {/* Biography */}
              <div className="mb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark mb-6">
                  {t.bio}
                </h2>
                <p className="text-neutral-700 leading-relaxed text-lg">
                  {venerable.biography}
                </p>
              </div>

              {/* Teachings */}
              <div className="mb-10 pt-10 border-t border-neutral-200">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark mb-6">
                  {t.teachings}
                </h2>
                <ul className="space-y-3">
                  {venerable.teachings.map((teaching, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-neutral-700"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{teaching}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Schedule */}
              {venerable.schedule && (
                <div className="pt-10 border-t border-neutral-200">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-primary-dark mb-6">
                    {t.schedule}
                  </h2>
                  <p className="text-neutral-700 leading-relaxed text-lg">
                    {venerable.schedule}
                  </p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
              <Link
                href="/venerable-introduction"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
                {t.back}
              </Link>
              <Link
                href="/practices/meditation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t.join}
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

