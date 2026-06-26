"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image"; // Imported for optimized SVG handling
import BlurText from "@/components/ui/BlurText";
import AnimatedButton from "@/components/ui/AnimatedButton";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";

const MARQUEE_LOGOS = [
  "Data Intelligence",
  "Enterprise AI",
  "Machine Learning",
  "Cloud DevOps",
  "Analytics",
  "Enterprise Engineering",
];

const HERO_METRICS = [
  { value: "150+", label: "Programs Delivered" },
  { value: "12+", label: "Industries Served" },
  { value: "4", label: "Continents Covered" },
  { value: "6 weeks", label: "Time-to-Value" },
] as const;

const PROBLEMS = [
  {
    title: "Silos & Manual Processes",
    description:
      "Manual handoffs slow everyone down. Collaboration stalls, visibility disappears, and the left hand stops knowing what the right is doing.",
  },
  {
    title: "High Operational Costs",
    description:
      "Legacy systems are not only expensive to run but also slow to change. You're paying premium rates to move at dial-up speed.",
  },
  {
    title: "Lack of Automation",
    description:
      "Manual work also means delays, errors, and missed opportunities. Your best people should not be stuck doing work a system should be handling.",
  },
] as const;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xRow1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex flex-col items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(37,99,235,0.12) 0%, transparent 70%)",
      }}
    >
      {/* Brand Logo in Top Right Corner */}
      <div className="absolute top-24 right-6 md:top-24 md:right-12 z-20 ">
        <Image 
          src="/yaka_brand_logo.png"
          alt="Yaka Brand Logo" 
          width={80} 
          height={40}
          priority
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-16 max-w-6xl mx-auto w-full min-h-screen justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-10 backdrop-blur-sm max-w-3xl"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#2563eb] flex-shrink-0"
            style={{ boxShadow: "0 0 6px rgba(37,99,235,0.8)" }}
          />
          <span className="text-sm text-white/70 font-medium tracking-wide leading-snug">
            Data-driven companies outperform data hoarders by 2.3×
          </span>
        </motion.div>

        <BlurText
          text="Multiply Your Growth with Your Own Data"
          animateBy="words"
          direction="bottom"
          delay={80}
          stepDuration={0.5}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center leading-[1.15] max-w-4xl justify-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-8 text-lg text-white/50 text-center max-w-4xl leading-relaxed flex flex-col gap-4"
        >
          <p>
            IITIL unifies your fragmented systems, workflows, and insights into one intelligent, custom ecosystem. We turn scattered information into measurable outcomes tailored entirely to you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <AnimatedButton variant="primary" href="/reach-us">
            Say less. Let&apos;s build.
          </AnimatedButton>
          <AnimatedButton variant="ghost" href="/reach-us">
            Talk to a data expert
          </AnimatedButton>
        </motion.div>

        {/* Hero metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {HERO_METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className=""
              
            >
              <p className="text-3xl md:text-4xl font-semibold text-white tabular-nums">
                {metric.value}
              </p>
              <p className="mt-2 text-xs md:text-sm text-white leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* The Problem */}
      {/* <div id="problem" className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="mb-5">
            <PillLabel>The Problem</PillLabel>
          </div>
          <BlurText
            text="Too many dashboards never added up to better decisions."
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 text-lg text-white/45 max-w-3xl leading-relaxed"
          >
            The truth is, most enterprises aren&apos;t short on data, they&apos;re short on
            agreement. Three things usually stand in the way:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {PROBLEMS.map((problem, i) => (
            <GlowCard key={problem.title} delay={i * 0.08}>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {problem.title}
              </h3>
              <p className="text-base text-white/50 leading-relaxed">{problem.description}</p>
            </GlowCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center text-center gap-6"
        >
          <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
            Not a tooling failure. A connection failure. And it&apos;s fixable!
          </p>
          <AnimatedButton variant="ghost" href="/solutions">
            Sounds like us. Now what?
          </AnimatedButton>
        </motion.div>
      </div> */}

      {/* Marquee */}
      <div className="relative z-10 w-full pb-20 max-w-6xl mx-auto overflow-hidden">
        <div
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          <div className="flex overflow-hidden mb-4 select-none">
            <motion.div style={{ x: xRow1 }} className="flex whitespace-nowrap gap-16">
              {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((logo, i) => (
                <span
                  key={i}
                  className="text-sm md:text-base text-white/30 tracking-widest uppercase font-medium flex items-center gap-16"
                >
                  {logo}
                  <span className="text-white/15">•</span>
                </span>
              ))}
            </motion.div>
          </div>
          <div className="flex overflow-hidden select-none">
            <motion.div style={{ x: xRow2 }} className="flex whitespace-nowrap gap-16">
              {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS, ...MARQUEE_LOGOS]
                .reverse()
                .map((logo, i) => (
                  <span
                    key={i}
                    className="text-sm md:text-base text-white/20 tracking-widest uppercase font-medium flex items-center gap-16"
                  >
                    {logo}
                    <span className="text-white/10">•</span>
                  </span>
                ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}