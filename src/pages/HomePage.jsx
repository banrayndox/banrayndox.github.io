import React from 'react';
import Introduction from '../components/Introduction.jsx';
import NewsSection from '../components/NewsSection.jsx';
import AcademicSection from '../components/AcademicSection.jsx';
import ProfessionalSection from '../components/ProfessionalSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import InterestsSection from '../components/InterestsSection.jsx';
import CompetitiveProgrammingSection from '../components/CompetitiveProgrammingSection.jsx';
import WritingSection from '../components/WritingSection.jsx';
import CodeSection from '../components/CodeSection.jsx';
import ContactSection from '../components/ContactSection.jsx';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Introduction />
      <NewsSection />
      <AcademicSection />
      <ProfessionalSection />
      <ProjectsSection />
      <InterestsSection />
      <CompetitiveProgrammingSection />
      <WritingSection />
      <CodeSection />
      <ContactSection />
    </div>
  );
}
