import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const metadata: Metadata = {
  title: "Rungta Fe 500D TMT Bars — Price & Dealer Delhi NCR",
  description:
    "Rungta Fe 500D TMT bars in Ghaziabad. Authorized distributor Premier Steels supplies 8mm–32mm Fe 500D with mill test certificate. Bulk & trade inquiries on WhatsApp.",
  alternates: {
    canonical: `${site.url}/rungta-fe-500d-tmt-bars`,
  },
  robots: { index: true, follow: true },
};

/** Prefilled WhatsApp message for Fe 500D inquiries */
const WA_MESSAGE_500D =
  "Hi Premier Steels, Rungta TMT inquiry — Grade: Fe 500D , Quantity (MT): ___ , Delivery location: ___";

/** IS 1786:2008 mechanical properties for Fe 500D */
const PROPERTIES_500D = [
  { property: "0.2% Proof Stress / Yield Strength", value: "≥ 500 N/mm²" },
  { property: "Ultimate Tensile Strength (UTS)", value: "≥ 565 N/mm² (UTS/YS ≥ 1.10)" },
  { property: "Elongation at fracture", value: "≥ 16%" },
  { property: "Total Elongation at max force (Agt)", value: "≥ 5%" },
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

const FAQ_ITEMS = [
  {
    question: "What does the 'D' in Fe 500D mean?",
    answer:
      "The 'D' stands for Ductile. Fe 500D has the same minimum yield strength as Fe 500 (500 N/mm²) but a higher minimum elongation — 16% vs 12% — and a mandatory UTS-to-yield ratio of at least 1.10. This extra ductility allows the bar to absorb energy before fracturing, which is critical in earthquake-prone regions.",
  },
  {
    question: "Is Fe 500D mandatory for construction in Delhi NCR?",
    answer:
      "Delhi and the NCR region fall in seismic zone IV. IS 13920:2016 (Ductile Design of Reinforced Concrete Structures) specifies that Fe 500D (or equivalent ductile grade) must be used in ductile detailing zones. Most structural engineers in the region default to Fe 500D for this reason. Always follow the recommendation of your structural engineer.",
  },
  {
    question: "What sizes of Fe 500D do you stock?",
    answer:
      "Premier Steels stocks Rungta Fe 500D in all standard diameters: 8 mm, 10 mm, 12 mm, 16 mm, 20 mm, 25 mm, 28 mm, and 32 mm. WhatsApp us to confirm availability and current stock for your specific sizes.",
  },
  {
    question: "Do you supply a mill test certificate with Fe 500D?",
    answer:
      "Yes — a Rungta Steel mill test certificate accompanies every Fe 500D consignment. The certificate confirms grade, heat number, yield strength, elongation, UTS/YS ratio, and chemical composition per IS 1786:2008. Essential for project quality records and structural audits.",
  },
  {
    question: "What is the difference between Fe 500 and Fe 500D?",
    answer:
      "Both grades have the same 500 N/mm² minimum yield strength. Fe 500D requires higher elongation (≥ 16% vs ≥ 12%), a higher UTS-to-yield ratio (≥ 1.10 vs ≥ 1.08), and tighter carbon equivalent limits. These differences make Fe 500D the preferred grade for seismic zones, high-rises, bridges, and any application where ductility under extreme loads matters.",
  },
  {
    question: "What is the current price of Rungta Fe 500D in Ghaziabad?",
    answer:
      "Steel prices move daily with market conditions. WhatsApp us your grade (Fe 500D), quantity in MT, and delivery location — Vivek Aggarwal responds with today's confirmed rate. Prices are exclusive of 18% GST.",
  },
  {
    question: "What is the minimum order quantity for Fe 500D?",
    answer:
      "Minimum delivery order is typically 5 MT. Ex-yard pickup from our Loha Mandi, Ghaziabad yard has no minimum. WhatsApp to confirm for your specific requirement.",
  },
  {
    question: "Do you deliver Fe 500D to Delhi, Noida, and Gurugram?",
    answer:
      "Yes. Premier Steels supplies Rungta Fe 500D across Delhi NCR — including Delhi, Noida, Greater Noida, Gurugram, Faridabad, and Ghaziabad — and across Uttar Pradesh. Same-day dispatch within Ghaziabad; next-day to Delhi NCR locations.",
  },
];

function buildProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Rungta Fe 500D TMT Bars",
    description:
      "Rungta Steel Fe 500D ductile TMT bars. Yield strength ≥ 500 N/mm², elongation ≥ 16%, UTS/YS ≥ 1.10. IS 1786:2008. Sizes 8 mm to 32 mm. Supplied with mill test certificate by authorized distributor Premier Steels, Ghaziabad.",
    brand: { "@type": "Brand", name: "Rungta Steel" },
    sku: "RUNGTA-FE500D",
    mpn: "Fe500D-IS1786",
    material: "High Strength Deformed TMT Reinforcement Bar",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Grade", value: "Fe 500D" },
      { "@type": "PropertyValue", name: "Standard", value: "IS 1786:2008" },
      { "@type": "PropertyValue", name: "Yield Strength", value: "≥ 500 N/mm²" },
      { "@type": "PropertyValue", name: "Elongation", value: "≥ 16%" },
      { "@type": "PropertyValue", name: "UTS/YS Ratio", value: "≥ 1.10" },
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

export default function Fe500DPage() {
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
            <span className="text-text-subtle">Rungta Fe 500D TMT Bars</span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 max-w-3xl">
            Rungta Fe 500D TMT Bars —{" "}
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
            Fe 500D is the ductile-grade Rungta Steel TMT bar — mandatory for seismic zone
            construction and the default specification for serious structural engineers across
            Delhi NCR. Premier Steels stocks Rungta Fe 500D in 8 mm to 32 mm, supplied from
            our Ghaziabad yard with a mill test certificate on every consignment.
          </p>

          {/* Grade badge strip */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "500 N/mm² yield strength",
              "≥ 16% elongation",
              "IS 1786:2008",
              "8 mm – 32 mm",
              "Mill test certificate",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-accent/30 bg-accent/8 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-accent"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* ── What is Fe 500D ── */}
          <section className="mt-14">
            <h2 className="text-h2">What is Fe 500D?</h2>
            <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
              <p>
                Fe 500D is a High Strength Deformed (HSD) TMT reinforcement bar defined under{" "}
                <strong className="text-foreground">IS 1786:2008</strong>. The grade designation
                breaks down as: <em>Fe</em> = iron/steel, <em>500</em> = minimum 0.2% proof
                stress (yield strength) of 500 N/mm², <em>D</em> = Ductile — indicating enhanced
                elongation and a controlled UTS-to-yield ratio.
              </p>
              <p>
                Compared with plain Fe 500, the &apos;D&apos; suffix adds a harder set of mechanical
                requirements. Elongation must be at least <strong className="text-foreground">16%</strong>{" "}
                (vs 12% for Fe 500), and the ratio of Ultimate Tensile Strength to yield strength
                must be at least <strong className="text-foreground">1.10</strong> (vs 1.08).
                These properties give Fe 500D more energy-absorption capacity before fracture —
                exactly what is needed when a structure is subjected to earthquake loading.
              </p>
              <p>
                IS 13920:2016 (Ductile Design and Detailing of Reinforced Concrete Structures)
                requires Fe 500D or equivalent for buildings in seismic zones. Delhi and the
                wider NCR region are classified in seismic zone IV — making Fe 500D effectively
                the minimum acceptable grade for most structural applications in this geography.
              </p>
            </div>
          </section>

          {/* ── IS 1786:2008 Properties ── */}
          <section className="mt-14">
            <h2 className="text-h2">IS 1786:2008 Mechanical Properties — Fe 500D</h2>
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
                  {PROPERTIES_500D.map((row) => (
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

          {/* ── Best Applications ── */}
          <section className="mt-14">
            <h2 className="text-h2">Best Applications for Fe 500D</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Seismic Zone Construction",
                  desc: "Delhi NCR is seismic zone IV. IS 13920 mandates ductile-grade reinforcement in moment-resisting frames and shear walls. Fe 500D is the engineer's default specification here.",
                },
                {
                  title: "High-Rise Residential & Commercial",
                  desc: "Buildings above G+4 floors require structural engineers who almost universally specify Fe 500D in RCC members for its combination of strength and ductility.",
                },
                {
                  title: "Bridges & Flyovers",
                  desc: "Dynamic and cyclic loading on bridge decks, piers, and abutments demands higher elongation. Fe 500D's 16% elongation gives the extra reserve needed under traffic loads.",
                },
                {
                  title: "Metro & Infrastructure",
                  desc: "Public infrastructure projects governed by CPWD, NHAI, or RRTS specifications routinely call for Fe 500D as the minimum grade in structural RCC.",
                },
                {
                  title: "Basement & Retaining Structures",
                  desc: "Lateral earth pressure, hydrostatic loads, and settlement can impose unexpected deformations. Fe 500D's ductility margin reduces the risk of brittle failure in these zones.",
                },
                {
                  title: "General Residential — Premium Spec",
                  desc: "Many builders and individual home-builders in NCR upgrade to Fe 500D over Fe 500 for peace of mind. The cost premium over Fe 500 is small compared to the structural assurance.",
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
              per IS 1786:2008. Use this to estimate material requirements for your project.
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

          {/* ── Why authorized distributor ── */}
          <section className="mt-14">
            <h2 className="text-h2">Why Buy Fe 500D from an Authorized Rungta Distributor</h2>
            <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
              <p>
                Fe 500D&apos;s value is entirely in its verified mechanical properties — specifically
                the elongation and UTS/YS ratio that justify specifying it over Fe 500. If the
                bar you buy does not meet IS 1786:2008 requirements for Fe 500D, you are paying
                Fe 500D prices for Fe 500 (or worse) performance.
              </p>
              <p>
                As an{" "}
                <strong className="text-foreground">
                  authorized Rungta Steel distributor since {site.trust.rungtaAuthorizedSince}
                </strong>
                , Premier Steels supplies Rungta TMT bars directly from the mill with an unbroken
                chain of custody. Every consignment carries a{" "}
                <strong className="text-foreground">Rungta Steel mill test certificate</strong>{" "}
                — heat number traceable back to the mill — confirming yield strength, elongation,
                UTS, and chemical composition against IS 1786:2008.
              </p>
              <p>
                For structural engineers, quantity surveyors, and site engineers who have Fe 500D
                in their specification, this traceability is not optional — it is what your
                project&apos;s quality record requires. Mandi traders without mill authorization
                cannot offer this.
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
              Get Rungta Fe 500D Quote — Bulk &amp; Trade Inquiries
            </p>
            <p className="mt-2 text-sm text-text-muted">
              WhatsApp your quantity (MT), sizes, and delivery location to Vivek Aggarwal.
              Bulk &amp; trade inquiries only — this is the owner&apos;s personal line.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta
                message={WA_MESSAGE_500D}
                label="WhatsApp Fe 500D Inquiry"
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
                — Today&apos;s indicative Fe 500D, Fe 500, and Fe 550 price ranges.
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
                  href="/rungta-fe-550-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 550 TMT Bars
                </Link>{" "}
                — High-strength grade for heavy industrial and infrastructure projects.
              </li>
            </ul>
          </div>

          {/* ── FAQ ── */}
          <section className="mt-14">
            <h2 className="text-h2">Frequently Asked Questions — Rungta Fe 500D</h2>
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
