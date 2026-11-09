import React from 'react';
import SectionHeading from './SectionHeading.jsx';

/**
 * Research & Technical Interests Section
 * Formatted as authentic Wikipedia encyclopedic prose and structured focus list (no table).
 */
export default function InterestsSection() {
  return (
    <section>
      <SectionHeading
        id="research"
        title="Research & technical interests"
        subtitle="Academic exploration & focus"
      />

      <div className="space-y-3 text-[14.5px] text-[#202122] leading-relaxed mb-4">
        <p>
          Rakib Biswash's academic exploration and technical work center around four core disciplines: <strong>algorithms and theoretical computer science</strong>, <strong>software engineering</strong>, <strong>AI application engineering</strong>, and <strong>competitive programming</strong>.
        </p>

        <p>
          While actively designing practical full-stack web architectures and agentic AI pipelines, his primary long-term research aspiration focuses on <strong>algorithms and computational complexity</strong> — specifically investigating algorithmic optimization, graph theory, combinatorial search, and optimal data structure design.
        </p>
      </div>

      <h3 className="text-sm font-bold text-gray-900 mb-2.5 font-sans uppercase tracking-wider">
        Primary Focus Areas
      </h3>

      <ul className="list-disc pl-5 space-y-2.5 text-[14px] text-[#202122] leading-relaxed">
        <li>
          <strong>Core Research: Algorithms & Theoretical Computing</strong> — Asymptotic complexity analysis, graph traversals, shortest path algorithms, combinatorial optimization, and designing efficient data structures for time- and memory-constrained computing.
        </li>
        <li>
          <strong>Software Engineering</strong> — Full-stack system architecture, modular backend service design, RESTful APIs, database schema modeling, and clean software engineering patterns prioritizing reliability and clean abstraction boundaries.
        </li>
        <li>
          <strong>AI Engineering</strong> — Large language model (LLM) application engineering, stateful cyclic agent orchestration with LangGraph, Retrieval-Augmented Generation (RAG) systems, dense vector embeddings with ChromaDB, and structured output parsing.
        </li>
        <li>
          <strong>Competitive Programming</strong> — Time-constrained algorithmic problem solving, rigorous loop invariant formulation, sliding window mechanics, dynamic programming, and mathematical modeling on platforms like Codeforces and LeetCode.
        </li>
      </ul>
    </section>
  );
}
