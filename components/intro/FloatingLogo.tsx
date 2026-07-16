"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";
import { introConfig } from "./introConfig";
import { measureById, scrollToProgress } from "./utils";
import type { Rect } from "./types";
import { useLenis } from "@/components/providers/LenisProvider";

interface FloatingLogoProps {
  /** Exact start rect (loader for fly-to-hero, hero/nav for dock). */
  startRect: Rect;
  /** flyToHero = loader→hero; dockToNavbar = scroll-linked hero↔navbar. */
  mode: "flyToHero" | "dockToNavbar";
  onArriveHero: () => void;
  onDockComplete: () => void;
  onReturnToHero: () => void;
}

/**
 * Flying logo — positions are ALWAYS measured DOM rects, never estimated.
 * Dock mode is bidirectional: scroll down docks to navbar, scroll up returns to hero.
 */
export default function FloatingLogo({
  startRect,
  mode,
  onArriveHero,
  onDockComplete,
  onReturnToHero,
}: FloatingLogoProps) {
  const { lenis } = useLenis();
  const atNavbarRef = useRef(false);
  const atHeroRef = useRef(false);
  /** Ensures completeDock / returnToHero fire at most once per FloatingLogo mount. */
  const handedOffRef = useRef(false);
  const heroRectRef = useRef<Rect | null>(null);
  const navRectRef = useRef<Rect | null>(null);

  const finishDock = () => {
    if (handedOffRef.current || atNavbarRef.current) return;
    handedOffRef.current = true;
    atNavbarRef.current = true;
    atHeroRef.current = false;
    onDockComplete();
  };

  const finishReturn = () => {
    if (handedOffRef.current || atHeroRef.current) return;
    handedOffRef.current = true;
    atHeroRef.current = true;
    atNavbarRef.current = false;
    onReturnToHero();
  };

  const left = useMotionValue(startRect.left);
  const top = useMotionValue(startRect.top);
  const width = useMotionValue(startRect.width);
  const height = useMotionValue(startRect.height);

  const rawProgress = useMotionValue(0);
  const progress = useSpring(rawProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.6,
  });

  const brandOpacity = useTransform(progress, [0, 0.55, 1], [1, 0.35, 0]);
  const iconOpacity = useTransform(progress, [0, 0.45, 1], [0, 0.65, 1]);
  const showIcon = mode === "dockToNavbar";

  // ── Mode: fly loader → hero (or navbar if no hero) ─────────────────
  useLayoutEffect(() => {
    if (mode !== "flyToHero") return;

    const hero = measureById(introConfig.heroAnchorId);
    const nav = measureById(introConfig.navbarAnchorId);

    console.log("[intro] Loader Rect (start)", startRect);
    console.log("[intro] Hero Rect", hero);
    console.log("[intro] Navbar Rect", nav);

    const target =
      hero && hero.width > 0 && hero.height > 0
        ? hero
        : nav && nav.width > 0 && nav.height > 0
          ? nav
          : null;

    if (!target) {
      console.warn("[intro] No valid hero/navbar rect — finishing");
      // Defer handoff out of layout to avoid sync parent setState loops.
      queueMicrotask(() => finishDock());
      return;
    }

    const landingOnHero = target === hero;
    heroRectRef.current = hero;
    navRectRef.current = nav;

    const controls = [
      animate(left, target.left, { duration: 0.85, ease: [0.22, 1, 0.36, 1] }),
      animate(top, target.top, { duration: 0.85, ease: [0.22, 1, 0.36, 1] }),
      animate(width, target.width, { duration: 0.85, ease: [0.22, 1, 0.36, 1] }),
      animate(height, target.height, {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }),
    ];

    Promise.all(controls.map((c) => c.finished)).then(() => {
      if (handedOffRef.current) return;
      if (landingOnHero) {
        handedOffRef.current = true;
        onArriveHero();
      } else {
        finishDock();
      }
    });

    return () => controls.forEach((c) => c.stop());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // ── Mode: scroll-linked dock (bidirectional) ─────────────────────────
  useLayoutEffect(() => {
    if (mode !== "dockToNavbar") return;

    const hero = measureById(introConfig.heroAnchorId) ?? startRect;
    const nav = measureById(introConfig.navbarAnchorId);

    console.log("[intro] Dock (Hero Rect)", hero);
    console.log("[intro] Dock (Navbar Rect)", nav);

    // Do NOT call completeDock here — setState during layout remounts this
    // component when the parent flips done⇄docking and loops forever.
    if (!nav || nav.width === 0 || nav.height === 0) {
      console.warn("[intro] Navbar anchor missing or zero-sized — abort dock");
      navRectRef.current = null;
      return;
    }

    heroRectRef.current = hero;
    navRectRef.current = nav;
    // Fresh dock session — allow a single endpoint handoff from scroll.
    handedOffRef.current = false;
    atNavbarRef.current = false;
    atHeroRef.current = false;

    // Snap to current scroll-derived position immediately (supports reverse remount).
    const scrollY =
      typeof window !== "undefined"
        ? (lenis?.scroll ?? window.scrollY)
        : 0;
    const p = scrollToProgress(scrollY);
    rawProgress.set(p);
    left.set(hero.left + (nav.left - hero.left) * p);
    top.set(hero.top + (nav.top - hero.top) * p);
    width.set(hero.width + (nav.width - hero.width) * p);
    height.set(hero.height + (nav.height - hero.height) * p);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  // One-shot: invalid dock target → finish once (never from useLayoutEffect).
  useEffect(() => {
    if (mode !== "dockToNavbar") return;
    const nav = measureById(introConfig.navbarAnchorId);
    if (!nav || nav.width === 0 || nav.height === 0) {
      finishDock();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  useEffect(() => {
    if (mode !== "dockToNavbar") return;

    const applyScroll = (scrollY: number) => {
      if (handedOffRef.current) return;
      // No valid target measured — handoff owned by the one-shot effect above.
      if (!navRectRef.current) return;

      const p = scrollToProgress(scrollY);
      rawProgress.set(p);

      const hero = heroRectRef.current;
      const nav = navRectRef.current;
      if (!hero || !nav) return;

      left.set(hero.left + (nav.left - hero.left) * p);
      top.set(hero.top + (nav.top - hero.top) * p);
      width.set(hero.width + (nav.width - hero.width) * p);
      height.set(hero.height + (nav.height - hero.height) * p);

      // Hysteresis on scrollY — hand off exactly once at each endpoint.
      if (scrollY >= introConfig.scrollEnd) {
        finishDock();
      } else if (scrollY <= introConfig.scrollStart) {
        finishReturn();
      }
    };

    if (lenis) {
      const handler = ({ scroll }: { scroll: number }) => applyScroll(scroll);
      lenis.on("scroll", handler);
      applyScroll(lenis.scroll);
      return () => {
        lenis.off("scroll", handler);
      };
    }

    const onScroll = () => applyScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    applyScroll(window.scrollY);
    return () => window.removeEventListener("scroll", onScroll);
  }, [
    mode,
    lenis,
    rawProgress,
    left,
    top,
    width,
    height,
    onDockComplete,
    onReturnToHero,
  ]);

  useEffect(() => {
    const onResize = () => {
      const hero = measureById(introConfig.heroAnchorId);
      const nav = measureById(introConfig.navbarAnchorId);
      if (hero) heroRectRef.current = hero;
      if (nav) navRectRef.current = nav;
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const unsub = progress.on("change", (v) => {
      document.documentElement.style.setProperty(
        "--intro-dock-progress",
        String(v)
      );
    });
    return () => {
      unsub();
      document.documentElement.style.removeProperty("--intro-dock-progress");
    };
  }, [progress]);

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
      <motion.div
        className="absolute inset-0"
        style={{ opacity: showIcon ? brandOpacity : 1 }}
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

      {showIcon && (
        <motion.div
          className="absolute inset-0"
          style={{ opacity: iconOpacity }}
        >
          <Image
            src={introConfig.iconLogo}
            alt=""
            fill
            sizes={`${introConfig.navbarLogoSize}px`}
            className="object-contain"
            priority
          />
        </motion.div>
      )}
    </motion.div>
  );
}
