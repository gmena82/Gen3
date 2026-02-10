import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { locations, siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://gen3-dusky.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(resolvedSiteUrl),
  title: {
    default: "Gen 3 IV | Hydration + Wellness",
    template: "%s | Gen 3 IV",
  },
  description:
    "Modern wellness practice providing IV Hydration Therapy, Hormone Optimization, Metabolic Reset, and Functional Medicine. We provide solutions when the system said you're fine.",
  keywords: [
    "IV hydration",
    "wellness",
    "hormone optimization",
    "functional medicine",
    "metabolic reset",
    "gut health",
    "Kansas City",
    "Blue Springs",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: resolvedSiteUrl,
    siteName: "Gen 3 IV | Hydration + Wellness",
    images: [
      {
        url: `${resolvedSiteUrl}/Gen3-social.png`,
        width: 1200,
        height: 630,
        alt: "Gen 3 IV Hydration + Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen 3 IV | Hydration + Wellness",
    description:
      "Modern wellness practice providing IV Hydration Therapy, Hormone Optimization, Metabolic Reset, and Functional Medicine.",
    images: [`${resolvedSiteUrl}/Gen3-social.png`],
  },
};

const sameAsLinks = [
  siteConfig.googleBusinessProfileUrl,
  siteConfig.socialLinks.instagram,
  siteConfig.socialLinks.facebook,
].filter(Boolean);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${resolvedSiteUrl}/#website`,
      url: resolvedSiteUrl,
      name: siteConfig.name,
      image: `${resolvedSiteUrl}/Gen3-social.png`,
      potentialAction: {
        "@type": "SearchAction",
        target: `${resolvedSiteUrl}/blog?query={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${resolvedSiteUrl}/#organization`,
      name: siteConfig.name,
      url: resolvedSiteUrl,
      telephone: siteConfig.phone,
      image: `${resolvedSiteUrl}/Gen3-social.png`,
      sameAs: sameAsLinks,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
      },
    },
    ...locations.map((location, index) => ({
      "@type": "MedicalClinic",
      "@id": `${resolvedSiteUrl}/#location-${index + 1}`,
      name: `${siteConfig.shortName} - ${location.name}`,
      parentOrganization: {
        "@id": `${resolvedSiteUrl}/#organization`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: location.city,
        addressRegion: location.state,
        postalCode: location.zip,
        addressCountry: "US",
      },
      telephone: location.phone,
      url: resolvedSiteUrl,
      sameAs: [siteConfig.googleBusinessProfileUrl],
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
