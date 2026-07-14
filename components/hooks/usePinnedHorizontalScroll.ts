"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

interface PinnedHorizontalScrollResult {
  containerRef: React.RefObject<HTMLDivElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
  translateX: MotionValue<number>;
  progressWidth: MotionValue<string>;
  containerHeight: number | null;
  isReady: boolean;
}

const LG_BREAKPOINT = 1024;

export function usePinnedHorizontalScroll(
  enabled: boolean,
  itemCount: number,
  debugLabel?: string
): PinnedHorizontalScrollResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lastScrollLogRef = useRef(0);

  const [scrollWidth, setScrollWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    if (!enabled) {
      // Defer so we don't sync-set state inside the effect body (react-hooks/set-state-in-effect).
      const id = requestAnimationFrame(() => setIsReady(true));
      return () => cancelAnimationFrame(id);
    }

    const measure = () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container || window.innerWidth < LG_BREAKPOINT) {
        return;
      }

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const trackWidth = track.getBoundingClientRect().width || track.scrollWidth;
      const distance = Math.max(0, trackWidth - viewportWidth + 160);

      setScrollWidth(distance);
      setContainerHeight(distance + viewportHeight);
      setIsReady(true);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [enabled, itemCount, debugLabel]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!debugLabel) return;
    const now = Date.now();
    if (now - lastScrollLogRef.current < 120) return;
    lastScrollLogRef.current = now;

    const track = trackRef.current;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const trackWidth = track?.scrollWidth ?? 0;
    const distance = Math.max(0, trackWidth - viewportWidth);
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return {
    containerRef,
    trackRef,
    scrollYProgress,
    translateX,
    progressWidth,
    containerHeight,
    isReady,
  };
}