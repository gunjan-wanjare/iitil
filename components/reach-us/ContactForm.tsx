"use client";

import { useState, useCallback, memo, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const SERVICE_OPTIONS = [
  "Data Intelligence",
  "AI & Machine Learning",
  "Cloud Solutions",
  "Managed IT Services",
  "Application Development",
  "CRM Development",
  "Cybersecurity",
  "Job",
  "Other",
] as const;

interface FormData {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const INITIAL_FORM: FormData = {
  fullName: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const GLASS_INPUT =
  "w-full rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/25 bg-white/[0.04] border border-white/[0.08] outline-none transition-all duration-300";

const inputFocusStyle = (focused: boolean, hasError: boolean) => ({
  borderColor: hasError
    ? "rgba(239,68,68,0.5)"
    : focused
      ? "rgba(37,99,235,0.5)"
      : "rgba(255,255,255,0.08)",
  boxShadow: hasError
    ? "0 0 0 3px rgba(239,68,68,0.12)"
    : focused
      ? "0 0 0 3px rgba(37,99,235,0.15), inset 0 1px 0 rgba(255,255,255,0.06)"
      : "inset 0 1px 0 rgba(255,255,255,0.04)",
});

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Please enter at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (data.phone.trim() && !/^[+\d\s()-]{7,20}$/.test(data.phone.trim())) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!data.service) {
    errors.service = "Please select a service";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Please provide at least 10 characters";
  }

  return errors;
}

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-white/70">
        {label}
      </label>
      {children}
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-red-400"
            role="alert"
            id={`${id}-error`}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const update = useCallback(
    (field: keyof FormData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      },
    []
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1600));
    setIsSubmitting(false);
    setIsSuccess(true);
    setForm(INITIAL_FORM);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(16,185,129,0.10) 0%, rgba(9,15,28,0.95) 60%, rgba(37,99,235,0.06) 100%)",
          border: "1px solid rgba(16,185,129,0.25)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 40px rgba(16,185,129,0.10)",
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.1 }}
        >
          <CheckCircle2 size={56} className="text-blue-400 mb-5" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">
          Message Sent Successfully
        </h3>
        <p className="text-sm text-white/50 max-w-sm leading-relaxed mb-8">
          Thank you for reaching out. Our team will review your inquiry and get
          back to you within one business day.
        </p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsSuccess(false)}
          className="px-6 py-3 rounded-full text-sm font-semibold text-white cursor-pointer transition-colors duration-300"
          style={{
            background: "rgba(37,99,235,0.2)",
            border: "1px solid rgba(37,99,235,0.35)",
          }}
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="fullName" label="Full Name *" error={errors.fullName}>
          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={update("fullName")}
            onFocus={() => setFocused("fullName")}
            onBlur={() => setFocused(null)}
            placeholder="John Doe"
            autoComplete="name"
            className={GLASS_INPUT}
            style={inputFocusStyle(focused === "fullName", !!errors.fullName)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
        </Field>

        <Field id="email" label="Email Address *" error={errors.email}>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            placeholder="john@company.com"
            autoComplete="email"
            className={GLASS_INPUT}
            style={inputFocusStyle(focused === "email", !!errors.email)}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id="company" label="Company Name">
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={update("company")}
            onFocus={() => setFocused("company")}
            onBlur={() => setFocused(null)}
            placeholder="Your Company Name"
            autoComplete="organization"
            className={GLASS_INPUT}
            style={inputFocusStyle(focused === "company", false)}
          />
        </Field>

        <Field id="phone" label="Phone Number" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
            placeholder="+91 XXXXX XXXXX"
            autoComplete="tel"
            className={GLASS_INPUT}
            style={inputFocusStyle(focused === "phone", !!errors.phone)}
            aria-invalid={!!errors.phone}
          />
        </Field>
      </div>

      <Field id="service" label="Service Interested In *" error={errors.service}>
        <select
          id="service"
          value={form.service}
          onChange={update("service")}
          onFocus={() => setFocused("service")}
          onBlur={() => setFocused(null)}
          className={`${GLASS_INPUT} cursor-pointer appearance-none`}
          style={{
            ...inputFocusStyle(focused === "service", !!errors.service),
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
            paddingRight: "40px",
          }}
          aria-invalid={!!errors.service}
        >
          <option value="" disabled className="bg-[#0a1428]">
            Select a service
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0a1428]">
              {opt}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Message *" error={errors.message}>
        <textarea
          id="message"
          value={form.message}
          onChange={update("message")}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          placeholder="Tell us about your project..."
          rows={5}
          className={`${GLASS_INPUT} resize-none`}
          style={inputFocusStyle(focused === "message", !!errors.message)}
          aria-invalid={!!errors.message}
        />
      </Field>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={isSubmitting ? {} : { scale: 1.01 }}
        whileTap={isSubmitting ? {} : { scale: 0.99 }}
        className="relative w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed transition-opacity duration-300"
        style={{
          background: "linear-gradient(to bottom, #2563eb, #1d4ed8)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.2)",
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </form>
  );
}

export default memo(ContactForm);
