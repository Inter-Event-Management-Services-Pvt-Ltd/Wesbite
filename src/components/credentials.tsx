import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { dignitaryLine, credentials } from "@/lib/data";

/**
 * Standing in the room. Replaces the old testimonials block — quotes go back
 * in only when real, attributed ones exist; until then the record speaks.
 */
export function Credentials() {
  return (
    <section aria-label="Credentials" className="border-t border-line bg-sunken/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="05"
          kicker="The standing"
          title="Heads of state have opened these halls"
          lede={dignitaryLine}
        />

        <dl className="border-t border-line">
          {credentials.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="grid gap-2 border-b border-line py-7 md:grid-cols-12 md:items-baseline md:gap-8">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint md:col-span-3">
                  {c.label}
                </dt>
                <dd className="text-base leading-relaxed text-ink md:col-span-9 md:text-lg">
                  {c.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
