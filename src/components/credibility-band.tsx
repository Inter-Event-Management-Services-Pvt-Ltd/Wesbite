import { clients } from "@/lib/data";

/** Slow ribbon of the institutions we've built for — pauses on hover. */
export function CredibilityBand() {
  const items = [...clients, ...clients];
  return (
    <section aria-label="Clients" className="border-y border-line bg-sunken">
      <p className="kicker border-b border-line px-5 py-3 md:px-8">
        The people we build for
      </p>
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex items-stretch py-6">
        {items.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            aria-hidden={i >= clients.length}
            className="mx-3 flex shrink-0 flex-col justify-center whitespace-nowrap border border-line bg-raised px-7 py-4"
          >
            <span className="display text-lg text-ink md:text-xl">{c.name}</span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
              <span className="text-accent" aria-hidden>✦ </span>{c.note}
            </span>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
