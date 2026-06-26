"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import { CULTURE_VALUES } from "@/lib/team-data";
import { EASE, fadeUp } from "@/lib/animations";

const CultureSection = memo(function CultureSection() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden" aria-labelledby="culture-heading">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08]"
          >
            <Image
              src="/iitil_building.png"
              alt="IITIL office building — team collaboration space"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-[#020817]/60 via-transparent to-[#2563eb]/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <div className="mb-6">
              <PillLabel>Company Culture</PillLabel>
            </div>
            <BlurText
              text="Built on Purpose, Driven by Results"
              animateBy="words"
              direction="bottom"
              delay={70}
              stepDuration={0.4}
              className="text-3xl md:text-4xl font-semibold tracking-tight text-white justify-start text-left"
            />
            <motion.p
              {...fadeUp(0.3)}
              id="culture-heading"
              className="mt-6 text-base md:text-lg text-white/50 leading-relaxed"
            >
              At IITIL, culture is not a poster on the wall — it is how we work every
              day. We lead with your problem, apply the right mix of strategy and
              technology, and measure every engagement by the value it creates.
            </motion.p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-[#60a5fa] mb-2">
                  Mission
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  We thrive to deliver reliable, scalable, intelligent solutions that
                  turn your data into strategic advantage, leaner operations, and
                  innovation that actually ships.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-[#60a5fa] mb-2">
                  Vision
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  To become a globally recognised leader in data intelligence and
                  technology — the partner you rely on to make sharper decisions and
                  grow on purpose, not by accident.
                </p>
              </div>
            </div>

            <ul className="mt-10 space-y-4" aria-label="Company values">
              {CULTURE_VALUES.map((value, i) => (
                <motion.li
                  key={value}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: EASE }}
                  className="flex items-start gap-3"
                >
                  <motion.span
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#2563eb] flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </motion.span>
                  <span className="text-sm text-white/60 leading-relaxed">{value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default CultureSection;
