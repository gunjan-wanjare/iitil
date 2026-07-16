"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function CaseStudies() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Proof beats promises Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6">
            <PillLabel>Proof Beats Promises</PillLabel>
          </div>
          <BlurText
            as="h2"
            text="Real programmes. Real numbers."
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.45}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center"
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Case Study 1 — Data Intelligence */}
          <GlowCard delay={0}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)" }}
                >
                  <svg className="w-5 h-5 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 tracking-widest uppercase">Data Intelligence</p>
                  <p className="text-sm font-semibold text-white">Fortune 500 Retailer</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
                ))}
              </div>
            </div>

            {/* Image Container with visibility fix */}
            <div className="relative w-full h-52 rounded-xl overflow-hidden bg-slate-900 border border-white/[0.08] mb-6">
              <Image 
                src="/data_intelligence.jpg" 
                alt="Data Intelligence Ecosystem Analytics" 
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <h4 className="text-xl font-semibold text-white mb-2">
                Turning disconnected retail data into decision intelligence.
              </h4>
              <p className="text-base text-white/50 leading-relaxed mb-4">
                Sales, inventory, and customer behaviour lived in different worlds. We built one
                analytics ecosystem that let the business see - and act - in real time.
              </p>
              <p className="text-sm font-medium text-white/60 mb-4">
                40% Operational efficiency improvement · 32% Revenue growth
              </p>
              <AnimatedButton variant="ghost" href="/case-studies" className="text-sm px-5 py-2.5">
                Read Case Studies
              </AnimatedButton>
            </div>
          </GlowCard>

          {/* Case Study 2 — AI & ML */}
          <GlowCard delay={0.1}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)" }}
                >
                  <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 tracking-widest uppercase">AI & Machine Learning</p>
                  <p className="text-sm font-semibold text-white">Global Manufacturing Leader</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
                ))}
              </div>
            </div>

            {/* Image Container with visibility fix */}
            <div className="relative w-full h-52 rounded-xl overflow-hidden bg-slate-900 border border-white/[0.08] mb-6">
              <Image 
                src="/ai_ml_learning.jpg" 
                alt="AI Demand Forecasting Performance Matrix" 
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <h4 className="text-xl font-semibold text-white mb-2">
                Making supply chains smarter with AI.
              </h4>
              <p className="text-base text-white/50 leading-relaxed mb-4">
                Demand forecasting was a guessing game with expensive consequences. We built
                AI-enabled models that sharpened planning and cut the waste.
              </p>
              <p className="text-sm font-medium text-white/60 mb-4">
                $2.4M Annual savings · 98.5% Forecast accuracy
              </p>
              <AnimatedButton variant="ghost" href="/case-studies" className="text-sm px-5 py-2.5">
                Read Case Studies
              </AnimatedButton>
            </div>
          </GlowCard>

          {/* Case Study 3 — Cloud Migration (Full Width) */}
          <GlowCard delay={0.2} className="md:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 md:items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.25)" }}
                  >
                    <svg className="w-5 h-5 text-[#60a5fa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 tracking-widest uppercase">Cloud Migration</p>
                    <p className="text-sm font-semibold text-white">Financial Services Firm</p>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">
                  Cloud migration without the business holding its breath.
                </h4>
                <p className="text-base text-white/50 leading-relaxed mb-4">
                  Legacy infrastructure, zero appetite for downtime. We delivered a seamless,
                  secure transformation at enterprise scale - uptime fully intact.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { label: "100% Migration uptime", color: "#60a5fa" },
                    { label: "3.5× Performance improvement", color: "#2563eb" },
                  ].map((stat) => (
                    <span
                      key={stat.label}
                      className="text-sm font-semibold px-3 py-1.5 rounded-full"
                      style={{
                        background: `${stat.color}15`,
                        border: `1px solid ${stat.color}30`,
                        color: stat.color,
                      }}
                    >
                      {stat.label}
                    </span>
                  ))}
                </div>
                <AnimatedButton variant="ghost" href="/case-studies" className="text-sm px-5 py-2.5">
                  Read Case Studies
                </AnimatedButton>
              </div>
              
              {/* Image Container with visibility fix */}
              <div className="flex-1 w-full relative h-52 md:h-64 rounded-xl overflow-hidden bg-slate-900 border border-white/[0.08]">
                <Image 
                  src="/cloud_migration.jpg" 
                  alt="Infrastructure Zero Downtime Real-time Analytics System" 
                  fill
                  sizes="(max-w-1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}