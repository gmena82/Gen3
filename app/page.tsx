import { HeroVideo } from "@/components/features/hero-video";
import { MissionStatement } from "@/components/features/mission-statement";
import { ServicesGrid } from "@/components/features/services-grid";
import { WellnessPromise } from "@/components/features/wellness-promise";
import { TeamSection } from "@/components/features/team-section";
import { CTASection } from "@/components/features/cta-section";
import { TestimonialsCarousel } from "@/components/features/testimonials-carousel";
import { HomeFAQ } from "@/components/features/home-faq";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <MissionStatement />
      <ServicesGrid />
      <WellnessPromise />
      <TeamSection />
      <TestimonialsCarousel />
      <CTASection />
      <HomeFAQ />
    </>
  );
}
