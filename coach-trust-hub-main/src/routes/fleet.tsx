import { createFileRoute, Link } from "@tanstack/react-router";
import { Wifi, Wind, Plug, Armchair, ShieldCheck, Snowflake } from "lucide-react";
import busAsset from "@/assets/summit-bus.asset.json";
import executiveImg from "@/assets/fleet/executive.jpg.asset.json";
import standardImg from "@/assets/fleet/standard.jpg.asset.json";
import midiImg from "@/assets/fleet/midi.jpg.asset.json";
import minibusImg from "@/assets/fleet/minibus.jpg.asset.json";
import doubleDeckerImg from "@/assets/fleet/doubledecker.jpg.asset.json";
import vipImg from "@/assets/fleet/vip.jpg.asset.json";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Fleet — Summit Travel Group" },
      { name: "description", content: "Executive coaches, midi-coaches, minibuses and double-deckers. Modern, maintained, fully compliant." },
      { property: "og:title", content: "Our Fleet — Summit Travel Group" },
      { property: "og:description", content: "Executive coaches, midi-coaches, minibuses and double-deckers across the UK." },
      { property: "og:image", content: executiveImg.url },
    ],
  }),
  component: FleetPage,
});

const vehicles = [
  { name: "Executive Coach", seats: "49 – 53 seats", image: executiveImg.url, body: "Premium leather seating, reclining seats, climate control, on-board WC, Wi-Fi and USB charging. Ideal for long-distance corporate and VIP travel." },
  { name: "Standard Coach", seats: "49 – 57 seats", image: standardImg.url, body: "Comfortable, fully seat-belted touring coaches — the workhorse of school trips, sports travel and group outings." },
  { name: "Midi Coach", seats: "29 – 35 seats", image: midiImg.url, body: "Perfectly sized for medium groups where access or maneuverability matters — weddings, day trips and city work." },
  { name: "Minibus", seats: "8 – 16 seats", image: minibusImg.url, body: "Driver-included minibus hire for smaller groups, airport runs and corporate shuttles." },
  { name: "Double-Decker", seats: "70 – 85 seats", image: doubleDeckerImg.url, body: "Maximum capacity in a single vehicle — perfect for festivals, large events and big school year groups." },
  { name: "Luxury VIP Coach", seats: "16 – 32 seats", image: vipImg.url, body: "Reconfigured premium interiors with table seating and lounge layouts for executive travel and hospitality." },
];

const amenities = [
  { icon: Armchair, label: "Reclining seats" },
  { icon: Wifi, label: "Wi-Fi available" },
  { icon: Plug, label: "USB charging" },
  { icon: Snowflake, label: "Climate control" },
  { icon: Wind, label: "On-board WC" },
  { icon: ShieldCheck, label: "Seat belts throughout" },
];

function FleetPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url(${busAsset.url})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, oklch(0.18 0.05 260) 30%, transparent)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm">Our Fleet</p>
          <h1 className="mt-3 text-5xl lg:text-6xl font-extrabold max-w-3xl">A modern fleet for every group size.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            From 8-seat minibuses to 85-seat double-deckers, our partner fleet is maintained to the highest standards and matched precisely to your journey.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => (
              <div key={v.name} className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-brand hover:border-brand/40 transition">
                <div className="aspect-[3/2] bg-navy-deep relative overflow-hidden">
                  <img src={v.image} alt={`${v.name} — UK coach`} loading="lazy" width={1280} height={832} className="absolute inset-0 w-full h-full object-cover transition duration-500 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs uppercase tracking-widest text-brand font-semibold">{v.seats}</p>
                    <h3 className="text-xl font-bold text-white">{v.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm">On-board Amenities</p>
          <h2 className="mt-3 text-4xl font-bold">Comfort, as standard.</h2>
          <div className="mt-12 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {amenities.map((a) => (
              <div key={a.label} className="flex flex-col items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-brand/10 flex items-center justify-center">
                  <a.icon className="h-6 w-6 text-brand" />
                </div>
                <span className="text-sm font-medium">{a.label}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="mt-12 inline-flex rounded-md bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-glow shadow-brand">
            Check Availability
          </Link>
        </div>
      </section>
    </>
  );
}
