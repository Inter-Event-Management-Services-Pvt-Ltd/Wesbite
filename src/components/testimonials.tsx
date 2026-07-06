import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { testimonials, dignitaryLine } from "@/lib/data";

/** Social proof: institutional quotes + the dignitary record as a banner. */
export function Testimonials() {
  return (
    <section aria-label="Client testimonials" className="border-t border-line bg-sunken/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="05"
          kicker="The references"
          title="Clients who came back"
        />

        <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <blockquote className="flex h-full flex-col justify-between gap-8 bg-bg p-8 transition-colors duration-300 hover:bg-raised md:p-10">
                <p className="text-base leading-relaxed text-ink">
                  <span aria-hidden className="display mr-1 text-3xl leading-none text-accent">&ldquo;</span>
                  {t.quote}
                </p>
                <footer>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-soft">{t.name}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{t.org}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-14 border-l-2 border-accent pl-5 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-soft md:max-w-3xl">
            {dignitaryLine} Awarded Best Event Management Company — Delhi, Jaipur
            &amp; Chandigarh (2013, 2017). {/* [VERIFY] award names/years */}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
