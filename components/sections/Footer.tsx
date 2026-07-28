"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IITILLogo from "@/components/ui/IITILLogo";

const SERVICES_LINKS = [
  { label: "IT Services", href: "/it-services" },
  { label: "Data Services", href: "/data-services" },
  { label: "AI & ML", href: "/ai-ml" },
  { label: "Cloud Infrastructure", href: "/cloud-infrastructure" },
  { label: "Cybersecurity", href: "/cybersecurity" },
];

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Team", href: "/team" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Legal", href: "/legal" },
  { label: "Reach Us", href: "/reach-us" },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/iitil-cipl/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const colVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <footer className="relative pt-28 pb-14">
      {/* Top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-28" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16"
        >
          {/* Col 1 — Brand */}
          <motion.div variants={colVariants} className="lg:col-span-1">
            <Link href="/" aria-label="IITIL home" className="inline-block mb-2">
              <IITILLogo size={48} />
            </Link>
            <p className="text-sm text-white/45 leading-relaxed mb-8">
              A <span className="font-semibold text-white">YAKA </span>Brand
            </p>
            <p className="text-sm text-white/45 leading-relaxed">
              Transforming data into intelligent business outcomes through advanced
              analytics and technology solutions.
            </p>
          </motion.div>

          {/* Col 2 — Services */}
          <motion.div variants={colVariants}>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-7">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Company */}
          <motion.div variants={colVariants}>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-7">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Contact */}
          <motion.div variants={colVariants}>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-7">
              Contact
            </h4>
            <div className="flex flex-col gap-2 mb-6">
              <div className="text-sm text-white/45 leading-relaxed whitespace-nowrap">
                For business inquiry : <a href="mailto:business@iitil.com" className="text-sm text-white/45 hover:text-white transition-colors">
                  business@iitil.com
                </a>
              </div>
              <div className="text-sm text-white/45 leading-relaxed">
                For career: <a href="mailto:jobs@iitil.com" className="text-sm text-white/45 hover:text-white transition-colors">
                  jobs@iitil.com
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=Sattva+Knowledge+City+Hi-Tec+City+Hyderabad+500081"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/45 hover:text-white transition-colors leading-relaxed"
              >
                Sattva Knowledge City, Hi-Tec City,<br />
                Hyderabad – 500081<br />
                Telangana, India
              </a>
            </div>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`IITIL on ${social.label} (opens in a new tab)`}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div>
            <p className="text-sm text-white/30">
              © 2026 Crediple India Private Limited (CIPL). All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-sm text-white/30">
              Empowering Professionals Through Convergent Technology.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
