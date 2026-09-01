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

export const LEADERSHIP_MEMBERS: TeamMember[] = [
  {
    id: "jhonny-panchal",
    name: "Jhonny Panchal",
    designation: "Chief Executive Officer",
    department: "leadership",
    experience: "20+ years",
    bio: "Jhonny Panchal is a visionary technology leader with extensive experience spanning software development, management, and organizational leadership. Holding a Master's Degree in Computer Science and Engineering, he brings a strong technical foundation paired with sharp strategic thinking to every endeavour. At IITIL, Jhonny drives the company's growth through bold innovation, forward-looking strategy, and a relentless focus on delivering value to clients and stakeholders alike. His leadership philosophy centers on building high-performing teams and scalable solutions that address real-world business challenges. He is committed to positioning IITIL as a globally recognized leader in data intelligence and technology — empowering organizations to make smarter decisions and achieve sustainable growth through the power of innovation.",
    skills: ["Strategy", "Technology Leadership", "Enterprise Architecture", "Innovation"],
    image: "/team/jhonny-panchal.jpg",
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

