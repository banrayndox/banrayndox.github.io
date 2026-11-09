/**
 * Code & Open Source Configuration
 * Real GitHub username: banrayndox
 * Contains fallback repositories and programming language notes.
 */
export const codeData = {
  githubUsername: "banrayndox",
  githubProfileUrl: "https://github.com/banrayndox",
  
  overview: "Public code repositories, algorithmic implementations, and architectural experiments. Code is structured around modularity, low overhead, and clear documentation.",
  
  languages: [
    { name: "C++", context: "Competitive programming, algorithmic problem solving, STL data structures." },
    { name: "JavaScript / TypeScript", context: "Full-stack web applications, React frontends, Node.js & Express REST APIs." },
    { name: "Python", context: "FastAPI services, AI workflows, LangGraph agent pipelines, ChromaDB vector indexing." },
    { name: "C", context: "Systems programming, POSIX socket servers, low-level memory and process management." },
    { name: "SQL", context: "Relational database schema modeling, indexing, and transactional queries (PostgreSQL/MySQL)." }
  ],

  // Curated public repositories (used as immediate fallback or offline display)
  curatedRepositories: [
    {
      name: "diu-copilot",
      description: "AI-powered digital campus assistant with LangGraph multi-step reasoning, ChromaDB vector search, and FastAPI.",
      language: "Python",
      stars: 0,
      forks: 0,
      url: "https://github.com/banrayndox/diu-copilot",
      topics: ["langgraph", "fastapi", "rag", "react", "chromadb"]
    },
    {
      name: "diu-class-coordination",
      description: "Centralized university class management and communication platform for teachers, CRs, and students.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      url: "https://github.com/banrayndox/diu-class-coordination",
      topics: ["mern-stack", "react", "express", "mongodb"]
    },
    {
      name: "codeready-ai",
      description: "Repository intelligence tool analyzing AST dependencies and generating architectural walkthroughs.",
      language: "JavaScript",
      stars: 0,
      forks: 0,
      url: "https://github.com/banrayndox/codeready-ai",
      topics: ["ai", "ast", "langgraph", "groq"]
    },
    {
      name: "c-backend-server",
      description: "Lightweight POSIX socket HTTP/1.1 server implemented in C using POSIX threads.",
      language: "C",
      stars: 0,
      forks: 0,
      url: "https://github.com/banrayndox/c-backend-server",
      topics: ["c", "posix-sockets", "networking", "systems-programming"]
    },
    {
      name: "competitive-programming",
      description: "Algorithmic contest solutions (Codeforces, LeetCode) categorized by topic and computational technique.",
      language: "C++",
      stars: 0,
      forks: 0,
      url: "https://github.com/banrayndox/competitive-programming",
      topics: ["algorithms", "codeforces", "data-structures", "cpp"]
    }
  ],

  experiments: [
    {
      title: "Stateful Agent Cycles in RAG",
      description: "Investigating token efficiency and convergence rate when looping through query transformation nodes in LangGraph."
    },
    {
      title: "POSIX Thread Pool Architectures",
      description: "Measuring response latencies under concurrent load when comparing thread-per-connection vs synchronized work queue models."
    },
    {
      title: "Vector Quantization for Local Embeddings",
      description: "Testing minimal-footprint embedding models running on CPU-constrained server instances for campus documents."
    }
  ]
};
