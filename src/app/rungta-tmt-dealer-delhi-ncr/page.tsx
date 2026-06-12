import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { MapPin, ShieldCheck, FileText, Truck, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Authorized Rungta TMT Dealer Delhi NCR — Premier Steels",
  description:
    "Premier Steels is an authorized Rungta Steel TMT bar distributor serving Delhi NCR and UP since 2018. Fe 500, Fe 500D, Fe 550 with mill test certificates. WhatsApp for bulk rates.",
  alternates: {
    canonical: `${site.url}/rungta-tmt-dealer-delhi-ncr`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Authorized Rungta TMT Bar Dealer in Delhi NCR — Premier Steels",
    description:
      "Premier Steels — authorized Rungta Steel distributor since 2018. Fe 500, Fe 500D, Fe 550, 8–32 mm. Mill test certificate with every consignment. Serving Delhi NCR & UP.",
    url: `${site.url}/rungta-tmt-dealer-delhi-ncr`,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
};

/* ─── Structured data ─────────────────────────────────────────────────────── */

function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/rungta-tmt-dealer-delhi-ncr#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    description:
      "Authorized Rungta Steel TMT bar distributor for Delhi NCR and Uttar Pradesh. Supplying Fe 500, Fe 500D, Fe 550 grades (8–32 mm) since 2018.",
    url: `${site.url}/rungta-tmt-dealer-delhi-ncr`,
    telephone: site.contact.phoneRaw,
    openingHours: "Mo-Sa 09:00-19:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.contact.address.street}, ${site.contact.address.area}`,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.state,
      postalCode: site.contact.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6664,
      longitude: 77.4381,
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Gurugram" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "City", name: "Greater Noida" },
      { "@type": "City", name: "Meerut" },
      { "@type": "City", name: "Agra" },
      { "@type": "City", name: "Lucknow" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rungta Steel TMT Bars",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Rungta Fe 500 TMT Bar",
            description:
              "IS 1786:2008 certified. Sizes 8–32 mm. Mill test certificate included.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Rungta Fe 500D TMT Bar",
            description:
              "Ductile grade. Higher elongation for seismic zones. IS 1786:2008. Sizes 8–32 mm.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Rungta Fe 550 TMT Bar",
            description:
              "High-strength grade. IS 1786:2008. Sizes 8–32 mm. For heavy-load structures.",
          },
        },
      ],
    },
    foundingDate: "2004",
    founder: {
      "@type": "Person",
      name: site.contact.name,
      jobTitle: site.contact.designation,
    },
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, Cheque",
  };
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Authorized Rungta TMT Dealer Delhi NCR",
        item: `${site.url}/rungta-tmt-dealer-delhi-ncr`,
      },
    ],
  };
}

/* ─── Content data ────────────────────────────────────────────────────────── */

type ProductEntry = {
  grade: string;
  yieldStrength: string;
  elongation: string;
  bestFor: string;
  note: string;
  sizes: string;
  featured?: boolean;
};

const PRODUCTS: ProductEntry[] = [
  {
    grade: "Fe 500",
    yieldStrength: "500 N/mm²",
    elongation: "12% min",
    bestFor: "Houses, apartments, commercial buildings",
    note: "Standard grade for most RCC work",
    sizes: "8 mm – 32 mm",
  },
  {
    grade: "Fe 500D",
    yieldStrength: "500 N/mm²",
    elongation: "16% min",
    bestFor: "Seismic zones, bridges, high-rises",
    note: "Mandatory in earthquake zones per IS 13920",
    sizes: "8 mm – 32 mm",
    featured: true,
  },
  {
    grade: "Fe 550",
    yieldStrength: "550 N/mm²",
    elongation: "10% min",
    bestFor: "Industrial structures, heavy-load projects",
    note: "Reduces steel quantity ~10% vs Fe 500 in equivalent designs",
    sizes: "8 mm – 32 mm",
  },
];

const SERVICE_AREAS = [
  { region: "Delhi NCR", cities: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad", "Greater Noida", "Baghpat"] },
  { region: "Western UP", cities: ["Meerut", "Hapur", "Muzaffarnagar", "Shamli", "Bulandshahr", "Aligarh"] },
  { region: "Central & East UP", cities: ["Agra", "Mathura", "Firozabad", "Etawah", "Kanpur", "Lucknow"] },
];

const FAQ_ITEMS = [
  {
    question: "Is Premier Steels an authorized Rungta Steel dealer?",
    answer:
      "Yes. Premier Steels has been an authorized Rungta Steel distributor since 2018. We supply directly from Rungta's mills — the same stock, the same grade certification, no third-party sourcing. Every consignment comes with a Rungta Steel mill test certificate.",
  },
  {
    question: "Which areas does Premier Steels supply Rungta TMT bars to?",
    answer:
      "We supply across Delhi NCR (Delhi, Noida, Gurugram, Faridabad, Ghaziabad, Greater Noida) and Uttar Pradesh — including Meerut, Hapur, Muzaffarnagar, Bulandshahr, Aligarh, Agra, Mathura, Kanpur, and Lucknow. Same-day dispatch within Ghaziabad; next-day to Delhi NCR; scheduled delivery to other UP locations.",
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "Minimum for door delivery is typically 5 MT. For ex-yard pickup at our Ghaziabad yard at Loha Mandi, there is no minimum. WhatsApp us with your grade, quantity, and location to confirm availability and delivery terms.",
  },
  {
    question: "Do I get a mill test certificate with my order?",
    answer:
      "Yes — without exception. A Rungta Steel mill test certificate accompanies every consignment. The certificate confirms grade (Fe 500 / Fe 500D / Fe 550), yield strength, ultimate tensile strength, elongation %, and chemical composition — all per IS 1786:2008. You can verify the certificate against the heat number on the bars.",
  },
  {
    question: "Why should I buy from an authorized dealer instead of a mandi trader?",
    answer:
      "Mandi traders source from multiple mills and may mix grades or sell re-rolled bars as original Rungta stock. An authorized distributor like Premier Steels receives consignments directly from Rungta's mills with traceable heat numbers, original mill test certificates, and factory-aligned pricing. If a structural failure investigation ever traces back to material, the authorized chain protects you.",
  },
  {
    question: "What grades and sizes are available?",
    answer:
      "We stock Rungta Fe 500, Fe 500D, and Fe 550 in 8 mm, 10 mm, 12 mm, 16 mm, 20 mm, 25 mm, 28 mm, and 32 mm. All grades conform to IS 1786:2008. We do not stock Fe 550D — if a supplier claims to sell it, ask for the mill certificate before accepting.",
  },
];

const ORDER_STEPS = [
  {
    step: "01",
    title: "Send your requirement on WhatsApp",
    body: "Message us the grade (Fe 500 / Fe 500D / Fe 550), quantity in MT, size(s), and delivery location. No call needed to start.",
  },
  {
    step: "02",
    title: "Get a locked-in price within minutes",
    body: "Vivek Aggarwal responds personally with today's rate, per-MT total, and delivery date — in writing, on WhatsApp. No verbal commitments.",
  },
  {
    step: "03",
    title: "Confirm and we dispatch",
    body: "Confirm the order. We dispatch from our Ghaziabad yard with Rungta's mill test certificate included. Same-day for Ghaziabad; next-day for Delhi NCR.",
  },
];

/* ─── Page component ──────────────────────────────────────────────────────── */

export default function DealerDelhiNCRPage() {
  const ctaMessage =
    "Hi Premier Steels, I need Rungta TMT — Grade: ___ , Quantity (MT): ___ , Delivery location (Delhi/NCR/UP): ___";

  return (
    <>
      <SiteHeader />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd()) }}
      />

      <main className="flex-1">
        <div className="container-page py-12 lg:py-16 max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-text-muted"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span aria-hidden className="text-text-subtle">/</span>
            <span className="text-text-subtle">Rungta TMT Dealer Delhi NCR</span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 max-w-3xl">
            Authorized Rungta TMT Bar Dealer in{" "}
            <span className="text-accent">Delhi NCR</span>
          </h1>

          {/* Author + date */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
            <span>
              <span className="font-semibold text-foreground">Premier Steels</span>{" "}
              — Authorized Rungta Distributor, Ghaziabad
            </span>
            <span aria-hidden className="text-text-subtle hidden sm:inline">·</span>
            <time dateTime="2026-06-12" className="text-text-subtle">
              Last updated: 12 June 2026
            </time>
          </div>

          {/* ── SECTION 1: Authorization statement ────────────────────────── */}
          <section aria-labelledby="authorization-heading" className="mt-12">
            <h2 id="authorization-heading" className="text-h2">
              Premier Steels — Authorized Rungta Steel Distributor Since 2018
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              Premier Steels, based at Loha Mandi in Ghaziabad, has been an
              authorized distributor of Rungta Steel TMT bars for{" "}
              <strong className="text-foreground">Delhi, NCR and Uttar Pradesh</strong>{" "}
              since 2018. Proprietor Vivek Aggarwal runs the yard directly — no
              middlemen, no sub-dealers, no re-rolled stock.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              If you search &ldquo;authorized Rungta distributor near me&rdquo; or
              &ldquo;Rungta Steel dealer Delhi NCR&rdquo; today, Rungta&apos;s own
              website does not list its dealers publicly. This page exists to fill
              that gap with verified, checkable facts about what authorized
              distribution actually means for you as a buyer.
            </p>

            {/* What authorization means */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-foreground">Genuine mill stock</h3>
                    <p className="mt-1 text-sm text-text-muted">
                      Every bundle comes directly from Rungta&apos;s rolling mills with
                      a traceable heat number. No secondary market sourcing, no grade
                      mixing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-foreground">Mill test certificate per consignment</h3>
                    <p className="mt-1 text-sm text-text-muted">
                      A Rungta Steel mill test certificate accompanies every delivery —
                      not on request, not for large orders only. Every consignment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-foreground">Factory-linked pricing</h3>
                    <p className="mt-1 text-sm text-text-muted">
                      Our prices track Rungta&apos;s mill ex-works rate. No inflated
                      trader margins. Volume buyers get rates that reflect actual
                      factory pricing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden />
                  <div>
                    <h3 className="font-semibold text-foreground">Direct access to the proprietor</h3>
                    <p className="mt-1 text-sm text-text-muted">
                      Vivek Aggarwal handles bulk inquiries personally on WhatsApp.
                      No call centre, no junior sales staff quoting guesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "Since 2018", label: "Authorized Rungta distributor" },
                { value: "20+ yrs", label: "In business" },
                { value: "10,000+ MT", label: "Monthly capacity" },
                { value: "500+ projects", label: "Supplied" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface p-5 text-center"
                >
                  <div className="font-display text-2xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 2: Products ───────────────────────────────────────── */}
          <section aria-labelledby="products-heading" className="mt-14">
            <h2 id="products-heading" className="text-h2">
              Rungta TMT Bars — Grades We Stock
            </h2>
            <p className="mt-3 text-sm text-text-muted">
              All grades: IS 1786:2008 certified · Sizes 8 mm to 32 mm ·
              Mill test certificate with every consignment
            </p>
            <div className="mt-6 space-y-4">
              {PRODUCTS.map((p) => (
                <div
                  key={p.grade}
                  className={[
                    "rounded-xl border bg-surface p-6",
                    p.featured
                      ? "border-accent/50 ring-1 ring-accent/20"
                      : "border-border",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-xl font-bold text-foreground">
                          {p.grade}
                        </span>
                        {p.featured && (
                          <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                            Most specified
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-text-muted">{p.note}</p>
                    </div>
                    <div className="text-right text-xs text-text-muted">
                      <div>Yield strength: <span className="text-foreground font-mono">{p.yieldStrength}</span></div>
                      <div>Elongation: <span className="text-foreground font-mono">{p.elongation}</span></div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-6 text-sm text-text-muted">
                    <div>
                      <span className="font-semibold text-foreground">Best for: </span>
                      {p.bestFor}
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Sizes: </span>
                      {p.sizes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-text-muted">
              We do not stock Fe 550D. If another supplier claims to sell Rungta Fe
              550D, ask for the mill test certificate before accepting.
            </p>
          </section>

          {/* ── SECTION 3: Service area ───────────────────────────────────── */}
          <section aria-labelledby="service-area-heading" className="mt-14">
            <h2 id="service-area-heading" className="text-h2">
              Service Area — Delhi NCR &amp; Uttar Pradesh
            </h2>
            <p className="mt-3 text-text-muted leading-relaxed">
              We operate from our yard at{" "}
              <a
                href={site.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                8, Loha Mandi, Bulandshahar Industrial Area, Ghaziabad
              </a>
              . Delivery reach covers:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area.region}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-accent flex-shrink-0" aria-hidden />
                    <h3 className="font-semibold text-foreground text-sm">
                      {area.region}
                    </h3>
                  </div>
                  <ul className="space-y-1">
                    {area.cities.map((city) => (
                      <li key={city} className="text-sm text-text-muted">
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-border bg-surface/50 px-5 py-4 text-sm text-text-muted">
              <p>
                <span className="font-semibold text-foreground">Delivery timeline:</span>{" "}
                Same-day dispatch within Ghaziabad. Next-day to Delhi NCR (Delhi,
                Noida, Gurugram, Faridabad). Scheduled delivery to other UP
                locations — confirm timeline when placing your order.
              </p>
            </div>
          </section>

          {/* ── SECTION 4: Authorized dealer vs mandi trader ─────────────── */}
          <section aria-labelledby="why-authorized-heading" className="mt-14">
            <h2 id="why-authorized-heading" className="text-h2">
              Authorized Dealer vs Mandi Trader — What Actually Differs
            </h2>
            <p className="mt-3 text-text-muted leading-relaxed">
              Most buyers in Delhi NCR and UP buy TMT bars from whoever quotes the
              lowest price that day. Here is what that trade-off looks like in
              practice:
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Factor
                    </th>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-accent">
                      Authorized distributor
                    </th>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Mandi / open-market trader
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {[
                    {
                      factor: "Stock origin",
                      authorized: "Direct from Rungta mills — traceable heat number",
                      mandi: "Multiple mills; secondary market possible",
                    },
                    {
                      factor: "Mill test certificate",
                      authorized: "Every consignment — no exceptions",
                      mandi: "Available on request, may be for a different batch",
                    },
                    {
                      factor: "Grade consistency",
                      authorized: "What the certificate says is what you get",
                      mandi: "Grade mixing is common at market yards",
                    },
                    {
                      factor: "Pricing",
                      authorized: "Factory-linked — tracks mill ex-works rate",
                      mandi: "Depends on trader margins and stock age",
                    },
                    {
                      factor: "Accountability",
                      authorized: "Traceable to mill heat number if issues arise",
                      mandi: "Hard to trace; no documented supply chain",
                    },
                  ].map((row) => (
                    <tr key={row.factor} className="hover:bg-surface/40 transition-colors">
                      <td className="px-5 py-4 font-semibold text-foreground align-top">
                        {row.factor}
                      </td>
                      <td className="px-5 py-4 text-foreground align-top">
                        {row.authorized}
                      </td>
                      <td className="px-5 py-4 text-text-muted align-top">
                        {row.mandi}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              For a house or apartment where the buyer will live in it, or a
              commercial building under structural engineer supervision, the
              paperwork trail matters. An authorized dealer is the only way to
              maintain it end-to-end.
            </p>
          </section>

          {/* ── SECTION 5: How to order ───────────────────────────────────── */}
          <section aria-labelledby="how-to-order-heading" className="mt-14">
            <h2 id="how-to-order-heading" className="text-h2">
              How to Order on WhatsApp — 3 Steps
            </h2>
            <p className="mt-3 text-text-muted">
              No forms. No calls needed to start. WhatsApp only for bulk and
              trade inquiries.
            </p>
            <div className="mt-6 space-y-4">
              {ORDER_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-5 rounded-xl border border-border bg-surface p-6"
                >
                  <div className="flex-shrink-0 font-display text-3xl font-bold text-accent/40">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-text-muted">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 px-5 py-4 text-sm text-text-muted">
              <p>
                <span className="font-semibold text-accent">Message template:</span>{" "}
                <span className="font-mono text-foreground">
                  &ldquo;Hi Premier Steels, Rungta TMT inquiry — Grade: ___ , Quantity (MT): ___ , Delivery location: ___&rdquo;
                </span>
              </p>
              <p className="mt-1">
                Sending a structured message gets you a confirmed rate faster.
                Business hours: Mon–Sat 9 AM–7 PM.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <WhatsAppCta
                message={ctaMessage}
                label="WhatsApp Your Inquiry Now"
              />
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="plausible-event-name=call_click inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-foreground/40"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.contact.phone}
              </a>
            </div>
          </section>

          {/* ── Internal links ────────────────────────────────────────────── */}
          <section aria-labelledby="related-heading" className="mt-14">
            <h2 id="related-heading" className="text-h2">Related Information</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>
                <Link
                  href="/rungta-tmt-price-today"
                  className="text-accent hover:underline"
                >
                  Rungta TMT price today — Delhi NCR &amp; UP
                </Link>{" "}
                — Today&apos;s indicative Fe 500, Fe 500D, Fe 550 rate ranges per
                kg.
              </li>
              <li>
                <Link
                  href="/rungta-fe-500d-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 500D TMT bars
                </Link>{" "}
                — Ductile grade; why structural engineers specify it for seismic
                zones.
              </li>
              <li>
                <Link
                  href="/rungta-fe-550-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 550 TMT bars
                </Link>{" "}
                — High-strength grade for industrial and heavy-load structures.
              </li>
              <li>
                <Link href="/" className="text-accent hover:underline">
                  Premier Steels — home
                </Link>{" "}
                — Overview of our Ghaziabad yard and full product range.
              </li>
            </ul>
          </section>

          {/* ── SECTION 6: FAQ ────────────────────────────────────────────── */}
          <section aria-labelledby="faq-heading" className="mt-14">
            <h2 id="faq-heading" className="text-h2">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-3">
              {FAQ_ITEMS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border bg-surface p-5 open:border-accent/40"
                >
                  <summary className="cursor-pointer list-none font-semibold text-foreground group-open:text-accent">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ── Closing WhatsApp CTA ──────────────────────────────────────── */}
          <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-xl font-bold text-foreground">
              Need Rungta TMT bars in Delhi NCR or UP?
            </p>
            <p className="mt-2 text-sm text-text-muted">
              WhatsApp your grade, quantity, and delivery location. Vivek
              Aggarwal responds personally with a confirmed rate.
              Mon–Sat 9 AM–7 PM.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta
                message={ctaMessage}
                label="WhatsApp Bulk Inquiry"
              />
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
