"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Loader from "./Loader";
import FloatingLogo from "./FloatingLogo";
import { IntroContext } from "./useIntro";
import { introConfig } from "./introConfig";
import { isMobileViewport } from "./utils";
import type { IntroPhase, Rect, IntroContextValue } from "./types";
import { useLenis } from "@/components/providers/LenisProvider";

/**
 * Intro state machine (bidirectional after first land):
 *
 * boot → loading → flying → hero ⇄ done
 *
 * Visibility (only ONE YAKA at a time):
 * - Hero logo:     phase === "hero"
 * - FloatingLogo:  phase === "flying" (one-shot loader → hero landing only)
 * - Navbar icon:   phase === "done"
 *
 * The hero ⇄ done handoff on scroll is a plain crossfade (Hero's own logo
 * fades out, Navbar's own logo fades in) — there is no flying element for
 * it, matching the reference site's approach.
 */
export default function IntroProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lenis, stop, start } = useLenis();
  const [phase, setPhase] = useState<IntroPhase>("boot");
  const [loaderRect, setLoaderRect] = useState<Rect | null>(null);
  const [showLoader, setShowLoader] = useState(false);
  const phaseRef = useRef<IntroPhase>(phase);
  phaseRef.current = phase;

  useEffect(() => {
    if (!introConfig.enabled || isMobileViewport()) {
      phaseRef.current = "done";
      setPhase("done");
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

  // hero ⇄ done — plain scroll-threshold crossfade, bidirectional.
  useEffect(() => {
    if (phase !== "hero" && phase !== "done") return;

    const handleScroll = (scrollY: number) => {
      if (phaseRef.current === "hero" && scrollY > introConfig.scrollStart) {
        phaseRef.current = "done";
        setPhase("done");
      } else if (
        phaseRef.current === "done" &&
        scrollY <= introConfig.scrollStart
      ) {
        phaseRef.current = "hero";
        setPhase("hero");
      }
    };

    if (lenis) {
      const handler = ({ scroll }: { scroll: number }) => handleScroll(scroll);
      lenis.on("scroll", handler);
      handleScroll(lenis.scroll);
      return () => {
        lenis.off("scroll", handler);
      };
    }

    const onScroll = () => handleScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(window.scrollY);
    return () => window.removeEventListener("scroll", onScroll);
  }, [phase, lenis]);

  const completeLoader = useCallback((rect: Rect) => {
    requestAnimationFrame(() => {
      setLoaderRect(rect);
      setPhase("flying");
    });
  }, []);

  const handleLoaderExited = useCallback(() => {
    setShowLoader(false);
  }, []);

  const arriveAtHero = useCallback(() => {
    if (phaseRef.current === "hero" || phaseRef.current === "done") return;
    phaseRef.current = "hero";
    setPhase("hero");
  }, []);

  const value = useMemo<IntroContextValue>(
    () => ({
      phase,
      isComplete: phase === "done" || phase === "hero",
      isActive: phase === "loading" || phase === "flying" || phase === "boot",
      loaderRect,
      completeLoader,
      arriveAtHero,
    }),
    [phase, loaderRect, completeLoader, arriveAtHero]
  );

  const showFloating = phase === "flying" && loaderRect;

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

      {showFloating && loaderRect && (
        <FloatingLogo startRect={loaderRect} onArriveHero={arriveAtHero} />
      )}

      {children}
    </IntroContext.Provider>
  );
}
