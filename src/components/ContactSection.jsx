import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { contactData } from '../data/contact.js';

export default function ContactSection() {
  return (
    <section>
      <SectionHeading id="contact" title="Contact & channels" subtitle="Communication" />

      <p className="text-[14px] text-[#202122] leading-relaxed mb-4">
        {contactData.message}
      </p>

      <table className="wikitable mb-4">
        <thead>
          <tr>
            <th className="w-1/4">Channel</th>
            <th className="w-1/3">Address / Handle</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {contactData.channels.map((ch, idx) => (
            <tr key={idx}>
              <td className="font-bold text-xs">{ch.label}</td>
              <td className="font-mono text-xs">
                <a
                  href={ch.url}
                  target={ch.url.startsWith('http') ? "_blank" : undefined}
                  rel={ch.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-[#0645ad] hover:underline"
                >
                  {ch.value}
                </a>
              </td>
              <td className="text-xs text-gray-700">{ch.hint}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
