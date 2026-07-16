"use client";

import React, { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Brain, Cloud, Code2, Compass, ArrowLeft, ArrowRight } from "lucide-react";
import PillLabel from "@/components/ui/PillLabel";
import BlurText from "@/components/ui/BlurText";

const ICON = { size: 24, strokeWidth: 1.6 } as const;

interface HorizontalCardData {
  id: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  bullets: string[];
}

const PRACTICE_CARDS: HorizontalCardData[] = [
  {
    id: "data",
    tag: "1 · Data",
    title: "Data intelligence & analytics",
    headline: "One source of truth everyone trusts.",
    description: "Your Teams stop arguing about whose number is right.",
    icon: <BarChart3 {...ICON} />,
    accent: "#2563eb",
    bullets: [
      "Data platforms - Snowflake, Databricks, BigQuery",
      "Analytics & BI - governed semantic layers",
      "Data engineering - dbt, Airflow, CD",
    ],
  },
  {
    id: "ai",
    tag: "2 · AI",
    title: "Artificial intelligence & ML",
    headline: "Models that earn their keep.",
    description: "Your AI moves from slideware to everyday systems.",
    icon: <Brain {...ICON} />,
    accent: "#3b82f6",
    bullets: [
      "Predictive modelling - forecasting, risk scoring",
      "Generative AI - RAG, agents, guardrails, evals",
      "MLOps - CI/CD, feature stores, observability",
    ],
  },
  {
    id: "cloud",
    tag: "3 · Cloud",
    title: "Cloud & DevOps",
    headline: "Ship faster. Sleep better.",
    description: "Your releases get quicker; the system gets steadier.",
    icon: <Cloud {...ICON} />,
    accent: "#60a5fa",
    bullets: [
      "Platform engineering - golden paths, IDPs",
      "Cloud security - zero-trust, IAM, posture",
      "Migration - AWS, Azure, GCP",
    ],
  },
  {
    id: "build",
    tag: "4 · Build",
    title: "Enterprise engineering",
    headline: "Software that fits your business.",
    description: "Your systems work together, not around each other.",
    icon: <Code2 {...ICON} />,
    accent: "#1d4ed8",
    bullets: [
      "Product engineering - web, mobile, backend",
      "Integrations - ERP, CRM, billing",
      "Quality & reliability - test automation, SRE",
    ],
  },
  {
    id: "advisory",
    tag: "5 · Advisory",
    title: "Strategic advisory",
    headline: "Strategy built by practitioners, not presenters.",
    description: "Your technology blueprint aligns completely with real economic ROI.",
    icon: <Compass {...ICON} />,
    accent: "#38bdf8",
    bullets: [
      "Architecture evaluation & technical due diligence",
      "Data & AI readiness assessments",
      "Ecosystem modernization blueprints",
    ],
  },
];

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

// Reusable Mobile Card Component directly leveraging your layout specs
const MobileCard = memo(function MobileCard({ card, index }: { card: HorizontalCardData; index: number }) {
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
        <h3 className="text-xl font-semibold text-white mb-1 tracking-tight leading-snug">{card.title}</h3>
        <p className="text-sm font-medium text-white/75 mb-2">{card.headline}</p>
        <p className="text-sm text-white/50 leading-relaxed">{card.description}</p>
        <ul className="mt-4 space-y-2">
          {card.bullets.map((b) => (
            <li key={b} className="text-xs text-white/45 leading-relaxed flex gap-2">
              <span className="text-[#2563eb] flex-shrink-0">·</span>
              {b}
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

// Reusable Desktop Card Component directly leveraging your layout specs
const DesktopCard = memo(function DesktopCard({ card }: { card: HorizontalCardData }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="w-full h-full min-h-[460px] xl:min-h-[500px] rounded-2xl flex flex-col relative overflow-visible cursor-default hover:z-10"
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
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
        <div
          className="absolute top-0 left-0 w-1/2 h-1/2"
          style={{ background: `radial-gradient(ellipse at top left, ${card.accent}14 0%, transparent 65%)` }}
        />
      </div>

      <div className="relative z-10 flex flex-col p-8 h-full justify-between flex-1">
        <div>
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

          <h3 className="text-2xl font-semibold text-white tracking-tight leading-tight mb-2">{card.title}</h3>
          <p className="text-base font-medium text-white/80 mb-2">{card.headline}</p>
          <p className="text-sm text-white/50 leading-relaxed mb-4">{card.description}</p>

          <ul className="space-y-2.5">
            {card.bullets.map((b) => (
              <li key={b} className="text-xs text-white/45 leading-relaxed flex gap-2">
                <span className="text-[#2563eb] flex-shrink-0 mt-0.5">·</span>
                <span>{b}</span>
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

export default function FivePractices() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? PRACTICE_CARDS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === PRACTICE_CARDS.length - 1 ? 0 : prev + 1));
  };

  // Maps an infinite sequence slice containing 4 distinct cards visually
  const visibleCards = useMemo(() => {
    const total = PRACTICE_CARDS.length;
    return Array.from({ length: 4 }).map((_, i) => {
      const targetIndex = (startIndex + i) % total;
      return PRACTICE_CARDS[targetIndex];
    });
  }, [startIndex]);

  return (
    <div id="five-practices" className="w-full bg-slate-950 text-white relative">
      
      {/* Mobile & Tablet Stacking Grid Layout */}
      <section className="lg:hidden py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <div className="mb-5">
              <PillLabel>The Five Practices</PillLabel>
            </div>
            <BlurText
              text="Five practices. One integrated delivery model."
              animateBy="words"
              direction="bottom"
              delay={80}
              stepDuration={0.4}
              className="text-3xl font-semibold tracking-tight text-white text-center justify-center"
            />
            <p className="mt-5 text-base text-white/45 max-w-xl leading-relaxed">
              Our core technological operations structured to function in unity rather than integration blocks.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PRACTICE_CARDS.map((card, i) => (
              <MobileCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Desktop 4-Column Infinite Transition Slider */}
      <section className="hidden lg:block py-24 px-8 xl:px-12 max-w-[90rem] mx-auto overflow-hidden">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div className="flex-1 min-w-0">
            <PillLabel>The Five Practices</PillLabel>
            <h2 className="mt-4 text-3xl xl:text-4xl font-semibold tracking-tight text-white leading-tight">
              Five practices. One integrated delivery model.
            </h2>
            <p className="mt-3 text-sm text-white/40 max-w-xl leading-relaxed">
              Navigate through our foundational tech spaces seamlessly with frictionless control inputs.
            </p>
          </div>

          {/* Top-Right Control Actions Layout */}
          <div className="flex items-center gap-3 shrink-0 mb-2">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 active:scale-95 group focus:outline-none"
              aria-label="Previous card"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 active:scale-95 group focus:outline-none"
              aria-label="Next card"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Sliding Content Track */}
        <div className="grid grid-cols-4 gap-6 items-stretch">
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
      </section>

    </div>
  );
}