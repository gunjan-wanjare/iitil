"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import { useLenis } from "@/components/providers/LenisProvider";
import { EASE } from "@/components/service-pages/constants";
import { legalSections } from "./legalSections";
import { useScrollSpy } from "./useScrollSpy";
import LegalSection from "./LegalSection";
import LegalSidebar, { NAV_OFFSET } from "./LegalSidebar";
import LegalMobileTOC from "./LegalMobileTOC";

export default function LegalPage() {
  const { lenis } = useLenis();
  const sectionIds = legalSections.map((s) => s.id);
  const { activeId, setActiveId, setProgrammaticScroll } = useScrollSpy(sectionIds);
  const hasHandledInitialHash = useRef(false);
  const skipHashReplace = useRef(false);

  const scrollToSection = useCallback(
    (id: string, options?: { pushHistory?: boolean }) => {
      const pushHistory = options?.pushHistory ?? true;

      setProgrammaticScroll(true);
      setActiveId(id);
      skipHashReplace.current = true;

      if (pushHistory) {
        window.history.pushState(null, "", `/legal#${id}`);
      }

      if (lenis) {
        lenis.scrollTo(`#${id}`, {
          offset: -NAV_OFFSET,
          duration: 1.2,
          onComplete: () => {
            skipHashReplace.current = false;
          },
        });
      } else {
        const el = document.getElementById(id);
        if (el) {
          const top =
            el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
          window.scrollTo({ top, behavior: "smooth" });
        }
        setTimeout(() => {
          skipHashReplace.current = false;
        }, 1200);
      }
    },
    [lenis, setActiveId, setProgrammaticScroll]
  );

  useEffect(() => {
    if (!lenis || hasHandledInitialHash.current) return;

    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      hasHandledInitialHash.current = true;
      const timer = setTimeout(() => {
        scrollToSection(hash, { pushHistory: false });
      }, 150);
      return () => clearTimeout(timer);
    }

    hasHandledInitialHash.current = true;
  }, [lenis, sectionIds, scrollToSection]);

  useEffect(() => {
    if (skipHashReplace.current || !activeId) return;
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash !== activeId) {
      window.history.replaceState(null, "", `/legal#${activeId}`);
    }
  }, [activeId]);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        scrollToSection(hash, { pushHistory: false });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [sectionIds, scrollToSection]);

  return (
    <main
      className="min-h-screen text-white relative block"
      style={{ background: "rgba(2,8,23,1)" }}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 20%, rgba(37,99,235,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
            className="mb-6"
          >
            <PillLabel>Legal</PillLabel>
          </motion.div>

          <BlurText
            text="Legal Information"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.5}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center justify-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
            className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            Terms & Conditions, Privacy Policy, Cookie Policy, Data Protection
            Policy, and all legal information for IITIL in one unified document.
          </motion.p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-28">
        <LegalMobileTOC
          sections={legalSections}
          activeId={activeId}
          onNavigate={scrollToSection}
        />

        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-10 lg:gap-14">
          <div className="min-w-0 space-y-10">
            <h1 className="sr-only">IITIL Legal Policies</h1>
            {legalSections.map((section, index) => (
              <LegalSection
                key={section.id}
                id={section.id}
                title={section.title}
                content={section.content}
                index={index}
              />
            ))}
          </div>

          <LegalSidebar
            sections={legalSections}
            activeId={activeId}
            onNavigate={scrollToSection}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
