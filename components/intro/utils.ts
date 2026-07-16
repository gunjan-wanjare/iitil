import type { Rect } from "./types";
import { introConfig } from "./introConfig";

/** Safe client-only mobile check. Never call during SSR. */
export function isMobileViewport(
  breakpoint: number = introConfig.mobileBreakpoint
): boolean {
  return window.innerWidth < breakpoint;
}

/** Measure an element into a plain Rect (viewport coordinates). */
export function measureRect(el: Element | null): Rect | null {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height,
  };
}

/** Measure an element by id. */
export function measureById(id: string): Rect | null {
  return measureRect(document.getElementById(id));
}

/** Linear interpolation. */
export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/** Clamp 0–1. */
export function clamp01(n: number): number {
  return Math.min(1, Math.max(0, n));
}

/** Map scrollY into 0–1 dock progress. */
export function scrollToProgress(
  scrollY: number,
  start: number = introConfig.scrollStart,
  end: number = introConfig.scrollEnd
): number {
  if (end <= start) return scrollY >= end ? 1 : 0;
  return clamp01((scrollY - start) / (end - start));
}
