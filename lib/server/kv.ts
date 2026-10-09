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

// Supports both Upstash direct env vars (new) and legacy Vercel KV env vars (old)
function getRedisConfig(): { url: string; token: string } | null {
  // Upstash direct (set by Vercel Marketplace → Upstash integration)
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    return {
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    };
  }
  // Legacy Vercel KV names (kept for backwards compatibility)
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    return {
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    };
  }
  return null;
}

async function getRedis() {
  const config = getRedisConfig();
  if (!config) return null;
  const { Redis } = await import("@upstash/redis");
  return new Redis({ url: config.url, token: config.token });
}

// Events saved before the Bangla translation existed have no `bn`. Reuse the built-in
// translation as long as the English text still matches, so an edited event never shows stale Bangla.
function withStaticBangla(event: TempleEvent): TempleEvent {
  if (event.bn) return event;
  const original = staticEvents.find((e) => e.id === event.id);
  if (!original?.bn || original.title !== event.title || original.description !== event.description) return event;
  return {
    ...event,
    bn: original.bn,
    images: event.images.map((img) => img.bn ? img : { ...img, bn: original.images.find((o) => o.id === img.id && o.alt === img.alt)?.bn }),
  };
}

export async function getEvents(): Promise<TempleEvent[]> {
  const redis = await getRedis();
  if (!redis) return [...staticEvents];
  try {
    const data = await redis.get<string>("events");
    if (!data) return [...staticEvents];
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    const redisEvents = parsed as TempleEvent[];
    // Merge: Redis events take priority; static events fill in anything not in Redis
    const redisIds = new Set(redisEvents.map((e) => e.id));
    const staticOnly = staticEvents.filter((e) => !redisIds.has(e.id));
    return [...redisEvents.map(withStaticBangla), ...staticOnly];
  } catch {
    return [...staticEvents];
  }
}

// Today's date at the temple (New York), as YYYY-MM-DD. An event counts as upcoming through its own day.
export function todayInNewYork(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
}

export async function getUpcomingEvents(): Promise<TempleEvent[]> {
  const today = todayInNewYork();
  return (await getEvents()).filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
}

export async function setEvents(events: TempleEvent[]): Promise<void> {
  const redis = await getRedis();
  if (!redis) {
    throw new Error(
      "Redis not configured — set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN"
    );
  }
  await redis.set("events", JSON.stringify(events));
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
  const redis = await getRedis();
  if (!redis) return defaults;
  try {
    const data = await redis.get<string>("site_settings");
    if (!data) return defaults;
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    return parsed as SiteSettings;
  } catch {
    return defaults;
  }
}

export async function setSettings(settings: SiteSettings): Promise<void> {
  const redis = await getRedis();
  if (!redis) {
    throw new Error(
      "Redis not configured — set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN"
    );
  }
  await redis.set("site_settings", JSON.stringify(settings));
  revalidatePath("/");
}
