"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import { EASE } from "@/lib/animations";
import Image from "next/image"; 

export default function TeamHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden"
      aria-labelledby="team-hero-heading"
    >

       <div className="hidden md:block md:absolute md:top-28 md:right-12 z-30 pointer-events-none">
        <div className="pointer-events-auto">
          <Image 
            src="/yaka_brand_logo.png"
            alt="Yaka Brand Logo" 
            width={80} 
            height={40}
            priority
            className="w-20 h-auto"
          />
        </div>
      </div>

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
              "radial-gradient(circle, rgba(255,255,255,0.065) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -24, 0], opacity: [0.28, 0.52, 0.28] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute top-1/4 left-[14%] w-96 h-96 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.12, 0.32, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        aria-hidden
        className="absolute bottom-1/3 right-[12%] w-72 h-72 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-20 max-w-5xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
          className="mb-8"
        >
          <PillLabel>Our Team</PillLabel>
        </motion.div>

        <BlurText
          text="Meet the People Behind Our Success"
          animateBy="words"
          direction="bottom"
          delay={80}
          stepDuration={0.5}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center leading-[1.15] max-w-4xl justify-center"
        />

        <motion.p
          id="team-hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
          className="mt-8 text-lg md:text-xl text-white/50 text-center max-w-3xl leading-relaxed"
        >
          The people behind IITIL combine deep expertise in data intelligence,
          engineering, and enterprise operations with a shared commitment to
          delivering outcomes that matter — not just deliverables.
        </motion.p>
      </div>

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
