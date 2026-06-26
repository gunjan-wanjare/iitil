"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Database, 
  GitFork, 
  BarChart3, 
  ArrowRight, 
  Bot, 
  Sparkles, 
  Send, 
  Server, 
  Cpu, 
  Activity, 
  Cloud, 
  Terminal, 
  Braces, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ScrollStack from "@/components/scroll-stack/ScrollStack";

function WorkflowMockup() {
  return (
    <div className="w-full h-full bg-[#050b14] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(37,99,235,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4 text-[#2563eb]" />
          <span className="text-xs text-white/40 font-mono tracking-wider uppercase">Pipeline Engine</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[10px] text-blue-400 font-medium font-mono">LIVE</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 my-auto relative z-10">
        <motion.div 
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 w-[85%]"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
            <Database className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white truncate">Ingest_Stream_S3</p>
            <p className="text-[10px] text-white/30 font-mono">1.2 TB/s • Parquet</p>
          </div>
        </motion.div>

        <div className="w-[85%] flex justify-center -my-2 pl-4">
          <div className="h-4 w-[2px] bg-gradient-to-b from-blue-500/50 to-blue-400/50 relative">
            <motion.div 
              animate={{ y: [0, 16] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-[-2px] w-1.5 h-1.5 rounded-full bg-blue-400 blur-[1px]"
            />
          </div>
        </div>

        <motion.div 
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-3 bg-white/[0.05] border border-blue-500/20 rounded-xl p-3 w-[85%] self-end shadow-[0_0_15px_rgba(37,99,235,0.1)] relative"
        >
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <GitFork className="w-4 h-4 animate-spin-slow" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white truncate">Smart_Routing_Layer</p>
            <p className="text-[10px] text-blue-400 font-mono font-medium">Validating schema...</p>
          </div>
        </motion.div>

        <div className="w-[85%] flex justify-center -my-2 pr-4 self-end">
          <div className="h-4 w-[2px] bg-gradient-to-b from-blue-400/50 to-blue-300/50 relative">
            <motion.div 
              animate={{ y: [0, 16] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.75 }}
              className="absolute top-0 left-[-2px] w-1.5 h-1.5 rounded-full bg-blue-300 blur-[1px]"
            />
          </div>
        </div>

        <motion.div 
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-3 w-[85%]"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-300">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-white truncate">BI_Metrics_Store</p>
            <p className="text-[10px] text-white/30 font-mono">99.98% Accuracy Sync</p>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/[0.05] pt-3 flex items-center justify-between text-[11px] font-mono text-white/30 relative z-10">
        <span>Clusters: 04 active</span>
        <span>Latency: 12ms</span>
      </div>
    </div>
  );
}

function AssistantMockup() {
  return (
    <div className="w-full h-full bg-[#050b14] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-4 h-4 text-blue-500" />
        <span className="text-xs text-white/40 font-mono uppercase tracking-wider">Cognitive Agent</span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-4 my-auto">
        <div className="flex justify-center mb-1">
          <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"
            />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white border border-blue-400/30 relative z-10 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-2 text-xs text-white/70 flex items-center justify-between">
            <span>Parse document telemetry</span>
            <span className="text-[10px] font-mono text-white/30">CMD + 1</span>
          </div>
          
          <motion.div 
            animate={{ borderColor: ["rgba(255,255,255,0.06)", "rgba(37,99,235,0.4)", "rgba(255,255,255,0.06)"] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="bg-blue-500/[0.04] border border-blue-500/20 rounded-xl px-4 py-2.5 text-xs text-white flex items-center justify-between shadow-[0_0_15px_rgba(37,99,235,0.05)]"
          >
            <span className="flex items-center gap-2 font-medium">
              <motion.div 
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
              />
              Executing predictive model tuning...
            </span>
            <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center text-white scale-90">
              <Send className="w-2.5 h-2.5" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-[10px] text-white/20 text-center font-mono border-t border-white/[0.05] pt-3">
        Context windows: 128k tokens optimized
      </div>
    </div>
  );
}

function ChartMockup() {
  return (
    <div className="w-full h-full bg-[#050b14] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-blue-500" />
          <span className="text-xs text-white/40 font-mono uppercase tracking-wider">Multi-Cluster Mesh</span>
        </div>
        <span className="text-[11px] font-mono text-blue-400 font-semibold">99.99% Uptime</span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "CPU Edge", val: "42%", color: "bg-blue-500" },
            { label: "Memory", val: "68%", color: "bg-blue-400" },
            { label: "Network IO", val: "12ms", color: "bg-blue-300" }
          ].map((m, idx) => (
            <div key={idx} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-2.5 flex flex-col gap-1.5">
              <span className="text-[10px] text-white/40 font-mono truncate">{m.label}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold text-white font-mono">{m.val}</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: m.val.includes("%") ? m.val : "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className={`h-full ${m.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="relative bg-white/[0.01] border border-white/[0.04] rounded-xl p-3 h-20 flex flex-col justify-end">
          <div className="absolute top-2 left-3 flex items-center gap-1.5 text-[10px] text-white/30 font-mono">
            <Activity className="w-3 h-3 text-blue-400" />
            Infrastructure Micro-Traffic
          </div>
          <svg className="w-full h-10 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
            <defs>
              <linearGradient id="meshGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,20 Q15,4 30,12 T60,5 T90,15 T100,8 L100,20 L0,20 Z" fill="url(#meshGrad)" />
            <path d="M0,20 Q15,4 30,12 T60,5 T90,15 T100,8" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-white/20 border-t border-white/[0.05] pt-3">
        <span className="flex items-center gap-1"><Cloud className="w-3 h-3" /> AWS / GCP Native</span>
        <span>Regions: global-mesh</span>
      </div>
    </div>
  );
}

function CodeMockup() {
  return (
    <div className="w-full h-full bg-[#050b14] rounded-2xl p-5 flex flex-col justify-between font-mono relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/[0.05] pb-3 mb-2">
        <div className="flex gap-1.5">
          {["bg-[#ff5f57]", "bg-[#febc2e]", "bg-[#28c840]"].map((c, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${c} opacity-75`} />
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-white/30">
          <Terminal className="w-3 h-3" /> iitil_gateway.py
        </div>
      </div>

      <div className="flex-1 text-[11px] leading-[1.6] text-white/80 my-auto">
        <p><span className="text-pink-500">import</span> iitil_core <span className="text-pink-500">as</span> it</p>
        <p className="mt-1"><span className="text-blue-400">@it.gateway</span>(<span className="text-blue-300">secure_mesh</span>)</p>
        <p><span className="text-blue-300">async def</span> <span className="text-blue-400">sync_enterprise</span>(ctx):</p>
        <p className="pl-4 text-white/40"># Initialize federated schemas</p>
        <p className="pl-4">node = <span className="text-pink-500">await</span> it.ConnectCluster()</p>
        <p className="pl-4">status = <span className="text-pink-500">await</span> node.inject_policies(</p>
        <p className="pl-8">policy_rules=ctx.get_active_rules()</p>
        <p className="pl-4">)</p>
        <p className="pl-4"><span className="text-pink-500">return</span> &#123;&quot;status&quot;: status.code&#125;</p>
      </div>

      <div className="mt-3 bg-white/[0.03] border border-white/[0.06] rounded-xl p-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Braces className="w-3.5 h-3.5 text-blue-400" />
          <div className="flex flex-col">
            <span className="text-[9px] text-white/30 uppercase leading-none">API Health</span>
            <span className="text-[11px] font-semibold text-white leading-tight">JSON Schema Synced</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-blue-400 font-medium bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md">
          <ShieldCheck className="w-3 h-3" /> Secure
        </div>
      </div>
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
    mockup: <WorkflowMockup />,
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
    mockup: <AssistantMockup />,
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
    mockup: <ChartMockup />,
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
    mockup: <CodeMockup />,
  },
];

export function ServiceCard({ card }: { card: (typeof CARDS)[0] }) {
  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px]"
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

      <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center gap-0">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase mb-6 w-fit font-mono"
          style={{
            background: "rgba(37,99,235,0.12)",
            border: "1px solid rgba(37,99,235,0.25)",
            color: "rgba(96,165,250,0.9)",
          }}
        >
          {card.tag}
        </span>
        <h3 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-[1.2] mb-3">
          {card.title}
        </h3>
        {"headline" in card && card.headline && (
          <p className="text-base md:text-lg font-medium text-white/75 mb-4 leading-snug">
            {card.headline}
          </p>
        )}
        <p className="text-sm md:text-lg text-white/45 font-light leading-relaxed mb-6">
          {card.description}
        </p>
        <div className="flex flex-col gap-3.5 mb-8">
          {card.bullets.map((b, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-medium text-white/75">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(37,99,235,0.15)",
                  border: "1px solid rgba(37,99,235,0.3)",
                }}
              >
                <CheckCircle2 className="w-3 h-3 text-[#60a5fa]" />
              </span>
              {b}
            </span>
          ))}
        </div>
        {"ctaLabel" in card && card.ctaLabel && (
          <AnimatedButton
            variant="ghost"
            href={"ctaHref" in card ? card.ctaHref : "/reach-us"}
            className="text-sm px-6 py-3 w-fit"
          >
            {card.ctaLabel}
          </AnimatedButton>
        )}
      </div>

      <div className="relative z-10 w-full md:w-[46%] flex-shrink-0 p-5 md:p-6 flex items-center">
        <div
          className="w-full rounded-2xl overflow-hidden min-h-[340px] md:min-h-[380px] h-full"
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
    <section id="services" className="relative">
      {/* The Fix */}
      <div className="flex flex-col items-center text-center pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-6">
          <PillLabel>The Fix</PillLabel>
        </div>
        <BlurText
          text="Smarter business starts with smarter data."
          animateBy="words"
          direction="bottom"
          delay={100}
          stepDuration={0.45}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center justify-center max-w-4xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 text-base md:text-lg text-white/45 max-w-3xl leading-relaxed"
        >
          Data sitting in twelve places isn&apos;t twelve times more{" "}
          <span className="text-white/70 font-medium">valuable</span> - it&apos;s twelve times{" "}
          <span className="text-white/70 font-medium">harder</span> to trust.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 text-base md:text-lg text-white/45 max-w-3xl leading-relaxed"
        >
          We bring your data, analytics, AI, cloud, and engineering into one operating layer, then
          make it actually work for the people who need to decide things.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 text-base text-white/40 max-w-2xl leading-relaxed"
        >
          Less guesswork. More intelligence. Fewer meetings about which number is right!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-8"
        >
          <AnimatedButton variant="ghost" href="/data-services">
            Get smarter with your data
          </AnimatedButton>
        </motion.div>
      </div>

      {/* What We Actually Do */}
      <div className="flex flex-col items-center text-center pb-8 max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-6">
          <PillLabel>What We Actually Do</PillLabel>
        </div>
        <BlurText
          text="Better data. Smarter systems. Real outcomes."
          animateBy="words"
          direction="bottom"
          delay={100}
          stepDuration={0.45}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white text-center justify-center"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-6 text-base md:text-lg text-white/45 max-w-2xl leading-relaxed"
        >
          End-to-end data intelligence and technology services for enterprises ready to modernise
          how they built to deliver, not to drag on.
        </motion.p>
      </div>

      <ScrollStack labels={["Data", "AI", "Cloud", "Build"]}>
        {CARDS.map((card, i) => (
          <ServiceCard key={i} card={card} />
        ))}
      </ScrollStack>
    </section>
  );
}