"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const GLASS_BG =
  "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)";

const BASE_SHADOW =
  "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(37,99,235,0.08)";

const HOVER_SHADOW =
  "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px rgba(37,99,235,0.22), 0 4px 24px rgba(37,99,235,0.08)";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function GlowCard({ children, className = "", delay = 0 }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ scale: 1.01, y: -2 }}
      className={`relative rounded-2xl p-8 border border-white/[0.06] overflow-hidden ${className}`}
      style={{
        background: GLASS_BG,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        boxShadow: BASE_SHADOW,
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = HOVER_SHADOW;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = BASE_SHADOW;
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "35%",
          height: "35%",
          background:
            "radial-gradient(ellipse at top left, rgba(37,99,235,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
