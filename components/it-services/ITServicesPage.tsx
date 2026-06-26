"use client";

import {
  Database,
  Warehouse,
  BarChart3,
  PieChart,
  ShieldCheck,
  Cpu,
  Users,
  AlertTriangle,
  TrendingDown,
  Brain,
  Sparkles,
  Gauge,
  Zap,
  LineChart,
  ShieldAlert,
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
    title: "Data Integration & Management",
    description:
      "Seamlessly consolidate data from multiple sources into a unified system, ensuring consistency, accuracy, and easy accessibility across the organization.",
    icon: Database,
  },
  {
    num: "02",
    title: "Data Warehousing Solutions",
    description:
      "Design and implement scalable data warehouses that enable structured storage, faster retrieval, and efficient reporting for business intelligence needs.",
    icon: Warehouse,
  },
  {
    num: "03",
    title: "Data Analytics & Insights",
    description:
      "Leverage advanced analytics to uncover patterns, trends, and actionable insights that drive strategic decision-making and business growth.",
    icon: BarChart3,
  },
  {
    num: "04",
    title: "Data Visualization & Reporting",
    description:
      "Transform complex datasets into intuitive dashboards and visual reports for real-time monitoring and executive-level clarity.",
    icon: PieChart,
  },
  {
    num: "05",
    title: "Data Security & Governance",
    description:
      "Ensure data protection through robust security frameworks, compliance standards, and governance policies to maintain integrity and confidentiality.",
    icon: ShieldCheck,
  },
  {
    num: "06",
    title: "Big Data & AI Enablement",
    description:
      "Enable organizations to harness the power of big data and AI technologies for predictive analysis, automation, and intelligent operations.",
    icon: Cpu,
  },
];

const USE_CASES: UseCaseItem[] = [
  {
    title: "Customer Intelligence & Personalization",
    description:
      "Analyze customer data to deliver personalized experiences, targeted marketing campaigns, and improved customer satisfaction.",
    icon: Users,
  },
  {
    title: "Fraud Detection & Risk Management",
    description:
      "Identify suspicious patterns and anomalies in real-time to prevent fraud and reduce financial risks.",
    icon: AlertTriangle,
  },
  {
    title: "Process Optimization & Cost Reduction",
    description:
      "Use AI-driven insights to streamline operations, eliminate inefficiencies, and significantly reduce operational costs.",
    icon: TrendingDown,
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

export default function ITServicesPage() {
  return (
    <ServicePageLayout>
      <ServiceHeroSection
        id="it-services-hero"
        pillLabel="IT Services"
        title="Build Powerful, Scalable Digital Systems"
        descriptionPrimary="Data Services at IITIL are designed to help businesses transform raw information into meaningful insights and strategic assets. We enable organizations to collect, manage, process, and analyze data with precision and scalability. Our solutions ensure data accuracy, security, and accessibility across systems."
        descriptionSecondary="By leveraging advanced analytics and intelligent frameworks, we empower better decision-making. From data integration to visualization, we cover the entire lifecycle. Our approach is built to support growth, efficiency, and competitive advantage."
      />
      <KeyOfferingsSection items={KEY_OFFERINGS} />
      <UseCasesSection items={USE_CASES} />
      <WhyChooseIITILSection items={WHY_IITIL} />
      <BenefitsGridSection title="Protect What Matters Most" items={BENEFITS} />
      <ServiceCTASection
        headline="Ready to Transform Your Data Into Strategic Assets?"
        description="Partner with IITIL to build intelligent data systems that drive growth, efficiency, and competitive advantage across your organization."
      />
    </ServicePageLayout>
  );
}
