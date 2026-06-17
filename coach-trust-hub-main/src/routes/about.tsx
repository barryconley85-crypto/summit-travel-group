import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Users, MapPin, Clock, Award, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Summit Travel Group" },
      { name: "description", content: "UK coach hire specialists combining a national network with operator-grade standards." },
      { property: "og:title", content: "About Summit Travel Group" },
      { property: "og:description", content: "Operator-grade service, brokerage flexibility." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Safety Above All", body: "We only partner with PSV-licensed operators with strong compliance and maintenance records." },
  { icon: HeartHandshake, title: "One Point of Contact", body: "Your dedicated coordinator manages every detail — no being passed between operators." },
  { icon: Clock, title: "On Time, Every Time", body: "Live tracking and 24/7 dispatch keep your journey on schedule." },
  { icon: Award, title: "Quality Vetted", body: "Every vehicle and driver in our network meets our quality standards before deployment." },
];

const stats = [
  { value: "500+", label: "Coaches in network" },
  { value: "10k+", label: "Journeys coordinated" },
  { value: "98%", label: "On-time performance" },
  { value: "24/7", label: "Support team" },
];

function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm">About Summit</p>
          <h1 className="mt-3 text-5xl lg:text-6xl font-extrabold max-w-3xl">A national network. An operator's mindset.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            We exist to take the friction out of group travel. By combining a vetted UK-wide partner network with a single, accountable point of contact, Summit delivers the choice of a broker with the standards of an operator.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold">Built around your journey.</h2>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>Summit Travel Group was founded on a simple frustration: too often, group travel is reactive, fragmented and stressful. Clients juggle multiple operators, deal with inconsistent quality, and lose hours chasing updates.</p>
              <p>We rebuilt the model. One brief, one team, one invoice — backed by a curated network of trusted PSV operators across the UK. Whether you need a single executive coach for a board meeting or a fleet of double-deckers for a festival, we coordinate the right answer end-to-end.</p>
              <p>Every operator we work with is hand-picked for compliance, safety record and service standard. We never compromise on who carries you.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-secondary p-6 text-center">
                <div className="text-4xl font-extrabold text-brand">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-brand font-semibold uppercase tracking-widest text-sm">Our Values</p>
            <h2 className="mt-3 text-4xl font-bold">What we promise, every trip.</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <v.icon className="h-7 w-7 text-brand mb-4" />
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-10 w-10 text-brand mx-auto" />
          <h2 className="mt-4 text-3xl font-bold">Let's plan your next group journey.</h2>
          <p className="mt-3 text-muted-foreground text-lg">Speak to a real coordinator — not a chatbot.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-md bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-glow shadow-brand">Get in Touch</Link>
            <Link to="/services" className="rounded-md border border-border px-6 py-3.5 font-semibold hover:bg-secondary">See Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
