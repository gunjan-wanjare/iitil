"use client";

import { useEffect, useRef, useState, memo } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export interface AnimatedMetricProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  accent?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

function AnimatedMetric({
  value,
  suffix = "%",
  prefix = "",
  label,
  accent = "#2563eb",
  className = "",
  size = "md",
}: AnimatedMetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value, motionValue]);

  const valueSize =
    size === "lg"
      ? "text-4xl md:text-5xl"
      : size === "sm"
        ? "text-2xl"
        : "text-3xl md:text-4xl";

  return (
    <div ref={ref} className={className}>
      <p
        className={`${valueSize} font-bold tabular-nums leading-none tracking-tight`}
        style={{ color: accent }}
      >
        {prefix}
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/50 leading-snug">{label}</p>
    </div>
  );
}

export default memo(AnimatedMetric);
