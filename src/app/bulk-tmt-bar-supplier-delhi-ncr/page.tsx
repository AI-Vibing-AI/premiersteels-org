import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const metadata: Metadata = {
  title: "Bulk TMT Bar Supplier Delhi NCR — Premier Steels",
  description:
    "Bulk Rungta TMT bar supplier in Delhi NCR and Uttar Pradesh. 10 MT to full truckloads. GST invoice, mill TC, weighbridge slip. WhatsApp for same-day bulk rate.",
  alternates: {
    canonical: `${site.url}/bulk-tmt-bar-supplier-delhi-ncr`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Bulk TMT Bar Supplier Delhi NCR — 10 MT to Full Truckloads",
    description:
      "Authorized Rungta Steel distributor in Ghaziabad. 10,000+ MT monthly capacity. Truckload delivery to Delhi NCR and UP. GST invoice, mill TC, weighbridge slip with every consignment.",
    url: `${site.url}/bulk-tmt-bar-supplier-delhi-ncr`,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is the minimum order quantity for bulk supply?",
    answer:
      "We handle orders from 10 MT upward. A single truckload is typically 20–25 MT depending on bar diameter and mix of sizes. For ex-yard pickup at our Ghaziabad yard, smaller quantities are possible — WhatsApp us to discuss your specific requirement.",
  },
  {
    question: "How is bulk pricing determined?",
    answer:
      "Bulk pricing is confirmed on the day of order via WhatsApp. The rate depends on grade (Fe 500, Fe 500D, Fe 550), total quantity in MT, size mix, delivery location, and market movement that day. We do not publish a live board rate — steel prices move daily with iron ore and scrap indices. WhatsApp your grade and tonnage and we will send a firm quote within the hour during business hours.",
  },
  {
    question: "Can I book a truckload delivery to my casting date?",
    answer:
      "Yes. Share your casting schedule on WhatsApp and we will co-ordinate dispatch so material arrives the day before or morning of your pour. Same-day delivery within Ghaziabad is standard. Delhi NCR deliveries are typically next-day from order confirmation. For sites further in UP, delivery timeline depends on distance — discuss at order time.",
  },
  {
    question: "What documents come with a bulk consignment?",
    answer:
      "Every consignment ships with: (1) GST tax invoice with HSN code and 18% GST line-item, (2) Rungta Steel mill test certificate for the specific heat number — verifying grade, yield strength, elongation, and chemistry per IS 1786:2008, (3) weighbridge slip from our licensed weighbridge showing gross, tare, and net weight. No documents are optional — all three travel with the truck.",
  },
  {
    question: "Do you supply to project sites across UP beyond Ghaziabad?",
    answer:
      "Yes. Premier Steels is the authorized Rungta Steel distributor for Delhi NCR and Uttar Pradesh. We have supplied to project sites across Noida, Greater Noida, Faridabad, Gurugram, Meerut, Agra, Lucknow, and other UP locations. Delivery timeline and transport logistics are discussed at order time based on your site address.",
  },
  {
    question: "Can I mix grades and sizes in one truck?",
    answer:
      "Yes, subject to a minimum per-SKU quantity of 2 MT to keep documentation clean. Mixed truckloads — e.g., 12 MT Fe 500D 16mm + 10 MT Fe 500 12mm — are common for residential projects. Specify your mix on WhatsApp and we will confirm availability and pricing.",
  },
  {
    question: "Is GST input credit available on your invoices?",
    answer:
      "Yes. Premier Steels is GST-registered. All invoices carry our GSTIN and the correct HSN code for TMT bars (7214 10 10). Your purchase manager can claim full ITC (18% GST) against these invoices in the normal course. Share your company GSTIN on WhatsApp at order time so we generate the invoice correctly.",
  },
  {
    question: "How do I verify that the material is genuine Rungta Steel?",
    answer:
      "Each bar carries the Rungta Steel rolling mark. The mill test certificate we supply is issued by Rungta Steel's own quality lab and carries the heat number traceable to the specific rolling batch. If you require an independent third-party test, you are welcome to pick samples from the delivery and send them to any NABL-accredited lab — we will hold the truck until you are satisfied.",
  },
];

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
        name: "Bulk TMT Bar Supplier Delhi NCR",
        item: `${site.url}/bulk-tmt-bar-supplier-delhi-ncr`,
      },
    ],
  };
}

const BULK_CTA_MESSAGE =
  "Hi Premier Steels, bulk TMT inquiry — Grade: ___ , Quantity (MT): ___ , Delivery location: ___";

/* ─── Stat card ──────────────────────────────────────────────────────────── */

function StatCard({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <p className="font-display text-3xl font-bold text-accent">{value}</p>
      <p className="mt-1 font-semibold text-foreground">{label}</p>
      {sub && <p className="mt-1 text-xs text-text-muted">{sub}</p>}
    </div>
  );
}

/* ─── Doc badge ──────────────────────────────────────────────────────────── */

function DocBadge({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-4">
      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-accent/50 text-accent text-xs font-bold">
        ✓
      </span>
      <div>
        <p className="font-semibold text-foreground text-sm">{label}</p>
        <p className="mt-0.5 text-xs text-text-muted">{detail}</p>
      </div>
    </div>
  );
}

/* ─── Grade row ──────────────────────────────────────────────────────────── */

function GradeRow({
  grade,
  use,
  sizes,
}: {
  grade: string;
  use: string;
  sizes: string;
}) {
  return (
    <tr className="hover:bg-surface/50 transition-colors">
      <td className="px-5 py-4 font-display font-bold text-accent">{grade}</td>
      <td className="px-5 py-4 text-sm text-foreground">{use}</td>
      <td className="px-5 py-4 text-sm text-text-muted font-mono">{sizes}</td>
    </tr>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function BulkTmtBarSupplierPage() {
  return (
    <>
      <SiteHeader />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbJsonLd()),
        }}
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
            <span aria-hidden className="text-text-subtle">
              /
            </span>
            <span className="text-text-subtle">Bulk TMT Bar Supplier Delhi NCR</span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 max-w-3xl">
            Bulk TMT Bar Supplier —{" "}
            <span className="text-accent">Delhi NCR &amp; UP</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
            <span>
              <span className="font-semibold text-foreground">
                Premier Steels
              </span>{" "}
              — Authorized Rungta Steel Distributor, Ghaziabad
            </span>
            <span aria-hidden className="text-text-subtle">
              ·
            </span>
            <span className="text-text-subtle">Last updated: June 12, 2026</span>
          </div>

          {/* Intro */}
          <p className="mt-8 text-lg text-text-muted leading-relaxed">
            Premier Steels is the authorized{" "}
            <Link
              href="/rungta-tmt-dealer-delhi-ncr"
              className="text-accent hover:underline"
            >
              Rungta Steel distributor in Delhi NCR
            </Link>{" "}
            and Uttar Pradesh operating from our Ghaziabad yard at Loha Mandi.
            We handle bulk TMT bar orders from 10 MT through to full truckloads,
            serving contractors, builders, and project purchase managers who need
            material on time, with clean documentation, at a price confirmed the
            day of order.
          </p>

          {/* ── Capacity section ─────────────────────────────────────────── */}
          <section className="mt-14" aria-labelledby="capacity-heading">
            <h2
              id="capacity-heading"
              className="text-h2"
            >
              Capacity &amp; throughput
            </h2>
            <p className="mt-3 text-text-muted">
              Our yard handles 10,000+ MT per month — enough to supply multiple
              large residential or infrastructure projects simultaneously without
              one project crowding out another.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard
                value="10,000+ MT"
                label="Monthly capacity"
                sub="Across Delhi NCR and UP"
              />
              <StatCard
                value="Since 2018"
                label="Authorized Rungta distributor"
                sub="Rungta-certified supply chain"
              />
              <StatCard
                value="500+ projects"
                label="Consignments supplied"
                sub="Residential, commercial, infra"
              />
              <StatCard
                value="20+ years"
                label="In the steel trade"
                sub="Deep NCR and UP market reach"
              />
            </div>

            <div className="mt-6 rounded-lg border border-border bg-surface/50 px-5 py-4 text-sm text-text-muted">
              <p>
                <span className="font-semibold text-foreground">
                  Order size range:
                </span>{" "}
                10 MT minimum for delivered orders. A standard truckload (
                <span className="text-foreground font-medium">
                  single axle: ~9–10 MT · multi-axle: 20–25 MT
                </span>
                ) is the most efficient unit for delivery to project sites.
                Ex-yard pickup can be smaller — discuss with us on WhatsApp.
              </p>
            </div>
          </section>

          {/* ── Truckload logistics section ──────────────────────────────── */}
          <section className="mt-14" aria-labelledby="logistics-heading">
            <h2 id="logistics-heading" className="text-h2">
              Truckload logistics &amp; delivery scheduling
            </h2>
            <p className="mt-3 text-text-muted">
              For casting-day deliveries, timing is everything. Here is how
              truckload supply works with Premier Steels:
            </p>

            <ol className="mt-6 space-y-4">
              {[
                {
                  step: "1",
                  title: "WhatsApp your requirement",
                  body: "Share grade, quantity in MT, size mix (e.g., 16mm + 12mm), delivery address, and your target date. We confirm availability and the day's rate within business hours.",
                },
                {
                  step: "2",
                  title: "Rate confirmation",
                  body: "Bulk pricing is confirmed day-of. Steel prices fluctuate with iron ore and scrap; confirming on the day of dispatch keeps you protected from rate movement between inquiry and invoice. We send the confirmed rate via WhatsApp before loading.",
                },
                {
                  step: "3",
                  title: "Loading and dispatch",
                  body: "Material is loaded at our Loha Mandi yard, weighed on our weighbridge, and dispatched. The weighbridge slip, mill TC, and GST invoice travel with the truck driver.",
                },
                {
                  step: "4",
                  title: "Delivery timelines",
                  body: "Same-day delivery within Ghaziabad (order confirmed before noon). Next-day to Delhi NCR sites. UP locations beyond NCR — timeline confirmed at order time based on site address and truck availability.",
                },
                {
                  step: "5",
                  title: "Site unloading",
                  body: "Trucks arrive with all documents. Your site engineer or store keeper verifies the weighbridge slip and mill TC against the invoice before unloading. We do not require advance payment before the truck arrives — payment terms are agreed at order.",
                },
              ].map(({ step, title, body }) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-xl border border-border bg-surface p-5"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 font-display font-bold text-accent text-sm">
                    {step}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Documentation section ────────────────────────────────────── */}
          <section className="mt-14" aria-labelledby="docs-heading">
            <h2 id="docs-heading" className="text-h2">
              Documentation with every consignment
            </h2>
            <p className="mt-3 text-text-muted">
              Three documents travel with every truck — no exceptions. These are
              the documents your purchase manager, site engineer, and auditors
              will need.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <DocBadge
                label="GST Tax Invoice"
                detail="GSTIN-compliant invoice with HSN code (7214 10 10) and 18% GST line-item. Eligible for full ITC. Issued in your company name — share your GSTIN at order time."
              />
              <DocBadge
                label="Rungta Steel Mill Test Certificate"
                detail="Issued by Rungta Steel's quality lab for the specific heat number. Certifies grade, yield strength, elongation, and chemical composition per IS 1786:2008. Heat number on TC matches the rolling marks on bars."
              />
              <DocBadge
                label="Weighbridge Slip"
                detail="Gross, tare, and net weight from our licensed weighbridge. Net weight on slip is the quantity invoiced. Resolves any site-level weight dispute at unloading."
              />
            </div>

            <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 px-5 py-4 text-sm text-text-muted">
              <p>
                <span className="font-semibold text-accent">
                  Why this matters for contractors:
                </span>{" "}
                Auditors, banks financing your project, and government clients
                all require IS 1786:2008-certified material with traceable mill
                certificates. Buying through a documented authorized distributor
                protects you from grade substitution disputes and facilitates
                smooth project sign-off.
              </p>
            </div>
          </section>

          {/* ── Grades section ───────────────────────────────────────────── */}
          <section className="mt-14" aria-labelledby="grades-heading">
            <h2 id="grades-heading" className="text-h2">
              Grades available for bulk supply
            </h2>
            <p className="mt-3 text-text-muted">
              We stock three Rungta Steel TMT grades in sizes 8 mm to 32 mm,
              IS 1786:2008. See{" "}
              <Link
                href="/rungta-tmt-price-today"
                className="text-accent hover:underline"
              >
                today&apos;s indicative Rungta TMT price
              </Link>{" "}
              for rate ranges; exact bulk rate is confirmed on WhatsApp.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="border-b border-border bg-surface">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Grade
                    </th>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Best suited for
                    </th>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Sizes stocked
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  <GradeRow
                    grade="Fe 500"
                    use="Residential housing, G+4 apartments, commercial buildings — general structural use"
                    sizes="8–32 mm"
                  />
                  <GradeRow
                    grade="Fe 500D"
                    use="Seismic zones, high-rises, bridges — where higher elongation is specified or IS 13920 applies"
                    sizes="8–32 mm"
                  />
                  <GradeRow
                    grade="Fe 550"
                    use="Heavy industrial structures, large spans — reduces steel quantity ~10% vs Fe 500 in equivalent designs"
                    sizes="8–32 mm"
                  />
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-text-muted">
              Not sure which grade your structural engineer has specified?{" "}
              <Link
                href="/rungta-tmt-dealer-delhi-ncr"
                className="text-accent hover:underline"
              >
                Read our grade guide
              </Link>{" "}
              or WhatsApp us the drawing note — we will confirm the correct grade
              to order.
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-text-muted">
              <span>
                <Link
                  href="/rungta-fe-500d-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 500D TMT bars →
                </Link>
              </span>
              <span>
                <Link
                  href="/rungta-fe-550-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 550 TMT bars →
                </Link>
              </span>
            </div>
          </section>

          {/* ── Service area ─────────────────────────────────────────────── */}
          <section className="mt-14" aria-labelledby="service-area-heading">
            <h2 id="service-area-heading" className="text-h2">
              Service area
            </h2>
            <p className="mt-3 text-text-muted">
              We dispatch from our yard at{" "}
              <span className="text-foreground font-medium">
                8, Loha Mandi, Bulandshahar Industrial Area, Ghaziabad, UP
                201009
              </span>
              . Covered areas:
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  region: "Ghaziabad",
                  detail:
                    "Same-day dispatch on orders confirmed before noon. Multiple drops per day within the city.",
                },
                {
                  region: "Delhi NCR",
                  detail:
                    "Noida, Greater Noida, Delhi, Faridabad, Gurugram — typically next-day from order confirmation.",
                },
                {
                  region: "Western UP",
                  detail:
                    "Meerut, Hapur, Bulandshahar, Aligarh and surrounding districts — scheduled dispatch, timeline at order.",
                },
                {
                  region: "UP (further districts)",
                  detail:
                    "Agra, Lucknow, Kanpur, Mathura and other UP locations — confirm delivery timeline and transport cost on WhatsApp before ordering.",
                },
              ].map(({ region, detail }) => (
                <div
                  key={region}
                  className="rounded-lg border border-border bg-surface/60 px-5 py-4"
                >
                  <p className="font-semibold text-foreground text-sm">
                    {region}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">{detail}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-text-muted">
              We do <strong className="text-foreground">not</strong> currently
              serve Uttarakhand. Delivery beyond UP borders is not available.
            </p>
          </section>

          {/* ── How bulk pricing works ────────────────────────────────────── */}
          <section className="mt-14" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="text-h2">
              How bulk pricing works
            </h2>
            <p className="mt-3 text-text-muted">
              Bulk TMT pricing is not listed on a rate board because steel prices
              move every market day with iron ore, scrap, and demand signals from
              the construction sector. Here is how the pricing process works at
              Premier Steels:
            </p>

            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent font-bold flex-shrink-0">—</span>
                <p>
                  <span className="font-semibold text-foreground">
                    Day-of confirmation:
                  </span>{" "}
                  Rate is confirmed on the day of dispatch, not the day of
                  inquiry. This protects both sides against market movement
                  between booking and loading.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent font-bold flex-shrink-0">—</span>
                <p>
                  <span className="font-semibold text-foreground">
                    Quantity discount:
                  </span>{" "}
                  Larger tonnage orders get better rates. A 50 MT order prices
                  differently from a 10 MT order. Share your full requirement so
                  we quote the correct tier.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent font-bold flex-shrink-0">—</span>
                <p>
                  <span className="font-semibold text-foreground">
                    All prices ex-GST:
                  </span>{" "}
                  Quoted rates are excluding GST (18%). Your invoice will show
                  base price + GST separately for full ITC eligibility.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-accent font-bold flex-shrink-0">—</span>
                <p>
                  <span className="font-semibold text-foreground">
                    Indicative budget ranges:
                  </span>{" "}
                  Fe 500 ₹52–58/kg · Fe 500D ₹54–60/kg · Fe 550 ₹56–63/kg (all
                  ex-GST). For project budgeting only — see{" "}
                  <Link
                    href="/rungta-tmt-price-today"
                    className="text-accent hover:underline"
                  >
                    today&apos;s Rungta TMT price
                  </Link>{" "}
                  or WhatsApp for the exact daily rate.
                </p>
              </li>
            </ul>

            <div className="mt-6 rounded-lg border border-border bg-surface/50 px-5 py-4 text-sm text-text-muted">
              <p>
                <span className="font-semibold text-foreground">
                  Disclaimer:
                </span>{" "}
                Indicative price ranges shown are ex-GST and based on typical
                market conditions. Actual rates depend on grade, quantity,
                delivery location, payment terms, and daily market movement.
                Always confirm the exact rate on WhatsApp before placing your
                order.
              </p>
            </div>
          </section>

          {/* ── Mid-page WhatsApp CTA ─────────────────────────────────────── */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-xl font-bold text-foreground">
              Bulk &amp; trade inquiries — WhatsApp Vivek Aggarwal directly
            </p>
            <p className="mt-2 text-sm text-text-muted">
              Send your grade, quantity in MT, and delivery location. Rate
              confirmed within business hours (Mon–Sat, 9 AM–7 PM). This is the
              owner&apos;s personal line — your inquiry goes straight to the
              decision-maker.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta
                message={BULK_CTA_MESSAGE}
                label="WhatsApp Your Bulk Requirement"
              />
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Or call:{" "}
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="text-foreground font-medium hover:text-accent transition-colors plausible-event-name=call_click"
              >
                {site.contact.phone}
              </a>{" "}
              · {site.contact.hours}
            </p>
          </div>

          {/* ── Internal links ────────────────────────────────────────────── */}
          <div className="mt-12">
            <h2 className="text-h2">Related pages</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>
                <Link
                  href="/rungta-tmt-price-today"
                  className="text-accent hover:underline"
                >
                  Rungta TMT price today
                </Link>{" "}
                — Indicative daily rate ranges for Fe 500, Fe 500D, Fe 550.
              </li>
              <li>
                <Link
                  href="/rungta-tmt-dealer-delhi-ncr"
                  className="text-accent hover:underline"
                >
                  Authorized Rungta TMT dealer in Delhi NCR
                </Link>{" "}
                — How to verify authorized Rungta distributors and what that
                means for your project.
              </li>
              <li>
                <Link
                  href="/rungta-fe-500d-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 500D TMT bars
                </Link>{" "}
                — Ductile grade specification, seismic zone requirements, and
                pricing.
              </li>
              <li>
                <Link
                  href="/rungta-fe-550-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 550 TMT bars
                </Link>{" "}
                — High-strength grade for heavy-load industrial structures.
              </li>
            </ul>
          </div>

          {/* ── FAQ ───────────────────────────────────────────────────────── */}
          <section className="mt-14" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-h2">
              Frequently asked questions
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

          {/* ── Closing CTA ───────────────────────────────────────────────── */}
          <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-xl font-bold text-foreground">
              Ready to discuss your project requirement?
            </p>
            <p className="mt-2 text-sm text-text-muted">
              WhatsApp your grade, tonnage, and site location. Vivek Aggarwal
              responds personally with a confirmed rate and delivery schedule
              during business hours.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta
                message={BULK_CTA_MESSAGE}
                label="Send Bulk TMT Inquiry on WhatsApp"
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
