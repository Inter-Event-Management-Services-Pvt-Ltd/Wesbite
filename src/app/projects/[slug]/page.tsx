import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { Plate } from "@/components/plate";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.headline,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  // stat count varies — thin-record events carry fewer real figures
  const statCols =
    { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3" }[project.stats.length] ??
    "md:grid-cols-4";

  const meta = [
    { label: "Client", value: project.client },
    { label: "Venue", value: project.venue },
    { label: "Edition", value: project.year },
    { label: "Footprint", value: project.footprint },
  ];

  return (
    <article>
      {/* dossier header */}
      <header className="relative overflow-hidden border-b border-line">
        <div
          className="blueprint absolute inset-0"
          style={{ maskImage: "linear-gradient(to bottom, black, transparent 85%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-20">
          <Reveal>
            <Link
              href="/portfolio"
              className="link-draw font-mono text-[11px] uppercase tracking-[0.18em] text-soft"
            >
              ← Full portfolio
            </Link>
            <p className="kicker mt-10 mb-5">
              Case file 0{index + 1} — {project.category}
            </p>
            <h1 className="display text-[clamp(3rem,9vw,7.5rem)]">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft md:text-xl">
              {project.headline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label} className="flex flex-col bg-bg px-5 py-4">
                  <dt className="order-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                    {m.label}
                  </dt>
                  <dd className="text-sm font-medium text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      {/* delivery stats */}
      <section aria-label="Key figures" className="border-b border-line bg-sunken/40">
        <div className={`mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line px-5 md:px-8 ${statCols}`}>
          {project.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="flex flex-col px-4 py-8 first:pl-0 md:py-10">
                <span className="display text-3xl text-accent md:text-4xl">{s.value}</span>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* narrative: brief / build / delivery */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="kicker mb-5">The brief</h2>
            <p className="text-base leading-relaxed text-ink md:text-lg">{project.brief}</p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <h2 className="kicker mb-5">The build</h2>
            <ol className="space-y-6">
              {project.build.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="display mt-0.5 text-xl text-faint">0{i + 1}</span>
                  <p className="text-sm leading-relaxed text-soft">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-3">
            <h2 className="kicker mb-5">The delivery</h2>
            <p className="border-l-2 border-accent pl-5 text-sm leading-relaxed text-soft">
              {project.delivered}
            </p>
          </Reveal>
        </div>
      </section>

      {/* plate gallery */}
      <section aria-label="Project gallery" className="border-t border-line bg-sunken/40">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <h2 className="kicker mb-10">Site record</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.plates.map((plate, i) => (
              <Reveal key={plate.caption} delay={(i % 2) * 0.08}>
                <Plate
                  index={`0${i + 1}`}
                  caption={plate.caption}
                  note={plate.note}
                  src={plate.src}
                  ratio={i % 3 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* next project */}
      <section className="border-t border-line">
        <Link
          href={`/projects/${next.slug}`}
          className="group mx-auto flex max-w-7xl flex-col gap-2 px-5 py-16 md:px-8 md:py-20"
        >
          <span className="kicker">Next case file</span>
          <span className="display text-[clamp(2.5rem,7vw,5.5rem)] text-soft transition-colors duration-300 group-hover:text-accent">
            {next.title} <span aria-hidden>→</span>
          </span>
        </Link>
      </section>
    </article>
  );
}
