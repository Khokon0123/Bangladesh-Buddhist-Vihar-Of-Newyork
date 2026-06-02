import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/server/auth";
import { getEvents, setEvents } from "@/lib/server/kv";
import { TempleEvent, EventImage } from "@/lib/types/content";

function requireAdmin(): boolean {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token) !== null;
}

export async function GET() {
  if (!requireAdmin()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const events = await getEvents();
  return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
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

    if (!title || !date || !description) {
      return NextResponse.json(
        { error: "title, date, and description are required" },
        { status: 400 }
      );
    }

    const year = new Date(date + "T00:00:00").getFullYear();
    const slug =
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "") +
      "-" +
      year;
    const id = slug + "-" + Date.now();

    const newEvent: TempleEvent = {
      id,
      slug,
      title,
      date,
      year,
      description,
      images: images ?? [],
    };

    const all = await getEvents();
    await setEvents([...all, newEvent]);
    return NextResponse.json(newEvent, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
