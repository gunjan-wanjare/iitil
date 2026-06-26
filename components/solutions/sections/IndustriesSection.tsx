"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  DollarSign,
  Heart,
  ShoppingBag,
  Settings,
  Laptop,
  Radio,
} from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { EASE } from "@/lib/animations";

const INDUSTRIES = [
  { title: "Financial services", icon: DollarSign },
  { title: "Healthcare", icon: Heart },
  { title: "Retail and e-commerce", icon: ShoppingBag },
  { title: "Manufacturing", icon: Settings },
  { title: "Technology", icon: Laptop },
  { title: "Telecommunications", icon: Radio },
] as const;

export default function IndustriesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-12%"]);

  return (
    <section ref={ref} className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
        <div className="flex flex-col items-center text-center">
          <div className="mb-5">
            <PillLabel>Who We Do This For</PillLabel>
          </div>
          <BlurText
            text="Intelligence for industries that can't afford to guess."
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
            className="mt-6 text-base text-white/45 max-w-xl leading-relaxed"
          >
            -we bring the same connected approach and adapt it to the stakes of your sector.
          </motion.p>
        </div>
      </div>

      <motion.div style={{ x }} className="flex gap-5 px-6 will-change-transform">
        {INDUSTRIES.map((industry, i) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
              whileHover={{ y: -6 }}
              className="flex-shrink-0 w-[280px] rounded-2xl p-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(37,99,235,0.04) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(37,99,235,0.3)",
                }}
              >
                <Icon className="w-5 h-5 text-[#2563eb]" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white tracking-tight">{industry.title}</h3>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="flex justify-center mt-12">
        <AnimatedButton variant="ghost" href="/portfolio">
          See industry work →
        </AnimatedButton>
      </div>
    </section>
  );
}
