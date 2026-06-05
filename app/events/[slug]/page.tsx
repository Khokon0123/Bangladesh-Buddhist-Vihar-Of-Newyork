import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getEvents } from "@/lib/server/kv";
import EventDetailClient from "./EventDetailClient";

export const dynamic = "force-dynamic";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const allEvents = await getEvents();
  const event = allEvents.find((e) => e.slug === params.slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.description.slice(0, 160),
    openGraph: {
      title: `${event.title} | Bangladesh Buddhist Vihara Of New York`,
      description: event.description.slice(0, 160),
      images: event.images[0] ? [event.images[0].src] : [],
    },
  };
}

export default async function EventDetailPage({ params }: Props) {
  const allEvents = await getEvents();
  const event = allEvents.find((e) => e.slug === params.slug);
  if (!event) notFound();

  return (
    <main id="main-content">
      <EventDetailClient event={event} />
    </main>
  );
}
