"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/events", label: "Events", exact: false },
  { href: "/admin/settings", label: "Settings", exact: false },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <aside className="w-60 min-h-screen bg-white border-r border-neutral-200 flex flex-col">
      <div className="p-6 border-b border-neutral-100">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">
          Admin Panel
        </p>
        <p className="text-sm font-semibold text-primary-dark leading-tight">
          Bangladesh Buddhist Vihara
        </p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navLinks.map(({ href, label, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                active
                  ? "bg-primary/8 text-primary-dark"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
            >
              {label}
            </Link>
          );
        })}

        <div className="pt-3 border-t border-neutral-100 mt-3 space-y-1">
          <Link
            href="/events"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2.5 rounded-lg text-sm text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800 transition-colors duration-150"
          >
            View Public Site ↗
          </Link>
        </div>
      </nav>

      <div className="p-4 border-t border-neutral-100">
        <button
          onClick={handleLogout}
          className="w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors duration-150 text-left"
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}
