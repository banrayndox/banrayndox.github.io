import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { contactData } from '../data/contact.js';

/**
 * Contact & External Links Section
 * Formatted as a fluent, unified Wikipedia paragraph linking all channels naturally.
 */
export default function ContactSection() {
  return (
    <section>
      <SectionHeading id="contact" title="Contact & external links" subtitle="Correspondence & web profiles" />

      <p className="text-[14.5px] text-[#202122] dark:text-[#eaecf0] leading-relaxed">
        Rakib B may be contacted directly via email at{" "}
        <a
          href={`mailto:${contactData.email}`}
          className="text-[#0645ad] dark:text-[#6da8ff] hover:underline font-mono"
        >
          {contactData.email}
        </a>{" "}
        or through WhatsApp at{" "}
        <a
          href={contactData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0645ad] dark:text-[#6da8ff] hover:underline font-mono"
        >
          {contactData.phone}
        </a>. Additional web profiles, development repositories, and online activities are maintained across{" "}
        {contactData.profiles.map((p, idx) => (
          <React.Fragment key={p.name}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0645ad] dark:text-[#6da8ff] hover:underline"
            >
              {p.name}
            </a>
            {idx < contactData.profiles.length - 2 && ", "}
            {idx === contactData.profiles.length - 2 && ", and "}
          </React.Fragment>
        ))}.
      </p>
    </section>
  );
}
