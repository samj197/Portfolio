import './_group.css';
import Hero from "./_shared/sections/Hero";
import Summary from "./_shared/sections/Summary";
import CoreCompetencies from "./_shared/sections/CoreCompetencies";
import Experience from "./_shared/sections/Experience";
import Education from "./_shared/sections/Education";
import Projects from "./_shared/sections/Projects";
import Portfolio from "./_shared/sections/Portfolio";
import Footer from "./_shared/sections/Footer";

export default function TwoColumn() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Sticky Profile info */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-8">
            <div className="bg-card rounded-3xl p-6 border shadow-sm">
              <Summary />
            </div>
            
            <div className="bg-card rounded-3xl p-6 border shadow-sm">
              <CoreCompetencies />
            </div>

            <div className="bg-card rounded-3xl p-6 border shadow-sm">
              <Education />
            </div>
          </div>

          {/* Right Column - Deep dive content */}
          <div className="lg:col-span-8 space-y-16">
            <div className="bg-background rounded-3xl border shadow-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              <Portfolio />
            </div>

            <div className="bg-background rounded-3xl border shadow-sm p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <Experience />
            </div>

            <div className="bg-background rounded-3xl border shadow-sm p-8">
              <Projects />
            </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
