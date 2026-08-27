"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BlurText from "@/components/ui/BlurText";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { introConfig } from "@/components/intro/introConfig";
import { useIntro } from "@/components/intro/useIntro";

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
  { value: "12+", label: "Industries Serving" },
  { value: "₹100Cr+", label: "Portfolio Managing" },
] as const;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { phase } = useIntro();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xRow1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  // Hero YAKA only while parked at top — never during dock or when navbar owns it.
  const showHeroLogo = phase === "hero";

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
      {/*
        Hero logo + intro anchor — the REAL logo slot (top-right).
        Always in the DOM with real width/height so getBoundingClientRect works
        during flying; opacity hides it until landing.
      */}
      <div
        id={introConfig.heroAnchorId}
        className="hidden md:flex md:absolute md:top-28 md:right-12 z-30 items-center justify-center pointer-events-none md:w-14 md:h-14 xl:w-16 xl:h-16 transition-opacity duration-300 ease-out"
        style={{
          opacity: showHeroLogo ? 1 : 0,
        }}
        aria-hidden={!showHeroLogo}
      >
        <Image
          src={introConfig.brandLogo}
          alt="Yaka Brand Logo"
          width={introConfig.heroLogoSize}
          height={introConfig.heroLogoSize}
          priority
          className="w-full h-full object-contain"
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

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 md:pt-32 pb-16 max-w-6xl mx-auto w-full min-h-[calc(100vh-80px)] md:min-h-screen justify-center">
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
          as="h1"
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
          <AnimatedButton variant="ghost" href="/solutions">
            Explore Solutions
          </AnimatedButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 flex flex-row items-start justify-between gap-2 md:gap-6 w-full max-w-4xl"
        >
          {HERO_METRICS.map((metric) => (
            <div key={metric.label} className="flex-1 px-1 text-center">
              <p className="text-[6.5vw] sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tabular-nums leading-none">
                {metric.value}
              </p>
              <p className="mt-2 text-[2.8vw] sm:text-xs md:text-sm text-white/70 leading-tight max-w-[120px] sm:max-w-none mx-auto">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

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
