"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { EASE, fadeUp } from "@/lib/animations";

interface PageCTAProps {
  pillLabel?: string;
  headline: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

const PageCTA = memo(function PageCTA({
  pillLabel = "Get In Touch",
  headline,
  description,
  primaryLabel = "Get In Touch",
  secondaryLabel = "Talk to a Specialist",
  primaryHref = "/reach-us",
  secondaryHref = "/reach-us",
}: PageCTAProps) {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 flex flex-col items-center text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(9,15,28,0.95) 50%, rgba(37,99,235,0.06) 100%)",
            border: "1px solid rgba(37,99,235,0.2)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 80px rgba(37,99,235,0.12)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(37,99,235,0.1) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6">
              <PillLabel>{pillLabel}</PillLabel>
            </div>
            <BlurText
              text={headline}
              animateBy="words"
              direction="bottom"
              delay={70}
              stepDuration={0.4}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-3xl"
            />
            {description && (
              <motion.p
                {...fadeUp(0.4)}
                className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed"
              >
                {description}
              </motion.p>
            )}
            <motion.div
              {...fadeUp(0.55)}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
            >
              <AnimatedButton variant="primary" href={primaryHref}>
                {primaryLabel}
              </AnimatedButton>
              <AnimatedButton variant="ghost" href={secondaryHref}>
                {secondaryLabel}
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default PageCTA;
