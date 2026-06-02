"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TempleEvent } from "@/lib/types/content";

interface Props {
  years: number[];
  initialYear: number;
  allEvents: TempleEvent[];
}

const CalendarIcon = () => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ChevronDownIcon = ({ flipped }: { flipped?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 transition-transform duration-300 ${flipped ? "rotate-180" : ""}`}
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function filterAndSort(allEvents: TempleEvent[], year: number): TempleEvent[] {
  return allEvents
    .filter((e) => e.year === year)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function EventsGalleryClient({
  years,
  initialYear,
  allEvents,
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [events, setEvents] = useState<TempleEvent[]>(() =>
    filterAndSort(allEvents, initialYear)
  );
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);
  const [lightboxEvent, setLightboxEvent] = useState<TempleEvent | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const transitionDuration = prefersReducedMotion ? 0 : undefined;

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setEvents(filterAndSort(allEvents, year));
    setExpandedEventId(null);
  };

  const toggleEvent = (id: string) => {
    setExpandedEventId((prev) => (prev === id ? null : id));
  };

  const openLightbox = (event: TempleEvent, index: number) => {
    setLightboxEvent(event);
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxEvent(null);
    setLightboxIndex(0);
  }, []);

  const lightboxNext = useCallback(() => {
    if (!lightboxEvent) return;
    setLightboxIndex((i) => (i + 1) % lightboxEvent.images.length);
  }, [lightboxEvent]);

  const lightboxPrev = useCallback(() => {
    if (!lightboxEvent) return;
    setLightboxIndex(
      (i) => (i - 1 + lightboxEvent.images.length) % lightboxEvent.images.length
    );
  }, [lightboxEvent]);

  useEffect(() => {
    if (!lightboxEvent) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxNext();
      if (e.key === "ArrowLeft") lightboxPrev();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxEvent, closeLightbox, lightboxNext, lightboxPrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxEvent]);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight: "480px" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/WhatsApp Image 2026-04-25 at 14.44.58.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.52)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 text-white mb-6">
            <CalendarIcon />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Temple Events Gallery
          </h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            A living record of our community's sacred celebrations, teachings,
            and gatherings — year by year.
          </p>
        </div>
      </section>

      {/* Year Filter Tabs */}
      <nav
        className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200"
        aria-label="Filter events by year"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-sm font-medium text-neutral-500 mr-1">
              Year:
            </span>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                aria-pressed={selectedYear === year}
                className={`
                  px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    selectedYear === year
                      ? "bg-primary text-white shadow-soft"
                      : "bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50 hover:border-primary/30"
                  }
                `}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Events List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {events.length === 0 ? (
          <div className="text-center py-20 text-neutral-500">
            No events recorded for {selectedYear}.
          </div>
        ) : (
          <div>
            <p className="text-sm text-neutral-500 mb-8">
              {events.length} event{events.length !== 1 ? "s" : ""} in{" "}
              {selectedYear}
            </p>

            {events.map((event) => {
              const isExpanded = expandedEventId === event.id;
              const previewImages = event.images.slice(0, 3);
              const extraCount = event.images.length - 3;

              return (
                <motion.article
                  key={event.id}
                  layout
                  className="bg-white rounded-2xl shadow-gentle border border-neutral-100 mb-8 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Event header */}
                    <div className="flex flex-wrap items-start gap-3 mb-3">
                      <h2 className="text-2xl font-semibold text-primary-dark flex-1">
                        {event.title}
                      </h2>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gold-100 text-gold-800 whitespace-nowrap">
                        {formatDate(event.date)}
                      </span>
                    </div>

                    <p className="text-neutral-600 leading-relaxed mb-5">
                      {event.description}
                    </p>

                    {/* Thumbnail strip */}
                    {event.images.length > 0 && (
                      <div className="flex gap-2 mb-4">
                        {previewImages.map((img, idx) => (
                          <div
                            key={img.id}
                            className="relative flex-1 aspect-square overflow-hidden rounded-xl cursor-pointer"
                            onClick={() => {
                              toggleEvent(event.id);
                              if (!isExpanded) openLightbox(event, idx);
                            }}
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            {/* "+N more" overlay on last preview if there are extra images */}
                            {idx === 2 && extraCount > 0 && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <span className="text-white font-semibold text-lg">
                                  +{extraCount}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* View Gallery toggle */}
                    <button
                      onClick={() => toggleEvent(event.id)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors duration-200"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Hide Gallery" : "View Gallery"}
                      <ChevronDownIcon flipped={isExpanded} />
                    </button>
                  </div>

                  {/* Expandable full gallery */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        key={`gallery-${event.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                        }
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-6 pb-6 border-t border-neutral-100 pt-5">
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {event.images.map((img, idx) => (
                              <button
                                key={img.id}
                                onClick={() => openLightbox(event, idx)}
                                className="aspect-square overflow-hidden rounded-xl cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                                aria-label={`View ${img.alt}`}
                              >
                                <img
                                  src={img.src}
                                  alt={img.alt}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxEvent && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionDuration ?? 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo gallery: ${lightboxEvent.title}`}
          >
            {/* Inner panel — stop clicks bubbling to backdrop */}
            <div
              className="relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors duration-200 p-2"
                aria-label="Close gallery"
              >
                <CloseIcon />
              </button>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  src={lightboxEvent.images[lightboxIndex].src}
                  alt={lightboxEvent.images[lightboxIndex].alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: transitionDuration ?? 0.25 }}
                  className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg"
                />
              </AnimatePresence>

              {/* Caption */}
              {lightboxEvent.images[lightboxIndex].caption && (
                <p className="mt-3 text-white/75 text-sm text-center max-w-[80vw]">
                  {lightboxEvent.images[lightboxIndex].caption}
                </p>
              )}

              {/* Dot indicators */}
              {lightboxEvent.images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {lightboxEvent.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        idx === lightboxIndex
                          ? "bg-white scale-125"
                          : "bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Prev / Next arrows */}
            {lightboxEvent.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    lightboxPrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200 p-3 rounded-full bg-black/30 hover:bg-black/50"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    lightboxNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200 p-3 rounded-full bg-black/30 hover:bg-black/50"
                  aria-label="Next image"
                >
                  <ChevronRightIcon />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
