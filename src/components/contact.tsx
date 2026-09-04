"use client";

import { useState } from "react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Magnetic } from "./magnetic";
import { eventTypes, offices, site } from "@/lib/data";

const fieldClasses =
  "w-full border border-line bg-raised px-4 py-3.5 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none";

const labelClasses = "mb-2 block font-mono text-[10px] uppercase tracking-[0.18em] text-soft";

/**
 * Enquiry form. Posts to /api/enquiry, which mails the brief to both IEMS
 * mailboxes through Resend.
 */
export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    const payload = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const { error: message } = await res.json().catch(() => ({ error: null }));
        throw new Error(message ?? "Something went wrong.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="06"
          kicker="Start a project"
          title="Tell us what you're planning"
          lede="Share the venue, the dates and the scale. A senior planner — not a sales desk — reads every enquiry, and because the inventory is ours, the quote comes straight from the people who'll build it."
        />

        <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
          {/* offices */}
          <div className="space-y-8 lg:col-span-2">
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.06}>
                <div className="border border-line bg-raised p-6">
                  <p className="kicker mb-3">{o.city}</p>
                  <p className="text-sm leading-relaxed text-soft">{o.address}</p>
                  <div className="mt-4 flex flex-col gap-1 font-mono text-[11px] tracking-[0.08em]">
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="link-draw w-fit text-ink">
                      {o.phone}
                    </a>
                    <a href={`mailto:${o.email}`} className="link-draw w-fit break-all text-soft">
                      {o.email}
                    </a>
                    {"altEmail" in o && o.altEmail && (
                      <a href={`mailto:${o.altEmail}`} className="link-draw w-fit break-all text-soft">
                        {o.altEmail}
                      </a>
                    )}
                    {"map" in o && o.map && (
                      <a
                        href={o.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-draw mt-1 w-fit uppercase tracking-[0.16em] text-accent"
                      >
                        View on map <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            {status === "sent" ? (
              <div className="flex h-full min-h-80 flex-col items-start justify-center border border-accent/40 bg-raised p-10">
                <p className="kicker mb-4">Enquiry logged</p>
                <p className="display text-4xl text-ink">We build fast. We reply faster.</p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-soft">
                  Your brief is with the Delhi site office. Expect a call within one
                  working day — sooner if your dates are close.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClasses}>Name</label>
                  <input id="name" name="name" required autoComplete="name" className={fieldClasses} placeholder="Full name" />
                </div>
                <div>
                  <label htmlFor="org" className={labelClasses}>Organisation</label>
                  <input id="org" name="org" required autoComplete="organization" className={fieldClasses} placeholder="Institution / company" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={fieldClasses} placeholder="name@organisation.in" />
                </div>
                <div>
                  <label htmlFor="type" className={labelClasses}>Event type</label>
                  <select id="type" name="type" required defaultValue="" className={fieldClasses}>
                    <option value="" disabled>Select…</option>
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className={labelClasses}>Tentative dates</label>
                  <input id="date" name="date" className={fieldClasses} placeholder="e.g. 14–18 Feb 2027" />
                </div>
                <div>
                  <label htmlFor="city" className={labelClasses}>Venue / city</label>
                  <input id="city" name="city" className={fieldClasses} placeholder="e.g. Pragati Maidan, Delhi" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelClasses}>The brief</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={fieldClasses}
                    placeholder="Scale, footprint, delegate count, anything protocol-sensitive…"
                  />
                </div>
                {/* honeypot — hidden from people, catches bots */}
                <div aria-hidden className="hidden">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="flex flex-col gap-4 sm:col-span-2">
                  {error && (
                    <p role="alert" className="border border-accent/50 bg-raised px-4 py-3 text-sm text-ink">
                      {error} You can also write to{" "}
                      <a href={`mailto:${site.email}`} className="link-draw text-accent">{site.email}</a>.
                    </p>
                  )}
                  <Magnetic className="w-fit">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-accent-bright disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Send the brief"}
                      <span aria-hidden>→</span>
                    </button>
                  </Magnetic>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
