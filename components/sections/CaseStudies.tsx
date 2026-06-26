"use client";

import { motion } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedButton from "@/components/ui/AnimatedButton";

const LIVE_OUTCOMES = [
  { value: "$140M+", label: "Client value delivered" },
  { value: "98%", label: "Repeat engagement rate" },
  { value: "98.7%", label: "Delivery success rate" },
  { value: "32%", label: "Average revenue impact" },
  { value: "98.5%", label: "Model accuracy across selected AI programmes" },
] as const;

/* ─── Donut Chart ─── */
function DonutChart() {
  const radius = 52;
  const circ = 2 * Math.PI * radius;
  const percent = 0.75;

  return (
    <div className="flex items-center gap-8">
      <div className="relative w-32 h-32 flex-shrink-0">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="url(#donutGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: [circ, circ * (1 - percent)] }}
            viewport={{ once: false }}
            transition={{
              duration: 1.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              repeat: Infinity,
              repeatDelay: 1.5,
              repeatType: "loop",
            }}
            style={{ strokeDashoffset: circ * (1 - percent) }}
          />
          <defs>
            <linearGradient id="donutGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-white">40%</span>
          <span className="text-[10px] text-white/40">Efficiency</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {[
          { label: "Efficiency Gain", value: "40%", color: "#60a5fa" },
          { label: "Revenue Growth", value: "32%", color: "#2563eb" },
          { label: "Hours Saved / mo", value: "200h", color: "#1d4ed8" },
        ].map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
              <span className="text-sm text-white/50">{item.label}</span>
            </div>
            <span className="text-sm font-semibold text-white">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Bar Chart ─── */
function BarChart() {
  const bars = [3, 5, 4, 7, 6, 8, 7, 9, 8, 10];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-3 h-24">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              background:
                i === bars.length - 1
                  ? "linear-gradient(to top, #1d4ed8, #2563eb)"
                  : `rgba(37,99,235,${0.2 + i * 0.05})`,
              height: `${h * 10}%`,
              transformOrigin: "bottom",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: [0, h / 10, h / 10, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 2.5,
              delay: i * 0.05,
              repeat: Infinity,
              repeatDelay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-white/25">
        {["Jan", "Mar", "May", "Jul", "Sep"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Uptime Meter ─── */
function UptimeMeter() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end gap-1.5 h-20">
        {Array.from({ length: 30 }, (_, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              background:
                i > 24
                  ? "linear-gradient(to top, #2563eb, #60a5fa)"
                  : "rgba(37,99,235,0.3)",
              transformOrigin: "bottom",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.4,
              delay: i * 0.03,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#60a5fa]" style={{ boxShadow: "0 0 6px rgba(96,165,250,0.5)" }} />
          <span className="text-sm text-white/60">100% Uptime during migration</span>
        </div>
        <span className="text-xs text-[#60a5fa] font-semibold px-2 py-1 rounded-full" style={{ background: "rgba(37,99,235,0.12)" }}>LIVE</span>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Live Outcomes */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6">
            <PillLabel>Live Outcomes</PillLabel>
          </div>
          <BlurText
            text="Less noise. More measurable impact."
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.45}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {LIVE_OUTCOMES.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="rounded-2xl px-4 py-6 text-center"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-2xl md:text-3xl font-semibold text-[#2563eb] tabular-nums">
                {metric.value}
              </p>
              <p className="mt-2 text-xs md:text-sm text-white/45 leading-snug">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-base text-white/40 mb-24"
        >
          Numbers we&apos;re happy to be held to.
        </motion.p>

        {/* Proof beats promises */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6">
            <PillLabel>Proof Beats Promises</PillLabel>
          </div>
          <BlurText
            text="Real programmes. Real numbers."
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.45}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center justify-center"
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

            <DonutChart />

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
                Read the story
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

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-semibold text-white">$2.4M</span>
              <div className="flex items-center gap-1 text-[#60a5fa] text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
                98.5%
              </div>
              <span className="text-sm text-white/40">Accuracy Rate</span>
            </div>

            <BarChart />

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
                Read the story
              </AnimatedButton>
            </div>
          </GlowCard>

          {/* Case Study 3 — Cloud Migration (full width) */}
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
                  Read the story
                </AnimatedButton>
              </div>
              <div className="flex-1">
                <UptimeMeter />
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
