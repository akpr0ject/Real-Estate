import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { SlidersHorizontal, Grid3x3, Map } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PropertyCard } from "@/components/property/PropertyCard";
import { properties, cities } from "@/lib/mock-data";

function BuyPage() {
  return <ListingPage listing="Buy" title="Homes for sale" subtitle="Verified residences across India's most considered addresses." />;
}

export function ListingPage({ listing, title, subtitle }: { listing: "Buy" | "Rent" | "Commercial" | "New Project"; title: string; subtitle: string }) {
  const [city, setCity] = useState<string>("All");
  const [type, setType] = useState<string>("All");
  const [sort, setSort] = useState<string>("featured");
  const [view, setView] = useState<"grid" | "map">("grid");

  const filtered = useMemo(() => {
    let l = properties.filter((p) => p.listing === listing);
    if (city !== "All") l = l.filter((p) => p.city === city);
    if (type !== "All") l = l.filter((p) => p.type === type);
    if (sort === "price-asc") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "newest") l = [...l].sort((a, b) => a.postedDays - b.postedDays);
    return l;
  }, [city, type, sort, listing]);

  const types = Array.from(new Set(properties.filter((p) => p.listing === listing).map((p) => p.type)));

  return (
    <div>
      <SiteHeader />
      <div className="container-page py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-ember">{listing}</div>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">{title}</h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setView("grid")}
              className={`grid size-9 place-items-center rounded-lg border ${view === "grid" ? "border-ember/50 bg-muted" : "border-border"}`}
            >
              <Grid3x3 className="size-4" />
            </button>
            <button
              onClick={() => setView("map")}
              className={`grid size-9 place-items-center rounded-lg border ${view === "map" ? "border-ember/50 bg-muted" : "border-border"}`}
            >
              <Map className="size-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-4 rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-sm font-medium">
              <SlidersHorizontal className="size-4 text-ember" /> Refine
            </div>
            <Field label="City">
              <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
                <option>All</option>
                {cities.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Type">
              <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
                <option>All</option>
                {types.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Budget">
              <input type="range" className="w-full accent-[var(--ember)]" min={1000000} max={100000000} step={500000} defaultValue={20000000} />
              <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                <span>₹10 L</span><span>₹10 Cr</span>
              </div>
            </Field>
            <Field label="Bedrooms">
              <div className="flex gap-2">
                {["1", "2", "3", "4", "5+"].map((b) => (
                  <button key={b} className="flex-1 rounded-lg border border-border px-2 py-1.5 text-xs hover:border-ember/50">{b}</button>
                ))}
              </div>
            </Field>
            <Field label="Verified only">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" defaultChecked className="accent-[var(--ember)]" /> Show only verified
              </label>
            </Field>
            <Field label="Amenities">
              <div className="flex flex-wrap gap-1.5">
                {["Pool", "Gym", "Garden", "Parking", "Concierge", "Pet"].map((a) => (
                  <span key={a} className="cursor-pointer rounded-full border border-border px-2 py-1 text-[11px] hover:border-ember/50">{a}</span>
                ))}
              </div>
            </Field>
          </aside>

          <div>
            <div className="mb-4 flex items-center justify-between rounded-xl border border-border bg-card px-4 py-2.5 text-sm">
              <span className="text-muted-foreground">{filtered.length} results</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-md bg-transparent text-sm outline-none">
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            {view === "grid" ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p, i) => <PropertyCard key={p.id} p={p} index={i} />)}
              </div>
            ) : (
              <div className="grid h-[600px] place-items-center rounded-2xl border border-border bg-gradient-to-br from-muted to-background text-sm text-muted-foreground">
                Interactive map view (demo) — {filtered.length} listings plotted
              </div>
            )}
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
      {children}
    </div>
  );
}


export default BuyPage;
