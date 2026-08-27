/**
 * Crediple Intro — single source of truth for timings, sizes, and assets.
 *
 * When reusing this system on another Next.js website, edit ONLY this file:
 *
 * 1. brandLogo     → path to the full wordmark (used in loader stage 2 + hero flight)
 * 2. iconLogo      → path to the compact icon (shown in navbar after docking)
 * 3. stage1Logo    → path to the site's own wordmark (loader stage 1)
 * 4. *LogoSize     → px sizes for each stage
 * 5. loaderStage1Duration / loaderStage2Duration / loaderFadeDuration → loader hold + fade (ms)
 * 6. scrollStart → scroll Y (px) where the hero logo hands off to the navbar
 * 7. heroAnchorId / navbarAnchorId → must match DOM ids in Hero & Navbar
 * 8. mobileBreakpoint → skip intro entirely below this width
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

  /**
   * Site's own wordmark — loader stage 1, shown before the "A YAKA Brand" stage.
   * CHANGE THIS when adopting on another brand.
   */
  stage1Logo: "/iitil_logo.svg",

  /** Loader stage 1 (site wordmark) box size (px). */
  loaderStage1LogoSize: 85,

  /** Loader stage 2 (YAKA mark) icon size (px). */
  loaderStage2LogoSize: 85,

  /** Hero parked logo size (px). */
  heroLogoSize: 64,

  /** Final navbar icon size (px). */
  navbarLogoSize: 36,

  /** How long the loader holds on stage 1 — site wordmark (ms). */
  loaderStage1Duration: 1500,

  /** How long the loader holds on stage 2 — "A YAKA Brand" mark (ms). */
  loaderStage2Duration: 1500,

  /** Loader fade-out duration (ms). */
  loaderFadeDuration: 600,

  /** Scroll Y (px) past which the hero logo hands off to the navbar (bidirectional). */
  scrollStart: 40,

  /** Must match the invisible anchor element inside the Hero. */
  heroAnchorId: "hero-logo-anchor",

  /** Must match the invisible anchor element inside the Navbar. */
  navbarAnchorId: "navbar-logo-anchor",

  /** Below this viewport width the intro is skipped entirely. */
  mobileBreakpoint: 768,
} as const;

export type IntroConfig = typeof introConfig;
