import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { services } from "@/lib/data";

/**
 * Services as a bill of quantities: numbered rows, scope lists, spec chips.
 * Hover raises the row and floods the index numeral with accent.
 */
export function Services() {
  return (
    <section id="services" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="02"
          kicker="What we do"
          title="Five disciplines, one contract"
          lede="Most agencies coordinate vendors. IEMS manages the event and owns the inventory, the workshops and the crews — so every line below is delivered in-house, priced from one office, and answerable to one site head."
        />

        <div className="border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.06}>
              <article className="group grid gap-6 border-b border-line py-10 transition-colors duration-300 hover:bg-raised md:grid-cols-12 md:gap-8 md:py-12">
                <div className="md:col-span-1">
                  <span className="display text-3xl text-faint transition-colors duration-300 group-hover:text-accent md:text-4xl">
                    {s.index}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <h3 className="display text-3xl text-ink md:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-soft md:pr-6">{s.summary}</p>
                </div>

                <div className="md:col-span-4">
                  <ul className="space-y-2.5">
                    {s.scope.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-soft">
                        <span aria-hidden className="mt-[0.65em] h-px w-4 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-3">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {s.specs.map((spec) => (
                      <span
                        key={spec}
                        className="border border-line px-3 py-1.5 font-mono text-[10px] tracking-[0.14em] text-faint transition-colors duration-300 group-hover:border-line-strong group-hover:text-soft"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
