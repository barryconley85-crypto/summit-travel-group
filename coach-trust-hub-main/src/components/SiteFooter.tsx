import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/summit-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoAsset.url} alt="Summit Travel Group" className="h-16 w-auto mb-4" />
          <p className="text-sm max-w-sm leading-relaxed">
            UK-wide professional coach hire and group transport. Modern fleet, vetted drivers,
            single point of contact for every journey.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-brand">Services</Link></li>
            <li><Link to="/fleet" className="hover:text-brand">Our Fleet</Link></li>
            <li><Link to="/about" className="hover:text-brand">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /> 07425 866205</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /> hello@summittravelgroup.co.uk</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-brand mt-0.5" /> Manchester, UK — Nationwide coverage</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs text-white/50">
        <span>© {new Date().getFullYear()} Summit Travel Group. All rights reserved.</span>
        <Link to="/terms" className="hover:text-brand">Terms &amp; Conditions</Link>
      </div>
    </footer>
  );
}
