import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Calendar, Users, ShieldCheck, MapPin, Star, ArrowRight, Briefcase, GraduationCap, PartyPopper, Plane, Building2, Heart } from "lucide-react";
import busAsset from "@/assets/summit-bus.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Summit Travel Group — UK Coach Hire & Group Transport" },
      { name: "description", content: "Professional coach hire across the UK. Corporate travel, school trips, weddings, events and airport transfers. Modern fleet, vetted drivers." },
      { property: "og:title", content: "Summit Travel Group — Group Travel, Done Right" },
      { property: "og:description", content: "UK-wide coach hire with a single point of contact for every journey." },
      { property: "og:image", content: busAsset.url },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Users, title: "Group Travel Experts", body: "Years of experience delivering seamless travel for groups of all sizes." },
  { icon: ShieldCheck, title: "Safety First", body: "Modern fleet, fully maintained and driven by experienced, vetted professionals." },
  { icon: MapPin, title: "UK Wide Coverage", body: "Nationwide network providing travel solutions wherever you need to go." },
  { icon: Star, title: "Reliable & Punctual", body: "We pride ourselves on punctuality, reliability and exceptional service." },
];

const services = [
  { icon: Briefcase, title: "Corporate Travel", body: "Executive coaches for conferences, roadshows, team days and shuttle services." },
  { icon: GraduationCap, title: "School & Education", body: "DBS-checked drivers and seatbelted vehicles for school trips and university transport." },
  { icon: PartyPopper, title: "Events & Festivals", body: "Coordinated group transport for sports fixtures, concerts and festival shuttles." },
  { icon: Plane, title: "Airport Transfers", body: "Reliable airport coach transfers across all major UK terminals, 24/7." },
  { icon: Heart, title: "Weddings & Special Days", body: "Stress-free guest transport so everyone arrives together, on time and in style." },
  { icon: Building2, title: "Private & Group Hire", body: "Day trips, club outings and bespoke private hire across the UK and beyond." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ backgroundImage: `url(${busAsset.url})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-transparent" style={{ background: "linear-gradient(90deg, oklch(0.18 0.05 260) 0%, oklch(0.18 0.05 260 / 0.85) 45%, transparent 90%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
              UK's Trusted Coach Hire Network
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05]">
              Group Travel,<br />Done Right<span className="text-brand">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Professional coach hire and group transport across the UK. Safe, reliable and tailored to your journey — one team, one point of contact, every mile.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3.5 font-semibold text-white shadow-brand hover:bg-brand-glow transition">
                <Calendar className="h-4 w-4" /> Get a Quote
              </Link>
              <a href="tel:07425866205" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                <Phone className="h-4 w-4" /> Call Us Now
              </a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>

        {/* feature strip */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur p-5">
                <f.icon className="h-6 w-6 text-brand mb-3" />
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm text-white/65 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-brand font-semibold text-sm uppercase tracking-widest">Our Services</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-foreground">Tailored Travel Solutions<br />for Every Journey</h2>
            <p className="mt-5 text-muted-foreground text-lg">From boardroom shuttles to wedding parties, we coordinate the right coach, the right driver and the right plan — every time.</p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-xl border border-border bg-card p-7 hover:border-brand/40 hover:shadow-brand transition-all">
                <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-white transition-colors">
                  <s.icon className="h-6 w-6 text-brand group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-brand hover:gap-3 transition-all">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST / WHY US */}
      <section className="bg-navy-deep text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand font-semibold text-sm uppercase tracking-widest">Why Summit</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Operator-grade service, brokerage flexibility.</h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              We combine the network of a national broker with the standards and care of a single operator. Every coach we deploy meets our quality, safety and compliance standards — so you get choice without compromise.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Fully compliant, PSV-licensed partners only",
                "24/7 dispatch and live journey support",
                "One contract, one invoice, one point of contact",
                "Modern fleet — executive coaches, mini-coaches and double-deckers",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <span className="text-white/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={busAsset.url} alt="Summit Travel Group coach at twilight" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-hero-gradient text-white p-10 lg:p-16 text-center shadow-brand">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to plan your next journey?</h2>
            <p className="mt-4 text-white/75 max-w-2xl mx-auto">Tell us your route, group size and dates — we'll send a tailored quote within hours.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-md bg-brand px-6 py-3.5 font-semibold hover:bg-brand-glow transition">Request a Quote</Link>
              <a href="tel:07425866205" className="rounded-md border border-white/30 px-6 py-3.5 font-semibold hover:bg-white/10 transition">07425 866205</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
