import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, Bell, Heart, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/buy", label: "Buy" },
  { to: "/rent", label: "Rent" },
  { to: "/commercial", label: "Commercial" },
  { to: "/projects", label: "New Projects" },
  { to: "/agents", label: "Agents" },
  { to: "/builders", label: "Builders" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg ember-gradient shadow-ember">
            <span className="font-display text-sm font-bold text-primary-foreground">E</span>
          </div>
          <div className="font-display text-lg font-semibold tracking-tight">
            Estate<span className="text-ember">.</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => {
            const active = pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative rounded-full px-3.5 py-2 text-sm transition ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-px ember-gradient" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Heart className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Bell className="size-4" />
          </Button>
          <Link to="/login">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              <User className="size-4" /> Sign in
            </Button>
          </Link>
          <Link to="/login">
            <Button size="sm" className="ember-gradient text-primary-foreground shadow-ember hover:opacity-95">
              List property
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu className="size-5" />
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="container-page flex flex-col py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
