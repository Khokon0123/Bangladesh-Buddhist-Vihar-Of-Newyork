"use client";

import Link from "next/link";

// Progress indicator component
interface ProgressBarProps {
  progress: number; // 0-100
  completed?: boolean;
}

const ProgressBar = ({ progress, completed = false }: ProgressBarProps) => {
  return (
    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
      <div
        className={`h-full transition-all duration-500 ${
          completed ? "bg-gold-500" : "bg-primary"
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// Lesson card component
interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
  locked?: boolean;
  level: string;
}

const LessonCard = ({
  id,
  title,
  description,
  duration,
  completed = false,
  locked = false,
  level,
}: LessonCardProps) => {
  const cardContent = (
    <div
      className={`relative bg-white rounded-xl p-6 border-2 transition-all duration-300 ${
        locked
          ? "border-neutral-200 opacity-60 cursor-not-allowed"
          : completed
          ? "border-gold-300 hover:border-gold-400 hover:shadow-gentle"
          : "border-neutral-200 hover:border-primary/50 hover:shadow-gentle"
      }`}
    >
      {/* Status Badge */}
      {completed && (
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
      )}
      {locked && (
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 rounded-full bg-neutral-300 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="6" width="12" height="12" rx="2" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
        </div>
      )}

      {/* Lesson Number */}
      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            completed
              ? "bg-gold-100 text-gold-700"
              : locked
              ? "bg-neutral-100 text-neutral-400"
              : "bg-primary/10 text-primary"
          }`}
        >
          Lesson {id}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-semibold mb-2 ${
          locked ? "text-neutral-400" : "text-primary-dark"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm mb-4 leading-relaxed ${
          locked ? "text-neutral-400" : "text-neutral-600"
        }`}
      >
        {description}
      </p>

      {/* Duration */}
      <div className="flex items-center gap-2 text-xs text-neutral-500">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>{duration}</span>
      </div>
    </div>
  );

  if (locked) {
    return <div>{cardContent}</div>;
  }

  return (
    <Link
      href={`/practices/dhamma-school/${level}/${id}`}
      className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {cardContent}
    </Link>
  );
};

// Course level section component
interface CourseLevelProps {
  level: string;
  title: string;
  description: string;
  lessons: LessonCardProps[];
  progress: number;
  completed?: boolean;
  color: string;
}

const CourseLevel = ({
  level,
  title,
  description,
  lessons,
  progress,
  completed = false,
  color,
}: CourseLevelProps) => {
  const completedLessons = lessons.filter((l) => l.completed).length;
  const totalLessons = lessons.length;

  return (
    <section className="mb-16 last:mb-0">
      {/* Level Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${color}`}
          >
            {level}
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark">
              {title}
            </h2>
            <p className="text-neutral-600 mt-1">{description}</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-neutral-700">
              Progress: {completedLessons} of {totalLessons} lessons
            </span>
            <span className="text-sm font-medium text-neutral-700">
              {progress}%
            </span>
          </div>
          <ProgressBar progress={progress} completed={completed} />
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} {...lesson} level={level} />
        ))}
      </div>
    </section>
  );
};

export default function DhammaSchoolPage() {
  // Sample course data - in a real app, this would come from a CMS or database
  const courses = [
    {
      level: "1",
      title: "Beginner Level",
      description:
        "Introduction to Buddhist teachings, basic concepts, and foundational practices.",
      color: "bg-primary",
      progress: 100,
      completed: true,
      lessons: [
        {
          id: "1",
          title: "Introduction to Buddhism",
          description:
            "Learn about the life of the Buddha and the basic principles of Buddhist philosophy.",
          duration: "45 min",
          completed: true,
          level: "beginner",
        },
        {
          id: "2",
          title: "The Four Noble Truths",
          description:
            "Explore the fundamental teachings that form the foundation of Buddhist practice.",
          duration: "60 min",
          completed: true,
          level: "beginner",
        },
        {
          id: "3",
          title: "The Eightfold Path",
          description:
            "Understand the practical path to ending suffering and achieving enlightenment.",
          duration: "60 min",
          completed: true,
          level: "beginner",
        },
        {
          id: "4",
          title: "Karma and Rebirth",
          description:
            "Learn about the law of cause and effect and the cycle of rebirth.",
          duration: "50 min",
          completed: true,
          level: "beginner",
        },
        {
          id: "5",
          title: "The Three Jewels",
          description:
            "Explore the Buddha, Dharma, and Sangha as the foundation of Buddhist practice.",
          duration: "40 min",
          completed: true,
          level: "beginner",
        },
        {
          id: "6",
          title: "Basic Meditation Practice",
          description:
            "Introduction to mindfulness and basic meditation techniques.",
          duration: "55 min",
          completed: true,
          level: "beginner",
        },
      ],
    },
    {
      level: "2",
      title: "Intermediate Level",
      description:
        "Deeper exploration of Buddhist philosophy, meditation practices, and ethical living.",
      color: "bg-primary-dark",
      progress: 50,
      completed: false,
      lessons: [
        {
          id: "1",
          title: "The Five Aggregates",
          description:
            "Understand the components that make up human experience according to Buddhist psychology.",
          duration: "60 min",
          completed: true,
          level: "intermediate",
        },
        {
          id: "2",
          title: "Dependent Origination",
          description:
            "Explore the chain of causation that explains how suffering arises and can be ended.",
          duration: "70 min",
          completed: true,
          level: "intermediate",
        },
        {
          id: "3",
          title: "The Three Characteristics",
          description:
            "Learn about impermanence, suffering, and non-self as fundamental truths.",
          duration: "65 min",
          completed: true,
          level: "intermediate",
        },
        {
          id: "4",
          title: "Loving-Kindness Meditation",
          description:
            "Practice metta meditation to cultivate compassion and loving-kindness.",
          duration: "50 min",
          completed: false,
          level: "intermediate",
        },
        {
          id: "5",
          title: "The Precepts",
          description:
            "Study the ethical guidelines that support Buddhist practice and daily life.",
          duration: "55 min",
          completed: false,
          level: "intermediate",
        },
        {
          id: "6",
          title: "Mindfulness in Daily Life",
          description:
            "Learn to integrate mindfulness practice into everyday activities.",
          duration: "60 min",
          completed: false,
          level: "intermediate",
        },
      ],
    },
    {
      level: "3",
      title: "Advanced Level",
      description:
        "Advanced teachings, deep meditation practices, and preparation for deeper study.",
      color: "bg-primary-dark",
      progress: 0,
      completed: false,
      lessons: [
        {
          id: "1",
          title: "Emptiness and Non-Self",
          description:
            "Deep exploration of the concept of emptiness and the nature of self.",
          duration: "75 min",
          completed: false,
          locked: true,
          level: "advanced",
        },
        {
          id: "2",
          title: "The Bodhisattva Path",
          description:
            "Study the Mahayana path of the bodhisattva and the perfection of wisdom.",
          duration: "80 min",
          completed: false,
          locked: true,
          level: "advanced",
        },
        {
          id: "3",
          title: "Advanced Meditation Techniques",
          description:
            "Explore jhana meditation and advanced concentration practices.",
          duration: "70 min",
          completed: false,
          locked: true,
          level: "advanced",
        },
        {
          id: "4",
          title: "Sutra Study",
          description:
            "In-depth study of important Buddhist sutras and their commentaries.",
          duration: "90 min",
          completed: false,
          locked: true,
          level: "advanced",
        },
        {
          id: "5",
          title: "Buddhist Philosophy",
          description:
            "Advanced study of Buddhist philosophy and its application to modern life.",
          duration: "85 min",
          completed: false,
          locked: true,
          level: "advanced",
        },
        {
          id: "6",
          title: "Teaching and Sharing the Dharma",
          description:
            "Learn how to share Buddhist teachings with others and support the community.",
          duration: "75 min",
          completed: false,
          locked: true,
          level: "advanced",
        },
      ],
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "620px", display: "flex", alignItems: "center" }} className="py-20 sm:py-24 lg:py-32">
        <img
          src="/images/241295746_2911691745749118_2429151172236255153_n.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", zIndex: 0 }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1 }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: "relative", zIndex: 2 }}>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/practices"
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
              Back to Practices
            </Link>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6">
                Dhamma School
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8">
                A structured learning path from beginner to advanced, guiding
                you through Buddhist teachings and practices step by step.
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
                Our Dhamma School offers a comprehensive curriculum organized into
                three levels. Each level builds upon the previous one, providing a
                clear path of learning and practice. Complete lessons at your own
                pace and track your progress as you advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {courses.map((course) => (
              <CourseLevel
                key={course.level}
                level={course.level}
                title={course.title}
                description={course.description}
                lessons={course.lessons}
                progress={course.progress}
                completed={course.completed}
                color={course.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary-dark mb-4">
              Questions About the Curriculum?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Our teachers are here to help guide your learning journey. Feel
              free to reach out with any questions.
            </p>
            <Link
              href="/venerable-introduction"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact Our Teachers
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

