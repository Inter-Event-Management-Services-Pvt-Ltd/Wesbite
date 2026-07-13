import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { SiteGallery } from "@/components/site-gallery";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Portfolio — The Record",
  description:
    "Two decades of congresses, convocations, exhibitions and structures built by IEMS across North India.",
};

export default function PortfolioPage() {
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
              The record — since 2002
            </p>
            <h1 className="display text-[clamp(3rem,9vw,7.5rem)]">Portfolio</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">
              Congresses, convocations, exhibitions and standing structures.
              Three carry full case files; the rest are entries from a ledger
              that runs two decades deep.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <PortfolioGrid />
        </Reveal>
      </section>

      {/* the photographic record — every plate from the site camera crews */}
      <section className="border-t border-line bg-sunken/40">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <p className="kicker mb-5 flex items-center gap-3">
              <span aria-hidden className="inline-block h-px w-10 bg-accent" />
              The site record
            </p>
            <h2 className="display mb-4 text-[clamp(2rem,5vw,3.8rem)] text-ink">
              Straight from the site cameras.
            </h2>
            <p className="mb-12 max-w-xl text-sm leading-relaxed text-soft md:text-base">
              Unretouched plates from recent builds — gates, halls, registration
              concourses and exhibition floors, photographed as they were handed over.
            </p>
          </Reveal>
          <SiteGallery />
        </div>
      </section>

      <section className="border-t border-line bg-sunken/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
          <div>
            <p className="kicker mb-3">Yours next</p>
            <p className="display text-[clamp(2rem,5vw,3.8rem)] text-ink">
              Add your event to this ledger.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-accent px-7 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-accent-bright"
          >
            Start an enquiry <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
