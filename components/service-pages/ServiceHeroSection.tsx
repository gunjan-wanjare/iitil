"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { EASE } from "./constants";

interface ServiceHeroSectionProps {
  id: string;
  pillLabel: string;
  title: string;
  descriptionPrimary: string;
  descriptionSecondary: string;
}

export default function ServiceHeroSection({
  id,
  pillLabel,
  title,
  descriptionPrimary,
  descriptionSecondary,
}: ServiceHeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={ref}
      id={id}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none will-change-transform"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 40%, rgba(37,99,235,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -22, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute top-1/4 left-[15%] w-96 h-96 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.15, 0.38, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        aria-hidden
        className="absolute bottom-1/3 right-[12%] w-72 h-72 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.1, 0.28, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        aria-hidden
        className="absolute top-[45%] right-[30%] w-48 h-48 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-12 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
          className="mb-8"
        >
          <PillLabel>{pillLabel}</PillLabel>
        </motion.div>

        <BlurText
          as="h1"
          text={title}
          animateBy="words"
          direction="bottom"
          delay={80}
          stepDuration={0.5}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center leading-[1.15] max-w-4xl justify-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
          className="mt-8 text-lg md:text-xl text-white/50 text-center max-w-3xl leading-relaxed"
        >
          {descriptionPrimary}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7, ease: EASE }}
          className="mt-4 text-base text-white/35 text-center max-w-3xl leading-relaxed"
        >
          {descriptionSecondary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.7, ease: EASE }}
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
    </section>
  );
}
