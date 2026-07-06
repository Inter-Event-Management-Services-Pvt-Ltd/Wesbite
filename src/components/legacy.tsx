import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { timeline } from "@/lib/data";

/** "Since 1986" — the credibility the old site buried, given a whole act. */
export function Legacy() {
  return (
    <section id="legacy" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="04"
          kicker="The legacy"
          title="Working since 1986"
          lede="Founded before India liberalised, still run by the family that founded it. The record below is the sales pitch — there isn't another one."
        />

        <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
          {/* left: monument year + retained-client claim */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p
                  className="display leading-[0.85] text-[clamp(6rem,16vw,13rem)] text-transparent"
                  style={{ WebkitTextStroke: "1.5px var(--line-strong)" }}
                  aria-hidden
                >
                  1986
                </p>
                <blockquote className="mt-8 max-w-sm border-l-2 border-accent pl-5">
                  <p className="text-lg leading-relaxed text-ink">
                    &ldquo;Well done is better than well said. Our client retention
                    ratio is the only advertisement we have ever needed.&rdquo;
                  </p>
                  <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                    Managing Director, IEMS — [PLACEHOLDER: name & portrait]
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>

          {/* right: timeline */}
          <ol className="lg:col-span-3">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <li className="relative border-l border-line pb-12 pl-8 last:pb-0">
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-2 h-[9px] w-[9px] rotate-45 border border-accent bg-bg"
                  />
                  <p className="kicker mb-2">{t.year}</p>
                  <h3 className="display text-2xl text-ink md:text-3xl">{t.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-soft">{t.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
