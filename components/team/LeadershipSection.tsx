"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import LeadershipCard from "@/components/team/LeadershipCard";
import { LEADERSHIP_MEMBERS } from "@/lib/team-data";
import { fadeUp } from "@/lib/animations";

const LeadershipSection = memo(function LeadershipSection() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden" aria-labelledby="leadership-heading">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0.0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {LEADERSHIP_MEMBERS.map((member, i) => (
            <LeadershipCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default LeadershipSection;
