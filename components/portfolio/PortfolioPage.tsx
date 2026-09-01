"use client";

import { useRef, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectsSlider, {
  type ProjectCard,
} from "@/components/portfolio/ProjectSlider";
import ServicesShowcaseGrid, {
  type ServiceCard,
} from "@/components/portfolio/ServiceShowcaseGrid";

import {
  Heart,
  CreditCard,
  ShieldCheck,
  Building2,
  Database,
  Cloud,
  Monitor,
  Code,
  Users,
  Globe,
  Zap,
  Target,
  TrendingUp,
  Boxes,
} from "lucide-react";
import { EASE, fadeUp } from "@/lib/animations";
import Image from "next/image";

const ICON_SIZE = 20;
const ICON_PROPS = { size: ICON_SIZE, strokeWidth: 1.8 } as const;

const Icon = {
  Heart: <Heart {...ICON_PROPS} />,
  CreditCard: <CreditCard {...ICON_PROPS} />,
  Shield: <ShieldCheck {...ICON_PROPS} />,
  Building: <Building2 {...ICON_PROPS} />,
  Database: <Database {...ICON_PROPS} />,
  Cloud: <Cloud {...ICON_PROPS} />,
  Monitor: <Monitor {...ICON_PROPS} />,
  Code: <Code {...ICON_PROPS} />,
  Users: <Users {...ICON_PROPS} />,
  Globe: <Globe {...ICON_PROPS} />,
  Zap: <Zap {...ICON_PROPS} />,
  Target: <Target {...ICON_PROPS} />,
  TrendUp: <TrendingUp {...ICON_PROPS} />,
  CRM: <Boxes {...ICON_PROPS} />,
};

const PROJECT_CARDS: ProjectCard[] = [
  {
    id: "mdc",
    tag: "Healthcare",
    title: "My Doctor Capsule",
    description:
      "A digital healthcare platform that simplifies access to consultations, health records, and patient care services.",
    img: "/doctor_capsule.png",
    accent: "#60a5fa",
    features: [
      "Healthcare provider connections",
      "Technology-driven care",
      "Convenient delivery",
      "Integrated experience",
    ],
  },
  {
    id: "lk",
    tag: "Finance",
    title: "Loan Konnekt",
    description:
      "A smart credit and lending facilitation platform connecting customers with the right lenders based on their financial profile.",
    img: "/loan_konnekt.png",
    accent: "#2563eb",
    features: [
      "Streamlined loan discovery",
      "Credit eligibility assessment",
      "Structured channel approach",
      "Transparency & speed",
    ],
  },
  {
    id: "lv",
    tag: "Legal Tech",
    title: "Lawvix",
    description:
      "A technology-enabled legal services platform offering accessible, reliable, and structured legal solutions.",
    img: "/lawvix.png",
    accent: "#3b82f6",
    features: [
      "Verified legal professionals",
      "Advisory & documentation",
      "Digital legal processes",
      "Efficiency & accuracy",
    ],
  },
  {
    id: "ek",
    tag: "Food Delivery",
    title: "Eatskart",
    description:
      "A fair-share food delivery platform offering lower commissions for restaurants to ensure higher earnings and bigger savings for diners.",
    img: "/eatskart.png",
    accent: "#3b82f6",
    features: [
      "Lower restaurant commissions",
      "Live order tracking",
      "Menu & venue discovery",
      "Fast, reliable delivery",
    ],
  },
  {
    id: "pcx",
    tag: "Property",
    title: "Propertizor",
    description:
      "An integrated property management and support platform designed to handle end-to-end property needs.",
    img: "/property_care.png",
    accent: "#1d4ed8",
    features: [
      "Maintenance & tenant mgmt",
      "Documentation & compliance",
      "Hassle-free ownership",
      "Transparent control",
    ],
  },
];

const ECOSYSTEM_CARDS: ServiceCard[] = [
  {
    id: "ds",
    tag: "Data Services",
    title: "Data Services",
    description:
      "End-to-end data lifecycle management — from ingestion and cleansing to enriched reporting and strategic dashboards.",
    img: "/data_service.png",
    accent: "#2563eb",
    chips: [
      "Data Entry & Processing",
      "Data Cleansing",
      "Data Migration",
      "MIS Reporting",
      "Business Dashboards",
      "Data Enrichment",
    ],
  },
  {
    id: "ci",
    tag: "Infrastructure",
    title: "Cloud & Infrastructure",
    description:
      "Resilient cloud and infrastructure solutions that keep your operations scalable, secure, and cost-efficient.",
    img: "/cloud_infrastructure.png",
    accent: "#2563eb",
    chips: [
      "Cloud Deployment",
      "Server Management",
      "Virtual Infrastructure",
      "Backup Infrastructure",
      "Storage Management",
      "Cloud Monitoring",
    ],
  },
  {
    id: "mit",
    tag: "Managed IT",
    title: "Managed IT Services",
    description:
      "Proactive IT support and monitoring ensuring business continuity with minimal downtime and maximum efficiency.",
    img: "/manage_service.png",
    accent: "#3b82f6",
    chips: [
      "Remote IT Support",
      "IT Helpdesk Services",
      "Infrastructure Monitoring",
      "Endpoint Support",
      "IT AMC Services",
      "Cloud & Email Mgmt",
    ],
  },
  {
    id: "appdev",
    tag: "Development",
    title: "Application Development",
    description:
      "Custom applications from web and mobile to enterprise platforms — built for scale, performance, and longevity.",
    img: "/application_development.png",
    accent: "#60a5fa",
    chips: [
      "Web Applications",
      "Mobile Apps",
      "Desktop Applications",
      "Enterprise Applications",
      "API Development",
      "ERP & HRMS Systems",
    ],
  },
  {
    id: "crm",
    tag: "CRM",
    title: "CRM Development & Lifecycle",
    description:
      "Bespoke CRM systems that streamline sales, support, and customer lifecycle management across your organization.",
    img: "/crm_development.png",
    accent: "#1d4ed8",
    chips: [
      "Custom CRM Systems",
      "Sales & Support CRM",
      "Lead Management CRM",
      "CRM Integration",
      "Workflow Customisation",
      "CRM Maintenance",
    ],
  },
];
/* ────────────────────────────────────────────────────────────────
   Org structure data
──────────────────────────────────────────────────────────────── */
const ORG_NODES = [
  {
    id: "biz",
    icon: Icon.TrendUp,
    accent: "#2563eb",
    title: "Business Leadership",
    role: "Business Director",
    description:
      "Business Director and team across all verticals — Product and Services of IT and Data.",
  },
  {
    id: "pm",
    icon: Icon.Target,
    accent: "#3b82f6",
    title: "Project Management",
    role: "Project Director",
    description:
      "Mr. Jhonny and the project delivery team managing high-impact engagements across clients.",
  },
  {
    id: "svc",
    icon: Icon.Zap,
    accent: "#60a5fa",
    title: "Service Delivery",
    role: "Services Director",
    description:
      "Services Director and team delivering across all service verticals with quality and speed.",
  },
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
      id="portfolio-hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Brand Logo - Hidden on mobile viewports, positioned safely below navbar on desktop */}
      <div className="hidden md:block md:absolute md:top-28 md:right-12 z-30 pointer-events-none">
        <div className="pointer-events-auto">
          <Image
            src="/yaka_brand_logo.png"
            alt="Yaka Brand Logo"
            width={80}
            height={60}
            priority
            className="w-20 h-auto"
          />
        </div>
      </div>

      {/* Parallax background */}
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

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -22, 0], opacity: [0.28, 0.52, 0.28] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute top-1/4 left-[12%] w-96 h-96 rounded-full pointer-events-none will-change-transform"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 18, 0], opacity: [0.12, 0.35, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        aria-hidden
        className="absolute bottom-1/3 right-[10%] w-80 h-80 rounded-full pointer-events-none will-change-transform"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.08, 0.25, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        aria-hidden
        className="absolute top-[40%] right-[32%] w-52 h-52 rounded-full pointer-events-none will-change-transform"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-12 max-w-5xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
          className="mb-8"
        >
          <PillLabel>Full-Stack Technology Services</PillLabel>
        </motion.div>

        <BlurText
          as="h1"
          text="Delivering Scalable IT Solutions Across India & Global Markets"
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
          className="mt-8 text-md md:text-lg text-white/50 text-center max-w-2xl leading-relaxed"
        >
          ITIL is a full-stack technology services brand delivering scalable cloud infrastructure, enterprise applications, automation, and data intelligence solutions globally.
        </motion.p>
      </div>
    </section>
  );
}
/* ────────────────────────────────────────────────────────────────
   Section 3 — Organization Structure
──────────────────────────────────────────────────────────────── */
const CONTAINER_VARIANTS = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const LINE_DOWN = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.35, ease: EASE } },
};

const LINE_ACROSS = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.45, ease: EASE } },
};

const OrgStructureSection = memo(function OrgStructureSection() {
  return (
    <section className="py-28 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-5">
            <PillLabel>Organization Structure</PillLabel>
          </div>
          <BlurText
            as="h2"
            text="Leadership & Teams"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center"
          />
          <motion.p
            {...fadeUp(0.3)}
            className="mt-5 text-lg text-white/45 max-w-xl leading-relaxed"
          >
            Our organizational structure is designed to ensure efficient
            delivery across all service verticals and project engagements.
          </motion.p>
        </div>

        {/* ── Desktop Tree ── */}
        <div className="hidden md:block">
          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center"
          >
            {/* Leadership node */}
            <motion.div
              variants={SCALE_IN}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="rounded-2xl px-10 py-6 flex flex-col items-center text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(37,99,235,0.14) 0%, rgba(37,99,235,0.06) 60%, rgba(9,15,28,0.95) 100%)",
                border: "1px solid rgba(37,99,235,0.3)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.10), 0 0 0 1px rgba(37,99,235,0.2), 0 12px 32px rgba(37,99,235,0.12)",
                minWidth: "280px",
              }}
            >
              <div
                aria-hidden
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: "rgba(37,99,235,0.18)",
                    border: "1px solid rgba(37,99,235,0.35)",
                  }}
                >
                  <div style={{ color: "#2563eb" }}>{Icon.Users}</div>
                </div>
                <p className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-1">
                  Leadership
                </p>
                <h3 className="text-xl font-medium text-white tracking-tight">
                  IITIL Leadership
                </h3>
              </div>
            </motion.div>

            {/* Vertical drop from leadership */}
            <motion.div
              variants={LINE_DOWN}
              className="w-px bg-[rgba(37,99,235,0.3)] origin-top"
              style={{ height: "32px" }}
            />

            {/* Horizontal bridge + three drops */}
            <div className="relative w-full" style={{ height: "32px" }}>
              {/* Horizontal line */}
              <motion.div
                variants={LINE_ACROSS}
                className="absolute top-0 bg-[rgba(37,99,235,0.3)] origin-center"
                style={{
                  left: "calc(16.67% + 0.5px)",
                  right: "calc(16.67% + 0.5px)",
                  height: "1px",
                }}
              />
              {/* Three vertical drops */}
              {[1 / 6, 3 / 6, 5 / 6].map((pos, i) => (
                <motion.div
                  key={i}
                  variants={LINE_DOWN}
                  className="absolute bg-[rgba(37,99,235,0.3)] origin-top"
                  style={{
                    left: `calc(${pos * 100}% - 0.5px)`,
                    top: 0,
                    width: "1px",
                    height: "32px",
                  }}
                />
              ))}
            </div>

            {/* Three child nodes */}
            <div className="grid grid-cols-3 gap-6 w-full">
              {ORG_NODES.map((node) => (
                <motion.div
                  key={node.id}
                  variants={SCALE_IN}
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="rounded-2xl p-6 flex flex-col relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${node.accent}20`,
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px ${node.accent}55, 0 12px 32px ${node.accent}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${node.accent}20`;
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at top left, ${node.accent}12 0%, transparent 65%)`,
                    }}
                  />
                  <div className="relative z-10">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: `${node.accent}18`,
                        border: `1px solid ${node.accent}30`,
                      }}
                    >
                      <div style={{ color: node.accent }}>{node.icon}</div>
                    </div>
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-1"
                      style={{ color: node.accent }}
                    >
                      {node.role}
                    </p>
                    <h3 className="text-lg font-semibold text-white mb-2 tracking-tight leading-snug">
                      {node.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(to right, ${node.accent}60, transparent)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Mobile: Vertical Timeline ── */}
        <div className="md:hidden">
          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl p-6 flex flex-col items-center text-center relative overflow-hidden mb-1"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.05) 60%, rgba(9,15,28,0.95) 100%)",
              border: "1px solid rgba(37,99,235,0.25)",
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
              style={{
                background: "rgba(37,99,235,0.18)",
                border: "1px solid rgba(37,99,235,0.35)",
              }}
            >
              <div style={{ color: "#2563eb" }}>{Icon.Users}</div>
            </div>
            <p className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-0.5">
              Leadership
            </p>
            <h3 className="text-xl font-bold text-white tracking-tight">
              IITIL Leadership
            </h3>
          </motion.div>

          {/* Vertical connector line */}
          <div className="flex">
            <div className="w-6 flex-shrink-0" />
            <div
              className="w-px flex-shrink-0 my-1"
              style={{
                height: "24px",
                background: "rgba(37,99,235,0.3)",
              }}
            />
          </div>

          {/* Children as vertical list */}
          <div className="relative">
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ background: "rgba(37,99,235,0.15)" }}
              aria-hidden
            />
            <div className="space-y-4">
              {ORG_NODES.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: EASE }}
                  className="flex gap-4"
                >
                  {/* Horizontal connector */}
                  <div className="flex-shrink-0 w-10 flex items-center justify-center mt-6">
                    <div
                      className="w-full h-px"
                      style={{ background: `${node.accent}50` }}
                    />
                  </div>
                  {/* Node */}
                  <div
                    className="flex-1 rounded-2xl p-5 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{
                        background: `${node.accent}18`,
                        border: `1px solid ${node.accent}30`,
                      }}
                    >
                      <div style={{ color: node.accent }}>{node.icon}</div>
                    </div>
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-0.5"
                      style={{ color: node.accent }}
                    >
                      {node.role}
                    </p>
                    <h3 className="text-base font-semibold text-white mb-1.5 tracking-tight">
                      {node.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

/* ────────────────────────────────────────────────────────────────
   Section 5 — Global Delivery Capability
──────────────────────────────────────────────────────────────── */
const GLOBAL_FEATURES = [
  {
    icon: Icon.Zap,
    accent: "#2563eb",
    title: "Innovation Driven",
    description:
      "Delivering modern solutions with future-ready technologies — AI, cloud, and automation at the core of every engagement.",
  },
  {
    icon: Icon.Target,
    accent: "#3b82f6",
    title: "Reliable Delivery",
    description:
      "Structured execution with measurable outcomes. Every project ships on time with clear milestones and transparent progress.",
  },
  {
    icon: Icon.TrendUp,
    accent: "#60a5fa",
    title: "Enterprise Scalability",
    description:
      "Solutions built to grow with evolving business needs — from early-stage startups to large enterprise deployments.",
  },
  {
    icon: Icon.Users,
    accent: "#1d4ed8",
    title: "Customer Success",
    description:
      "Long-term partnerships focused on business impact. We measure our success by the growth and success of our clients.",
  },
] as const;

const GlobalDeliverySection = memo(function GlobalDeliverySection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-5">
            <PillLabel>Global Delivery</PillLabel>
          </div>
          <BlurText
            as="h2"
            text="Built for Scale, Designed for Growth"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center max-w-3xl"
          />
          <motion.p
            {...fadeUp(0.3)}
            className="mt-6 text-lg text-white/45 max-w-2xl leading-relaxed"
          >
            Our teams deliver scalable solutions across industries and
            geographies, combining technology expertise, operational excellence,
            and customer-focused execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GLOBAL_FEATURES.map((item, i) => (
            <GlowCard key={item.title} delay={i * 0.1}>
              <div className="flex flex-col gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${item.accent}18`,
                    border: `1px solid ${item.accent}30`,
                  }}
                >
                  <div style={{ color: item.accent }}>{item.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
});

/* ────────────────────────────────────────────────────────────────
   Section 6 — CTA (split layout)
──────────────────────────────────────────────────────────────── */
const CTASection = memo(function CTASection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-8 md:p-14 lg:p-16"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(9,15,28,0.97) 50%, rgba(37,99,235,0.05) 100%)",
            border: "1px solid rgba(37,99,235,0.18)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.07), 0 0 80px rgba(37,99,235,0.10)",
          }}
        >
          {/* Background glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left: CTA content */}
            <div className="flex-1">
              <div className="mb-6">
                <PillLabel>Get In Touch</PillLabel>
              </div>
              <BlurText
                as="h2"
                text="Ready to Transform Your Business?"
                animateBy="words"
                direction="bottom"
                delay={70}
                stepDuration={0.4}
                className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white justify-start max-w-lg"
              />
              <motion.p
                {...fadeUp(0.3)}
                className="mt-6 text-lg text-white/50 max-w-md leading-relaxed"
              >
                Let&rsquo;s discuss how Iitil can help you build scalable
                digital solutions and drive business growth.
              </motion.p>
              <motion.div
                {...fadeUp(0.45)}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <AnimatedButton variant="primary" href="/reach-us">
                  Start a Project
                </AnimatedButton>
                <AnimatedButton variant="ghost" href="/case-studies">
                  Read Case Studies
                </AnimatedButton>
              </motion.div>
            </div>

            {/* Right: Contact card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
              className="flex-shrink-0 w-full lg:w-80 rounded-2xl p-7 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, transparent 60%, rgba(37,99,235,0.05) 100%)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.10), 0 0 0 1px rgba(37,99,235,0.12)",
              }}
            >
              <div
                aria-hidden
                className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(37,99,235,0.10) 0%, transparent 65%)",
                }}
              />
              <div className="relative z-10">
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(37,99,235,0.18)",
                      border: "1px solid rgba(37,99,235,0.3)",
                    }}
                  >
                    <div style={{ color: "#2563eb" }}>{Icon.Building}</div>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 tracking-widest uppercase">
                      Headquarters
                    </p>
                    <p className="text-sm font-semibold text-white">IITIL HQ</p>
                  </div>
                </div>

                <div
                  className="h-px w-full mb-5"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(37,99,235,0.4), transparent)",
                  }}
                />

                <div className="space-y-2 mb-5">
                  <p className="text-sm text-white/65 leading-relaxed">
                    Sattva Knowledge City, Raidurg
                    <br />
                    Hitec City, Hyderabad — 500081
                    <br />
                    Telangana, India
                  </p>
                </div>

                <div
                  className="h-px w-full mb-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                  }}
                />

                <div className="flex items-center gap-2">
                  <div style={{ color: "rgba(37,99,235,0.8)" }}>{Icon.Globe}</div>
                  <a
                    href="https://www.iitil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                  >
                    www.iitil.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default function PortfolioPage() {
  return (
    <main
      className="min-h-screen text-white overflow-x-clip" /* 💡 CHANGED: 'overflow-x-hidden' to 'overflow-x-clip' */
      style={{ background: "rgba(2,8,23,1)" }}
    >
      <Navbar />

      <HeroSection />

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />
      </div>

      <ProjectsSlider
        sectionId="active-projects"
        label="Active Projects"
        heading="Current Project Portfolio"
        description="Our dedicated teams are currently delivering innovative solutions across multiple high-impact projects."
        cards={PROJECT_CARDS}
      />

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />
      </div>

      <OrgStructureSection />

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />
      </div>

      <ServicesShowcaseGrid
        sectionId="service-ecosystem"
        label="Core Service Verticals"
        heading="Comprehensive Services"
        description="IITIL delivers a complete digital ecosystem covering infrastructure, applications, CRM systems, SaaS platforms, automation, cybersecurity, and data services."
        cards={ECOSYSTEM_CARDS}
      />

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />
      </div>

      <GlobalDeliverySection />

      <CTASection />

      <Footer />
    </main>
  );
}