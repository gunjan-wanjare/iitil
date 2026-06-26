"use client";

import React, { useMemo, memo } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import PillLabel from "@/components/ui/PillLabel";
import BlurText from "@/components/ui/BlurText";
import { usePinnedHorizontalScroll } from "@/components/hooks/usePinnedHorizontalScroll";

export interface HorizontalCardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  headline?: string;
  bullets?: string[];
}

export interface HorizontalScrollCardsProps {
  sectionId?: string;
  label: string;
  heading: string;
  description: string;
  cards: HorizontalCardData[];
  richCards?: boolean;
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const MobileCard = memo(function MobileCard({
  card,
  index,
  rich,
}: {
  card: HorizontalCardData;
  index: number;
  rich?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.65, ease: EASE }}
      whileHover={{ scale: 1.02, y: -6 }}
      className="rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
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
      <div
        aria-hidden
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${card.accent}10 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10">
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

        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
          style={{
            background: `${card.accent}15`,
            border: `1px solid ${card.accent}30`,
          }}
        >
          <div style={{ color: card.accent }}>{card.icon}</div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-1 tracking-tight leading-snug">
          {card.title}
        </h3>
        {rich && card.headline && (
          <p className="text-sm font-medium text-white/75 mb-2">{card.headline}</p>
        )}
        <p className="text-sm text-white/50 leading-relaxed">{card.description}</p>
        {rich && card.bullets && (
          <ul className="mt-4 space-y-2">
            {card.bullets.map((b) => (
              <li key={b} className="text-xs text-white/45 leading-relaxed flex gap-2">
                <span className="text-[#2563eb] flex-shrink-0">·</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, ${card.accent}70, transparent)`,
        }}
      />
    </motion.div>
  );
});

const DesktopCard = memo(function DesktopCard({
  card,
  rich,
}: {
  card: HorizontalCardData;
  rich?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="flex-shrink-0 rounded-2xl flex flex-col relative overflow-visible cursor-default hover:z-10"
      style={{
        width: rich ? "clamp(300px, 32vw, 440px)" : "clamp(260px, 29vw, 400px)",
        height: rich ? "clamp(420px, calc(80vh - 200px), 580px)" : "clamp(380px, calc(80vh - 220px), 540px)",
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
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-1/2 h-1/2"
          style={{
            background: `radial-gradient(ellipse at top left, ${card.accent}14 0%, transparent 65%)`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col p-8 h-full">
        <span
          className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
          style={{
            background: `${card.accent}18`,
            border: `1px solid ${card.accent}35`,
            color: card.accent,
          }}
        >
          {card.tag}
        </span>

        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
          style={{
            background: `${card.accent}15`,
            border: `1px solid ${card.accent}35`,
          }}
        >
          <div className="scale-125" style={{ color: card.accent }}>
            {card.icon}
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight mb-2">
          {card.title}
        </h3>

        {rich && card.headline && (
          <p className="text-base font-medium text-white/80 mb-2">{card.headline}</p>
        )}

        <p className="text-sm text-white/50 leading-relaxed">
          {card.description}
        </p>

        {rich && card.bullets && (
          <ul className="mt-5 space-y-2.5 flex-1">
            {card.bullets.map((b) => (
              <li key={b} className="text-xs text-white/45 leading-relaxed flex gap-2">
                <span className="text-[#2563eb] flex-shrink-0 mt-0.5">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        <div
          className="mt-6 h-px w-full rounded-full flex-shrink-0"
          style={{
            background: `linear-gradient(to right, ${card.accent}70, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
});

export default function HorizontalScrollCards({
  sectionId,
  label,
  heading,
  description,
  cards,
  richCards = false,
}: HorizontalScrollCardsProps) {
  const {
    containerRef,
    trackRef,
    scrollYProgress,
    translateX,
    progressWidth,
    containerHeight,
    isReady,
  } = usePinnedHorizontalScroll(true, cards.length, sectionId ?? label);

  const [currentIndex, setCurrentIndex] = React.useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      cards.length,
      Math.max(1, Math.ceil(latest * cards.length + 0.5))
    );
    setCurrentIndex(idx);
  });

  const cardCountLabel = useMemo(
    () => `${String(currentIndex).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`,
    [currentIndex, cards.length]
  );

  return (
    <div id={sectionId}>
      {/* Mobile / tablet */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <MobileCard key={card.id} card={card} index={i} rich={richCards} />
            ))}
          </div>
        </div>
      </section>

      {/* Desktop pinned horizontal scroll */}
      <section
        ref={containerRef}
        className="relative hidden lg:block"
        style={{
          height: containerHeight && isReady ? `${containerHeight}px` : `${cards.length * 100}vh`,
        }}
        suppressHydrationWarning
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Header — single row, no wrap */}
          <div className="flex-shrink-0 px-8 xl:px-12 pt-12 pb-5">
            <div className="max-w-[90rem] mx-auto">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <PillLabel>{label}</PillLabel>
                  <h2 className="mt-4 text-3xl xl:text-4xl font-semibold tracking-tight text-white leading-tight">
                    {heading}
                  </h2>
                  <p className="mt-3 text-sm text-white/40 max-w-xl leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right pt-2">
                  <span className="text-5xl xl:text-6xl font-bold tabular-nums leading-none text-white/[0.08]">
                    {cardCountLabel.split(" / ")[0]}
                  </span>
                  <span className="text-xl xl:text-2xl text-white/[0.08] ml-1">
                    /{cardCountLabel.split(" / ")[1]}
                  </span>
                </div>
              </div>

              <div className="mt-5">
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
          </div>

          {/* Horizontal track */}
          <div
            className="w-full flex-1 relative flex items-center min-h-0"
            style={{
              maskImage:
                "linear-gradient(to right, black 0%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 88%, transparent 100%)",
            }}
          >
            <motion.div
              ref={trackRef}
              className="flex gap-6 px-8 xl:px-12 w-max items-center transform-gpu will-change-transform"
              style={{ x: translateX }}
            >
              {cards.map((card) => (
                <DesktopCard key={card.id} card={card} rich={richCards} />
              ))}
              <div className="flex-shrink-0 w-32 h-10" aria-hidden />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
