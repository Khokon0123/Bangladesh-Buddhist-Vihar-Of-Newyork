import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/server/auth";
import { getEvents, setEvents } from "@/lib/server/kv";
import { EventImage } from "@/lib/types/content";

function requireAdmin(): boolean {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token) !== null;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!requireAdmin()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, date, description, images } = body as {
      title: string;
      date: string;
      description: string;
      images: EventImage[];
    };

    const all = await getEvents();
    const idx = all.findIndex((e) => e.id === params.id);
    if (idx === -1) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    const year = new Date(date + "T00:00:00").getFullYear();
    const updated = { ...all[idx], title, date, year, description, images };
    all[idx] = updated;
    await setEvents(all);
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!requireAdmin()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const all = await getEvents();
  const event = all.find((e) => e.id === params.id);
  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  // Delete images from Vercel Blob if Blob is configured
  if (process.env.BLOB_READ_WRITE_TOKEN && event.images.length > 0) {
    try {
      const { del } = await import("@vercel/blob");
      await Promise.all(event.images.map((img) => del(img.src)));
    } catch {
      // Non-fatal: continue with event deletion even if blob cleanup fails
    }
  }

  await setEvents(all.filter((e) => e.id !== params.id));
  return NextResponse.json({ ok: true });
}
