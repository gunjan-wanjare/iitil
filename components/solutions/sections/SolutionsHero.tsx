"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { EASE } from "@/lib/animations";
import Image from "next/image";

export default function SolutionsHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  }); 
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Brand Logo - Completely hidden on mobile layouts */}
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

      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 40%, rgba(37,99,235,0.16) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute top-1/4 left-[12%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-20 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: EASE }}
          className="mb-8"
        >
          <PillLabel>SOLUTIONS</PillLabel>
        </motion.div>

        <BlurText
          as="h1"
          text="Full-stack intelligence, engineered end to end."
          animateBy="words"
          direction="bottom"
          delay={70}
          stepDuration={0.45}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center leading-[1.12] max-w-4xl justify-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: EASE }}
          className="mt-8 text-md md:text-lg text-white/50 text-center max-w-3xl leading-relaxed"
        >
          We bring data, AI, cloud and engineering under one roof, and one architecture. That
          means no handoff gaps, no four-vendor finger-pointing, and no &ldquo;that&apos;s out of
          scope&rdquo; when the pieces need to fit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.6, ease: EASE }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <AnimatedButton variant="primary" href="/reach-us">
            Talk to a specialist
          </AnimatedButton>
          <AnimatedButton variant="ghost" href="/reach-us">
            Not sure where to start
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}