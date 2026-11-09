import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { contactData } from '../data/contact.js';

/**
 * Contact & External Links Section
 * Formatted as an authentic Wikipedia "External links & Correspondence" list (no table).
 */
export default function ContactSection() {
  return (
    <section>
      <SectionHeading id="contact" title="Contact & external links" subtitle="Communication & profiles" />

      <p className="text-[14px] text-[#202122] leading-relaxed mb-3">
        {contactData.message}
      </p>

      {/* Wikipedia Style External Links & Channels List */}
      <ul className="list-disc pl-5 space-y-2 text-xs sm:text-[14px] text-[#202122] leading-relaxed">
        {contactData.channels.map((ch, idx) => (
          <li key={idx}>
            <strong className="text-black">{ch.label}:</strong>{" "}
            <a
              href={ch.url}
              target={ch.url.startsWith('http') ? "_blank" : undefined}
              rel={ch.url.startsWith('http') ? "noopener noreferrer" : undefined}
              className="text-[#0645ad] hover:underline font-mono"
            >
              {ch.value} {ch.url.startsWith('http') ? "↗" : ""}
            </a>
            {ch.hint && (
              <span className="text-gray-600 text-xs sm:text-[13px] ml-1.5">
                — {ch.hint}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
