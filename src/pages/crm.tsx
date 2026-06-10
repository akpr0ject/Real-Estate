import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LayoutDashboard, Users, GitBranch, Calendar, MessageSquare, FileText, BarChart3, Settings } from "lucide-react";
import { DashboardShell, type NavItem } from "@/components/dashboard/DashboardShell";
import { StatCard } from "@/components/dashboard/StatCard";
import { leads, stages, formatINR } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { useState } from "react";

const nav: NavItem[] = [
  { to: "/crm", label: "Overview", icon: LayoutDashboard },
  { to: "/crm/leads", label: "Leads", icon: Users, badge: String(leads.length) },
  { to: "/crm/pipeline", label: "Pipeline", icon: GitBranch },
  { to: "/crm/tasks", label: "Tasks", icon: Calendar },
  { to: "/crm/messages", label: "Messages", icon: MessageSquare },
  { to: "/crm/notes", label: "Notes", icon: FileText },
  { to: "/crm/reports", label: "Reports", icon: BarChart3 },
  { to: "/crm/settings", label: "Settings", icon: Settings },
];

function CRMWorkspace() {
  const pathname = useLocation().pathname;
  const sub = pathname.replace("/crm", "").replace(/^\//, "");
  return (
    <DashboardShell role="CRM" user={{ name: "Anika Mehra", email: "anika@estate.in", avatar: "https://i.pravatar.cc/100?img=47" }} nav={nav}>
      <Helmet>
      <title>CRM — Estate</title>
    </Helmet>
      
      {sub === "" && <CRMOverview />}
      {sub === "pipeline" && <Pipeline />}
      {sub !== "" && sub !== "pipeline" && <Placeholder name={sub} />}
    </DashboardShell>
  );
}

function CRMOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold">CRM</h1>
        <p className="mt-1 text-sm text-muted-foreground">All your leads, conversations and tasks in one place.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Open leads" value={String(leads.filter((l) => l.stage !== "Closed").length)} delta={9} icon={Users} />
        <StatCard label="Pipeline" value={formatINR(leads.reduce((s, l) => s + l.budget, 0))} delta={14} icon={GitBranch} />
        <StatCard label="Tasks due" value="9" delta={-6} icon={Calendar} />
        <StatCard label="Win rate" value="27%" delta={3} icon={BarChart3} />
      </div>
      <Pipeline compact />
    </div>
  );
}

function Pipeline({ compact = false }: { compact?: boolean }) {
  const [items] = useState(leads);
  return (
    <div>
      {!compact && (
        <div className="mb-4">
          <h2 className="font-display text-2xl font-semibold">Sales pipeline</h2>
          <p className="text-sm text-muted-foreground">7 stages from new lead to booking.</p>
        </div>
      )}
      <div className="grid gap-3 overflow-x-auto" style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(220px, 1fr))` }}>
        {stages.map((stage) => {
          const col = items.filter((l) => l.stage === stage);
          const total = col.reduce((s, l) => s + l.budget, 0);
          return (
            <div key={stage} className="rounded-2xl border border-border bg-card/60 p-3">
              <div className="flex items-center justify-between px-1 pb-2">
                <div className="text-xs font-medium">{stage} <span className="text-muted-foreground">· {col.length}</span></div>
                <div className="text-[10px] text-muted-foreground">{formatINR(total)}</div>
              </div>
              <div className="space-y-2">
                {col.map((l) => (
                  <motion.div key={l.id} layout className="rounded-xl border border-border bg-background p-3 text-sm hover:border-ember/40">
                    <div className="font-medium">{l.name}</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">{l.property}</div>
                    <div className="mt-2 text-[11px] text-ember">{formatINR(l.budget)}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Placeholder({ name }: { name: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-12 text-center">
      <h2 className="font-display text-2xl font-semibold capitalize">{name.replaceAll("-", " ")}</h2>
      <p className="mt-2 text-sm text-muted-foreground">Module shipping in the next iteration.</p>
    </div>
  );
}


export default CRMWorkspace;
