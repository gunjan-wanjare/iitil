"use client";

import { motion } from "framer-motion";
import { Database, Brain, Cloud, Code2 } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import { EASE } from "@/lib/animations";

const FLOW_CARDS = [
  {
    step: "1",
    title: "Data",
    description: "Clean data your AI can trust,",
    icon: Database,
    accent: "#2563eb",
  },
  {
    step: "2",
    title: "AI",
    description: "AI that turns it into forecasts and automation,",
    icon: Brain,
    accent: "#3b82f6",
  },
  {
    step: "3",
    title: "Cloud",
    description: "cloud that runs all of it securely at scale,",
    icon: Cloud,
    accent: "#60a5fa",
  },
  {
    step: "4",
    title: "Engineering",
    description: "and engineering that turns it into products in daily use.",
    icon: Code2,
    accent: "#1d4ed8",
  },
] as const;

export default function ConnectedByDesign() {
  return (
    <section className="py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="mb-5">
            <PillLabel>Connected by Design</PillLabel>
          </div>
          <BlurText
            text="Independently strong. Together, unstoppable."
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          className="text-lg text-white/50 max-w-3xl mx-auto text-center leading-relaxed mb-6"
        >
          Hire four vendors and you are left with four roadmaps, four contracts, and a seam between
          each one where your accountability quietly disappears.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
          className="text-base text-white/45 max-w-3xl mx-auto text-center leading-relaxed mb-12"
        >
          IITIL removes the seams. One architecture, one senior team, four practices that feed each
          other:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {FLOW_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(20,28,45,0.95) 0%, rgba(13,21,38,0.98) 60%, rgba(37,99,235,0.05) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}20`,
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${card.accent}18 0%, transparent 65%)`,
                  }}
                />
                <span
                  className="text-xs font-mono font-semibold tracking-widest"
                  style={{ color: card.accent }}
                >
                  {card.step}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${card.accent}18`,
                    border: `1px solid ${card.accent}35`,
                  }}
                >
                  <Icon size={22} style={{ color: card.accent }} strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-semibold text-white tracking-tight">{card.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">{card.description}</p>
                {i < FLOW_CARDS.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px z-10"
                    style={{
                      background: `linear-gradient(to right, ${card.accent}60, transparent)`,
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          className="text-base text-white/45 max-w-2xl mx-auto text-center leading-relaxed"
        >
          Start with the practice you need most. The value compounds as the others connect.
        </motion.p>
      </div>
    </section>
  );
}
