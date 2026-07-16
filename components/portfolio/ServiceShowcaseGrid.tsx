"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PillLabel from "@/components/ui/PillLabel";
import BlurText from "@/components/ui/BlurText";
import { EASE, fadeUp } from "@/lib/animations";

export interface ServiceCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  img: string;
  accent: string;
  chips: string[];
}

interface ServicesShowcaseGridProps {
  sectionId?: string;
  label: string;
  heading: string;
  description: string;
  cards: ServiceCard[];
}

const ServiceCardTile = memo(function ServiceCardTile({
  card,
  index,
  fullWidth = false,
}: {
  card: ServiceCard;
  index: number;
  fullWidth?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.6, ease: EASE }}
      whileHover={{ scale: 1.015, y: -6 }}
      className={`rounded-2xl relative overflow-hidden flex flex-col ${fullWidth ? "md:flex-row" : ""}`}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}18`,
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px ${card.accent}50, 0 12px 32px ${card.accent}15`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}18`;
      }}
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${card.accent}12 0%, transparent 65%)` }}
      />

      {/* Image Container 💡 Height increased slightly for better visibility */}
      <div
        className={`relative w-full overflow-hidden flex-shrink-0 ${
          fullWidth ? "h-60 md:h-auto md:w-2/5" : "h-52"
        }`}
      >
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover"
          sizes={fullWidth ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 100vw, 50vw"}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: fullWidth
              ? "linear-gradient(to right, transparent 0%, rgba(9,15,28,0.15) 100%)"
              : "linear-gradient(to top, rgba(9,15,28,1) 0%, rgba(9,15,28,0.1) 55%, transparent 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-7 flex-1 flex flex-col justify-center">
        <span
          className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{
            background: `${card.accent}18`,
            border: `1px solid ${card.accent}35`,
            color: card.accent,
          }}
        >
          {card.tag}
        </span>

        <h3 className="text-xl font-semibold text-white mb-2 tracking-tight leading-snug">{card.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-5">{card.description}</p>

        <div className="flex flex-wrap gap-2">
          {card.chips.map((chip) => (
            <span
              key={chip}
              className="text-xs text-white/60 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(to right, ${card.accent}70, transparent)` }}
      />
    </motion.div>
  );
});

export default function ServicesShowcaseGrid({
  sectionId,
  label,
  heading,
  description,
  cards,
}: ServicesShowcaseGridProps) {
  // First 4 cards form two 2-up rows, the 5th spans full width beneath them
  const gridCards = cards.slice(0, 4);
  const fullWidthCard = cards[4];

  return (
    <section id={sectionId} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="mb-5">
            <PillLabel>{label}</PillLabel>
          </div>
          <BlurText
            as="h2"
            text={heading}
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center"
          />
          <motion.p {...fadeUp(0.3)} className="mt-5 text-lg text-white/45 max-w-2xl leading-relaxed">
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridCards.map((card, i) => (
            <ServiceCardTile key={card.id} card={card} index={i} />
          ))}
        </div>

        {fullWidthCard && (
          <div className="mt-6">
            <ServiceCardTile card={fullWidthCard} index={4} fullWidth />
          </div>
        )}
      </div>
    </section>
  );
}