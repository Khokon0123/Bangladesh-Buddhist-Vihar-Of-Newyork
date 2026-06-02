"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Play a single bell tone into a given AudioContext
const playBell = (
  ctx: AudioContext,
  freq: number,
  startTime: number,
  volume: number,
  decaySeconds: number
) => {
  const osc1 = ctx.createOscillator();
  const osc2 = ctx.createOscillator();
  const gain = ctx.createGain();
  const shimmerGain = ctx.createGain();

  osc1.type = "sine";
  osc1.frequency.value = freq;
  osc2.type = "sine";
  osc2.frequency.value = freq * 2.756; // inharmonic partial for bowl shimmer
  shimmerGain.gain.value = 0.12;

  osc1.connect(gain);
  osc2.connect(shimmerGain);
  shimmerGain.connect(gain);
  gain.connect(ctx.destination);

  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + decaySeconds);

  osc1.start(startTime);
  osc1.stop(startTime + decaySeconds);
  osc2.start(startTime);
  osc2.stop(startTime + decaySeconds);
};

// Meditation timer component
const MeditationTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(10 * 60);
  const [selectedDuration, setSelectedDuration] = useState(10);
  const [message, setMessage] = useState<string | null>(null);
  // Keep one AudioContext alive so sounds work even from useEffect
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getCtx = () => {
    if (!audioCtxRef.current) {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new Ctx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playCompletionSound = () => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;
      // D4 → A4 → D5 → A5 → D6 — ascending triumphant cascade
      playBell(ctx, 294, now + 0.0, 0.45, 4.0);
      playBell(ctx, 440, now + 0.5, 0.38, 3.5);
      playBell(ctx, 587, now + 1.0, 0.32, 3.0);
      playBell(ctx, 880, now + 1.5, 0.26, 2.5);
      playBell(ctx, 1175, now + 2.0, 0.20, 2.0);
    } catch (_) {}
  };

  const playEncouragementSound = () => {
    try {
      const ctx = getCtx();
      const now = ctx.currentTime;
      playBell(ctx, 392, now + 0.0, 0.30, 2.2); // G4
      playBell(ctx, 523, now + 0.4, 0.24, 1.8); // C5
    } catch (_) {}
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      playCompletionSound();
      setMessage("🎉 We made it! Congratulations on completing your session.");
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, time]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleDurationChange = (minutes: number) => {
    setSelectedDuration(minutes);
    setTime(minutes * 60);
    setIsRunning(false);
    setMessage(null);
  };

  const handleReset = () => {
    setTime(selectedDuration * 60);
    setIsRunning(false);
    setMessage(null);
  };

  const handleStartPause = () => {
    if (isRunning) {
      playEncouragementSound();
      setMessage("✨ We are close — keep going, you're doing great!");
    } else {
      // Warm up AudioContext on Start click (required by browser autoplay policy)
      getCtx();
      setMessage(null);
    }
    setIsRunning((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200/50 shadow-gentle">
      <h3 className="text-2xl font-semibold text-primary-dark mb-6 text-center">
        Meditation Timer
      </h3>

      {/* Timer Display */}
      <div className="text-center mb-8">
        <div className="text-6xl sm:text-7xl font-light text-primary-dark mb-4 font-mono">
          {formatTime(time)}
        </div>

        {/* Sound message */}
        {message && (
          <p
            className="text-base font-medium mt-2 px-4 py-2 rounded-xl inline-block transition-all duration-500"
            style={{
              background: time === 0 ? "rgba(74,28,28,0.08)" : "rgba(74,28,28,0.05)",
              color: "#4a1c1c",
            }}
          >
            {message}
          </p>
        )}
      </div>

      {/* Duration Selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {[5, 10, 15, 20, 30].map((minutes) => (
          <button
            key={minutes}
            onClick={() => handleDurationChange(minutes)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedDuration === minutes
                ? "bg-primary text-white"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {minutes} min
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleStartPause}
          className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
            isRunning
              ? "bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
              : "bg-primary text-white hover:bg-primary-dark"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="px-8 py-3 bg-white border-2 border-neutral-300 text-neutral-700 rounded-xl font-medium hover:bg-neutral-50 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// Meditation card component
interface MeditationCardProps {
  id: string;
  type: string;
  duration: string;
  description: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

const MeditationCard = ({
  id,
  type,
  duration,
  description,
  difficulty = "Beginner",
}: MeditationCardProps) => {
  const difficultyColors = {
    Beginner: "bg-primary/10 text-primary",
    Intermediate: "bg-primary-dark/10 text-primary-dark",
    Advanced: "bg-neutral-200 text-neutral-700",
  };

  return (
    <Link
      href={`/practices/meditation/${id}`}
      className="group block bg-white rounded-xl p-6 sm:p-8 border border-neutral-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gentle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-semibold text-primary-dark mb-2 group-hover:text-primary transition-colors duration-300">
            {type}
          </h3>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
        </div>
        <div className="flex items-center gap-2 text-neutral-500 text-sm">
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
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </Link>
  );
};

export default function MeditationPage() {
  // Sample meditation data - in a real app, this would come from a CMS or database
  const meditations = [
    {
      id: "mindfulness-breathing",
      type: "Mindfulness of Breathing",
      duration: "10-20 min",
      description:
        "A foundational practice focusing on the natural rhythm of your breath to cultivate present-moment awareness.",
      difficulty: "Beginner" as const,
    },
    {
      id: "body-scan",
      type: "Body Scan",
      duration: "20-30 min",
      description:
        "A systematic practice of bringing awareness to different parts of the body, promoting relaxation and body awareness.",
      difficulty: "Beginner" as const,
    },
    {
      id: "loving-kindness",
      type: "Loving-Kindness (Metta)",
      duration: "15-25 min",
      description:
        "Cultivate compassion and loving-kindness toward yourself and others through guided phrases and visualization.",
      difficulty: "Intermediate" as const,
    },
    {
      id: "walking-meditation",
      type: "Walking Meditation",
      duration: "15-30 min",
      description:
        "Practice mindfulness while walking, bringing awareness to each step and the sensations of movement.",
      difficulty: "Intermediate" as const,
    },
    {
      id: "vipassana",
      type: "Vipassana (Insight)",
      duration: "30-45 min",
      description:
        "Deep insight meditation practice focusing on observing the nature of reality and the impermanence of all phenomena.",
      difficulty: "Advanced" as const,
    },
    {
      id: "zen-sitting",
      type: "Zen Sitting (Zazen)",
      duration: "20-40 min",
      description:
        "A form of seated meditation emphasizing just sitting, without specific focus, allowing thoughts to arise and pass naturally.",
      difficulty: "Advanced" as const,
    },
    {
      id: "compassion-practice",
      type: "Compassion Practice (Tonglen)",
      duration: "20-30 min",
      description:
        "A Tibetan Buddhist practice of taking in suffering and sending out compassion, transforming difficult emotions.",
      difficulty: "Intermediate" as const,
    },
    {
      id: "mindful-eating",
      type: "Mindful Eating",
      duration: "10-15 min",
      description:
        "Bring full awareness to the experience of eating, noticing flavors, textures, and the act of nourishment.",
      difficulty: "Beginner" as const,
    },
  ];

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "620px", display: "flex", alignItems: "center" }} className="py-20 sm:py-24 lg:py-32">
        <img
          src="/images/monje.jpg"
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0 }}
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
                Meditation Practice
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8">
                Find peace and clarity through guided meditation practices.
                Choose a practice that resonates with you and begin your journey
                toward inner stillness.
              </p>
              <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
                Meditation is a practice of training the mind to develop
                awareness, concentration, and inner peace. Each practice below
                offers a different approach to cultivating mindfulness and
                understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meditation Timer */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <MeditationTimer />
          </div>
        </div>
      </section>

      {/* Meditation Practices */}
      <section className="py-12 sm:py-16 lg:py-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary-dark mb-4">
                Guided Practices
              </h2>
              <p className="text-lg text-neutral-600">
                Select a meditation practice to begin
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {meditations.map((meditation) => (
                <MeditationCard key={meditation.id} {...meditation} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-quote text-quote-lg text-neutral-600 italic leading-relaxed border-l-4 border-gold-500 pl-6 py-2">
              &ldquo;Meditation is not about stopping thoughts, but recognizing
              that we are more than our thoughts and our feelings.&rdquo;
              <footer className="mt-4 text-sm text-neutral-500 not-italic">
                — Arianna Huffington
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

