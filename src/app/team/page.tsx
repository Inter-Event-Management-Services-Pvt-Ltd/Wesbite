import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { leadership, disciplines, missionVision } from "@/lib/data";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "The family that founded IEMS in 2002 and the crews who build protocol-grade venues across North India.",
};

export default function TeamPage() {
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
              Headquarters — 23A Bhawani Kunj, Vasant Kunj, New Delhi
            </p>
            <h1 className="display text-[clamp(3rem,9vw,7.5rem)]">
              Names on the <span className="text-accent">gate pass</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">
              Every IEMS build is answered for from one address. This is the
              team at the main branch — the family that founded the firm in
              2002 and the crews who have stayed for decades. On a
              security-cleared site, continuity is the qualification.
            </p>
          </Reveal>
        </div>
      </header>

      {/* leadership */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="kicker mb-10">Leadership</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {leadership.map((person, i) => (
            <Reveal key={person.role} delay={i * 0.08}>
              <article className="group border border-line bg-raised">
                {/* portrait plate — swap for a real photo, keep the frame */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    style={{
                      background:
                        "linear-gradient(160deg, var(--plate-a) 0%, var(--plate-b) 60%, var(--plate-a) 100%)",
                    }}
                  />
                  <div className="hatch absolute inset-0 opacity-50" aria-hidden />
                  <span
                    aria-hidden
                    className="display absolute inset-0 flex items-center justify-center text-[7rem] text-transparent"
                    style={{ WebkitTextStroke: "1.5px var(--line-strong)" }}
                  >
                    {person.initials}
                  </span>
                  <p className="absolute inset-x-0 bottom-0 p-4 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                    ▣ {person.note}
                  </p>
                </div>
                <div className="border-t border-line p-6">
                  <h3 className="display text-2xl text-ink">{person.name}</h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    {person.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-soft">{person.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* mission & vision */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div>
                <h2 className="kicker mb-6 flex items-center gap-3">
                  <span aria-hidden className="inline-block h-px w-10 bg-accent" />
                  The vision
                </h2>
                <p className="display text-[clamp(1.7rem,3.4vw,2.8rem)] leading-[1.08] text-ink">
                  {missionVision.vision}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <h2 className="kicker mb-6 flex items-center gap-3">
                  <span aria-hidden className="inline-block h-px w-10 bg-accent" />
                  The mission
                </h2>
                <ol className="space-y-6">
                  {missionVision.mission.map((m, i) => (
                    <li key={i} className="flex gap-5 border-b border-line pb-6 last:border-b-0">
                      <span className="display mt-0.5 text-2xl text-faint">0{i + 1}</span>
                      <p className="text-base leading-relaxed text-soft">{m}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* crews */}
      <section className="border-t border-line bg-sunken/40">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading
            index="02"
            kicker="The crews"
            title="180+ people, four trades"
            lede="No gig workforce, no event-day temp army. The people who erect your hangar are on our rolls, in our training programme, and back next season. [PLACEHOLDER: confirm headcount]"
          />
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col justify-between gap-8 bg-bg p-7 transition-colors duration-300 hover:bg-raised">
                  <div>
                    <span className="display text-2xl text-faint">0{i + 1}</span>
                    <h3 className="display mt-3 text-2xl text-ink">{d.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-soft">{d.detail}</p>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    {d.strength}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* careers pointer */}
      <section className="border-t border-line">
        <Link
          href="/careers"
          className="group mx-auto flex max-w-7xl flex-col gap-2 px-5 py-16 md:px-8 md:py-20"
        >
          <span className="kicker">Join them</span>
          <span className="display text-[clamp(2.2rem,6vw,4.5rem)] text-soft transition-colors duration-300 group-hover:text-accent">
            See open positions <span aria-hidden>→</span>
          </span>
        </Link>
      </section>
    </div>
  );
}
