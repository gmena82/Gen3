import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export const metadata: Metadata = {
  title: "Blog Article",
  description: "Gen 3 IV Hydration + Wellness blog article.",
};

export default function BlogPostPage({ params }: Props) {
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl mx-auto">
        <p className="text-gen3-gold text-sm font-semibold tracking-widest uppercase mb-3">
          Blog
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gen3-black mb-6">
          {title}
        </h1>
        <p className="text-gen3-gray text-lg leading-relaxed mb-8">
          This article is coming soon. We are finishing up the details and will
          publish it shortly.
        </p>
        <Link
          href="/blog"
          className="text-sm font-semibold text-gen3-gold hover:text-gen3-gold-dark transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </section>
  );
}
