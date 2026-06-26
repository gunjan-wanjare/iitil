"use client";

import React, { useMemo, memo } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import PillLabel from "@/components/ui/PillLabel";
import BlurText from "@/components/ui/BlurText";
import { usePinnedHorizontalScroll } from "@/components/hooks/usePinnedHorizontalScroll";
import Image from "next/image";

/* ────────────────────────────────────────────────────────────────
    Types
──────────────────────────────────────────────────────────────── */
export interface ServiceShowcaseCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  img: string; 
  accent: string;
  chips?: string[];
  features?: string[];
}

export interface HorizontalServiceShowcaseProps {
  sectionId?: string;
  label: string;
  heading: string;
  description: string;
  cards: ServiceShowcaseCard[];
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

/* ────────────────────────────────────────────────────────────────
    Row Visual Hero (Takes full height of its left-side column)
──────────────────────────────────────────────────────────────── */
function RowSideVisual({ img }: { img: any }) {
  const isValidImage = img && typeof img === "string" && img.trim() !== "";

  if (!isValidImage) {
    return (
      <div className="w-full h-full min-h-[250px] rounded-xl bg-slate-950 border border-white/[0.06] flex items-center justify-center">
        <span className="text-sm text-white/20 p-4 text-center">No Image Asset</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[250px] rounded-xl relative overflow-hidden bg-slate-950 border border-white/[0.06]">
      <Image 
        src={img} 
        alt="Service showcase feature visual" 
        fill
        className="object-cover transition-transform duration-500 hover:scale-[1.015]" 
        sizes="(max-w-1024px) 100vw, 30vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/40 pointer-events-none" />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
    Mobile card
──────────────────────────────────────────────────────────────── */
const MobileShowcaseCard = memo(function MobileShowcaseCard({
  card,
  index,
}: {
  card: ServiceShowcaseCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.5, ease: EASE }}
      className="rounded-2xl p-6 flex flex-col sm:flex-row gap-6 relative overflow-hidden text-left"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}18`,
      }}
    >
      <div className="w-full sm:w-2/5 flex-shrink-0">
        <RowSideVisual img={card.img} />
      </div>

      <div className="relative z-10 flex flex-col gap-4 flex-1 justify-center">
        <div>
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase mb-2"
            style={{
              background: `${card.accent}18`,
              border: `1px solid ${card.accent}35`,
              color: card.accent,
            }}
          >
            {card.tag}
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
            {card.title}
          </h3>
        </div>
        
        <p className="text-sm text-white/60 leading-relaxed">{card.description}</p>
        
        {card.features && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {card.features.map((f) => (
              <span
                key={f}
                className="px-2.5 py-1 rounded-full text-xs font-semibold text-white/70"
                style={{
                  background: `${card.accent}10`,
                  border: `1px solid ${card.accent}22`,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
});

/* ────────────────────────────────────────────────────────────────
    Desktop Horizontal Row Card (Enhanced Typography Sizes)
──────────────────────────────────────────────────────────────── */
const DesktopShowcaseCard = memo(function DesktopShowcaseCard({
  card,
}: {
  card: ServiceShowcaseCard;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.005, y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      className="flex-shrink-0 rounded-2xl flex flex-row p-7 gap-7 relative overflow-visible cursor-default hover:z-10 transition-zIndex duration-100 items-stretch"
      style={{
        width: "clamp(680px, 50vw, 860px)", 
        height: "54vh", 
        minHeight: "420px",
        maxHeight: "540px",
        background:
          "linear-gradient(145deg, rgba(20,28,45,0.95) 0%, rgba(13,21,38,0.98) 40%, rgba(9,15,28,1) 70%, rgba(37,99,235,0.04) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.10), 0 0 0 1px ${card.accent}15, 0 25px 50px -12px rgba(0,0,0,0.5)`,
      }}
    >
      {/* LEFT SIDE: Image Column */}
      <div className="w-[40%] flex-shrink-0 h-full">
        <RowSideVisual img={card.img} />
      </div>

      {/* RIGHT SIDE: Content Column */}
      <div className="relative z-10 flex flex-col flex-1 h-full py-1 text-left justify-between">
        <div className="flex flex-col gap-4">
          <div>
            {/* UPGRADED: Main Category Tag Size */}
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: `${card.accent}22`,
                border: `1px solid ${card.accent}45`,
                color: card.accent,
              }}
            >
              {card.tag}
            </span>
          </div>

          {/* UPGRADED: Card Header Title */}
          <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
            {card.title}
          </h3>

          {/* UPGRADED: Core Description Paragraph */}
          <p className="text-sm lg:text-[15px] text-white/65 leading-relaxed overflow-y-auto pr-1 no-scrollbar">
            {card.description}
          </p>
        </div>

        {/* Bottom Metadata block */}
        <div className="flex flex-col gap-5 mt-4 flex-shrink-0">
          {card.features && (
            <div className="flex flex-wrap gap-2">
              {/* UPGRADED: Feature Badge Text and Sizing */}
              {card.features.slice(0, 4).map((f) => (
                <span
                  key={f}
                  className="px-3 py-2 rounded-lg text-sm font-normal text-white/80 whitespace-nowrap"
                  style={{
                    background: `${card.accent}15`,
                    border: `1px solid ${card.accent}30`,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          )}

          {card.chips && !card.features && (
            <div className="grid grid-cols-2 gap-2">
              {/* UPGRADED: Grid Chip Text and Sizing */}
              {card.chips.slice(0, 4).map((c) => (
                <span
                  key={c}
                  className="px-3 py-2 rounded-lg text-md font-semibold text-white/60 bg-white/[0.03] border border-white/[0.07] truncate text-center"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          <div
            className="h-px w-full rounded-full"
            style={{
              background: `linear-gradient(to right, ${card.accent}60, transparent)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
});

/* ────────────────────────────────────────────────────────────────
    Main Export Container
──────────────────────────────────────────────────────────────── */
export default function HorizontalServiceShowcase({
  sectionId,
  label,
  heading,
  description,
  cards,
}: HorizontalServiceShowcaseProps) {
  const {
    containerRef,
    trackRef,
    scrollYProgress,
    translateX,
    progressWidth,
    containerHeight,
  } = usePinnedHorizontalScroll(true, cards.length);

  const [currentIndex, setCurrentIndex] = React.useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      cards.length,
      Math.max(1, Math.ceil(latest * cards.length + 0.3))
    );
    setCurrentIndex(idx);
  });

  const cardCountLabel = useMemo(
    () =>
      `${String(currentIndex).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`,
    [currentIndex, cards.length]
  );

  return (
    <div id={sectionId} className="overflow-visible">
      {/* Mobile Grid */}
      <section className="lg:hidden py-24 px-6">
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
              className="mt-5 text-base text-white/45 max-w-xl leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
          <div className="flex flex-col gap-6">
            {cards.map((card, i) => (
              <MobileShowcaseCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Desktop Sticky Scroll Track */}
      <section
        ref={containerRef}
        className="relative hidden lg:block min-h-screen overflow-visible"
        style={containerHeight != null ? { height: `${containerHeight}px` } : undefined}
        suppressHydrationWarning
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-visible transform-gpu">
          {/* Header Zone */}
          <div className="flex-shrink-0 px-12 pt-14 pb-2">
            <div className="max-w-[90rem] mx-auto flex items-end justify-between gap-8">
              <div className="flex-1 max-w-2xl">
                <div className="mb-4">
                  <PillLabel>{label}</PillLabel>
                </div>
                <BlurText
                  text={heading}
                  animateBy="words"
                  direction="bottom"
                  delay={60}
                  stepDuration={0.35}
                  className="text-3xl lg:text-4xl font-semibold tracking-tight text-white justify-start"
                />
                <p className="mt-3 text-sm text-white/40 max-w-lg leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="flex-shrink-0 text-right hidden lg:block pb-1">
                <span className="text-6xl font-bold tabular-nums leading-none text-white/[0.06]">
                  {cardCountLabel.split(" / ")[0]}
                </span>
                <span className="text-2xl text-white/[0.06] ml-1">
                  /{cardCountLabel.split(" / ")[1]}
                </span>
              </div>
            </div>
            <div className="max-w-[90rem] mx-auto mt-4">
              <div
                className="h-px rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  className="h-full rounded-full will-change-transform"
                  style={{
                    width: progressWidth,
                    background: "linear-gradient(to right, #2563eb, #3b82f6)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Cards Track */}
          <div
            className="flex-1 overflow-visible relative flex items-center"
            style={{
              maskImage:
                "linear-gradient(to right, black 0%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 88%, transparent 100%)",
            }}
          >
            <motion.div
              ref={trackRef}
              className="flex gap-8 px-12 h-fit items-center transform-gpu will-change-transform overflow-visible"
              style={{ x: translateX }}
            >
              {cards.map((card) => (
                <DesktopShowcaseCard key={card.id} card={card} />
              ))}
              <div className="flex-shrink-0 w-24" aria-hidden />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}