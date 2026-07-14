"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Users,
  Shield,
  Heart,
  BookOpen,
  Globe,
} from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import { WHY_TEAM_WINS } from "@/lib/team-data";
import { fadeUp } from "@/lib/animations";

const ICON_MAP = {
  lightbulb: Lightbulb,
  users: Users,
  shield: Shield,
  heart: Heart,
  book: BookOpen,
  globe: Globe,
} as const;

const ACCENTS = ["#2563eb", "#3b82f6", "#60a5fa", "#1d4ed8", "#2563eb", "#3b82f6"];

const WhyTeamWinsSection = memo(function WhyTeamWinsSection() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden" aria-labelledby="why-team-heading">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="mb-6">
            <PillLabel>Why Our Team Wins</PillLabel>
          </div>
          <BlurText
            as="h2"
            text="What Sets Our People Apart"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.45}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            {...fadeUp(0.35)}
            id="why-team-heading"
            className="mt-6 text-lg text-white/45 max-w-2xl leading-relaxed"
          >
            The principles that guide how we hire, collaborate, and deliver for every
            client engagement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_TEAM_WINS.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <GlowCard key={item.title} delay={i * 0.08}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${accent}18`,
                    border: `1px solid ${accent}35`,
                  }}
                >
                  <Icon size={22} style={{ color: accent }} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default WhyTeamWinsSection;
