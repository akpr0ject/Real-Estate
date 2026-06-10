import { Helmet } from "react-helmet-async";
import { Building2, BadgeCheck } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { builders } from "@/lib/mock-data";

export default function BuildersPage() {
  return (
    <>
      <Helmet>
        <title>Verified Builders — Estate</title>
        <meta name="description" content="Discover RERA-verified developers and builders shaping India's residential and commercial skyline." />
      </Helmet>
      <SiteHeader />
      <div className="container-page py-12">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-ember">Trust</div>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">Builders we partner with</h1>
          <p className="mt-3 text-sm text-muted-foreground">RERA-verified, on-time-delivering, and design-forward — the developers shaping how India lives next.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {builders.map((b) => (
            <article key={b.id} className="rounded-3xl border border-border bg-card p-6 transition hover:border-ember/40 hover:shadow-elegant">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-2xl bg-muted">
                  <Building2 className="size-5 text-ember" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">{b.name}</div>
                  <div className="text-[11px] text-muted-foreground">{b.city} · Est. {b.est}</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <Mini label="Projects" value={String(b.projects)} />
                <Mini label="Cities" value={String(Math.max(1, b.projects - 3))} />
                <Mini label="Rating" value={`${(4 + (b.id.length % 9) / 10).toFixed(1)}★`} />
              </div>
              <div className="mt-5 inline-flex items-center gap-1 rounded-full bg-muted/60 px-3 py-1.5 text-xs">
                <BadgeCheck className="size-3.5 text-ember" /> RERA verified
              </div>
            </article>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-muted/50 py-3">
      <div className="font-display text-base font-semibold">{value}</div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}
