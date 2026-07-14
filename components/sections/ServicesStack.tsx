"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ScrollStack from "@/components/scroll-stack/ScrollStack";
import Image from "next/image";

// Shared image configuration to ensure exact scaling and layout containment
function MockupImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-full relative min-h-[260px] sm:min-h-[320px] md:min-h-full">
      <Image 
        src={src} 
        alt={alt} 
        fill
        sizes="(max-w-768px) 100vw, 50vw"
        className="object-cover object-center select-none rounded-xl md:rounded-2xl"
        draggable={false}
        priority
      />
    </div>
  );
}

const CARDS = [
  {
    tag: "01",
    title: "Data Intelligence & Analytics",
    headline: "Turn raw data into decisions you can defend.",
    description:
      "We engineer clean, governed data foundations and the intelligence layer on top - warehousing, BI ecosystems, dashboards, and predictive models, so your business runs on evidence, not instinct.",
    bullets: [
      "Data strategy, data warehousing, BI dashboards",
      "Reporting automation, data governance",
      "Predictive analytics, and performance intelligence.",
    ],
    whatWeDo: "What we do: Data strategy, data warehousing, BI dashboards, reporting automation, data governance, predictive analytics, and performance intelligence.",
    ctaLabel: "Learn more",
    ctaHref: "/data-services",
    mockup: <MockupImage src="/data_analytics.jpg" alt="Data Intelligence & Analytics Workflow" />,
  },
  {
    tag: "02",
    title: "Artificial Intelligence & Machine Learning",
    headline: "AI that performs in production - not in a pitch.",
    description:
      "We design, deploy, and monitor machine learning and GenAI systems that forecast, recommend, and automate at scale. Engineered to hold their accuracy long after launch.",
    bullets: [
      "Machine learning, GenAI solutions, forecasting models",
      "Recommendation engines, NLP, intelligent automation",
      "MLOps, and AI performance optimisation.",
    ],
    whatWeDo: "What we do: Machine learning, GenAI solutions, forecasting models, recommendation engines, NLP, intelligent automation, MLOps, and AI performance optimisation.",
    ctaLabel: "Build smarter AI",
    ctaHref: "/ai-ml",
    mockup: <MockupImage src="/ai_ml.webp" alt="AI & Machine Learning Demonstration" />,
  },
  {
    tag: "03",
    title: "Cloud & DevOps",
    headline: "Infrastructure built to scale and built to stay up.",
    description:
      "We modernise cloud environments and automate delivery end to end: secure, resilient, and cost-efficient. You ship faster without putting business-critical systems at risk.",
    bullets: [
      "Cloud migration, DevOps automation, CI/CD, Kubernetes",
      "Cloud security, infrastructure automation, monitoring",
      "Cost optimisation.",
    ],
    whatWeDo: "What we do: Cloud migration, DevOps automation, CI/CD, Kubernetes, cloud security, infrastructure automation, monitoring, and cost optimisation.",
    ctaLabel: "Modernise your cloud",
    ctaHref: "/cloud-infrastructure",
    mockup: <MockupImage src="/cloud.jpg" alt="Cloud Infrastructure Performance" />,
  },
  {
    tag: "04",
    title: "Enterprise Engineering",
    headline: "Systems that move the business forward - not block it.",
    description:
      "We build customised enterprise applications, integrations, and workflow platforms that connect teams and operations into one coherent system designed to scale.",
    bullets: [
      "Custom applications, API development, system integration",
      "Workflow automation, platform modernisation",
      "Enterprise software engineering.",
    ],
    whatWeDo: "What we do: Custom applications, API development, system integration, workflow automation, platform modernisation, and enterprise software engineering.",
    ctaLabel: "Engineer better systems",
    ctaHref: "/it-services",
    mockup: <MockupImage src="/enterprise_engineering.png" alt="Enterprise Engineering Architecture" />,
  },
];

export function ServiceCard({ card }: { card: (typeof CARDS)[0] }) {
  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden flex flex-col md:flex-row h-auto md:min-h-[520px] lg:h-[520px] mb-6 md:mb-0"
      style={{
        background: "linear-gradient(135deg, rgba(20,28,45,0.95) 0%, rgba(13,21,38,0.98) 35%, rgba(9,15,28,1) 65%, rgba(37,99,235,0.08) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at top left, rgba(37,99,235,0.1) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-2/5 h-2/5 pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(37,99,235,0.06) 0%, transparent 65%)" }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex-1 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-1">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-4 sm:mb-6 w-fit font-mono"
          style={{
            background: "rgba(37,99,235,0.12)",
            border: "1px solid rgba(37,99,235,0.25)",
            color: "rgba(96,165,250,0.9)",
          }}
        >
          {card.tag}
        </span>
        
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-[1.2] mb-3">
          {card.title}
        </h3>
        
        {card.headline && (
          <p className="text-sm sm:text-base lg:text-lg font-medium text-white/75 mb-3 sm:mb-4 leading-snug">
            {card.headline}
          </p>
        )}
        
        <p className="text-xs sm:text-sm lg:text-base text-white/45 font-light leading-relaxed mb-4 sm:mb-6">
          {card.description}
        </p>
        
        <div className="flex flex-col gap-2.5 sm:gap-3.5 mb-6 sm:mb-8">
          {card.bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-white/75">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                style={{
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(37,99,235,0.3)",
                }}
              >
                <CheckCircle2 className="w-3 h-3 text-[#60a5fa]" />
              </span>
              <span className="flex-1 leading-tight">{b}</span>
            </div>
          ))}
        </div>
        
        {card.ctaLabel && (
          <AnimatedButton
            variant="ghost"
            href={card.ctaHref || "/reach-us"}
            className="text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3 w-fit"
          >
            {card.ctaLabel}
          </AnimatedButton>
        )}
      </div>

      {/* Mockup Container */}
      <div className="relative z-10 w-full md:w-[44%] lg:w-[46%] flex-shrink-0 p-4 sm:p-6 flex items-stretch order-1 md:order-2">
        <div
          className="w-full rounded-2xl overflow-hidden h-full relative"
          style={{
            background: "rgba(4,8,20,0.45)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
          }}
        >
          {card.mockup}
        </div>
      </div>
    </div>
  );
}

export default function ServicesStack() {
  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-20">
      {/* Header Container */}
      <div className="flex flex-col items-center text-center pb-12 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-4 sm:mb-6">
          <PillLabel>What We Actually Do</PillLabel>
        </div>
        <BlurText
          as="h2"
          text="Better data. Smarter systems. Real outcomes."
          animateBy="words"
          direction="bottom"
          delay={100}
          stepDuration={0.45}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/45 max-w-2xl leading-relaxed"
        >
          End-to-end data intelligence and technology services for enterprises ready to modernise
          how they built to deliver, not to drag on.
        </motion.p>
      </div>

      {/* Cards stack presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <ScrollStack labels={["Data", "AI", "Cloud", "Build"]}>
          {CARDS.map((card, i) => (
            <ServiceCard key={i} card={card} />
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}