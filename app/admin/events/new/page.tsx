import Link from "next/link";
import EventForm from "@/components/admin/EventForm";

export const metadata = { title: "New Event" };

export default function NewEventPage() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/admin/events"
          className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
        >
          ← Events
        </Link>
        <span className="text-neutral-300">/</span>
        <h1 className="text-2xl font-semibold text-neutral-900">New Event</h1>
      </div>
      <div className="bg-white rounded-2xl border border-neutral-100 shadow-gentle p-8">
        <EventForm />
      </div>
    </div>
  );
}
