/**
 * Crediple Intro — shared types.
 */

export type IntroPhase =
  | "boot" // SSR / pre-mount: opaque cover, no browser APIs yet
  | "loading" // Fullscreen loader (brand + shimmer)
  | "flying" // Logo flies from loader → hero (or navbar)
  | "hero" // Parked on hero, waiting for scroll
  | "done"; // Scrolled past threshold; navbar owns the icon

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
  /** Called by Loader when fade-out completes with measured logo rect. */
  completeLoader: (rect: Rect) => void;
  /** Called by FloatingLogo when it has landed on the hero. */
  arriveAtHero: () => void;
}
