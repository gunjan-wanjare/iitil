"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link"; // Required for client-side routing
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-0"
      >
        <motion.nav
          layout
          animate={scrolled ? { maxWidth: "72rem", borderRadius: "9999px", top: 16, paddingLeft: 24, paddingRight: 24 } : { maxWidth: "100%", borderRadius: 0, top: 0, paddingLeft: isMobile ? 16 : 48, paddingRight: isMobile ? 16 : 48 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full relative"
          style={scrolled ? { background: "rgba(10,20,40,0.75)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.1)" } : { background: "rgba(2,8,23,0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="cursor-pointer">
              <IITILLogo size={isMobile ? 48 : 64} />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <NavLink
                  key={link.label}
                  href={link.href}
                  active={isActive(link.href)}
                  className="text-[1.05rem] font-medium"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden sm:block">
                <AnimatedButton variant="ghost" href="/reach-us" className="text-sm px-5 py-3">
                  Get In Touch
                </AnimatedButton>
              </div>

              <AnimatePresence>
                {scrolled && (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                    <Image src="/yaka_logo.png" alt="Yaka Logo" width={36} height={36} />
                  </motion.div>
                )}
              </AnimatePresence>

              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                <div className={`space-y-1.5 ${isOpen ? "open" : ""}`}>
                  <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block h-0.5 w-6 bg-white ${isOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 w-6 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
              </button>
            </div>
          </div>
        </motion.nav>
      </motion.header>

      {/* Fixed Mobile Navigation Menu using Link */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-[#020817]/95 flex flex-col justify-center items-center md:hidden">
            <div className="flex flex-col gap-6 text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl ${isActive(link.href) ? "text-[#2563eb]" : "text-white"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}