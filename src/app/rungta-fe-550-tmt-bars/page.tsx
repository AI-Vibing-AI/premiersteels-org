import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const metadata: Metadata = {
  title: "Rungta Fe 550 TMT Bars — Price & Dealer Delhi NCR",
  description:
    "Rungta Fe 550 TMT bars in Ghaziabad. Authorized distributor Premier Steels supplies 8mm–32mm Fe 550 with mill test certificate. Bulk & trade inquiries on WhatsApp.",
  alternates: {
    canonical: `${site.url}/rungta-fe-550-tmt-bars`,
  },
  robots: { index: true, follow: true },
};

/** Prefilled WhatsApp message for Fe 550 inquiries */
const WA_MESSAGE_550 =
  "Hi Premier Steels, Rungta TMT inquiry — Grade: Fe 550 , Quantity (MT): ___ , Delivery location: ___";

/** IS 1786:2008 mechanical properties for Fe 550 */
const PROPERTIES_550 = [
  { property: "0.2% Proof Stress / Yield Strength", value: "≥ 550 N/mm²" },
  { property: "Ultimate Tensile Strength (UTS)", value: "≥ 585 N/mm² (UTS/YS ≥ 1.06)" },
  { property: "Elongation at fracture", value: "≥ 10%" },
  { property: "Total Elongation at max force (Agt)", value: "≥ 4%" },
  { property: "Bend test", value: "No fracture — as per IS 1786 Table 4" },
  { property: "Standard", value: "IS 1786:2008" },
];

/** Bar weight table — formula: D² / 162 kg/m */
const BAR_WEIGHTS = [
  { dia: 8, weight: (8 * 8) / 162 },
  { dia: 10, weight: (10 * 10) / 162 },
  { dia: 12, weight: (12 * 12) / 162 },
  { dia: 16, weight: (16 * 16) / 162 },
  { dia: 20, weight: (20 * 20) / 162 },
  { dia: 25, weight: (25 * 25) / 162 },
  { dia: 28, weight: (28 * 28) / 162 },
  { dia: 32, weight: (32 * 32) / 162 },
];

/** Steel saving vs Fe 500 — approx 10% for equivalent design */
const GRADE_COMPARE = [
  { grade: "Fe 500", yield: "500 N/mm²", elongation: "≥ 12%", saving: "—" },
  { grade: "Fe 500D", yield: "500 N/mm²", elongation: "≥ 16%", saving: "—" },
  { grade: "Fe 550", yield: "550 N/mm²", elongation: "≥ 10%", saving: "~10% less steel" },
];

const FAQ_ITEMS = [
  {
    question: "What is Fe 550 steel?",
    answer:
      "Fe 550 is a High Strength Deformed (HSD) TMT reinforcement bar defined under IS 1786:2008. It has a minimum yield strength of 550 N/mm² — 10% higher than Fe 500/Fe 500D — and a minimum elongation of 10%. The higher strength allows structural engineers to design with less steel by weight for equivalent load capacity, reducing material cost in heavy-structure applications.",
  },
  {
    question: "What are the main applications for Fe 550?",
    answer:
      "Fe 550 is used where high loads require maximizing strength-to-weight ratio: industrial sheds, warehouses, power plants, heavy equipment foundations, large-span commercial buildings, and infrastructure projects. It is less commonly specified in residential housing (Fe 500D is the standard there) but preferred when the structural engineer wants to reduce steel tonnage in a heavy-load design.",
  },
  {
    question: "How much steel can I save by using Fe 550 instead of Fe 500?",
    answer:
      "In a re-designed structure optimized for Fe 550's higher yield strength, savings of approximately 10% by weight vs Fe 500 are achievable. However, this requires the structural engineer to redesign the reinforcement schedule — simply substituting Fe 550 bars in a design drawn for Fe 500 does not automatically reduce quantity. The engineer must recalculate bar spacings and diameters for the higher grade.",
  },
  {
    question: "Is Fe 550 suitable for seismic zone construction?",
    answer:
      "Fe 550 is not the preferred grade for seismic zone construction. IS 13920:2016 emphasizes ductility — the ability to absorb energy through deformation without fracturing. Fe 550's minimum elongation (10%) is lower than Fe 500D's (16%), making Fe 500D the preferred grade for earthquake-resistant design in Delhi NCR's seismic zone IV. Always follow your structural engineer's specification.",
  },
  {
    question: "Do you also stock Fe 550D?",
    answer:
      "Premier Steels currently stocks Fe 500, Fe 500D, and Fe 550 from Rungta Steel. If your project specifies Fe 550D, please contact us to discuss your requirements — availability depends on mill supply schedules.",
  },
  {
    question: "What sizes of Fe 550 do you stock?",
    answer:
      "Premier Steels stocks Rungta Fe 550 in 8 mm, 10 mm, 12 mm, 16 mm, 20 mm, 25 mm, 28 mm, and 32 mm. WhatsApp us to confirm current availability and pricing for your specific sizes and quantity.",
  },
  {
    question: "Do you provide a mill test certificate with Fe 550?",
    answer:
      "Yes — a Rungta Steel mill test certificate comes with every Fe 550 consignment without exception. The certificate confirms grade, heat number, yield strength, elongation, UTS/YS ratio, and chemical composition per IS 1786:2008.",
  },
  {
    question: "What is the current price of Rungta Fe 550 in Ghaziabad?",
    answer:
      "Steel prices move daily. Fe 550 typically carries a small premium over Fe 500 due to the higher strength processing. WhatsApp your grade (Fe 550), quantity in MT, and delivery location — Vivek Aggarwal responds with today's confirmed rate. Prices are exclusive of 18% GST.",
  },
];

function buildProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Rungta Fe 550 TMT Bars",
    description:
      "Rungta Steel Fe 550 high-strength TMT bars. Yield strength ≥ 550 N/mm², elongation ≥ 10%, UTS/YS ≥ 1.06. IS 1786:2008. Sizes 8 mm to 32 mm. Supplied with mill test certificate by authorized distributor Premier Steels, Ghaziabad.",
    brand: { "@type": "Brand", name: "Rungta Steel" },
    sku: "RUNGTA-FE550",
    mpn: "Fe550-IS1786",
    material: "High Strength Deformed TMT Reinforcement Bar",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Grade", value: "Fe 550" },
      { "@type": "PropertyValue", name: "Standard", value: "IS 1786:2008" },
      { "@type": "PropertyValue", name: "Yield Strength", value: "≥ 550 N/mm²" },
      { "@type": "PropertyValue", name: "Elongation", value: "≥ 10%" },
      { "@type": "PropertyValue", name: "UTS/YS Ratio", value: "≥ 1.06" },
      { "@type": "PropertyValue", name: "Size Range", value: "8 mm to 32 mm" },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.contact.address.street}, ${site.contact.address.area}`,
          addressLocality: site.contact.address.city,
          addressRegion: site.contact.address.state,
          addressCountry: "IN",
        },
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        valueAddedTaxIncluded: false,
      },
    },
  };
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export default function Fe550Page() {
  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildProductJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
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
            <span className="text-text-subtle">Rungta Fe 550 TMT Bars</span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 max-w-3xl">
            Rungta Fe 550 TMT Bars —{" "}
            <span className="text-accent">Price &amp; Dealer, Delhi NCR</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
            <span>
              <span className="font-semibold text-foreground">Premier Steels</span>{" "}
              — Authorized Rungta Distributor, Ghaziabad · Since {site.trust.rungtaAuthorizedSince}
            </span>
          </div>

          {/* Intro */}
          <p className="mt-8 text-lg text-text-muted leading-relaxed">
            Fe 550 is the high-strength Rungta Steel TMT bar — 10% stronger yield than Fe 500,
            preferred for industrial structures, heavy-load commercial buildings, and infrastructure
            projects where structural engineers want to reduce steel tonnage. Premier Steels stocks
            Rungta Fe 550 in 8 mm to 32 mm from our Ghaziabad yard, with a mill test certificate
            on every consignment.
          </p>

          {/* Grade badge strip */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "550 N/mm² yield strength",
              "≥ 10% elongation",
              "IS 1786:2008",
              "8 mm – 32 mm",
              "~10% steel saving",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-accent"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* ── What is Fe 550 ── */}
          <section className="mt-14">
            <h2 className="text-h2">What is Fe 550?</h2>
            <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
              <p>
                Fe 550 is a High Strength Deformed (HSD) TMT reinforcement bar defined under{" "}
                <strong className="text-foreground">IS 1786:2008</strong>. The designation means:
                <em> Fe</em> = iron/steel, <em>550</em> = minimum 0.2% proof stress (yield
                strength) of 550 N/mm². There is no &apos;D&apos; suffix — Fe 550 trades some of Fe 500D&apos;s
                elongation for higher strength.
              </p>
              <p>
                The 550 N/mm² yield strength is{" "}
                <strong className="text-foreground">10% higher than Fe 500 and Fe 500D</strong>.
                This means a structural engineer can reduce the cross-sectional area of
                reinforcement — fewer bars, or smaller diameters — for the same design load,
                reducing steel tonnage by approximately 10% in an optimized design. For large
                industrial or infrastructure projects, this translates directly to lower material cost.
              </p>
              <p>
                The tradeoff is elongation: Fe 550&apos;s minimum elongation is{" "}
                <strong className="text-foreground">10%</strong>, compared to 16% for Fe 500D.
                This makes Fe 550 less suited to seismic zone construction (where IS 13920
                prefers Fe 500D), but entirely appropriate for structures where high static or
                dynamic load — rather than seismic ductility — drives the design.
              </p>
            </div>
          </section>

          {/* ── IS 1786:2008 Properties ── */}
          <section className="mt-14">
            <h2 className="text-h2">IS 1786:2008 Mechanical Properties — Fe 550</h2>
            <p className="mt-3 text-sm text-text-muted">
              These are the minimum requirements per IS 1786:2008. Rungta Steel mill test
              certificates document actual tested values for every heat supplied.
            </p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Property
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Minimum Value
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {PROPERTIES_550.map((row) => (
                    <tr key={row.property} className="hover:bg-surface/50 transition-colors">
                      <td className="px-5 py-4 text-foreground">{row.property}</td>
                      <td className="px-5 py-4 text-right font-mono font-semibold text-accent">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-subtle">
              Source: IS 1786:2008 Table 2 &amp; Table 3. All values are minima — actual tested
              values on mill certificates will typically exceed these.
            </p>
          </section>

          {/* ── Grade comparison ── */}
          <section className="mt-14">
            <h2 className="text-h2">Fe 550 vs Fe 500 vs Fe 500D — Quick Comparison</h2>
            <div className="mt-5 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Grade
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Yield (N/mm²)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Elongation
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Steel saving
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {GRADE_COMPARE.map((row) => (
                    <tr
                      key={row.grade}
                      className={`hover:bg-surface/50 transition-colors ${
                        row.grade === "Fe 550"
                          ? "bg-accent/5 font-semibold"
                          : ""
                      }`}
                    >
                      <td className="px-5 py-4 font-display font-bold text-foreground">
                        {row.grade}
                        {row.grade === "Fe 550" && (
                          <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 font-mono text-xs text-accent">
                            this page
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-foreground">
                        {row.yield}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-foreground">
                        {row.elongation}
                      </td>
                      <td className="px-5 py-4 text-right text-text-muted">{row.saving}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-subtle">
              Steel saving with Fe 550 is realized only when the structural engineer redesigns
              the reinforcement schedule for the higher grade. Substitution without redesign
              provides strength margin, not material reduction.
            </p>
          </section>

          {/* ── Best Applications ── */}
          <section className="mt-14">
            <h2 className="text-h2">Best Applications for Fe 550</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Industrial Structures & Warehouses",
                  desc: "Heavy-roof industrial sheds, warehouses, and manufacturing facilities carry high dead and live loads. Fe 550 lets engineers reduce column and beam reinforcement weight without compromising on capacity.",
                },
                {
                  title: "Power Plants & Heavy Equipment Foundations",
                  desc: "Machine foundations, turbine pads, and equipment bases require high bearing capacity. Fe 550's yield strength directly reduces reinforcement tonnage in these mass-concrete applications.",
                },
                {
                  title: "Large-Span Commercial Buildings",
                  desc: "Malls, logistics hubs, and convention centers with long spans and heavy floor loads benefit from Fe 550 where the structural engineer has designed specifically for the higher grade.",
                },
                {
                  title: "Infrastructure & Road Bridges",
                  desc: "Projects governed by IRC or NHAI specifications sometimes call for Fe 550 in high-load members. Mill test certificates from an authorized distributor satisfy quality documentation requirements.",
                },
                {
                  title: "Retaining Walls & Abutments",
                  desc: "High retaining walls carrying significant lateral and surcharge loads can be economically designed with Fe 550 to reduce bar quantities while meeting the design moment.",
                },
                {
                  title: "Structural Upgrades & Strengthening",
                  desc: "Retrofitting or strengthening existing structures often involves space constraints. Fe 550 allows engineers to add reinforcement capacity without increasing bar count or section size.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-surface p-5"
                >
                  <p className="font-semibold text-foreground">{card.title}</p>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Sizes & Bar Weight ── */}
          <section className="mt-14">
            <h2 className="text-h2">Available Sizes &amp; Bar Weight Reference</h2>
            <p className="mt-3 text-sm text-text-muted">
              Standard weight calculated as <code className="text-accent">D² ÷ 162 kg/m</code>{" "}
              per IS 1786:2008. Use this to cross-check your reinforcement schedule quantities.
            </p>
            <div className="mt-5 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Diameter (mm)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Weight (kg/m)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Weight (kg/12 m bar)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {BAR_WEIGHTS.map((row) => (
                    <tr key={row.dia} className="hover:bg-surface/50 transition-colors">
                      <td className="px-5 py-4 font-display font-bold text-foreground">
                        {row.dia} mm
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-foreground">
                        {row.weight.toFixed(3)}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-text-muted">
                        {(row.weight * 12).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-subtle">
              All 8 sizes in stock at Premier Steels. WhatsApp to confirm per-size availability
              and current pricing.
            </p>
          </section>

          {/* ── Fe 550D note ── */}
          <section className="mt-10 rounded-xl border border-border bg-surface/60 px-6 py-5">
            <p className="font-semibold text-foreground">Note on Fe 550D</p>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              Fe 550D (the ductile variant of Fe 550, requiring elongation ≥ 14.5% at this higher
              yield strength) is a separate grade under IS 1786:2008. Premier Steels currently
              stocks Fe 500, Fe 500D, and Fe 550. If your project specification calls for Fe 550D,
              please{" "}
              <a
                href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
                  "Hi Premier Steels, inquiry about Fe 550D availability — Quantity (MT): ___ , Delivery location: ___"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                contact us on WhatsApp
              </a>{" "}
              to discuss your Fe 550D requirements and current availability.
            </p>
          </section>

          {/* ── Why authorized distributor ── */}
          <section className="mt-14">
            <h2 className="text-h2">Why Buy Fe 550 from an Authorized Rungta Distributor</h2>
            <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
              <p>
                Fe 550&apos;s 10% strength advantage over Fe 500 only exists if the bar actually
                meets 550 N/mm² yield strength — verified by test. Unverified Fe 550 from
                non-authorized sources may not have the consistent mechanical properties required
                for optimized structural designs that rely on the higher grade.
              </p>
              <p>
                As an{" "}
                <strong className="text-foreground">
                  authorized Rungta Steel distributor since {site.trust.rungtaAuthorizedSince}
                </strong>
                , Premier Steels supplies Rungta TMT bars from the mill with an unbroken chain of
                custody. Every Fe 550 consignment carries a{" "}
                <strong className="text-foreground">Rungta Steel mill test certificate</strong> —
                heat-traceable to the mill — confirming yield strength, elongation, UTS, and
                chemical composition against IS 1786:2008.
              </p>
              <p>
                For project quality records, structural engineer sign-off, and any future audit
                or insurance claim, this traceability is non-negotiable. Our{" "}
                {site.trust.monthlyCapacity} monthly capacity means we can handle large industrial
                and infrastructure project requirements without supply disruption.
              </p>
            </div>

            {/* Trust strip */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { stat: site.trust.rungtaAuthorizedSince, label: "Rungta authorized since" },
                { stat: site.trust.yearsInBusiness + " years", label: "In business" },
                { stat: site.trust.monthlyCapacity, label: "Monthly capacity" },
                { stat: site.trust.projectsSupplied + " projects", label: "Supplied" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border bg-surface p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-accent">{item.stat}</p>
                  <p className="mt-1 text-xs text-text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── WhatsApp CTA ── */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-xl font-bold text-foreground">
              Get Rungta Fe 550 Quote — Bulk &amp; Trade Inquiries
            </p>
            <p className="mt-2 text-sm text-text-muted">
              WhatsApp your quantity (MT), sizes, and delivery location to Vivek Aggarwal.
              Bulk &amp; trade inquiries only — this is the owner&apos;s personal line.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta
                message={WA_MESSAGE_550}
                label="WhatsApp Fe 550 Inquiry"
              />
            </div>
            <p className="mt-4 text-xs text-text-subtle">
              {site.contact.hours} · {site.contact.address.city}, {site.contact.address.state}
            </p>
          </div>

          {/* ── Internal links ── */}
          <div className="mt-12">
            <h2 className="text-h2">Related Pages</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>
                <Link
                  href="/rungta-tmt-price-today"
                  className="text-accent hover:underline"
                >
                  Rungta TMT Bar Price Today
                </Link>{" "}
                — Today&apos;s indicative Fe 500, Fe 500D, and Fe 550 price ranges.
              </li>
              <li>
                <Link
                  href="/rungta-tmt-dealer-delhi-ncr"
                  className="text-accent hover:underline"
                >
                  Authorized Rungta TMT Dealer in Delhi NCR
                </Link>{" "}
                — How to verify an authorized Rungta distributor.
              </li>
              <li>
                <Link
                  href="/rungta-fe-500d-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 500D TMT Bars
                </Link>{" "}
                — The ductile grade for seismic zones and high-rises.
              </li>
            </ul>
          </div>

          {/* ── FAQ ── */}
          <section className="mt-14">
            <h2 className="text-h2">Frequently Asked Questions — Rungta Fe 550</h2>
            <div className="mt-6 space-y-3">
              {FAQ_ITEMS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border bg-surface p-5 open:border-accent/40"
                >
                  <summary className="cursor-pointer list-none font-semibold text-foreground group-open:text-accent">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

        </div>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
