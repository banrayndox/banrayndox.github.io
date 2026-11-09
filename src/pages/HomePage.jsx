import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Introduction from '../components/Introduction.jsx';
import AcademicSection from '../components/AcademicSection.jsx';
import ProfessionalSection from '../components/ProfessionalSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import InterestsSection from '../components/InterestsSection.jsx';
import CompetitiveProgrammingSection from '../components/CompetitiveProgrammingSection.jsx';
import WritingSection from '../components/WritingSection.jsx';
import CodeSection from '../components/CodeSection.jsx';
import LanguagesSection from '../components/LanguagesSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    }
  }, [location.hash]);

  return (
    <div className="space-y-6">
      <Introduction />
      <AcademicSection />
      <ProfessionalSection />
      <ProjectsSection />
      <InterestsSection />
      <CompetitiveProgrammingSection />
      <WritingSection />
      <CodeSection />
      <LanguagesSection />
      <ContactSection />
    </div>
  );
}
