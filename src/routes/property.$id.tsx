import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BadgeCheck, BedDouble, Calendar, Calculator, Heart, MapPin, Maximize2, MessageCircle, Phone, Play, Share2, ShieldCheck, Star } from "lucide-react";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { properties, formatINR } from "@/lib/mock-data";

export const Route = createFileRoute("/property/$id")({
  loader: ({ params }) => {
    const p = properties.find((x) => x.id === params.id);
    if (!p) throw notFound();
    return { property: p };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.property.title ?? "Property"} — Estate` },
      { name: "description", content: loaderData?.property.description ?? "" },
      { property: "og:title", content: loaderData?.property.title ?? "Property" },
      { property: "og:description", content: loaderData?.property.description ?? "" },
      { property: "og:image", content: loaderData?.property.image ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center text-center">
      <div>
        <div className="font-display text-4xl">Property not found</div>
        <Link to="/buy" className="mt-4 inline-block text-ember">Back to search →</Link>
      </div>
    </div>
  ),
  errorComponent: () => <div className="p-10">Couldn't load this property.</div>,
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property: p } = Route.useLoaderData();
  const [emi, setEmi] = useState(8.5);
  const [years, setYears] = useState(20);
  const principal = p.price * 0.8;
  const r = emi / 100 / 12;
  const n = years * 12;
  const monthly = principal && r ? (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : 0;

  return (
    <div>
      <SiteHeader />
      <div className="container-page py-8">
        <Link to="/buy" className="text-sm text-muted-foreground hover:text-foreground">← Back to results</Link>

        {/* Gallery */}
        <div className="mt-4 grid gap-3 md:grid-cols-[2fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <img src={p.image} alt={p.title} className="aspect-[16/10] w-full object-cover" />
            <button className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
              <Play className="size-3.5 fill-ember text-ember" /> Virtual tour
            </button>
          </div>
          <div className="grid grid-rows-2 gap-3">
            {(p.gallery ?? [p.image, p.image]).slice(0, 2).map((g, i) => (
              <img key={i} src={g} alt="" className="h-full w-full rounded-2xl border border-border object-cover" />
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="flex items-center gap-2 text-xs">
              {p.verified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-ember/15 px-2 py-1 text-ember">
                  <BadgeCheck className="size-3" /> RERA verified
                </span>
              )}
              <span className="rounded-full border border-border px-2 py-1 text-muted-foreground">{p.listing}</span>
              <span className="rounded-full border border-border px-2 py-1 text-muted-foreground">{p.type}</span>
            </div>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">{p.title}</h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" /> {p.locality}, {p.city}</span>
              <span className="inline-flex items-center gap-1"><Star className="size-3.5 fill-ember text-ember" /> {p.rating}</span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-5">
              {p.bhk && <Stat label="Bedrooms" value={`${p.bhk} BHK`} icon={BedDouble} />}
              <Stat label="Built-up" value={`${p.area.toLocaleString("en-IN")} sqft`} icon={Maximize2} />
              <Stat label="Posted" value={`${p.postedDays} d ago`} icon={Calendar} />
            </div>

            <Section title="About this property">
              <p className="text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </Section>

            <Section title="Amenities">
              <div className="flex flex-wrap gap-2">
                {p.amenities.map((a) => (
                  <span key={a} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs">{a}</span>
                ))}
              </div>
            </Section>

            <Section title="EMI calculator">
              <div className="grid gap-4 rounded-2xl border border-border bg-card p-5 md:grid-cols-3">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Loan amount</div>
                  <div className="mt-1 font-display text-2xl">{formatINR(principal)}</div>
                  <div className="text-[11px] text-muted-foreground">80% of property value</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Interest %</div>
                  <input type="range" min={6} max={12} step={0.1} value={emi} onChange={(e) => setEmi(+e.target.value)} className="mt-3 w-full accent-[var(--ember)]" />
                  <div className="mt-1 text-sm">{emi.toFixed(1)}% p.a.</div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Tenure</div>
                  <input type="range" min={5} max={30} step={1} value={years} onChange={(e) => setYears(+e.target.value)} className="mt-3 w-full accent-[var(--ember)]" />
                  <div className="mt-1 text-sm">{years} years</div>
                </div>
                <div className="md:col-span-3 mt-2 flex items-center justify-between rounded-xl bg-muted/60 p-4">
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Calculator className="size-4 text-ember" /> Estimated monthly EMI
                  </div>
                  <div className="font-display text-2xl text-ember">{formatINR(Math.round(monthly))}</div>
                </div>
              </div>
            </Section>

            <Section title="Location">
              <div className="grid h-64 place-items-center rounded-2xl border border-border bg-gradient-to-br from-muted to-background text-sm text-muted-foreground">
                Interactive map preview · {p.locality}, {p.city}
              </div>
            </Section>
          </div>

          {/* Sticky card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant">
              <div className="text-xs text-muted-foreground">Asking price</div>
              <div className="mt-1 font-display text-4xl font-semibold text-ember">{formatINR(p.price)}<span className="ml-1 text-sm font-normal text-muted-foreground">{p.pricePer}</span></div>
              <div className="mt-1 text-xs text-muted-foreground">₹{Math.round(p.price / p.area).toLocaleString("en-IN")} / sqft</div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-border p-3">
                <img src="https://i.pravatar.cc/100?img=47" alt="" className="size-10 rounded-full" />
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{p.agent}</div>
                  <div className="text-[11px] text-muted-foreground">Listing agent · Responds in ~12m</div>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl ember-gradient py-3 text-sm text-primary-foreground shadow-ember">
                  <Phone className="size-4" /> Get owner contact
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm">
                  <MessageCircle className="size-4 text-ember" /> Chat on WhatsApp
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm">
                  <Calendar className="size-4 text-ember" /> Schedule a visit
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <button className="inline-flex items-center gap-1"><Heart className="size-3.5" /> Save</button>
                <button className="inline-flex items-center gap-1"><Share2 className="size-3.5" /> Share</button>
                <span className="inline-flex items-center gap-1"><ShieldCheck className="size-3.5 text-ember" /> Verified</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function Stat({ label, value, icon: Icon }: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div>
      <div className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest text-muted-foreground">
        <Icon className="size-3" /> {label}
      </div>
      <div className="mt-1 font-display text-lg font-semibold">{value}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
