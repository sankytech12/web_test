import { NextResponse } from "next/server";
import { contactSchema } from "@/features/contact/lib/schema";

// Best-effort in-memory limiter (per server instance). Swap for Redis/Upstash in production.
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // Honeypot tripped: pretend success so bots learn nothing.
  if (parsed.data.website) return NextResponse.json({ ok: true });

  // TODO: deliver via email provider (Resend, SES...) or CRM webhook.
  console.info("[contact] new enquiry", {
    name: parsed.data.name,
    email: parsed.data.email,
    service: parsed.data.service,
  });

  return NextResponse.json({ ok: true });
}
