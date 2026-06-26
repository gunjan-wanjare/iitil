"use client";

import { memo, type ReactNode } from "react";
import { motion } from "framer-motion";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedMetric from "@/components/case-studies/AnimatedMetric";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export interface CaseStudyMetric {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export interface CaseStudySectionProps {
  id: string;
  industry: string;
  title: string;
  accent: string;
  background: string;
  challenge: string;
  approach: string;
  solution: string;
  results: CaseStudyMetric[];
  visual: ReactNode;
  reverse?: boolean;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { delay, duration: 0.7, ease: EASE },
});

const CONTENT_BLOCKS = [
  { key: "background", label: "Client Background" },
  { key: "challenge", label: "Business Challenge" },
  { key: "approach", label: "IITIL Approach" },
  { key: "solution", label: "Solution Implemented" },
] as const;

function CaseStudySection({
  id,
  industry,
  title,
  accent,
  background,
  challenge,
  approach,
  solution,
  results,
  visual,
  reverse = false,
}: CaseStudySectionProps) {
  const contentMap = { background, challenge, approach, solution };

  return (
    <section
      id={id}
      className="min-h-[90vh] lg:min-h-screen flex items-center py-20 lg:py-28 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Content column */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeUp(0)}>
              <PillLabel className="mb-4">{industry}</PillLabel>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                {title}
              </h2>
            </motion.div>

            {CONTENT_BLOCKS.map((block, i) => (
              <motion.div
                key={block.key}
                {...fadeUp(0.08 + i * 0.08)}
                className="rounded-xl p-5 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%, transparent 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-2"
                  style={{ color: accent }}
                >
                  {block.label}
                </p>
                <p className="text-sm md:text-base text-white/55 leading-relaxed">
                  {contentMap[block.key]}
                </p>
              </motion.div>
            ))}

            {/* Results */}
            <motion.div
              {...fadeUp(0.45)}
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${accent}12 0%, rgba(9,15,28,0.95) 60%, transparent 100%)`,
                border: `1px solid ${accent}25`,
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${accent}15`,
              }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: accent }}
              >
                Results Achieved
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {results.map((metric) => (
                  <AnimatedMetric
                    key={metric.label}
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                    label={metric.label}
                    accent={accent}
                    size="md"
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="relative"
          >
            {visual}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(CaseStudySection);
