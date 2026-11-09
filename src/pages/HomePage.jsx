import React from 'react';
import Introduction from '../components/Introduction.jsx';
import AcademicSection from '../components/AcademicSection.jsx';
import ProfessionalSection from '../components/ProfessionalSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import InterestsSection from '../components/InterestsSection.jsx';
import CompetitiveProgrammingSection from '../components/CompetitiveProgrammingSection.jsx';
import NewsSection from '../components/NewsSection.jsx';
import WritingSection from '../components/WritingSection.jsx';
import CodeSection from '../components/CodeSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import ReferencesSection from '../components/ReferencesSection.jsx';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Introduction />
      <AcademicSection />
      <ProfessionalSection />
      <ProjectsSection />
      <InterestsSection />
      <CompetitiveProgrammingSection />
      <NewsSection />
      <WritingSection />
      <CodeSection />
      <ContactSection />
      <ReferencesSection />
    </div>
  );
}
