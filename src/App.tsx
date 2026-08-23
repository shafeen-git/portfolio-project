/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PlansSection } from './components/PlansSection';
import { ResearchSection } from './components/ResearchSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-700 flex flex-col justify-between relative overflow-x-hidden">
      {/* Top Dynamic Reading Progress Bar & Floating Quick Action */}
      <ScrollProgress />

      {/* Subtle Interactive Ambient Particle Constellation Mesh */}
      <InteractiveBackground />

      {/* Dynamic Header & Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. About Me Section (Includes Profile Picture & Academic Profile) */}
        <AboutSection />

        {/* 3. Education Section */}
        <EducationSection />

        {/* 4. Tech Stack Section */}
        <TechStackSection />

        {/* 5. Featured Projects Section */}
        <ProjectsSection />

        {/* 6. Plans & Technical Roadmap Section */}
        <PlansSection />

        {/* 7. Research & Academic Papers Section */}
        <ResearchSection />

        {/* 8. Interests & Passions Section */}
        <InterestsSection />

        {/* 9. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer with 2026 Copyright */}
      <Footer />
    </div>
  );
}
