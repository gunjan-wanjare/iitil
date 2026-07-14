"use client";

import { memo } from "react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import { ACCENT } from "./constants";
import type { UseCaseItem } from "./types";

interface UseCasesSectionProps {
  items: readonly UseCaseItem[];
}

const UseCasesSection = memo(function UseCasesSection({
  items,
}: UseCasesSectionProps) {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-[180px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(37,99,235,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-5">
            <PillLabel>Applications</PillLabel>
          </div>
          <BlurText
            as="h2"
            text="Use Cases"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <GlowCard key={item.title} delay={i * 0.12}>
                <div className="flex flex-col gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${ACCENT}18`,
                      border: `1px solid ${ACCENT}30`,
                    }}
                  >
                    <Icon size={22} className="text-[#2563eb]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default UseCasesSection;
