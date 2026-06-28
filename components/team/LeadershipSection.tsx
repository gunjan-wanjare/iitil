"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import LeadershipCard from "@/components/team/LeadershipCard";
import { LEADERSHIP_MEMBERS } from "@/lib/team-data";
import { fadeUp } from "@/lib/animations";

const TeamGrid = memo(function TeamGrid() {
  const [ceo, ...restLeadership] = LEADERSHIP_MEMBERS;

  return (
    <section
      className="relative py-28 md:py-32 overflow-hidden"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-6">
            <PillLabel>Our Team</PillLabel>
          </div>
          <BlurText
            text="Experts Across Every Function"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.45}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            {...fadeUp(0.35)}
            id="team-heading"
            className="mt-6 text-lg text-white/45 max-w-2xl leading-relaxed"
          >
            Specialized leadership united by one standard — deliver solutions that
            create measurable business impact.
          </motion.p>
        </div>

        {/* ── CEO — Expanded full-width landscape banner ── */}
        {ceo && (
          <div className="mb-6 lg:mb-8">
            <LeadershipCard member={ceo} index={0} variant="landscape" />
          </div>
        )}

        {/* ── Rest of Leadership — Balanced 2-col Grid ── */}
        {restLeadership.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {restLeadership.map((member, i) => (
              <LeadershipCard
                key={member.id}
                member={member}
                index={i + 1}
                variant="portrait"
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
});

export default TeamGrid;