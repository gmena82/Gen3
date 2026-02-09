import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services, siteConfig } from "@/lib/site-config";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

function getServiceBySlug(slug: string) {
  return services.find((s) => s.href === `/services/${slug}`);
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.href.replace("/services/", ""),
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.href === service.href);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-gen3-black">
        <div className="container-custom">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gen3-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>
          <span className="block text-gen3-gold/50 text-sm font-bold tracking-wider mb-2">
            {service.number}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Content placeholder */}
      <div className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-gen3-gray text-lg leading-relaxed">
              Detailed content for {service.title} is coming soon. Our team is
              working to provide you with comprehensive information about this
              service, including what to expect, pricing, and how it can benefit
              your wellness journey.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-gen3-gold/5 border border-gen3-gold/10 text-center">
            <h3 className="text-2xl font-display font-bold text-gen3-black mb-3">
              Ready to get started?
            </h3>
            <p className="text-gen3-gray mb-6">
              Book a consultation to learn more about {service.title}.
            </p>
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gen3-gold px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-gen3-gold-dark hover:shadow-lg"
            >
              Book Appointment
            </a>
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
            {prevService ? (
              <Link
                href={prevService.href}
                className="group flex items-center gap-3 text-sm text-gen3-gray hover:text-gen3-gold transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="block text-xs text-gen3-gray/50 mb-0.5">
                    Previous
                  </span>
                  {prevService.title}
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                href={nextService.href}
                className="group flex items-center gap-3 text-sm text-gen3-gray hover:text-gen3-gold transition-colors text-right"
              >
                <div>
                  <span className="block text-xs text-gen3-gray/50 mb-0.5">
                    Next
                  </span>
                  {nextService.title}
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
