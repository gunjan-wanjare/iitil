"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedButton, { NavLink } from "@/components/ui/AnimatedButton";
import { useIntro } from "@/components/intro/useIntro";
import { introConfig } from "@/components/intro/introConfig";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  // { label: "Our Team", href: "/team" },
];

/** Below this, use the hamburger — prevents CTA / link overlap. */
const DESKTOP_NAV_MIN = 1280;

export default function Navbar() {
  const pathname = usePathname();
  const { phase } = useIntro();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDesktopNav, setShowDesktopNav] = useState(false);

  const isActive = (href: string) => {
    const path =
      pathname.length > 1 && pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;
    if (href === "/") return path === "/";
    return path === href || path.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setShowDesktopNav(w >= DESKTOP_NAV_MIN);
      if (w >= DESKTOP_NAV_MIN) setIsOpen(false);
    };
    const handleScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.7);

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // YAKA icon ONLY when fully docked (or mobile skip). Never during flight/hero.
  const showNavbarIcon = isMobile || phase === "done";
  const logoSize = introConfig.navbarLogoSize;
  const leftLogoSize = isMobile ? 48 : 64;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1,
        }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 xl:px-0"
      >
        <motion.nav
          layout
          animate={
            scrolled
              ? {
                  maxWidth: "72rem",
                  borderRadius: "9999px",
                  top: 16,
                  paddingLeft: 20,
                  paddingRight: 20,
                }
              : {
                  maxWidth: "100%",
                  borderRadius: 0,
                  top: 0,
                  paddingLeft: isMobile ? 16 : 32,
                  paddingRight: isMobile ? 16 : 32,
                }
          }
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full relative"
          style={
            scrolled
              ? {
                  background: "rgba(10,20,40,0.75)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }
              : {
                  background: "rgba(2,8,23,0.8)",
                  backdropFilter: "blur(12px)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }
          }
        >
          {/*
            Equal 1fr side columns keep the center links viewport-centered.
            Separate grid cells prevent left/right from overlapping the links.
          */}
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 sm:gap-x-4 h-16 sm:h-20 w-full">
            {/* LEFT — website logo (always column 1) */}
            <div className="col-start-1 justify-self-start min-w-0 flex items-center">
              {isActive("/") ? (
                <span
                  className="cursor-default block"
                  aria-current="page"
                  aria-label="IITIL home"
                >
                  <Image
                    src="/iitil_logo.svg"
                    alt="IITIL"
                    width={leftLogoSize}
                    height={leftLogoSize}
                    className="object-contain w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16"
                    priority
                  />
                </span>
              ) : (
                <Link
                  href="/"
                  className="cursor-pointer block"
                  aria-label="IITIL home"
                >
                  <Image
                    src="/iitil_logo.svg"
                    alt="IITIL"
                    width={leftLogoSize}
                    height={leftLogoSize}
                    className="object-contain w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16"
                    priority
                  />
                </Link>
              )}
            </div>

            {/* CENTER — always column 2 so sides stay balanced; links only when wide enough */}
            <div className="col-start-2 justify-self-center flex items-center">
              {showDesktopNav && (
                <div className="flex items-center gap-3 xl:gap-5 2xl:gap-8 whitespace-nowrap">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      key={link.label}
                      href={link.href}
                      active={isActive(link.href)}
                      className="text-sm xl:text-[0.95rem] 2xl:text-[1.05rem] font-medium"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT — always column 3: CTA, YAKA, hamburger when needed */}
            <div className="col-start-3 justify-self-end flex items-center gap-3 sm:gap-4 min-w-0">
              {!isActive("/reach-us") && (
                <div className="hidden sm:block shrink-0">
                  <AnimatedButton
                    variant="ghost"
                    href="/reach-us"
                    className="text-xs sm:text-sm px-3 sm:px-4 xl:px-5 py-2 sm:py-2.5 xl:py-3"
                  >
                    Get In Touch
                  </AnimatedButton>
                </div>
              )}

              {/*
                Dock target AFTER the CTA.
                Always measured for intro; icon fades/scales in only when
                done / mobile skip — it lives natively inside the navbar,
                so it never overlays it from a separate layer.
              */}
              <div
                id={introConfig.navbarAnchorId}
                className="relative flex items-center justify-center flex-shrink-0"
                style={{ width: logoSize, height: logoSize }}
              >
                <AnimatePresence>
                  {showNavbarIcon && (
                    <motion.div
                      key="navbar-yaka"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ type: "spring", stiffness: 180, damping: 22 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={introConfig.iconLogo}
                        alt="Yaka"
                        width={logoSize}
                        height={logoSize}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={showDesktopNav ? "hidden" : "block shrink-0"}
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div
                  className={`space-y-1.5 ${isOpen ? "open" : ""}`}
                  aria-hidden="true"
                >
                  <span
                    className={`block h-0.5 w-6 bg-white transition-transform ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-white ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 w-6 bg-white transition-transform ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && !showDesktopNav && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#020817]/95 flex flex-col justify-center items-center"
          >
            <nav
              aria-label="Mobile"
              className="flex flex-col gap-6 text-center px-6"
            >
              {NAV_LINKS.map((link) =>
                isActive(link.href) ? (
                  <span
                    key={link.label}
                    className="text-xl text-[#2563eb] cursor-default"
                    aria-current="page"
                  >
                    {link.label}
                  </span>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl text-white"
                  >
                    {link.label}
                  </Link>
                )
              )}
              {!isActive("/reach-us") && (
                <Link
                  href="/reach-us"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 text-base text-white/80 border border-white/20 rounded-full px-6 py-3 sm:hidden"
                >
                  Get In Touch
                </Link>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
