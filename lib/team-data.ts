export type DepartmentId =
  | "leadership"
  | "engineering"
  | "data-ai"
  | "cloud"
  | "sales"
  | "marketing"
  | "operations"
  | "hr"
  | "support";

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: DepartmentId;
  experience: string;
  tagline?: string;
  bio: string;
  skills: string[];
  /** Place images at public/team/{filename} */
  image: string;
  linkedin?: string;
  email?: string;
  isLeadership?: boolean;
}

export const DEPARTMENTS: { id: DepartmentId; label: string }[] = [
  { id: "leadership", label: "Leadership" },
  { id: "engineering", label: "Engineering" },
  { id: "data-ai", label: "Data & AI" },
  { id: "cloud", label: "Cloud" },
  { id: "sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
  { id: "operations", label: "Operations" },
  { id: "hr", label: "HR" },
  { id: "support", label: "Support" },
];

export const LEADERSHIP_MEMBERS: TeamMember[] = [
  {
    id: "jhonny-panchal",
    name: "Jhonny Panchal",
    designation: "Chief Executive Officer",
    department: "leadership",
    experience: "20+ years",
    bio: "Jhonny Panchal is a visionary technology leader with extensive experience spanning software development, management, and organizational leadership. Holding a Master's Degree in Computer Science and Engineering, he brings a strong technical foundation paired with sharp strategic thinking to every endeavour. At IITIL, Jhonny drives the company's growth through bold innovation, forward-looking strategy, and a relentless focus on delivering value to clients and stakeholders alike. His leadership philosophy centers on building high-performing teams and scalable solutions that address real-world business challenges. He is committed to positioning IITIL as a globally recognized leader in data intelligence and technology — empowering organizations to make smarter decisions and achieve sustainable growth through the power of innovation.",
    skills: ["Strategy", "Technology Leadership", "Enterprise Architecture", "Innovation"],
    image: "/team/jhonny-panchal.png",
    linkedin: "https://www.linkedin.com/company/iitil-cipl/",
    email: "business@iitil.com",
    isLeadership: true,
  },
  {
    id: "mithilesh-patle",
    name: "Mithilesh Patle",
    designation: "Chief Marketing Officer",
    department: "marketing",
    experience: "15+ years",
    bio: "Mithilesh has spent over 15 years helping brands navigate the evolving world of digital marketing. From building SEO frameworks and content ecosystems to optimizing customer journeys and improving conversions, he brings a holistic approach to digital growth. His experience across global and Indian brands enables him to combine strategic thinking with execution excellence, creating impactful digital experiences that drive long-term results.",
    skills: ["Digital Marketing", "SEO", "Content Strategy", "Conversion Optimization"],
    image: "/team/mithilesh-patle.jpg",
    linkedin: "https://www.linkedin.com/company/iitil-cipl/",
    email: "business@iitil.com",
    isLeadership: true,
  },
  {
    id: "priyanka-soni",
    name: "Priyanka Soni",
    designation: "Head – Human Resources",
    department: "hr",
    experience: "12+ years",
    bio: "Passionate HR leader focused on talent development, employee engagement, and building high-performing teams that drive sustainable business growth. Dedicated to fostering a positive workplace culture where people thrive and organizations scale with purpose.",
    skills: ["Talent Development", "Employee Engagement", "Organizational Growth", "HR Strategy"],
    image: "/team/priyanka-soni.jpg",
    linkedin: "https://www.linkedin.com/company/iitil-cipl/",
    email: "business@iitil.com",
    isLeadership: true,
  },
  // {
  //   id: "rushabh-madhu",
  //   name: "Rushabh Madhu",
  //   designation: "Delivery Manager",
  //   department: "operations",
  //   experience: "14+ years",
  //   tagline: "Delivering Technology. Driving Innovation. Building High-Performing Teams.",
  //   bio: "As a Delivery Manager with 14+ years of IT experience, I help organizations transform ideas into successful digital products through strategic planning, Agile delivery, and strong technical leadership. From managing enterprise-scale applications and SaaS platforms to leading distributed engineering teams, my focus is on delivering quality software that creates measurable business impact. My background in software development enables effective collaboration between business stakeholders and technical teams, ensuring solutions are both technically sound and aligned with organizational goals.",
  //   skills: ["Agile Delivery", "Technical Leadership", "SaaS Platforms", "Enterprise Applications"],
  //   image: "/team/rushabh-madhu.png",
  //   linkedin: "https://www.linkedin.com/company/iitil-cipl/",
  //   email: "business@iitil.com",
  //   isLeadership: true,
  // },
  // {
  //   id: "rajni-bala",
  //   name: "Rajni Bala",
  //   designation: "Project Manager",
  //   department: "operations",
  //   experience: "10+ years",
  //   bio: "I am a dedicated Project Manager with a passion for turning ideas into successful outcomes through collaboration, strategic planning, and effective execution. I specialize in bridging business needs with technology solutions, ensuring every project delivers meaningful value while maintaining quality, transparency, and efficiency. Known for my empathetic leadership, problem-solving mindset, and ability to manage multiple priorities, I believe that every challenge is an opportunity to innovate, inspire teams, and build lasting relationships. My commitment to continuous learning and delivering excellence makes me a trusted partner in driving organizational growth and digital transformation.",
  //   skills: ["Project Management", "Stakeholder Alignment", "Agile", "Digital Transformation"],
  //   image: "/team/rajni-bala.jpeg",
  //   linkedin: "https://www.linkedin.com/company/iitil-cipl/",
  //   email: "business@iitil.com",
  //   isLeadership: true,
  // },
];

export const DEPARTMENT_MEMBERS: TeamMember[] = [
  ...LEADERSHIP_MEMBERS,
  {
    id: "arjun-mehta",
    name: "Arjun Mehta",
    designation: "Lead Software Engineer",
    department: "engineering",
    experience: "11+ years",
    bio: "Full-stack engineer specializing in scalable microservices, cloud-native architectures, and high-performance enterprise applications.",
    skills: ["React", "Node.js", "System Design", "DevOps"],
    image: "/team/arjun-mehta.jpg",
    linkedin: "https://www.linkedin.com/company/iitil-cipl/",
    email: "business@iitil.com",
  },
  {
    id: "sneha-reddy",
    name: "Sneha Reddy",
    designation: "Senior Data Scientist",
    department: "data-ai",
    experience: "9+ years",
    bio: "Builds production-grade ML pipelines and analytics models that turn complex datasets into actionable business intelligence.",
    skills: ["Machine Learning", "Python", "MLOps", "Predictive Analytics"],
    image: "/team/sneha-reddy.jpg",
    linkedin: "https://www.linkedin.com/company/iitil-cipl/",
    email: "business@iitil.com",
  },
  {
    id: "vikram-sharma",
    name: "Vikram Sharma",
    designation: "Cloud Architect",
    department: "cloud",
    experience: "13+ years",
    bio: "Designs secure, resilient cloud infrastructures and migration strategies for enterprise workloads across AWS and Azure.",
    skills: ["AWS", "Azure", "Kubernetes", "Cloud Security"],
    image: "/team/vikram-sharma.jpg",
    linkedin: "https://www.linkedin.com/company/iitil-cipl/",
    email: "business@iitil.com",
  },
  {
    id: "anita-desai",
    name: "Anita Desai",
    designation: "Enterprise Sales Director",
    department: "sales",
    experience: "12+ years",
    bio: "Partners with enterprise clients to align technology investments with measurable business outcomes and long-term growth.",
    skills: ["Enterprise Sales", "Solution Selling", "Client Relations", "Negotiation"],
    image: "/team/anita-desai.jpg",
    linkedin: "https://www.linkedin.com/company/iitil-cipl/",
    email: "business@iitil.com",
  },
  {
    id: "karan-joshi",
    name: "Karan Joshi",
    designation: "Customer Support Lead",
    department: "support",
    experience: "8+ years",
    bio: "Leads a global support team committed to fast resolution, proactive monitoring, and exceptional client experience.",
    skills: ["Client Support", "Incident Management", "SLA Management", "Team Leadership"],
    image: "/team/karan-joshi.jpg",
    linkedin: "https://www.linkedin.com/company/iitil-cipl/",
    email: "business@iitil.com",
  },
];

export const TEAM_STATS = [
  { value: 100, suffix: "+", label: "Experts" },
  { value: 50, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Countries" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
] as const;

export const WHY_TEAM_WINS = [
  {
    title: "Innovation",
    description:
      "We stay at the frontier of data intelligence and technology, bringing emerging capabilities to solve real business problems.",
    icon: "lightbulb" as const,
  },
  {
    title: "Collaboration",
    description:
      "Cross-functional teams work as one unit — bridging business, engineering, and operations to deliver unified outcomes.",
    icon: "users" as const,
  },
  {
    title: "Integrity",
    description:
      "Transparency and accountability guide every engagement. We measure success by the value we create, not the slides we produce.",
    icon: "shield" as const,
  },
  {
    title: "Customer First",
    description:
      "Your challenges come first. We understand the business before we design the solution — that order is non-negotiable.",
    icon: "heart" as const,
  },
  {
    title: "Continuous Learning",
    description:
      "Our teams invest in ongoing development, certifications, and knowledge sharing to stay ahead of a fast-moving industry.",
    icon: "book" as const,
  },
  {
    title: "Global Delivery",
    description:
      "Distributed teams across time zones deliver enterprise-grade solutions with the speed and precision global clients expect.",
    icon: "globe" as const,
  },
] as const;

export const CULTURE_VALUES = [
  "Business-first thinking in every decision",
  "Measurable outcomes over vanity metrics",
  "High-performing teams built on trust",
  "Innovation that ships, not just slides",
  "Global standards with local expertise",
] as const;

export function getMembersByDepartment(department: DepartmentId): TeamMember[] {
  if (department === "leadership") {
    return LEADERSHIP_MEMBERS;
  }
  return DEPARTMENT_MEMBERS.filter((m) => m.department === department);
}
