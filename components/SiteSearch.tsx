"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { articles } from "@/app/blog/articles";
import { books } from "@/app/book/books";
import { events } from "@/lib/data/events";

type Entry = { title: string; text: string; href: string; kind: string };

const pages: Entry[] = [
  { title: "Home", text: "temple vihara welcome", href: "/", kind: "Page" },
  { title: "Learn Buddhism", text: "dhamma teachings four noble truths eightfold path", href: "/learn-buddhism", kind: "Page" },
  { title: "Venerable Introduction", text: "monks bhante venerables", href: "/venerable-introduction", kind: "Page" },
  { title: "Blog", text: "articles posts", href: "/blog", kind: "Page" },
  { title: "Events", text: "celebrations ceremonies calendar", href: "/events", kind: "Page" },
  { title: "Book", text: "books sutras reading", href: "/book", kind: "Page" },
  { title: "Resources", text: "downloads audio video links", href: "/resources", kind: "Page" },
  { title: "Dhamma School", text: "children classes kids", href: "/practices/dhamma-school", kind: "Page" },
  { title: "Meditation", text: "vipassana sitting practice", href: "/practices/meditation", kind: "Page" },
  { title: "About", text: "contact address location donate", href: "/about", kind: "Page" },
];

// ponytail: static index; events added through the admin (Redis) aren't included, fetch them if that matters
const index: Entry[] = [
  ...pages,
  ...articles.map((a) => ({ title: a.title, text: `${a.excerpt} ${a.category} ${a.author}`, href: `/blog/${a.id}`, kind: "Blog" })),
  ...books.map((b) => ({ title: b.title, text: `${b.description} ${b.category} ${b.author}`, href: `/book/${b.id}`, kind: "Book" })),
  ...events.map((e) => ({ title: e.title, text: e.description, href: `/events/${e.slug}`, kind: "Event" })),
];

export default function SiteSearch({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return index
      .filter((e) => {
        const hay = `${e.title} ${e.text}`.toLowerCase();
        return words.every((w) => hay.includes(w));
      })
      .slice(0, 12);
  }, [query]);

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex justify-center items-start pt-20 px-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages, articles, books, events…"
          aria-label="Search"
          className="w-full px-5 py-4 text-base text-neutral-900 border-b border-neutral-200 outline-none"
        />
        {query && (
          <ul className="list-none m-0 p-0 py-2 space-y-0 max-h-[60vh] overflow-y-auto">
            {results.length === 0 && <li className="px-5 py-3 text-sm text-neutral-500">No results for &ldquo;{query}&rdquo;</li>}
            {results.map((r) => (
              <li key={r.href} className="m-0">
                <Link
                  href={r.href}
                  onClick={onClose}
                  className="flex items-baseline gap-3 px-5 py-3 no-underline hover:no-underline hover:bg-neutral-100 text-neutral-900"
                >
                  <span className="shrink-0 w-12 text-xs uppercase tracking-wide text-neutral-500">{r.kind}</span>
                  <span>{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
