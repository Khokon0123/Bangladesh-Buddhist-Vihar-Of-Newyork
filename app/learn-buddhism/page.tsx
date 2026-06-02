import Link from "next/link";

// Icon Components
const TruthIcon = () => (
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
    <path d="M12 6v6l4 2" />
  </svg>
);

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

  const fourNobleTruths = [
    {
      number: "1",
      title: "The Truth of Suffering (Dukkha)",
      description:
        "Life inherently involves suffering, dissatisfaction, and unease. This includes physical pain, emotional distress, and the fundamental unsatisfactoriness of existence.",
      icon: <TruthIcon />,
    },
    {
      number: "2",
      title: "The Truth of the Cause of Suffering (Samudaya)",
      description:
        "Suffering arises from craving, attachment, and ignorance. Our desires and attachments create the conditions for suffering to manifest in our lives.",
      icon: <TruthIcon />,
    },
    {
      number: "3",
      title: "The Truth of the End of Suffering (Nirodha)",
      description:
        "Suffering can be overcome by eliminating craving and attachment. Liberation from suffering is possible through the cessation of desire.",
      icon: <TruthIcon />,
    },
    {
      number: "4",
      title: "The Truth of the Path (Magga)",
      description:
        "The Eightfold Path provides the way to end suffering. This practical guide leads to the cessation of suffering and the attainment of enlightenment.",
      icon: <TruthIcon />,
    },
  ];

  const eightfoldPath = {
    wisdom: [
      {
        name: "Right View",
        description:
          "Understanding the Four Noble Truths and seeing reality as it truly is, free from delusion.",
      },
      {
        name: "Right Intention",
        description:
          "Cultivating thoughts of renunciation, goodwill, and harmlessness toward all beings.",
      },
    ],
    ethical: [
      {
        name: "Right Speech",
        description:
          "Speaking truthfully, kindly, and constructively. Avoiding lies, harsh words, and gossip.",
      },
      {
        name: "Right Action",
        description:
          "Acting with compassion and respect. Abstaining from harming, stealing, and sexual misconduct.",
      },
      {
        name: "Right Livelihood",
        description:
          "Earning a living in ways that do not harm others or oneself, avoiding occupations that cause suffering.",
      },
    ],
    mental: [
      {
        name: "Right Effort",
        description:
          "Cultivating positive mental states and abandoning negative ones through mindful effort.",
      },
      {
        name: "Right Mindfulness",
        description:
          "Developing awareness of body, feelings, mind, and mental phenomena in the present moment.",
      },
      {
        name: "Right Concentration",
        description:
          "Developing focused, one-pointed attention through meditation practice.",
      },
    ],
  };

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
              Learn Buddhism
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 leading-relaxed">
              Discover the fundamental teachings of the Buddha and begin your
              journey toward wisdom and inner peace
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
                <span className="text-primary font-semibold">1</span>
                <span className="text-neutral-700 font-medium">Four Noble Truths</span>
              </div>
              <div className="hidden sm:block text-neutral-400">→</div>
              <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-primary font-semibold">2</span>
                <span className="text-neutral-700 font-medium">Eightfold Path</span>
              </div>
              <div className="hidden sm:block text-neutral-400">→</div>
              <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-primary font-semibold">3</span>
                <span className="text-neutral-700 font-medium">Karma</span>
              </div>
              <div className="hidden sm:block text-neutral-400">→</div>
              <div className="flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-primary font-semibold">4</span>
                <span className="text-neutral-700 font-medium">Nirvana</span>
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
                The Four Noble Truths
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                The foundation of Buddhist teaching, these four truths explain
                the nature of suffering and the path to liberation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fourNobleTruths.map((truth) => (
                <div key={truth.number}>
                  <ConceptCard
                    number={truth.number}
                    title={truth.title}
                    description={truth.description}
                    icon={truth.icon}
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
                The Noble Eightfold Path
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                The practical guide to ending suffering, organized into three
                groups: Wisdom, Ethical Conduct, and Mental Development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <PathStep
                category="Wisdom (Prajna)"
                steps={eightfoldPath.wisdom}
                color="text-primary-dark"
              />
              <PathStep
                category="Ethical Conduct (Sila)"
                steps={eightfoldPath.ethical}
                color="text-primary-dark"
              />
              <PathStep
                category="Mental Development (Samadhi)"
                steps={eightfoldPath.mental}
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
                Understanding Karma
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                The law of cause and effect that governs all actions and their
                consequences.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-gentle">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary-dark mb-3">
                      What is Karma?
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      Karma is the universal law of cause and effect. Every
                      intentional action—whether physical, verbal, or mental—creates
                      a corresponding result. Good actions lead to positive outcomes,
                      while harmful actions lead to suffering.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-200">
                    <div>
                      <h4 className="text-lg font-semibold text-primary-dark mb-3">
                        Key Principles
                      </h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Actions have consequences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Intention matters most</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Karma is not punishment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>We can change our karma</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-primary-dark mb-3">
                        Types of Karma
                      </h4>
                      <ul className="space-y-2 text-neutral-700">
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Good karma (wholesome actions)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Bad karma (unwholesome actions)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Neutral karma (neither good nor bad)</span>
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
                The Goal: Nirvana
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                The ultimate goal of Buddhist practice—liberation from suffering
                and the cycle of rebirth.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary-light/10 rounded-2xl p-8 sm:p-10 border border-primary/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-primary-dark mb-3">
                    What is Nirvana?
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    Nirvana is the complete cessation of suffering, the end of
                    craving and attachment, and liberation from the cycle of
                    birth and death (samsara). It is the ultimate peace and
                    freedom that comes from understanding the true nature of
                    reality.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-primary/20">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark mb-3">
                      Characteristics
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>Freedom from suffering</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>End of craving and attachment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>Perfect peace and happiness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <span>Liberation from samsara</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark mb-3">
                      The Path to Nirvana
                    </h4>
                    <p className="text-neutral-700 leading-relaxed">
                      Nirvana is achieved through following the Eightfold Path,
                      practicing meditation, developing wisdom, and cultivating
                      compassion. It requires dedicated practice and
                      understanding of the Four Noble Truths.
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
              Ready to Begin Your Practice?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Join our meditation sessions and connect with our community to
              deepen your understanding and practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/practices/meditation"
                className="inline-block px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start Meditating
              </Link>
              <Link
                href="/venerable-introduction"
                className="inline-block px-8 py-4 bg-white text-primary border-2 border-primary rounded-xl font-medium hover:bg-primary/5 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Meet Our Teachers
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

