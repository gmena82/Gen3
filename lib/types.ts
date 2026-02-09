/** Shared types for Gen 3 Wellness */

export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface LocationInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  bookingUrl: string;
}
