import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Users, Briefcase, Building2, ShieldCheck, IndianRupee, Megaphone, FileText, BarChart3, Settings } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";
import { StatCard } from "@/components/dashboard/StatCard";
import { agents, builders, revenueSeries, formatINR } from "@/lib/mock-data";

const nav: NavItem[] = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/agents", label: "Agents", icon: Briefcase, badge: "12" },
  { to: "/admin/distributors", label: "Distributors", icon: Building2 },
  { to: "/admin/builders", label: "Builders", icon: Building2 },
  { to: "/admin/moderation", label: "Moderation", icon: ShieldCheck, badge: "5" },
  { to: "/admin/subscriptions", label: "Subscriptions", icon: IndianRupee },
  { to: "/admin/ads", label: "Advertising", icon: Megaphone },
  { to: "/admin/content", label: "Content", icon: FileText },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Super Admin — Estate" }] }),
  component: AdminWorkspace,
});

function AdminWorkspace() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const sub = pathname.replace("/admin", "").replace(/^\//, "");
  return (
    <DashboardShell role="Super Admin" user={{ name: "Estate Ops", email: "ops@estate.in", avatar: "https://i.pravatar.cc/100?img=8" }} nav={nav}>
      {sub === "" && <Overview />}
      {sub === "moderation" && <Moderation />}
      {sub === "agents" && <AgentApproval />}
      {sub !== "" && sub !== "moderation" && sub !== "agents" && <Placeholder name={sub} />}
    </DashboardShell>
  );
}

function Overview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold">Platform overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">Across all roles, listings and territories.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Total users" value="248,940" delta={11} icon={Users} />
        <StatCard label="Active listings" value="1.24M" delta={6} icon={Building2} />
        <StatCard label="Revenue (YTD)" value={formatINR(380000000)} delta={22} icon={IndianRupee} />
        <StatCard label="Pending approvals" value="17" delta={-12} icon={ShieldCheck} />
      </div>
      <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant">
        <div className="font-display text-base font-semibold">Platform revenue</div>
        <div className="mt-4 h-72">
          <ResponsiveContainer>
            <AreaChart data={revenueSeries}>
              <defs>
                <linearGradient id="a1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--ember)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--ember)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
              <Area dataKey="revenue" stroke="var(--ember)" strokeWidth={2} fill="url(#a1)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="font-display text-base font-semibold">Top builders by GMV</div>
          <div className="mt-4 space-y-3">
            {builders.map((b, i) => (
              <div key={b.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0">
                <div>
                  <div className="text-sm font-medium">{b.name}</div>
                  <div className="text-[11px] text-muted-foreground">{b.city} · {b.projects} projects</div>
                </div>
                <div className="text-sm font-medium">{formatINR((6 - i) * 32000000)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="font-display text-base font-semibold">Top agents</div>
          <div className="mt-4 space-y-3">
            {agents.map((a) => (
              <div key={a.id} className="flex items-center gap-3 border-b border-border pb-3 last:border-0">
                <img src={a.avatar} alt="" className="size-9 rounded-full" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{a.name}</div>
                  <div className="text-[11px] text-muted-foreground">{a.city} · {a.deals} deals</div>
                </div>
                <div className="text-sm text-ember">{a.rating} ★</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Moderation() {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl font-semibold">Property moderation queue</h2>
      <div className="rounded-2xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/30 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
            <tr>
              <th className="p-4">Listing</th>
              <th className="p-4">Submitted by</th>
              <th className="p-4">Flagged for</th>
              <th className="p-4">Submitted</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["3BHK Garden Apartment", "Vikram Anand", "Photos low-res"],
              ["Cliffside Villa", "Karan Shetty", "Awaiting RERA"],
              ["High-Street Shop", "Aakash Banerjee", "Price outlier"],
              ["Skyline Penthouse", "Anika Mehra", "Duplicate"],
              ["Editorial Loft", "Riya Kapoor", "Owner unverified"],
            ].map(([title, by, flag], i) => (
              <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/20">
                <td className="p-4 font-medium">{title}</td>
                <td className="p-4">{by}</td>
                <td className="p-4 text-muted-foreground">{flag}</td>
                <td className="p-4 text-[11px] text-muted-foreground">{i + 1}h ago</td>
                <td className="p-4 text-right">
                  <button className="mr-2 rounded-lg border border-border px-3 py-1.5 text-xs">Reject</button>
                  <button className="rounded-lg ember-gradient px-3 py-1.5 text-xs text-primary-foreground">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AgentApproval() {
  return (
    <div className="space-y-6">
      <h2 className="font-display text-2xl font-semibold">Agent applications</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {agents.map((a) => (
          <div key={a.id} className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <img src={a.avatar} className="size-12 rounded-full" alt="" />
              <div>
                <div className="font-display text-base font-semibold">{a.name}</div>
                <div className="text-[11px] text-muted-foreground">{a.city} · {a.specialty}</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-lg bg-muted/40 p-2"><div className="text-[10px] uppercase tracking-widest text-muted-foreground">Since</div>{a.since}</div>
              <div className="rounded-lg bg-muted/40 p-2"><div className="text-[10px] uppercase tracking-widest text-muted-foreground">Deals</div>{a.deals}</div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 rounded-lg border border-border py-2 text-xs">Decline</button>
              <button className="flex-1 rounded-lg ember-gradient py-2 text-xs text-primary-foreground">Approve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Placeholder({ name }: { name: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-12 text-center">
      <h2 className="font-display text-2xl font-semibold capitalize">{name.replaceAll("-", " ")}</h2>
      <p className="mt-2 text-sm text-muted-foreground">Full module ships next. The structure and design system is wired up.</p>
    </div>
  );
}
