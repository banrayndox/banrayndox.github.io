import React from 'react';
import SectionHeading from './SectionHeading.jsx';

/**
 * Research & Technical Interests Section
 * Concise Wikipedia-style overview of active engineering focus and research aspirations.
 */
export default function InterestsSection() {
  return (
    <section>
      <SectionHeading
        id="research"
        title="Research & technical interests"
        subtitle="Focus areas & academic interests"
      />

      <p className="text-[14.5px] text-[#202122] dark:text-[#eaecf0] leading-relaxed mb-3">
        Rakib B's technical work and academic interests center on three primary domains:
      </p>

      <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13.5px] text-[#202122] dark:text-[#eaecf0] leading-relaxed mb-3.5">
        <li>
          <strong className="text-black dark:text-white">Software Engineering</strong> — Full-stack web systems, modular backend architecture, and clean RESTful APIs.
        </li>
        <li>
          <strong className="text-black dark:text-white">AI Engineering</strong> — Applied LLM workflows, agent orchestration with LangGraph, and RAG architectures.
        </li>
        <li>
          <strong className="text-black dark:text-white">Competitive Programming</strong> — Algorithmic problem solving, graph theory, and computational complexity on Codeforces and LeetCode.
        </li>
      </ul>

      <p className="text-xs sm:text-[13px] text-gray-700 dark:text-[#c8ccd1] leading-relaxed italic border-l-2 border-[#a2a9b1] dark:border-[#54595d] pl-3 py-1 bg-[#f8f9fa] dark:bg-[#27292d]">
        Formal institutional research has not commenced yet; his long-term core research aspiration centers on <strong className="text-black dark:text-white">algorithms and theoretical computer science</strong>, with an emphasis on optimization and computational complexity bounds.
      </p>
    </section>
  );
}
