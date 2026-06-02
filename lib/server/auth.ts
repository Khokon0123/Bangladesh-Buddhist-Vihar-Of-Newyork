import crypto from "node:crypto";

const COOKIE_NAME = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET env var is not set");
  return secret;
}

export function signToken(payload: Record<string, unknown>): string {
  const data = JSON.stringify({ ...payload, iat: Date.now() });
  const sig = crypto
    .createHmac("sha256", getSecret())
    .update(data)
    .digest("hex");
  return Buffer.from(JSON.stringify({ data, sig })).toString("base64url");
}

export function verifyToken(token: string): Record<string, unknown> | null {
  try {
    const decoded = JSON.parse(
      Buffer.from(token, "base64url").toString("utf-8")
    );
    const { data, sig } = decoded as { data: string; sig: string };
    const expected = crypto
      .createHmac("sha256", getSecret())
      .update(data)
      .digest("hex");
    const sigBuf = Buffer.from(sig, "hex");
    const expBuf = Buffer.from(expected, "hex");
    if (sigBuf.length !== expBuf.length) return null;
    if (!crypto.timingSafeEqual(sigBuf, expBuf)) return null;
    const payload = JSON.parse(data) as Record<string, unknown>;
    const ageMs = Date.now() - (payload.iat as number);
    if (ageMs > SESSION_MAX_AGE * 1000) return null;
    return payload;
  } catch {
    return null;
  }
}

export function verifyPassword(plain: string): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;
  const a = Buffer.from(plain);
  const b = Buffer.from(adminPassword);
  if (a.length !== b.length) {
    // Still run timingSafeEqual with dummy to avoid timing leak
    crypto.timingSafeEqual(b, b);
    return false;
  }
  return crypto.timingSafeEqual(a, b);
}

export function makeSessionCookieHeader(token: string): string {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${COOKIE_NAME}=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${SESSION_MAX_AGE}${secure}`;
}

export function clearSessionCookieHeader(): string {
  return `${COOKIE_NAME}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0`;
}

export { COOKIE_NAME };
