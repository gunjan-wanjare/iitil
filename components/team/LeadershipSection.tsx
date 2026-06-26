"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import LeadershipCard from "@/components/team/LeadershipCard";
import { LEADERSHIP_MEMBERS } from "@/lib/team-data";
import { fadeUp } from "@/lib/animations";

/**
 * Expected LEADERSHIP_MEMBERS order:
 *  [0] CEO        → landscape hero
 *  [1] CMO        → row 1, col 1
 *  [2] HR Head    → row 1, col 2
 *  [3] Delivery Mgr → row 2, col 1
 *  [4] Project Mgr  → row 2, col 2
 */

const LeadershipSection = memo(function LeadershipSection() {
  const [ceo, ...rest] = LEADERSHIP_MEMBERS;
  const row1 = rest.slice(0, 2); // CMO, HR Head
  const row2 = rest.slice(2, 4); // Delivery Manager, Project Manager

  return (
    <section
      className="relative py-28 md:py-32 overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      {/* Top glow */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0.0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="mb-6">
            <PillLabel>Leadership Team</PillLabel>
          </div>
          <BlurText
            text="The Leaders Behind IITIL"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.45}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            {...fadeUp(0.35)}
            id="leadership-heading"
            className="mt-6 text-lg text-white/45 max-w-2xl leading-relaxed"
          >
            Experienced leaders who set the strategy and deliver it — measured by
            the value they create, not the slides they produce.
          </motion.p>
        </div>

        {/* CEO — full-width landscape card */}
        {ceo && (
          <div className="mb-6 lg:mb-8">
            <LeadershipCard member={ceo} index={0} variant="landscape" />
          </div>
        )}

        {/* Row 1 — CMO + HR Head */}
        {row1.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            {row1.map((member, i) => (
              <LeadershipCard
                key={member.id}
                member={member}
                index={i + 1}
                variant="portrait"
              />
            ))}
          </div>
        )}

        {/* Row 2 — Delivery Manager + Project Manager */}
        {row2.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {row2.map((member, i) => (
              <LeadershipCard
                key={member.id}
                member={member}
                index={i + 3}
                variant="portrait"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
});

export default LeadershipSection;