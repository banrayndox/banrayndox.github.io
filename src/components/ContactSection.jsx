import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { contactData } from '../data/contact.js';

export default function ContactSection() {
  return (
    <section>
      <SectionHeading id="contact" title="Contact" subtitle="Get in Touch" />

      <p className="text-[15px] text-gray-800 leading-relaxed mb-5">
        {contactData.message}
      </p>

      {/* Direct communication links table / list */}
      <div className="overflow-hidden border border-gray-200 rounded-xs mb-4">
        <table className="academic-table">
          <tbody>
            {contactData.channels.map((ch, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                <td className="w-1/4 py-2.5 px-3.5 font-medium text-gray-800 text-sm border-r border-gray-200">
                  {ch.label}
                </td>
                <td className="w-1/2 py-2.5 px-3.5 text-sm">
                  <a
                    href={ch.url}
                    target={ch.url.startsWith('http') ? "_blank" : undefined}
                    rel={ch.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="font-mono text-[13.5px] hover:underline"
                  >
                    {ch.value}
                  </a>
                </td>
                <td className="w-1/4 py-2.5 px-3.5 text-xs text-gray-500 hidden sm:table-cell">
                  {ch.hint}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
