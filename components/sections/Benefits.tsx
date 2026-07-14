"use client";

import { motion } from "framer-motion";
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
import GlowCard from "@/components/ui/GlowCard";

const INDUSTRIES = [
  {
    icon: <DollarSign className="w-6 h-6 text-[#2563eb]" strokeWidth={1.5} />,
    title: "Financial Services",
    metric: "25+",
    metricLabel: "active projects",
    description:
      "Risk intelligence, reporting automation, fraud analytics, customer insight, and operational visibility - because \"approximately\" doesn't fly in finance.",
  },
  {
    icon: <Heart className="w-6 h-6 text-[#2563eb]" strokeWidth={1.5} />,
    title: "Healthcare",
    metric: "18+",
    metricLabel: "active projects",
    description:
      "Secure data platforms, patient intelligence, workflow automation, compliance-ready systems, and analytics that respect the stakes.",
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-[#2563eb]" strokeWidth={1.5} />,
    title: "Retail & E-Commerce",
    metric: "32+",
    metricLabel: "active projects",
    description:
      "Customer intelligence, inventory optimisation, demand forecasting, personalisation, and revenue analytics that move with the market.",
  },
  {
    icon: <Settings className="w-6 h-6 text-[#2563eb]" strokeWidth={1.5} />,
    title: "Manufacturing",
    metric: "22+",
    metricLabel: "active projects",
    description:
      "Supply chain visibility, predictive maintenance, production planning, automation, and efficiency you can measure on the floor.",
  },
  {
    icon: <Laptop className="w-6 h-6 text-[#2563eb]" strokeWidth={1.5} />,
    title: "Technology",
    metric: "40+",
    metricLabel: "active projects",
    description:
      "Product engineering, AI adoption, cloud modernisation, data platforms, and architecture built to scale.",
  },
  {
    icon: <Radio className="w-6 h-6 text-[#2563eb]" strokeWidth={1.5} />,
    title: "Telecommunications",
    metric: "15+",
    metricLabel: "active projects",
    description:
      "Network intelligence, churn analytics, customer engagement, automation, and service performance at carrier scale.",
  },
];

export default function Benefits() {
  return (
    <section id="industries" className="relative py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 right-0 h-[200px] overflow-hidden pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="mb-6">
            <PillLabel>Industry Presence</PillLabel>
          </div>
          <BlurText
            as="h2"
            text="Intelligence for industries that can't afford to guess."
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.45}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 text-md md:text-lg text-white/45 max-w-3xl leading-relaxed"
          >
            From financial services to healthcare, retail, manufacturing, telecom, and technology -
            we turn complexity into clarity, sector by sector.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {INDUSTRIES.map((industry, i) => (
            <GlowCard key={i} delay={i * 0.08}>
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                    border: "1px solid rgba(37,99,235,0.3)",
                  }}
                >
                  {industry.icon}
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-white leading-none">{industry.metric}</p>
                  <p className="text-xs text-white/40 mt-0.5">{industry.metricLabel}</p>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight leading-tight">
                {industry.title}
              </h3>
              <p className="text-base text-white/50 leading-relaxed">{industry.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
