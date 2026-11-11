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
    category: "AI Engineering & Distributed Services",
    year: "2026",
    description: "An artificial intelligence-driven campus assistant designed to help university students and faculty efficiently query academic regulations, course curricula, exam schedules, and university services through natural language interaction.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "LangGraph",
      "ChromaDB",
      "MongoDB"
    ],
    contribution: "Designed and implemented a decoupled three-tier architecture comprising dedicated frontend, backend, and AI agent services. Engineered multi-step reasoning workflows using LangGraph, retrieval-augmented generation (RAG) with vector embeddings, and unified REST API communication.",
    repositories: [
      { label: "Frontend", url: "https://github.com/banrayndox/DIU_COPILOT_frontend" },
      { label: "Backend", url: "https://github.com/banrayndox/DIU_COPILOT_backend" },
      { label: "Agent", url: "https://github.com/banrayndox/DIU_COPILOT_agent" }
    ],
    liveUrl: null,
    hasLiveDemo: false
  }
];
