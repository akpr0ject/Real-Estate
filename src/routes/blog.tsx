import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const posts = [
  { t: "What the new RERA amendments mean for buyers in 2026", c: "Policy", read: 6, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=70" },
  { t: "The quiet renaissance of Mumbai's mill-land neighbourhoods", c: "Markets", read: 8, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=70" },
  { t: "How top agents are using AI to triage 10× more leads", c: "Workflow", read: 5, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70" },
  { t: "Bengaluru rental yields just hit a 9-year high", c: "Data", read: 4, img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=70" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Estate" },
      { name: "description", content: "Analysis, market reports and operator playbooks from the Estate editorial team." },
      { property: "og:title", content: "Insights — Estate" },
    ],
  }),
  component: () => (
    <div>
      <SiteHeader />
      <div className="container-page py-10">
        <div className="text-xs uppercase tracking-widest text-ember">Insights</div>
        <h1 className="mt-2 font-display text-4xl font-semibold">Real estate, intelligently written</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p, i) => (
            <article key={i} className="overflow-hidden rounded-2xl border border-border bg-card transition hover:border-ember/40">
              <img src={p.img} alt="" className="aspect-[16/9] w-full object-cover" />
              <div className="p-6">
                <div className="text-[11px] uppercase tracking-widest text-ember">{p.c} · {p.read} min read</div>
                <h2 className="mt-2 font-display text-2xl font-semibold leading-snug">{p.t}</h2>
              </div>
            </article>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  ),
});
