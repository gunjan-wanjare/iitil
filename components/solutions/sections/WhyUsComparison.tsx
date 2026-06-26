"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  Users,
  Award,
  Compass,
  Bot,
  Zap,
  Coins,
  Shield,
  RefreshCw,
} from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import { EASE } from "@/lib/animations";

const ROWS = [
  {
    label: "Approach",
    icon: Users,
    iitil: "One connected full-stack team",
    typical: "Four disconnected vendors",
  },
  {
    label: "Team on your account",
    icon: Award,
    iitil: "Senior specialists, every time",
    typical: "Junior-heavy, varies",
  },
  {
    label: "Starting point",
    icon: Compass,
    iitil: "Data-first foundations",
    typical: "Tool-first, data later",
  },
  {
    label: "AI delivery",
    icon: Bot,
    iitil: "Production systems, with evals",
    typical: "Demos that stall in pilot",
  },
  {
    label: "Speed to value",
    icon: Zap,
    iitil: "Outcomes shipped weekly",
    typical: "Months before anything ships",
  },
  {
    label: "Pricing",
    icon: Coins,
    iitil: "Fixed, pod, or value-based",
    typical: "Open-ended time & materials",
  },
  {
    label: "Security & governance",
    icon: Shield,
    iitil: "Built in by default",
    typical: "Bolted on at audit time",
  },
  {
    label: "After go-live",
    icon: RefreshCw,
    iitil: "Adoption & optimisation included",
    typical: "Hand over and disappear",
  },
] as const;

export default function WhyUsComparison() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <section id="why-us" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.02)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-4">
            <PillLabel>Why Us</PillLabel>
          </div>
          <BlurText
            text="Same brief. Very different partner."
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white text-center justify-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Most providers can list the same services. Here&apos;s what actually separates a
            partner from a vendor:
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="hidden lg:block rounded-3xl overflow-hidden bg-[#070e1e]/60 border border-white/[0.06] backdrop-blur-md shadow-2xl"
        >
          <div className="grid grid-cols-12 gap-4 px-8 py-6 border-b border-white/[0.08] bg-white/[0.01] items-center text-xs font-mono uppercase tracking-widest text-white/40">
            <div className="col-span-4">What sets a partner apart</div>
            <div className="col-span-4 text-blue-400 font-semibold tracking-normal text-base normal-case">
              IITIL
            </div>
            <div className="col-span-4 pl-2 normal-case">A typical provider</div>
          </div>

          <div className="divide-y divide-white/[0.04]">
            {ROWS.map((row) => {
              const IconComponent = row.icon;
              const isHovered = hoveredRow === row.label;

              return (
                <div
                  key={row.label}
                  onMouseEnter={() => setHoveredRow(row.label)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className="grid grid-cols-12 gap-4 px-8 py-5 items-center transition-colors duration-200"
                  style={{
                    backgroundColor: isHovered ? "rgba(255,255,255,0.015)" : "transparent",
                  }}
                >
                  <div className="col-span-4 flex items-center gap-3.5">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors duration-200 ${
                        isHovered
                          ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                          : "bg-white/[0.02] border-white/[0.06] text-white/40"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-white/80">{row.label}</span>
                  </div>

                  <div className="col-span-4 pr-4">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-blue-400" />
                      </div>
                      <span className="text-sm font-medium text-white tracking-tight">
                        {row.iitil}
                      </span>
                    </div>
                  </div>

                  <div className="col-span-4 pl-2">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                        <X className="w-2.5 h-2.5 text-white/30" />
                      </div>
                      <span className="text-sm text-white/45 font-light">{row.typical}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="lg:hidden space-y-4">
          {ROWS.map((row, i) => {
            const IconComponent = row.icon;
            return (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: EASE }}
                className="rounded-2xl p-5 bg-[#070e1e]/60 border border-white/[0.06] backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4 border-b border-white/[0.04] pb-3">
                  <div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    {row.label}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-blue-400 font-mono uppercase tracking-wider mb-0.5">
                        IITIL
                      </p>
                      <p className="text-sm text-white/90 font-medium">{row.iitil}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pt-1">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                      <X className="w-2.5 h-2.5 text-white/30" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/35 font-mono uppercase tracking-wider mb-0.5">
                        A typical provider
                      </p>
                      <p className="text-sm text-white/50 font-light">{row.typical}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-20 text-center max-w-3xl mx-auto px-4 text-lg md:text-xl text-white/70 leading-relaxed font-light"
        >
          We&apos;re not the only ones who can do the work. We&apos;re the ones who won&apos;t make
          you chase us to get it done.
        </motion.p>
      </div>
    </section>
  );
}
