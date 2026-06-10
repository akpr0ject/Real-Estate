import { Link } from "react-router-dom";
import { Heart, MapPin, BedDouble, Maximize2, BadgeCheck, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { type Property, formatINR } from "@/lib/mock-data";

export function PropertyCard({ p, index = 0 }: { p: Property; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-elegant"
    >
      <Link to="/property/$id" params={{ id: p.id }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          <div className="absolute left-3 top-3 flex gap-1.5">
            {p.verified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-[10px] font-medium backdrop-blur">
                <BadgeCheck className="size-3 text-ember" /> Verified
              </span>
            )}
            {p.featured && (
              <span className="inline-flex items-center gap-1 rounded-full ember-gradient px-2 py-1 text-[10px] font-medium text-primary-foreground">
                Featured
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-background/80 text-foreground backdrop-blur transition hover:bg-background"
          >
            <Heart className="size-4" />
          </button>
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <div className="font-display text-xl font-semibold text-white">
                {formatINR(p.price)}
                {p.pricePer && <span className="ml-1 text-xs font-normal text-white/70">{p.pricePer}</span>}
              </div>
              <div className="mt-0.5 flex items-center gap-1 text-[11px] text-white/80">
                <Eye className="size-3" /> {p.views.toLocaleString("en-IN")} views
              </div>
            </div>
            <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white backdrop-blur">
              {p.listing}
            </span>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <div>
            <h3 className="line-clamp-1 font-display text-base font-semibold">{p.title}</h3>
            <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3" /> {p.locality}, {p.city}
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
            {p.bhk && (
              <span className="inline-flex items-center gap-1">
                <BedDouble className="size-3.5" /> {p.bhk} BHK
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <Maximize2 className="size-3.5" /> {p.area.toLocaleString("en-IN")} sqft
            </span>
            <span>{p.type}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
