/**
 * Writing & Knowledge Data
 * Technical notes, tutorials, and engineering explanations.
 * Each article has a slug used for its dedicated reader route (/articles/:slug).
 */
export const articlesData = [
  {
    slug: "designing-agentic-rag-systems-langgraph-chromadb",
    title: "Designing Agentic RAG Systems with LangGraph and ChromaDB",
    date: "November 2026",
    category: "Artificial Intelligence",
    readingTime: "6 min read",
    summary: "An architectural exploration into cyclic multi-step reasoning, vector embeddings with ChromaDB, and why directed acyclic chains fall short for robust campus information assistants.",
    tableOfContents: [
      { id: "the-limit-of-linear-chains", title: "1. The Limit of Linear Chains" },
      { id: "cyclic-state-graphs", title: "2. State Machines & Cyclic Graphs with LangGraph" },
      { id: "vector-retrieval-chromadb", title: "3. Vector Retrieval & Grounding with ChromaDB" },
      { id: "handling-state-persistence", title: "4. State Persistence and Token Economy" },
      { id: "conclusion-practical-lessons", title: "5. Practical Lessons from DIU Copilot" }
    ],
    content: `
### 1. The Limit of Linear Chains {#the-limit-of-linear-chains}

In conventional Retrieval-Augmented Generation (RAG) pipelines, queries follow a fixed sequence:
\`User Query\` $\\rightarrow$ \`Embedding\` $\\rightarrow$ \`Vector Search\` $\\rightarrow$ \`Prompt Assembly\` $\\rightarrow$ \`LLM Completion\`.

While this model works for straightforward factual lookups, it breaks down quickly in nuanced domains like university academic rules:
- What if the retrieved chunks do not contain the answer?
- What if the query was ambiguous (e.g., *"What is the prerequisite for CSE221?"* without specifying the syllabus version)?
- What if answering the query requires cross-referencing two separate documents (e.g., *Credit Waiver Policy* and *Grading System*)?

In a linear chain, an incomplete retrieval leads directly to hallucination or an ungrounded response.

### 2. State Machines & Cyclic Graphs with LangGraph {#cyclic-state-graphs}

LangGraph solves this by modeling LLM workflows as a stateful graph where nodes are Python or TypeScript functions and edges define transitions. Unlike strict DAGs (Directed Acyclic Graphs), LangGraph natively supports **cycles** and **loops**.

In our campus assistant architecture (*DIU Copilot*), the system graph follows this flow:
1. **Router Node**: Evaluates user intent (General Inquiry vs. Academic Rule vs. Routine Query).
2. **Retrieval Node**: Queries ChromaDB collection with dense vector embeddings.
3. **Relevance Grader Node**: Uses a fast inference model (Groq Llama-3) to score retrieved chunks.
4. **Conditional Edge**:
   - If chunks are sufficient $\\rightarrow$ proceed to **Generate Node**.
   - If chunks are irrelevant $\\rightarrow$ loop back to **Query Transform Node** to rephrase the query or expand search terms.

This loop guarantees that the generator node never receives ungrounded or contradictory context.

### 3. Vector Retrieval & Grounding with ChromaDB {#vector-retrieval-chromadb}

ChromaDB provides an embedded vector store that runs cleanly alongside FastAPI without requiring heavy external infrastructure.

Key considerations in our setup:
- **Chunking Strategy**: Academic regulation PDFs contain long hierarchical articles. Standard 500-token fixed-character chunking splits clauses across chunks. We switched to markdown-aware header splitting preserving article headers with parent metadata.
- **Distance Metric**: Cosine similarity was selected over Euclidean distance to normalize varying paragraph lengths.

### 4. State Persistence and Token Economy {#handling-state-persistence}

Because multi-step agent reasoning can consume tokens rapidly, we incorporate Redis as an intermediate session cache:
- User conversational states are checkpointed after each graph transition.
- Common static queries (e.g., Academic Calendar, Grading Scale) are cached with TTLs, bypassing LLM inference entirely.

### 5. Practical Lessons from DIU Copilot {#conclusion-practical-lessons}

1. **Keep routers lightweight**: Use minimal prompts with strict schema validation (JSON schema or Pydantic) for routing and grading.
2. **Set a maximum loop threshold**: Always implement a hard guardrail (e.g., max 3 query rewrites) before gracefully asking the student for clarification.
3. **Decouple the API from the agent runtime**: Running the agent loop in FastAPI background workers prevents client timeouts on complex queries.
    `,
    relatedSlugs: ["building-lightweight-http-server-c", "invariants-two-pointer-competitive-programming"]
  },
  {
    slug: "building-lightweight-http-server-c",
    title: "Building a Lightweight HTTP Server in C from Scratch",
    date: "October 2026",
    category: "Backend Engineering",
    readingTime: "8 min read",
    summary: "A foundational dive into POSIX socket programming, non-blocking I/O, manual memory management, and implementing the HTTP/1.1 protocol without third-party frameworks.",
    tableOfContents: [
      { id: "why-c-for-backend", title: "1. Why Implement a Server in C?" },
      { id: "posix-socket-lifecycle", title: "2. The POSIX Socket Lifecycle" },
      { id: "parsing-http-stream", title: "3. Parsing HTTP/1.1 Streams" },
      { id: "concurrency-models", title: "4. Concurrency: Multithreading vs I/O Multiplexing" },
      { id: "memory-safety-lessons", title: "5. Memory Safety & Key Takeaways" }
    ],
    content: `
### 1. Why Implement a Server in C? {#why-c-for-backend}

Modern frameworks like Express, FastAPI, and Spring Boot abstract away the underlying networking primitives. While this abstraction accelerates product development, it hides how operating systems actually receive bytes over physical interfaces, translate them into TCP packets, and expose them to user-space processes.

Building an HTTP/1.1 server in standard C provides an unvarnished understanding of:
- File descriptors and kernel socket tables.
- System call overhead (syscalls like \`read\`, \`write\`, \`select\`, \`poll\`).
- Protocol specifications (RFC 2616 and RFC 7230).

### 2. The POSIX Socket Lifecycle {#posix-socket-lifecycle}

Every network server in Unix follows a standardized sequence of syscalls:

\`\`\`c
int server_fd = socket(AF_INET, SOCK_STREAM, 0);
// AF_INET: IPv4, SOCK_STREAM: Two-way reliable TCP stream

struct sockaddr_in address;
address.sin_family = AF_INET;
address.sin_addr.s_addr = INADDR_ANY;
address.sin_port = htons(PORT);

bind(server_fd, (struct sockaddr *)&address, sizeof(address));
listen(server_fd, 10); // Backlog of 10 pending connections

int client_fd = accept(server_fd, (struct sockaddr *)&client_addr, &addr_len);
\`\`\`

Each accepted connection returns a new file descriptor representing the dedicated TCP stream with the connected client.

### 3. Parsing HTTP/1.1 Streams {#parsing-http-stream}

HTTP/1.1 is a text-based protocol delineated by carriage returns and line feeds (\`\\r\\n\`). 
A request consists of:
1. Request line: \`METHOD /path HTTP/1.1\\r\\n\`
2. Headers: Key-value pairs ending in an empty line (\`\\r\\n\\r\\n\`).
3. Optional request body: Delineated by \`Content-Length\` or chunked transfer.

Handling buffer boundaries correctly is the primary challenge in C: a single \`read()\` call might deliver half a header, or multiple pipelined requests in one chunk.

### 4. Concurrency: Multithreading vs I/O Multiplexing {#concurrency-models}

In our C backend project, we compared two primary concurrency architectures:
- **Thread-per-connection using \`pthreads\`**: Simple to implement, but scales poorly past thousands of concurrent idle sockets due to stack memory overhead (typically 2MB to 8MB per thread on Linux).
- **Worker pool with connection queue**: A fixed set of worker threads picking active descriptors from a synchronized thread-safe queue.

### 5. Memory Safety & Key Takeaways {#memory-safety-lessons}

Low-level systems programming reinforces discipline that transfers directly to high-level backend engineering:
- Always zero-initialize buffers with \`memset\`.
- Never trust client-supplied buffer lengths (prevent buffer overflows).
- Close every file descriptor explicitly upon disconnect to avoid leaking kernel resources.
    `,
    relatedSlugs: ["designing-agentic-rag-systems-langgraph-chromadb", "invariants-two-pointer-competitive-programming"]
  },
  {
    slug: "invariants-two-pointer-competitive-programming",
    title: "Invariants and Two-Pointer Techniques in Competitive Programming",
    date: "September 2026",
    category: "Data Structures & Algorithms",
    readingTime: "5 min read",
    summary: "How rigorous loop invariants turn error-prone sliding window problems into deterministic $O(N)$ solutions in algorithmic contests.",
    tableOfContents: [
      { id: "the-anatomy-of-two-pointers", title: "1. The Anatomy of Two Pointers" },
      { id: "defining-the-loop-invariant", title: "2. Formulating the Invariant" },
      { id: "sliding-window-at-most-k", title: "3. Classic Paradigm: At Most K Distinct Elements" },
      { id: "amortized-complexity-proof", title: "4. Proving Amortized O(N) Time" },
      { id: "contest-pitfalls", title: "5. Common Contest Pitfalls" }
    ],
    content: `
### 1. The Anatomy of Two Pointers {#the-anatomy-of-two-pointers}

The two-pointer technique is one of the most fundamental yet misunderstood strategies in competitive programming. When faced with a subarray problem, novice contestants often write nested loops yielding $O(N^2)$ time complexity, leading to Time Limit Exceeded (TLE) verdicts.

The two-pointer pattern leverages **monotonicity**: if extending an interval increases a property (e.g., sum, distinct count), shrinking the interval from the left strictly decreases it.

### 2. Formulating the Invariant {#defining-the-loop-invariant}

An invariant is a mathematical assertion that remains true before and after each iteration of a loop. In a sliding window $[L, R]$:

> **Invariant:** For a given right pointer $R$, $L$ is the smallest valid index such that the window $[L, R]$ satisfies the contest condition $P(L, R) = \\text{true}$.

When you explicitly write down your invariant before typing code, off-by-one errors and infinite loops virtually disappear.

### 3. Classic Paradigm: At Most K Distinct Elements {#sliding-window-at-most-k}

Consider counting subarrays with *at most* $K$ distinct values:

\`\`\`cpp
long long atMostK(const vector<int>& nums, int k) {
    int n = nums.size();
    unordered_map<int, int> freq;
    long long count = 0;
    int L = 0;

    for (int R = 0; R < n; ++R) {
        freq[nums[R]]++;
        while ((int)freq.size() > k) {
            freq[nums[L]]--;
            if (freq[nums[L]] == 0) freq.erase(nums[L]);
            L++;
        }
        // Invariant holds: [L, R] is valid.
        // Every subarray ending at R starting from L..R is valid.
        count += (R - L + 1);
    }
    return count;
}
\`\`\`

To solve *exactly* $K$ distinct elements, we compute:
$$\\text{exactly}(K) = \\text{atMost}(K) - \\text{atMost}(K - 1)$$

### 4. Proving Amortized O(N) Time {#amortized-complexity-proof}

Contestants sometimes worry that the \`while\` loop inside the \`for\` loop makes the algorithm $O(N^2)$.
The amortized proof is straightforward:
- The pointer $R$ increments at most $N$ times.
- The pointer $L$ only increments, never decrements, and thus advances at most $N$ times total throughout the entire algorithm.
- Total pointer movements $= 2N \\implies O(N)$ time complexity.

### 5. Common Contest Pitfalls {#contest-pitfalls}

1. **Negative numbers**: Monotonicity breaks if array elements can be negative (e.g., prefix sum is no longer non-decreasing). In that case, use Hash Maps or Segment Trees instead.
2. **Hash table overhead**: In contests with tight time limits ($1.0\\text{s}$ for $N = 2 \\times 10^5$), standard \`std::unordered_map\` can cause TLE due to hash collisions. Prefer flat arrays or custom hashers.
    `,
    relatedSlugs: ["designing-agentic-rag-systems-langgraph-chromadb", "building-lightweight-http-server-c"]
  }
];
