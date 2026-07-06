"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Years like 1986 read wrong with digit grouping. */
  grouped?: boolean;
  duration?: number;
};

/** Counts up from zero when scrolled into view. */
export function Counter({ value, prefix = "", suffix = "", grouped = true, duration = 1.8 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {grouped ? display.toLocaleString("en-IN") : display}
      {suffix}
    </span>
  );
}
