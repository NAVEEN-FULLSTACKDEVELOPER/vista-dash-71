import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, ExternalLink, TrendingUp } from "lucide-react";

const links = [
  {
    id: 1,
    title: "Portfolio Homepage",
    url: "portfolio.example.com",
    clicks: 1245,
    status: "active",
    lastActive: "2 min ago",
  },
  {
    id: 2,
    title: "Projects Gallery",
    url: "portfolio.example.com/projects",
    clicks: 892,
    status: "active",
    lastActive: "5 min ago",
  },
  {
    id: 3,
    title: "About Page",
    url: "portfolio.example.com/about",
    clicks: 567,
    status: "active",
    lastActive: "12 min ago",
  },
  {
    id: 4,
    title: "Contact Form",
    url: "portfolio.example.com/contact",
    clicks: 423,
    status: "active",
    lastActive: "18 min ago",
  },
  {
    id: 5,
    title: "Blog Posts",
    url: "portfolio.example.com/blog",
    clicks: 356,
    status: "active",
    lastActive: "25 min ago",
  },
];

export default function ActiveLinks() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-3">
            <Link2 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Active Links</h2>
            <p className="text-sm text-muted-foreground">
              Monitor all active portfolio links and their performance
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Clicks</p>
                  <p className="text-2xl font-bold">3,483</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-success/10 p-2">
                  <Link2 className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Links</p>
                  <p className="text-2xl font-bold">{links.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-warning/10 p-2">
                  <ExternalLink className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Click Rate</p>
                  <p className="text-2xl font-bold">696.6</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Link Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {links.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center justify-between rounded-lg border p-4 transition-all hover:shadow-md hover:border-primary/50"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Link2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{link.title}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <ExternalLink className="h-3 w-3" />
                        {link.url}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{link.clicks}</p>
                      <p className="text-xs text-muted-foreground">clicks</p>
                    </div>
                    <div className="text-right w-24">
                      <Badge variant="default" className="bg-success hover:bg-success/80">
                        {link.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {link.lastActive}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
