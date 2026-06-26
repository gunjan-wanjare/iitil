"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

interface VisualProps {
  accent?: string;
}

/* ─── Healthcare: patient analytics dashboard ─── */
export const HealthcareVisual = memo(function HealthcareVisual({
  accent = "#2563eb",
}: VisualProps) {
  const radius = 48;
  const circ = 2 * Math.PI * radius;
  const percent = 0.72;

  return (
    <div
      className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden p-6 flex flex-col"
      style={{
        background:
          "linear-gradient(145deg, rgba(16,185,129,0.12) 0%, rgba(9,15,28,0.95) 50%, rgba(37,99,235,0.08) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${accent}20`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between mb-5">
        <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
          Patient Analytics
        </span>
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-medium"
          style={{ background: `${accent}20`, color: accent }}
        >
          Live
        </span>
      </div>

      <div className="relative z-10 flex-1 flex items-center gap-6">
        <div className="relative w-28 h-28 flex-shrink-0">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="12"
            />
            <motion.circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke={accent}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circ}
              initial={{ strokeDashoffset: circ }}
              whileInView={{ strokeDashoffset: circ * (1 - percent) }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-white">72%</span>
            <span className="text-[9px] text-white/40">Outcomes</span>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-2">
          {[
            { label: "Readmissions", value: "-35%", color: accent },
            { label: "Record Access", value: "50%↑", color: "#2563eb" },
            { label: "Risk Score", value: "Low", color: "#3b82f6" },
            { label: "Efficiency", value: "+28%", color: "#60a5fa" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: EASE }}
              className="rounded-lg p-2.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-[9px] text-white/40 mb-0.5">{item.label}</p>
              <p className="text-sm font-semibold" style={{ color: item.color }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-4 flex items-end gap-2 h-10">
        {[65, 78, 82, 90, 88, 95].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              background: `linear-gradient(to top, ${accent}40, ${accent}90)`,
              height: `${h * 0.35}px`,
              transformOrigin: "bottom",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: EASE }}
          />
        ))}
      </div>
    </div>
  );
});

/* ─── Finance: fraud detection dashboard ─── */
export const FinanceVisual = memo(function FinanceVisual({
  accent = "#2563eb",
}: VisualProps) {
  return (
    <div
      className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden p-6 flex flex-col"
      style={{
        background:
          "linear-gradient(145deg, rgba(37,99,235,0.12) 0%, rgba(9,15,28,0.95) 50%, rgba(37,99,235,0.08) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${accent}20`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between mb-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
          Fraud Detection
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Monitoring
        </span>
      </div>

      <div className="relative z-10 space-y-2 mb-4">
        {[
          { type: "Blocked", amount: "₹2.4M", risk: "High", color: "#ef4444" },
          { type: "Flagged", amount: "₹840K", risk: "Medium", color: "#60a5fa" },
          { type: "Cleared", amount: "₹18.2M", risk: "Low", color: accent },
        ].map((tx, i) => (
          <motion.div
            key={tx.type}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: EASE }}
            className="flex items-center justify-between rounded-lg px-3 py-2.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: tx.color }}
              />
              <span className="text-xs text-white/70">{tx.type}</span>
            </div>
            <span className="text-xs font-semibold text-white">{tx.amount}</span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{ background: `${tx.color}20`, color: tx.color }}
            >
              {tx.risk}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex-1 flex items-end gap-1.5">
        {[4, 6, 5, 8, 7, 9, 6, 10, 8, 11, 9, 12].map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              background:
                i >= 10
                  ? `linear-gradient(to top, ${accent}, #3b82f6)`
                  : `rgba(37,99,235,${0.15 + i * 0.04})`,
              height: `${h * 8}px`,
              transformOrigin: "bottom",
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.04, duration: 0.45, ease: EASE }}
          />
        ))}
      </div>

      <div className="relative z-10 mt-3 flex justify-between text-[9px] text-white/25">
        <span>00:00</span>
        <span>Real-time transactions</span>
        <span>Now</span>
      </div>
    </div>
  );
});

/* ─── Retail: commerce analytics ─── */
export const RetailVisual = memo(function RetailVisual({
  accent = "#1d4ed8",
}: VisualProps) {
  return (
    <div
      className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden p-6 flex flex-col"
      style={{
        background:
          "linear-gradient(145deg, rgba(245,158,11,0.10) 0%, rgba(9,15,28,0.95) 50%, rgba(236,72,153,0.08) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${accent}20`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between mb-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
          Commerce Analytics
        </span>
        <span
          className="text-[10px] font-medium"
          style={{ color: accent }}
        >
          Forecast Active
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "Inventory", value: "-42%", sub: "Cost ↓" },
          { label: "Retention", value: "+55%", sub: "Customers" },
          { label: "AOV", value: "+38%", sub: "Growth" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: EASE }}
            className="rounded-xl p-3 text-center"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p className="text-[9px] text-white/40 mb-1">{stat.label}</p>
            <p className="text-lg font-bold" style={{ color: accent }}>
              {stat.value}
            </p>
            <p className="text-[9px] text-white/30">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex-1">
        <p className="text-[10px] text-white/35 mb-2">Demand Forecast</p>
        <div className="flex items-end gap-1.5 h-24">
          {[5, 7, 6, 9, 8, 11, 10, 13, 12, 15].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                background:
                  i >= 8
                    ? `linear-gradient(to top, ${accent}, #2563eb)`
                    : `rgba(245,158,11,${0.2 + i * 0.05})`,
                height: `${h * 7}px`,
                transformOrigin: "bottom",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 + i * 0.05, duration: 0.45, ease: EASE }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-3 flex flex-wrap gap-1.5">
        {["Segment A", "VIP", "Returning", "New"].map((seg, i) => (
          <motion.span
            key={seg}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 + i * 0.06 }}
            className="px-2 py-1 rounded-full text-[9px] font-medium text-white/50"
            style={{
              background: `${accent}12`,
              border: `1px solid ${accent}25`,
            }}
          >
            {seg}
          </motion.span>
        ))}
      </div>
    </div>
  );
});
