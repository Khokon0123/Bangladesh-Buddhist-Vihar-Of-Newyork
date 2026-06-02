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
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
