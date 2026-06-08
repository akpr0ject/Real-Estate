import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Estate" },
      { name: "description", content: "Talk to the Estate team about listings, partnerships and enterprise plans." },
      { property: "og:title", content: "Contact — Estate" },
    ],
  }),
  component: () => (
    <div>
      <SiteHeader />
      <div className="container-page grid gap-10 py-10 md:grid-cols-[1fr_420px]">
        <div>
          <div className="text-xs uppercase tracking-widest text-ember">Get in touch</div>
          <h1 className="mt-2 font-display text-4xl font-semibold">We'd love to hear from you</h1>
          <p className="mt-2 max-w-lg text-sm text-muted-foreground">
            Whether you're listing your first property or running a 200-agent brokerage, our team
            will get back within a business hour.
          </p>
          <div className="mt-8 grid gap-4">
            <Detail icon={Mail} label="Email" value="hello@estate.in" />
            <Detail icon={Phone} label="Phone" value="+91 22 6100 0000" />
            <Detail icon={MapPin} label="Headquarters" value="Worli, Mumbai 400018" />
          </div>
        </div>
        <form className="rounded-3xl border border-border bg-card p-6 shadow-elegant">
          <div className="grid gap-4">
            <Field label="Full name" placeholder="Anika Mehra" />
            <Field label="Work email" placeholder="you@company.com" type="email" />
            <Field label="Company" placeholder="Estate Realty" />
            <div>
              <div className="mb-2 text-[11px] uppercase tracking-widest text-muted-foreground">Message</div>
              <textarea rows={4} className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ember/60" placeholder="Tell us a bit about what you're looking for…" />
            </div>
            <button type="button" className="rounded-xl ember-gradient py-3 text-sm text-primary-foreground shadow-ember">
              Send message
            </button>
          </div>
        </form>
      </div>
      <SiteFooter />
    </div>
  ),
});

function Detail({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
      <div className="grid size-10 place-items-center rounded-xl bg-muted"><Icon className="size-4 text-ember" /></div>
      <div>
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <div className="mb-2 text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <input type={type} placeholder={placeholder} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-ember/60" />
    </div>
  );
}
