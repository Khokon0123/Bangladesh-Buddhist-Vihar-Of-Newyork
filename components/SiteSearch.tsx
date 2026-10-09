"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { articles } from "@/app/blog/articles";
import { books } from "@/app/book/books";
import { events } from "@/lib/data/events";
import { useLang } from "./LanguageProvider";
import { dictionaries, loc, type Dict, type Lang, type WithBn } from "@/lib/i18n";

type Entry = { title: string; text: string; href: string; kind: keyof Dict["search"]["kinds"] };

// Extra English keywords per page; Bangla visitors match on the Bangla page name plus these.
const pages: { href: string; key: keyof Dict["nav"]; keywords: string }[] = [
  { href: "/", key: "home", keywords: "temple vihara welcome বিহার" },
  { href: "/learn-buddhism", key: "learnBuddhism", keywords: "dhamma teachings four noble truths eightfold path ধর্ম আর্যসত্য অষ্টাঙ্গিক মার্গ" },
  { href: "/venerable-introduction", key: "venerables", keywords: "monks bhante venerables ভিক্ষু ভদন্ত" },
  { href: "/blog", key: "blog", keywords: "articles posts প্রবন্ধ" },
  { href: "/events", key: "events", keywords: "celebrations ceremonies calendar উৎসব পূর্ণিমা" },
  { href: "/book", key: "book", keywords: "books sutras reading গ্রন্থাগার সূত্র" },
  { href: "/resources", key: "resources", keywords: "downloads audio video links ডাউনলোড ভিডিও" },
  { href: "/practices/dhamma-school", key: "dhammaSchool", keywords: "children classes kids শিশু ক্লাস পাঠ" },
  { href: "/practices/meditation", key: "meditation", keywords: "vipassana sitting practice বিদর্শন" },
  { href: "/about", key: "about", keywords: "contact address location donate যোগাযোগ ঠিকানা" },
];

// ponytail: static index; events added through the admin (Redis) aren't included, fetch them if that matters
function buildIndex(lang: Lang): Entry[] {
  // Title in the current language; search text covers both languages so either works.
  const both = <T extends object>(item: WithBn<T>, fields: (keyof T)[]) =>
    fields.map((f) => `${item[f] ?? ""} ${item.bn?.[f] ?? ""}`).join(" ");
  return [
    ...pages.map((p): Entry => ({ title: dictionaries[lang].nav[p.key], text: `${dictionaries.en.nav[p.key]} ${dictionaries.bn.nav[p.key]} ${p.keywords}`, href: p.href, kind: "page" })),
    ...articles.map((a): Entry => ({ title: loc(a, lang).title, text: both(a, ["title", "excerpt", "category", "author"]), href: `/blog/${a.id}`, kind: "blog" })),
    ...books.map((b): Entry => ({ title: loc(b, lang).title, text: both(b, ["title", "description", "category", "author"]), href: `/book/${b.id}`, kind: "book" })),
    ...events.map((e): Entry => ({ title: loc(e, lang).title, text: both(e, ["title", "description"]), href: `/events/${e.slug}`, kind: "event" })),
  ];
}

export default function SiteSearch({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const { lang, t } = useLang();
  const index = useMemo(() => buildIndex(lang), [lang]);
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
  }, [query, index]);

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex justify-center items-start pt-20 px-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.aria.searchSite}
        className="w-full max-w-xl bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.search.placeholder}
          aria-label={t.aria.search}
          className="w-full px-5 py-4 text-base text-neutral-900 border-b border-neutral-200 outline-none"
        />
        {query && (
          <ul className="list-none m-0 p-0 py-2 space-y-0 max-h-[60vh] overflow-y-auto">
            {results.length === 0 && <li className="px-5 py-3 text-sm text-neutral-500">{t.search.noResults} &ldquo;{query}&rdquo;</li>}
            {results.map((r) => (
              <li key={r.href} className="m-0">
                <Link
                  href={r.href}
                  onClick={onClose}
                  className="flex items-baseline gap-3 px-5 py-3 no-underline hover:no-underline hover:bg-neutral-100 text-neutral-900"
                >
                  <span className="shrink-0 w-16 text-xs uppercase tracking-wide text-neutral-500">{t.search.kinds[r.kind]}</span>
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
