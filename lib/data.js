// All portfolio data lives here. Edit this file to update content site-wide.

export const personal = {
  name: "Satyam Prakash Nage",
  role: "Web Developer",
  tagline: "I build scalable, performant web applications with React & Next.js.",
  location: "Pune, India",
  email: "satyamnage27@gmail.com",
  phone: "+91 8237598846",
  github: "https://github.com/Satyamnage-27",
  linkedin: "https://linkedin.com/in/satyamnage",
  resumeUrl: "/resume.pdf",
};

export const about = {
  intro:
    "I'm a Web Developer with 2+ years at SDLC Corp, specialising in end-to-end React and Next.js applications.",
  story:
    "My journey began in Mechanical Engineering — but I found my real craft in code. That engineering mindset (breaking systems down, optimising for performance, obsessing over the details) is what I bring to every interface I build today.",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "4+", label: "Production Projects" },
    { value: "10+", label: "Technologies" },
  ],
};

export const skills = [
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Tailwind CSS" },
  { name: "MongoDB" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Git" },
  { name: "Ant Design" },
  { name: "REST APIs" },
  { name: "Responsive Design" },
];

export const experience = [
  {
    role: "Web Developer",
    company: "SDLC Corp",
    period: "Present",
    highlights: [
      "Fixed bugs and optimised React-based UIs to enhance application speed and stability.",
      "Designed sleek dashboard interfaces and user-friendly form systems with Tailwind CSS.",
      "Integrated complex APIs in collaboration with backend teams.",
      "Developed and deployed end-to-end CRUD applications with scalable architecture and clean code.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "SDLC Corp",
    period: "Earlier",
    highlights: [
      "Built admin panel frontend using React + Ant Design with a Node.js backend.",
      "Developed CRUD modules with integrated filtering and pagination.",
      "Contributed across the full SDLC, collaborating with developers to modernise web assets and deliver user-centric features.",
    ],
  },
];

export const projects = [
  {
    title: "Unity",
    year: "2026",
    description:
      "A dynamic healthcare follow-up management system with drag-and-drop form builder and customizable patient follow-up workflows.",
    tags: ["Next.js", "React", "Payload CMS", "MongoDB"],
    features: [
      "Dynamic drag-and-drop form builder for follow-up forms",
      "Custom form fields including inputs, dropdowns, radio buttons & file uploads",
      "Form preview and edit functionality with real-time updates",
      "Sequence-based reordering and follow-up management",
      "REST API integration for creating, updating and saving forms",
      "Responsive admin dashboard for managing clinical workflows",
    ],
    color: "#d4ff",
  },
  {
    title: "PetVet (FitPez)",
    year: "2025",
    description:
      "A veterinary and clinical management web application where I led admin panel development and full UI design.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    features: [
      "Appointment management with search, filters & pagination",
      "Profile and background image uploads with API integration",
      "Dashboard with diagnostic categories, treatment history & notes",
      "Chat, notifications and follow/unfollow functionality",
      "Multilingual support and privacy settings",
    ],
    color: "#d4ff3e",
  },
  {
    title: "SNUSLIFE",
    year: "2025",
    description:
      "Led a full-scale migration of the SNUSLIFE platform from React.js to Next.js to improve SEO and page-load speeds.",
    tags: ["Next.js", "Migration", "SEO"],
    features: [
      "Migrated the entire codebase from React to Next.js App Router",
      "Significantly improved Lighthouse performance scores",
      "Refined architecture for scalability and maintainability",
    ],
    color: "#ffb84f",
  },
  {
    title: "Audience Pool",
    year: "2024",
    description:
      "A social engagement platform with real-time messaging, wallet integration, and full localisation support.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Real-time chat and live notifications",
      "Follow/unfollow user engagement system",
      "Secure image uploading and media management",
      "Digital wallet with Add Money feature",
      "Multi-language localisation for global reach",
    ],
    color: "#ff6b9d",
  },
  {
    title: "Taste Tribe",
    year: "2023",
    description:
      "A food-tech platform with comprehensive CRUD operations across products, manufacturers, agents and chefs.",
    tags: ["React", "Node.js", "MongoDB", "Ant Design"],
    features: [
      "CRUD operations across multiple entity types",
      "Ant Design component system for consistent UI",
      "Node.js backend with REST API endpoints",
    ],
    color: "#7dd3fc",
  },
];
