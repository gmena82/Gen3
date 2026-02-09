import type { Metadata } from "next";
import { ServicesGrid } from "@/components/features/services-grid";
import { CTASection } from "@/components/features/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive wellness services including IV Therapy, Hormone Optimization, Metabolic Reset, Gut Health, and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero spacer for fixed nav */}
      <div className="pt-32 pb-8 bg-accent">
        <div className="container-custom text-center">
          <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gen3-black mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-gen3-gray text-lg max-w-2xl mx-auto">
            Comprehensive wellness solutions designed to deliver tangible,
            measurable results that elevate your everyday life.
          </p>
        </div>
      </div>
      <ServicesGrid />
      <CTASection />
    </>
  );
}
