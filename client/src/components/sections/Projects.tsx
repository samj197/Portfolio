import { Lightbulb, Presentation, LineChart, FileText, Globe } from "lucide-react";

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
      ],
      link: "/dissertation.pdf",
      linkText: "Read Dissertation"
    },
    {
      title: "The Post-Combustion Era: Interactive Report",
      subtitle: "Energy Transition Analysis",
      icon: <Globe className="w-6 h-6" />,
      bullets: [
        "Explored structural transformation of global energy landscape and EV displacement.",
        "Analyzed sector vulnerabilities and projected residual demand for net-zero goals.",
        "Created an interactive, data-driven narrative focusing on 2050 climate scenarios."
      ],
      link: "/interactive-report.html",
      linkText: "View Interactive Report"
    },
    {
      title: "The Great Energy Divergence",
      subtitle: "Energy Transition Projections 2026",
      icon: <Globe className="w-6 h-6" />,
      bullets: [
        "Assessed the displacement of crude oil by electrification and hydrogen in the path to 2050.",
        "Analyzed EV impact, hydrogen solutions, and oil resilience constraints.",
        "Created an interactive tabbed report detailing transition timelines and scenarios."
      ],
      link: "/energy-divergence-report.html",
      linkText: "View 2026 Report"
    },
    {
      title: "Campaign ROI Tracking & Budget Optimization",
      subtitle: "Marketing Analytics",
      icon: <Presentation className="w-6 h-6" />,
      bullets: [
        "Tracked digital campaign ROI using Google Analytics and Excel dashboards.",
        "Reduced marketing spend by 15% while maintaining lead generation volume.",
        "See interactive Portfolio section below for a detailed case study."
      ],
      link: "#portfolio-case-study",
      linkText: "View Interactive Dashboard"
    },
    {
      title: "Burgernomics: Big Mac Index Explorer",
      subtitle: "Macroeconomics & Currency Analysis",
      icon: <Globe className="w-6 h-6" />,
      bullets: [
        "Applied Purchasing Power Parity (PPP) theory to map global currency over/undervaluation against the USD.",
        "Built an interactive choropleth map with a time-slider spanning 1986–2025, revealing structural currency shifts.",
        "Integrated sortable data table and historical trend charts enabling country-level deep-dives."
      ],
      link: "/big-mac-index.html",
      linkText: "View Interactive Dashboard"
    },
    {
      title: "E-Commerce Strategic Analytics Dashboard",
      subtitle: "Customer Behavior & Business Intelligence",
      icon: <Presentation className="w-6 h-6" />,
      bullets: [
        "Analysed transactional data to segment customers by CLV tiers, uncovering high-value retention opportunities.",
        "Built an interactive dashboard tracking revenue trajectory, cart abandonment, AOV, and repeat rate KPIs.",
        "Mapped category performance, device, age, and traffic source segments to inform strategic planning."
      ],
      link: "/ecommerce-dashboard.html",
      linkText: "View Interactive Dashboard"
    },
    {
      title: "Predictive Retail Revenue Forecast",
      subtitle: "Predictive Analytics",
      icon: <Lightbulb className="w-6 h-6" />,
      bullets: [
        "Developed a predictive model to forecast monthly revenue across product categories.",
        "Improved forecast accuracy by 18.1%, enhancing financial and marketing decisions.",
        "Interactive dashboard demonstrates baseline distribution and growth drivers."
      ],
      link: "/retail-dashboard.html",
      linkText: "View Interactive Dashboard"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-background/20 transition-colors flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-1 leading-tight">{project.title}</h3>
              <p className="text-accent text-sm font-medium mb-4">{project.subtitle}</p>
              <ul className="space-y-2 flex-grow mb-6">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target={project.link.startsWith('#') ? "_self" : "_blank"} 
                  rel={project.link.startsWith('#') ? "" : "noopener noreferrer"}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors py-2 px-4 rounded-lg bg-background/5 border border-primary-foreground/10 hover:bg-accent/20 w-fit"
                  onClick={(e) => {
                    if (project.link.startsWith('#')) {
                      e.preventDefault();
                      const element = document.querySelector(project.link);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  <FileText className="w-4 h-4" />
                  {project.linkText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}