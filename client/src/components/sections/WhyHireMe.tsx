import { Award, Zap, ShieldCheck } from "lucide-react";

export default function WhyHireMe() {
  return (
    <section className="bg-primary text-primary-foreground rounded-3xl p-8 lg:p-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative z-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why Hire Me?</h2>
          <p className="text-primary-foreground/80 text-lg">
            I don't just maintain sales—I build scalable revenue engines and open new markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Revenue Generator</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Consistently outperforming targets with a track record of driving 40% growth and managing $2.8M quarterly portfolios. I focus on high-ROI activities that immediately impact the bottom line.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Dual Market Expertise</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Unique ability to command domestic FMCG distribution channels while also possessing the strategic acumen to execute international B2B deals, specifically bridging Indian exporters to the UK.
            </p>
          </div>

          <div className="bg-background/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-background/20 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Strategic Leadership</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              I don't just sell; I build teams. By upskilling 15+ frontline executives to achieve a 25% productivity boost, I create self-sustaining sales ecosystems that thrive long-term.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
