"use client";

import { useState } from "react";
import Link from "next/link";
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
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [events, setEvents] = useState<TempleEvent[]>(() =>
    filterAndSort(allEvents, initialYear)
  );

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setEvents(filterAndSort(allEvents, year));
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden flex items-center justify-center"
        style={{ minHeight: "480px" }}
      >
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
        <div className="relative z-10 text-center px-4 py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 text-white mb-6">
            <CalendarIcon />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Temple Events Gallery
          </h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            A living record of our community&apos;s sacred celebrations,
            teachings, and gatherings — year by year.
          </p>
        </div>
      </section>

      {/* Year Filter Tabs */}
      <nav
        className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200"
        aria-label="Filter events by year"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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

      {/* Events Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {events.length === 0 ? (
          <div className="text-center py-20 text-neutral-500">
            No events recorded for {selectedYear}.
          </div>
        ) : (
          <>
            <p className="text-sm text-neutral-500 mb-8">
              {events.length} event{events.length !== 1 ? "s" : ""} in{" "}
              {selectedYear}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
                  className="group block focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-2xl"
                >
                  <article className="h-full bg-white rounded-2xl shadow-gentle border border-neutral-100 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    {/* Cover image */}
                    <div className="relative aspect-video overflow-hidden bg-primary/5">
                      {event.images.length > 0 ? (
                        <img
                          src={event.images[0].src}
                          alt={event.images[0].alt || event.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-primary/30">
                          <CalendarIcon />
                        </div>
                      )}
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <h2 className="text-lg font-semibold text-primary-dark leading-snug">
                          {event.title}
                        </h2>
                        <span className="flex-shrink-0 text-xs font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full">
                          {formatDate(event.date)}
                        </span>
                      </div>

                      <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4">
                        {event.description}
                      </p>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors duration-200">
                        View Details
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
