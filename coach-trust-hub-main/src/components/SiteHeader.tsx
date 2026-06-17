import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoAsset from "@/assets/summit-logo.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoAsset.url} alt="Summit Travel Group" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-brand" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:07425866205" className="flex items-center gap-2 text-white/90 hover:text-brand text-sm font-semibold">
            <Phone className="h-4 w-4 text-brand" /> 07425 866205
          </a>
          <Link to="/contact" className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-glow transition-colors shadow-brand">
            Get a Quote
          </Link>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy">
          <nav className="px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-white/90 hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <a href="tel:07425866205" className="px-3 py-3 text-brand font-semibold flex items-center gap-2">
              <Phone className="h-4 w-4" /> 07425 866205
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 text-center rounded-md bg-brand px-5 py-3 font-semibold text-white">
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
