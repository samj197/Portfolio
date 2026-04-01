import { useState } from "react";
import CampaignROI from "../interactive/CampaignROI";
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart
} from "recharts";
import { Target, Lightbulb, CheckCircle2, TrendingUp, BarChart3, Briefcase, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- Marketing Analytics Data ---
const spendVsRoiData = [
  { month: "Jan", spend: 45000, roi: 210, leads: 1200 },
  { month: "Feb", spend: 42000, roi: 230, leads: 1350 },
  { month: "Mar", spend: 48000, roi: 245, leads: 1500 },
  { month: "Apr", spend: 38000, roi: 280, leads: 1450 },
  { month: "May", spend: 35000, roi: 310, leads: 1600 },
  { month: "Jun", spend: 36000, roi: 335, leads: 1750 },
];

const channelData = [
  { name: "LinkedIn B2B", conversionRate: 8.5, costPerLead: 45, volume: 450 },
  { name: "Trade Shows", conversionRate: 12.2, costPerLead: 120, volume: 200 },
  { name: "Email Cold Outbound", conversionRate: 3.1, costPerLead: 15, volume: 800 },
  { name: "Industry Portals", conversionRate: 5.4, costPerLead: 35, volume: 300 },
];

// --- Mount Meru Sales Data ---
const mmQuarterlyData = [
  { quarter: "Q1", revenue: 1.8, target: 1.6 },
  { quarter: "Q2", revenue: 2.1, target: 1.9 },
  { quarter: "Q3", revenue: 2.4, target: 2.2 },
  { quarter: "Q4", revenue: 2.8, target: 2.5 },
];

const mmTerritoryData = [
  { month: "Jul", north: 250, south: 320, east: 180 },
  { month: "Aug", north: 280, south: 340, east: 210 },
  { month: "Sep", north: 310, south: 380, east: 240 },
  { month: "Oct", north: 360, south: 410, east: 280 },
  { month: "Nov", north: 420, south: 450, east: 320 },
  { month: "Dec", north: 480, south: 490, east: 380 },
];

const mmProductData = [
  { month: "Jul", core: 1800, newProduct: 40 },
  { month: "Aug", core: 1850, newProduct: 90 },
  { month: "Sep", core: 1900, newProduct: 140 },
  { month: "Oct", core: 1950, newProduct: 190 },
  { month: "Nov", core: 2100, newProduct: 230 },
  { month: "Dec", core: 2200, newProduct: 250 },
];

const mmChannelData = [
  { name: "Wholesale Dist.", volume: 1200, growth: 15 },
  { name: "Modern Trade", volume: 850, growth: 22 },
  { name: "Direct Retail", volume: 450, growth: 18 },
  { name: "Institutional (B2B)", volume: 300, growth: 40 },
];

export default function Portfolio() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTabMarketing, setActiveTabMarketing] = useState("overview");
  const [activeTabSales, setActiveTabSales] = useState("overview");

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border p-3 rounded-lg shadow-md text-sm z-50 relative">
          <p className="font-bold text-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-2 mb-1">
              <div 
                className="w-3 h-3 rounded-sm" 
                style={{ backgroundColor: entry.color || entry.fill }}
              />
              <span className="text-muted-foreground">{entry.name}:</span>
              <span className="font-semibold text-foreground">
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="space-y-12" id="portfolio-case-study">
      <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
        <span className="w-8 h-1 bg-accent rounded-full"></span>
        Portfolio & Case Studies
      </h2>

      <div className="space-y-16">
        {/* Case Study 1: Mount Meru Millers */}
        <div className="glass-card rounded-3xl overflow-hidden border border-border">
          {/* Case Study Header */}
          <div className="bg-red-950 p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-semibold mb-6 border border-red-500/30">
                <Globe className="w-4 h-4" />
                FMCG Sales Leadership & Market Expansion
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
                Mount Meru Millers: Revenue & Distribution Growth
              </h3>
              <p className="text-red-100/80 text-lg max-w-3xl leading-relaxed">
                Driving high-volume FMCG sales growth through strategic territory expansion, new product launches, and securing high-value B2B institutional contracts.
              </p>
            </div>
          </div>

          {/* Consulting Slide Content */}
          <div className="p-2 sm:p-6 lg:p-8">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTabSales}>
              <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-secondary/50">
                <TabsTrigger value="overview" className="py-3 text-sm sm:text-base data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
                  Business Context
                </TabsTrigger>
                <TabsTrigger value="performance" className="py-3 text-sm sm:text-base data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
                  Revenue Dashboard
                </TabsTrigger>
                <TabsTrigger value="channels" className="py-3 text-sm sm:text-base data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg">
                  Product & Channels
                </TabsTrigger>
              </TabsList>

              {/* Slide 1: Context & Strategy */}
              <TabsContent value="overview" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-border shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-1">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-3 text-foreground">Objective</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Scale overall business revenue across regions while successfully launching a new edible oil product line and securing long-term institutional volume contracts.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 shrink-0 mt-1">
                          <Target className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-3 text-foreground">Sales Strategy</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Optimized distributor networks across territories, deployed targeted B2B pitches for key accounts, and executed a synchronized go-to-market plan for the new product launch.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-red-500/5 rounded-2xl p-6 border border-red-500/10">
                  <h4 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                    Results & FMCG Impact
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-background rounded-xl p-5 border border-border shadow-sm text-center">
                      <div className="text-3xl font-bold text-red-600 mb-1">$2.8M</div>
                      <div className="text-sm font-medium text-muted-foreground">Quarterly Revenue Achieved</div>
                    </div>
                    <div className="bg-background rounded-xl p-5 border border-border shadow-sm text-center">
                      <div className="text-3xl font-bold text-yellow-600 mb-1">40%</div>
                      <div className="text-sm font-medium text-muted-foreground">MoM Growth (Key Contract)</div>
                    </div>
                    <div className="bg-background rounded-xl p-5 border border-border shadow-sm text-center">
                      <div className="text-3xl font-bold text-red-600 mb-1">$250K</div>
                      <div className="text-sm font-medium text-muted-foreground">New Product Monthly Run-rate</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Slide 2: Financial Impact Dashboard */}
              <TabsContent value="performance" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Quarterly Revenue Chart */}
                  <Card className="border-border shadow-sm flex flex-col">
                    <div className="p-6 pb-2 border-b border-border/50">
                      <h4 className="text-lg font-bold text-foreground">Quarterly Revenue Trend</h4>
                      <p className="text-sm text-muted-foreground">Consistent growth hitting $2.8M by Q4.</p>
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <ComposedChart data={mmQuarterlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                            <XAxis dataKey="quarter" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                            <Bar dataKey="revenue" name="Revenue ($M)" fill="#ef4444" radius={[4, 4, 0, 0]} maxBarSize={50} />
                            <Line type="monotone" dataKey="target" name="Target ($M)" stroke="#eab308" strokeWidth={3} dot={{ r: 4 }} />
                          </ComposedChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Territory Sales Growth */}
                  <Card className="border-border shadow-sm flex flex-col">
                    <div className="p-6 pb-2 border-b border-border/50">
                      <h4 className="text-lg font-bold text-foreground">Territory Sales Growth</h4>
                      <p className="text-sm text-muted-foreground">Expansion across North, South, and East regions.</p>
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={mmTerritoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                            <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                            <Area type="monotone" dataKey="south" name="South ($K)" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                            <Area type="monotone" dataKey="north" name="North ($K)" stackId="1" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
                            <Area type="monotone" dataKey="east" name="East ($K)" stackId="1" stroke="#eab308" fill="#eab308" fillOpacity={0.6} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Slide 3: Channel Analysis */}
              <TabsContent value="channels" className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Product Launch Contribution */}
                  <Card className="border-border shadow-sm flex flex-col">
                    <div className="p-6 pb-2 border-b border-border/50">
                      <h4 className="text-lg font-bold text-foreground">Product Portfolio Revenue</h4>
                      <p className="text-sm text-muted-foreground">New edible oil launch reaching $250K/mo.</p>
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={mmProductData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                            <XAxis dataKey="month" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <Tooltip content={<CustomTooltip />} />
                            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                            <Bar dataKey="core" name="Core Products ($K)" stackId="a" fill="#b91c1c" radius={[0, 0, 0, 0]} />
                            <Bar dataKey="newProduct" name="New Edible Oil ($K)" stackId="a" fill="#eab308" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Distributor Performance */}
                  <Card className="border-border shadow-sm flex flex-col">
                    <div className="p-6 pb-2 border-b border-border/50">
                      <h4 className="text-lg font-bold text-foreground">Channel Performance</h4>
                      <p className="text-sm text-muted-foreground">Volume and growth by distribution channel.</p>
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <ComposedChart data={mmChannelData} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(var(--border))" />
                            <XAxis type="number" xAxisId="bottom" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <XAxis type="number" xAxisId="top" orientation="top" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} axisLine={false} tickLine={false} />
                            <YAxis type="category" dataKey="name" tick={{ fill: 'hsl(var(--foreground))', fontSize: 12, fontWeight: 500 }} axisLine={false} tickLine={false} width={130} />
                            <Tooltip content={<CustomTooltip />} cursor={{fill: 'hsl(var(--secondary))', opacity: 0.4}} />
                            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                            <Bar xAxisId="bottom" dataKey="volume" name="Volume ($K)" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
                            <Line xAxisId="top" type="monotone" dataKey="growth" name="Growth (%)" stroke="#eab308" strokeWidth={3} dot={{ r: 4 }} />
                          </ComposedChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Case Study 2: Marketing Analytics & Optimization */}
        <div className="glass-card rounded-3xl overflow-hidden border border-border">
          <CampaignROI />
        </div>
      </div>
    </section>
  );
}
