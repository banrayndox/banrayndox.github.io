import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { languagesData } from '../data/languages.js';

/**
 * Programming Languages & Tooling Section
 * Distinct dedicated section formatted in authentic Wikipedia article style with compact list.
 */
export default function LanguagesSection() {
  return (
    <section>
      <SectionHeading
        id="languages"
        title="Programming languages & tooling"
        subtitle="Computational tools & implementation contexts"
      />

      <p className="text-[14.5px] text-[#202122] dark:text-[#eaecf0] leading-relaxed mb-3.5">
        Rakib B utilizes several programming languages across competitive programming, full-stack systems engineering, machine learning workflows, and systems-level academic coursework:
      </p>

      <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13px] text-gray-800 dark:text-[#c8ccd1] leading-relaxed">
        {languagesData.map((lang, idx) => (
          <li key={idx}>
            <strong className="text-gray-950 dark:text-white font-semibold">{lang.name}</strong> — {lang.context}
          </li>
        ))}
      </ul>
    </section>
  );
}
