import Hero from "@/components/sections/Hero";
import Summary from "@/components/sections/Summary";
import CoreCompetencies from "@/components/sections/CoreCompetencies";
import Experience from "@/components/sections/Experience";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Summary />
        <CoreCompetencies />
        <Experience />
        <WhyHireMe />
      </main>
      <Footer />
    </div>
  );
}
