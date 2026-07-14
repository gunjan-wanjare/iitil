"use client";

import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const HOW_IT_WORKS_STEPS = [
  {
    num: 1,
    title: "Connect",
    description: "every source - into one foundation.",
  },
  {
    num: 2,
    title: "Clean",
    description:
      'it, so "the data" stops being a debate and starts being a decision.',
  },
  {
    num: 3,
    title: "Model",
    description:
      "it with AI and ML that forecast, recommend, automate, and optimise - running in production every day.",
  },
  {
    num: 4,
    title: "Govern",
    description:
      "it, so security, access, and compliance are built in from the start, not bolted on at audit time.",
  },
] as const;



function StepGrid({
  steps,
  startDelay = 0,
}: {
  steps: readonly { num: number; title: string; description: string }[];
  startDelay?: number;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
      {steps.map((step, i) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            delay: startDelay + i * 0.12,
            duration: 0.7,
            ease: EASE,
          }}
          className="relative"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: startDelay + i * 0.12,
              duration: 0.8,
              ease: EASE,
            }}
            className="h-px w-full mb-8 origin-left"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)",
            }}
          />
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/20 text-xs font-semibold tracking-widest uppercase text-[#2563eb]/70 mb-4">
            {String(step.num).padStart(2, "0")}
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3 leading-tight">
            {step.title}
          </h3>
          <p className="text-base md:text-lg text-white/50 leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function WorkProcess() {
  return (
    <section id="process" className="relative pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* How It Works */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6">
            <PillLabel>How It Works</PillLabel>
          </div>
          <BlurText
            as="h2"
            text="One connected layer. No more silos."
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.45}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            className="mt-6 text-md md:text-lg text-white/45 max-w-3xl leading-relaxed"
          >
            We work across your stack to unify scattered systems into one trusted foundation, not
            another tool to adopt, but the layer that makes everything you already run work
            together. This process can be divided in four steps -
          </motion.p>
        </div>

        <StepGrid steps={HOW_IT_WORKS_STEPS} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          className="flex flex-col items-center text-center mt-16 mb-32 gap-6"
        >
          <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
            The result: one version of the truth, available to everyone, fast enough to act on.
          </p>
          <AnimatedButton variant="ghost" href="/solutions">
            See how it works
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
