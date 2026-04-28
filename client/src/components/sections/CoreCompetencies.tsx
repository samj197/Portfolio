import { Brain, BarChart3, Briefcase, Megaphone } from "lucide-react";

const skillGroups = [
  {
    title: "Strategy & Problem-Solving",
    icon: <Brain className="w-5 h-5" />,
    skills: [
      "Hypothesis-Driven Analysis",
      "Market Sizing & Entry Strategy",
      "Competitive Benchmarking",
      "Go-to-Market Design",
      "P&L Ownership"
    ]
  },
  {
    title: "Data & Analytics",
    icon: <BarChart3 className="w-5 h-5" />,
    skills: [
      "SQL (Querying & Joins)",
      "Power BI & Excel Modeling",
      "Google Analytics",
      "Forecasting & KPI Design",
      "Performance Dashboards"
    ]
  },
  {
    title: "Commercial & Stakeholder",
    icon: <Briefcase className="w-5 h-5" />,
    skills: [
      "B2B Sales Strategy",
      "CRM (Salesforce, HubSpot, Zoho)",
      "Multi-Party Negotiation",
      "Proposal & Tender Development",
      "Executive Storytelling"
    ]
  },
  {
    title: "Marketing & Growth",
    icon: <Megaphone className="w-5 h-5" />,
    skills: [
      "Performance Marketing (Meta/Google)",
      "CAC Optimisation",
      "Campaign ROI Tracking",
      "Content & Digital Strategy",
      "Customer Segmentation"
    ]
  }
];

export default function CoreCompetencies() {
  return (
    <section className="bg-secondary/50 rounded-3xl p-8 lg:p-12 border border-border">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
          <span className="w-8 h-1 bg-accent rounded-full"></span>
          Consulting Toolkit
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Cross-functional capabilities organised across the four pillars of a strategy and business analyst engagement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-sm border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{group.title}</h3>
              </div>
              <ul className="space-y-2">
                {group.skills.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
