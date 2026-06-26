"use client";

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
} from "lucide-react";
import ServicePageLayout from "@/components/service-pages/ServicePageLayout";
import ServiceHeroSection from "@/components/service-pages/ServiceHeroSection";
import UseCasesSection from "@/components/service-pages/UseCasesSection";
import WhyChooseIITILSection from "@/components/service-pages/WhyChooseIITILSection";
import BenefitsGridSection from "@/components/service-pages/BenefitsGridSection";
import ServiceCTASection from "@/components/service-pages/ServiceCTASection";
import HorizontalScrollCards, {
  type HorizontalCardData,
} from "@/components/solutions/HorizontalScrollCards";
import type { BenefitItem, UseCaseItem, WhyIITILItem } from "@/components/service-pages/types";

const KEY_OFFERINGS_CARDS: HorizontalCardData[] = [
  {
    id: "csd",
    tag: "01",
    title: "Custom Software Development",
    description:
      "Seamlessly consolidate data from multiple sources into a unified system, ensuring consistency, accuracy, and easy accessibility across the organization.",
    icon: <Code size={20} strokeWidth={1.8} />,
    accent: "#2563eb",
  },
  {
    id: "dwh",
    tag: "02",
    title: "Data Warehousing Solutions",
    description:
      "Design and implement scalable data warehouses that enable structured storage, faster retrieval, and efficient reporting for business intelligence needs.",
    icon: <Warehouse size={20} strokeWidth={1.8} />,
    accent: "#3b82f6",
  },
  {
    id: "dai",
    tag: "03",
    title: "Data Analytics & Insights",
    description:
      "Leverage advanced analytics to uncover patterns, trends, and actionable insights that drive strategic decision-making and business growth.",
    icon: <BarChart3 size={20} strokeWidth={1.8} />,
    accent: "#60a5fa",
  },
  {
    id: "dvr",
    tag: "04",
    title: "Data Visualization & Reporting",
    description:
      "Transform complex datasets into intuitive dashboards and visual reports for real-time monitoring and executive-level clarity.",
    icon: <PieChart size={20} strokeWidth={1.8} />,
    accent: "#1d4ed8",
  },
  {
    id: "dsg",
    tag: "05",
    title: "Data Security & Governance",
    description:
      "Ensure data protection through robust security frameworks, compliance standards, and governance policies to maintain integrity and confidentiality.",
    icon: <ShieldCheck size={20} strokeWidth={1.8} />,
    accent: "#2563eb",
  },
  {
    id: "bdai",
    tag: "06",
    title: "Big Data & AI Enablement",
    description:
      "Enable organizations to harness the power of big data and AI technologies for predictive analysis, automation, and intelligent operations.",
    icon: <Cpu size={20} strokeWidth={1.8} />,
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

      <HorizontalScrollCards
        sectionId="key-offerings"
        label="Services"
        heading="Key Offerings"
        description="Comprehensive data services that help organizations collect, manage, analyze, and secure information across the entire data lifecycle."
        cards={KEY_OFFERINGS_CARDS}
      />

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
