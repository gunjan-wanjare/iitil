"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Sparkles, Activity } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import { EASE } from "@/lib/animations";

const CARDS = [
  {
    title: "Security",
    description:
      "Zero-trust, identity-first, secure by default across data, models and infrastructure.",
    icon: Shield,
  },
  {
    title: "Governance",
    description:
      "Data quality, lineage, access control and audit-readiness, not an afterthought.",
    icon: Scale,
  },
  {
    title: "Responsible AI",
    description:
      "Evals, guardrails and explainability, so you can trust what the models do.",
    icon: Sparkles,
  },
  {
    title: "Observability",
    description:
      "One view across your data pipelines, model performance and system health.",
    icon: Activity,
  },
] as const;

export default function BuiltInSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="mb-5">
            <PillLabel>Built In, Not Bolted On</PillLabel>
          </div>
          <BlurText
            text="Built in, not bolted on."
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-base md:text-lg text-white/45 max-w-2xl mx-auto text-center leading-relaxed mb-4"
        >
          Every engagement ships with these - no upgrade required.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          className="text-base md:text-lg text-white/45 max-w-3xl mx-auto text-center leading-relaxed mb-16"
        >
          You shouldn&apos;t have to ask for security, or pay extra for governance. Whichever
          practice you start with, these run through all four:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <GlowCard key={card.title} delay={i * 0.1}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    border: "1px solid rgba(37,99,235,0.3)",
                  }}
                >
                  <Icon className="w-6 h-6 text-[#2563eb]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{card.description}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
