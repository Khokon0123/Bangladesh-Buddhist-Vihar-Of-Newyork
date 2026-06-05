"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { TempleEvent } from "@/lib/types/content";

interface Props {
  event: TempleEvent;
}

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function EventDetailClient({ event }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;
  const images = event.images;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));
  }, [images.length]);
  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? 0 : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, closeLightbox, next, prev]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const dur = prefersReducedMotion ? 0 : undefined;

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200 mb-8 group"
        >
          <ArrowLeftIcon />
          All Events
        </Link>

        {/* Cover image */}
        {images.length > 0 && (
          <div className="rounded-2xl overflow-hidden aspect-video mb-8 shadow-gentle">
            <img
              src={images[0].src}
              alt={images[0].alt || event.title}
              className="w-full h-full object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-500"
              onClick={() => setLightboxIndex(0)}
            />
          </div>
        )}

        {/* Title + date */}
        <div className="flex flex-wrap items-start gap-4 mb-6">
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary-dark leading-tight mb-2">
              {event.title}
            </h1>
            <p className="text-neutral-500 text-sm font-medium">
              {formatDate(event.date)}
            </p>
          </div>
          <span className="flex-shrink-0 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            {event.year}
          </span>
        </div>

        {/* Description */}
        <div className="prose prose-neutral max-w-none mb-12">
          <p className="text-neutral-700 leading-relaxed text-base whitespace-pre-line">
            {event.description}
          </p>
        </div>

        {/* Photo gallery */}
        {images.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-primary-dark mb-5">
              Event Photos
              <span className="ml-2 text-sm font-normal text-neutral-400">
                ({images.length} {images.length === 1 ? "photo" : "photos"})
              </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setLightboxIndex(idx)}
                  className="aspect-square overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 group"
                  aria-label={img.alt || `Photo ${idx + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Back link (bottom) */}
        <div className="mt-14 pt-8 border-t border-neutral-100">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-primary transition-colors duration-200"
          >
            <ArrowLeftIcon />
            Back to all events
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: dur ?? 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo gallery: ${event.title}`}
          >
            <div
              className="relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
                aria-label="Close gallery"
              >
                <CloseIcon />
              </button>

              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxIndex}
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: dur ?? 0.25 }}
                  className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg"
                />
              </AnimatePresence>

              {/* Caption */}
              {images[lightboxIndex].caption && (
                <p className="mt-3 text-white/75 text-sm text-center max-w-[80vw]">
                  {images[lightboxIndex].caption}
                </p>
              )}

              {/* Dots */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-4">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightboxIndex(idx)}
                      aria-label={`Go to photo ${idx + 1}`}
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

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-3 rounded-full bg-black/30 hover:bg-black/50"
                  aria-label="Previous photo"
                >
                  <ChevronLeftIcon />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-3 rounded-full bg-black/30 hover:bg-black/50"
                  aria-label="Next photo"
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
