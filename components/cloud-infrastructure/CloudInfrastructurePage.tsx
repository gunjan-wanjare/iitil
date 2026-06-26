"use client";

import {
  CloudUpload,
  CloudCog,
  Network,
  GitBranch,
  ShieldCheck,
  HardDriveDownload,
  Building2,
  ShoppingCart,
  Landmark,
  Layers,
  Shield,
  Gauge,
  Lock,
  ShieldAlert,
  KeyRound,
  RefreshCw,
  ClipboardCheck,
  Monitor,
} from "lucide-react";
import ServicePageLayout from "@/components/service-pages/ServicePageLayout";
import ServiceHeroSection from "@/components/service-pages/ServiceHeroSection";
import KeyOfferingsSection from "@/components/service-pages/KeyOfferingsSection";
import UseCasesSection from "@/components/service-pages/UseCasesSection";
import WhyChooseIITILSection from "@/components/service-pages/WhyChooseIITILSection";
import BenefitsGridSection from "@/components/service-pages/BenefitsGridSection";
import ServiceCTASection from "@/components/service-pages/ServiceCTASection";
import type {
  BenefitItem,
  ServiceOfferingItem,
  UseCaseItem,
  WhyIITILItem,
} from "@/components/service-pages/types";

const KEY_OFFERINGS: ServiceOfferingItem[] = [
  {
    num: "01",
    title: "Cloud Migration Services",
    description:
      "We enable smooth and secure migration of applications, databases, and workloads from on-premise systems to cloud platforms with minimal downtime and zero data loss.",
    icon: CloudUpload,
  },
  {
    num: "02",
    title: "Cloud Infrastructure Management",
    description:
      "End-to-end management of cloud environments including monitoring, optimization, scaling, and performance tuning for maximum efficiency.",
    icon: CloudCog,
  },
  {
    num: "03",
    title: "Hybrid & Multi-Cloud Solutions",
    description:
      "Design and implementation of hybrid and multi-cloud architectures to ensure flexibility, redundancy, and vendor independence.",
    icon: Network,
  },
  {
    num: "04",
    title: "DevOps & Automation Services",
    description:
      "Automation of deployment pipelines, CI/CD integration, and infrastructure provisioning for faster and more reliable software delivery.",
    icon: GitBranch,
  },
  {
    num: "05",
    title: "Cloud Security & Compliance",
    description:
      "Advanced security frameworks including encryption, identity management, threat detection, and compliance adherence (ISO, GDPR, etc.).",
    icon: ShieldCheck,
  },
  {
    num: "06",
    title: "Disaster Recovery & Backup Solutions",
    description:
      "Robust backup systems and disaster recovery planning to ensure business continuity and rapid recovery during failures or cyber incidents.",
    icon: HardDriveDownload,
  },
];

const USE_CASES: UseCaseItem[] = [
  {
    title: "Enterprise Digital Transformation",
    description:
      "Large organizations moving from legacy systems to cloud-native infrastructure for better scalability, agility, and cost control.",
    icon: Building2,
  },
  {
    title: "E-Commerce Platforms",
    description:
      "High-traffic online stores using cloud infrastructure for handling peak loads, ensuring uptime, and delivering fast customer experiences.",
    icon: ShoppingCart,
  },
  {
    title: "FinTech & Data-Driven Applications",
    description:
      "Secure and compliant cloud environments for financial applications requiring high availability, real-time processing, and strong data protection.",
    icon: Landmark,
  },
];

const WHY_IITIL: WhyIITILItem[] = [
  {
    num: "01",
    title: "Scalable & Flexible Infrastructure",
    description:
      "We design cloud environments that scale effortlessly with business growth, ensuring performance stability during peak demands and expansion phases.",
    icon: Layers,
  },
  {
    num: "02",
    title: "Secure Cloud Architecture",
    description:
      "IITIL implements strong security frameworks including encryption, access control, and compliance-ready configurations to protect critical business assets.",
    icon: Shield,
  },
  {
    num: "03",
    title: "Optimized Performance & Cost Efficiency",
    description:
      "We help businesses reduce infrastructure costs while improving system performance through cloud optimization, automation, and resource management.",
    icon: Gauge,
  },
];

const BENEFITS: BenefitItem[] = [
  {
    title: "Data Protection & Security",
    description:
      "Safeguard sensitive business and customer data using advanced encryption, backup systems, and strict access controls.",
    icon: Lock,
  },
  {
    title: "Threat Detection & Prevention",
    description:
      "Identify and neutralize cyber threats in real time through continuous monitoring and intelligent security systems.",
    icon: ShieldAlert,
  },
  {
    title: "Identity & Access Management",
    description:
      "Ensure only authorized users access critical systems through secure authentication, role-based access, and multi-factor verification.",
    icon: KeyRound,
  },
  {
    title: "Business Continuity & Disaster Recovery",
    description:
      "Maintain uninterrupted operations with robust backup, recovery plans, and failover systems during unexpected disruptions.",
    icon: RefreshCw,
  },
  {
    title: "Compliance & Risk Management",
    description:
      "Stay compliant with industry regulations through regular audits, security policies, and governance frameworks.",
    icon: ClipboardCheck,
  },
  {
    title: "Infrastructure Monitoring & Control",
    description:
      "Gain full visibility of cloud and IT infrastructure performance with real-time monitoring, alerts, and automated management tools.",
    icon: Monitor,
  },
];

export default function CloudInfrastructurePage() {
  return (
    <ServicePageLayout>
      <ServiceHeroSection
        id="cloud-infrastructure-hero"
        pillLabel="Cloud Infrastructure"
        title="Turn Data into Strategic Advantage"
        descriptionPrimary="We provide scalable, secure, and high-performance Cloud & Infrastructure Services designed to help businesses modernize their IT environment and improve operational efficiency. Our solutions ensure seamless migration, optimized workloads, and uninterrupted digital operations across hybrid and multi-cloud environments."
        descriptionSecondary="With a focus on reliability, security, and cost optimization, we enable organizations to build a future-ready infrastructure that supports growth and innovation."
      />
      <KeyOfferingsSection items={KEY_OFFERINGS} />
      <UseCasesSection items={USE_CASES} />
      <WhyChooseIITILSection items={WHY_IITIL} />
      <BenefitsGridSection title="Protect What Matters Most" items={BENEFITS} />
      <ServiceCTASection
        headline="Ready to Build a Future-Ready Cloud Infrastructure?"
        description="Partner with IITIL to modernize your IT environment with scalable, secure, and cost-optimized cloud solutions that support long-term growth."
      />
    </ServicePageLayout>
  );
}
