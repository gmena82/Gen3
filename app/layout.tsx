import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
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

export const metadata: Metadata = {
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
    siteName: "Gen 3 IV | Hydration + Wellness",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
