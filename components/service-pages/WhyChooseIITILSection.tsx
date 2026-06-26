"use client";

import { memo } from "react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import { ACCENT_VARIANTS } from "./constants";
import type { WhyIITILItem } from "./types";

interface WhyChooseIITILSectionProps {
  items: readonly WhyIITILItem[];
  heading?: string;
}

const WhyChooseIITILSection = memo(function WhyChooseIITILSection({
  items,
  heading = "Why IITIL",
}: WhyChooseIITILSectionProps) {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-5">
            <PillLabel>Partnership</PillLabel>
          </div>
          <BlurText
            text={heading}
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
            const accent = ACCENT_VARIANTS[i % ACCENT_VARIANTS.length];
            return (
              <GlowCard key={item.num} delay={i * 0.1}>
                <div className="flex flex-col gap-5">
                  <span
                    className="text-sm font-semibold tracking-widest"
                    style={{ color: accent }}
                  >
                    {item.num}
                  </span>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${accent}18`,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: accent }} strokeWidth={1.5} />
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

export default WhyChooseIITILSection;
