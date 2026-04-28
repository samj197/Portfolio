import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "International Business Development & E-commerce Consultant",
      company: "EA Immigrations | UK Market Specialist",
      period: "May 2024 – Present",
      achievements: [
        "Advised Indian SME exporters on UK market entry, owning the end-to-end growth thesis from segmentation through channel execution.",
        "Structured the go-to-market playbook for 15+ UK buyers/distributors and Amazon UK launches, delivering 40–65% sales uplift within 3–6 months.",
        "Architected data-driven Meta and Google performance campaigns, reducing customer acquisition cost by 25–35% through audience and creative optimisation.",
        "Synthesised market sizing, competitor benchmarking, and pricing diagnostics to inform positioning decisions for cross-border SKUs."
      ]
    },
    {
      title: "Postgraduate Committee Chair",
      company: "UEA Students' Union | Norwich, UK",
      period: "Sep 2023 – Sep 2024",
      achievements: [
        "Set the postgraduate engagement strategy and partnered with the executive board to prioritise union-wide initiatives.",
        "Designed and orchestrated networking and professional-development events serving 300+ students through targeted segmentation.",
        "Evaluated funding proposals through a value-vs-impact framework to allocate budget toward highest-return academic and social initiatives."
      ]
    },
    {
      title: "Business Development Consultant",
      company: "Suvira Energy | Mumbai, India",
      period: "Apr 2023 – Sep 2023",
      achievements: [
        "Closed a $100K international fuel-additive contract by structuring a tailored value proposition and navigating multi-party negotiation.",
        "Identified and prioritised B2B pipeline opportunities across Singapore and Hong Kong maritime corridors using competitive analysis.",
        "Authored tender responses and proposal frameworks that lifted client onboarding conversion by 30%."
      ]
    },
    {
      title: "Cluster Manager",
      company: "Mount Meru Millers | East Africa",
      period: "May 2022 – Mar 2023",
      achievements: [
        "Owned full P&L for the East Africa cluster, delivering $2.8M in Q4 revenue against an aggressive growth target.",
        "Structured a $100K/month recurring B2B contract that lifted monthly cluster revenue by 40%.",
        "Defined and executed the go-to-market strategy for new edible-oil SKUs, generating $250K/month in incremental revenue.",
        "Diagnosed distribution bottlenecks and reengineered supply-chain flows to remove operational friction across the region."
      ]
    },
    {
      title: "Business Development Executive",
      company: "Market Research Future | Pune, India",
      period: "Mar 2021 – Apr 2022",
      achievements: [
        "Conducted competitive intelligence and market sizing across ICT and Semiconductor verticals for North American enterprise clients.",
        "Designed lead-focused commercial strategies that drove $7,500 in incremental report sales within pilot accounts.",
        "Synthesised analytical insight reports for senior sales leadership and presented findings to client-facing audiences."
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
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground shrink-0 text-center">
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
