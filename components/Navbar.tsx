"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Imported for the Yaka logo
import AnimatedButton, { NavLink } from "@/components/ui/AnimatedButton";
import IITILLogo from "@/components/ui/IITILLogo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Reach Us", href: "/reach-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      <motion.nav
        layout
        animate={
          scrolled
            ? {
                maxWidth: "72rem",
                borderRadius: "9999px",
                top: 16,
                paddingLeft: 24,
                paddingRight: 24,
              }
            : {
                maxWidth: "100%",
                borderRadius: 0,
                top: 0,
                paddingLeft: 48,
                paddingRight: 48,
              }
        }
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full relative"
        style={
          scrolled
            ? {
                background: "rgba(10,20,40,0.75)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
              }
            : {
                background: "rgba(2,8,23,0.8)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "none",
              }
        }
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="cursor-pointer"
          >
            <IITILLogo size={64} />
          </motion.a>

          {/* Nav Links */}
          <motion.div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + i * 0.05,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <NavLink
                  href={link.href}
                  active={isActive(link.href)}
                  className="text-[1.05rem] font-medium"
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA + Animated Yaka Logo Container */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <AnimatedButton
                variant="ghost"
                showArrow={false}
                href="/reach-us"
                className="text-sm px-5 py-3"
              >
                Get In Touch
              </AnimatedButton>
            </motion.div>

            {/* Yaka Logo Slide & Fade Animation */}
            <AnimatePresence>
              {scrolled && (
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex items-center justify-center shrink-0"
                >
                  <Image
                    src="/yaka_logo.png"
                    alt="Yaka Logo"
                    width={40} // Adjust size as needed to fit your UI
                    height={40}
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Gradient bleed below navbar (only when not scrolled) */}
        {!scrolled && (
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: 0,
              right: 0,
              height: 60,
              background:
                "linear-gradient(to bottom, rgba(37,99,235,0.08) 0%, transparent 100%)",
              pointerEvents: "none",
            }}
          />
        )}
      </motion.nav>
    </motion.header>
  );
}