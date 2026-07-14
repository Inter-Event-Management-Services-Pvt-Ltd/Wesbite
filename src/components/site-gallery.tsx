"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { galleryEvents } from "@/lib/gallery";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The full site-photo record: every event the camera crew covered, grouped
 * by event, filterable, with a keyboard-navigable lightbox. Portfolio grid
 * cards deep-link here via #gallery-<slug>.
 */
export function SiteGallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>("all");
  const [open, setOpen] = useState<number | null>(null); // index into flat list

  const shown = active === "all" ? galleryEvents : galleryEvents.filter((e) => e.slug === active);
  const flat = shown.flatMap((e) => e.images.map((img) => ({ ...img, event: e.name })));

  // deep links from the portfolio grid: #gallery-<slug>
  useEffect(() => {
    function fromHash() {
      const m = window.location.hash.match(/^#gallery-(.+)$/);
      if (m && galleryEvents.some((e) => e.slug === m[1])) {
        setActive(m[1]);
        document.getElementById("gallery")?.scrollIntoView();
      }
    }
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  // lightbox keyboard + scroll lock
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + flat.length) % flat.length)),
    [flat.length],
  );
  useEffect(() => {
    if (open === null) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open !== null, step]); // eslint-disable-line react-hooks/exhaustive-deps

  let offset = 0; // running index into flat list as we render groups

  return (
    <div id="gallery" className="scroll-mt-24">
      {/* event filter */}
      <div
        role="group"
        aria-label="Filter photographs by event"
        className="mb-12 flex flex-wrap gap-x-6 gap-y-3 border-b border-line pb-4"
      >
        {[{ slug: "all", name: "All events", count: galleryEvents.reduce((a, e) => a + e.images.length, 0) },
          ...galleryEvents.map((e) => ({ slug: e.slug, name: e.name, count: e.images.length }))].map((t) => {
          const isActive = t.slug === active;
          return (
            <button
              key={t.slug}
              type="button"
              aria-pressed={isActive}
              onClick={() => { setActive(t.slug); setOpen(null); }}
              className={`relative pb-1.5 text-left font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                isActive ? "text-ink" : "text-faint hover:text-soft"
              }`}
            >
              {t.name}
              <span className="ml-1.5 text-[9px] text-faint">{t.count}</span>
              {isActive && (
                <motion.span
                  layoutId="gallery-tab"
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-accent"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* grouped masonry */}
      <div className="space-y-16">
        {shown.map((event) => {
          const base = offset;
          offset += event.images.length;
          return (
            <section key={event.slug} id={`gallery-${event.slug}`} className="scroll-mt-24">
              <h3 className="mb-6 flex items-baseline gap-3">
                <span className="display text-2xl text-ink md:text-3xl">{event.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                  {event.images.length} plates
                </span>
              </h3>
              <div className="columns-2 gap-4 md:columns-3 xl:columns-4">
                {event.images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setOpen(base + i)}
                    className="group mb-4 block w-full break-inside-avoid border border-line bg-raised text-left transition-colors hover:border-accent focus-visible:border-accent"
                    aria-label={`${event.name} — ${img.zone}, open photograph ${i + 1} of ${event.images.length}`}
                  >
                    <span className="relative block overflow-hidden">
                      <Image
                        src={img.src}
                        alt={`${event.name} — ${img.zone}`}
                        width={img.w}
                        height={img.h}
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
                        className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                      <span className="absolute bottom-0 left-0 border-r border-t border-line-strong bg-bg/80 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.14em] text-soft backdrop-blur-sm">
                        {img.zone}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {open !== null && flat[open] && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${flat[open].event} — ${flat[open].zone}`}
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/92 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                {flat[open].event} · {flat[open].zone} · {open + 1} / {flat.length}
              </p>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="border border-white/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-white hover:text-white"
              >
                Close ✕
              </button>
            </div>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 pb-8">
              {/* eslint-disable-next-line @next/next/no-img-element -- full-frame view of the already-optimized webp */}
              <img
                src={flat[open].src}
                alt={`${flat[open].event} — ${flat[open].zone}`}
                className="max-h-full max-w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                type="button"
                aria-label="Previous photograph"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/25 bg-black/40 px-3 py-4 text-white/80 transition-colors hover:border-white hover:text-white"
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next photograph"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/25 bg-black/40 px-3 py-4 text-white/80 transition-colors hover:border-white hover:text-white"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
