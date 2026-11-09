import React, { useState } from 'react';
import { profileData } from '../data/profile.js';

export default function Introduction() {
  const [imgSrc, setImgSrc] = useState(profileData.avatar.customPhotoUrl);
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (!imgFailed) {
      setImgFailed(true);
      // Fallback to the authentic academic vector placeholder
      setImgSrc('/rakib-placeholder.svg');
    }
  };

  return (
    <section id="about" className="pt-8 pb-4 scroll-mt-20">
      <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8">
        
        {/* Left: Bio, Headline, and Quick Links */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2">
            {profileData.name}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 font-normal mb-5 leading-relaxed">
            {profileData.institution} · {profileData.location}
          </p>

          <div className="space-y-3.5 text-gray-800 text-[15.5px] leading-relaxed">
            {profileData.bioParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Academic / Developer Text Links */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="text-gray-500 font-medium">Links:</span>
            {profileData.quickLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.url}
                  target={link.url.startsWith('http') ? "_blank" : undefined}
                  rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="font-medium hover:underline inline-flex items-center gap-0.5"
                  title={link.note || link.label}
                >
                  [{link.label}]
                </a>
                {idx < profileData.quickLinks.length - 1 && (
                  <span className="text-gray-300 select-none">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right: Academic Homepage Profile Photograph (Replaceable) */}
        <div className="shrink-0 self-start">
          <figure className="m-0 text-center">
            <div className="w-36 sm:w-44 h-44 sm:h-52 bg-gray-50 border border-gray-300 rounded-xs overflow-hidden shadow-2xs flex items-center justify-center">
              <img
                src={imgSrc}
                alt={profileData.avatar.altText}
                onError={handleImageError}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>
            <figcaption className="mt-1.5 text-xs text-gray-500 font-mono">
              Rakib Biswash
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
}
