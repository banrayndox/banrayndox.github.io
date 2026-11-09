import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { contactData } from '../data/contact.js';

/**
 * Contact & External Links Section
 * Formatted strictly according to Wikipedia's biographical "External links" convention:
 * clean named hyperlinked entries without verbose descriptions or raw unformatted URLs.
 */
export default function ContactSection() {
  return (
    <section>
      <SectionHeading id="contact" title="Contact & external links" subtitle="Correspondence & web profiles" />

      <p className="text-[14.5px] text-[#202122] leading-relaxed mb-3.5">
        Rakib Biswash may be contacted directly via email at{" "}
        <a
          href={`mailto:${contactData.email}`}
          className="text-[#0645ad] hover:underline font-mono"
        >
          {contactData.email}
        </a>{" "}
        or through WhatsApp at{" "}
        <a
          href={contactData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] hover:underline font-mono"
        >
          {contactData.phone}
        </a>.
      </p>

      {/* Wikipedia Style External Links */}
      <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-[13.5px] text-[#202122] leading-relaxed">
        {contactData.externalLinks.map((link) => (
          <li key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0645ad] hover:underline"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
