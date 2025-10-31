import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Calendar, CreditCard, Activity } from "lucide-react";

const userDetails = {
  1: {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    status: "active",
    plan: "Premium",
    joinDate: "2024-01-15",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    totalVisits: 456,
    lastActive: "2 hours ago",
    subscriptionAmount: "₹999",
  },
};

export default function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = id ? userDetails[Number(id) as keyof typeof userDetails] : undefined;

  if (!user) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">User not found</p>
          <Button onClick={() => navigate("/users")} className="mt-4">
            Back to Users
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={() => navigate("/users")}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Users
        </Button>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-1 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 border-4 border-primary/20">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-2xl">
                    {user.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-2xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">{user.email}</p>
                <Badge
                  className="mt-3"
                  variant={user.status === "active" ? "default" : "secondary"}
                >
                  {user.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 shadow-lg">
            <CardHeader>
              <CardTitle>User Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <p className="font-semibold">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Join Date</p>
                    <p className="font-semibold">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Subscription Plan
                    </p>
                    <p className="font-semibold">{user.plan} - {user.subscriptionAmount}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Last Active</p>
                    <p className="font-semibold">{user.lastActive}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3">Activity Stats</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-primary/5 p-4">
                    <p className="text-sm text-muted-foreground">Total Visits</p>
                    <p className="text-2xl font-bold text-primary">{user.totalVisits}</p>
                  </div>
                  <div className="rounded-lg bg-success/5 p-4">
                    <p className="text-sm text-muted-foreground">Active Sessions</p>
                    <p className="text-2xl font-bold text-success">23</p>
                  </div>
                  <div className="rounded-lg bg-warning/5 p-4">
                    <p className="text-sm text-muted-foreground">Avg. Duration</p>
                    <p className="text-2xl font-bold text-warning">8m 42s</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
