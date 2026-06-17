import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, GraduationCap, PartyPopper, Plane, Building2, Heart, Trophy, Church, Users, Bus } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Summit Travel Group | UK Coach Hire" },
      { name: "description", content: "Corporate travel, school trips, weddings, sports events, airport transfers and private hire across the UK." },
      { property: "og:title", content: "Services — Summit Travel Group" },
      { property: "og:description", content: "Every type of group transport, coordinated end-to-end." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Briefcase, title: "Corporate & Executive Travel", body: "Conference shuttles, roadshows, staff transport and executive coach hire with premium amenities, USB charging and Wi-Fi options." },
  { icon: GraduationCap, title: "School & Educational Trips", body: "DBS-checked drivers, fully seat-belted vehicles and operators with Section 19/22 permits where required. From local outings to overseas tours." },
  { icon: Trophy, title: "Sports & Fixtures", body: "Squad travel, supporters' coaches and tournament logistics. We work with grassroots clubs through to professional teams." },
  { icon: PartyPopper, title: "Events, Concerts & Festivals", body: "Park-and-ride, shuttle loops and bulk group movements for festivals, concerts and large-scale events." },
  { icon: Plane, title: "Airport Transfers", body: "24/7 transfers to and from Heathrow, Gatwick, Manchester, Birmingham, Stansted and all regional airports." },
  { icon: Heart, title: "Weddings", body: "Coordinated guest transport between ceremony, reception and hotels. Decorated coaches available on request." },
  { icon: Church, title: "Religious & Community Groups", body: "Pilgrimages, community outings and faith group travel — sensitive scheduling and trusted drivers." },
  { icon: Building2, title: "Rail Replacement & Contract Work", body: "Long-term contract hire, rail replacement services and ongoing scheduled transport solutions." },
  { icon: Users, title: "Private Group Hire", body: "Hen and stag parties, club days out, family reunions — any group, any destination, UK & Europe." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm">What We Do</p>
          <h1 className="mt-3 text-5xl lg:text-6xl font-extrabold max-w-3xl">Every kind of group, every kind of journey.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Summit Travel Group covers the full spectrum of UK coach hire. Whatever the brief — 8 seats or 80, one-off or recurring — we have the network and standards to deliver.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-card p-7 hover:border-brand/40 hover:shadow-brand transition">
              <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-5">
                <s.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Bus className="h-10 w-10 text-brand mx-auto" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Don't see your journey listed?</h2>
          <p className="mt-4 text-muted-foreground text-lg">If it moves a group, we can plan it. Talk to our team and we'll build a bespoke quote.</p>
          <Link to="/contact" className="mt-8 inline-flex rounded-md bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-glow transition shadow-brand">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
