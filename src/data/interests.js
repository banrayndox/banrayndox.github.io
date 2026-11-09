/**
 * Research & Technical Interests
 * Organized intellectually into core computing disciplines with factual notes.
 */
export const interestsData = {
  disclaimer: "Current academic and engineering interests. No formal published papers or institutional lab appointments are claimed.",
  categories: [
    {
      name: "Artificial Intelligence & Agentic Systems",
      summary: "Exploring how language models interact with state machines, vector indices, and external tools to solve structured software tasks.",
      topics: [
        {
          name: "Large Language Models (LLMs)",
          note: "Prompt optimization, token economy, structured output schema generation, and inference latency reduction via Groq and specialized hardware."
        },
        {
          name: "AI Agent Architectures",
          note: "Cyclic state graphs (LangGraph), multi-agent debate/coordination, state persistence, checkpointing, and tool-calling execution loops."
        },
        {
          name: "Retrieval-Augmented Generation (RAG)",
          note: "Chunking strategies, dense embeddings, vector distance metrics (Cosine/Euclidean), ChromaDB integration, hybrid search, and hallucination reduction."
        },
        {
          name: "LLM Application Engineering",
          note: "Integrating LLM reasoning pipelines within production web frameworks (FastAPI, Express) with strict validation (Pydantic, Zod)."
        },
        {
          name: "Machine Learning Foundations",
          note: "Supervised and unsupervised learning, gradient descent optimization, loss formulations, and classification algorithms."
        }
      ]
    },
    {
      name: "Software Engineering & Systems Architecture",
      summary: "Designing scalable, maintainable server-side architectures, clean APIs, and persistent storage layers.",
      topics: [
        {
          name: "Backend Architecture",
          note: "Layered architecture, dependency separation, asynchronous I/O, RESTful and RPC communication protocols, and request middleware pipelines."
        },
        {
          name: "Distributed Systems Concepts",
          note: "Data consistency, partition tolerance, caching hierarchies (Redis), rate-limiting algorithms (token bucket), and horizontal scaling."
        },
        {
          name: "Full-Stack Development",
          note: "End-to-end web applications with React frontend architecture, client state synchronization, and secure backend integrations."
        },
        {
          name: "Database Design & Storage",
          note: "Relational database schema modeling, ACID transactions, B-Tree indexing, query execution plans, and document stores."
        },
        {
          name: "System Design",
          note: "Modular service decomposition, load balancing, idempotency in distributed APIs, and fault tolerance."
        }
      ]
    },
    {
      name: "Computer Science & Algorithmic Problem Solving",
      summary: "Theoretical computing foundations, mathematical modeling, and rigorous problem-solving through competitive programming.",
      topics: [
        {
          name: "Algorithms and Data Structures",
          note: "Graph traversals (BFS, DFS, Dijkstra), tree algorithms, dynamic programming, disjoint-set unions (DSU), segment trees, and binary search."
        },
        {
          name: "Competitive Programming",
          note: "Regular contest participation solving time-constrained algorithmic challenges on Codeforces, LeetCode, and regional contests."
        },
        {
          name: "Problem Solving & Invariant Analysis",
          note: "Formulating loop invariants, greedy exchange arguments, sliding window mechanics, and amortized $O(N)$ proofs."
        },
        {
          name: "Computational Thinking",
          note: "Deconstructing real-world software bottlenecks into formal time and space complexity boundaries."
        }
      ]
    }
  ]
};
