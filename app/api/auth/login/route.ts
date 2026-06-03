import { NextRequest, NextResponse } from "next/server";
import {
  verifyPassword,
  signToken,
  makeSessionCookieHeader,
} from "@/lib/server/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body as { password?: string };

    if (!process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: "ADMIN_PASSWORD is not set in environment variables" },
        { status: 500 }
      );
    }
    if (!process.env.SESSION_SECRET) {
      return NextResponse.json(
        { error: "SESSION_SECRET is not set in environment variables" },
        { status: 500 }
      );
    }

    if (!password || !verifyPassword(password)) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    const token = signToken({ role: "admin" });
    const response = NextResponse.json({ ok: true });
    response.headers.set("Set-Cookie", makeSessionCookieHeader(token));
    return response;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
