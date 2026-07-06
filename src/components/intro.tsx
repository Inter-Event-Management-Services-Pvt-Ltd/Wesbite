import { Reveal } from "./reveal";
import { fullServiceScope } from "@/lib/data";

const eventKinds = [
  "Conferences & Congresses",
  "Exhibitions & Trade Fairs",
  "Product Launches",
  "Roadshows",
  "Convocations",
  "Award Nights",
  "Government Ceremonies",
];

/** Who-we-are: the event-management identity, stated before the steel. */
export function Intro() {
  return (
    <section aria-label="Introduction to IEMS" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="kicker mb-5 flex items-center gap-3">
            <span aria-hidden className="inline-block h-px w-10 bg-accent" />
            SEC. 01 — Who we are
          </p>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="display text-[clamp(2.2rem,4.6vw,3.9rem)] leading-[1.02] text-ink">
                IEMS is a full-service event management house —{" "}
                <span className="text-accent">the one-stop shop</span>
                {" "}India&rsquo;s institutions have used since 2002.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-soft md:text-lg">
                We plan, produce and run events — then build the venue they
                happen in. A medical congress for ten thousand delegates, a
                product reveal, a state ceremony: the same people look after
                the programme, the guests and the air-conditioning. When one
                company owns every layer, nothing falls between vendors.
              </p>
            </Reveal>

            {/* the kinds of events we manage */}
            <Reveal delay={0.15}>
              <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Types of events we manage">
                {eventKinds.map((kind) => (
                  <li
                    key={kind}
                    className="cursor-default border border-line px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-soft transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {kind}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border border-line bg-raised p-7 md:p-9">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  What full-service means here
                </h3>
                <ul className="mt-6">
                  {fullServiceScope.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-4 border-b border-line py-3.5 text-sm text-soft last:border-b-0"
                    >
                      <span className="text-accent" aria-hidden>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-soft">
                  …and the part nobody else can offer: the hangars, halls,
                  power and climate plant are ours too. You&rsquo;ll see the
                  same list circling the hangar drawing above — it&rsquo;s the
                  whole company on one page.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
