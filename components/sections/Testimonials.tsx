"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Star } from "lucide-react";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";

const FEATURED_QUOTE = {
  quote:
    "IITIL didn't hand us another dashboard. They handed us a decision we could finally agree on.",
  name: "Client name",
  role: "Title, Company",
  initials: "CN",
  color: "linear-gradient(135deg,#2563eb,#1d4ed8)",
};

const TESTIMONIALS = [
  {
    name: FEATURED_QUOTE.name,
    role: FEATURED_QUOTE.role,
    region: "",
    initials: FEATURED_QUOTE.initials,
    color: FEATURED_QUOTE.color,
    quote: FEATURED_QUOTE.quote,
  },
  {
    name: "Vikram Joshi",
    role: "Managing Director, NexaCorp",
    region: "India",
    initials: "VJ",
    color: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    quote:
      "Legacy modernisation is painful unless you have Crediple in your corner. They migrated eight years of data without a single hour of downtime.",
  },
  {
    name: "Sarah Whitmore",
    role: "CTO, Meridian Capital",
    region: "UK",
    initials: "SW",
    color: "linear-gradient(135deg,#3b82f6,#2563eb)",
    quote:
      "We evaluated three firms. IITIL was the only one that could speak to our data architecture and our compliance requirements in the same conversation.",
  },
  {
    name: "Deepa Krishnan",
    role: "Head of Product, CloudNine",
    region: "India",
    initials: "DK",
    color: "linear-gradient(135deg,#60a5fa,#3b82f6)",
    quote:
      "We needed speed without sacrificing quality. Crediple gave us enterprise-grade infrastructure at startup velocity.",
  },
  {
    name: "Marcus Lindqvist",
    role: "VP Engineering, Nordex Systems",
    region: "Europe",
    initials: "ML",
    color: "linear-gradient(135deg,#1d4ed8,#2563eb)",
    quote:
      "The pod model worked exactly as described. One team, one backlog, one architecture — no vendor coordination overhead.",
  },
  {
    name: "Rachel Okafor",
    role: "Director of Data, Pinnacle Health",
    region: "USA",
    initials: "RO",
    color: "linear-gradient(135deg,#2563eb,#1e40af)",
    quote:
      "Patient data governance was non-negotiable. IITIL built the platform with HIPAA alignment from the first sprint, not as a retrofit.",
  },
  {
    name: "James Harrington",
    role: "COO, Stratify Logistics",
    region: "UK",
    initials: "JH",
    color: "linear-gradient(135deg,#3b82f6,#1d4ed8)",
    quote:
      "Forecast accuracy went from 71% to 94% in one quarter. The models are in production, not sitting in a slide deck.",
  },
  {
    name: "Priya Menon",
    role: "Chief Data Officer, Vertexa",
    region: "Singapore",
    initials: "PM",
    color: "linear-gradient(135deg,#60a5fa,#2563eb)",
    quote:
      "Audit cycles that took three weeks now finish in two days. That alone justified the engagement.",
  },
  {
    name: "Omar Al-Rashid",
    role: "Head of Digital, Gulf Finance Group",
    region: "UAE",
    initials: "OA",
    color: "linear-gradient(135deg,#2563eb,#3b82f6)",
    quote:
      "Regulatory reporting used to be a quarterly fire drill. IITIL automated the pipeline and our compliance team finally sleeps at month-end.",
  },
  {
    name: "Elena Vasquez",
    role: "VP Analytics, RetailOne",
    region: "Europe",
    initials: "EV",
    color: "linear-gradient(135deg,#1d4ed8,#60a5fa)",
    quote:
      "Personalisation uplift was 22% in the first two months. They understood retail operations, not just the algorithms.",
  },
  {
    name: "David Chen",
    role: "Founder, ArcLayer",
    region: "USA",
    initials: "DC",
    color: "linear-gradient(135deg,#2563eb,#1d4ed8)",
    quote:
      "We raised our Series B with a data room that actually reflected our product. IITIL built the analytics layer investors could trust.",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 sm:gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="fill-[#2563eb] text-[#2563eb] sm:w-[14px] sm:h-[14px]" />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[290px] sm:w-[340px] md:w-[360px] rounded-2xl p-5 sm:p-6 mx-2 sm:mx-3"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(37,99,235,0.1)",
      }}
    >
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold text-white flex-shrink-0"
          style={{ background: t.color }}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <p className="text-xs sm:text-sm font-semibold text-white truncate">{t.name}</p>
          <p className="text-[10px] sm:text-xs text-white/40 truncate">{t.role}</p>
          {t.region && <p className="text-[9px] sm:text-[10px] text-white/25 mt-0.5">{t.region}</p>}
        </div>
      </div>
      <StarRating />
      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
        &ldquo;{t.quote}&rdquo;
      </p>
    </div>
  );
}

const SPEED = 38;

function MarqueeTrack({
  testimonials,
  direction,
}: {
  testimonials: typeof TESTIMONIALS;
  direction: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const halfWidthRef = useRef(0);
  const x = useMotionValue(0);
  const pausedRef = useRef(false);
  const doubled = useMemo(() => [...testimonials, ...testimonials], [testimonials]);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const half = trackRef.current.scrollWidth / 2;
        halfWidthRef.current = half;
        if (direction === "right" && x.get() === 0) x.set(-half);
      }
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, [direction, x]);

  useEffect(() => {
    let lastTime = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;
      const half = halfWidthRef.current;
      if (!pausedRef.current && half > 0) {
        const delta = (dt / 1000) * SPEED;
        if (direction === "left") {
          let next = x.get() - delta;
          if (next <= -half) next += half;
          x.set(next);
        } else {
          let next = x.get() + delta;
          if (next >= 0) next -= half;
          x.set(next);
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [direction, x]);

  return (
    <div
      className="overflow-hidden py-1"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onTouchStart={() => { pausedRef.current = true; }}
      onTouchEnd={() => { pausedRef.current = false; }}
    >
      <motion.div ref={trackRef} className="flex will-change-transform" style={{ x }}>
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 5);
  const row2 = TESTIMONIALS.slice(5);

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="mb-4 sm:mb-6">
        <MarqueeTrack testimonials={row1} direction="left" />
      </div>
      <MarqueeTrack testimonials={row2} direction="right" />
    </section>
  );
}