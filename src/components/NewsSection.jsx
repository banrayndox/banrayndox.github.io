import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { newsData } from '../data/news.js';

export default function NewsSection() {
  return (
    <section>
      <SectionHeading id="news" title="News & chronological updates" subtitle="Activity log" />

      <table className="wikitable my-3">
        <thead>
          <tr>
            <th className="w-1/5 sm:w-1/6">Date</th>
            <th>Event & Summary</th>
            <th className="w-1/6">Link</th>
          </tr>
        </thead>
        <tbody>
          {newsData.map((item) => (
            <tr key={item.id}>
              <td className="font-mono text-xs whitespace-nowrap align-top">{item.date}</td>
              <td className="align-top text-xs sm:text-[13.5px]">
                <strong>{item.headline}. </strong>
                <span className="text-[#202122]">{item.content}</span>
              </td>
              <td className="align-top text-xs font-mono">
                {item.link ? (
                  <a
                    href={item.link.url}
                    target={item.link.url.startsWith('http') ? "_blank" : undefined}
                    rel={item.link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-[#0645ad] hover:underline"
                  >
                    [{item.link.text}]
                  </a>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
