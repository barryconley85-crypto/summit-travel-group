import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quote — Summit Travel Group" },
      { name: "description", content: "Request a coach hire quote or speak to our UK team. Call 07578 252299 or email hello@summittravelgroup.co.uk." },
      { property: "og:title", content: "Contact Summit Travel Group" },
      { property: "og:description", content: "Tell us your route, group size and dates — we'll send a tailored quote." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="bg-hero-gradient text-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm">Get in Touch</p>
          <h1 className="mt-3 text-5xl lg:text-6xl font-extrabold max-w-3xl">Request a quote — we'll reply within hours.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Share a few details about your journey and our team will come back with availability and a fixed-price quote.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-sm">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-brand mx-auto" />
                <h2 className="mt-6 text-2xl font-bold">Thanks — we've got your request.</h2>
                <p className="mt-3 text-muted-foreground">A coordinator will be in touch shortly. For urgent enquiries call 07425 866205.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="grid gap-5"
              >
                <h2 className="text-2xl font-bold">Quote Request</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Company (optional)" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Pickup location" name="from" required />
                  <Field label="Destination" name="to" required />
                  <Field label="Travel date" name="date" type="date" required />
                  <Field label="Group size" name="group" type="number" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Type of trip</label>
                  <select name="type" className="w-full rounded-md border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand">
                    <option>Corporate / Executive</option>
                    <option>School / Education</option>
                    <option>Wedding</option>
                    <option>Sports / Fixture</option>
                    <option>Event / Festival</option>
                    <option>Airport transfer</option>
                    <option>Private group hire</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Tell us more</label>
                  <textarea name="message" rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Return journey? Multiple pickup points? Any special requirements?" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-glow shadow-brand transition">
                  <Send className="h-4 w-4" /> Send Request
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <aside className="space-y-6">
            <InfoCard icon={Phone} title="Call us" body={<a href="tel:07425866205" className="text-brand font-semibold text-lg hover:underline">07425 866205</a>} sub="Mon–Sun · 24/7 dispatch" />
            <InfoCard icon={Mail} title="Email" body={<a href="mailto:hello@summittravelgroup.co.uk" className="text-brand font-semibold hover:underline break-all">hello@summittravelgroup.co.uk</a>} sub="Replies within 2 hours" />
            <InfoCard icon={MapPin} title="Head office" body={<span className="font-semibold">Manchester, United Kingdom</span>} sub="Nationwide coach hire coverage" />
            <InfoCard icon={Clock} title="Operating hours" body={<span className="font-semibold">Office: Mon–Fri, 8am–6pm</span>} sub="Out-of-hours dispatch available 24/7" />
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}{required && <span className="text-brand"> *</span>}</label>
      <input name={name} type={type} required={required} className="w-full rounded-md border border-input bg-background px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, body, sub }: { icon: React.ElementType; title: string; body: React.ReactNode; sub: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
          <Icon className="h-5 w-5 text-brand" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <div className="mt-1 text-foreground">{body}</div>
          <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
        </div>
      </div>
    </div>
  );
}
