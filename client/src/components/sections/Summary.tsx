import { TrendingUp, Globe, Target } from "lucide-react";

export default function Summary() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-foreground">$2.8M</h3>
          <p className="text-muted-foreground font-medium">Quarterly FMCG Revenue</p>
        </div>
        
        <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-foreground">40%</h3>
          <p className="text-muted-foreground font-medium">Revenue Growth Achieved</p>
        </div>

        <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-3xl font-bold text-foreground">$100K</h3>
          <p className="text-muted-foreground font-medium">International Deal Closed</p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
          <span className="w-8 h-1 bg-accent rounded-full"></span>
          Professional Summary
        </h2>
        <div className="prose prose-lg prose-slate max-w-none text-muted-foreground">
          <p className="leading-relaxed">
            Results-driven Area Sales Manager with extensive experience in the FMCG sector. Proven ability to scale distribution networks, launch new products successfully, and penetrate international markets. Expert in managing large territories, optimizing sales operations, and leading high-performing teams to exceed revenue targets.
          </p>
          <p className="leading-relaxed">
            Demonstrated success in bridging domestic suppliers with international buyers, notably assisting Indian exporters in establishing robust trade connections in the UK market. Adept at strategic planning, B2B relationship management, and executing data-driven sales strategies that directly impact the bottom line.
          </p>
        </div>
      </div>
    </section>
  );
}
