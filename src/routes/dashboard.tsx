import { createFileRoute, Link } from "@tanstack/react-router";
import { LayoutDashboard, Heart, GitCompareArrows, MessageSquare, Calendar, Bell, Settings, FileSearch, Star } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid } from "recharts";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";
import { StatCard } from "@/components/dashboard/StatCard";
import { PropertyCard } from "@/components/property/PropertyCard";
import { properties, formatINR, revenueSeries } from "@/lib/mock-data";

const nav: NavItem[] = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/saved", label: "Saved", icon: Heart, badge: "12" },
  { to: "/dashboard/compare", label: "Compare", icon: GitCompareArrows },
  { to: "/dashboard/inquiries", label: "Inquiries", icon: FileSearch, badge: "3" },
  { to: "/dashboard/visits", label: "Visits", icon: Calendar },
  { to: "/dashboard/chats", label: "Chats", icon: MessageSquare },
  { to: "/dashboard/alerts", label: "Alerts", icon: Bell },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Your dashboard — Estate" }] }),
  component: UserDashboard,
});

function UserDashboard() {
  return (
    <DashboardShell
      role="End User"
      user={{ name: "Aarav Sharma", email: "aarav@example.com", avatar: "https://i.pravatar.cc/100?img=15" }}
      nav={nav}
    >
      <div className="space-y-8">
        <div>
          <h1 className="font-display text-3xl font-semibold">Welcome back, Aarav.</h1>
          <p className="mt-1 text-sm text-muted-foreground">3 new matches for your saved searches this week.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <StatCard label="Saved properties" value="12" delta={9} icon={Heart} />
          <StatCard label="Comparisons" value="3" delta={50} icon={GitCompareArrows} hint="Last compared 2h ago" />
          <StatCard label="Inquiries sent" value="7" delta={-12} icon={FileSearch} />
          <StatCard label="Avg. budget" value={formatINR(28000000)} delta={4} icon={Star} />
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Search activity</div>
                <div className="mt-1 font-display text-lg font-semibold">Match score over 12 months</div>
              </div>
              <div className="text-xs text-muted-foreground">12 mo</div>
            </div>
            <div className="mt-4 h-64">
              <ResponsiveContainer>
                <AreaChart data={revenueSeries}>
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--ember)" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="var(--ember)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12 }} />
                  <Area dataKey="leads" stroke="var(--ember)" strokeWidth={2} fill="url(#grad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Upcoming visits</div>
            <div className="mt-4 space-y-3">
              {[
                { t: "Skyline Penthouse", d: "Sat 11:00", a: "Anika Mehra" },
                { t: "Editorial Loft", d: "Sun 16:30", a: "Riya Kapoor" },
                { t: "Garden Apartment", d: "Mon 18:00", a: "Vikram Anand" },
              ].map((v, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-border p-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-muted">
                    <Calendar className="size-4 text-ember" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium">{v.t}</div>
                    <div className="text-[11px] text-muted-foreground">with {v.a} · {v.d}</div>
                  </div>
                  <Link to="/dashboard/visits" className="text-[11px] text-ember">Details</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-end justify-between">
            <div className="font-display text-lg font-semibold">Recommended for you</div>
            <Link to="/buy" className="text-xs text-muted-foreground hover:text-foreground">Browse all →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.slice(0, 6).map((p, i) => <PropertyCard key={p.id} p={p} index={i} />)}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
