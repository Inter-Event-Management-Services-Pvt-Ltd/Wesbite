import Image from "next/image";
import Link from "next/link";
import { galleryEvents } from "@/lib/gallery";

/**
 * Homepage film strip — one frame per photographed event, drifting like the
 * client marquee, each linking to that event's plates in the full gallery.
 */
export function SiteRecordBand() {
  const frames = galleryEvents.map((e) => ({
    slug: e.slug,
    name: e.name,
    img: e.images[0],
    count: e.images.length,
  }));

  return (
    <section aria-label="Photographs from recent builds" className="border-t border-line bg-sunken/40 py-16 md:py-20">
      <div className="mx-auto mb-10 flex max-w-7xl flex-wrap items-end justify-between gap-4 px-5 md:px-8">
        <div>
          <p className="kicker mb-3">The site record</p>
          <p className="display text-[clamp(1.8rem,4vw,3rem)] text-ink">
            Fourteen recent builds, on camera.
          </p>
        </div>
        <Link
          href="/portfolio#gallery"
          className="link-draw font-mono text-[11px] uppercase tracking-[0.18em] text-soft hover:text-ink"
        >
          Open the full gallery →
        </Link>
      </div>

      <div className="marquee">
        <div className="marquee-track flex gap-5 pr-5">
          {[...frames, ...frames].map((f, i) => (
            <Link
              key={`${f.slug}-${i}`}
              href={`/portfolio#gallery-${f.slug}`}
              className="group w-64 shrink-0 border border-line bg-raised transition-colors hover:border-accent md:w-80"
              tabIndex={i >= frames.length ? -1 : 0}
              aria-hidden={i >= frames.length}
            >
              <span className="relative block aspect-[3/2] overflow-hidden">
                <Image
                  src={f.img.src}
                  alt={f.name}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </span>
              <span className="flex items-baseline justify-between gap-3 border-t border-line px-3 py-2.5">
                <span className="truncate font-mono text-[10px] uppercase tracking-[0.14em] text-soft group-hover:text-ink">
                  {f.name}
                </span>
                <span className="font-mono text-[9px] text-faint">{f.count}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
