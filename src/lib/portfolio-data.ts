export const skillGroups = [
  {
    number: "01",
    name: "Languages",
    description: "The building blocks I use to reason about applications and data.",
    skills: ["JavaScript", "Python", "SQL"],
  },
  {
    number: "02",
    name: "Frontend",
    description: "Responsive interfaces, reusable UI, and modern React workflows.",
    skills: ["HTML5", "CSS3", "React", "Next.js", "React Router", "Vite"],
  },
  {
    number: "03",
    name: "Backend",
    description: "The APIs and application logic that connect products to data.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Authentication", "RBAC"],
  },
  {
    number: "04",
    name: "Data stores",
    description: "Relational foundations, with an introduction to document databases.",
    skills: ["PostgreSQL", "Prisma", "MySQL", "MongoDB · basic"],
  },
  {
    number: "05",
    name: "Developer tools",
    description: "Everyday tools for building, inspecting, and collaborating.",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Browser DevTools"],
  },
  {
    number: "06",
    name: "Engineering foundations",
    description: "Core topics and habits that support maintainable software.",
    skills: ["OOP", "DBMS", "SDLC", "Debugging", "Manual testing", "Responsive design"],
  },
];

export type PortfolioProject = {
  number: string;
  id: string;
  name: string;
  category: string;
  challenge: string;
  solution: string;
  architecture: string;
  features: string[];
  technologies: string[];
  visual: string;
  status: string;
  metrics: string | null;
  githubUrl: string | null;
  liveUrl: string | null;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    number: "01",
    id: "academic",
    name: "Responsive academic website",
    category: "Academic project",
    challenge: "Curriculum requirements called for a clear, responsive website with basic interactive validation.",
    solution: "Designed and developed structured web pages with mobile layouts and JavaScript interactions.",
    architecture: "HTML, CSS, and JavaScript frontend. No backend or deployment details were supplied.",
    features: ["Structured page layouts", "Responsive mobile presentation", "Basic JavaScript validation", "Cross-browser checks"],
    technologies: ["HTML", "CSS", "JavaScript"],
    visual: "academic",
    status: "Completed academic project",
    metrics: null,
    githubUrl: null,
    liveUrl: null,
  },
  {
    number: "02",
    id: "edumanage",
    name: "EduManage",
    category: "Student management system",
    challenge: "Paper-based records made it difficult for administrators to maintain accurate student and academic information.",
    solution: "A centralized education platform brief covering student, teacher, and administrator workflows.",
    architecture: "The supplied stack lists Next.js, Node.js, PostgreSQL, and Prisma. Service boundaries and deployment details were not supplied.",
    features: ["Student and teacher records", "Attendance management", "Examinations and fees", "Academic records", "Role-based dashboards"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
    visual: "education",
    status: "Project brief; implementation status not supplied",
    metrics: null,
    githubUrl: null,
    liveUrl: null,
  },
  {
    number: "03",
    id: "dinedesk",
    name: "DineDesk",
    category: "Restaurant ordering platform",
    challenge: "Manual order-taking and reservation workflows left restaurant customers and staff working across disconnected processes.",
    solution: "A centralized restaurant platform brief connecting customers, kitchen staff, and administrators.",
    architecture: "The supplied stack lists Next.js, Node.js, PostgreSQL, and Tailwind CSS. Service boundaries and deployment details were not supplied.",
    features: ["Digital menus", "Online orders", "Table reservations", "Payments", "Kitchen order dashboard"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    visual: "restaurant",
    status: "Project brief; implementation status not supplied",
    metrics: null,
    githubUrl: null,
    liveUrl: null,
  },
  {
    number: "04",
    id: "careerhub",
    name: "CareerHub",
    category: "Job portal",
    challenge: "Applicants struggled to track applications while recruiters needed a simpler candidate-management workflow.",
    solution: "A recruitment platform brief bringing job seekers, companies, and hiring pipelines into one place.",
    architecture: "The supplied stack lists Next.js, Node.js, PostgreSQL, and cloud storage. Service boundaries and deployment details were not supplied.",
    features: ["Job search and listings", "Candidate profiles and resume uploads", "Applications and tracking", "Recruiter dashboards", "Hiring pipelines"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Cloud Storage"],
    visual: "career",
    status: "Project brief; implementation status not supplied",
    metrics: null,
    githubUrl: null,
    liveUrl: null,
  },
];