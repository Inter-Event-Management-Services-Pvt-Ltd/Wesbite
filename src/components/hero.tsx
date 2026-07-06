"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Counter } from "./counter";
import { Magnetic } from "./magnetic";
import { heroSpecs, dignitaryLine } from "@/lib/data";

/* ---------- truss geometry: quadratic arch, evaluated per t ---------- */

type Pt = { x: number; y: number };

function qBezier(p0: Pt, p1: Pt, p2: Pt, t: number): Pt {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  };
}

const OUTER: [Pt, Pt, Pt] = [{ x: 40, y: 478 }, { x: 620, y: 20 }, { x: 1200, y: 478 }];
const INNER: [Pt, Pt, Pt] = [{ x: 96, y: 478 }, { x: 620, y: 92 }, { x: 1144, y: 478 }];

const WEB_STEPS = Array.from({ length: 13 }, (_, i) => 0.085 + i * 0.069);

/** Animated engineering elevation of a clear-span hangar. */
function TrussDrawing() {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    initial: reduce ? undefined : { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { pathLength: { duration: 1.6, delay, ease: [0.65, 0, 0.35, 1] as const }, opacity: { duration: 0.01, delay } },
  });

  return (
    <svg
      viewBox="0 0 1240 560"
      fill="none"
      aria-hidden
      className="h-full w-full"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* chords */}
      <motion.path
        d={`M ${OUTER[0].x} ${OUTER[0].y} Q ${OUTER[1].x} ${OUTER[1].y} ${OUTER[2].x} ${OUTER[2].y}`}
        stroke="var(--accent)"
        strokeWidth="2"
        {...draw(0.2)}
      />
      <motion.path
        d={`M ${INNER[0].x} ${INNER[0].y} Q ${INNER[1].x} ${INNER[1].y} ${INNER[2].x} ${INNER[2].y}`}
        stroke="var(--line-strong)"
        strokeWidth="1.4"
        {...draw(0.35)}
      />

      {/* webbing: verticals + diagonals between chords */}
      {WEB_STEPS.map((t, i) => {
        const o = qBezier(...OUTER, t);
        const n = qBezier(...INNER, t);
        const o2 = i < WEB_STEPS.length - 1 ? qBezier(...OUTER, WEB_STEPS[i + 1]) : null;
        return (
          <g key={t}>
            <motion.line
              x1={o.x} y1={o.y} x2={n.x} y2={n.y}
              stroke="var(--line-strong)" strokeWidth="1"
              {...draw(0.55 + i * 0.045)}
            />
            {o2 && (
              <motion.line
                x1={n.x} y1={n.y} x2={o2.x} y2={o2.y}
                stroke="var(--line)" strokeWidth="1"
                {...draw(0.6 + i * 0.045)}
              />
            )}
          </g>
        );
      })}

      {/* ground line */}
      <motion.line x1="16" y1="478" x2="1224" y2="478" stroke="var(--line-strong)" strokeWidth="1.4" {...draw(0.1)} />

      {/* span dimension line with ticks */}
      <motion.line x1="40" y1="516" x2="1200" y2="516" stroke="var(--accent)" strokeWidth="1" {...draw(1.5)} />
      <motion.line x1="40" y1="508" x2="40" y2="524" stroke="var(--accent)" strokeWidth="1" {...draw(1.5)} />
      <motion.line x1="1200" y1="508" x2="1200" y2="524" stroke="var(--accent)" strokeWidth="1" {...draw(1.5)} />
      <motion.text
        x="620" y="544"
        textAnchor="middle"
        fill="var(--ink-faint)"
        style={{ font: "500 13px var(--font-mono)", letterSpacing: "0.22em" }}
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        CLEAR SPAN 40 M — ALUMINIUM HANGAR, TYPE A
      </motion.text>
    </svg>
  );
}

/* ------------------------------- hero ------------------------------- */

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const drawingY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const drawingOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.08]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const enter = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 34 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section ref={ref} aria-label="Introduction" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* backdrop: blueprint grid fading downward + truss elevation */}
      <div
        className="blueprint absolute inset-0"
        style={{ maskImage: "linear-gradient(to bottom, black, transparent 78%)" }}
        aria-hidden
      />
      <motion.div
        style={reduce ? undefined : { y: drawingY, opacity: drawingOpacity }}
        className="absolute -right-[8%] bottom-32 h-[38svh] w-[88%] max-w-5xl md:bottom-36"
        aria-hidden
      >
        <TrussDrawing />
      </motion.div>

      {/* copy */}
      <motion.div
        style={reduce ? undefined : { y: copyY }}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-14 md:px-8 md:pb-16"
      >
        <motion.p className="kicker mb-6" {...enter(0.1)}>
          Full-service event management · New Delhi — Jaipur — Chandigarh
        </motion.p>

        <h1 className="display text-[clamp(3.1rem,8.6vw,7.6rem)]">
          <motion.span className="block" {...enter(0.22)}>
            Temporary cities.
          </motion.span>
          <motion.span className="block text-accent" {...enter(0.34)}>
            Permanent standards.
          </motion.span>
        </h1>

        <motion.p className="mt-8 max-w-xl text-base leading-relaxed text-soft md:text-lg" {...enter(0.5)}>
          For four decades IEMS has planned, produced and built India&rsquo;s
          congresses, exhibitions, launches and ceremonies — from concept and
          guest list to the hangars and halls they happen in. {dignitaryLine}
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap items-center gap-5" {...enter(0.62)}>
          <Magnetic>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 bg-accent px-7 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-on-accent transition-colors hover:bg-accent-bright"
            >
              Start an enquiry
              <span aria-hidden>→</span>
            </Link>
          </Magnetic>
          <Link
            href="/#projects"
            className="link-draw font-mono text-[11px] uppercase tracking-[0.18em] text-soft hover:text-ink"
          >
            See the work
          </Link>
        </motion.div>
      </motion.div>

      {/* spec strip pinned to hero base */}
      <motion.dl
        className="relative border-t border-line bg-bg/70 backdrop-blur-sm"
        {...enter(0.8)}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line px-5 md:grid-cols-4 md:px-8">
          {heroSpecs.map((s) => (
            <div key={s.label} className="flex flex-col px-4 py-6 first:pl-0 md:py-8">
              <dt className="order-2 mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                {s.label}
              </dt>
              <dd className="display text-3xl text-ink md:text-4xl">
                <Counter
                  value={s.value}
                  prefix={s.prefix ?? ""}
                  suffix={s.suffix ?? ""}
                  grouped={s.value !== 1986}
                />
              </dd>
            </div>
          ))}
        </div>
      </motion.dl>
    </section>
  );
}
