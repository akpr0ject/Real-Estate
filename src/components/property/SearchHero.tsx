import { useState } from "react";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { cities } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

const tabs = ["Buy", "Rent", "Commercial", "New Projects", "PG"] as const;

export function SearchHero() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Buy");
  const [city, setCity] = useState("Mumbai");
  const [q, setQ] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.6 }}
      className="glass-strong w-full overflow-hidden rounded-3xl border border-border p-2 shadow-elegant"
    >
      <div className="flex gap-1 overflow-x-auto px-2 pt-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
              tab === t
                ? "bg-background text-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-2 grid gap-2 rounded-2xl bg-background/50 p-2 md:grid-cols-[180px_1fr_auto_auto]">
        <label className="flex items-center gap-2 rounded-xl bg-card px-3 py-3">
          <MapPin className="size-4 text-ember" />
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-transparent text-sm outline-none"
          >
            {cities.map((c) => (
              <option key={c} value={c} className="bg-background">
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 rounded-xl bg-card px-3 py-3">
          <Search className="size-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder='Try "3BHK in Bandra under 5 Cr"'
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
        <Button variant="outline" className="h-full rounded-xl">
          <SlidersHorizontal className="size-4" /> Filters
        </Button>
        <Button className="h-full rounded-xl ember-gradient text-primary-foreground shadow-ember hover:opacity-95">
          <Search className="size-4" /> Search
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-2 px-3 pb-3 pt-2 text-xs text-muted-foreground">
        <span>Popular:</span>
        {["Sea View", "Gated", "Under ₹2 Cr", "Ready to Move", "Pet Friendly", "RERA"].map((c) => (
          <span key={c} className="rounded-full border border-border px-2.5 py-1 hover:bg-muted">
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
