import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const posts = [
  { t: "What the new RERA amendments mean for buyers in 2026", c: "Policy", read: 6, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=70" },
  { t: "The quiet renaissance of Mumbai's mill-land neighbourhoods", c: "Markets", read: 8, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=70" },
  { t: "How top agents are using AI to triage 10× more leads", c: "Workflow", read: 5, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70" },
  { t: "Bengaluru rental yields just hit a 9-year high", c: "Data", read: 4, img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=70" },
];

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Insights & Stories — Estate</title>
        <meta name="description" content="Sharp, considered writing on India's real estate market — policy, design and behaviour." />
      </Helmet>
      <SiteHeader />
      <div className="container-page py-12">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-ember">Editorial</div>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">Insights, stories, signals</h1>
          <p className="mt-3 text-sm text-muted-foreground">Sharp, considered writing on India's real estate market — for buyers, agents and developers.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {posts.map((p, i) => (
            <article key={i} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:border-ember/40">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.t} className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                  <span className="text-ember">{p.c}</span> · {p.read} min read
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold leading-snug">{p.t}</h2>
                <p className="mt-3 text-sm text-muted-foreground">A considered look at how this is reshaping decisions on the ground — written by our editorial team and reviewed by domain experts.</p>
                <div className="mt-5 inline-flex text-xs text-ember">Read story →</div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
