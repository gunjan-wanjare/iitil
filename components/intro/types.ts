/**
 * Crediple Intro — shared types.
 */

export type IntroPhase =
  | "boot" // SSR / pre-mount: opaque cover, no browser APIs yet
  | "loading" // Fullscreen loader (brand + shimmer)
  | "flying" // Logo flies from loader → hero (or navbar)
  | "hero" // Parked on hero, waiting for scroll
  | "docking" // Scroll-linked brand ↔ navbar (bidirectional)
  | "done"; // Floating unmounted; navbar owns the icon (scroll > scrollEnd)

export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface IntroContextValue {
  phase: IntroPhase;
  /** True once intro finished the initial loader (or skipped on mobile). */
  isComplete: boolean;
  /** True while the cinematic intro is actively running. */
  isActive: boolean;
  /** Loader logo rect measured at fade-out — FloatingLogo initial. */
  loaderRect: Rect | null;
  /** 0–1 dock progress (scroll-linked). Safe to read outside RAF. */
  dockProgress: number;
  /** Called by Loader when fade-out completes with measured logo rect. */
  completeLoader: (rect: Rect) => void;
  /** Called by FloatingLogo when it has landed on the hero. */
  arriveAtHero: () => void;
  /** Called by FloatingLogo when dock progress reaches the navbar (p ≈ 1). */
  completeDock: () => void;
  /** Called by FloatingLogo when dock progress returns to the hero (p ≈ 0). */
  returnToHero: () => void;
}
