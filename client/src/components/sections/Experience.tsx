import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Area Sales Manager",
      company: "Leading FMCG Company",
      period: "2020 - Present",
      achievements: [
        "Managed a territory generating $2.8M in quarterly revenue, consistently exceeding targets by 15%+.",
        "Drove 40% year-over-year revenue growth through strategic channel expansion and optimized trade promotions.",
        "Successfully launched 3 new product lines, generating $250K/month in incremental revenue within the first quarter.",
        "Expanded retail distribution network by adding 200+ new high-volume retail touchpoints.",
        "Led, trained, and mentored a team of 15 frontline sales executives, improving overall team productivity by 25%."
      ]
    },
    {
      title: "Business Development Specialist (International Trade)",
      company: "Independent Consultant / Export Advisory",
      period: "2018 - 2020",
      achievements: [
        "Facilitated market entry for Indian FMCG and agricultural exporters into the highly competitive UK market.",
        "Closed a landmark $100K international trade deal between an Indian supplier and a UK-based distributor.",
        "Conducted comprehensive market research to identify viable buyer segments and compliance requirements for UK imports.",
        "Negotiated contracts, managed logistics coordination, and ensured smooth end-to-end delivery of goods."
      ]
    }
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
        <span className="w-8 h-1 bg-accent rounded-full"></span>
        Professional Experience
      </h2>

      <div className="space-y-8 mt-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase className="w-4 h-4" />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-card border border-border shadow-sm transition-all hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <div className="text-primary font-medium">{exp.company}</div>
                </div>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3 mt-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
}
