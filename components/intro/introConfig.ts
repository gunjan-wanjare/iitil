/**
 * Crediple Intro — single source of truth for timings, sizes, and assets.
 *
 * When reusing this system on another Next.js website, edit ONLY this file:
 *
 * 1. brandLogo     → path to the full wordmark (used in loader + hero flight)
 * 2. iconLogo      → path to the compact icon (shown in navbar after docking)
 * 3. *LogoSize     → px sizes for each stage
 * 4. loaderDuration / loaderFadeDuration → loader hold + fade (ms)
 * 5. scrollStart / scrollEnd → scroll range (px) for hero → navbar dock
 * 6. heroAnchorId / navbarAnchorId → must match DOM ids in Hero & Navbar
 * 7. mobileBreakpoint → skip intro entirely below this width
 * 8. navbarShiftX → how far right-side nav controls slide left while docking
 * 9. enabled       → master kill-switch
 */

export const introConfig = {
  /** Master switch — set false to disable the intro site-wide. */
  enabled: true,

  /**
   * Full brand / wordmark asset (public path).
   * CHANGE THIS when adopting on another brand.
   */
  brandLogo: "/yaka_brand_logo.png",

  /**
   * Compact icon asset shown in the navbar after docking.
   * CHANGE THIS when adopting on another brand.
   * Can match brandLogo if you only have one asset.
   */
  iconLogo: "/yaka_logo.png",

  /** Loader centered logo size (px). */
  loaderLogoSize: 140,

  /** Hero parked logo size (px). */
  heroLogoSize: 80,

  /** Final navbar icon size (px). */
  navbarLogoSize: 34,

  /** How long the loader holds before fading (ms). */
  loaderDuration: 3200,

  /** Loader fade-out duration (ms). */
  loaderFadeDuration: 600,

  /** Scroll Y (px) where docking begins. */
  scrollStart: 50,

  /** Scroll Y (px) where docking completes. */
  scrollEnd: 240,

  /** Must match the invisible anchor element inside the Hero. */
  heroAnchorId: "hero-logo-anchor",

  /** Must match the invisible anchor element inside the Navbar. */
  navbarAnchorId: "navbar-logo-anchor",

  /** Below this viewport width the intro is skipped entirely. */
  mobileBreakpoint: 768,

  /** Right-side navbar controls shift left by this many px while docking. */
  navbarShiftX: 40,
} as const;

export type IntroConfig = typeof introConfig;
