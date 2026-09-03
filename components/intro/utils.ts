import type { Rect } from "./types";

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
