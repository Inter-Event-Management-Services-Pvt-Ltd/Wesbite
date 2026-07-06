"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { portfolioCategories, portfolioItems } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Category-filtered project grid. Cards re-flow with layout animation when
 * the filter changes; the active tab carries a shared sliding underline.
 */
export function PortfolioGrid() {
  const [active, setActive] = useState<(typeof portfolioCategories)[number]>("All");
  const reduce = useReducedMotion();

  const items =
    active === "All" ? portfolioItems : portfolioItems.filter((i) => i.category === active);

  return (
    <div>
      {/* filter tabs */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-12 flex flex-wrap gap-x-7 gap-y-3 border-b border-line pb-4"
      >
        {portfolioCategories.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(cat)}
              className={`relative pb-1 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                isActive ? "text-ink" : "text-faint hover:text-soft"
              }`}
            >
              {cat}
              <span className="ml-2 text-[9px] text-faint">
                {cat === "All"
                  ? portfolioItems.length
                  : portfolioItems.filter((i) => i.category === cat).length}
              </span>
              {isActive && (
                <motion.span
                  layoutId="portfolio-tab"
                  className="absolute inset-x-0 -bottom-[17px] h-[2px] bg-accent"
                  transition={{ duration: 0.4, ease: EASE }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* animated grid */}
      <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item) => {
            const inner = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{
                      background:
                        "linear-gradient(152deg, var(--plate-a) 0%, var(--plate-b) 58%, var(--plate-a) 100%)",
                    }}
                  />
                  <div className="hatch absolute inset-0 opacity-60" aria-hidden />
                  <span className="absolute left-3 top-3 border border-line-strong bg-bg/70 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-soft backdrop-blur-sm">
                    {item.category}
                  </span>
                  {item.slug && (
                    <span className="absolute right-3 top-3 bg-accent px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-on-accent">
                      Case study
                    </span>
                  )}
                  <p className="absolute inset-x-0 bottom-0 p-3 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">
                    ▣ {item.note}
                  </p>
                </div>
                <div className="border-t border-line px-4 py-4">
                  <h3 className="display text-xl text-ink transition-colors duration-300 group-hover:text-accent md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
                    <span>{item.venue}</span>
                    <span>{item.year}</span>
                    <span className="text-soft">{item.scale}</span>
                  </p>
                </div>
              </>
            );

            return (
              <motion.li
                layout={!reduce}
                key={item.title}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                {item.slug ? (
                  <Link
                    href={`/projects/${item.slug}`}
                    className="group block border border-line bg-raised transition-colors duration-300 hover:border-line-strong"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="group border border-line bg-raised">{inner}</div>
                )}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
