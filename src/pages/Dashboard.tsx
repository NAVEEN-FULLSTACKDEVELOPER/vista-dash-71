import { DashboardLayout } from "@/components/DashboardLayout";
import { MetricCard } from "@/components/MetricCard";
import { Users, Activity, Link2, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const activeUsersData = [
  { time: "00:00", users: 45 },
  { time: "04:00", users: 23 },
  { time: "08:00", users: 89 },
  { time: "12:00", users: 156 },
  { time: "16:00", users: 178 },
  { time: "20:00", users: 134 },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Users"
            value="2,847"
            icon={<Users className="h-6 w-6" />}
            trend="+12.5% from last month"
            trendUp
          />
          <MetricCard
            title="Active Users"
            value="1,234"
            icon={<Activity className="h-6 w-6" />}
            trend="+8.2% from yesterday"
            trendUp
          />
          <MetricCard
            title="Active Links"
            value="486"
            icon={<Link2 className="h-6 w-6" />}
            trend="+23 new today"
            trendUp
          />
          <MetricCard
            title="Subscriptions"
            value="892"
            icon={<CreditCard className="h-6 w-6" />}
            trend="+45 this week"
            trendUp
          />
        </div>

        {/* Active Users Chart */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Active Users (Last 24 Hours)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activeUsersData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="time" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar
                  dataKey="users"
                  fill="hsl(var(--chart-1))"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
