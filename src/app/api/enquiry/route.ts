/**
 * Enquiry mail handler. Posts the contact-form brief to Resend's REST API
 * and delivers it to both IEMS mailboxes in one send.
 *
 * Env (set in .env.local and in the Vercel project):
 *   RESEND_API_KEY   required — https://resend.com/api-keys
 *   ENQUIRY_FROM     optional — "IEMS Website <enquiries@iemsnewdelhi.com>".
 *                    The domain must be verified in Resend; until it is,
 *                    the default onboarding sender only reaches the
 *                    Resend account owner.
 */
import { NextResponse } from "next/server";
import { site } from "@/lib/data";

const TO = [site.email, site.altEmail];
const FROM = process.env.ENQUIRY_FROM ?? "IEMS Website <onboarding@resend.dev>";

// name/org/email/message are required; the rest ride along if filled in.
const FIELDS = ["name", "org", "email", "type", "date", "city", "message"] as const;
const REQUIRED = ["name", "org", "email", "message"] as const;
const LABELS: Record<string, string> = {
  name: "Name",
  org: "Organisation",
  email: "Email",
  type: "Event type",
  date: "Tentative dates",
  city: "Venue / city",
  message: "The brief",
};

const escape = (v: string) =>
  v.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("enquiry: RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Mail is not configured." }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // honeypot: real people never fill a hidden field
  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const values: Record<string, string> = {};
  for (const f of FIELDS) {
    const raw = body[f];
    values[f] = typeof raw === "string" ? raw.trim().slice(0, 5000) : "";
  }
  const missing = REQUIRED.filter((f) => !values[f]);
  if (missing.length) {
    return NextResponse.json({ error: `Missing: ${missing.join(", ")}` }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return NextResponse.json({ error: "That email address looks wrong." }, { status: 400 });
  }

  const filled = FIELDS.filter((f) => values[f]);
  const text = filled.map((f) => `${LABELS[f]}: ${values[f]}`).join("\n");
  const html = `<h2>New enquiry — ${escape(values.org)}</h2><table cellpadding="6">${filled
    .map(
      (f) =>
        `<tr><td style="color:#666">${LABELS[f]}</td><td><strong>${escape(values[f]).replace(
          /\n/g,
          "<br>",
        )}</strong></td></tr>`,
    )
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: TO,
      reply_to: values.email,
      subject: `Enquiry — ${values.org}${values.type ? ` · ${values.type}` : ""}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("enquiry: resend failed", res.status, await res.text());
    return NextResponse.json({ error: "Could not send. Please email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
