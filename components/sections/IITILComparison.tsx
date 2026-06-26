"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import { EASE } from "@/lib/animations";

const COMPARISON_ROWS = [
  {
    criterion: "Approach",
    iitil: "One connected full-stack team",
    vendor: "Four disconnected vendors",
  },
  {
    criterion: "Team on your account",
    iitil: "Senior specialists, every time",
    vendor: "Junior-heavy, varies",
  },
  {
    criterion: "Starting point",
    iitil: "Data-first foundations",
    vendor: "Tool-first, data later",
  },
  {
    criterion: "AI delivery",
    iitil: "Production systems, with evals",
    vendor: "Demos that stall in pilot",
  },
  {
    criterion: "Speed to value",
    iitil: "Outcomes shipped weekly",
    vendor: "Months before anything ships",
  },
  {
    criterion: "Pricing",
    iitil: "Fixed, pod, or value-based",
    vendor: "Open-ended time & materials",
  },
  {
    criterion: "Security & governance",
    iitil: "Built in by default",
    vendor: "Bolted on at audit time",
  },
  {
    criterion: "After go-live",
    iitil: "Adoption & optimisation included",
    vendor: "Hand over and disappear",
  },
] as const;

export default function IITILComparison() {
  return (
    <section id="why-us" className="relative py-32 px-6 overflow-hidden bg-[#020617]">
      {/* Structural backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.02)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-4">
            <PillLabel>Why Us</PillLabel>
          </div>
          <BlurText
            text="Same brief. Very different partner."
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
            Most providers can list the same services. Here's what actually separates a partner from a vendor:
          </motion.p>
        </div>

        {/* Comparison Matrix Container */}
        <div className="w-full bg-transparent overflow-hidden">
          
          {/* Table Header Row — Adjusted spans to balance and push items rightwards */}
          <div className="grid grid-cols-1 md:grid-cols-12 text-xs font-mono font-semibold uppercase tracking-wider text-white/40 pb-6 px-4 md:px-8 gap-4 relative">
            <div className="hidden md:block md:col-span-3 md:pl-4">What sets a partner apart</div>
            <div className="text-blue-400 md:col-span-5 md:pl-8">IITIL</div>
            <div className="hidden md:block text-white/30 md:col-span-4">A typical provider</div>

            {/* Horizontal Line below headers */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[1px]" 
              style={{ background: "linear-gradient(to right, transparent 0%, rgba(59,130,246,0.25) 15%, rgba(59,130,246,0.25) 85%, transparent 100%)" }}
            />
          </div>

          {/* Matrix Rows */}
          <div className="divide-y-0">
            {COMPARISON_ROWS.map((row, i) => (
              <motion.div
                key={row.criterion}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04, duration: 0.4, ease: EASE }}
                className="grid grid-cols-1 md:grid-cols-12 p-5 md:p-6 items-center gap-4 relative transition-colors duration-200 hover:bg-white/[0.01] rounded-xl"
              >
                {/* 1. Criterion Title */}
                <div className="text-sm font-medium text-white/50 md:text-white font-sans md:col-span-3 md:pl-4">
                  <span className="md:hidden block text-xs font-mono font-semibold uppercase text-white/20 mb-1">
                    What sets a partner apart
                  </span>
                  {row.criterion}
                </div>

                {/* 2. IITIL Column (With Green Checkmark) - Extra padding applied to nudge right */}
                <div className="text-base font-medium text-white md:text-[#e2e8f0] flex items-center gap-3 h-full md:col-span-5 md:pl-8">
                  <span className="md:hidden block text-xs font-mono font-semibold uppercase text-blue-500/60 mb-0.5 w-full">
                    IITIL
                  </span>

                  {/* Green Tick Wrapper */}
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                  </span>

                  <span className="flex-1">{row.iitil}</span>
                </div>

                {/* 3. Standard Vendor Column */}
                <div className="text-sm text-white/40 md:text-white/45 font-light h-full flex items-center md:col-span-4">
                  <span className="md:hidden block text-xs font-mono font-semibold uppercase text-white/20 mb-0.5 w-full">
                    A typical provider
                  </span>
                  {row.vendor}
                </div>

                {/* Horizontal Line below row items */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-[1px]" 
                  style={{ background: "linear-gradient(to right, transparent 0%, rgba(59,130,246,0.12) 15%, rgba(59,130,246,0.12) 85%, transparent 100%)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}