import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, TooltipProps } from "recharts";
import { CreditCard, TrendingUp, DollarSign } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";

const PLAN_PRICES = {
  basic: 199,
  pro: 499,
  premium: 999,
};

// Daily data with revenue calculations
const dailyData = [
  { date: "Mon", basic: 12, pro: 18, premium: 8, basicRevenue: 12 * 199, proRevenue: 18 * 499, premiumRevenue: 8 * 999 },
  { date: "Tue", basic: 15, pro: 22, premium: 11, basicRevenue: 15 * 199, proRevenue: 22 * 499, premiumRevenue: 11 * 999 },
  { date: "Wed", basic: 18, pro: 25, premium: 14, basicRevenue: 18 * 199, proRevenue: 25 * 499, premiumRevenue: 14 * 999 },
  { date: "Thu", basic: 14, pro: 20, premium: 10, basicRevenue: 14 * 199, proRevenue: 20 * 499, premiumRevenue: 10 * 999 },
  { date: "Fri", basic: 20, pro: 28, premium: 16, basicRevenue: 20 * 199, proRevenue: 28 * 499, premiumRevenue: 16 * 999 },
  { date: "Sat", basic: 16, pro: 24, premium: 12, basicRevenue: 16 * 199, proRevenue: 24 * 499, premiumRevenue: 12 * 999 },
  { date: "Sun", basic: 10, pro: 15, premium: 7, basicRevenue: 10 * 199, proRevenue: 15 * 499, premiumRevenue: 7 * 999 },
];

const monthlyData = [
  { month: "Jan", basic: 145, pro: 198, premium: 89, basicRevenue: 145 * 199, proRevenue: 198 * 499, premiumRevenue: 89 * 999 },
  { month: "Feb", basic: 168, pro: 215, premium: 102, basicRevenue: 168 * 199, proRevenue: 215 * 499, premiumRevenue: 102 * 999 },
  { month: "Mar", basic: 192, pro: 245, premium: 125, basicRevenue: 192 * 199, proRevenue: 245 * 499, premiumRevenue: 125 * 999 },
  { month: "Apr", basic: 178, pro: 232, premium: 118, basicRevenue: 178 * 199, proRevenue: 232 * 499, premiumRevenue: 118 * 999 },
  { month: "May", basic: 205, pro: 268, premium: 142, basicRevenue: 205 * 199, proRevenue: 268 * 499, premiumRevenue: 142 * 999 },
  { month: "Jun", basic: 225, pro: 290, premium: 156, basicRevenue: 225 * 199, proRevenue: 290 * 499, premiumRevenue: 156 * 999 },
];

const yearlyData = [
  { year: "2021", basic: 1245, pro: 1598, premium: 689, basicRevenue: 1245 * 199, proRevenue: 1598 * 499, premiumRevenue: 689 * 999 },
  { year: "2022", basic: 1668, pro: 2015, premium: 902, basicRevenue: 1668 * 199, proRevenue: 2015 * 499, premiumRevenue: 902 * 999 },
  { year: "2023", basic: 2092, pro: 2545, premium: 1125, basicRevenue: 2092 * 199, proRevenue: 2545 * 499, premiumRevenue: 1125 * 999 },
  { year: "2024", basic: 2478, pro: 3032, premium: 1418, basicRevenue: 2478 * 199, proRevenue: 3032 * 499, premiumRevenue: 1418 * 999 },
];

// Calculate total revenue
const calculateTotalRevenue = (data: any[]) => {
  return data.reduce((sum, item) => sum + item.basicRevenue + item.proRevenue + item.premiumRevenue, 0);
};

const dailyTotalRevenue = calculateTotalRevenue(dailyData);
const monthlyTotalRevenue = calculateTotalRevenue(monthlyData);
const yearlyTotalRevenue = calculateTotalRevenue(yearlyData);

// Custom tooltip to show revenue
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: ₹{entry.value?.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Subscriptions() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Subscription Analytics</h2>
            <p className="text-sm text-muted-foreground">
              Track subscription revenue across different time periods
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard
            title="Daily Revenue"
            value={`₹${dailyTotalRevenue.toLocaleString()}`}
            icon={<DollarSign className="h-6 w-6" />}
            trend="+15% from last week"
            trendUp={true}
          />
          <MetricCard
            title="Monthly Revenue"
            value={`₹${monthlyTotalRevenue.toLocaleString()}`}
            icon={<TrendingUp className="h-6 w-6" />}
            trend="+23% from last period"
            trendUp={true}
          />
          <MetricCard
            title="Yearly Revenue"
            value={`₹${yearlyTotalRevenue.toLocaleString()}`}
            icon={<CreditCard className="h-6 w-6" />}
            trend="+18% growth"
            trendUp={true}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="shadow-lg border-l-4 border-l-success">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">Basic Plan</p>
                <p className="text-3xl font-bold text-success">₹199</p>
                <p className="text-xs text-muted-foreground mt-1">256 subscribers</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-l-4 border-l-warning">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">Pro Plan</p>
                <p className="text-3xl font-bold text-warning">₹499</p>
                <p className="text-xs text-muted-foreground mt-1">398 subscribers</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-l-4 border-l-chart-4">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm font-medium text-muted-foreground">Premium Plan</p>
                <p className="text-3xl font-bold text-chart-4">₹999</p>
                <p className="text-xs text-muted-foreground mt-1">238 subscribers</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Subscription Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>

              <TabsContent value="daily" className="mt-6">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="date" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar
                      dataKey="basicRevenue"
                      name="Basic (₹199)"
                      fill="hsl(var(--chart-2))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="proRevenue"
                      name="Pro (₹499)"
                      fill="hsl(var(--chart-3))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="premiumRevenue"
                      name="Premium (₹999)"
                      fill="hsl(var(--chart-4))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>

              <TabsContent value="monthly" className="mt-6">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar
                      dataKey="basicRevenue"
                      name="Basic (₹199)"
                      fill="hsl(var(--chart-2))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="proRevenue"
                      name="Pro (₹499)"
                      fill="hsl(var(--chart-3))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="premiumRevenue"
                      name="Premium (₹999)"
                      fill="hsl(var(--chart-4))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>

              <TabsContent value="yearly" className="mt-6">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={yearlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="year" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar
                      dataKey="basicRevenue"
                      name="Basic (₹199)"
                      fill="hsl(var(--chart-2))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="proRevenue"
                      name="Pro (₹499)"
                      fill="hsl(var(--chart-3))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="premiumRevenue"
                      name="Premium (₹999)"
                      fill="hsl(var(--chart-4))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
