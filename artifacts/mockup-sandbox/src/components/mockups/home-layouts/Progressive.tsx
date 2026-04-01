import './_group.css';
import Hero from "./_shared/sections/Hero";
import Summary from "./_shared/sections/Summary";
import CoreCompetencies from "./_shared/sections/CoreCompetencies";
import Experience from "./_shared/sections/Experience";
import Education from "./_shared/sections/Education";
import Projects from "./_shared/sections/Projects";
import Portfolio from "./_shared/sections/Portfolio";
import Footer from "./_shared/sections/Footer";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Progressive() {
  const [expandedSection, setExpandedSection] = useState<string | null>("portfolio");

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        
        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          <button 
            onClick={() => toggleSection("summary")}
            className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/50 transition-colors"
          >
            <h2 className="text-2xl font-bold">Executive Summary & Competencies</h2>
            {expandedSection === "summary" ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSection === "summary" && (
            <div className="p-6 pt-0 border-t bg-card/50">
              <div className="space-y-12 mt-6">
                <Summary />
                <CoreCompetencies />
              </div>
            </div>
          )}
        </div>

        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          <button 
            onClick={() => toggleSection("portfolio")}
            className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/50 transition-colors"
          >
            <h2 className="text-2xl font-bold">Portfolio Case Studies</h2>
            {expandedSection === "portfolio" ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSection === "portfolio" && (
            <div className="p-6 pt-0 border-t bg-card/50">
              <div className="mt-6">
                <Portfolio />
              </div>
            </div>
          )}
        </div>

        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          <button 
            onClick={() => toggleSection("experience")}
            className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/50 transition-colors"
          >
            <h2 className="text-2xl font-bold">Professional Experience</h2>
            {expandedSection === "experience" ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSection === "experience" && (
            <div className="p-6 pt-0 border-t bg-card/50">
              <div className="mt-6">
                <Experience />
              </div>
            </div>
          )}
        </div>

        <div className="bg-card rounded-2xl border shadow-sm overflow-hidden">
          <button 
            onClick={() => toggleSection("projects")}
            className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/50 transition-colors"
          >
            <h2 className="text-2xl font-bold">Projects & Education</h2>
            {expandedSection === "projects" ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSection === "projects" && (
            <div className="p-6 pt-0 border-t bg-card/50">
              <div className="space-y-12 mt-6">
                <Projects />
                <Education />
              </div>
            </div>
          )}
        </div>

      </main>
      <Footer />
    </div>
  );
}
