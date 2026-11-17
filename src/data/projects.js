/**
 * Selected Projects & Technical Archive
 * Formatted as an authentic Wikipedia biographical dossier with factual entries.
 * Restricted strictly to Rakib B's two primary systems: Smart Section Management and DIU Copilot.
 */
export const projectsData = [
  {
    id: "smart-section-management",
    title: "Smart Section Management",
    subtitle: "University Course & Section Coordination Platform",
    category: "Full-Stack Web Application",
    year: "2026",
    description: "A specialized digital management system engineered for university students to streamline section selections, resolve schedule conflicts, and coordinate course enrollment logistics across academic departments.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Vercel"
    ],
    contribution: "Architected the full-stack system across separate frontend and backend repositories. Developed schedule collision detection logic, dynamic section roster views, and deployed the live client interface to Vercel.",
    repositories: [
      { label: "Frontend", url: "https://github.com/banrayndox/ssm-frontend" },
      { label: "Backend", url: "https://github.com/banrayndox/ssm-backend" }
    ],
    liveUrl: "https://diussm.vercel.app",
    hasLiveDemo: true
  },
  {
    id: "diu-copilot",
    title: "DIU Copilot",
    subtitle: "AI-Powered Digital Campus Assistant & Multi-Agent System",
    category: "AI Engineering & Full-Stack System",
    year: "2026",
    description: "An AI-powered digital campus assistant engineered for Daffodil International University. Built with the MERN stack, Socket.IO, Redis, and LangChain/AI agents, featuring intelligent multi-agent routing, real-time chat synchronization, and canvas-based artifact generation.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Redis",
      "LangChain",
      "Tailwind CSS",
      "Vercel"
    ],
    contribution: "Architected and engineered the unified production MVP. Built real-time multi-agent routing, robust chat synchronization across Socket.IO and Redis, interactive canvas artifact generation, and deployed the client application to Vercel.",
    githubUrl: "https://github.com/banrayndox/mvp-diu-copilot",
    liveUrl: "https://mvp-diu-copilot.vercel.app",
    hasLiveDemo: true
  }
];
