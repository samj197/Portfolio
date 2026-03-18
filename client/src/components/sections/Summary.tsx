import { TrendingUp, BarChart, Target } from "lucide-react";

export default function Summary() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-foreground">$2.8M</h3>
          <p className="text-muted-foreground font-medium">Q4 Sales Revenue Achieved</p>
        </div>
        
        <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <BarChart className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-foreground">18%</h3>
          <p className="text-muted-foreground font-medium">Forecast Accuracy Improvement</p>
        </div>

        <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-foreground">12%</h3>
          <p className="text-muted-foreground font-medium">Increase in Client Retention</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
          <span className="w-8 h-1 bg-accent rounded-full"></span>
          Professional Summary
        </h2>
        <div className="prose prose-lg prose-slate max-w-none text-muted-foreground">
          <p className="leading-relaxed">
            Results-driven Business Development and Marketing professional with over 3 years of experience in business intelligence, client acquisition, market research, and sales operations. Proven expertise in using data analytics, CRM systems, and digital marketing tools to drive strategic growth, improve performance metrics, and increase multimillion-dollar revenue.
          </p>
          <p className="leading-relaxed">
            Adept at working cross-functionally, optimizing processes, and delivering data-backed insights for decision-making. Seeking opportunities in Data Analysis, Business Analysis, Business Development, or Marketing across the UK, Ireland, or UAE.
          </p>
        </div>
      </div>
    </section>
  );
}
