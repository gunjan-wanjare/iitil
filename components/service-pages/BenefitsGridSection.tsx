"use client";

import { memo } from "react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import type { BenefitItem } from "./types";

interface BenefitsGridSectionProps {
  title: string;
  items: readonly BenefitItem[];
}

const BenefitsGridSection = memo(function BenefitsGridSection({
  title,
  items,
}: BenefitsGridSectionProps) {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6">
            <PillLabel>Benefits</PillLabel>
          </div>
          <BlurText
            as="h2"
            text={title}
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.45}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white text-center justify-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <GlowCard key={item.title} delay={i * 0.08}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    border: "1px solid rgba(37,99,235,0.3)",
                  }}
                >
                  <Icon className="w-6 h-6 text-[#2563eb]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-base text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default BenefitsGridSection;
