import { NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "admin_session";
const SESSION_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

async function verifySessionEdge(token: string): Promise<boolean> {
  const secret = process.env.SESSION_SECRET;
  if (!secret) return false;
  try {
    const decoded = JSON.parse(
      Buffer.from(token, "base64url").toString("utf-8")
    );
    const { data, sig } = decoded as { data: string; sig: string };

    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
      "raw",
      enc.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );
    const sigBytes = Uint8Array.from(
      sig.match(/.{1,2}/g)!.map((b: string) => parseInt(b, 16))
    );
    const valid = await crypto.subtle.verify(
      "HMAC",
      keyMaterial,
      sigBytes,
      enc.encode(data)
    );
    if (!valid) return false;

    const payload = JSON.parse(data) as { iat?: number; role?: string };
    if (payload.role !== "admin") return false;
    if (!payload.iat || Date.now() - payload.iat > SESSION_MAX_AGE_MS) return false;
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") return NextResponse.next();

  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token || !(await verifySessionEdge(token))) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
