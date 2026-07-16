"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Loader from "./Loader";
import FloatingLogo from "./FloatingLogo";
import { IntroContext } from "./useIntro";
import { introConfig } from "./introConfig";
import { isMobileViewport, measureById } from "./utils";
import type { IntroPhase, Rect, IntroContextValue } from "./types";
import { useLenis } from "@/components/providers/LenisProvider";

/**
 * Intro state machine (bidirectional after first land):
 *
 * boot → loading → flying → hero ⇄ docking ⇄ done
 *
 * Visibility (only ONE YAKA at a time):
 * - Hero logo:     phase === "hero"
 * - FloatingLogo:  phase === "flying" | "docking"
 * - Navbar icon:   phase === "done"
 */
export default function IntroProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lenis, stop, start } = useLenis();
  const [phase, setPhase] = useState<IntroPhase>("boot");
  const [loaderRect, setLoaderRect] = useState<Rect | null>(null);
  const [heroRect, setHeroRect] = useState<Rect | null>(null);
  const [dockProgress, setDockProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!introConfig.enabled || isMobileViewport()) {
      setPhase("done");
      setDockProgress(1);
      return;
    }
    setPhase("loading");
    setShowLoader(true);
  }, []);

  useEffect(() => {
    if (phase === "loading" || phase === "flying" || phase === "boot") {
      document.documentElement.style.overflow = "hidden";
      stop?.();
      return () => {
        document.documentElement.style.overflow = "";
      };
    }
    document.documentElement.style.overflow = "";
    start?.();
  }, [phase, stop, start]);

  // Mirror CSS dock progress for navbar shift.
  useEffect(() => {
    if (phase === "hero") {
      setDockProgress(0);
      return;
    }
    if (phase === "done") {
      setDockProgress(1);
      return;
    }
    if (phase !== "docking") return;

    let raf = 0;
    const tick = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--intro-dock-progress")
        .trim();
      const n = Number(raw);
      if (!Number.isNaN(n)) setDockProgress(n);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  // hero → docking when scroll past scrollStart
  useEffect(() => {
    if (phase !== "hero") return;

    const maybeDock = (scrollY: number) => {
      // Strict > so returnToHero at scrollStart does not immediately re-dock.
      if (scrollY > introConfig.scrollStart) {
        const measured = measureById(introConfig.heroAnchorId);
        if (measured) setHeroRect(measured);
        setPhase("docking");
      }
    };

    if (lenis) {
      const handler = ({ scroll }: { scroll: number }) => maybeDock(scroll);
      lenis.on("scroll", handler);
      maybeDock(lenis.scroll);
      return () => {
        lenis.off("scroll", handler);
      };
    }

    const onScroll = () => maybeDock(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    maybeDock(window.scrollY);
    return () => window.removeEventListener("scroll", onScroll);
  }, [phase, lenis]);

  // done → docking when scrolling back up (reverse)
  useEffect(() => {
    if (phase !== "done") return;

    const maybeUndock = (scrollY: number) => {
      if (scrollY < introConfig.scrollEnd) {
        const measured = measureById(introConfig.heroAnchorId);
        if (measured) setHeroRect(measured);
        setPhase("docking");
      }
    };

    if (lenis) {
      const handler = ({ scroll }: { scroll: number }) => maybeUndock(scroll);
      lenis.on("scroll", handler);
      maybeUndock(lenis.scroll);
      return () => {
        lenis.off("scroll", handler);
      };
    }

    const onScroll = () => maybeUndock(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    maybeUndock(window.scrollY);
    return () => window.removeEventListener("scroll", onScroll);
  }, [phase, lenis]);

  const completeLoader = useCallback((rect: Rect) => {
    console.log("[intro] Loader complete — Loader Rect", rect);
    requestAnimationFrame(() => {
      const hero = measureById(introConfig.heroAnchorId);
      const nav = measureById(introConfig.navbarAnchorId);
      console.log("[intro] Pre-flight Hero Rect", hero);
      console.log("[intro] Pre-flight Navbar Rect", nav);
      setLoaderRect(rect);
      setPhase("flying");
    });
  }, []);

  const handleLoaderExited = useCallback(() => {
    setShowLoader(false);
  }, []);

  const arriveAtHero = useCallback(() => {
    const measured = measureById(introConfig.heroAnchorId);
    if (measured) setHeroRect(measured);
    setDockProgress(0);
    setPhase("hero");
  }, []);

  const completeDock = useCallback(() => {
    setDockProgress(1);
    setPhase("done");
    document.documentElement.style.setProperty("--intro-dock-progress", "1");
  }, []);

  const returnToHero = useCallback(() => {
    setDockProgress(0);
    setPhase("hero");
    document.documentElement.style.setProperty("--intro-dock-progress", "0");
  }, []);

  const value = useMemo<IntroContextValue>(
    () => ({
      phase,
      isComplete: phase === "done" || phase === "hero" || phase === "docking",
      isActive:
        phase === "loading" ||
        phase === "flying" ||
        phase === "hero" ||
        phase === "docking" ||
        phase === "boot",
      loaderRect,
      dockProgress,
      completeLoader,
      arriveAtHero,
      completeDock,
      returnToHero,
    }),
    [
      phase,
      loaderRect,
      dockProgress,
      completeLoader,
      arriveAtHero,
      completeDock,
      returnToHero,
    ]
  );

  const showFloating =
    (phase === "flying" && loaderRect) ||
    (phase === "docking" && (heroRect || loaderRect));

  const floatingStart =
    phase === "docking" ? (heroRect ?? loaderRect) : loaderRect;
  const floatingMode =
    phase === "docking" ? "dockToNavbar" : "flyToHero";

  return (
    <IntroContext.Provider value={value}>
      {phase === "boot" && (
        <div
          className="fixed inset-0 z-[10000]"
          style={{ background: "rgba(2,8,23,1)" }}
          aria-hidden
        />
      )}

      {showLoader && (
        <Loader onComplete={completeLoader} onExited={handleLoaderExited} />
      )}

      {showFloating && floatingStart && (
        <FloatingLogo
          startRect={floatingStart}
          mode={floatingMode}
          onArriveHero={arriveAtHero}
          onDockComplete={completeDock}
          onReturnToHero={returnToHero}
        />
      )}

      {children}
    </IntroContext.Provider>
  );
}
