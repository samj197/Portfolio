import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "MSc – Data Analytics",
      institution: "Dunster Business School, Switzerland",
      year: "Nov 2025"
    },
    {
      degree: "MSc – International Business, Finance & Economics",
      institution: "University of East Anglia, Norwich, UK",
      year: "Sep 2023 – Sep 2024"
    },
    {
      degree: "PGDM – Marketing & Business Analytics",
      institution: "IIMS, Pune, India",
      year: "Jun 2022"
    },
    {
      degree: "Bachelor's – Mass Media (Advertising)",
      institution: "University of Mumbai, Mumbai, India",
      year: "Jun 2019"
    }
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
        <span className="w-8 h-1 bg-accent rounded-full"></span>
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {education.map((edu, index) => (
          <div key={index} className="glass-card rounded-2xl p-6 border border-border flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground leading-tight">{edu.degree}</h3>
              <p className="text-primary font-medium mt-1">{edu.institution}</p>
              <span className="inline-block mt-2 text-sm font-semibold text-muted-foreground bg-background px-2.5 py-0.5 rounded-full border border-border">
                {edu.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}