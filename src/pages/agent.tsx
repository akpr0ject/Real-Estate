import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LayoutDashboard, Building2, Users, Calendar, BarChart3, MessageSquare, IndianRupee, Settings, Search, ArrowUpRight, ArrowDownRight, MoreHorizontal, Phone, Mail, ChevronRight } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend } from "recharts";
import { useState } from "react";
import { motion } from "framer-motion";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";
import { StatCard } from "@/components/dashboard/StatCard";
import { leads, stages, properties, revenueSeries, sourceMix, recentActivity, formatINR, type Lead } from "@/lib/mock-data";

const nav: NavItem[] = [
  { to: "/agent", label: "Overview", icon: LayoutDashboard },
  { to: "/agent/properties", label: "Properties", icon: Building2, badge: "24" },
  { to: "/agent/leads", label: "Leads", icon: Users, badge: "7" },
  { to: "/agent/pipeline", label: "Pipeline", icon: BarChart3 },
  { to: "/agent/clients", label: "Clients", icon: MessageSquare },
  { to: "/agent/appointments", label: "Appointments", icon: Calendar },
  { to: "/agent/revenue", label: "Revenue", icon: IndianRupee },
  { to: "/agent/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/agent/settings", label: "Settings", icon: Settings },
];

const user = { name: "Anika Mehra", email: "anika@estate.in", avatar: "https://i.pravatar.cc/100?img=47" };

function AgentWorkspace() {
  const pathname = useLocation().pathname;
  const sub = pathname.replace("/agent", "").replace(/^\//, "");

  return (
    <DashboardShell role="Agent" user={user} nav={nav}>
      <Helmet>
      <title>Agent Workspace — Estate</title>
    </Helmet>
      
      {sub === "" && <AgentOverview />}
      {sub === "properties" && <AgentProperties />}
      {sub === "leads" && <AgentLeads />}
      {sub === "pipeline" && <AgentPipeline />}
      {sub === "clients" && <ClientsView />}
      {sub === "appointments" && <AppointmentsView />}
      {sub === "revenue" && <RevenueView />}
      {sub === "analytics" && <AnalyticsView />}
      {sub === "settings" && <SettingsView />}
    </DashboardShell>
  );
}

function AgentOverview() {
  const colors = ["var(--ember)", "var(--ember-soft)", "var(--chart-3)", "var(--chart-4)", "var(--chart-5)"];
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold">Good morning, Anika.</h1>
          <p className="mt-1 text-sm text-muted-foreground">You closed 2 deals last week. 7 leads need a follow-up today.</p>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs">
            <Search className="size-3.5" /> Search across CRM <span className="ml-2 rounded border border-border px-1.5 py-0.5 text-[10px]">⌘K</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Active listings" value="24" delta={8} icon={Building2} />
        <StatCard label="Open leads" value="48" delta={14} icon={Users} hint="12 hot · 24 warm · 12 cold" />
        <StatCard label="Site visits this week" value="11" delta={-5} icon={Calendar} />
        <StatCard label="Revenue (90d)" value={formatINR(4280000)} delta={22} icon={IndianRupee} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-elegant">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Performance</div>
              <div className="mt-1 font-display text-lg font-semibold">Revenue & leads</div>
            </div>
            <div className="flex gap-1 text-[11px]">
              {["12M", "6M", "3M", "30D"].map((t, i) => (
                <button key={t} className={`rounded-md px-2 py-1 ${i === 0 ? "bg-muted" : "text-muted-foreground hover:bg-muted"}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="mt-4 h-72">
            <ResponsiveContainer>
              <AreaChart data={revenueSeries}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--ember)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--ember)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-3)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--chart-3)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
                <Area dataKey="revenue" stroke="var(--ember)" strokeWidth={2} fill="url(#g1)" />
                <Area dataKey="leads" stroke="var(--chart-3)" strokeWidth={2} fill="url(#g2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Lead source mix</div>
          <div className="mt-4 h-56">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={sourceMix} dataKey="value" innerRadius={45} outerRadius={75} paddingAngle={3}>
                  {sourceMix.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}
                </Pie>
                <Legend iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <LeadTable compact />
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Recent activity</div>
          <div className="mt-4 space-y-3">
            {recentActivity.map((a) => (
              <div key={a.id} className="flex items-start gap-3 border-b border-border pb-3 last:border-0">
                <div className="mt-1 size-2 rounded-full bg-ember" />
                <div className="flex-1">
                  <div className="text-sm">{a.text}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{a.time} ago</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentProperties() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Total listings" value="24" icon={Building2} delta={4} />
        <StatCard label="Avg. days to close" value="38" icon={Calendar} delta={-12} />
        <StatCard label="Avg. price" value={formatINR(38500000)} icon={IndianRupee} delta={6} />
        <StatCard label="Inquiries / listing" value="14.2" icon={Users} delta={9} />
      </div>
      <div className="rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border p-5">
          <div className="font-display text-base font-semibold">Listing performance</div>
          <button className="text-xs text-ember">Manage all</button>
        </div>
        <table className="w-full text-sm">
          <thead className="border-b border-border bg-muted/30 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
            <tr>
              <th className="p-4">Property</th>
              <th className="p-4">Price</th>
              <th className="p-4">Views</th>
              <th className="p-4">Inquiries</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">CTR</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((p) => (
              <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/20">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={p.image} className="size-12 rounded-lg object-cover" alt="" />
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <div className="text-[11px] text-muted-foreground">{p.locality}, {p.city}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 font-medium">{formatINR(p.price)}</td>
                <td className="p-4">{p.views.toLocaleString("en-IN")}</td>
                <td className="p-4">{Math.round(p.views / 80)}</td>
                <td className="p-4"><span className="rounded-full bg-ember/10 px-2 py-1 text-[11px] text-ember">Active</span></td>
                <td className="p-4 text-right">
                  <span className="inline-flex items-center gap-1 text-ember">
                    <ArrowUpRight className="size-3" /> {((p.rating / 5) * 4.8).toFixed(1)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AgentLeads() {
  return <LeadTable compact={false} />;
}

function LeadTable({ compact }: { compact: boolean }) {
  const rows = compact ? leads.slice(0, 5) : leads;
  return (
    <div className="rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border p-5">
        <div>
          <div className="font-display text-base font-semibold">Active leads</div>
          <div className="text-xs text-muted-foreground">Scored and assigned automatically</div>
        </div>
        {!compact && (
          <div className="flex items-center gap-2">
            <input placeholder="Search leads…" className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs outline-none focus:border-ember/60" />
            <button className="rounded-lg ember-gradient px-3 py-1.5 text-xs text-primary-foreground">+ New lead</button>
          </div>
        )}
      </div>
      <table className="w-full text-sm">
        <thead className="border-b border-border bg-muted/30 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
          <tr>
            <th className="p-4">Lead</th>
            <th className="p-4">Property</th>
            <th className="p-4">Budget</th>
            <th className="p-4">Source</th>
            <th className="p-4">Stage</th>
            <th className="p-4">Score</th>
            <th className="p-4">Updated</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((l) => (
            <tr key={l.id} className="border-b border-border last:border-0 hover:bg-muted/20">
              <td className="p-4">
                <div className="font-medium">{l.name}</div>
                <div className="text-[11px] text-muted-foreground">{l.email}</div>
              </td>
              <td className="p-4">{l.property}</td>
              <td className="p-4">{formatINR(l.budget)}</td>
              <td className="p-4 text-muted-foreground">{l.source}</td>
              <td className="p-4"><StageBadge stage={l.stage} /></td>
              <td className="p-4">
                <ScoreBar score={l.score} />
              </td>
              <td className="p-4 text-[11px] text-muted-foreground">{l.updatedAt}</td>
              <td className="p-4 text-right">
                <div className="inline-flex items-center gap-1">
                  <button className="grid size-7 place-items-center rounded-md border border-border hover:bg-muted"><Phone className="size-3.5 text-ember" /></button>
                  <button className="grid size-7 place-items-center rounded-md border border-border hover:bg-muted"><Mail className="size-3.5" /></button>
                  <button className="grid size-7 place-items-center rounded-md border border-border hover:bg-muted"><MoreHorizontal className="size-3.5" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
        <div className="h-full ember-gradient" style={{ width: `${score}%` }} />
      </div>
      <span className="text-[11px] tabular-nums">{score}</span>
    </div>
  );
}

function StageBadge({ stage }: { stage: Lead["stage"] }) {
  const map: Record<Lead["stage"], string> = {
    New: "bg-muted text-muted-foreground",
    Contacted: "bg-blue-500/15 text-blue-400",
    Interested: "bg-yellow-500/15 text-yellow-400",
    "Site Visit": "bg-purple-500/15 text-purple-400",
    Negotiation: "bg-orange-500/15 text-orange-400",
    Booking: "bg-ember/15 text-ember",
    Closed: "bg-green-500/15 text-green-400",
  };
  return <span className={`rounded-full px-2 py-1 text-[11px] ${map[stage]}`}>{stage}</span>;
}

function AgentPipeline() {
  const [items, setItems] = useState(leads);
  return (
    <div>
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold">Sales pipeline</h2>
          <p className="text-sm text-muted-foreground">Drag (demo) leads through the funnel.</p>
        </div>
        <div className="text-xs text-muted-foreground">
          Total pipeline value <span className="ml-1 font-display text-base text-foreground">{formatINR(items.reduce((s, l) => s + l.budget, 0))}</span>
        </div>
      </div>
      <div className="grid gap-3 overflow-x-auto" style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(240px, 1fr))` }}>
        {stages.map((stage) => {
          const col = items.filter((l) => l.stage === stage);
          return (
            <div key={stage} className="rounded-2xl border border-border bg-card/60 p-3">
              <div className="flex items-center justify-between px-1 pb-2">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <span className="size-2 rounded-full bg-ember" />
                  {stage}
                  <span className="text-muted-foreground">· {col.length}</span>
                </div>
                <button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="size-3.5" /></button>
              </div>
              <div className="space-y-2">
                {col.map((l) => (
                  <motion.div
                    key={l.id}
                    layout
                    className="cursor-grab rounded-xl border border-border bg-background p-3 text-sm hover:border-ember/40"
                  >
                    <div className="font-medium">{l.name}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{l.property}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-[11px] text-ember">{formatINR(l.budget)}</span>
                      <ScoreBar score={l.score} />
                    </div>
                  </motion.div>
                ))}
                {col.length === 0 && (
                  <div className="grid h-20 place-items-center rounded-xl border border-dashed border-border text-[11px] text-muted-foreground">
                    Drop here
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-[11px] text-muted-foreground">Pipeline order is a static demo. {setItems.length}</p>
    </div>
  );
}

function ClientsView() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {leads.map((l) => (
        <div key={l.id} className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-full ember-gradient text-primary-foreground font-display font-semibold">
              {l.name.split(" ").map((p) => p[0]).join("")}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate font-display text-base font-semibold">{l.name}</div>
              <div className="truncate text-[11px] text-muted-foreground">{l.city} · {l.source}</div>
            </div>
            <button className="text-muted-foreground"><ChevronRight className="size-4" /></button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <Field label="Budget" value={formatINR(l.budget)} />
            <Field label="Stage" value={l.stage} />
            <Field label="Score" value={`${l.score}/100`} />
            <Field label="Updated" value={l.updatedAt} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-muted/40 p-2">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-0.5 font-medium">{value}</div>
    </div>
  );
}

function AppointmentsView() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Visits this week" value="11" icon={Calendar} delta={5} />
        <StatCard label="Confirmations" value="9" icon={Users} delta={-3} />
        <StatCard label="No-shows" value="1" icon={ArrowDownRight} delta={-50} />
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="font-display text-base font-semibold">This week</div>
        <div className="mt-4 grid grid-cols-7 gap-2">
          {days.map((d, i) => (
            <div key={d} className="rounded-xl border border-border bg-background p-3">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{d}</div>
              <div className="mt-1 font-display text-lg font-semibold">{i + 10}</div>
              {i % 2 === 0 && (
                <div className="mt-2 rounded-lg bg-ember/10 p-2 text-[11px] text-ember">
                  11:00 · Penthouse
                </div>
              )}
              {i === 3 && (
                <div className="mt-2 rounded-lg bg-muted/60 p-2 text-[11px]">15:30 · Loft</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RevenueView() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Gross commission" value={formatINR(8420000)} delta={18} icon={IndianRupee} />
        <StatCard label="Net payout" value={formatINR(6310000)} delta={14} icon={IndianRupee} />
        <StatCard label="Avg. deal size" value={formatINR(38500000)} delta={6} icon={Building2} />
        <StatCard label="Win rate" value="27%" delta={3} icon={BarChart3} />
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="font-display text-base font-semibold">Monthly bookings</div>
        <div className="mt-4 h-64">
          <ResponsiveContainer>
            <BarChart data={revenueSeries}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="revenue" fill="var(--ember)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function AnalyticsView() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Profile views" value="12,480" delta={11} icon={Users} />
        <StatCard label="Listing impressions" value="184K" delta={9} icon={Building2} />
        <StatCard label="Inquiry → visit" value="34%" delta={4} icon={BarChart3} />
        <StatCard label="Visit → booking" value="27%" delta={6} icon={BarChart3} />
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="font-display text-base font-semibold">Funnel</div>
        <div className="mt-6 space-y-3">
          {[
            ["Impressions", 100, "184,200"],
            ["Profile views", 64, "117,888"],
            ["Inquiries", 22, "40,524"],
            ["Site visits", 7, "12,894"],
            ["Bookings", 2, "3,684"],
          ].map(([label, pct, val], i) => (
            <div key={i}>
              <div className="mb-1 flex justify-between text-xs">
                <span>{label as string}</span>
                <span className="text-muted-foreground tabular-nums">{val as string} · {pct as number}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <div className="h-full ember-gradient" style={{ width: `${pct as number}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <h2 className="font-display text-2xl font-semibold">Workspace settings</h2>
      <p className="mt-2 text-sm text-muted-foreground">Notification, billing and team preferences — coming soon in this preview.</p>
    </div>
  );
}


export default AgentWorkspace;
