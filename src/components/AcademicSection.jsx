import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { academicData } from '../data/academic.js';

export default function AcademicSection() {
  return (
    <section>
      <SectionHeading id="academic" title="Academic background" subtitle="Education & coursework" />

      {/* Encyclopedic text */}
      <div className="mb-4 text-[#202122] text-[14.5px] leading-relaxed">
        <p className="mb-2.5">
          Rakib Biswash is currently enrolled in the <strong>{academicData.degree}</strong> program at <strong>{academicData.institution}</strong> in {academicData.location}. As of the 2026 academic calendar, he is in his <strong>{academicData.currentStatus}</strong>.
        </p>
        <p>
          {academicData.overview}
        </p>
      </div>

      {/* Wikipedia Style Table (.wikitable) */}
      <table className="wikitable my-3">
        <tbody>
          {academicData.details.map((item, idx) => (
            <tr key={idx}>
              <th scope="row" className="w-1/3">
                {item.label}
              </th>
              <td>
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Academic Focus Areas */}
      <div className="mt-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-2">
          Core Academic Disciplines
        </h3>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#202122]">
          {academicData.focusAreas.map((area, idx) => (
            <li key={idx} className="leading-relaxed">
              <strong>{area.title}:</strong>{" "}
              <span className="text-gray-800">{area.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
