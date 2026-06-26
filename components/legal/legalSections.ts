export type LegalContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; text: string };

export interface LegalSectionData {
  id: string;
  navLabel: string;
  title: string;
  content: LegalContentBlock[];
}

export const legalSections: LegalSectionData[] = [
  {
    id: "terms-and-conditions",
    navLabel: "Terms & Conditions",
    title: "Terms & Conditions",
    content: [
      {
        type: "paragraph",
        text: 'These Terms & Conditions ("Terms") govern your access to and use of the websites, platforms, products, and services offered by Crediple India Private Limited (CIPL), operating under the IITIL brand ("IITIL", "we", "us", or "our"). By accessing or using our services, you agree to be bound by these Terms.',
      },
      {
        type: "heading",
        text: "Acceptance of Terms",
      },
      {
        type: "paragraph",
        text: "By visiting our website, engaging our services, or entering into a commercial agreement with IITIL, you acknowledge that you have read, understood, and agree to comply with these Terms. If you do not agree, you must discontinue use of our services immediately.",
      },
      {
        type: "heading",
        text: "Services Overview",
      },
      {
        type: "paragraph",
        text: "IITIL provides technology consulting, data intelligence, AI and machine learning solutions, cloud infrastructure services, cybersecurity services, and related digital transformation offerings. Specific deliverables, timelines, and commercial terms are defined in individual statements of work or service agreements.",
      },
      {
        type: "list",
        items: [
          "Service scope is defined per engagement and may include advisory, implementation, managed services, or project-based delivery.",
          "We reserve the right to modify, suspend, or discontinue any service offering with reasonable notice where applicable.",
          "Client responsibilities include timely access to systems, data, stakeholders, and approvals required for delivery.",
        ],
      },
      {
        type: "heading",
        text: "User Obligations",
      },
      {
        type: "list",
        items: [
          "Provide accurate and complete information during engagements and communications.",
          "Use IITIL services only for lawful business purposes.",
          "Maintain confidentiality of credentials, access keys, and proprietary materials shared under engagement.",
          "Refrain from reverse engineering, unauthorized copying, or misuse of IITIL intellectual property.",
          "Comply with applicable laws, regulations, and industry standards relevant to your use of our services.",
        ],
      },
      {
        type: "heading",
        text: "Limitation of Liability",
      },
      {
        type: "paragraph",
        text: "To the maximum extent permitted by law, IITIL shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from the use of our services. Our aggregate liability for any claim shall not exceed the fees paid by the client for the specific service giving rise to the claim during the preceding twelve (12) months, unless otherwise stated in a signed agreement.",
      },
      {
        type: "callout",
        text: "Nothing in these Terms limits liability where such limitation is prohibited by applicable law.",
      },
    ],
  },
  {
    id: "privacy-policy",
    navLabel: "Privacy Policy",
    title: "Privacy Policy",
    content: [
      {
        type: "paragraph",
        text: "IITIL is committed to protecting the privacy and security of personal information collected through our websites, client engagements, and business operations. This Privacy Policy explains what information we collect, how we use it, and the choices available to you.",
      },
      {
        type: "heading",
        text: "Information We Collect",
      },
      {
        type: "list",
        items: [
          "Contact details such as name, email address, phone number, and organization information.",
          "Business and technical information provided during consultations, proposals, and project delivery.",
          "Website usage data including IP address, browser type, device information, and interaction logs.",
          "Communication records including emails, support requests, and meeting notes relevant to service delivery.",
        ],
      },
      {
        type: "heading",
        text: "How We Use Your Information",
      },
      {
        type: "list",
        items: [
          "To deliver, manage, and improve our services and client engagements.",
          "To respond to inquiries, provide support, and communicate service updates.",
          "To comply with legal, regulatory, and contractual obligations.",
          "To maintain security, prevent fraud, and protect our systems and users.",
          "To analyze website performance and enhance user experience, where permitted.",
        ],
      },
      {
        type: "heading",
        text: "Data Sharing",
      },
      {
        type: "paragraph",
        text: "We do not sell personal information. We may share data with trusted service providers, subcontractors, or partners who assist in delivering our services, subject to confidentiality and data protection obligations. We may also disclose information when required by law or to protect our legal rights.",
      },
      {
        type: "heading",
        text: "Your Rights",
      },
      {
        type: "paragraph",
        text: "Depending on applicable law, you may have the right to access, correct, delete, or restrict processing of your personal information. To exercise these rights, contact us at privacy@iitil.com.",
      },
    ],
  },
  {
    id: "cookie-policy",
    navLabel: "Cookie Policy",
    title: "Cookie Policy",
    content: [
      {
        type: "paragraph",
        text: "This Cookie Policy explains how IITIL uses cookies and similar tracking technologies on our website to enhance functionality, analyze usage, and improve user experience.",
      },
      {
        type: "heading",
        text: "What Are Cookies",
      },
      {
        type: "paragraph",
        text: "Cookies are small text files stored on your device when you visit a website. They help websites remember preferences, maintain sessions, and understand how visitors interact with content.",
      },
      {
        type: "heading",
        text: "Types of Cookies We Use",
      },
      {
        type: "list",
        items: [
          "Essential Cookies: Required for core website functionality and security.",
          "Performance Cookies: Help us understand how visitors use our site to improve performance.",
          "Functional Cookies: Remember preferences and settings to enhance your experience.",
          "Analytics Cookies: Provide aggregated insights into traffic patterns and user behavior.",
        ],
      },
      {
        type: "heading",
        text: "Managing Cookies",
      },
      {
        type: "paragraph",
        text: "You can control or delete cookies through your browser settings. Disabling certain cookies may affect website functionality. Where required by law, we will request consent before placing non-essential cookies.",
      },
    ],
  },
  {
    id: "data-protection",
    navLabel: "Data Protection",
    title: "Data Protection & Security Policy",
    content: [
      {
        type: "paragraph",
        text: "IITIL implements comprehensive data protection and security measures to safeguard client information, intellectual property, and operational data across all engagements and internal systems.",
      },
      {
        type: "heading",
        text: "Security Framework",
      },
      {
        type: "list",
        items: [
          "Encryption of data in transit and at rest where applicable.",
          "Role-based access controls and principle of least privilege.",
          "Secure development practices and regular vulnerability assessments.",
          "Incident detection, logging, and response procedures.",
          "Employee training on data handling and security awareness.",
        ],
      },
      {
        type: "heading",
        text: "Client Data Handling",
      },
      {
        type: "paragraph",
        text: "Client data is processed only for agreed service purposes. Access is restricted to authorized personnel under confidentiality obligations. Data retention and deletion practices follow contractual requirements and applicable regulations.",
      },
      {
        type: "heading",
        text: "Compliance Alignment",
      },
      {
        type: "paragraph",
        text: "Our security practices are designed to align with industry standards and regulatory frameworks including ISO 27001 principles, GDPR requirements where applicable, and client-specific compliance mandates.",
      },
      {
        type: "callout",
        text: "For security-related inquiries, contact security@iitil.com.",
      },
    ],
  },
  {
    id: "service-disclaimer",
    navLabel: "Service Disclaimer",
    title: "Service Disclaimer",
    content: [
      {
        type: "paragraph",
        text: "The information, recommendations, and materials provided by IITIL are intended for general business and informational purposes unless otherwise specified in a formal engagement agreement.",
      },
      {
        type: "heading",
        text: "No Guarantee of Outcomes",
      },
      {
        type: "paragraph",
        text: "While IITIL applies industry best practices and professional expertise, business outcomes depend on multiple factors including client implementation, market conditions, data quality, and operational readiness. We do not guarantee specific financial results, performance metrics, or ROI unless explicitly documented in a signed agreement.",
      },
      {
        type: "heading",
        text: "Third-Party Tools and Platforms",
      },
      {
        type: "paragraph",
        text: "Our solutions may integrate with third-party software, cloud platforms, or APIs. IITIL is not responsible for outages, policy changes, or limitations imposed by third-party providers, though we will make reasonable efforts to advise clients of known risks.",
      },
      {
        type: "heading",
        text: "Professional Advice",
      },
      {
        type: "paragraph",
        text: "Unless expressly agreed, IITIL services do not constitute legal, financial, or regulatory advice. Clients should consult qualified professionals for domain-specific compliance and advisory requirements.",
      },
    ],
  },
  {
    id: "ipr",
    navLabel: "Intellectual Property Rights",
    title: "Intellectual Property Rights (IPR)",
    content: [
      {
        type: "paragraph",
        text: "All intellectual property rights associated with IITIL websites, branding, methodologies, frameworks, software components, documentation, and proprietary materials remain the property of Crediple India Private Limited unless otherwise agreed in writing.",
      },
      {
        type: "heading",
        text: "IITIL Ownership",
      },
      {
        type: "list",
        items: [
          "Trademarks, logos, brand assets, and website content.",
          "Pre-existing tools, accelerators, templates, and reusable components.",
          "General know-how, processes, and non-client-specific methodologies.",
        ],
      },
      {
        type: "heading",
        text: "Client Deliverables",
      },
      {
        type: "paragraph",
        text: "Ownership of custom deliverables created specifically for a client engagement is governed by the applicable statement of work or master services agreement. Unless otherwise stated, clients receive usage rights to agreed deliverables upon full payment of applicable fees.",
      },
      {
        type: "heading",
        text: "Restrictions",
      },
      {
        type: "paragraph",
        text: "Unauthorized reproduction, distribution, modification, or commercial exploitation of IITIL intellectual property is strictly prohibited and may result in legal action.",
      },
    ],
  },
  {
    id: "grievance-redressal",
    navLabel: "Grievance Redressal",
    title: "Grievance Redressal",
    content: [
      {
        type: "paragraph",
        text: "IITIL is committed to addressing client concerns, service-related grievances, and privacy complaints in a fair, transparent, and timely manner.",
      },
      {
        type: "heading",
        text: "How to Raise a Grievance",
      },
      {
        type: "list",
        items: [
          "Email: grievance@iitil.com with subject line \"Grievance – [Your Organization]\".",
          "Include your name, organization, contact details, engagement reference, and a clear description of the issue.",
          "Attach supporting documents or correspondence where relevant.",
        ],
      },
      {
        type: "heading",
        text: "Resolution Process",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Acknowledgement within five (5) business days of receipt.",
          "Initial review and classification of the grievance.",
          "Investigation with relevant internal teams or project stakeholders.",
          "Resolution proposal and communication to the complainant.",
          "Closure upon mutual agreement or documented resolution.",
        ],
      },
      {
        type: "heading",
        text: "Escalation",
      },
      {
        type: "paragraph",
        text: "If you are unsatisfied with the initial resolution, you may request escalation to senior management by replying to your case reference thread. Escalated matters are reviewed within ten (10) business days where practicable.",
      },
    ],
  },
  {
    id: "governing-law",
    navLabel: "Governing Law",
    title: "Governing Law & Jurisdiction",
    content: [
      {
        type: "paragraph",
        text: "These legal policies and your use of IITIL services are governed by the laws of India, without regard to conflict of law principles.",
      },
      {
        type: "heading",
        text: "Jurisdiction",
      },
      {
        type: "paragraph",
        text: "Subject to any alternate dispute resolution mechanism specified in a signed commercial agreement, the courts at Hyderabad, Telangana, India shall have exclusive jurisdiction over disputes arising from or relating to these policies and IITIL services.",
      },
      {
        type: "heading",
        text: "Dispute Resolution",
      },
      {
        type: "paragraph",
        text: "IITIL encourages amicable resolution of disputes through direct communication. Where contractual arbitration or mediation clauses apply, those provisions shall take precedence over this general policy statement.",
      },
      {
        type: "callout",
        text: "Registered Entity: Crediple India Private Limited (CIPL), Sattva Knowledge City, Hi-Tec City, Hyderabad – 500081, Telangana, India.",
      },
    ],
  },
  {
    id: "policy-updates",
    navLabel: "Policy Updates",
    title: "Policy Updates",
    content: [
      {
        type: "paragraph",
        text: "IITIL may update these legal policies periodically to reflect changes in our services, regulatory requirements, security practices, or business operations.",
      },
      {
        type: "heading",
        text: "Notification of Changes",
      },
      {
        type: "list",
        items: [
          "Material updates will be reflected on this page with a revised effective date.",
          "Continued use of our services after updates constitutes acceptance of the revised policies.",
          "Clients under active contracts may have additional notification obligations defined in their agreements.",
        ],
      },
      {
        type: "heading",
        text: "Effective Date",
      },
      {
        type: "paragraph",
        text: "These policies are effective as of 1 January 2026. Previous versions of standalone policy pages are superseded by this unified legal document.",
      },
      {
        type: "heading",
        text: "Contact",
      },
      {
        type: "paragraph",
        text: "For questions regarding these policies, contact legal@iitil.com or write to Crediple India Private Limited, Sattva Knowledge City, Hi-Tec City, Hyderabad – 500081, Telangana, India.",
      },
    ],
  },
];

export const legalSectionIds = legalSections.map((section) => section.id);
