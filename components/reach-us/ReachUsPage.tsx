"use client";

import { useRef, useMemo, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MessageSquare, Mail, MapPin, Clock, Globe, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import BlurText from "@/components/ui/BlurText";
import PillLabel from "@/components/ui/PillLabel";
import GlowCard from "@/components/ui/GlowCard";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ContactForm from "@/components/reach-us/ContactForm";
import Image from "next/image";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.7, ease: EASE },
});

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Sattva+Knowledge+City+Hi-Tec+City+Hyderabad+Telangana+India&output=embed";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as Window & { __lenis?: { scrollTo: (target: Element, opts?: { offset?: number }) => void } }).__lenis;
  if (lenis?.scrollTo) {
    lenis.scrollTo(el, { offset: -100 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

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
      id="reach-us-hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Brand Logo - Completely hidden on mobile layouts */}
      <div className="hidden md:block md:absolute md:top-28 md:right-12 z-30 pointer-events-none">
        <div className="pointer-events-auto">
          <Image 
            src="/yaka_brand_logo.png"
            alt="Yaka Brand Logo" 
            width={80} 
            height={40}
            priority
            className="w-20 h-auto"
          />
        </div>
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
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ y: [0, 16, 0], opacity: [0.12, 0.32, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        aria-hidden
        className="absolute bottom-1/3 right-[12%] w-72 h-72 rounded-full pointer-events-none will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-12 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
          className="mb-8"
        >
          <PillLabel>Reach Us</PillLabel>
        </motion.div>

        <BlurText
          as="h1"
          text="Tell us what's tangled. Let's fix it together."
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
          className="mt-8 text-lg md:text-xl text-white/50 text-center max-w-3xl leading-relaxed"
        >
          You&apos;ve got a problem worth solving. We&apos;ve got the people who solve them.
          Connect with IITIL and let&apos;s talk about how data intelligence and technology
          move your business forward. Our experts are ready to understand what you&apos;re up
          against and map the fastest path through it.
        </motion.p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
   Section 2 — Consultation Options
──────────────────────────────────────────────────────────────── */
const CONSULTATION_CARDS = [
  {
    icon: Calendar,
    accent: "#2563eb",
    title: "Schedule a Consultation",
    description:
      "Book a meeting with our experts to discuss your specific requirements and explore potential solutions.",
    cta: "Get In Touch",
    action: () => scrollToSection("contact-form"),
  },
  {
    icon: MessageSquare,
    accent: "#3b82f6",
    title: "Speak to an Expert",
    description:
      "Connect directly with our technical specialists to get answers to your technical questions.",
    cta: "Get In Touch",
    action: () => scrollToSection("contact-form"),
  },
] as const;

const ConsultationSection = memo(function ConsultationSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {CONSULTATION_CARDS.map((card, i) => (
          <GlowCard key={card.title} delay={i * 0.12}>
            <div className="flex flex-col gap-5 h-full">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `${card.accent}18`,
                  border: `1px solid ${card.accent}35`,
                }}
              >
                <card.icon size={24} style={{ color: card.accent }} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <motion.button
                type="button"
                onClick={card.action}
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 text-sm font-semibold cursor-pointer self-start transition-colors duration-300"
                style={{ color: card.accent }}
              >
                {card.cta}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.button>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
});

/* ────────────────────────────────────────────────────────────────
   Section 3 — Contact Form + Details
──────────────────────────────────────────────────────────────── */
const CONTACT_ITEMS = [
  {
    icon: Mail,
    accent: "#2563eb",
    label: "Email",
    value: "business@iitil.com",
    href: "mailto:business@iitil.com",
  },
  {
    icon: MapPin,
    accent: "#60a5fa",
    label: "Address",
    value: "Sattva Knowledge City, Hi-Tec City\nHyderabad - 500081 Telangana\nIndia",
    href: undefined,
  },
  {
    icon: Clock,
    accent: "#1d4ed8",
    label: "Office Hours",
    value: "Monday – Friday\n9:00 AM – 6:00 PM (IST)\n\nSaturday – Sunday\nClosed",
    href: undefined,
  },
] as const;

const ContactSection = memo(function ContactSection() {
  return (
    <section id="contact-form" className="py-28 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form — left */}
          <motion.div {...fadeUp(0)} className="lg:col-span-3">
            <div className="mb-8">
              <PillLabel className="mb-4">Get In Touch</PillLabel>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Send Us a Message
              </h2>
              <p className="mt-3 text-sm text-white/45 leading-relaxed max-w-md">
                Fill out the form below and our team will respond within one
                business day.
              </p>
            </div>
            <div
              className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.04) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact details — right */}
          <motion.div {...fadeUp(0.15)} className="lg:col-span-2">
            
              

              <div className="relative w-full aspect-[5/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/contact.png"
                alt="Contact visualization"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

/* ────────────────────────────────────────────────────────────────
   Section 4 — Location
──────────────────────────────────────────────────────────────── */
const LocationSection = memo(function LocationSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <BlurText
            text="Visit Our Office"
            animateBy="words"
            direction="bottom"
            delay={80}
            stepDuration={0.4}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center justify-center"
          />
          <motion.p
            {...fadeUp(0.25)}
            className="mt-5 text-lg text-white/45 max-w-xl leading-relaxed"
          >
            Meet our team and explore how IITIL can support your business
            transformation initiatives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[400px]"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <iframe
              title="IITIL Office Location — Sattva Knowledge City, Hyderabad"
              src={MAP_EMBED_URL}
              className="absolute inset-0 w-full h-full border-0 grayscale-[30%] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Office card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="rounded-2xl p-8 flex flex-col relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 40%, transparent 60%, rgba(37,99,235,0.05) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
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

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(37,99,235,0.18)",
                    border: "1px solid rgba(37,99,235,0.30)",
                  }}
                >
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-white/40 tracking-widest uppercase">
                    IITIL Headquarters
                  </p>
                  <p className="text-lg font-semibold text-white">Hyderabad Office</p>
                </div>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                    Address
                  </p>
                  <p className="text-sm text-white/65 leading-relaxed">
                    Sattva Knowledge City, Hi-Tec City,
                    <br />
                    Hyderabad - 500081 Telangana,
                    <br />
                    India
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                    Website
                  </p>
                  <a
                    href="https://www.iitil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors duration-200"
                  >
                    <Globe size={14} className="text-blue-500" />
                    www.iitil.com
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                    Working Hours
                  </p>
                  <p className="text-sm text-white/65 leading-relaxed">
                    Monday – Friday
                    <br />
                    9:00 AM – 6:00 PM (IST)
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <AnimatedButton variant="ghost" showArrow={false}>
                  Get Directions
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});


/* ────────────────────────────────────────────────────────────────
   Root page
──────────────────────────────────────────────────────────────── */
export default function ReachUsPage() {
  return (
    <main
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: "rgba(2,8,23,1)" }}
    >
      <Navbar />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />
      </div>

      <ConsultationSection />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />
      </div>

      <ContactSection />

      <div className="max-w-7xl mx-auto px-6">
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)",
          }}
        />
      </div>

      <LocationSection />
      <Footer />
    </main>
  );
}
