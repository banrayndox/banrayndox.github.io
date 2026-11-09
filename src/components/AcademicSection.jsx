import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { academicData } from '../data/academic.js';

/**
 * AcademicSection
 * Formatted as authentic Wikipedia biographical prose with formal education credentials
 * and structured coursework disciplines (no redundant tables).
 */
export default function AcademicSection() {
  return (
    <section>
      <SectionHeading id="academic" title="Academic background" subtitle="Education & coursework" />

      {/* Encyclopedic text */}
      <div className="space-y-2.5 text-[#202122] text-[14.5px] leading-relaxed mb-4">
        <p>
          Rakib Biswash is an undergraduate student at <strong>{academicData.institution}</strong> in {academicData.location}, where he is pursuing a <strong>{academicData.degree}</strong> (B.Sc. in CSE). As of the 2026 academic calendar, he is in his <strong>{academicData.currentStatus}</strong> of study.
        </p>
        <p>
          His coursework and academic curriculum center on core computing disciplines, algorithmic foundations, software design, and system implementations.
        </p>
      </div>

      {/* Formal Education Credential Block (Wikipedia Style) */}
      <div className="bg-[#f8f9fa] border-l-[3px] border-[#a2a9b1] pl-3.5 py-2 mb-4 text-xs sm:text-[13px] text-gray-800">
        <div className="font-bold text-gray-950 text-[13.5px]">
          {academicData.degree}
        </div>
        <div className="text-gray-600 font-medium mt-0.5">
          {academicData.institution} — {academicData.location}
        </div>
        <div className="text-gray-500 font-mono text-[11.5px] mt-0.5">
          Academic Standing: Undergraduate ({academicData.currentStatus}) · In Progress
        </div>
      </div>

      {/* Core Coursework & Disciplines */}
      <div className="pt-1">
        <h3 className="text-xs font-bold text-gray-900 mb-2 font-sans uppercase tracking-wider">
          Core Coursework & Academic Disciplines
        </h3>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13px] text-gray-800 leading-relaxed">
          <li>
            <strong className="text-gray-950 font-semibold">Data Structures & Algorithms</strong> — Asymptotic complexity analysis, graph algorithms, dynamic programming, and computational problem solving.
          </li>
          <li>
            <strong className="text-gray-950 font-semibold">Object-Oriented Programming (OOP)</strong> — Abstraction, encapsulation, inheritance, polymorphism, and software design patterns.
          </li>
          <li>
            <strong className="text-gray-950 font-semibold">Database Management Systems</strong> — Relational schema architecture, normalization, SQL querying, transaction management, and indexing.
          </li>
          <li>
            <strong className="text-gray-950 font-semibold">Computer Systems & Networking</strong> — Operating system foundations, POSIX socket communication, process scheduling, and network protocols.
          </li>
          <li>
            <strong className="text-gray-950 font-semibold">Software Engineering</strong> — Software development lifecycle (SDLC), modular architecture, unit testing, and team version control.
          </li>
        </ul>
      </div>
    </section>
  );
}
