import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-page grid gap-10 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg ember-gradient shadow-ember">
              <span className="font-display text-sm font-bold text-primary-foreground">E</span>
            </div>
            <div className="font-display text-lg font-semibold">
              Estate<span className="text-ember">.</span>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A modern marketplace for buyers, owners and agents. Built for the way Indian real estate
            actually works — with the polish of a global product.
          </p>
        </div>
        <Col title="Discover" links={[["Buy", "/buy"], ["Rent", "/rent"], ["Commercial", "/commercial"], ["New Projects", "/projects"]]} />
        <Col title="Network" links={[["Agents", "/agents"], ["Builders", "/builders"], ["Blog", "/blog"], ["Contact", "/contact"]]} />
        <Col title="Workspace" links={[["End User", "/dashboard"], ["Agent", "/agent"], ["CRM", "/crm"], ["Admin", "/admin"]]} />
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Estate. Designed in Mumbai. All rights reserved.
      </div>
    </footer>
  );
}

function Col({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="font-display text-sm font-semibold">{title}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(([label, to]) => (
          <li key={to}>
            <Link to={to} className="text-muted-foreground hover:text-foreground">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
