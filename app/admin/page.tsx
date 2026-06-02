import Link from "next/link";
import { getEvents } from "@/lib/server/kv";

export const metadata = { title: "Dashboard" };

export default async function AdminDashboardPage() {
  const events = await getEvents();
  const seenYears = new Set<number>();
  for (const e of events) seenYears.add(e.year);
  const years: number[] = [];
  seenYears.forEach((y) => years.push(y));
  years.sort((a, b) => b - a);
  const totalImages = events.reduce((sum, e) => sum + e.images.length, 0);

  const statCards = [
    { label: "Total Events", value: events.length, href: "/admin/events" },
    { label: "Years Covered", value: years.length, href: "/admin/events" },
    { label: "Event Photos", value: totalImages, href: "/admin/events" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-900">Dashboard</h1>
        <p className="text-sm text-neutral-500 mt-1">
          Manage your temple website content
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {statCards.map(({ label, value, href }) => (
          <Link
            key={label}
            href={href}
            className="bg-white rounded-2xl shadow-gentle border border-neutral-100 p-6 hover:border-primary/20 transition-colors group"
          >
            <p className="text-3xl font-bold text-primary-dark">{value}</p>
            <p className="text-sm text-neutral-500 mt-1 group-hover:text-neutral-700 transition-colors">
              {label}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mb-8">
        <h2 className="text-base font-semibold text-neutral-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
          <Link
            href="/admin/events/new"
            className="flex items-center gap-3 bg-white rounded-xl border border-neutral-200 px-4 py-3 hover:border-primary/30 hover:bg-primary/5 transition-colors group"
          >
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-lg group-hover:bg-primary/20 transition-colors">
              +
            </span>
            <span className="text-sm font-medium text-neutral-700">Add New Event</span>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 bg-white rounded-xl border border-neutral-200 px-4 py-3 hover:border-primary/30 hover:bg-primary/5 transition-colors group"
          >
            <span className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-500 text-sm group-hover:bg-neutral-200 transition-colors">
              ⚙
            </span>
            <span className="text-sm font-medium text-neutral-700">Site Settings</span>
          </Link>
        </div>
      </div>

      {/* Recent events */}
      {events.length > 0 && (
        <div>
          <h2 className="text-base font-semibold text-neutral-800 mb-4">Recent Events</h2>
          <div className="bg-white rounded-2xl border border-neutral-100 shadow-gentle overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-100 text-left">
                  <th className="px-4 py-3 font-medium text-neutral-500">Event</th>
                  <th className="px-4 py-3 font-medium text-neutral-500">Year</th>
                  <th className="px-4 py-3 font-medium text-neutral-500">Photos</th>
                </tr>
              </thead>
              <tbody>
                {events.slice(0, 5).map((event) => (
                  <tr key={event.id} className="border-b border-neutral-50 last:border-0">
                    <td className="px-4 py-3 text-neutral-800">{event.title}</td>
                    <td className="px-4 py-3 text-neutral-500">{event.year}</td>
                    <td className="px-4 py-3 text-neutral-500">{event.images.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
