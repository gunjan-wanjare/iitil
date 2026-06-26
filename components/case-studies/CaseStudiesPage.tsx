"use client";

import { useRef, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedButton from "@/components/ui/AnimatedButton";
import CaseStudySection from "@/components/case-studies/CaseStudySection";
import AnimatedMetric from "@/components/case-studies/AnimatedMetric";
import Image from "next/image";

import { EASE, fadeUp, staggerContainer, staggerItem } from "@/lib/animations";


const IMPACT_METRICS = [
  { value: 65, label: "Fraud Reduction", accent: "#2563eb" },
  { value: 55, label: "Customer Retention Increase", accent: "#3b82f6" },
  { value: 50, label: "Faster Record Access", accent: "#60a5fa" },
  { value: 42, label: "Inventory Cost Reduction", accent: "#1d4ed8" },
  { value: 100, label: "Compliance Achievement", accent: "#2563eb" },
  { value: 35, label: "Patient Outcome Improvement", accent: "#3b82f6" },
] as const;

/* ────────────────────────────────────────────────────────────────
   Section 1 — Hero
──────────────────────────────────────────────────────────────── */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={ref}
      id="case-studies-hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >

      <div className="absolute top-24 right-6 md:top-24 md:right-12 z-20 ">
        <Image 
          src="/yaka_brand_logo.png"
          alt="Yaka Brand Logo" 
          width={80} 
          height={40}
          priority
        />
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
        animate={{ y: [0, -20, 0], opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute top-1/4 left-[14%] w-96 h-96 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ y: [0, 16, 0], opacity: [0.12, 0.32, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        aria-hidden
        className="absolute bottom-1/3 right-[12%] w-72 h-72 rounded-full pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-12 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
          className="mb-8"
        >
          <PillLabel>Case Studies</PillLabel>
        </motion.div>

        <BlurText
          text="Proven Results Across Industries"
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
          className="mt-8 text-lg md:text-xl text-white/50 text-center max-w-2xl leading-relaxed"
        >
          Explore how IITIL has helped organizations transform their operations
          and achieve measurable success through data intelligence and technology
          solutions.
        </motion.p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section 6 — Business Impact Summary
──────────────────────────────────────────────────────────────── */
const ImpactSummarySection = memo(function ImpactSummarySection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="lg:w-[38%] lg:sticky lg:top-32 lg:self-start">
          <div className="flex flex-col items-start text-left">
            <div className="mb-5">
              <PillLabel>Business Impact Delivered</PillLabel>
            </div>
            <BlurText
              text="Driving Measurable Outcomes Across Industries"
              animateBy="words"
              direction="bottom"
              delay={80}
              stepDuration={0.4}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-left justify-start max-w-xl"
            />
            <motion.p
              {...fadeUp(0.3)}
              className="mt-6 text-lg text-white/45 max-w-md leading-relaxed"
            >
              Our solutions consistently help organizations improve efficiency,
              reduce costs, strengthen compliance, and accelerate business growth.
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:w-[62%] grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {IMPACT_METRICS.map((metric, i) => (
            <motion.div key={metric.label} variants={staggerItem}>
              <GlowCard delay={i * 0.05}>
                <AnimatedMetric
                  value={metric.value}
                  label={metric.label}
                  accent={metric.accent}
                  size="lg"
                />
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

/* ────────────────────────────────────────────────────────────────
   Section 7 — CTA
──────────────────────────────────────────────────────────────── */
const CTASection = memo(function CTASection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          className="relative rounded-3xl px-8 py-20 flex flex-col items-center text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(9,15,28,0.95) 50%, rgba(37,99,235,0.06) 100%)",
            border: "1px solid rgba(37,99,235,0.2)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 80px rgba(37,99,235,0.12)",
          }}
        >
          <motion.div
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
            className="absolute top-8 left-1/4 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
          />
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            aria-hidden
            className="absolute bottom-8 right-1/4 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            <BlurText
              text="Ready to Create Your Success Story?"
              animateBy="words"
              direction="bottom"
              delay={70}
              stepDuration={0.4}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-3xl"
            />

            <motion.p
              {...fadeUp(0.35)}
              className="mt-6 text-lg text-white/50 max-w-xl leading-relaxed"
            >
              Partner with IITIL to unlock data-driven growth, operational
              excellence, and measurable business outcomes.
            </motion.p>

            <motion.div
              {...fadeUp(0.5)}
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
        </motion.div>
      </div>
    </section>
  );
});

export default function CaseStudiesPage() {
  return (
    <main
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "rgba(2,8,23,1)" }}
    >
      <Navbar />
      <HeroSection />

      <div className="lg:pl-8">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
            }}
          />
        </div>

        {/* HEALTHCARE SECTION */}
        <CaseStudySection
          id="case-healthcare"
          industry="Healthcare"
          title="Healthcare Service"
          accent="#60a5fa"
          background="A multinational healthcare organization with operations across 15 countries, managing millions of patient records and complex operational workflows."
          challenge="The organization faced challenges in consolidating patient data from disparate systems, leading to inefficiencies in care delivery and difficulty in extracting actionable insights for improving patient outcomes."
          approach="IITIL conducted a comprehensive assessment of existing data infrastructure and designed a unified data platform that integrated multiple data sources. Our team implemented advanced analytics and machine learning models to identify patterns in patient care."
          solution="We deployed a cloud-based data integration platform with real-time analytics dashboards, predictive models for patient risk assessment, and automated reporting systems that provided actionable insights to clinical teams."
          results={[
            { value: 35, label: "Reduction in patient readmission rates" },
            { value: 50, label: "Faster access to patient records" },
            { value: 28, label: "Improvement in operational efficiency" },
          ]}
          visual={
            <div className="relative w-full aspect-[5/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/healthcare.png"
                alt="Healthcare case study visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
          }
        />

        <div className="max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
            }}
          />
        </div>

        {/* FINANCE SECTION */}
        <CaseStudySection
          id="case-finance"
          industry="Finance"
          title="Financial Leading"
          accent="#2563eb"
          background="A tier-1 financial institution serving over 10 million customers with diverse financial products including retail banking, wealth management, and corporate lending."
          challenge="The institution needed to enhance its fraud detection capabilities and improve risk assessment processes while ensuring compliance with evolving regulatory requirements."
          approach="IITIL designed a comprehensive AI-driven fraud detection system leveraging machine learning algorithms and real-time transaction monitoring. We also implemented advanced risk modeling frameworks aligned with regulatory standards."
          solution="We delivered an intelligent fraud detection platform with real-time alerting, predictive risk assessment models, and automated compliance reporting systems integrated with existing core banking infrastructure."
          results={[
            { value: 65, label: "Reduction in fraudulent transactions" },
            { value: 40, label: "Faster fraud detection time" },
            { value: 100, label: "Regulatory compliance achievement" },
          ]}
          visual={
            <div className="relative w-full aspect-[5/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/financial.png"
                alt="Financial case study visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          }
          reverse
        />

        <div className="max-w-7xl mx-auto px-6">
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
            }}
          />
        </div>

        {/* RETAIL SECTION */}
        <CaseStudySection
          id="case-retail"
          industry="Retail"
          title="Retail Chain"
          accent="#1d4ed8"
          background="A fast-growing e-commerce retailer operating across multiple markets with a catalog of over 100,000 products and processing thousands of orders daily."
          challenge="The company struggled with inventory management inefficiencies, leading to stockouts and overstock situations. They also lacked deep insights into customer purchasing behavior and preferences."
          approach="IITIL implemented a data-driven inventory optimization system combined with customer analytics to understand purchasing patterns. We developed predictive models for demand forecasting and personalized recommendation engines."
          solution="We built an integrated analytics platform featuring demand forecasting algorithms, real-time inventory tracking, customer segmentation models, and personalized marketing automation systems."
          results={[
            { value: 42, label: "Reduction in inventory costs" },
            { value: 55, label: "Increase in customer retention" },
            { value: 38, label: "Growth in average order value" },
          ]}
          visual={
            <div className="relative w-full aspect-[5/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/retail.png"
                alt="Retail case study visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          }
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />
      </div>

      <ImpactSummarySection />
      <CTASection />
      <Footer />
    </main>
  );
}
