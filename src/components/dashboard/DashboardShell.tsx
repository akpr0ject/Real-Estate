import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";
import { Bell, Search, Plus, type LucideIcon } from "lucide-react";

export type NavItem = { to: string; label: string; icon: LucideIcon; badge?: string };

export function DashboardShell({
  role,
  user,
  nav,
  children,
}: {
  role: string;
  user: { name: string; email: string; avatar?: string };
  nav: NavItem[];
  children: ReactNode;
}) {
  const pathname = useLocation().pathname;

  return (
    <div className="min-h-screen">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-border bg-sidebar lg:block">
          <div className="sticky top-0 flex h-screen flex-col">
            <Link to="/" className="flex items-center gap-2 px-6 py-5">
              <div className="grid h-8 w-8 place-items-center rounded-lg ember-gradient shadow-ember">
                <span className="font-display text-sm font-bold text-primary-foreground">E</span>
              </div>
              <div>
                <div className="font-display text-sm font-semibold">Estate</div>
                <div className="-mt-0.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {role}
                </div>
              </div>
            </Link>
            <div className="px-3">
              <div className="flex items-center gap-2 rounded-lg bg-muted/60 px-3 py-2 text-xs text-muted-foreground">
                <Search className="size-3.5" /> Quick search
                <span className="ml-auto rounded border border-border px-1.5 py-0.5 text-[10px]">⌘K</span>
              </div>
            </div>
            <nav className="mt-4 flex-1 space-y-0.5 px-3">
              {nav.map((n) => {
                const active =
                  pathname === n.to || (n.to !== "/" && pathname.startsWith(n.to));
                const Icon = n.icon;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                      active
                        ? "bg-sidebar-accent text-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground"
                    }`}
                  >
                    <Icon className={`size-4 ${active ? "text-ember" : ""}`} />
                    <span>{n.label}</span>
                    {n.badge && (
                      <span className="ml-auto rounded-full bg-ember/15 px-1.5 py-0.5 text-[10px] font-medium text-ember">
                        {n.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="m-3 rounded-xl border border-border bg-card p-3">
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar ?? "https://i.pravatar.cc/100?img=8"}
                  alt={user.name}
                  className="size-9 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{user.name}</div>
                  <div className="truncate text-[11px] text-muted-foreground">{user.email}</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="min-w-0">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border glass px-4 md:px-8">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{role}</div>
              <div className="font-display text-base font-semibold">
                {currentTitle(pathname, nav)}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="grid size-9 place-items-center rounded-lg border border-border hover:bg-muted">
                <Bell className="size-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg ember-gradient px-3 py-2 text-sm text-primary-foreground shadow-ember hover:opacity-95">
                <Plus className="size-4" /> New
              </button>
            </div>
          </header>
          <div className="px-4 py-6 md:px-8 md:py-10">{children}</div>
        </main>
      </div>
    </div>
  );
}

function currentTitle(pathname: string, nav: NavItem[]) {
  const match = [...nav]
    .sort((a, b) => b.to.length - a.to.length)
    .find((n) => pathname === n.to || pathname.startsWith(n.to + "/"));
  return match?.label ?? "Overview";
}
