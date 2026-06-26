"use client";

import React, { useMemo, memo } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import PillLabel from "@/components/ui/PillLabel";
import BlurText from "@/components/ui/BlurText";
import { usePinnedHorizontalScroll } from "@/components/hooks/usePinnedHorizontalScroll";

/* ────────────────────────────────────────────────────────────────
    Types
──────────────────────────────────────────────────────────────── */
export interface ServiceShowcaseCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
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
    Project visual placeholder (shown when card has `features`)
──────────────────────────────────────────────────────────────── */
function ProjectVisual({
  accent,
  icon,
}: {
  accent: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="w-full rounded-xl relative overflow-hidden flex items-center justify-center mb-6 flex-shrink-0"
      style={{
        height: "120px",
        background: `linear-gradient(135deg, ${accent}18 0%, ${accent}08 50%, transparent 100%)`,
        border: `1px solid ${accent}20`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        className="absolute top-4 right-4 w-16 h-16 rounded-full"
        style={{
          background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`,
        }}
      />
      <div
        className="relative z-10 opacity-25 scale-[2.5]"
        style={{ color: accent }}
      >
        {icon}
      </div>
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
      initial={{ opacity: 0, y: 48, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.65, ease: EASE }}
      whileHover={{ scale: 1.02, y: -6 }}
      className="rounded-2xl p-6 flex flex-col gap-3 relative overflow-hidden"
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
      <div className="relative z-10 flex flex-col gap-3">
        {card.features && (
          <ProjectVisual accent={card.accent} icon={card.icon} />
        )}
        {!card.features && (
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-1"
            style={{
              background: `${card.accent}18`,
              border: `1px solid ${card.accent}30`,
            }}
          >
            <div style={{ color: card.accent }}>{card.icon}</div>
          </div>
        )}
        <span
          className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: `${card.accent}18`,
            border: `1px solid ${card.accent}35`,
            color: card.accent,
          }}
        >
          {card.tag}
        </span>
        <h3 className="text-xl font-semibold text-white tracking-tight leading-snug">
          {card.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed">{card.description}</p>
        {card.features && (
          <div className="flex flex-wrap gap-2 mt-1">
            {card.features.map((f) => (
              <span
                key={f}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-white/60"
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
        {card.chips && (
          <div className="grid grid-cols-2 gap-2 mt-1">
            {card.chips.map((c) => (
              <span
                key={c}
                className="px-3 py-2 rounded-lg text-xs font-medium text-white/60 text-center"
                style={{
                  background: `${card.accent}10`,
                  border: `1px solid ${card.accent}22`,
                }}
              >
                {c}
              </span>
            ))}
          </div>
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

/* ────────────────────────────────────────────────────────────────
    Desktop horizontal card  (wide — ~2.5 visible)
──────────────────────────────────────────────────────────────── */
const DesktopShowcaseCard = memo(function DesktopShowcaseCard({
  card,
}: {
  card: ServiceShowcaseCard;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      /* UPDATED: Changed overflow-hidden to overflow-visible, added hover:z-10 to prevent side clipping */
      className="flex-shrink-0 rounded-2xl flex flex-col relative overflow-visible cursor-default hover:z-10 transition-zIndex duration-100"
      style={{
        width: "clamp(360px, 35vw, 560px)",
        height: "clamp(400px, calc(90vh - 236px), 580px)",
        background:
          "linear-gradient(145deg, rgba(20,28,45,0.95) 0%, rgba(13,21,38,0.98) 40%, rgba(9,15,28,1) 70%, rgba(37,99,235,0.05) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.10), 0 0 0 1px ${card.accent}20, 0 24px 48px rgba(0,0,0,0.35)`,
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.14), 0 0 0 1px ${card.accent}60, 0 32px 64px rgba(0,0,0,0.5), 0 0 40px ${card.accent}12`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.10), 0 0 0 1px ${card.accent}20, 0 24px 48px rgba(0,0,0,0.35)`;
      }}
    >
      {/* Container to isolate internal corner glow masking securely */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute top-0 left-0 w-1/2 h-1/2"
          style={{
            background: `radial-gradient(ellipse at top left, ${card.accent}14 0%, transparent 65%)`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col p-8 h-full">
        {/* Visual placeholder for project cards */}
        {card.features && (
          <ProjectVisual accent={card.accent} icon={card.icon} />
        )}

        {/* Icon for ecosystem cards */}
        {!card.features && (
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
            style={{
              background: `${card.accent}15`,
              border: `1px solid ${card.accent}35`,
            }}
          >
            <div className="scale-125" style={{ color: card.accent }}>
              {card.icon}
            </div>
          </div>
        )}

        {/* Tag */}
        <span
          className="inline-flex items-center w-fit px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 flex-shrink-0"
          style={{
            background: `${card.accent}18`,
            border: `1px solid ${card.accent}35`,
            color: card.accent,
          }}
        >
          {card.tag}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight mb-3 flex-shrink-0">
          {card.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm text-white/50 leading-relaxed ${
            card.chips ? "" : "flex-1"
          }`}
        >
          {card.description}
        </p>

        {/* Feature pills (project cards) */}
        {card.features && (
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {card.features.map((f) => (
              <span
                key={f}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-white/60"
                style={{
                  background: `${card.accent}12`,
                  border: `1px solid ${card.accent}25`,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Service chip grid (ecosystem cards) */}
        {card.chips && (
          <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
            {card.chips.map((c) => (
              <span
                key={c}
                className="px-3 py-2 rounded-lg text-xs font-medium text-white/60 text-center leading-tight"
                style={{
                  background: `${card.accent}10`,
                  border: `1px solid ${card.accent}22`,
                }}
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Bottom accent */}
        <div
          className="mt-5 h-px w-full rounded-full flex-shrink-0"
          style={{
            background: `linear-gradient(to right, ${card.accent}70, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
});

/* ────────────────────────────────────────────────────────────────
    HorizontalServiceShowcase — main export
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
    <div id={sectionId}>
      {/* ── Mobile / Tablet: Vertical Grid ─────────────────────── */}
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
              <MobileShowcaseCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Desktop: Sticky Horizontal Scroll ──────────────────── */}
      <section
        ref={containerRef}
        className="relative hidden lg:block min-h-screen"
        style={
          containerHeight != null
            ? { height: `${containerHeight}px` }
            : undefined
        }
        suppressHydrationWarning
      >
        {/* UPDATED: Changed overflow-hidden to overflow-visible so position: sticky behaves as expected under Lenis */}
        <div className="sticky top-0 h-screen flex flex-col overflow-visible transform-gpu">
          {/* Section header */}
          <div className="flex-shrink-0 px-12 pt-14 pb-6">
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
              {/* Counter */}
              <div className="flex-shrink-0 text-right hidden lg:block pb-1">
                <span className="text-6xl font-bold tabular-nums leading-none text-white/[0.06]">
                  {cardCountLabel.split(" / ")[0]}
                </span>
                <span className="text-2xl text-white/[0.06] ml-1">
                  /{cardCountLabel.split(" / ")[1]}
                </span>
              </div>
            </div>
            {/* Progress bar */}
            <div className="max-w-[90rem] mx-auto mt-5">
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

          {/* Card track 
              UPDATED: Switched overflow-hidden to overflow-visible to keep tracking elements aligned properly */}
          <div
            className="flex-1 overflow-visible relative flex items-center"
            style={{
              maskImage:
                "linear-gradient(to right, black 0%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 0%, black 88%, transparent 100%)",
            }}
          >
            {/* UPDATED: Added overflow-visible to the track element so hover scales don't clip at top/bottom */}
            <motion.div
              ref={trackRef}
              className="flex gap-6 px-12 h-fit items-center transform-gpu will-change-transform overflow-visible"
              style={{ x: translateX }}
            >
              {cards.map((card) => (
                <DesktopShowcaseCard key={card.id} card={card} />
              ))}
              <div className="flex-shrink-0 w-20" aria-hidden />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}