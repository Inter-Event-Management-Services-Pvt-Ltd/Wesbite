import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { careersEmail, hiringPrinciples, site, tradesWeHire } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "No vacancies are advertised at IEMS right now. The trades we hire into across New Delhi, Jaipur and Chandigarh — and where to write in.",
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
              down before the papers print the photos. No seat is open today —
              but the file stays open.
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

      {/* no advertised vacancies — the honest empty state */}
      <section className="border-t border-line bg-sunken/40">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="kicker mb-6 flex items-center gap-3">
                <span aria-hidden className="inline-block h-px w-10 bg-accent" />
                Open positions
              </h2>
              <p className="display text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] text-ink">
                Nothing is advertised this season.
              </p>
              <p className="mt-6 text-base leading-relaxed text-soft md:text-lg">
                Every seat is filled right now, and we would rather say so than
                collect applications against a role that does not exist. Hiring
                here follows the calendar — congress season, convocation season
                and the exhibition run each open crew positions, usually with
                little notice.
              </p>
              <p className="mt-4 text-base leading-relaxed text-soft md:text-lg">
                When they open, we look in the file first. Writing in now is the
                fastest way to be in it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="kicker mt-16 mb-8">Trades we hire into</h3>
          </Reveal>
          <dl className="border-t border-line">
            {tradesWeHire.map((t, i) => (
              <Reveal key={t.trade} delay={0.1 + i * 0.05}>
                <div className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:items-baseline md:gap-8">
                  <dt className="display text-xl text-ink md:col-span-4 md:text-2xl">
                    {t.trade}
                  </dt>
                  <dd className="text-sm leading-relaxed text-soft md:col-span-8 md:text-base">
                    {t.detail}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.12}>
            <div className="mt-12 flex flex-col items-start gap-5 border border-line bg-raised p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="display text-2xl text-ink">Write in anyway</h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-soft">
                  Tell us what you have built, where, and who you built it with.
                  Good riggers, electricians and site engineers get a reply
                  whether or not a seat is open — season or no season.
                </p>
                <p className="mt-3 font-mono text-[11px] tracking-[0.08em] text-faint">
                  <a href={`mailto:${careersEmail}`} className="link-draw break-all hover:text-ink">
                    {careersEmail}
                  </a>
                  <span aria-hidden className="mx-2 text-line-strong">·</span>
                  <a href={`mailto:${site.altEmail}`} className="link-draw break-all hover:text-ink">
                    {site.altEmail}
                  </a>
                </p>
              </div>
              <a
                href={`mailto:${careersEmail}?subject=${encodeURIComponent("Open application")}`}
                className="inline-flex shrink-0 items-center gap-3 bg-accent px-7 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-accent-bright"
              >
                Send an open application <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
