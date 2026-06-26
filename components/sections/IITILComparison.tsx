"use client";

import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import { EASE } from "@/lib/animations";

const WHY_ITEMS = [
  {
    num: "01",
    title: "Data-first by design.",
    description: "Our solution starts with reliable, usable, business-ready data.",
  },
  {
    num: "02",
    title: "Architecture that grows with you.",
    description:
      "We build systems that scale - not systems you rebuild from scratch every fiscal year.",
  },
  {
    num: "03",
    title: "Industry context, built in.",
    description: "Cross-industry experience means solutions that are practical.",
  },
  {
    num: "04",
    title: "Execution that doesn't drift.",
    description:
      "Clear roadmaps, agile delivery, measurable milestones, quality-led governance.",
  },
  {
    num: "05",
    title: "Security from the start.",
    description:
      "Privacy, access control, governance, and compliance readiness - designed in.",
  },
] as const;

export default function IITILComparison() {
  return (
    <section id="why-us" className="relative py-32 px-6 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.02)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-4">
            <PillLabel>Why Us</PillLabel>
          </div>
          <BlurText
            text="Built for teams that need outcomes, not overhead."
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Transformation shouldn&apos;t feel tedious. We bring structure, speed, and execution
            clarity to programmes that usually sprawl.
          </motion.p>
        </div>

        <div className="space-y-4">
          {WHY_ITEMS.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
              whileHover={{ x: 4 }}
              className="rounded-2xl p-6 md:p-8 bg-[#070e1e]/60 border border-white/[0.06] backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <span className="text-sm font-mono font-semibold text-[#2563eb] tracking-widest flex-shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
