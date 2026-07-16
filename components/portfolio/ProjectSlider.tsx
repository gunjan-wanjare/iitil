"use client";

import React, { useMemo, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PillLabel from "@/components/ui/PillLabel";
import BlurText from "@/components/ui/BlurText";
import { EASE } from "@/lib/animations";

export interface ProjectCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  img: string;
  accent: string;
  features: string[];
}

interface ProjectsSliderProps {
  sectionId?: string;
  label: string;
  heading: string;
  description: string;
  cards: ProjectCard[];
}

/* ── Desktop card (image + detail) ── */
const DesktopCard = memo(function DesktopCard({ card }: { card: ProjectCard }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="w-full h-full min-h-[460px] xl:min-h-[500px] rounded-2xl flex flex-col relative overflow-hidden cursor-default hover:z-10"
      style={{
        background:
          "linear-gradient(145deg, rgba(20,28,45,0.95) 0%, rgba(13,21,38,0.98) 40%, rgba(9,15,28,1) 70%, rgba(37,99,235,0.05) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.10), 0 0 0 1px ${card.accent}20, 0 24px 48px rgba(0,0,0,0.35)`,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.14), 0 0 0 1px ${card.accent}60, 0 32px 64px rgba(0,0,0,0.5), 0 0 40px ${card.accent}12`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.10), 0 0 0 1px ${card.accent}20, 0 24px 48px rgba(0,0,0,0.35)`;
      }}
    >
      {/* Image Container with contain fit and comfortable padding so the full logo is visible */}
      <div 
        className="relative w-full h-44 xl:h-48 flex-shrink-0 overflow-hidden p-6 flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)"
        }}
      >
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-contain p-4" /* 💡 Changed to object-contain with inner padding so icons don't touch boundaries */
          sizes="(max-width: 1280px) 25vw, 320px"
          priority
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(9,15,28,1) 0%, rgba(9,15,28,0.05) 60%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col p-6 h-full justify-between flex-1">
        <div>
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

          <h3 className="text-xl font-semibold text-white tracking-tight leading-tight mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed mb-4">{card.description}</p>

          <ul className="space-y-2.5">
            {card.features.map((f) => (
              <li key={f} className="text-xs text-white/45 leading-relaxed flex gap-2">
                <span className="text-[#2563eb] flex-shrink-0 mt-0.5">·</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-6 h-px w-full rounded-full flex-shrink-0"
          style={{ background: `linear-gradient(to right, ${card.accent}70, transparent)` }}
        />
      </div>
    </motion.div>
  );
});

/* ── Mobile / tablet card ── */
const MobileCard = memo(function MobileCard({ card, index }: { card: ProjectCard; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.65, ease: EASE }}
      whileHover={{ scale: 1.02, y: -6 }}
      className="rounded-2xl flex flex-col relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}18`,
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px ${card.accent}50, 0 8px 32px ${card.accent}18`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}18`;
      }}
    >
      {/* Mobile Image Container */}
      <div 
        className="relative w-full h-40 flex-shrink-0 overflow-hidden p-5 flex items-center justify-center"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)"
        }}
      >
        <Image 
          src={card.img} 
          alt={card.title} 
          fill 
          className="object-contain p-3" /* 💡 Applied containment scaling for clean vector display */
          sizes="100vw" 
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(9,15,28,1) 0%, rgba(9,15,28,0.1) 60%, transparent 100%)",
          }}
        />
      </div>
      <div className="relative z-10 p-6">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{
            background: `${card.accent}18`,
            border: `1px solid ${card.accent}35`,
            color: card.accent,
          }}
        >
          {card.tag}
        </span>
        <h3 className="text-xl font-semibold text-white mb-1 tracking-tight leading-snug">{card.title}</h3>
        <p className="text-sm text-white/50 leading-relaxed mb-3">{card.description}</p>
        <ul className="space-y-2">
          {card.features.map((f) => (
            <li key={f} className="text-xs text-white/45 leading-relaxed flex gap-2">
              <span className="text-[#2563eb] flex-shrink-0">·</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(to right, ${card.accent}70, transparent)` }}
      />
    </motion.div>
  );
});

export default function ProjectsSlider({
  sectionId,
  label,
  heading,
  description,
  cards,
}: ProjectsSliderProps) {
  const [startIndex, setStartIndex] = useState(0);
  const total = cards.length;
  const visibleCount = Math.min(4, total);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const handleNext = () => {
    setStartIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const visibleCards = useMemo(() => {
    return Array.from({ length: visibleCount }).map((_, i) => {
      const targetIndex = (startIndex + i) % total;
      return cards[targetIndex];
    });
  }, [startIndex, cards, total, visibleCount]);

  return (
    <section id={sectionId} className="w-full text-white relative">
      {/* Mobile & Tablet Stacking Grid */}
      <div className="lg:hidden py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="mb-5">
              <PillLabel>{label}</PillLabel>
            </div>
            <BlurText
              text={heading}
              animateBy="words"
              direction="bottom"
              delay={80}
              stepDuration={0.4}
              className="text-3xl font-semibold tracking-tight text-white text-center justify-center"
            />
            <p className="mt-5 text-base text-white/45 max-w-xl leading-relaxed">{description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <MobileCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Infinite Slider */}
      <div className="hidden lg:block py-24 px-8 xl:px-12 max-w-[90rem] mx-auto overflow-hidden">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div className="flex-1 min-w-0">
            <PillLabel>{label}</PillLabel>
            <h2 className="mt-4 text-3xl xl:text-4xl font-semibold tracking-tight text-white leading-tight">
              {heading}
            </h2>
            <p className="mt-3 text-sm text-white/40 max-w-xl leading-relaxed">{description}</p>
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-3 shrink-0 mb-2">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 active:scale-95 group focus:outline-none"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 active:scale-95 group focus:outline-none"
              aria-label="Next project"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div
          className="grid gap-6 items-stretch"
          style={{ gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))` }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleCards.map((card, index) => (
              <motion.div
                key={`${card.id}-${startIndex}-${index}`}
                layout
                initial={{ opacity: 0, x: 45, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -45, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 32 }}
                className="w-full h-full"
              >
                <DesktopCard card={card} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}