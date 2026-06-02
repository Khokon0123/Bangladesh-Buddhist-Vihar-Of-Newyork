"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { TempleEvent } from "@/lib/types/content";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

function formatDate(d: string) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function AdminEventsPage() {
  const [events, setEvents] = useState<TempleEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<TempleEvent | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchEvents = useCallback(async () => {
    const res = await fetch("/api/admin/events");
    if (res.ok) {
      const data = await res.json() as TempleEvent[];
      setEvents(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchEvents(); }, [fetchEvents]);

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    const res = await fetch(`/api/admin/events/${deleteTarget.id}`, {
      method: "DELETE",
    });
    setDeleting(false);
    setDeleteTarget(null);
    if (res.ok) setEvents((prev) => prev.filter((e) => e.id !== deleteTarget.id));
  }

  const byYear = events.reduce<Record<number, TempleEvent[]>>((acc, e) => {
    (acc[e.year] = acc[e.year] ?? []).push(e);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-40 text-neutral-400 text-sm">
        Loading…
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">Events</h1>
          <p className="text-sm text-neutral-500 mt-1">{events.length} total events</p>
        </div>
        <Link
          href="/admin/events/new"
          className="px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          + Add Event
        </Link>
      </div>

      {events.length === 0 ? (
        <div className="bg-white rounded-2xl border border-neutral-100 p-12 text-center text-neutral-400 text-sm">
          No events yet.{" "}
          <Link href="/admin/events/new" className="text-primary hover:underline">
            Add the first one
          </Link>
          .
        </div>
      ) : (
        <div className="space-y-8">
          {years.map((year) => (
            <div key={year}>
              <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                {year}
              </h2>
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-gentle overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-100 text-left">
                      <th className="px-4 py-3 font-medium text-neutral-500">Title</th>
                      <th className="px-4 py-3 font-medium text-neutral-500">Date</th>
                      <th className="px-4 py-3 font-medium text-neutral-500">Photos</th>
                      <th className="px-4 py-3 font-medium text-neutral-500 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {byYear[year].map((event) => (
                      <tr key={event.id} className="border-b border-neutral-50 last:border-0 hover:bg-neutral-50/50">
                        <td className="px-4 py-3 font-medium text-neutral-800">{event.title}</td>
                        <td className="px-4 py-3 text-neutral-500">{formatDate(event.date)}</td>
                        <td className="px-4 py-3 text-neutral-500">{event.images.length}</td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/admin/events/${event.id}/edit`}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => setDeleteTarget(event)}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 border border-red-100 hover:bg-red-50 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {deleteTarget && (
        <ConfirmDialog
          title="Delete Event"
          message={`Are you sure you want to delete "${deleteTarget.title}"? This will also remove all associated photos.`}
          confirmLabel="Delete"
          loading={deleting}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  );
}
