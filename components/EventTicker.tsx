"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { loc } from "@/lib/i18n";
import type { TempleEvent } from "@/lib/types/content";

// Scrolling strip of upcoming events under the header. Hidden when there are none.
export default function EventTicker({ events }: { events: TempleEvent[] }) {
  const { lang } = useLang();
  if (events.length === 0) return null;

  const items = events.map((e) => {
    const ev = loc(e, lang);
    const date = new Date(ev.date + "T00:00:00").toLocaleDateString(lang === "bn" ? "bn-BD" : "en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    return { href: `/events/${ev.slug}`, title: ev.title, date };
  });

  // Repeat the list so one copy is wider than the screen, then render two copies
  // and slide by half: the loop is seamless however few events there are.
  const repeats = Math.max(1, Math.ceil(12 / items.length));
  const copy = Array.from({ length: repeats }, () => items).flat();
  const label = lang === "bn" ? "আসন্ন অনুষ্ঠান" : "Upcoming Events";

  return (
    <div className="flex items-stretch h-9 text-sm" style={{ backgroundColor: "#4a1c1c" }}>
      <Link
        href="/events"
        className="relative z-10 flex shrink-0 items-center gap-2 px-4 min-h-0 font-semibold no-underline hover:no-underline whitespace-nowrap"
        style={{ backgroundColor: "#f5c21a", color: "#4a1c1c" }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        {label}
      </Link>

      {/* Screen readers get a plain list; the moving copies are decorative */}
      <ul className="sr-only">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href}>{`${i.title}, ${i.date}`}</Link>
          </li>
        ))}
      </ul>

      <div className="ticker relative flex-1 overflow-hidden" aria-hidden="true">
        <div className="ticker-track flex w-max h-full items-center" style={{ animationDuration: `${copy.length * 8}s` }}>
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center">
              {copy.map((i, idx) => (
                <Link
                  key={`${half}-${idx}`}
                  href={i.href}
                  tabIndex={-1}
                  className="flex items-center gap-2 px-6 min-h-0 whitespace-nowrap no-underline hover:no-underline text-white/90 hover:text-white"
                >
                  <span style={{ color: "#f5c21a" }}>✦</span>
                  <span className="font-medium">{i.title}</span>
                  <span className="text-white/60">— {i.date}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
