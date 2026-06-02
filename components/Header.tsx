"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
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
        <nav className="w-full px-4 sm:px-6 lg:px-8 m-0" aria-label="Main navigation">
          <div className="flex items-center h-16 m-0">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="flex items-center gap-3 mr-4 sm:mr-8 lg:mr-12 min-w-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Home"
            >
              <div className="text-white">
                <DharmaWheelIcon className="w-8 h-8" />
              </div>
              <span className="hidden sm:inline text-lg font-semibold text-white whitespace-nowrap">
                Bangladesh Buddhist Vihara Of New York
              </span>
            </Link>

            {/* Desktop Navigation - Centered/Right */}
            <div className="hidden lg:flex items-center flex-1 justify-center gap-8">
              <Link
                href="/"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                Home
              </Link>
              <Link
                href="/learn-buddhism"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/learn-buddhism" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                Learn Buddhism
              </Link>
              <Link
                href="/venerable-introduction"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/venerable-introduction" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                Venerable Introduction
              </Link>
              <Link
                href="/blog"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/blog" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                Blog
              </Link>
              <Link
                href="/events"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/events" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                Events
              </Link>
              <Link
                href="/book"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/book" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                Book
              </Link>
              <Link
                href="/resources"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/resources" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                Resources
              </Link>
              <Link
                href="/practices/dhamma-school"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/practices/dhamma-school" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                Dhamma School
              </Link>
              <Link
                href="/practices/meditation"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/practices/meditation" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                Meditation
              </Link>
              <Link
                href="/about"
                className={`
                  text-sm font-sans text-white no-underline transition-all duration-300 hover:opacity-80
                  ${pathname === "/about" ? "border-b-2 border-white pb-1" : ""}
                `}
              >
                About
              </Link>
            </div>

            {/* Right Side: Search Icon */}
            <div className="flex items-center gap-4 ml-auto">
              <button
                className="text-white transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg p-2"
                aria-label="Search"
              >
                <SearchIcon />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-lg p-2"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
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
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
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
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
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
                Bangladesh Buddhist Vihara Of New York
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-neutral-700 hover:text-primary transition-colors duration-300 p-2"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
                </div>

                {/* Mobile Menu Content */}
                <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile navigation">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/learn-buddhism"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/learn-buddhism"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  Learn Buddhism
                </Link>
              </li>
              <li>
                <Link
                  href="/venerable-introduction"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/venerable-introduction"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  Venerable Introduction
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/blog"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/events"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/book"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  Book
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/resources"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/practices/dhamma-school"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/practices/dhamma-school"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  Dhamma School
                </Link>
              </li>
              <li>
                <Link
                  href="/practices/meditation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/practices/meditation"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  Meditation
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all duration-200
                    ${
                      pathname === "/about"
                        ? "text-primary-dark bg-primary/10 font-medium"
                        : "text-neutral-700 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  About
                </Link>
              </li>
            </ul>
              </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}

