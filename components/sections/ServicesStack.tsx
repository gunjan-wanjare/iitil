"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Image from "next/image";

function MockupImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-full relative select-none">
      <Image 
        src={src} 
        alt={alt} 
        fill
        sizes="(max-w-768px) 100vw, 33vw"
        className="object-cover object-center rounded-xl md:rounded-2xl"
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
      "We engineer clean, governed data foundations and the intelligence layer on top - warehousing, BI ecosystems, dashboards, and predictive models.",
    bullets: [
      "Data strategy, warehousing, & BI dashboards",
      "Reporting automation & data governance",
      "Predictive analytics & performance intelligence.",
    ],
    ctaLabel: "Learn more",
    ctaHref: "/data-services",
    mockup: <MockupImage src="/data_analytics.jpg" alt="Data Intelligence & Analytics Workflow" />,
  },
  {
    tag: "02",
    title: "Artificial Intelligence & Machine Learning",
    headline: "AI that performs in production - not in a pitch.",
    description:
      "We design, deploy, and monitor machine learning and GenAI systems that forecast, recommend, and automate at scale.",
    bullets: [
      "Machine learning & GenAI solutions",
      "Recommendation engines & NLP automation",
      "MLOps and AI performance optimization.",
    ],
    ctaLabel: "Build smarter AI",
    ctaHref: "/ai-ml",
    mockup: <MockupImage src="/ai_ml.webp" alt="AI & Machine Learning Demonstration" />,
  },
  {
    tag: "03",
    title: "Cloud & DevOps",
    headline: "Infrastructure built to scale and built to stay up.",
    description:
      "We modernise cloud environments and automate delivery end to end: secure, resilient, and cost-efficient. You ship faster safely.",
    bullets: [
      "Cloud migration, DevOps, & Kubernetes",
      "Infrastructure automation & security monitoring",
      "Continuous optimization & cost controls.",
    ],
    ctaLabel: "Modernise your cloud",
    ctaHref: "/cloud-infrastructure",
    mockup: <MockupImage src="/cloud.jpg" alt="Cloud Infrastructure Performance" />,
  },
  {
    tag: "04",
    title: "Enterprise Engineering",
    headline: "Systems that move the business forward - not block it.",
    description:
      "We build customised enterprise applications, integrations, and workflow platforms that connect teams and operations into one coherent system designed to scale safely.",
    bullets: [
      "Custom enterprise application profiles & modular structures",
      "API management, architecture layer handling, & internal system integrations",
      "Workflow automation engine modernisations & core pipeline development.",
    ],
    ctaLabel: "Engineer better systems",
    ctaHref: "/it-services",
    mockup: <MockupImage src="/enterprise_engineering.png" alt="Enterprise Engineering Architecture" />,
  },
];

interface ServiceCardProps {
  card: (typeof CARDS)[0];
  isLast: boolean;
}

export function ServiceCard({ card, isLast }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className={`relative w-full rounded-3xl overflow-hidden flex flex-col justify-between
        ${isLast ? "lg:flex-row lg:col-span-3 lg:h-[420px]" : "h-full"} h-auto`}
      style={{
        background: "linear-gradient(135deg, rgba(20,28,45,0.95) 0%, rgba(13,21,38,0.98) 35%, rgba(9,15,28,1) 65%, rgba(37,99,235,0.08) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Ambient Glows */}
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
      <div className={`relative z-10 p-6 sm:p-8 md:p-10 flex flex-col order-2 md:order-1 flex-1 justify-between
        ${isLast ? "lg:max-w-3xl" : ""}`}>
        <div>
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-4 w-fit font-mono"
            style={{
              background: "rgba(37,99,235,0.12)",
              border: "1px solid rgba(37,99,235,0.25)",
              color: "rgba(96,165,250,0.9)",
            }}
          >
            {card.tag}
          </span>
          
          <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-[1.2] mb-2">
            {card.title}
          </h3>
          
          {card.headline && (
            <p className="text-xs sm:text-sm font-medium text-white/75 mb-2 leading-snug">
              {card.headline}
            </p>
          )}
          
          <p className="text-xs text-white/45 font-light leading-relaxed mb-4">
            {card.description}
          </p>
          
          {/* Bullets */}
          <div className={`flex flex-col gap-2 mb-6 ${isLast ? "lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-2" : ""}`}>
            {card.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs font-medium text-white/75">
                <span
                  className="flex-shrink-0 w-4.5 h-4.5 rounded-full flex items-center justify-center mt-0.5"
                  style={{
                    background: "rgba(37,99,235,0.15)",
                  }}
                >
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#60a5fa]" />
                </span>
                <span className="flex-1 leading-tight">{b}</span>
              </div>
            ))}
          </div>
        </div>
        
        {card.ctaLabel && (
          <AnimatedButton
            variant="ghost"
            href={card.ctaHref || "/reach-us"}
            className="text-xs px-4 py-2 w-fit mt-2"
          >
            {card.ctaLabel}
          </AnimatedButton>
        )}
      </div>

      {/* Mockup Container - Using Strict Aspect-Ratio Layout */}
      <div className={`relative z-10 w-full p-4 sm:p-6 flex items-stretch order-1 md:order-2 shrink-0
        ${isLast 
          ? "lg:w-[40%] xl:w-[35%] h-[260px] sm:h-[320px] lg:h-auto" 
          : "aspect-[4/3] w-full"
        }`}>
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
    </motion.div>
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
          how they build to deliver, not to drag on.
        </motion.p>
      </div>

      {/* Grid Container - Handles Responsive Height Evenly via CSS Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {CARDS.map((card, i) => (
            <ServiceCard 
              key={i} 
              card={card} 
              isLast={i === CARDS.length - 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}