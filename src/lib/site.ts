/**
 * Site-wide config / placeholders. Single source of truth for contact info,
 * brand strings, and routes. Real data replaces these later in one place.
 */
export const site = {
  name: "Premier Steels",
  legalName: "Premier Steels",
  tagline: "Authorized Rungta Steel Distributor",
  shortPitch:
    "Bulk-grade TMT bars from authorized Rungta Steel distributor in Ghaziabad. Built for builders moving tonnage, not retail.",
  url: "https://premiersteels.org",
  domain: "premiersteels.org",

  /** Variant ID for this branch — set per branch. Default 'main' before checkout. */
  variantId: process.env.NEXT_PUBLIC_VARIANT_ID || "main",

  contact: {
    name: "[Placeholder Name]",
    designation: "Director",
    phone: "+91 99999 99999",
    phoneRaw: "919999999999",
    whatsapp: "919999999999",
    email: "sales@premiersteels.org",
    address: {
      street: "[Yard Address Line 1]",
      area: "[Sector / Industrial Area]",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      pincode: "201xxx",
      country: "India",
    },
    hours: "Mon – Sat · 9:00 AM – 7:00 PM",
    gst: "GSTIN: [PLACEHOLDER]",
    mapsQuery: "Premier+Steels+Ghaziabad",
  },

  trust: {
    rungtaAuthorizedSince: "2018",
    serviceArea: "Delhi-NCR · Western UP · Uttarakhand",
    monthlyCapacity: "10,000+ MT",
    projectsSupplied: "500+",
    yearsInBusiness: "20+",
    certifications: ["ISI Marked", "BIS Certified", "IS 1786:2008"],
  },

  /** Rungta TMT product range — accurate to Rungta's offering */
  products: [
    {
      grade: "Fe 500",
      label: "Fe 500",
      description:
        "General-purpose construction grade. Excellent strength-to-weight, ideal for residential and commercial structures.",
      sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "28mm", "32mm"],
      yieldStrength: "500 N/mm²",
      certification: "IS 1786:2008",
      bestFor: "Houses · Apartments · Commercial buildings",
      featured: false,
    },
    {
      grade: "Fe 500D",
      label: "Fe 500D",
      description:
        "Ductile grade. Higher elongation for earthquake-zone construction. The default for serious structural engineers.",
      sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "28mm", "32mm"],
      yieldStrength: "500 N/mm² · 16% elongation",
      certification: "IS 1786:2008",
      bestFor: "Seismic zones · Bridges · High-rises",
      featured: true,
    },
    {
      grade: "Fe 550",
      label: "Fe 550",
      description:
        "High-strength grade for heavy-load structures. Reduces steel quantity by ~10% vs Fe 500 in equivalent designs.",
      sizes: ["8mm", "10mm", "12mm", "16mm", "20mm", "25mm", "28mm", "32mm"],
      yieldStrength: "550 N/mm²",
      certification: "IS 1786:2008",
      bestFor: "Industrial structures · Heavy-load projects",
      featured: false,
    },
  ] as const,

  testimonials: [
    {
      quote:
        "Reliable supply across our 14 sites in Delhi-NCR. Premier Steels delivers the tonnage we need on the day we need it.",
      author: "[Placeholder Name]",
      role: "Project Director",
      company: "[Placeholder Construction Co.]",
    },
    {
      quote:
        "Authentic Rungta Fe 500D, every consignment. Test certificates with every batch. That's not standard in this industry — it should be.",
      author: "[Placeholder Name]",
      role: "Structural Engineer",
      company: "[Placeholder Engineering]",
    },
    {
      quote:
        "We needed 200 MT in 48 hours for an emergency casting. They delivered. That's the partnership we want from a steel distributor.",
      author: "[Placeholder Name]",
      role: "Site In-charge",
      company: "[Placeholder Infra Pvt. Ltd.]",
    },
  ],

  /** Public client logos / projects — replace with real partner names later */
  clients: [
    "[Client A]",
    "[Client B]",
    "[Client C]",
    "[Client D]",
    "[Client E]",
    "[Client F]",
  ],
} as const;

/** WhatsApp click-to-chat URL with prefilled inquiry */
export function whatsappUrl(prefill?: string): string {
  const text =
    prefill ??
    `Hi Premier Steels, I'd like a bulk quote for Rungta TMT bars. My requirement is approximately ___ MT, location ___.`;
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const heroVariants = [
  {
    id: "v1",
    name: "Forge Reactor",
    description:
      "Cinematic full-bleed hero with kinetic typography over a dark steel-mill backdrop. Heroic, premium-industrial.",
  },
  {
    id: "v2",
    name: "Spec Sheet",
    description:
      "Editorial split-layout. Authority on the left, product spec cards on the right. Engineering-grade.",
  },
  {
    id: "v3",
    name: "Numbers That Matter",
    description:
      "Trust-by-scale. Massive tonnage / projects / years numbers as the visual centerpiece.",
  },
  {
    id: "v4",
    name: "Tower Showcase",
    description:
      "Iconic vertical TMT bar visual on the right; bold copy + sticky quote CTA on the left. Memorable.",
  },
  {
    id: "v5",
    name: "Trust Marquee",
    description:
      "Trust-anchored. Top marquee of certifications and clients, centered tagline below, stark CTA.",
  },
] as const;

export type VariantId = (typeof heroVariants)[number]["id"];
