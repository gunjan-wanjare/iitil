"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { LegalSectionData } from "./legalSections";

interface LegalMobileTOCProps {
  sections: LegalSectionData[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export default function LegalMobileTOC({
  sections,
  activeId,
  onNavigate,
}: LegalMobileTOCProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeSection =
    sections.find((s) => s.id === activeId) ?? sections[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <div ref={containerRef} className="lg:hidden mb-8">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="legal-mobile-toc"
        className="w-full flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/50"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-1">
            Legal Contents
          </p>
          <p className="text-sm font-semibold text-[#2563eb]">
            {activeSection?.navLabel}
          </p>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={18} className="text-white/50" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="legal-mobile-toc"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mt-2 rounded-2xl"
            style={{
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(10,20,40,0.95)",
            }}
          >
            <ul className="py-2">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => handleSelect(section.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`w-full text-left px-5 py-3 text-sm transition-colors duration-200 focus:outline-none focus-visible:bg-white/5 ${
                        isActive
                          ? "text-[#2563eb] font-semibold bg-[#2563eb]/8"
                          : "text-white/50 hover:text-white/80"
                      }`}
                    >
                      {section.navLabel}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
