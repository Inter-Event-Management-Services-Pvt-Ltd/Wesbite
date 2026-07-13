"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Opening band: site footage looping behind one plain statement.
 * Drop the loop at public/media/site-loop.mp4 — until then the themed
 * fallback backdrop shows. [PLACEHOLDER video asset]
 */
export function VideoIntro() {
  const reduce = useReducedMotion();

  return (
    <section aria-label="IEMS on site" className="relative flex h-[62svh] min-h-[420px] items-end overflow-hidden border-b border-line">
      {/* video bed with themed fallback behind it */}
      <div className="absolute inset-0 bg-sunken" aria-hidden>
        <video
          className="h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/portfolio/aios-midterm/008.webp"
        >
          <source src="/media/site-loop.mp4" type="video/mp4" />
        </video>
        {/* scrim + blueprint grid keep the footage on-theme and the text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
        <div
          className="blueprint absolute inset-0 opacity-40"
          style={{ maskImage: "linear-gradient(to top, black, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-20">
        <motion.p
          className="kicker mb-5"
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          On site, somewhere in North India
        </motion.p>
        <motion.h2
          className="display max-w-4xl text-[clamp(1.9rem,4.4vw,3.8rem)] leading-[1.04] text-ink"
          initial={reduce ? undefined : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          The rooms India&rsquo;s biggest moments happen in?
          <span className="text-accent"> Someone has to build them.</span>
        </motion.h2>
      </div>
    </section>
  );
}
