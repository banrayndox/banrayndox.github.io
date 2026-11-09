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
    </section>
  );
}
