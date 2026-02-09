import type { Metadata } from "next";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { siteConfig, locations } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gen 3 IV Hydration + Wellness. Book an appointment or visit us at our Blue Springs or Kansas City Northland locations.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-gen3-black">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            <span className="text-gradient">Contact</span> Us
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Ready to start your wellness journey? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Quick Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="service-card text-center">
              <Phone className="w-8 h-8 text-gen3-gold mx-auto mb-3" />
              <h3 className="font-semibold text-gen3-black mb-1">Phone</h3>
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d]/g, "")}`}
                className="text-gen3-gold hover:text-gen3-gold-dark transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div className="service-card text-center">
              <Mail className="w-8 h-8 text-gen3-gold mx-auto mb-3" />
              <h3 className="font-semibold text-gen3-black mb-1">Email</h3>
              <p className="text-gen3-gray text-sm">info@gen3iv.com</p>
            </div>
            <div className="service-card text-center">
              <Clock className="w-8 h-8 text-gen3-gold mx-auto mb-3" />
              <h3 className="font-semibold text-gen3-black mb-1">Hours</h3>
              <p className="text-gen3-gray text-sm">Mon–Fri: 8am–5pm</p>
            </div>
          </div>

          {/* Locations */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gen3-black mb-2">
              Our Locations
            </h2>
            <p className="text-gen3-gray">Visit us at either of our locations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {locations.map((loc) => (
              <div key={loc.name} className="service-card">
                <h3 className="text-xl font-semibold text-gen3-black mb-4">
                  {loc.name}
                </h3>
                <div className="space-y-3 text-gen3-gray">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gen3-gold shrink-0 mt-0.5" />
                    <span>
                      {loc.address}
                      <br />
                      {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gen3-gold shrink-0" />
                    <a
                      href={`tel:${loc.phone.replace(/[^\d]/g, "")}`}
                      className="hover:text-gen3-gold transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={loc.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gen3-gold px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-gen3-gold-dark hover:shadow-lg w-full"
                  >
                    Book at {loc.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
