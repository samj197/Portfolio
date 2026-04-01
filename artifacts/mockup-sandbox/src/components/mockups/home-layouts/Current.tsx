import './_group.css';
import Hero from "./_shared/sections/Hero";
import Summary from "./_shared/sections/Summary";
import CoreCompetencies from "./_shared/sections/CoreCompetencies";
import Experience from "./_shared/sections/Experience";
import Education from "./_shared/sections/Education";
import Projects from "./_shared/sections/Projects";
import Portfolio from "./_shared/sections/Portfolio";
import Footer from "./_shared/sections/Footer";

export default function Current() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Summary />
        <CoreCompetencies />
        <Portfolio />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
