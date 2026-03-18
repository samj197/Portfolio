import { Lightbulb, Presentation, LineChart } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Impact of Crude Oil Prices on Forex Exchange Rates",
      subtitle: "MSc Dissertation Project",
      icon: <LineChart className="w-6 h-6" />,
      bullets: [
        "Scrutinized the correlation between crude oil prices and forex rates for oil-exporting and importing nations.",
        "Applied time-series analysis using Excel, SPSS, and Power BI for trend and volatility evaluation.",
        "Delivered insights to support macroeconomic policy and hedging strategy development."
      ]
    },
    {
      title: "Campaign ROI Tracking & Budget Optimization",
      subtitle: "Marketing Analytics",
      icon: <Presentation className="w-6 h-6" />,
      bullets: [
        "Tracked digital campaign ROI using Google Analytics and Excel dashboards.",
        "Reduced marketing spend by 15% while maintaining lead generation volume."
      ]
    },
    {
      title: "Revenue Forecasting Model for Retail Client",
      subtitle: "Predictive Analytics",
      icon: <Lightbulb className="w-6 h-6" />,
      bullets: [
        "Developed a predictive model in Excel and Power BI to forecast monthly revenue.",
        "Improved forecast accuracy by 18%, enhancing financial and marketing decisions."
      ]
    }
  ];

  return (
    <section className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative z-10 space-y-8">
        <h2 className="text-3xl font-bold inline-flex items-center gap-3">
          <span className="w-8 h-1 bg-accent rounded-full"></span>
          Key Projects & Analytics
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-1 leading-tight">{project.title}</h3>
              <p className="text-accent text-sm font-medium mb-4">{project.subtitle}</p>
              <ul className="space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
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