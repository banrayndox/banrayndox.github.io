import React from 'react';
import SectionHeading from './SectionHeading.jsx';
import { newsData } from '../data/news.js';

export default function NewsSection() {
  return (
    <section>
      <SectionHeading id="news" title="News & Updates" subtitle="Chronological Log" />

      <p className="text-sm text-gray-600 mb-5 italic">
        Recent milestones, software releases, competition outcomes, and community updates.
      </p>

      <div className="space-y-4">
        {newsData.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row sm:gap-4 pb-3.5 border-b border-gray-100 last:border-b-0 last:pb-0">
            {/* Date Column */}
            <div className="sm:w-36 shrink-0 text-xs sm:text-sm font-mono text-gray-500 pt-0.5">
              {item.date}
            </div>

            {/* Content Column */}
            <div className="flex-1">
              <div className="text-[14.5px] text-gray-900 leading-relaxed">
                <span className="font-semibold text-gray-950">{item.headline}. </span>
                <span className="text-gray-700">{item.content}</span>
                {item.link && (
                  <span className="ml-1.5 inline-block">
                    <a
                      href={item.link.url}
                      target={item.link.url.startsWith('http') ? "_blank" : undefined}
                      rel={item.link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-xs hover:underline"
                    >
                      [{item.link.text}]
                    </a>
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
