import type { NavLink, ServiceItem, LocationInfo } from "@/lib/types";

export const siteConfig = {
  name: "Gen 3 IV | Hydration + Wellness",
  shortName: "Gen 3",
  tagline: "We provide solutions when the system said you're fine.",
  bookingUrl: "https://www.joinblvd.com/b/gen-3-iv/widget#/locations",
  phone: "(816) 599-0053",
} as const;

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Hormone Optimization",
    description:
      "Restore balance, energy, and vitality through personalized hormone therapy guided by advanced lab analysis.",
    href: "/services/hormone-optimization",
    icon: "Activity",
  },
  {
    number: "02",
    title: "Metabolic Reset",
    description:
      "Reignite your metabolism with a science-backed program designed to optimize your body composition and energy.",
    href: "/services/metabolic-reset",
    icon: "Flame",
  },
  {
    number: "03",
    title: "Gut Health Optimization",
    description:
      "Heal from the inside out with targeted protocols that restore gut function and reduce inflammation.",
    href: "/services/gut-health",
    icon: "HeartPulse",
  },
  {
    number: "04",
    title: "Autoimmune Program",
    description:
      "A comprehensive, root-cause approach to managing autoimmune conditions and reclaiming your quality of life.",
    href: "/services/autoimmune-program",
    icon: "Shield",
  },
  {
    number: "05",
    title: "IV Therapy & Injections",
    description:
      "Premium IV drips and vitamin injections for rapid hydration, recovery, immunity, and peak performance.",
    href: "/services/iv-therapy",
    icon: "Droplets",
  },
  {
    number: "06",
    title: "Wellness Services",
    description:
      "From weight management to anti-aging, our curated wellness services are tailored to your unique goals.",
    href: "/services/wellness-services",
    icon: "Sparkles",
  },
  {
    number: "07",
    title: "Lab Draws",
    description:
      "Comprehensive lab panels that reveal the full picture of your health, so we can treat the cause, not just the symptoms.",
    href: "/services/lab-draws",
    icon: "TestTube",
  },
];

export const locations: LocationInfo[] = [
  {
    name: "Blue Springs",
    address: "1200 NW South Outer Rd, Suite 200",
    city: "Blue Springs",
    state: "MO",
    zip: "64015",
    phone: "(816) 599-0053",
    bookingUrl: "https://www.joinblvd.com/b/gen-3-iv/widget#/locations",
  },
  {
    name: "Kansas City Northland",
    address: "418 NW Legacy Dr",
    city: "Kansas City",
    state: "MO",
    zip: "64155",
    phone: "(816) 599-0053",
    bookingUrl: "https://www.joinblvd.com/b/gen-3-iv/widget#/locations",
  },
];
