import { CheckCircle2 } from "lucide-react";

const skills = [
  "FMCG Sales & Distribution",
  "International Market Expansion",
  "B2B Relationship Management",
  "Key Account Management",
  "Sales Strategy & Planning",
  "New Product Launches",
  "Revenue & Profit Growth",
  "Team Leadership & Training",
  "Export Market Research",
  "Channel Partner Development",
  "Trade Marketing",
  "Sales Data Analysis"
];

export default function CoreCompetencies() {
  return (
    <section className="bg-secondary/50 rounded-3xl p-8 lg:p-12 border border-border">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
          <span className="w-8 h-1 bg-accent rounded-full"></span>
          Core Competencies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 bg-background rounded-xl p-4 shadow-sm border border-border hover:border-primary/20 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="font-medium text-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
