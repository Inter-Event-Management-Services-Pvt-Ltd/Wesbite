import Link from "next/link";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { Plate } from "./plate";
import { projects } from "@/lib/data";

/** Picked by slug, not position — every one of these has photographs on file. */
const FEATURED = ["apicon", "napcon", "national-dental-commission"];

/** Alternating plates + dossier meta; each entry opens a full case study. */
export function ProjectsShowcase() {
  const featured = FEATURED.map((slug) => projects.find((p) => p.slug === slug)!);

  return (
    <section id="projects" className="scroll-mt-20 border-t border-line bg-sunken/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          index="03"
          kicker="Selected work"
          title="Built, not brochured"
          lede="Three builds that show the range: India's largest physicians' congress, the national pulmonology meeting across three parallel halls, and a government building inaugurated on live national broadcast. Every plate below is a site photograph, not a render."
        />

        <div className="space-y-20 md:space-y-28">
          {featured.map((p, i) => (
            <Reveal key={p.slug}>
              <article
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Link href={`/projects/${p.slug}`} aria-label={`${p.title} case study`}>
                  <Plate
                    index={`0${i + 1}`}
                    caption={p.title}
                    note={p.plates[0].note}
                    src={p.plates[0].src}
                    ratio="aspect-[16/11]"
                  />
                </Link>

                <div>
                  <p className="kicker mb-4">{p.category}</p>
                  <h3 className="display text-4xl text-ink md:text-5xl">
                    <Link href={`/projects/${p.slug}`} className="transition-colors hover:text-accent">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-soft">{p.headline}</p>

                  <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6">
                    {p.stats.slice(0, 4).map((st) => (
                      <div key={st.label} className="flex flex-col">
                        <dt className="order-2 mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                          {st.label}
                        </dt>
                        <dd className="display text-2xl text-ink">{st.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    href={`/projects/${p.slug}`}
                    className="link-draw mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
                  >
                    Open the case study <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 border-t border-line pt-8 text-center md:mt-28">
            <Link
              href="/portfolio"
              className="link-draw inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-soft hover:text-ink"
            >
              Browse the full portfolio — two decades of builds <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
