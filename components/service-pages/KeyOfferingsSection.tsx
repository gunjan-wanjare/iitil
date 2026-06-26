"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import { ACCENT_VARIANTS, EASE } from "./constants";
import type { ServiceOfferingItem } from "./types";

function ServiceOfferingCard({
  item,
  index,
}: {
  item: ServiceOfferingItem;
  index: number;
}) {
  const accent = ACCENT_VARIANTS[index % ACCENT_VARIANTS.length];
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: EASE }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden h-full"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${accent}18`,
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px ${accent}50, 0 8px 32px ${accent}18`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${accent}18`;
      }}
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${accent}10 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <span
          className="text-sm font-semibold tracking-widest mb-4"
          style={{ color: accent }}
        >
          {item.num}
        </span>

        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{
            background: `${accent}15`,
            border: `1px solid ${accent}30`,
          }}
        >
          <Icon size={20} style={{ color: accent }} strokeWidth={1.8} />
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 tracking-tight leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed flex-1">
          {item.description}
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, ${accent}70, transparent)`,
        }}
      />
    </motion.div>
  );
}

interface KeyOfferingsSectionProps {
  items: readonly ServiceOfferingItem[];
}

const KeyOfferingsSection = memo(function KeyOfferingsSection({
  items,
}: KeyOfferingsSectionProps) {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-5">
            <PillLabel>Services</PillLabel>
          </div>
          <BlurText
            text="Key Offerings"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ServiceOfferingCard key={item.num} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default KeyOfferingsSection;
