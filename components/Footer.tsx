import Link from "next/link";
import { siteAPI } from "@/lib/api/content";
import { getDict, getLang } from "@/lib/getLang";

// Social Icons (reused from Header for consistency)
const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  // Get site configuration from data API
  const siteConfig = siteAPI.getConfig();
  const t = getDict();
  const year = new Date().getFullYear().toLocaleString(getLang() === "bn" ? "bn-BD" : "en-US", { useGrouping: false });

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/learn-buddhism", label: t.nav.learnBuddhism },
    { href: "/venerable-introduction", label: t.nav.venerables },
    { href: "/blog", label: t.nav.blog },
    { href: "/events", label: t.nav.events },
    { href: "/book", label: t.nav.book },
    { href: "/practices/dhamma-school", label: t.nav.dhammaSchool },
    { href: "/practices/meditation", label: t.nav.meditation },
    { href: "/resources", label: t.nav.resources },
    { href: "/about", label: t.nav.about },
  ];

  const socialLinks = [
    { href: siteConfig.socialLinks.facebook || "#", label: "Facebook", icon: <FacebookIcon /> },
    { href: siteConfig.socialLinks.instagram || "#", label: "Instagram", icon: <InstagramIcon /> },
    { href: siteConfig.socialLinks.youtube || "#", label: "YouTube", icon: <YouTubeIcon /> },
  ];

  return (
    <footer style={{ backgroundColor: "#4a1c1c", color: "#fff" }} className="mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* Temple Info */}
          <div className="lg:col-span-2">
            <h2 style={{ color: "#f5c21a" }} className="text-xl font-semibold mb-3">
              {t.siteName}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)" }} className="text-sm leading-relaxed mb-5">
              {t.footer.tagline}
            </p>
            <blockquote style={{ borderLeftColor: "#f5c21a", background: "transparent", border: "none", borderLeft: "4px solid #f5c21a" }} className="pl-4 py-1 my-0 rounded-none">
              <p style={{ color: "rgba(255,255,255,0.85)" }} className="text-sm leading-relaxed">
                &ldquo;{t.footer.quote}&rdquo;
              </p>
              <footer style={{ color: "rgba(255,255,255,0.5)" }} className="mt-2 text-xs not-italic">
                — {t.footer.quoteAuthor}
              </footer>
            </blockquote>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 style={{ color: "#f5c21a" }} className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h3>
            <nav aria-label={t.aria.footerNav}>
              <ul className="list-none m-0 p-0 grid grid-cols-2 gap-x-6">
                {quickLinks.map((link) => (
                  <li key={link.href} className="m-0">
                    <Link
                      href={link.href}
                      style={{ color: "rgba(255,255,255,0.65)" }}
                      className="text-sm hover:text-white transition-colors duration-200 inline-flex items-center no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h3 style={{ color: "#f5c21a" }} className="text-sm font-semibold uppercase tracking-wider mb-4">
              {t.footer.connect}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.65)" }} className="text-sm mb-5 leading-relaxed">
              {t.footer.follow}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "0.5rem", padding: "0.5rem" }}
                  className="hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }} className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: "rgba(255,255,255,0.45)" }} className="text-sm text-center md:text-left">
              © {year} {t.footer.copyright}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/privacy" style={{ color: "rgba(255,255,255,0.45)" }} className="hover:text-white transition-colors duration-200">
                {t.footer.privacy}
              </Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }} aria-hidden="true">|</span>
              <Link href="/terms" style={{ color: "rgba(255,255,255,0.45)" }} className="hover:text-white transition-colors duration-200">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

