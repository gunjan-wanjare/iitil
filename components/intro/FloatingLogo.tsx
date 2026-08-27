"use client";

import { useLayoutEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { introConfig } from "./introConfig";
import { measureById } from "./utils";
import type { Rect } from "./types";

interface FloatingLogoProps {
  /** Exact start rect (measured loader logo). */
  startRect: Rect;
  /** Fired once the logo has landed on its target (hero, or navbar as fallback). */
  onArriveHero: () => void;
}

/**
 * One-shot flight: loader → hero (landing on the navbar only if the hero
 * anchor isn't available). Positions are ALWAYS measured DOM rects, never
 * estimated. This only plays once, before the user has scrolled — the
 * later hero ⇄ navbar handoff on scroll is a plain opacity crossfade
 * between the Hero's own logo and the Navbar's own logo (see Hero.tsx /
 * Navbar.tsx), not a second flight, so it can't look duplicated or blurred.
 */
export default function FloatingLogo({
  startRect,
  onArriveHero,
}: FloatingLogoProps) {
  const left = useMotionValue(startRect.left);
  const top = useMotionValue(startRect.top);
  const width = useMotionValue(startRect.width);
  const height = useMotionValue(startRect.height);

  useLayoutEffect(() => {
    const hero = measureById(introConfig.heroAnchorId);
    const nav = measureById(introConfig.navbarAnchorId);

    const target =
      hero && hero.width > 0 && hero.height > 0
        ? hero
        : nav && nav.width > 0 && nav.height > 0
          ? nav
          : null;

    if (!target) {
      queueMicrotask(() => onArriveHero());
      return;
    }

    const controls = [
      animate(left, target.left, { duration: 0.85, ease: [0.22, 1, 0.36, 1] }),
      animate(top, target.top, { duration: 0.85, ease: [0.22, 1, 0.36, 1] }),
      animate(width, target.width, { duration: 0.85, ease: [0.22, 1, 0.36, 1] }),
      animate(height, target.height, {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }),
    ];

    let cancelled = false;
    Promise.all(controls.map((c) => c.finished)).then(() => {
      if (cancelled) return;
      onArriveHero();
    });

    return () => {
      cancelled = true;
      controls.forEach((c) => c.stop());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed z-[9990] pointer-events-none"
      style={{
        left,
        top,
        width,
        height,
        willChange: "left, top, width, height",
      }}
      aria-hidden
    >
      <Image
        src={introConfig.brandLogo}
        alt=""
        fill
        sizes={`${introConfig.heroLogoSize}px`}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}
