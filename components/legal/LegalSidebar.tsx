"use client";

import { motion } from "framer-motion";
import type { LegalSectionData } from "./legalSections";

const NAV_OFFSET = 96;

interface LegalSidebarProps {
  sections: LegalSectionData[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export default function LegalSidebar({
  sections,
  activeId,
  onNavigate,
}: LegalSidebarProps) {
  return (
    <aside
      className="hidden lg:block w-full"
      aria-label="Legal contents navigation"
    >
      <div className="sticky top-28">
        <div
          className="rounded-2xl p-6"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(37,99,235,0.08)",
          }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
            Legal Contents
          </p>

          <nav>
            <ul className="space-y-1">
              {sections.map((section) => {
                const isActive = activeId === section.id;
                return (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate(section.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`group relative w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020817] ${
                        isActive
                          ? "text-[#2563eb] font-semibold"
                          : "text-white/45 hover:text-white/75 font-medium"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="legal-nav-indicator"
                          className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
                          style={{ background: "#2563eb" }}
                          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />
                      )}
                      <span className="pl-2 block leading-snug">{section.navLabel}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
}

export { NAV_OFFSET };
