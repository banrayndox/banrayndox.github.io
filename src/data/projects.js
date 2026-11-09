/**
 * Selected Projects & Technical Archive
 * Formatted as a researcher's project archive with factual descriptions,
 * detailed architectural contributions, technology specifications, and direct text links.
 */
export const projectsData = [
  {
    id: "diu-copilot",
    title: "DIU Copilot",
    subtitle: "AI-Powered Digital Campus Assistant",
    category: "AI & Full-Stack Systems",
    year: "2026",
    description: "An AI-powered digital campus assistant engineered to help university students and faculty efficiently query academic regulations, course curricula, exam routines, bus schedules, and campus services through a natural language interface.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "LangGraph",
      "Groq",
      "ChromaDB",
      "Redis",
      "MongoDB"
    ],
    contribution: "Designed the multi-tiered architecture: set up a FastAPI service orchestrating LangGraph workflows for multi-step agent reasoning, implemented RAG with ChromaDB vector embeddings for university handbook documents, incorporated Redis for session-level dialogue memory, and engineered a responsive React user interface.",
    githubUrl: "https://github.com/banrayndox/diu-copilot",
    liveUrl: "https://diu-copilot.demo", // Editable or placeholder
    hasLiveDemo: false, // will cleanly show or hide [Live Demo]
  },
  {
    id: "diu-class-coordination-system",
    title: "DIU Class Coordination System",
    subtitle: "University Class Management and Communication Platform",
    category: "Full-Stack Web Application",
    year: "2026",
    description: "A centralized platform built to streamline communication channels between course instructors, class representatives (CRs), and students, replacing fragmented social media groups with organized notice boards, class schedule updates, and assignment tracking.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS"
    ],
    contribution: "Constructed the full-stack MERN application from scratch. Designed role-based authentication (Admin, Teacher, CR, Student), built RESTful APIs for real-time schedule modifications, notification routing, and automated calendar export utilities.",
    githubUrl: "https://github.com/banrayndox/diu-class-coordination",
    liveUrl: "https://diu-class-coordination.demo",
    hasLiveDemo: false,
  },
  {
    id: "codeready-ai",
    title: "CodeReady AI",
    subtitle: "Repository Intelligence Platform",
    category: "AI & Developer Tooling",
    year: "2026",
    description: "An AI-powered platform designed to analyze, parse, and explain large software codebases. Allows engineers to query architectural patterns, trace symbol dependencies, and generate structured documentation directly from Git repositories.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "LangGraph",
      "Groq Llama-3",
      "Abstract Syntax Trees (AST)"
    ],
    contribution: "Developed the core ingestion pipeline for parsing repository tree structures, built AST-informed context window management to handle large file contexts within Groq token limits, and integrated cyclical agent graphs using LangGraph to cross-reference multiple source files before answering.",
    githubUrl: "https://github.com/banrayndox/codeready-ai",
    liveUrl: "https://codeready-ai.demo",
    hasLiveDemo: false,
  },
  {
    id: "online-compiler",
    title: "Online Compiler",
    subtitle: "Browser-Based Code Execution Interface",
    category: "Developer Utilities & Frontend",
    year: "2025",
    description: "A lightweight, browser-based coding workspace supporting code compilation and execution across multiple programming languages directly from the browser window.",
    technologies: [
      "React",
      "JavaScript",
      "CodeMirror",
      "Execution API",
      "CSS"
    ],
    contribution: "Implemented an intuitive code editor interface with syntax highlighting, custom stdin/stdout input piping, execution status indicators, and execution timer metrics.",
    githubUrl: "https://github.com/banrayndox/online-compiler",
    liveUrl: "https://compiler-banrayndox.web.app",
    hasLiveDemo: true,
  },
  {
    id: "c-backend-project",
    title: "C Backend Project",
    subtitle: "Low-Level Systems Programming & Network Server",
    category: "Systems & Network Programming",
    year: "2025",
    description: "A backend-oriented systems programming project developed using C, demonstrating foundational socket programming, manual memory management, and concurrent connection handling at the operating system level.",
    technologies: [
      "C (C99/C11)",
      "POSIX Sockets",
      "pthreads (Multithreading)",
      "HTTP/1.1 Protocol",
      "Linux Syscalls"
    ],
    contribution: "Implemented socket creation, binding, listening, and accepting mechanisms. Parsed incoming HTTP/1.1 requests, mapped static assets using low-level file descriptors, and handled concurrent client connections using POSIX multithreading pools without external libraries.",
    githubUrl: "https://github.com/banrayndox/c-backend-server",
    liveUrl: null,
    hasLiveDemo: false,
  }
];
