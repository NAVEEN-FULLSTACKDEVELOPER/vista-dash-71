import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { CreditCard } from "lucide-react";

const dailyData = [
  { date: "Mon", basic: 12, pro: 18, premium: 8 },
  { date: "Tue", basic: 15, pro: 22, premium: 11 },
  { date: "Wed", basic: 18, pro: 25, premium: 14 },
  { date: "Thu", basic: 14, pro: 20, premium: 10 },
  { date: "Fri", basic: 20, pro: 28, premium: 16 },
  { date: "Sat", basic: 16, pro: 24, premium: 12 },
  { date: "Sun", basic: 10, pro: 15, premium: 7 },
];

const monthlyData = [
  { month: "Jan", basic: 145, pro: 198, premium: 89 },
  { month: "Feb", basic: 168, pro: 215, premium: 102 },
  { month: "Mar", basic: 192, pro: 245, premium: 125 },
  { month: "Apr", basic: 178, pro: 232, premium: 118 },
  { month: "May", basic: 205, pro: 268, premium: 142 },
  { month: "Jun", basic: 225, pro: 290, premium: 156 },
];

const yearlyData = [
  { year: "2021", basic: 1245, pro: 1598, premium: 689 },
  { year: "2022", basic: 1668, pro: 2015, premium: 902 },
  { year: "2023", basic: 2092, pro: 2545, premium: 1125 },
  { year: "2024", basic: 2478, pro: 3032, premium: 1418 },
];

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
              Track subscription plans across different time periods
            </p>
          </div>
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
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="basic"
                      name="Basic (₹199)"
                      fill="hsl(var(--chart-2))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="pro"
                      name="Pro (₹499)"
                      fill="hsl(var(--chart-3))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="premium"
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
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="basic"
                      name="Basic (₹199)"
                      fill="hsl(var(--chart-2))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="pro"
                      name="Pro (₹499)"
                      fill="hsl(var(--chart-3))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="premium"
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
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="basic"
                      name="Basic (₹199)"
                      fill="hsl(var(--chart-2))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="pro"
                      name="Pro (₹499)"
                      fill="hsl(var(--chart-3))"
                      radius={[8, 8, 0, 0]}
                      animationDuration={1000}
                    />
                    <Bar
                      dataKey="premium"
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
