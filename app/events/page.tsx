import { Metadata } from "next";
import { getEvents } from "@/lib/server/kv";
import EventsGalleryClient from "./EventsGalleryClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Temple Events Gallery",
  description:
    "Explore the community events and celebrations at Bangladesh Buddhist Vihara Of New York. Browse photos and highlights from Vesak, Kathina, and other sacred occasions.",
  openGraph: {
    title: "Temple Events Gallery | Bangladesh Buddhist Vihara Of New York",
    description:
      "A year-by-year visual record of our temple's community gatherings, celebrations, and Dhamma events.",
    images: ["/images/WhatsApp Image 2026-04-25 at 14.44.58.jpeg"],
  },
};

export default async function EventsPage() {
  const allEvents = await getEvents();

  const yearsSet = new Set<number>();
  for (const e of allEvents) yearsSet.add(e.year);
  const years = Array.from(yearsSet).sort((a, b) => b - a);
  const initialYear = years[0] ?? new Date().getFullYear();

  return (
    <main id="main-content">
      <EventsGalleryClient
        allEvents={allEvents}
        years={years}
        initialYear={initialYear}
      />
    </main>
  );
}
