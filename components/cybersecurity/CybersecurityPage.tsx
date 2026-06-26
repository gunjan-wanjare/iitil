"use client";

import {
  ClipboardList,
  Network,
  Laptop,
  KeyRound,
  Radar,
  FileCheck,
  Building2,
  Landmark,
  HeartPulse,
  Target,
  Eye,
  Scale,
  ShieldAlert,
  Lock,
  RefreshCw,
  TrendingDown,
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
    title: "Security Assessment & Audits",
    description:
      "Comprehensive security assessments to identify vulnerabilities, evaluate risks, and strengthen overall security posture.",
    icon: ClipboardList,
  },
  {
    num: "02",
    title: "Network Security Solutions",
    description:
      "Protect networks through firewalls, intrusion detection systems, secure access controls, and continuous monitoring.",
    icon: Network,
  },
  {
    num: "03",
    title: "Endpoint Protection",
    description:
      "Secure desktops, laptops, servers, and mobile devices against malware, ransomware, and advanced threats.",
    icon: Laptop,
  },
  {
    num: "04",
    title: "Identity & Access Management",
    description:
      "Implement secure authentication, role-based access controls, and identity governance to protect critical systems.",
    icon: KeyRound,
  },
  {
    num: "05",
    title: "Threat Monitoring & Incident Response",
    description:
      "Real-time monitoring, threat detection, and rapid incident response to minimize business disruption and security risks.",
    icon: Radar,
  },
  {
    num: "06",
    title: "Compliance & Governance",
    description:
      "Ensure adherence to industry standards and regulatory frameworks including ISO, GDPR, SOC2, HIPAA, and other compliance requirements.",
    icon: FileCheck,
  },
];

const USE_CASES: UseCaseItem[] = [
  {
    title: "Enterprise Security Modernization",
    description:
      "Organizations strengthening security infrastructure to defend against modern cyber threats and sophisticated attacks.",
    icon: Building2,
  },
  {
    title: "Financial & Banking Systems",
    description:
      "Protect sensitive financial transactions, customer information, and regulatory compliance requirements.",
    icon: Landmark,
  },
  {
    title: "Healthcare & Sensitive Data Protection",
    description:
      "Secure patient records, healthcare applications, and confidential information while maintaining compliance standards.",
    icon: HeartPulse,
  },
];

const WHY_IITIL: WhyIITILItem[] = [
  {
    num: "01",
    title: "Proactive Security Strategy",
    description:
      "We identify vulnerabilities and mitigate risks before they become critical threats to your business operations.",
    icon: Target,
  },
  {
    num: "02",
    title: "Advanced Threat Intelligence",
    description:
      "Our security solutions leverage real-time monitoring and intelligent threat detection to provide comprehensive protection.",
    icon: Eye,
  },
  {
    num: "03",
    title: "Compliance-Ready Frameworks",
    description:
      "We implement security architectures that align with industry regulations and audit requirements.",
    icon: Scale,
  },
];

const BENEFITS: BenefitItem[] = [
  {
    title: "Threat Prevention",
    description:
      "Identify and stop cyber threats before they impact business operations.",
    icon: ShieldAlert,
  },
  {
    title: "Data Security",
    description:
      "Protect sensitive information using encryption, access controls, and secure storage practices.",
    icon: Lock,
  },
  {
    title: "Business Continuity",
    description:
      "Reduce downtime and ensure uninterrupted operations through resilient security strategies.",
    icon: RefreshCw,
  },
  {
    title: "Risk Reduction",
    description:
      "Minimize financial, operational, and reputational risks associated with cyber incidents.",
    icon: TrendingDown,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Maintain compliance with industry standards and legal requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Security Visibility",
    description:
      "Gain real-time insights into security events, system activity, and threat intelligence.",
    icon: Monitor,
  },
];

export default function CybersecurityPage() {
  return (
    <ServicePageLayout>
      <ServiceHeroSection
        id="cybersecurity-hero"
        pillLabel="Cybersecurity"
        title="Protect What Matters Most"
        descriptionPrimary="We provide enterprise-grade Cybersecurity Services designed to safeguard digital assets, protect sensitive information, and ensure business continuity. Our solutions help organizations identify vulnerabilities, prevent cyber threats, and maintain compliance with industry regulations."
        descriptionSecondary="By combining proactive monitoring, advanced threat intelligence, and robust security frameworks, we help businesses operate confidently in an increasingly complex digital landscape."
      />
      <KeyOfferingsSection items={KEY_OFFERINGS} />
      <UseCasesSection items={USE_CASES} />
      <WhyChooseIITILSection items={WHY_IITIL} />
      <BenefitsGridSection
        title="Protect Your Digital Ecosystem"
        items={BENEFITS}
      />
      <ServiceCTASection
        headline="Ready to Strengthen Your Security Posture?"
        description="Partner with IITIL to build resilient cybersecurity defenses that protect your digital assets and ensure business continuity."
      />
    </ServicePageLayout>
  );
}
