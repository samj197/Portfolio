import { Award, Zap, ShieldCheck } from "lucide-react";

export default function WhyHireMe() {
  return (
    <section className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Consulting Edge</h2>
          <p className="text-primary-foreground/80 text-lg">
            Three reasons I deliver disproportionate value on strategy, business analysis, and growth engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Hypothesis-Driven Operator</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              I structure ambiguity into testable problems and translate analysis into measurable revenue lift — $2.8M quarterly P&L delivered, 40% revenue growth unlocked, 25–35% CAC reduction engineered.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cross-Border Strategic Range</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Equally fluent across UK go-to-market, East African FMCG distribution, and APAC B2B corridors. I bring the cultural fluency and commercial range that international advisory engagements demand.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Insight-to-Execution Bridge</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              I sit at the intersection of data, commercial strategy, and stakeholder leadership — building reusable analytical playbooks and delivering C-suite-ready recommendations under tight deadlines.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
