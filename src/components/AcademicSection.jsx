import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { academicData } from '../data/academic.js';

/**
 * AcademicSection
 * Pure Wikipedia article prose format without tables or callout boxes.
 * Includes direct authentic hyperlinks to Daffodil International University and DIU CSE department.
 */
export default function AcademicSection() {
  return (
    <section>
      <SectionHeading id="academic" title="Academic background" subtitle="Education & university affiliation" />

      <div className="space-y-3 text-[#202122] text-[14.5px] leading-relaxed">
        <p>
          Rakib B is an undergraduate student in{" "}
          <a
            href={academicData.departmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0645ad] hover:underline"
          >
            Computer Science and Engineering
          </a>{" "}
          at{" "}
          <a
            href={academicData.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0645ad] hover:underline"
          >
            Daffodil International University
          </a>{" "}
          (DIU) in {academicData.location}. As of the 2026 academic calendar, he is in his{" "}
          <strong>{academicData.currentStatus}</strong> of study toward a {academicData.degree} ({academicData.degreeShort}).
        </p>

        <p>
          His academic studies focus on foundational computational theory, algorithmic problem solving, software system architecture, and artificial intelligence application development.
        </p>
      </div>
    </section>
  );
}
