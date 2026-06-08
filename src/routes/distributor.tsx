import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Users, Map, IndianRupee, Building2, BarChart3, MessageSquare, Settings } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";
import { StatCard } from "@/components/dashboard/StatCard";
import { agents, revenueSeries, formatINR } from "@/lib/mock-data";

const nav: NavItem[] = [
  { to: "/distributor", label: "Overview", icon: LayoutDashboard },
  { to: "/distributor/agents", label: "Agents", icon: Users, badge: "48" },
  { to: "/distributor/territories", label: "Territories", icon: Map },
  { to: "/distributor/leads", label: "Lead distribution", icon: Users },
  { to: "/distributor/commission", label: "Commission", icon: IndianRupee },
  { to: "/distributor/builders", label: "Builders", icon: Building2 },
  { to: "/distributor/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/distributor/chat", label: "Team chat", icon: MessageSquare },
  { to: "/distributor/settings", label: "Settings", icon: Settings },
];

export const Route = createFileRoute("/distributor")({
  head: () => ({ meta: [{ title: "Distributor Workspace — Estate" }] }),
  component: DistributorWorkspace,
});

function DistributorWorkspace() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const sub = pathname.replace("/distributor", "").replace(/^\//, "");
  return (
    <DashboardShell role="Distributor" user={{ name: "Karan Shetty", email: "karan@coastrealty.in", avatar: "https://i.pravatar.cc/100?img=12" }} nav={nav}>
      {sub === "" && <Overview />}
      {sub === "agents" && <AgentsTable />}
      {sub !== "" && sub !== "agents" && <Placeholder name={sub} />}
    </DashboardShell>
  );
}

function Overview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold">Network overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">48 agents across 6 territories. 12% MoM growth in closures.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Agents" value="48" delta={6} icon={Users} />
        <StatCard label="Territories" value="6" icon={Map} />
        <StatCard label="Pipeline value" value={formatINR(840000000)} delta={18} icon={IndianRupee} />
        <StatCard label="Commission (YTD)" value={formatINR(48200000)} delta={22} icon={IndianRupee} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ChartCard title="Network revenue">
          <ResponsiveContainer>
            <AreaChart data={revenueSeries}>
              <defs>
                <linearGradient id="d1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--ember)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--ember)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
              <Area dataKey="revenue" stroke="var(--ember)" strokeWidth={2} fill="url(#d1)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Leads distributed">
          <ResponsiveContainer>
            <BarChart data={revenueSeries}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="leads" fill="var(--ember-soft)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <AgentsTable />
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant">
      <div className="font-display text-base font-semibold">{title}</div>
      <div className="mt-4 h-64">{children}</div>
    </div>
  );
}

function AgentsTable() {
  return (
    <div className="rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-5">
        <div className="font-display text-base font-semibold">Agent performance</div>
        <button className="rounded-lg ember-gradient px-3 py-1.5 text-xs text-primary-foreground">+ Invite agent</button>
      </div>
      <table className="w-full text-sm">
        <thead className="border-b border-border bg-muted/30 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
          <tr>
            <th className="p-4">Agent</th>
            <th className="p-4">Territory</th>
            <th className="p-4">Deals (90d)</th>
            <th className="p-4">Revenue</th>
            <th className="p-4">Rating</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((a) => (
            <tr key={a.id} className="border-b border-border last:border-0 hover:bg-muted/20">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <img src={a.avatar} alt="" className="size-9 rounded-full" />
                  <div>
                    <div className="font-medium">{a.name}</div>
                    <div className="text-[11px] text-muted-foreground">{a.specialty}</div>
                  </div>
                </div>
              </td>
              <td className="p-4">{a.city}</td>
              <td className="p-4">{a.deals}</td>
              <td className="p-4 font-medium">{formatINR(a.deals * 380000)}</td>
              <td className="p-4">{a.rating} ★</td>
              <td className="p-4"><span className="rounded-full bg-ember/10 px-2 py-1 text-[11px] text-ember">Active</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Placeholder({ name }: { name: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-12 text-center">
      <h2 className="font-display text-2xl font-semibold capitalize">{name.replaceAll("-", " ")}</h2>
      <p className="mt-2 text-sm text-muted-foreground">This module is part of the polished v1 — full UI ships in the next release.</p>
    </div>
  );
}
