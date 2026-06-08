import { createFileRoute } from "@tanstack/react-router";
import { Building2, BadgeCheck } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { builders } from "@/lib/mock-data";

export const Route = createFileRoute("/builders")({
  head: () => ({
    meta: [
      { title: "Builders Directory — Estate" },
      { name: "description", content: "Explore India's leading real estate developers." },
      { property: "og:title", content: "Builders Directory — Estate" },
    ],
  }),
  component: () => (
    <div>
      <SiteHeader />
      <div className="container-page py-10">
        <div className="text-xs uppercase tracking-widest text-ember">Developers</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">India's most considered builders</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {builders.concat(builders).map((b, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-xl bg-muted"><Building2 className="size-5 text-ember" /></div>
                <div>
                  <div className="font-display text-lg font-semibold">{b.name}</div>
                  <div className="text-xs text-muted-foreground">{b.city} · Est. {b.est}</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <Mini label="Projects" value={String(b.projects)} />
                <Mini label="Rating" value={String(b.rating)} />
                <Mini label="Status" value="Verified" />
              </div>
              <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-ember/10 px-2 py-1 text-[11px] text-ember">
                <BadgeCheck className="size-3" /> RERA registered
              </div>
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  ),
});

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-muted/50 py-3">
      <div className="font-display text-base font-semibold">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}
