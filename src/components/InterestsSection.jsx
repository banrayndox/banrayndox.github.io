import React from 'react';
import SectionHeading from './SectionHeading.jsx';

/**
 * Research & Technical Interests Section
 * Honestly delineating active technical work from prospective core research aspirations.
 */
export default function InterestsSection() {
  return (
    <section>
      <SectionHeading
        id="research"
        title="Research & technical interests"
        subtitle="Active work & academic aspirations"
      />

      <div className="space-y-3 text-[14.5px] text-[#202122] leading-relaxed mb-4">
        <p>
          Rakib B is currently actively engaged in three primary technical disciplines: <strong>Software Engineering</strong>, <strong>AI Engineering</strong>, and <strong>Competitive Programming</strong>.
        </p>

        <p>
          He has not formally initiated institutional or academic core research yet; however, his long-term core research aspiration centers on <strong>algorithms and theoretical computer science</strong> — with an academic intent to explore algorithmic optimization, combinatorial problem solving, and asymptotic complexity bounds.
        </p>
      </div>

      {/* Active Work */}
      <h3 className="text-xs font-bold text-gray-900 mb-2 font-sans uppercase tracking-wider">
        Active Technical Focus
      </h3>

      <ul className="list-disc pl-5 space-y-2 text-xs sm:text-[13.5px] text-[#202122] leading-relaxed mb-4">
        <li>
          <strong>Software Engineering (Active):</strong> Architecting full-stack web platforms, designing modular backend services, developing RESTful APIs, and modeling database structures prioritizing reliability and clean code maintainability.
        </li>
        <li>
          <strong>AI Engineering (Active):</strong> Developing practical LLM applications, orchestrating stateful cyclic agents with LangGraph, implementing Retrieval-Augmented Generation (RAG) systems, and embedding documents with ChromaDB.
        </li>
        <li>
          <strong>Competitive Programming (Active):</strong> Practicing algorithmic problem-solving under timed contest conditions, two-pointer invariants, dynamic programming, and complexity optimization on platforms like Codeforces and LeetCode.
        </li>
      </ul>

      {/* Future Research Aspiration */}
      <h3 className="text-xs font-bold text-gray-900 mb-2 font-sans uppercase tracking-wider">
        Future Research Aspiration
      </h3>

      <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13.5px] text-[#202122] leading-relaxed">
        <li>
          <strong>Algorithms & Theoretical Computer Science (Prospective):</strong> While formal research has not started yet, his primary academic aspiration is to investigate algorithmic optimization, graph algorithms, and optimal data structure representations.
        </li>
      </ul>
    </section>
  );
}
