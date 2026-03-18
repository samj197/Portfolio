import { useState } from "react";
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, 
  Cell
} from "recharts";
import { ChevronRight, Target, Lightbulb, CheckCircle2, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Dummy data for realistic charts
const spendVsRoiData = [
  { month: "Jan", spend: 45000, roi: 210, leads: 1200 },
  { month: "Feb", spend: 42000, roi: 230, leads: 1350 },
  { month: "Mar", spend: 48000, roi: 245, leads: 1500 },
  { month: "Apr", spend: 38000, roi: 280, leads: 1450 }, // Optimization kicks in
  { month: "May", spend: 35000, roi: 310, leads: 1600 },
  { month: "Jun", spend: 36000, roi: 335, leads: 1750 },
];

const channelData = [
  { name: "LinkedIn B2B", conversionRate: 8.5, costPerLead: 45, volume: 450 },
  { name: "Trade Shows", conversionRate: 12.2, costPerLead: 120, volume: 200 },
  { name: "Email Cold Outbound", conversionRate: 3.1, costPerLead: 15, volume: 800 },
  { name: "Industry Portals", conversionRate: 5.4, costPerLead: 35, volume: 300 },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("overview");

  // Custom tooltip for charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border p-3 rounded-lg shadow-md text-sm">
          <p className="font-bold text-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-2 mb-1">
              <div 
                className="w-3 h-3 rounded-sm" 
                style={{ backgroundColor: entry.color || entry.fill }}
              />
              <span className="text-muted-foreground">{entry.name}:</span>
              <span className="font-semibold text-foreground">
                {entry.name === "Spend" || entry.name === "Cost per Lead" ? "$" : ""}
                {entry.value}
                {entry.name === "ROI" || entry.name === "Conversion Rate" ? "%" : ""}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
        <span className="w-8 h-1 bg-accent rounded-full"></span>
        Portfolio & Case Studies
      </h2>

      <div className="glass-card rounded-3xl overflow-hidden border border-border mt-8">
        {/* Case Study Header */}
        <div className="bg-primary p-8 lg:p-10 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 border border-accent/20">
              <BarChart3 className="w-4 h-4" />
              Marketing Analytics & Optimization
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Campaign ROI Tracking & Budget Optimization
            </h3>
            <p className="text-primary-foreground/80 text-lg max-w-3xl leading-relaxed">
              How data-driven budget reallocation reduced marketing spend by 15% while simultaneously increasing lead volume and quality in a B2B environment.
            </p>
          </div>
        </div>

        {/* Consulting Slide Content */}
        <div className="p-2 sm:p-6 lg:p-8">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-secondary/50">
              <TabsTrigger value="overview" className="py-3 text-sm sm:text-base data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
                Context & Strategy
              </TabsTrigger>
              <TabsTrigger value="performance" className="py-3 text-sm sm:text-base data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
                Financial Impact Dashboard
              </TabsTrigger>
              <TabsTrigger value="channels" className="py-3 text-sm sm:text-base data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
                Channel Analysis
              </TabsTrigger>
            </TabsList>

            {/* Slide 1: Context & Strategy */}
            <TabsContent value="overview" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-border shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 mt-1">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-foreground">Business Context</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          The client was experiencing diminishing returns on their digital marketing spend across multiple B2B channels. Lead volume was stagnating while cost-per-acquisition (CPA) was rising steadily over a 6-month period.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-1">
                        <Lightbulb className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-foreground">Strategic Approach</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Implemented end-to-end tracking using Google Analytics and built custom Excel/Power BI dashboards to map the complete buyer journey, identifying high-performing segments and eliminating wasted ad spend.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-secondary/30 rounded-2xl p-6 border border-border">
                <h4 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  Key Results & Impact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-background rounded-xl p-5 border border-border shadow-sm text-center">
                    <div className="text-3xl font-bold text-primary mb-1">-15%</div>
                    <div className="text-sm font-medium text-muted-foreground">Marketing Spend Reduction</div>
                  </div>
                  <div className="bg-background rounded-xl p-5 border border-border shadow-sm text-center">
                    <div className="text-3xl font-bold text-accent mb-1">+45%</div>
                    <div className="text-sm font-medium text-muted-foreground">Increase in ROI</div>
                  </div>
                  <div className="bg-background rounded-xl p-5 border border-border shadow-sm text-center">
                    <div className="text-3xl font-bold text-primary mb-1">+20%</div>
                    <div className="text-sm font-medium text-muted-foreground">Lead Generation Volume</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Slide 2: Financial Impact Dashboard */}
            <TabsContent value="performance" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Spend vs ROI Chart */}
                <Card className="border-border shadow-sm flex flex-col">
                  <div className="p-6 pb-2 border-b border-border/50">
                    <h4 className="text-lg font-bold text-foreground">Marketing Spend vs. ROI Trend</h4>
                    <p className="text-sm text-muted-foreground">April marked the implementation of the optimization strategy.</p>
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={spendVsRoiData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                          <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                          <YAxis yAxisId="left" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                          <YAxis yAxisId="right" orientation="right" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                          <Tooltip content={<CustomTooltip />} />
                          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                          <Bar yAxisId="left" dataKey="spend" name="Spend ($)" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} maxBarSize={40} />
                          <Line yAxisId="right" type="monotone" dataKey="roi" name="ROI (%)" stroke="hsl(var(--accent))" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Lead Generation Trend */}
                <Card className="border-border shadow-sm flex flex-col">
                  <div className="p-6 pb-2 border-b border-border/50">
                    <h4 className="text-lg font-bold text-foreground">Lead Generation Volume</h4>
                    <p className="text-sm text-muted-foreground">Consistent growth in leads despite budget reduction.</p>
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <div className="h-[300px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={spendVsRoiData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                          <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                          <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                          <Tooltip content={<CustomTooltip />} />
                          <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                          <Area type="monotone" dataKey="leads" name="Total Leads" stroke="hsl(var(--accent))" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </TabsContent>

            {/* Slide 3: Channel Analysis */}
            <TabsContent value="channels" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="border-border shadow-sm">
                <div className="p-6 pb-2 border-b border-border/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">Acquisition Channel Performance</h4>
                    <p className="text-sm text-muted-foreground">Conversion rates vs Cost per Lead across primary channels.</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg px-4 py-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">Reallocated budget to Trade Shows & LinkedIn</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={channelData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                        <XAxis type="number" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                        <YAxis type="category" dataKey="name" tick={{ fill: 'hsl(var(--foreground))', fontSize: 13, fontWeight: 500 }} axisLine={false} tickLine={false} width={150} />
                        <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsl(var(--secondary))', opacity: 0.4}} />
                        <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                        <Bar dataKey="conversionRate" name="Conversion Rate (%)" fill="hsl(var(--accent))" radius={[0, 4, 4, 0]} barSize={24} />
                        <Bar dataKey="costPerLead" name="Cost per Lead ($)" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={24} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </section>
  );
}