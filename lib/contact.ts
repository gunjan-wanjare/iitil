import { api } from "@/lib/api";

export type ContactPayload = {
  brand: string;
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  serviceInterestedIn: string;
  subject: string;
  description: string;
};

const BRAND = "Crediple";
const SUBJECT = "Service Inquiry";

type ContactFormValues = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

export function submitContactForm(values: ContactFormValues) {
  const payload: ContactPayload = {
    brand: BRAND,
    fullName: values.fullName,
    email: values.email,
    companyName: values.company,
    phoneNumber: values.phone,
    serviceInterestedIn: values.service,
    subject: SUBJECT,
    description: values.message,
  };

  return api.post<void>("/contact", payload);
}
