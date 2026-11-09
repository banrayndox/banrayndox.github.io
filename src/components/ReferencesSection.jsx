import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { referencesData } from '../data/references.js';

export default function ReferencesSection() {
  return (
    <section id="references" className="pt-6 scroll-mt-14">
      <SectionHeading id="references" title="References" subtitle="Citations & Verification" />

      <ol className="text-xs text-gray-700 space-y-1.5 list-decimal pl-5 font-sans">
        {referencesData.map((ref) => (
          <li key={ref.id} id={`ref-${ref.id}`} className="leading-relaxed">
            <span className="text-gray-400 font-mono select-none mr-1.5">^</span>
            <span>{ref.text} </span>
            {ref.url && (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0645ad] hover:underline"
              >
                [online link ↗]
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
