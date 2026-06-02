import { notFound } from "next/navigation";
import Link from "next/link";
import { getEvents } from "@/lib/server/kv";
import EventForm from "@/components/admin/EventForm";

export const metadata = { title: "Edit Event" };

export default async function EditEventPage({
  params,
}: {
  params: { id: string };
}) {
  const events = await getEvents();
  const event = events.find((e) => e.id === params.id);
  if (!event) notFound();

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
        <h1 className="text-2xl font-semibold text-neutral-900">Edit Event</h1>
      </div>
      <div className="bg-white rounded-2xl border border-neutral-100 shadow-gentle p-8">
        <EventForm event={event} />
      </div>
    </div>
  );
}
