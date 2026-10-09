"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SiteSearch from "./SiteSearch";
import EventTicker from "./EventTicker";
import type { TempleEvent } from "@/lib/types/content";
import { useLang } from "./LanguageProvider";
import type { Dict } from "@/lib/i18n";

// Dharma Wheel Icon Component
const DharmaWheelIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="10" fill="currentColor" />
    <path
      d="M32 2 L32 12 M32 52 L32 62 M2 32 L12 32 M52 32 L62 32"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.97 16.97 L23.51 23.51 M40.49 40.49 L47.03 47.03 M47.03 16.97 L40.49 23.51 M23.51 40.49 L16.97 47.03"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SearchIcon = () => (
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
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const MenuIcon = () => (
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
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
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

const navLinks: { href: string; key: keyof Dict["nav"] }[] = [
  { href: "/", key: "home" },
  { href: "/learn-buddhism", key: "learnBuddhism" },
  { href: "/venerable-introduction", key: "venerables" },
  { href: "/blog", key: "blog" },
  { href: "/events", key: "events" },
  { href: "/book", key: "book" },
  { href: "/resources", key: "resources" },
  { href: "/practices/dhamma-school", key: "dhammaSchool" },
  { href: "/practices/meditation", key: "meditation" },
  { href: "/about", key: "about" },
]

export default function Header({ upcoming = [] }: { upcoming?: TempleEvent[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);
  const pathname = usePathname();
  const { lang, t, setLang } = useLang();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Throttle scroll handler using requestAnimationFrame for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 w-full m-0 transition-all duration-300
          ${isScrolled 
            ? "shadow-lg" 
            : ""
          }
        `}
        style={{ backgroundColor: '#793939', margin: 0, padding: 0 }}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8 m-0" aria-label={t.aria.mainNav}>
          <div className="flex items-center h-16 m-0">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 mr-6 shrink-0 no-underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={t.aria.home}
            >
              <div className="text-white">
                <DharmaWheelIcon className="w-8 h-8" />
              </div>
              <span className="hidden sm:inline xl:hidden min-[1480px]:inline text-lg font-semibold text-white whitespace-nowrap">
                {t.siteName}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center flex-1 justify-center gap-6 h-full">
              {navLinks.map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  className={`
                    shrink-0 inline-flex items-center h-full text-sm font-sans text-white whitespace-nowrap no-underline hover:no-underline hover:text-white transition-opacity duration-300 hover:opacity-80 border-b-2
                    ${pathname === href ? "border-white" : "border-transparent"}
                  `}
                >
                  {t.nav[key]}
                </Link>
              ))}
            </div>

            {/* Right Side: Search Icon */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => setLang(lang === "en" ? "bn" : "en")}
                lang={lang === "en" ? "bn" : "en"}
                className="group text-white whitespace-nowrap"
                aria-label={lang === "en" ? "বাংলায় দেখুন" : "View in English"}
              >
                <span className="block text-sm leading-none border border-white/40 rounded-md px-3 py-1.5 group-hover:bg-white/10 transition-colors duration-300">
                  {t.switchTo}
                </span>
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="text-white transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg p-2"
                aria-label={t.aria.search}
              >
                <SearchIcon />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden text-white transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg p-2"
                aria-label={isMobileMenuOpen ? t.aria.closeMenu : t.aria.openMenu}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
        <EventTicker events={upcoming} />
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 xl:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile Menu Slide-in Panel */}
            <motion.div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl xl:hidden"
              role="dialog"
              aria-modal="true"
              aria-label={t.aria.mobileMenu}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <DharmaWheelIcon className="w-8 h-8 text-primary" />
              <span className="text-lg font-semibold text-primary-dark">
                {t.siteName}
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-700 hover:text-primary transition-colors duration-300 p-2"
              aria-label={t.aria.closeMenu}
            >
              <CloseIcon />
            </button>
                </div>

                {/* Mobile Menu Content */}
                <nav className="flex-1 overflow-y-auto p-6" aria-label={t.aria.mobileNav}>
            <ul className="list-none m-0 p-0 space-y-2">
              {navLinks.map(({ href, key }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      block px-4 py-3 rounded-lg transition-all duration-200
                      ${
                        pathname === href
                          ? "text-primary-dark bg-primary/10 font-medium"
                          : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                      }
                    `}
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
              </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {isSearchOpen && <SiteSearch onClose={closeSearch} />}

      {/* Spacer to prevent content from going under fixed header */}
      <div style={{ height: "var(--header-h, 64px)" }} aria-hidden="true" />
    </>
  );
}

