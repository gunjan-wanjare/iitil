"use client";

import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function CTABanner() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Built on Trust */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center px-6"
        >
          <div className="mb-5">
            <PillLabel>Built on Trust</PillLabel>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Intelligence is only useful when you can trust it.
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Data and AI earn their power from being secure, explainable, and governed. We build
            privacy, access control, monitoring, compliance readiness, and responsible-AI
            principles into the foundation not the footnotes.
          </p>
          <p className="mt-4 text-base font-medium text-white/70">
            Because better intelligence starts with better trust.
          </p>
        </motion.div>

        {/* Let's Build */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
          }}
          className="relative rounded-3xl px-8 py-20 flex flex-col items-center text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.06) 100%)",
            backgroundImage:
              "radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(37,99,235,0.2)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(37,99,235,0.1)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6">
              <PillLabel>Let&apos;s Build</PillLabel>
            </div>

            <BlurText
              text="Still reading? Then your data's probably underperforming."
              animateBy="words"
              direction="bottom"
              delay={90}
              stepDuration={0.45}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center justify-center max-w-3xl"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed"
            >
              Tell us what you&apos;re trying to solve. We&apos;ll help you find the fastest path
              from fragmented data to intelligent outcomes - usually with a few sharp questions
              and a suggested next step within one business day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
            >
              <AnimatedButton variant="primary" href="/reach-us">
                Start a conversation
              </AnimatedButton>
              <AnimatedButton variant="ghost" href="/portfolio">
                See our work
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
