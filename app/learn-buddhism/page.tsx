import Link from "next/link";
import { getLang } from "@/lib/getLang";

const en = {
  title: "Learn Buddhism",
  subtitle: "Discover the fundamental teachings of the Buddha and begin your journey toward wisdom and inner peace",
  n: ["1", "2", "3", "4"],
  step1: "Four Noble Truths",
  step2: "Eightfold Path",
  step3: "Karma",
  step4: "Nirvana",
  truthsTitle: "The Four Noble Truths",
  truthsText: "The foundation of Buddhist teaching, these four truths explain the nature of suffering and the path to liberation.",
  fourNobleTruths: [
    {
      number: "1",
      title: "The Truth of Suffering (Dukkha)",
      description:
        "Life inherently involves suffering, dissatisfaction, and unease. This includes physical pain, emotional distress, and the fundamental unsatisfactoriness of existence.",
    },
    {
      number: "2",
      title: "The Truth of the Cause of Suffering (Samudaya)",
      description:
        "Suffering arises from craving, attachment, and ignorance. Our desires and attachments create the conditions for suffering to manifest in our lives.",
    },
    {
      number: "3",
      title: "The Truth of the End of Suffering (Nirodha)",
      description:
        "Suffering can be overcome by eliminating craving and attachment. Liberation from suffering is possible through the cessation of desire.",
    },
    {
      number: "4",
      title: "The Truth of the Path (Magga)",
      description:
        "The Eightfold Path provides the way to end suffering. This practical guide leads to the cessation of suffering and the attainment of enlightenment.",
    },
  ],
  pathTitle: "The Noble Eightfold Path",
  pathText: "The practical guide to ending suffering, organized into three groups: Wisdom, Ethical Conduct, and Mental Development.",
  wisdom: "Wisdom (Prajna)",
  ethical: "Ethical Conduct (Sila)",
  mental: "Mental Development (Samadhi)",
  eightfoldPath: {
    wisdom: [
      { name: "Right View", description: "Understanding the Four Noble Truths and seeing reality as it truly is, free from delusion." },
      { name: "Right Intention", description: "Cultivating thoughts of renunciation, goodwill, and harmlessness toward all beings." },
    ],
    ethical: [
      { name: "Right Speech", description: "Speaking truthfully, kindly, and constructively. Avoiding lies, harsh words, and gossip." },
      { name: "Right Action", description: "Acting with compassion and respect. Abstaining from harming, stealing, and sexual misconduct." },
      { name: "Right Livelihood", description: "Earning a living in ways that do not harm others or oneself, avoiding occupations that cause suffering." },
    ],
    mental: [
      { name: "Right Effort", description: "Cultivating positive mental states and abandoning negative ones through mindful effort." },
      { name: "Right Mindfulness", description: "Developing awareness of body, feelings, mind, and mental phenomena in the present moment." },
      { name: "Right Concentration", description: "Developing focused, one-pointed attention through meditation practice." },
    ],
  },
  karmaTitle: "Understanding Karma",
  karmaText: "The law of cause and effect that governs all actions and their consequences.",
  whatKarma: "What is Karma?",
  whatKarmaText:
    "Karma is the universal law of cause and effect. Every intentional action—whether physical, verbal, or mental—creates a corresponding result. Good actions lead to positive outcomes, while harmful actions lead to suffering.",
  keyPrinciples: "Key Principles",
  principles: ["Actions have consequences", "Intention matters most", "Karma is not punishment", "We can change our karma"],
  typesKarma: "Types of Karma",
  types: ["Good karma (wholesome actions)", "Bad karma (unwholesome actions)", "Neutral karma (neither good nor bad)"],
  nirvanaTitle: "The Goal: Nirvana",
  nirvanaText: "The ultimate goal of Buddhist practice—liberation from suffering and the cycle of rebirth.",
  whatNirvana: "What is Nirvana?",
  whatNirvanaText:
    "Nirvana is the complete cessation of suffering, the end of craving and attachment, and liberation from the cycle of birth and death (samsara). It is the ultimate peace and freedom that comes from understanding the true nature of reality.",
  characteristics: "Characteristics",
  chars: ["Freedom from suffering", "End of craving and attachment", "Perfect peace and happiness", "Liberation from samsara"],
  pathToNirvana: "The Path to Nirvana",
  pathToNirvanaText:
    "Nirvana is achieved through following the Eightfold Path, practicing meditation, developing wisdom, and cultivating compassion. It requires dedicated practice and understanding of the Four Noble Truths.",
  ctaTitle: "Ready to Begin Your Practice?",
  ctaText: "Join our meditation sessions and connect with our community to deepen your understanding and practice.",
  ctaMeditate: "Start Meditating",
  ctaTeachers: "Meet Our Teachers",
};

const bn: typeof en = {
  title: "বৌদ্ধধর্ম শিক্ষা",
  subtitle: "বুদ্ধের মৌলিক শিক্ষাগুলো জানুন এবং প্রজ্ঞা ও অন্তরের শান্তির পথে আপনার যাত্রা শুরু করুন",
  n: ["১", "২", "৩", "৪"],
  step1: "চার আর্যসত্য",
  step2: "আর্য অষ্টাঙ্গিক মার্গ",
  step3: "কর্ম",
  step4: "নির্বাণ",
  truthsTitle: "চার আর্যসত্য",
  truthsText: "বুদ্ধের শিক্ষার ভিত্তি এই চারটি সত্য। এগুলো দুঃখের প্রকৃতি এবং মুক্তির পথ ব্যাখ্যা করে।",
  fourNobleTruths: [
    {
      number: "১",
      title: "দুঃখ সত্য (দুক্খ)",
      description:
        "জীবনের সাথে দুঃখ, অতৃপ্তি ও অস্থিরতা অবিচ্ছেদ্যভাবে জড়িত। এর মধ্যে রয়েছে শারীরিক যন্ত্রণা, মানসিক কষ্ট এবং অস্তিত্বের মৌলিক অপূর্ণতা।",
    },
    {
      number: "২",
      title: "দুঃখের কারণ সত্য (সমুদয়)",
      description:
        "তৃষ্ণা, আসক্তি ও অবিদ্যা থেকে দুঃখের উৎপত্তি। আমাদের কামনা ও আসক্তিই জীবনে দুঃখ প্রকাশের পরিবেশ তৈরি করে।",
    },
    {
      number: "৩",
      title: "দুঃখ নিরোধ সত্য (নিরোধ)",
      description:
        "তৃষ্ণা ও আসক্তি দূর করে দুঃখ অতিক্রম করা সম্ভব। কামনার নিবৃত্তির মাধ্যমেই দুঃখ থেকে মুক্তি লাভ করা যায়।",
    },
    {
      number: "৪",
      title: "দুঃখ নিরোধের পথ সত্য (মার্গ)",
      description:
        "আর্য অষ্টাঙ্গিক মার্গই দুঃখ অবসানের পথ। এই ব্যবহারিক নির্দেশনা দুঃখের নিবৃত্তি ও বোধি লাভের দিকে নিয়ে যায়।",
    },
  ],
  pathTitle: "আর্য অষ্টাঙ্গিক মার্গ",
  pathText: "দুঃখ অবসানের ব্যবহারিক নির্দেশনা, যা তিনটি ভাগে বিন্যস্ত: প্রজ্ঞা, শীল ও সমাধি।",
  wisdom: "প্রজ্ঞা (পঞ্ঞা)",
  ethical: "নৈতিক আচরণ (শীল)",
  mental: "চিত্তের বিকাশ (সমাধি)",
  eightfoldPath: {
    wisdom: [
      { name: "সম্যক দৃষ্টি", description: "চার আর্যসত্য উপলব্ধি করা এবং মোহমুক্ত হয়ে বাস্তবতাকে যথাযথভাবে দেখা।" },
      { name: "সম্যক সংকল্প", description: "সকল প্রাণীর প্রতি ত্যাগ, মৈত্রী ও অহিংসার চিন্তা লালন করা।" },
    ],
    ethical: [
      { name: "সম্যক বাক্য", description: "সত্য, সদয় ও গঠনমূলক কথা বলা। মিথ্যা, কটু কথা ও পরনিন্দা থেকে বিরত থাকা।" },
      { name: "সম্যক কর্ম", description: "করুণা ও শ্রদ্ধার সাথে কাজ করা। প্রাণিহত্যা, চুরি ও ব্যভিচার থেকে বিরত থাকা।" },
      { name: "সম্যক জীবিকা", description: "নিজের বা অন্যের ক্ষতি না করে জীবিকা অর্জন করা এবং দুঃখ সৃষ্টিকারী পেশা পরিহার করা।" },
    ],
    mental: [
      { name: "সম্যক প্রচেষ্টা", description: "সচেতন প্রচেষ্টার মাধ্যমে কুশল চিত্ত গড়ে তোলা এবং অকুশল চিত্ত পরিত্যাগ করা।" },
      { name: "সম্যক স্মৃতি", description: "বর্তমান মুহূর্তে কায়া, বেদনা, চিত্ত ও ধর্ম সম্পর্কে সচেতনতা গড়ে তোলা।" },
      { name: "সম্যক সমাধি", description: "ধ্যান অনুশীলনের মাধ্যমে একাগ্র, একমুখী মনোযোগ গড়ে তোলা।" },
    ],
  },
  karmaTitle: "কর্মকে বোঝা",
  karmaText: "কার্যকারণের নিয়ম, যা সকল কর্ম ও তার ফলাফলকে নিয়ন্ত্রণ করে।",
  whatKarma: "কর্ম কী?",
  whatKarmaText:
    "কর্ম হলো কার্যকারণের সার্বজনীন নিয়ম। প্রতিটি সচেতন কাজ—তা কায়িক, বাচিক বা মানসিক যা-ই হোক—তার অনুরূপ ফল সৃষ্টি করে। কুশল কর্ম শুভ ফল আনে, আর অকুশল কর্ম দুঃখের কারণ হয়।",
  keyPrinciples: "মূল নীতি",
  principles: ["প্রতিটি কর্মেরই ফল আছে", "চেতনাই সবচেয়ে গুরুত্বপূর্ণ", "কর্ম কোনো শাস্তি নয়", "আমরা আমাদের কর্ম পরিবর্তন করতে পারি"],
  typesKarma: "কর্মের প্রকারভেদ",
  types: ["কুশল কর্ম (শুভ কাজ)", "অকুশল কর্ম (অশুভ কাজ)", "অব্যাকৃত কর্ম (শুভও নয়, অশুভও নয়)"],
  nirvanaTitle: "লক্ষ্য: নির্বাণ",
  nirvanaText: "বৌদ্ধ সাধনার চূড়ান্ত লক্ষ্য—দুঃখ ও পুনর্জন্মের চক্র থেকে মুক্তি।",
  whatNirvana: "নির্বাণ কী?",
  whatNirvanaText:
    "নির্বাণ হলো দুঃখের সম্পূর্ণ নিবৃত্তি, তৃষ্ণা ও আসক্তির অবসান এবং জন্ম-মৃত্যুর চক্র (সংসার) থেকে মুক্তি। বাস্তবতার প্রকৃত স্বরূপ উপলব্ধি থেকেই এই পরম শান্তি ও মুক্তি আসে।",
  characteristics: "বৈশিষ্ট্য",
  chars: ["দুঃখ থেকে মুক্তি", "তৃষ্ণা ও আসক্তির অবসান", "পরম শান্তি ও সুখ", "সংসারচক্র থেকে মুক্তি"],
  pathToNirvana: "নির্বাণের পথ",
  pathToNirvanaText:
    "আর্য অষ্টাঙ্গিক মার্গ অনুসরণ, ধ্যান অনুশীলন, প্রজ্ঞার বিকাশ এবং করুণা চর্চার মাধ্যমে নির্বাণ লাভ হয়। এর জন্য প্রয়োজন নিষ্ঠাপূর্ণ সাধনা ও চার আর্যসত্যের উপলব্ধি।",
  ctaTitle: "সাধনা শুরু করতে প্রস্তুত?",
  ctaText: "আমাদের ধ্যান সেশনে যোগ দিন এবং আপনার উপলব্ধি ও সাধনাকে গভীর করতে আমাদের সংঘের সাথে যুক্ত হোন।",
  ctaMeditate: "ধ্যান শুরু করুন",
  ctaTeachers: "আমাদের গুরুদের সাথে পরিচিত হোন",
};

// Icon Components
const PathIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
    aria-hidden="true"
  >
    <path d="M3 12h18M12 3v18" />
    <circle cx="12" cy="12" r="3" />
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const KarmaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
    aria-hidden="true"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const NirvanaIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8M12 8v8" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface ConceptCardProps {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ConceptCard = ({ number, title, description }: ConceptCardProps) => (
  <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary/30 hover:shadow-gentle transition-all duration-300">
    <div className="flex items-center gap-3 mb-3">
      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
        {number}
      </span>
      <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
    </div>
    <p className="text-neutral-600 leading-relaxed">{description}</p>
  </div>
);

interface PathStepProps {
  category: string;
  steps: { name: string; description: string }[];
  color: string;
}

const PathStep = ({ category, steps, color }: PathStepProps) => (
  <div className="bg-white rounded-xl p-6 border border-neutral-200">
    <h4 className={`text-lg font-semibold mb-4 ${color}`}>{category}</h4>
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-3">
          <div className={`flex-shrink-0 w-6 h-6 rounded-full ${color.replace('text-', 'bg-').replace('-dark', '/10')} flex items-center justify-center mt-0.5`}>
            <CheckIcon />
          </div>
          <div className="flex-1">
            <h5 className="font-medium text-neutral-900 mb-1">{step.name}</h5>
            <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function LearnBuddhism() {
  const t = getLang() === "bn" ? bn : en;



  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "4rem 0",
        }}
      >
        <img
          src="/images/buddha-teaching.jpg"
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
        {/* Dark overlay so text stays readable */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.52)",
            zIndex: 1,
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 2 }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <BookIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Learning Path Overview */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-primary font-semibold">{t.n[0]}</span>
                <span className="text-neutral-700 font-medium">{t.step1}</span>
              </div>
              <div className="hidden sm:block text-neutral-400">→</div>
              <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-primary font-semibold">{t.n[1]}</span>
                <span className="text-neutral-700 font-medium">{t.step2}</span>
              </div>
              <div className="hidden sm:block text-neutral-400">→</div>
              <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-primary font-semibold">{t.n[2]}</span>
                <span className="text-neutral-700 font-medium">{t.step3}</span>
              </div>
              <div className="hidden sm:block text-neutral-400">→</div>
              <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-primary font-semibold">{t.n[3]}</span>
                <span className="text-neutral-700 font-medium">{t.step4}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Noble Truths Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-dark mb-4">
                {t.truthsTitle}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                {t.truthsText}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.fourNobleTruths.map((truth) => (
                <div key={truth.number}>
                  <ConceptCard
                    number={truth.number}
                    title={truth.title}
                    description={truth.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eightfold Path Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <PathIcon />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-dark mb-4">
                {t.pathTitle}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                {t.pathText}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <PathStep
                category={t.wisdom}
                steps={t.eightfoldPath.wisdom}
                color="text-primary-dark"
              />
              <PathStep
                category={t.ethical}
                steps={t.eightfoldPath.ethical}
                color="text-primary-dark"
              />
              <PathStep
                category={t.mental}
                steps={t.eightfoldPath.mental}
                color="text-primary-dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Karma Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <KarmaIcon />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-dark mb-4">
                {t.karmaTitle}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                {t.karmaText}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-gentle">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-dark mb-3">
                      {t.whatKarma}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      {t.whatKarmaText}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-200">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-dark mb-3">
                        {t.keyPrinciples}
                      </h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>{t.principles[0]}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>{t.principles[1]}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>{t.principles[2]}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>{t.principles[3]}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-dark mb-3">
                        {t.typesKarma}
                      </h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>{t.types[0]}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>{t.types[1]}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>{t.types[2]}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nirvana Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <NirvanaIcon />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-dark mb-4">
                {t.nirvanaTitle}
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                {t.nirvanaText}
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary-light/10 rounded-2xl p-8 sm:p-10 border border-primary/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-dark mb-3">
                    {t.whatNirvana}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {t.whatNirvanaText}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-primary/20">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark mb-3">
                      {t.characteristics}
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>{t.chars[0]}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>{t.chars[1]}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>{t.chars[2]}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>{t.chars[3]}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark mb-3">
                      {t.pathToNirvana}
                    </h4>
                    <p className="text-neutral-700 leading-relaxed">
                      {t.pathToNirvanaText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              {t.ctaText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/practices/meditation"
                className="inline-block px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t.ctaMeditate}
              </Link>
              <Link
                href="/venerable-introduction"
                className="inline-block px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t.ctaTeachers}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Book Icon component
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

