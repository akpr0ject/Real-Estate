import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Building2, Home, Landmark, MapPin, ShieldCheck, Sparkles, Star, TrendingUp, Users } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SearchHero } from "@/components/property/SearchHero";
import { PropertyCard } from "@/components/property/PropertyCard";
import { properties, builders, agents } from "@/lib/mock-data";
import heroImg from "@/assets/hero-estate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estate — Premium Real Estate Marketplace" },
      { name: "description", content: "Discover verified homes, offices and new projects across India. Designed for buyers, agents and developers." },
      { property: "og:title", content: "Estate — Premium Real Estate Marketplace" },
      { property: "og:description", content: "Discover verified homes, offices and new projects across India." },
      { property: "og:image", content: "/og-home.jpg" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = properties.filter((p) => p.featured);

  return (
    <div>
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Decorative background — warm cream with ember glow + grid */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, oklch(0.25 0.02 50 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.25 0.02 50 / 0.06) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse 80% 60% at 30% 30%, black 30%, transparent 75%)",
            }}
          />
          <div className="absolute -left-40 top-10 size-[520px] rounded-full bg-ember/25 blur-[120px]" />
          <div className="absolute -right-20 top-40 size-[420px] rounded-full bg-ember-soft/40 blur-[120px]" />
        </div>

        <div className="container-page pb-12 pt-16 md:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            {/* LEFT — copy */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
              >
                <Sparkles className="size-3 text-ember" /> India's most considered property marketplace
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance md:text-7xl"
              >
                Find a home worth{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-br from-[oklch(0.62_0.2_40)] to-[oklch(0.5_0.22_28)] bg-clip-text text-transparent">
                    coming home to.
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-3 -skew-x-6 rounded-sm bg-ember/15" />
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.6 }}
                className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg"
              >
                A curated marketplace of verified residences, commercial floors and ground-up new
                projects — with the tools agents and developers need to close, in one place.
              </motion.p>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground"
              >
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-ember" /> RERA verified listings
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="size-3.5 text-ember" /> 48K background-checked agents
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="size-3.5 fill-ember text-ember" /> 4.8 on Trustpilot
                </span>
              </motion.div>
            </div>

            {/* RIGHT — image collage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border shadow-elegant">
                <img
                  src={heroImg}
                  alt="Modern residence with warm interior light"
                  className="h-full w-full object-cover"
                  width={1200}
                  height={1500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.03_40)]/60 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-2xl bg-card/95 px-3 py-2 shadow-elegant backdrop-blur">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Featured</div>
                  <div className="font-display text-sm font-semibold">Bandra Sea Villa</div>
                  <div className="text-xs text-ember">₹ 8.4 Cr · 4 BHK</div>
                </div>
                <div className="absolute bottom-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-xs shadow-elegant backdrop-blur">
                  <BadgeCheck className="size-3.5 text-ember" /> RERA Verified
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-10 rounded-2xl border border-border bg-card p-4 shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl ember-gradient">
                    <TrendingUp className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold leading-none">+18.4%</div>
                    <div className="mt-1 text-[11px] text-muted-foreground">YoY appreciation</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 top-16 rounded-2xl border border-border bg-card p-3 shadow-elegant"
              >
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-ember" />
                  <div className="text-xs">
                    <span className="font-semibold">1,284</span>{" "}
                    <span className="text-muted-foreground">viewing now</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* SEARCH */}
          <div className="mt-12">
            <SearchHero />
          </div>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { k: "1.2M+", v: "Active listings" },
              { k: "48K", v: "Verified agents" },
              { k: "320+", v: "Cities & metros" },
              { k: "₹38,400 Cr", v: "Transacted in 2025" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur"
              >
                <div className="font-display text-2xl font-semibold tracking-tight">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-ember">Explore</div>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Browse by intent</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { icon: Home, label: "Buy", desc: "12,400 homes", to: "/buy" },
            { icon: Building2, label: "Rent", desc: "8,210 rentals", to: "/rent" },
            { icon: Landmark, label: "Commercial", desc: "3,840 spaces", to: "/commercial" },
            { icon: Sparkles, label: "New Projects", desc: "1,260 launches", to: "/projects" },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                to={c.to}
                className="group block rounded-2xl border border-border bg-card p-6 transition hover:border-ember/40 hover:shadow-ember"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-muted">
                  <c.icon className="size-5 text-ember" />
                </div>
                <div className="mt-6 font-display text-xl font-semibold">{c.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
                <div className="mt-6 inline-flex items-center gap-1 text-sm text-ember">
                  Explore <ArrowRight className="size-3.5 transition group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-page py-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-ember">Featured</div>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Editor's picks this week</h2>
          </div>
          <Link to="/buy" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-flex">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.concat(properties.slice(0, 3)).slice(0, 6).map((p, i) => (
            <PropertyCard key={p.id + i} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* DUAL CTA */}
      <section className="container-page py-20">
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12"
          >
            <div className="absolute -right-20 -top-20 size-72 rounded-full bg-ember/20 blur-3xl" />
            <ShieldCheck className="size-6 text-ember" />
            <h3 className="mt-4 font-display text-3xl font-semibold">For buyers & renters</h3>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Saved searches, price alerts, virtual tours and a personal dashboard to compare every
              shortlist with confidence.
            </p>
            <Link to="/dashboard" className="mt-6 inline-flex items-center gap-1 text-sm text-ember">
              Open your dashboard <ArrowRight className="size-3.5" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl ember-gradient p-8 text-primary-foreground md:p-12"
          >
            <div className="absolute -left-10 bottom-0 size-60 rounded-full bg-white/10 blur-3xl" />
            <TrendingUp className="size-6" />
            <h3 className="mt-4 font-display text-3xl font-semibold">For agents & developers</h3>
            <p className="mt-3 max-w-md text-sm opacity-80">
              A full CRM, lead scoring, pipeline automation and analytics — built in. List once,
              distribute everywhere.
            </p>
            <Link
              to="/agent"
              className="mt-6 inline-flex items-center gap-1 rounded-full bg-background px-4 py-2 text-sm text-foreground"
            >
              Open agent workspace <ArrowRight className="size-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AGENTS */}
      <section className="container-page py-10">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-ember">Network</div>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Top performing agents</h2>
          </div>
          <Link to="/agents" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline-flex">
            See directory →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {agents.map((a) => (
            <Link
              key={a.id}
              to="/agents"
              className="group rounded-2xl border border-border bg-card p-4 text-center transition hover:border-ember/40"
            >
              <img src={a.avatar} alt={a.name} className="mx-auto size-16 rounded-full object-cover" />
              <div className="mt-3 truncate font-display text-sm font-semibold">{a.name}</div>
              <div className="truncate text-[11px] text-muted-foreground">{a.specialty}</div>
              <div className="mt-2 inline-flex items-center gap-1 text-[11px] text-ember">
                <Star className="size-3 fill-ember" /> {a.rating} · {a.deals} deals
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BUILDERS */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-ember">Trust</div>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Builders we work with</h2>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {builders.map((b) => (
            <div key={b.id} className="rounded-2xl border border-border bg-card p-5">
              <Building2 className="size-5 text-ember" />
              <div className="mt-4 font-display text-sm font-semibold">{b.name}</div>
              <div className="mt-1 text-[11px] text-muted-foreground">
                {b.projects} projects · Est. {b.est}
              </div>
              <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-[10px]">
                <BadgeCheck className="size-3 text-ember" /> Verified
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              q: "We moved our entire team off three different tools. Estate just feels like it was built for how we actually sell homes.",
              n: "Anika Mehra",
              r: "Principal Broker, Mumbai",
            },
            {
              q: "The lead scoring is uncanny. We went from a 12% to a 27% site-visit-to-booking conversion in two quarters.",
              n: "Karan Shetty",
              r: "Founder, Coast Realty",
            },
            {
              q: "Listing once and distributing everywhere — plus a CRM that finally doesn't feel like a tax return. Worth every rupee.",
              n: "Meera Naidu",
              r: "Sales Lead, Aparna",
            },
          ].map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <Star className="size-4 fill-ember text-ember" />
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">"{t.q}"</blockquote>
              <figcaption className="mt-5 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{t.n}</span> · {t.r}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CITIES */}
      <section className="container-page pb-10">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-ember">Across India</div>
              <h2 className="mt-2 font-display text-3xl font-semibold">Live in every metro</h2>
            </div>
            <div className="text-sm text-muted-foreground">320+ cities and counting</div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
            {["Mumbai", "Delhi NCR", "Bengaluru", "Pune", "Hyderabad", "Chennai", "Kolkata", "Goa"].map((c) => (
              <div key={c} className="flex items-center gap-2 rounded-xl border border-border bg-background/40 px-3 py-2 text-sm hover:border-ember/40">
                <MapPin className="size-3.5 text-ember" /> {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
