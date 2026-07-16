"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Compass, Users, Target, ShieldAlert, Workflow, GraduationCap } from "lucide-react";
import PillLabel from "@/components/ui/PillLabel";
import BlurText from "@/components/ui/BlurText";
import { EASE, fadeUp } from "@/lib/animations";

const ICON = { size: 24, strokeWidth: 1.6 } as const;

export interface EngagementCardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const MODEL_CARDS: EngagementCardData[] = [
  {
    id: "discovery",
    tag: "Fixed Scope",
    title: "Discovery Sprint",
    description:
      "2–4 weeks to define the opportunity, success metrics, and a roadmap you can act on. Best when you know there's value to unlock but want a sharp plan before committing.",
    icon: <Compass {...ICON} />,
    accent: "#2563eb",
  },
  {
    id: "review",
    tag: "Flat Fee",
    title: "Architecture & Risk Audit",
    description:
      "A deep, 2-week health assessment of your existing code, cloud posture, and data pipelines. Best when preparing to scale up or needing to uncover hidden performance bottlenecks.",
    icon: <ShieldAlert {...ICON} />,
    accent: "#1d4ed8",
  },
  {
    id: "pod",
    tag: "Monthly Retainer",
    title: "Pod-as-a-Service",
    description:
      "An embedded, cross-functional team that ships outcomes weekly. Best when you need senior capacity that moves fast and plugs straight into your product workflow.",
    icon: <Users {...ICON} />,
    accent: "#3b82f6",
  },
  {
    id: "scaleout",
    tag: "Long-Term Team",
    title: "Dedicated Scale-Out",
    description:
      "Long-term, exclusive core engineering squads assembled specifically to build, maintain, and own entire major platform initiatives alongside your internal tech leads.",
    icon: <Workflow {...ICON} />,
    accent: "#1e40af",
  },
  {
    id: "outcome",
    tag: "Milestone-Based",
    title: "Outcome Engagements",
    description:
      "Multi-quarter programmes priced on delivered business value. Best when the goal is completely clear and you would rather pay for results than hours logged.",
    icon: <Target {...ICON} />,
    accent: "#60a5fa",
  },
  {
    id: "fractional",
    tag: "Part-Time Advisory",
    title: "Fractional Tech Leadership",
    description:
      "Strategic guidance from seasoned data and cloud practitioners on a fractional basis. Best for hyper-growth stages requiring senior technical advisory without the full-time C-suite overhead.",
    icon: <GraduationCap {...ICON} />,
    accent: "#38bdf8",
  },
];

const ModelCardTile = memo(function ModelCardTile({
  card,
  index,
}: {
  card: EngagementCardData;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease: EASE }}
      whileHover={{ scale: 1.02, y: -6 }}
      className="rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden h-full min-h-[320px] cursor-default"
      style={{
        background:
          "linear-gradient(145deg, rgba(20,28,45,0.95) 0%, rgba(13,21,38,0.98) 40%, rgba(9,15,28,1) 70%, rgba(37,99,235,0.03) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}15`,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px ${card.accent}50, 0 16px 40px rgba(0,0,0,0.4), 0 0 30px ${card.accent}10`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}15`;
      }}
    >
      {/* Decorative top corner radial accent */}
      <div
        aria-hidden
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${card.accent}14 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center justify-between gap-4">
          {/* Dynamic Interactive Icon Wrapper */}
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl"
            style={{
              background: `${card.accent}14`,
              border: `1px solid ${card.accent}30`,
              color: card.accent,
            }}
          >
            {card.icon}
          </div>

          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase"
            style={{
              background: `${card.accent}14`,
              border: `1px solid ${card.accent}25`,
              color: card.accent,
            }}
          >
            {card.tag}
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white tracking-tight leading-snug mb-3">
            {card.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>

      {/* Decorative colored edge line anchor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(to right, ${card.accent}70, transparent)`,
        }}
      />
    </motion.div>
  );
});

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="py-24 px-6 max-w-7xl mx-auto text-white">
      {/* Header section matches site-wide styling */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="mb-5">
          <PillLabel>Engagement Models</PillLabel>
        </div>
        <BlurText
          as="h2"
          text="Built for momentum, priced for clarity."
          animateBy="words"
          direction="bottom"
          delay={80}
          stepDuration={0.4}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center"
        />
        <motion.p
          {...fadeUp(0.3)}
          className="mt-5 text-lg text-white/45 max-w-2xl leading-relaxed"
        >
          Pick the model that fits where you are — designed for rapid implementation and transparent delivery.
        </motion.p>
      </div>

      {/* Responsive Grid System: stacks on mobile, 2 columns on tablet, exactly 3 columns (yielding 2 clean rows) on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {MODEL_CARDS.map((card, i) => (
          <ModelCardTile key={card.id} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}