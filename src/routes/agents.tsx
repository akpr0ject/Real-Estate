import { createFileRoute } from "@tanstack/react-router";
import { Star, MapPin, Phone, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { agents } from "@/lib/mock-data";

export const Route = createFileRoute("/agents")({
  head: () => ({
    meta: [
      { title: "Agent Directory — Estate" },
      { name: "description", content: "Find verified, top-performing real estate agents across India." },
      { property: "og:title", content: "Agent Directory — Estate" },
    ],
  }),
  component: AgentsPage,
});

function AgentsPage() {
  return (
    <div>
      <SiteHeader />
      <div className="container-page py-10">
        <div className="text-xs uppercase tracking-widest text-ember">Network</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Top agents, vetted by us</h1>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Every agent on Estate is verified, rated and held to a service SLA. Browse by specialty
          and city.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agents.concat(agents).map((a, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-5 transition hover:border-ember/40">
              <div className="flex items-center gap-4">
                <img src={a.avatar} alt={a.name} className="size-14 rounded-full object-cover" />
                <div className="min-w-0">
                  <div className="truncate font-display text-base font-semibold">{a.name}</div>
                  <div className="text-xs text-muted-foreground">{a.specialty}</div>
                  <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-ember">
                    <Star className="size-3 fill-ember" /> {a.rating} · {a.deals} deals
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="size-3" /> {a.city}</span>
                <span>Since {a.since}</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="inline-flex items-center justify-center gap-1 rounded-lg border border-border py-2 text-xs">
                  <Phone className="size-3.5 text-ember" /> Call
                </button>
                <button className="inline-flex items-center justify-center gap-1 rounded-lg ember-gradient py-2 text-xs text-primary-foreground">
                  <MessageCircle className="size-3.5" /> Message
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
