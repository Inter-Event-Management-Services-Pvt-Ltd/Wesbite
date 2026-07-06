import { marqueeEvents } from "@/lib/data";

/** Slow ribbon of the institutional record — pauses on hover. */
export function CredibilityBand() {
  const items = [...marqueeEvents, ...marqueeEvents];
  return (
    <section aria-label="Event record" className="marquee overflow-hidden border-y border-line bg-sunken py-5">
      <div className="marquee-track flex items-center gap-10">
        {items.map((e, i) => (
          <span
            key={`${e}-${i}`}
            aria-hidden={i >= marqueeEvents.length}
            className="flex shrink-0 items-center gap-10 whitespace-nowrap"
          >
            <span className="display text-xl text-soft md:text-2xl">{e}</span>
            <span className="text-accent" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
