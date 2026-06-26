"use client";

import {
  LineChart,
  MessageSquare,
  ScanEye,
  Bot,
  Star,
  Boxes,
  Users,
  AlertTriangle,
  TrendingDown,
  Brain,
  Sparkles,
  Gauge,
  Zap,
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
    title: "Predictive Analytics",
    description:
      "We build data-driven models that forecast trends, customer behavior, and business outcomes, helping you make proactive and informed decisions.",
    icon: LineChart,
  },
  {
    num: "02",
    title: "Natural Language Processing (NLP)",
    description:
      "Enable systems to understand, interpret, and respond to human language for applications like chatbots, sentiment analysis, and document processing.",
    icon: MessageSquare,
  },
  {
    num: "03",
    title: "Computer Vision Solutions",
    description:
      "Leverage image and video analysis for automation, quality checks, facial recognition, and surveillance intelligence.",
    icon: ScanEye,
  },
  {
    num: "04",
    title: "AI-Powered Automation",
    description:
      "Automate repetitive and rule-based processes to improve operational efficiency and reduce human intervention.",
    icon: Bot,
  },
  {
    num: "05",
    title: "Recommendation Systems",
    description:
      "Design intelligent engines that provide personalized suggestions to customers, improving engagement and conversion rates.",
    icon: Star,
  },
  {
    num: "06",
    title: "Custom ML Model Development & Deployment",
    description:
      "Develop, train, and deploy tailored machine learning models aligned with your specific business requirements and scale them seamlessly.",
    icon: Boxes,
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

export default function AIMLPage() {
  return (
    <ServicePageLayout>
      <ServiceHeroSection
        id="ai-ml-hero"
        pillLabel="AI & ML"
        title="Intelligence That Drives Growth"
        descriptionPrimary="We deliver advanced Artificial Intelligence and Machine Learning solutions designed to transform data into actionable intelligence. Our services enable businesses to automate processes, enhance decision-making, and unlock new growth opportunities."
        descriptionSecondary="By leveraging predictive analytics, intelligent automation, and scalable models, we help organizations stay competitive in a rapidly evolving digital landscape. Our approach focuses on accuracy, efficiency, and real-world business impact."
      />
      <KeyOfferingsSection items={KEY_OFFERINGS} />
      <UseCasesSection items={USE_CASES} />
      <WhyChooseIITILSection items={WHY_IITIL} />
      <BenefitsGridSection title="Transform with AI" items={BENEFITS} />
      <ServiceCTASection
        headline="Ready to Harness the Power of AI for Your Business?"
        description="Partner with IITIL to deploy intelligent AI and ML solutions that drive measurable growth, efficiency, and competitive advantage."
      />
    </ServicePageLayout>
  );
}
