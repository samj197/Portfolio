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
          <p className="text-muted-foreground font-medium">Quarterly Revenue Engineered</p>
        </div>
        
        <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <BarChart className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-foreground">40–65%</h3>
          <p className="text-muted-foreground font-medium">Sales Uplift via Cross-Border GTM</p>
        </div>

        <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-foreground">25–35%</h3>
          <p className="text-muted-foreground font-medium">Customer Acquisition Cost Reduction</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
          <span className="w-8 h-1 bg-accent rounded-full"></span>
          Executive Summary
        </h2>
        <div className="prose prose-lg prose-slate max-w-none text-muted-foreground">
          <p className="leading-relaxed">
            Hypothesis-driven business strategist with 3+ years structuring ambiguous problems, synthesising data into actionable insight, and translating analysis into measurable commercial outcomes. Track record spans cross-border go-to-market execution, B2B revenue acceleration, and digital performance optimisation — having engineered $2.8M in quarterly revenue, secured a $100K international contract, and reduced customer acquisition cost by 25–35% through data-led campaign design.
          </p>
          <p className="leading-relaxed">
            Equally comfortable in executive presentations and the analytics weeds, I combine quantitative rigour with stakeholder-first communication and structured problem-solving. Currently seeking Strategy Consulting, Business Analyst, or Data Analyst roles across the UK, Ireland, and UAE.
          </p>
        </div>
      </div>
    </section>
  );
}
