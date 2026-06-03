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

export async function getEvents(): Promise<TempleEvent[]> {
  const redis = await getRedis();
  if (!redis) return [...staticEvents];
  try {
    const data = await redis.get<string>("events");
    if (!data) return [...staticEvents];
    const parsed = typeof data === "string" ? JSON.parse(data) : data;
    return parsed as TempleEvent[];
  } catch {
    return [...staticEvents];
  }
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
