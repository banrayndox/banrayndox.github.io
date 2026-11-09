import React, { useState } from 'react';
import { profileData } from '../data/profile.js';

export default function WikiInfobox() {
  const [imgSrc, setImgSrc] = useState(profileData.avatar.customPhotoUrl);
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (!imgFailed) {
      setImgFailed(true);
      setImgSrc('/rakib-placeholder.svg');
    }
  };

  return (
    <aside
      aria-label="Biographical infobox"
      className="wiki-infobox-container float-none md:float-right md:w-[320px] md:ml-6 mb-6 clear-right"
    >
      <table className="wiki-infobox">
        <thead>
          <tr>
            <th colSpan="2" className="bg-[#eaecf0] text-center font-bold text-base py-1.5 border-b border-[#a2a9b1]">
              Rakib Biswash
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Portrait Image Row */}
          <tr>
            <td colSpan="2" className="text-center p-2 border-b border-[#eaecf0] bg-white">
              <div className="w-[180px] h-[215px] mx-auto border border-[#a2a9b1] bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src={imgSrc}
                  alt={profileData.avatar.altText}
                  onError={handleImageError}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[11.5px] text-gray-600 mt-1.5 leading-tight font-sans">
                Rakib Biswash at Daffodil International University (2026)
              </div>
            </td>
          </tr>

          {/* Infobox Subheader: Personal details */}
          <tr>
            <th colSpan="2" className="wiki-infobox-header">
              Personal details
            </th>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="w-[38%] text-xs font-bold text-gray-800">
              Residence / Location
            </th>
            <td className="text-xs text-gray-900">
              Dhaka, Bangladesh
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Alma mater
            </th>
            <td className="text-xs text-gray-900">
              <a href="#academic" className="hover:underline">Daffodil International University</a> (DIU)
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Academic standing
            </th>
            <td className="text-xs text-gray-900">
              B.Sc. in CSE (5th Semester)
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Occupation
            </th>
            <td className="text-xs text-gray-900">
              Software developer · Student
            </td>
          </tr>

          {/* Infobox Subheader: Technical work */}
          <tr>
            <th colSpan="2" className="wiki-infobox-header">
              Engineering & Projects
            </th>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Notable projects
            </th>
            <td className="text-xs text-gray-900">
              <ul className="list-disc pl-4 space-y-0.5 m-0">
                <li><a href="#diu-copilot">DIU Copilot</a></li>
                <li><a href="#codeready-ai">CodeReady AI</a></li>
                <li><a href="#diu-class-coordination-system">DIU Class Coordination</a></li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Key fields
            </th>
            <td className="text-xs text-gray-900">
              Full-Stack Systems · AI Engineering · Algorithms
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Appointments
            </th>
            <td className="text-xs text-gray-900">
              Bangladesh Campus Ambassador, CleverCreator AI
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Honours
            </th>
            <td className="text-xs text-gray-900">
              Podium Finisher, BreakOut Algorithm Contest (2026)
            </td>
          </tr>

          {/* Infobox Subheader: Online presence */}
          <tr>
            <th colSpan="2" className="wiki-infobox-header">
              Web & Profiles
            </th>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              GitHub
            </th>
            <td className="text-xs">
              <a href="https://github.com/banrayndox" target="_blank" rel="noopener noreferrer">
                banrayndox
              </a>
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              LinkedIn
            </th>
            <td className="text-xs">
              <a href="https://linkedin.com/in/banrayndox" target="_blank" rel="noopener noreferrer">
                banrayndox
              </a>
            </td>
          </tr>
          <tr className="border-b border-[#eaecf0]">
            <th scope="row" className="text-xs font-bold text-gray-800">
              Codeforces
            </th>
            <td className="text-xs">
              <a href="https://codeforces.com/profile/banrayndox" target="_blank" rel="noopener noreferrer">
                banrayndox
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-xs font-bold text-gray-800">
              Contact
            </th>
            <td className="text-xs">
              <a href="mailto:rakib.biswash.dev@gmail.com">
                rakib.biswash.dev@gmail.com
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
