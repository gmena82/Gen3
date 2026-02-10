import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { siteConfig, services, locations } from "@/lib/site-config";

const footerLinks = {
  services: services.slice(0, 5).map((s) => ({ label: s.title, href: s.href })),
  company: [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gen3-black text-white/80" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <img
                src="/logo-white-trsp-s.webp"
                alt="Gen 3 IV Hydration + Wellness"
                className="h-10 w-auto"
                loading="eager"
                decoding="async"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Modern wellness practice providing solutions when the system said
              &quot;you&apos;re fine.&quot;
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-gen3-gold" />
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}
                className="hover:text-gen3-gold transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gen3-gold mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gen3-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gen3-gold hover:text-gen3-gold-light transition-colors font-medium"
                >
                  View All &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gen3-gold mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gen3-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gen3-gold mb-4">
              Locations
            </h3>
            <div className="space-y-5">
              {locations.map((loc) => (
                <div key={loc.name} className="space-y-1.5">
                  <p className="text-sm font-semibold text-white">{loc.name}</p>
                  <div className="flex items-start gap-2 text-sm text-white/40">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gen3-gold" />
                    <span>
                      {loc.address}
                      <br />
                      {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 text-sm text-white/40">
                <Clock className="w-3.5 h-3.5 text-gen3-gold" />
                <span>Mon–Fri: 8am–5pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Gen 3 IV Hydration + Wellness. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">
              Terms of Use
            </Link>
            <span>Medical Advice Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
