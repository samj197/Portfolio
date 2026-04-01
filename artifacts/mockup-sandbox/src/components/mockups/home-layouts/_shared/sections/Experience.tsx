import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Export Research Associate",
      company: "EA Immigrations Ltd | Remote",
      period: "May 2024 – Present",
      achievements: [
        "Researched and identified UK importers and distributors for Indian engineering goods and bulk FMCG products.",
        "Analysed import trends, HS codes, and pricing benchmarks to support market entry.",
        "Generated and qualified B2B leads through trade databases and outreach.",
        "Supported Indian exporters with buyer insights and go-to-market recommendations."
      ]
    },
    {
      title: "Postgraduate Committee Chair",
      company: "UEA Students' Union | Norwich, UK",
      period: "Sep 2023 – Sep 2024",
      achievements: [
        "Led postgraduate community engagement strategy and worked with the board on strategic initiatives.",
        "Organized networking and professional development events for over 300 students.",
        "Reviewed and approved funding proposals to support academic and social initiatives."
      ]
    },
    {
      title: "Business Development Consultant",
      company: "Suvira Energy | Mumbai, India",
      period: "Apr 2023 – Sep 2023",
      achievements: [
        "Negotiated and secured an international $100,000 deal in the fuel additive sector.",
        "Identified new B2B opportunities across Singapore and Hong Kong maritime industries.",
        "Drafted tenders and proposals, increasing client onboarding by 30%."
      ]
    },
    {
      title: "Cluster Manager",
      company: "Mount Meru Millers | East Africa",
      period: "May 2022 – Mar 2023",
      achievements: [
        "Managed export and B2B sales operations, achieving $2.8M in Q4 sales revenue.",
        "Closed a $100K/month contract, increasing monthly revenue by 40%.",
        "Implemented a go-to-market strategy for new edible oil products, generating $250K/month.",
        "Optimized supply chain operations, resolving distribution inefficiencies."
      ]
    },
    {
      title: "Business Development Executive",
      company: "Market Research Future | Pune, India",
      period: "Mar 2021 – Apr 2022",
      achievements: [
        "Conduct competitive market analysis in ICT & Semiconductor domains for North American clients.",
        "Created lead-focused marketing strategies, boosting report sales by $7,500.",
        "Generated analytical insight reports for senior sales teams and delivered business presentations."
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
