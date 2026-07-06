import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { careersEmail, hiringPrinciples, openings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the venues India's institutions meet in. Open positions at IEMS across New Delhi, Jaipur and Chandigarh.",
};

export default function CareersPage() {
  return (
    <div>
      <header className="relative overflow-hidden border-b border-line">
        <div
          className="blueprint absolute inset-0"
          style={{ maskImage: "linear-gradient(to bottom, black, transparent 85%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-14 md:px-8 md:pt-40 md:pb-18">
          <Reveal>
            <p className="kicker mb-5 flex items-center gap-3">
              <span aria-hidden className="inline-block h-px w-10 bg-accent" />
              Careers — Delhi · Jaipur · Chandigarh
            </p>
            <h1 className="display text-[clamp(3rem,9vw,7.5rem)]">
              Build for a <span className="text-accent">head of state</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">
              Most construction jobs, nobody notices your work. Here, it is
              inspected by security agencies, walked by Presidents, and struck
              down before the papers print the photos. If that appeals, read on.
            </p>
          </Reveal>
        </div>
      </header>

      {/* how we hire */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="kicker mb-10">How we work</h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          {hiringPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="border-t-2 border-accent pt-5">
                <h3 className="display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-soft">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* openings */}
      <section className="border-t border-line bg-sunken/40">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <h2 className="kicker mb-10">
              Open positions <span className="text-faint">— [PLACEHOLDER: confirm with HR]</span>
            </h2>
          </Reveal>
          <div className="border-t border-line">
            {openings.map((job, i) => (
              <Reveal key={job.role} delay={i * 0.04}>
                <article className="group grid gap-4 border-b border-line py-8 transition-colors duration-300 hover:bg-raised md:grid-cols-12 md:items-center md:gap-6">
                  <div className="md:col-span-5">
                    <h3 className="display text-2xl text-ink transition-colors duration-300 group-hover:text-accent md:text-3xl">
                      {job.role}
                    </h3>
                  </div>
                  <div className="flex gap-2 md:col-span-2">
                    <span className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-soft">
                      {job.location}
                    </span>
                    <span className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-soft md:col-span-3">{job.brief}</p>
                  <div className="md:col-span-2 md:text-right">
                    <a
                      href={`mailto:${careersEmail}?subject=${encodeURIComponent(`Application — ${job.role}`)}`}
                      className="link-draw inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
                    >
                      Apply <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-start gap-5 border border-line bg-raised p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="display text-2xl text-ink">Nothing that fits?</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-soft">
                  Good riggers, electricians and site engineers are hired the
                  week they write in — season or no season. Tell us what you
                  have built.
                </p>
              </div>
              <a
                href={`mailto:${careersEmail}?subject=${encodeURIComponent("Open application")}`}
                className="inline-flex shrink-0 items-center gap-3 bg-accent px-7 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-accent-bright"
              >
                Write to us <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
