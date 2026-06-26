"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedButton from "@/components/ui/AnimatedButton"; 

/* ────────────────────────────────────────────────────────────────
   Shared animation helpers
──────────────────────────────────────────────────────────────── */
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.7, ease: EASE },
});

/* ────────────────────────────────────────────────────────────────
   Section 1 — Hero
──────────────────────────────────────────────────────────────── */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: background moves up at half speed
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Parallax background layer ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 40%, rgba(37,99,235,0.13) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      {/* ── Floating gradient orbs ── */}
      <motion.div
        animate={{ y: [0, -24, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
        aria-hidden
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ y: [0, 14, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        aria-hidden
        className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-20 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
          className="mb-8"
        >
          <PillLabel>About Us</PillLabel>
        </motion.div>

        <BlurText
          text="Your data's all dots. We draw the line."
          animateBy="words"
          direction="bottom"
          delay={80}
          stepDuration={0.5}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center leading-[1.15] max-w-4xl justify-center"
        />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(2,8,23,1) 100%)",
        }}
      />
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Data Intelligence Visual (for Section 2 right panel)
──────────────────────────────────────────────────────────────── */
function DataIntelligenceVisual() {
  const nodes = [
    { label: "Analytics", color: "#2563eb", x: 50, y: 18 },
    { label: "AI / ML", color: "#3b82f6", x: 20, y: 46 },
    { label: "Cloud", color: "#60a5fa", x: 80, y: 46 },
    { label: "DevOps", color: "#1d4ed8", x: 35, y: 74 },
    { label: "Enterprise", color: "#2563eb", x: 65, y: 74 },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [1, 2],
    [3, 4],
  ];

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(10,20,40,0.95) 0%, rgba(7,14,26,1) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        minHeight: "380px",
      }}
    >
      {/* Top label */}
      <div className="absolute top-5 left-5 flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full bg-[#2563eb]"
          style={{ boxShadow: "0 0 6px rgba(37,99,235,0.8)" }}
        />
        <span className="text-xs text-white/30 font-medium tracking-widest uppercase">
          Data Intelligence Platform
        </span>
      </div>

      {/* SVG node graph */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        style={{ padding: "8%" }}
      >
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(37,99,235,0.2)"
            strokeWidth="0.6"
            strokeDasharray="2 2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={n.label}>
            {/* Outer glow ring */}
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="4.5"
              fill="none"
              stroke={n.color}
              strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
            />
            {/* Core dot */}
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="2.2"
              fill={n.color}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + i * 0.12,
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Labels — positioned absolutely */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          className="absolute flex items-center justify-center px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap"
          style={{
            left: `${n.x}%`,
            top: `${n.y + 10}%`,
            transform: "translateX(-50%)",
            background: `${n.color}18`,
            border: `1px solid ${n.color}35`,
            color: n.color,
          }}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
        >
          {n.label}
        </motion.div>
      ))}

      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section 2 — Company Overview
──────────────────────────────────────────────────────────────── */
function CompanyOverviewSection() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="mb-6">
              <PillLabel>Company Overview</PillLabel>
            </div>
            <div className="flex flex-col gap-4 text-white/50 text-base md:text-lg leading-relaxed">
              <p>
                You don&apos;t lack data. You lack a way to make it mean something.
              </p>
              <p>
                That&apos;s the gap we were built to close. We bring analytics, engineering,
                and systems that run your business together so your scattered data becomes
                a clear basis for decisions, not another dashboard nobody trusts.
              </p>
              <p>
                We don&apos;t lead with tools. We lead with your problem. Understand the
                business first, then apply the right mix of data strategy and technology to
                solve it. That order matters. It&apos;s why our work holds up in the real world
                and not just in the pitch deck.
              </p>
            </div>

            {/* Horizontal rule divider */}
            <div
              className="my-8 h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(37,99,235,0.4), transparent)",
              }}
            />

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2018" },
                { label: "Headquarters", value: "Hyderabad, India" },
                { label: "Parent Brand", value: "A YAKA Brand" },
                { label: "Entity", value: "Crediple India Pvt. Ltd." },
              ].map((f) => (
                <div key={f.label}>
                  <p className="text-xs text-white/30 tracking-widest uppercase mb-0.5">
                    {f.label}
                  </p>
                  <p className="text-sm font-semibold text-white/80">{f.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="h-[420px]"
          >
            <DataIntelligenceVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section 3 — Vision / Mission / Leadership
──────────────────────────────────────────────────────────────── */
const VML_CARDS = [
  {
    letter: "V",
    label: "Vision",
    color: "#2563eb",
    content:
      "We are here to become a globally recognised leader in data intelligence and technology, the partner you rely on to make sharper decisions and grow on purpose, not by accident.",
  },
  {
    letter: "M",
    label: "Mission",
    color: "#3b82f6",
    content:
      "We thrive to reliable, scalable, intelligent solutions that turn your data into strategic advantage, leaner operations, and innovation that actually ships.",
  },
  {
    letter: "L",
    label: "Leadership",
    color: "#60a5fa",
    content:
      "We're run by people who've done the work. Our leadership brings deep expertise across data science, technology architecture, and enterprise operations and a rare combination of vision and follow-through. We set the strategy and we deliver it. Every engagement is measured by the value it creates, not the slides it produces.",
  },
];

function VMLSection() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-6">
            <PillLabel>Here&apos;s what drives us.</PillLabel>
          </div>
          <BlurText
            text="Vision, Mission & Leadership"
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.45}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center justify-center"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VML_CARDS.map((card, i) => (
            <GlowCard key={card.label} delay={i * 0.12}>
              {/* Large letter */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl font-extrabold"
                style={{
                  background: `${card.color}18`,
                  border: `1px solid ${card.color}35`,
                  color: card.color,
                }}
              >
                {card.letter}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                {card.label}
              </h3>
              <p className="text-base text-white/50 leading-relaxed">
                {card.content}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section 4 — Our Approach Timeline (3 Steps)
──────────────────────────────────────────────────────────────── */
const TIMELINE_STEPS = [
  {
    num: "01",
    title: "We understand your business",
    description:
      "We dig into your real requirements and your real challenges before we design anything.",
    color: "#2563eb",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "We design the solution",
    description:
      "We architect systems that put your data to work, built to fit the problem, not the trend.",
    color: "#3b82f6",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "We execute with precision",
    description:
      "We implement cleanly, deliver on time, and prove it with measurable outcomes.",
    color: "#60a5fa",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll state safely across the timeline content space
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.25"],
  });

  // Maps vertical view bounds cleanly to top-down polygon clip coordinates
  const clipPathValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"]
  );

  return (
    <section ref={sectionRef} className="relative py-28 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6">
            <PillLabel>Our Approach</PillLabel>
          </div>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Desktop center line / Mobile left line */}
          <div
            className="absolute left-6 md:left-1/2 top-4 bottom-4 flex justify-center"
            style={{ width: "2px", transform: "translateX(-50%)" }}
          >
            {/* Background static Track Line */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: "rgba(255, 255, 255, 0.05)" }}
            />
            
            {/* Dynamic Animated Gradient Fill Layer */}
            <motion.div
              className="absolute inset-0 rounded-full origin-top"
              style={{
                background: "linear-gradient(to bottom, #2563eb 0%, #3b82f6 40%, #60a5fa 75%, rgba(147, 197, 253, 0.2) 100%)",
                clipPath: clipPathValue,
              }}
            />
          </div>

          {/* Steps list mapping */}
          <div className="flex flex-col gap-0">
            {TIMELINE_STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    delay: 0.1 + i * 0.15,
                    duration: 0.7,
                    ease: EASE,
                  }}
                  className={`relative flex items-start md:items-center gap-8 pb-16 md:pb-20
                    ${isEven ? "md:flex-row" : "md:flex-row-reverse"}
                    pl-16 md:pl-0`}
                >
                  {/* Desktop: half-width content block */}
                  <div className="flex-1 md:max-w-[calc(50%-3rem)]">
                    <div
                      className={`rounded-2xl p-7 ${isEven ? "md:ml-auto" : ""}`}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        boxShadow:
                          "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(37,99,235,0.08)",
                      }}
                    >
                      <span
                        className="text-xs font-bold tracking-widest mb-3 block"
                        style={{ color: step.color }}
                      >
                        STEP {step.num}
                      </span>
                      <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-base text-white/50 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Indicator Badge */}
                  <div className="absolute left-6 md:left-1/2 top-7 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10 bg-[#020817]"
                      style={{
                        border: `2px solid ${step.color}`,
                        boxShadow: `0 0 16px ${step.color}30`,
                        color: step.color,
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Spacer for structural balance */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section 5 — CTA
──────────────────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          className="relative rounded-3xl px-8 py-20 flex flex-col items-center text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.06) 100%)",
            backgroundImage:
              "radial-gradient(circle, rgba(37,99,235,0.1) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(37,99,235,0.2)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(37,99,235,0.1)",
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6">
              <PillLabel>Get Started</PillLabel>
            </div>

            <BlurText
              text="Let's turn your mess into momentum"
              animateBy="words"
              direction="bottom"
              delay={80}
              stepDuration={0.4}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-3xl"
            />

            <motion.p
              {...fadeUp(0.4)}
              className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed"
            >
              That&apos;s the whole job. Everything else is detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, ease: EASE }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
            >
              <AnimatedButton variant="primary" href="/reach-us">
                Get In Touch
              </AnimatedButton>
              <AnimatedButton variant="ghost" href="/reach-us">
                Talk to a Specialist
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Root export
──────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020817]">
      <Navbar />
      <HeroSection />
      <CompanyOverviewSection />
      <VMLSection />
      <TimelineSection />
      <CTASection />
      <Footer />
    </main>
  );
}
