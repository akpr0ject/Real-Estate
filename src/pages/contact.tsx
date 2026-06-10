import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact — Estate</title>
        <meta name="description" content="Talk to the Estate team — for partnerships, listings, support or anything else." />
      </Helmet>
      <SiteHeader />
      <div className="container-page py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="text-xs uppercase tracking-widest text-ember">Talk to us</div>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">We'd love to hear from you</h1>
            <p className="mt-3 text-sm text-muted-foreground">Partnerships, listings, support or just curious — drop us a note and a human will reply within one business day.</p>
            <div className="mt-8 grid gap-3">
              <Detail icon={Mail} label="Email" value="hello@estate.in" />
              <Detail icon={Phone} label="Phone" value="+91 22 4000 1200" />
              <Detail icon={MapPin} label="Studio" value="One BKC, Bandra Kurla Complex, Mumbai 400051" />
            </div>
          </div>
          <form className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full name" placeholder="Anika Mehra" />
              <Field label="Work email" placeholder="you@company.com" type="email" />
              <Field label="Company" placeholder="Estate Realty" />
              <Field label="Phone" placeholder="+91 98XXXXXXXX" />
            </div>
            <div className="mt-4">
              <div className="mb-2 text-[11px] uppercase tracking-widest text-muted-foreground">How can we help?</div>
              <textarea rows={5} placeholder="Tell us a little about what you're working on…" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-ember/60" />
            </div>
            <button type="button" className="mt-6 inline-flex items-center justify-center rounded-xl ember-gradient px-5 py-3 text-sm font-medium text-primary-foreground shadow-ember hover:opacity-95">
              Send message
            </button>
          </form>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

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
