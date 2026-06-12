/**
 * Site-wide config — SINGLE SOURCE OF TRUTH for contact info, brand strings,
 * and routes. ALL contact data is verified business fact. Do not add fields
 * not listed here without owner confirmation.
 *
 * VERIFIED BUSINESS FACTS (owner-confirmed, do not alter):
 * - Authorized Rungta Steel distributor for Delhi, NCR and Uttar Pradesh only.
 * - NO Uttarakhand service area.
 * - NO email anywhere — WhatsApp + phone only.
 * - NO testimonials — all were placeholder [Client X] entries, removed.
 * - NO Fe 550D — only Fe 500, Fe 500D, Fe 550 stocked.
 */
export const site = {
  name: "Premier Steels",
  legalName: "Premier Steels",
  tagline: "Authorized Rungta Steel Distributor",
  shortPitch:
    "Bulk-grade Rungta TMT bars from authorized Rungta Steel distributor in Ghaziabad. Built for builders moving tonnage, not retail.",
  url: "https://premiersteels.org",
  domain: "premiersteels.org",

  /** Variant ID for this branch — set per branch. Default 'main' before checkout. */
  variantId: process.env.NEXT_PUBLIC_VARIANT_ID || "main",

  contact: {
    name: "Vivek Aggarwal",
    designation: "Proprietor",
    phone: "+91 98100 27078",
    phoneRaw: "+919810027078",
    /** WhatsApp number — owner's personal line. Use prefilled message; do NOT expose as generic contact. */
    whatsapp: "919810027078",
    /** NO email — WhatsApp and phone only. Do not add email fields. */
    address: {
      street: "8, Loha Mandi",
      area: "Bulandshahar Industrial Area",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      pincode: "201009",
      country: "India",
    },
    hours: "Mon – Sat · 9:00 AM – 7:00 PM",
    /** Maps link to address — pre-encoded */
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=8%2C+Loha+Mandi%2C+Bulandshahar+Industrial+Area%2C+Ghaziabad%2C+Uttar+Pradesh+201009",
  },

  trust: {
    rungtaAuthorizedSince: "2018",
    /** Service area: Delhi-NCR and Uttar Pradesh only. NOT Uttarakhand. */
    serviceArea: "Delhi NCR · Uttar Pradesh",
    monthlyCapacity: "10,000+ MT",
    projectsSupplied: "500+",
    yearsInBusiness: "20+",
    certifications: ["IS 1786:2008"],
  },

  /** Rungta TMT product range — stocked grades only. NO Fe 550D. */
  products: [
    {
      grade: "Fe 500",
      label: "Fe 500",
      description:
        "General-purpose construction grade. Excellent strength-to-weight ratio, ideal for residential and commercial structures.",
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

  /**
   * Prefilled WhatsApp inquiry template — structured to filter casual browsers.
   * Owner's personal line: present as "Bulk & trade inquiries".
   */
  whatsappTemplate:
    "Hi Premier Steels, Rungta TMT inquiry — Grade: ___ , Quantity (MT): ___ , Delivery location: ___",
} as const;

/**
 * Returns a WhatsApp click-to-chat URL with a prefilled message.
 * Defaults to the structured inquiry template that filters casual browsers.
 * Pass a custom message for product-specific CTAs.
 *
 * @example
 * whatsappUrl()
 * // → "https://wa.me/919810027078?text=Hi+Premier+Steels%2C+Rungta+TMT..."
 *
 * @example
 * whatsappUrl("Hi, I need Fe 500D 12mm — Quantity: 50 MT — Delhi delivery")
 */
export function whatsappUrl(message?: string): string {
  const text = message ?? site.whatsappTemplate;
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
