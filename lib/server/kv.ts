import { revalidatePath } from "next/cache";
import { TempleEvent } from "@/lib/types/content";
import { events as staticEvents } from "@/lib/data/events";
import { siteConfig } from "@/lib/data/site-config";

export interface SiteSettings {
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  socialFacebook: string;
  socialInstagram: string;
  socialYoutube: string;
  footerQuote: string;
  footerQuoteAuthor: string;
}

function isKVAvailable(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

export async function getEvents(): Promise<TempleEvent[]> {
  if (!isKVAvailable()) return [...staticEvents];
  try {
    const { kv } = await import("@vercel/kv");
    const data = await kv.get<string>("events");
    if (!data) return [...staticEvents];
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    return parsed as TempleEvent[];
  } catch {
    return [...staticEvents];
  }
}

export async function setEvents(events: TempleEvent[]): Promise<void> {
  if (!isKVAvailable()) {
    throw new Error("KV not available — set KV_REST_API_URL and KV_REST_API_TOKEN env vars");
  }
  const { kv } = await import("@vercel/kv");
  await kv.set("events", JSON.stringify(events));
  revalidatePath("/events");
}

export async function getSettings(): Promise<SiteSettings> {
  const defaults: SiteSettings = {
    contactEmail: siteConfig.contact.email ?? "",
    contactPhone: siteConfig.contact.phone ?? "",
    contactAddress: siteConfig.contact.address ?? "",
    socialFacebook: siteConfig.socialLinks.facebook ?? "",
    socialInstagram: siteConfig.socialLinks.instagram ?? "",
    socialYoutube: siteConfig.socialLinks.youtube ?? "",
    footerQuote: siteConfig.footer.quote,
    footerQuoteAuthor: siteConfig.footer.quoteAuthor ?? "",
  };
  if (!isKVAvailable()) return defaults;
  try {
    const { kv } = await import("@vercel/kv");
    const data = await kv.get<string>("site_settings");
    if (!data) return defaults;
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    return parsed as SiteSettings;
  } catch {
    return defaults;
  }
}

export async function setSettings(settings: SiteSettings): Promise<void> {
  if (!isKVAvailable()) {
    throw new Error("KV not available — set KV_REST_API_URL and KV_REST_API_TOKEN env vars");
  }
  const { kv } = await import("@vercel/kv");
  await kv.set("site_settings", JSON.stringify(settings));
  revalidatePath("/");
}
