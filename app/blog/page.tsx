import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/features/cta-section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, updates, and wellness guidance from Gen 3 IV Hydration + Wellness.",
};

const posts = [
  {
    title: "Why IV Hydration Works Faster Than Oral Supplements",
    excerpt:
      "Discover how IV therapy delivers nutrients directly into your bloodstream for rapid absorption, recovery, and sustained energy.",
    category: "IV Therapy",
    date: "February 5, 2026",
    readTime: "5 min read",
    slug: "why-iv-hydration-works-faster",
  },
  {
    title: "Hormone Optimization: Signs Your Body Is Asking for Balance",
    excerpt:
      "From fatigue to brain fog, learn the top indicators of hormone imbalance and how personalized care can help.",
    category: "Hormone Health",
    date: "January 22, 2026",
    readTime: "6 min read",
    slug: "hormone-optimization-signs-of-imbalance",
  },
  {
    title: "The Metabolic Reset: What to Expect in Your First 30 Days",
    excerpt:
      "A week-by-week look at how our metabolic program supports sustainable weight loss and steady energy.",
    category: "Metabolic Reset",
    date: "January 10, 2026",
    readTime: "7 min read",
    slug: "metabolic-reset-first-30-days",
  },
  {
    title: "Gut Health 101: The Root of Energy, Immunity, and Mood",
    excerpt:
      "Your gut influences more than digestion. See how targeted protocols can restore balance from the inside out.",
    category: "Gut Health",
    date: "December 18, 2025",
    readTime: "5 min read",
    slug: "gut-health-101",
  },
  {
    title: "Autoimmune Support: A Root-Cause Approach That Respects Your Story",
    excerpt:
      "Our clinicians look beyond symptoms to uncover triggers and build personalized protocols for long-term relief.",
    category: "Autoimmune Care",
    date: "December 5, 2025",
    readTime: "6 min read",
    slug: "autoimmune-support-root-cause",
  },
  {
    title: "Wellness Labs: What Your Bloodwork Is Really Telling You",
    excerpt:
      "Learn how comprehensive lab panels reveal patterns that traditional checkups often miss.",
    category: "Lab Insights",
    date: "November 20, 2025",
    readTime: "4 min read",
    slug: "wellness-labs-what-bloodwork-reveals",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-16 bg-gen3-black">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Insights &amp; <span className="italic text-gen3-gold">Wellness</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Expert guidance, client wins, and practical tips from the Gen 3 team.
          </p>
        </div>
      </div>

      {/* Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="service-card flex flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gen3-gold">
                    {post.category}
                  </span>
                  <span className="text-xs text-gen3-gray-light">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gen3-black mb-3">
                  {post.title}
                </h2>
                <p className="text-sm text-gen3-gray leading-relaxed flex-1 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gen3-gray-light">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-gen3-gold hover:text-gen3-gold-dark transition-colors"
                  >
                    Read Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
