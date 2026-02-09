import type { Metadata } from "next";
import { Heart, Users, Award } from "lucide-react";
import { CTASection } from "@/components/features/cta-section";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about Gen 3 IV Hydration + Wellness — a modern wellness practice with over 30 years of collective nursing experience.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "We listen — really listen — so we can uncover what's been overlooked by a system that too often dismisses your concerns.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description:
      "You are not a symptom or a number. Every plan is tailored to your story, your labs, and your unique lifestyle.",
  },
  {
    icon: Award,
    title: "Gold-Standard Care",
    description:
      "We combine cutting-edge science with genuine nursing expertise to deliver tangible, measurable results.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-gen3-black">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Our <span className="italic text-gen3-gold">Story</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            With over 30 years of collective nursing experience, we understand
            the frustration of feeling unheard, dismissed, and degraded when it
            comes to your health.
          </p>
        </div>
      </div>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="service-card text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gen3-gold/10 text-gen3-gold">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gen3-black mb-2">{v.title}</h3>
                <p className="text-sm text-gen3-gray leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="section-padding bg-accent">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="space-y-6 text-gen3-gray text-lg leading-relaxed">
            <p>
              As a modern wellness practice, we recognize that you are not a
              symptom or a number. We take time to listen — <em>really listen</em>{" "}
              — so we can uncover what&apos;s been overlooked.
            </p>
            <p>
              Our hope is to help you discover what a fulfilled life looks like
              to you in regards to your health. We affirm, assist, and provide
              you with a better approach.
            </p>
            <p>
              At Gen 3, we&apos;re here to help you break free from the cycle of
              temporary fixes and start living a life full of energy, clarity,
              and purpose.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
