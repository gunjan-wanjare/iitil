"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Code,
  Warehouse,
  BarChart3,
  PieChart,
  ShieldCheck,
  Cpu,
  Users,
  Landmark,
  Gauge,
  Brain,
  Sparkles,
  Zap,
  LineChart,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ServicePageLayout from "@/components/service-pages/ServicePageLayout";
import ServiceHeroSection from "@/components/service-pages/ServiceHeroSection";
import UseCasesSection from "@/components/service-pages/UseCasesSection";
import WhyChooseIITILSection from "@/components/service-pages/WhyChooseIITILSection";
import BenefitsGridSection from "@/components/service-pages/BenefitsGridSection";
import ServiceCTASection from "@/components/service-pages/ServiceCTASection";
import PillLabel from "@/components/ui/PillLabel";
import BlurText from "@/components/ui/BlurText";
import { fadeUp } from "@/lib/animations";
import type { BenefitItem, UseCaseItem, WhyIITILItem } from "@/components/service-pages/types";

const ICON = { size: 24, strokeWidth: 1.6 } as const;

interface OfferingCardData {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const KEY_OFFERINGS_CARDS: OfferingCardData[] = [
  {
    id: "csd",
    tag: "01",
    title: "Custom Software Development",
    description:
      "Seamlessly consolidate data from multiple sources into a unified system, ensuring consistency, accuracy, and easy accessibility across the organization.",
    icon: <Code {...ICON} />,
    accent: "#2563eb",
  },
  {
    id: "dwh",
    tag: "02",
    title: "Data Warehousing Solutions",
    description:
      "Design and implement scalable data warehouses that enable structured storage, faster retrieval, and efficient reporting for business intelligence needs.",
    icon: <Warehouse {...ICON} />,
    accent: "#3b82f6",
  },
  {
    id: "dai",
    tag: "03",
    title: "Data Analytics & Insights",
    description:
      "Leverage advanced analytics to uncover patterns, trends, and actionable insights that drive strategic decision-making and business growth.",
    icon: <BarChart3 {...ICON} />,
    accent: "#60a5fa",
  },
  {
    id: "dvr",
    tag: "04",
    title: "Data Visualization & Reporting",
    description:
      "Transform complex datasets into intuitive dashboards and visual reports for real-time monitoring and executive-level clarity.",
    icon: <PieChart {...ICON} />,
    accent: "#1d4ed8",
  },
  {
    id: "dsg",
    tag: "05",
    title: "Data Security & Governance",
    description:
      "Ensure data protection through robust security frameworks, compliance standards, and governance policies to maintain integrity and confidentiality.",
    icon: <ShieldCheck {...ICON} />,
    accent: "#2563eb",
  },
  {
    id: "bdai",
    tag: "06",
    title: "Big Data & AI Enablement",
    description:
      "Enable organizations to harness the power of big data and AI technologies for predictive analysis, automation, and intelligent operations.",
    icon: <Cpu {...ICON} />,
    accent: "#3b82f6",
  },
];

const USE_CASES: UseCaseItem[] = [
  {
    title: "Customer Behavior Analysis",
    description:
      "Analyze customer data to understand preferences, improve engagement strategies, and enhance overall customer experience.",
    icon: Users,
  },
  {
    title: "Financial & Risk Analytics",
    description:
      "Utilize data-driven models to assess risks, detect anomalies, and support financial planning and credit decision processes.",
    icon: Landmark,
  },
  {
    title: "Operational Efficiency Optimization",
    description:
      "Monitor and analyze operational data to identify inefficiencies, reduce costs, and improve overall productivity.",
    icon: Gauge,
  },
];

const WHY_IITIL: WhyIITILItem[] = [
  {
    num: "01",
    title: "Business-Driven AI Solutions",
    description:
      "We design AI systems that directly align with business goals, ensuring every model delivers measurable outcomes like revenue growth, cost reduction, or process efficiency.",
    icon: Brain,
  },
  {
    num: "02",
    title: "Advanced Machine Learning Capabilities",
    description:
      "Our ML models are built using modern algorithms for prediction, classification, and optimization, enabling smarter and faster decision-making.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Scalable & Future-Ready Architecture",
    description:
      "IITIL builds AI systems that grow with your business, ensuring long-term adaptability, integration, and performance across evolving data environments.",
    icon: Gauge,
  },
];

const BENEFITS: BenefitItem[] = [
  {
    title: "Intelligent Decision Making",
    description:
      "AI enables real-time insights and predictive analytics, helping businesses make faster and more accurate decisions.",
    icon: Brain,
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive and manual tasks using AI-driven workflows to improve speed, reduce errors, and increase productivity.",
    icon: Zap,
  },
  {
    title: "Predictive Analytics",
    description:
      "Forecast trends, customer behavior, and market demand using advanced machine learning models for better planning and strategy.",
    icon: LineChart,
  },
  {
    title: "Customer Experience Enhancement",
    description:
      "Deliver personalized experiences through AI-powered recommendations, chatbots, and behavior analysis.",
    icon: Sparkles,
  },
  {
    title: "Operational Efficiency",
    description:
      "Optimize business operations by identifying inefficiencies and improving resource utilization through AI insights.",
    icon: Gauge,
  },
  {
    title: "Fraud Detection & Risk Management",
    description:
      "Detect anomalies, prevent fraud, and manage risks using intelligent pattern recognition and real-time monitoring systems.",
    icon: ShieldAlert,
  },
];

const OfferingCardTile = memo(function OfferingCardTile({
  card,
}: {
  card: OfferingCardData;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.015, y: -6 }}
      className="flex-shrink-0 w-[290px] xs:w-[320px] sm:w-[360px] rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden h-[340px] select-none"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}15`,
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px ${card.accent}45, 0 12px 32px ${card.accent}10`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${card.accent}15`;
      }}
    >
      <div
        aria-hidden
        className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${card.accent}12 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center justify-center w-11 h-11 rounded-xl"
            style={{
              background: `${card.accent}14`,
              border: `1px solid ${card.accent}30`,
              color: card.accent,
            }}
          >
            {card.icon}
          </div>
          <span
            className="text-xs font-bold tracking-widest uppercase opacity-40"
            style={{ color: card.accent }}
          >
            {card.tag}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white tracking-tight leading-snug mb-3">
            {card.title}
          </h3>
          <p className="text-sm text-white/50 leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, ${card.accent}60, transparent)`,
        }}
      />
    </motion.div>
  );
});

/* Interactive Carousel Slider Section with ultra-smooth spring physics */
function KeyOfferingsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [maxScroll, setMaxScroll] = useState(0);

  // Framer Motion motion values for drag and smooth springs
  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, {
    stiffness: 120, // Lower stiffness = more organic fluid ease
    damping: 20,    // Balanced friction to prevent rebound jitter
    mass: 0.8       // Light-weight responsive action
  });

  const calculateBounds = () => {
    if (containerRef.current && trackRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const trackWidth = trackRef.current.scrollWidth;
      setMaxScroll(Math.max(0, trackWidth - containerWidth + 24)); // includes safe terminal end padding offset
    }
  };

  useEffect(() => {
    calculateBounds();
    window.addEventListener("resize", calculateBounds);
    return () => window.removeEventListener("resize", calculateBounds);
  }, []);

  // Update position index-based calculations on resize or render changes
  const handleSlide = (direction: "left" | "right") => {
    if (trackRef.current && containerRef.current) {
      const cardElement = trackRef.current.firstElementChild as HTMLElement;
      const cardStep = cardElement ? cardElement.offsetWidth + 24 : 384;

      let nextX = dragX.get();

      if (direction === "left") {
        nextX = Math.min(0, nextX + cardStep);
      } else {
        nextX = Math.max(-maxScroll, nextX - cardStep);
      }

      dragX.set(nextX);
    }
  };

  // Determine button state based on the calculated spring value
  const canScrollLeft = dragX.get() < -10;
  const canScrollRight = dragX.get() > -maxScroll + 10;

  return (
    <section id="key-offerings" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="mb-5">
              <PillLabel>Services</PillLabel>
            </div>
            <BlurText
              as="h2"
              text="Key Offerings"
              animateBy="words"
              direction="bottom"
              delay={80}
              stepDuration={0.4}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white"
            />
            <motion.p
              {...fadeUp(0.3)}
              className="mt-5 text-lg text-white/45 leading-relaxed"
            >
              Comprehensive data services that help organizations collect, manage, analyze, and secure information across the entire data lifecycle.
            </motion.p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto z-20">
            <button
              onClick={() => handleSlide("left")}
              disabled={!canScrollLeft}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 disabled:opacity-20 disabled:pointer-events-none transition-all"
              aria-label="Slide left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleSlide("right")}
              disabled={!canScrollRight}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 active:scale-95 disabled:opacity-20 disabled:pointer-events-none transition-all"
              aria-label="Slide right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Drag-To-Scroll Row Container - Smooth Framer Motion Controller */}
        <div ref={containerRef} className="relative w-full">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -maxScroll, right: 0 }}
            style={{ x: springX }} // Driven by hardware-accelerated Spring Animation physics
            className="flex gap-6 cursor-grab active:cursor-grabbing pb-8 py-2 w-max"
          >
            {KEY_OFFERINGS_CARDS.map((card) => (
              <div key={card.id}>
                <OfferingCardTile card={card} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function DataServicesPage() {
  return (
    <ServicePageLayout>
      <ServiceHeroSection
        id="data-services-hero"
        pillLabel="Data Services"
        title="Turn Data into Strategic Advantage"
        descriptionPrimary="We deliver end-to-end IT solutions designed to accelerate business growth, improve operational efficiency, and enable digital transformation. Our services combine cutting-edge technology with strategic expertise to build scalable, secure, and high-performance systems."
        descriptionSecondary="From application development to data intelligence, we empower businesses to stay competitive in a rapidly evolving digital landscape. Our approach is customer-centric, agile, and aligned with long-term business goals."
      />

      <KeyOfferingsSlider />

      <UseCasesSection items={USE_CASES} />
      <WhyChooseIITILSection items={WHY_IITIL} />
      <BenefitsGridSection title="Transform with AI" items={BENEFITS} />
      <ServiceCTASection
        headline="Ready to Unlock the Full Value of Your Data?"
        description="Partner with IITIL to transform raw data into strategic assets that drive growth, efficiency, and competitive advantage."
      />
    </ServicePageLayout>
  );
}