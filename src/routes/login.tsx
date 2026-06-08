import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, User, Briefcase, Shield } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";

const roles = [
  { id: "user", label: "End User", icon: User, desc: "Buy, rent and track properties.", to: "/dashboard" },
  { id: "agent", label: "Agent", icon: Briefcase, desc: "List, manage leads and close deals.", to: "/agent" },
  { id: "distributor", label: "Distributor", icon: Building2, desc: "Manage agents and territories.", to: "/distributor" },
  { id: "admin", label: "Super Admin", icon: Shield, desc: "Operate the entire platform.", to: "/admin" },
] as const;

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Estate" }, { name: "description", content: "Sign in to your Estate workspace." }] }),
  component: LoginPage,
});

function LoginPage() {
  const [role, setRole] = useState<(typeof roles)[number]>(roles[0]);

  return (
    <div>
      <SiteHeader />
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1fr_460px]">
        <div>
          <div className="text-xs uppercase tracking-widest text-ember">Welcome back</div>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            One sign in.<br /> Four workspaces.
          </h1>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Pick a role to preview the experience tailored for it. This is a demo — no credentials
            required.
          </p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {roles.map((r) => {
              const active = role.id === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setRole(r)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    active ? "border-ember/60 bg-card shadow-ember" : "border-border bg-card/50 hover:border-ember/40"
                  }`}
                >
                  <div className="grid size-10 place-items-center rounded-xl bg-muted">
                    <r.icon className="size-4 text-ember" />
                  </div>
                  <div className="mt-3 font-display text-base font-semibold">{r.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.desc}</div>
                </button>
              );
            })}
          </div>
        </div>
        <form className="rounded-3xl border border-border bg-card p-6 shadow-elegant">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Signing in as</div>
          <div className="mt-1 font-display text-2xl font-semibold">{role.label}</div>
          <div className="mt-6 grid gap-4">
            <Field label="Email" placeholder="you@estate.in" />
            <Field label="Password" placeholder="••••••••" type="password" />
            <Link
              to={role.to}
              className="rounded-xl ember-gradient py-3 text-center text-sm font-medium text-primary-foreground shadow-ember"
            >
              Enter workspace
            </Link>
            <div className="text-center text-xs text-muted-foreground">
              Forgot password? <span className="text-ember">Reset it</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <div className="mb-2 text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-ember/60" />
    </div>
  );
}
