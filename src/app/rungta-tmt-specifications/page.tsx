import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const metadata: Metadata = {
  title: "Rungta TMT Bar Specifications — IS 1786:2008 Grades & Sizes",
  description:
    "Full spec tables for Rungta TMT bars: Fe 500, Fe 500D, Fe 550. Mechanical properties per IS 1786:2008, sizes 8–32 mm, weight per metre, and how to read a mill test certificate.",
  alternates: {
    canonical: `${site.url}/rungta-tmt-specifications`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Rungta TMT Bar Specifications — IS 1786:2008 Grades & Sizes",
    description:
      "Spec tables for Rungta Steel TMT bars in Fe 500, Fe 500D, Fe 550 — yield strength, elongation, UTS/YS ratios, sizes, bar weights, and MTC guide.",
    url: `${site.url}/rungta-tmt-specifications`,
    siteName: site.name,
    type: "article",
  },
};

/* ─── IS 1786:2008 mechanical property data ─────────────────────────────────
   Source: IS 1786:2008 Table 2 (Mechanical Properties of Bars).
   These are the MINIMUM/REQUIRED values from the standard — not brand-specific claims.
   ─────────────────────────────────────────────────────────────────────────── */
const GRADE_SPECS = [
  {
    grade: "Fe 500",
    minYS: "500",
    minUTS: "545",
    minElongation: "12",
    utsYsRatioMin: "1.08",
    notes:
      "Standard-use grade. Good strength-to-weight ratio for residential and commercial construction.",
  },
  {
    grade: "Fe 500D",
    minYS: "500",
    minUTS: "565",
    minElongation: "16",
    utsYsRatioMin: "1.10",
    notes:
      "Ductile grade — 'D' denotes higher elongation requirement (16% vs 12%). Mandatory in seismic zone detailing per IS 13920. Preferred for frames in zones III and above.",
  },
  {
    grade: "Fe 550",
    minYS: "550",
    minUTS: "585",
    minElongation: "10",
    utsYsRatioMin: "1.06",
    notes:
      "High-strength grade. Higher yield stress reduces steel quantity by roughly 10% vs Fe 500 in equivalent design. Used in industrial structures and heavy infrastructure.",
  },
] as const;

/* ─── Chemical composition limits from IS 1786:2008 Table 1 ──────────────── */
const CHEM_SPECS = [
  {
    grade: "Fe 500",
    maxC: "0.30",
    maxS: "0.060",
    maxP: "0.060",
    maxSP: "0.110",
    maxCeq: "0.42",
  },
  {
    grade: "Fe 500D",
    maxC: "0.25",
    maxS: "0.040",
    maxP: "0.040",
    maxSP: "0.075",
    maxCeq: "0.42",
  },
  {
    grade: "Fe 550",
    maxC: "0.30",
    maxS: "0.055",
    maxP: "0.055",
    maxSP: "0.100",
    maxCeq: "0.44",
  },
] as const;

/* ─── Bar sizes stocked and weight per metre ─────────────────────────────────
   Formula: weight (kg/m) = D² / 162   where D = nominal diameter in mm.
   This is the standard steel bar weight formula per IS 1786:2008 / SP 16.
   ─────────────────────────────────────────────────────────────────────────── */
const BAR_SIZES = [
  { dia: 8, weightPerM: parseFloat(((8 * 8) / 162).toFixed(3)) },
  { dia: 10, weightPerM: parseFloat(((10 * 10) / 162).toFixed(3)) },
  { dia: 12, weightPerM: parseFloat(((12 * 12) / 162).toFixed(3)) },
  { dia: 16, weightPerM: parseFloat(((16 * 16) / 162).toFixed(3)) },
  { dia: 20, weightPerM: parseFloat(((20 * 20) / 162).toFixed(3)) },
  { dia: 25, weightPerM: parseFloat(((25 * 25) / 162).toFixed(3)) },
  { dia: 28, weightPerM: parseFloat(((28 * 28) / 162).toFixed(3)) },
  { dia: 32, weightPerM: parseFloat(((32 * 32) / 162).toFixed(3)) },
];

const FAQ_ITEMS = [
  {
    question: "What does IS 1786:2008 mean on an MTC?",
    answer:
      "IS 1786:2008 is the Bureau of Indian Standards specification for 'High Strength Deformed Steel Bars and Wires for Concrete Reinforcement.' When an MTC cites IS 1786:2008, it means the producer is certifying that the tested batch meets the chemical and mechanical limits defined in that standard for the declared grade (Fe 500, Fe 500D, Fe 550, etc.).",
  },
  {
    question: "What is the difference between yield strength and tensile strength?",
    answer:
      "Yield strength (0.2% proof stress) is the stress at which the steel begins to permanently deform — beyond this point the bar will not return to its original shape. Tensile strength (UTS) is the maximum stress before fracture. IS 1786:2008 requires UTS to exceed yield strength by a defined ratio (1.08 for Fe 500, 1.10 for Fe 500D) to ensure the bar gives warning before failure rather than fracturing suddenly.",
  },
  {
    question: "Why does Fe 500D cost more than Fe 500?",
    answer:
      "Fe 500D has tighter chemical composition limits (lower carbon, sulphur, and phosphorus) and a higher minimum elongation (16% vs 12%). The tighter chemistry requires more careful steelmaking, which typically means slightly higher production cost. The price premium at retail is usually ₹2–4/kg. For seismic zone applications the premium is well justified — consult your structural engineer.",
  },
  {
    question: "How do I calculate how many MT of TMT bars I need for my project?",
    answer:
      "A structural engineer's bar bending schedule (BBS) gives the exact requirement. As a rough estimate only: a 1,000 sq ft RCC-framed ground floor house typically uses 3–5 MT of TMT reinforcement depending on design, soil condition, and seismic zone. Use the weight-per-metre formula (D² ÷ 162 kg/m) to convert bar lengths to tonnes. WhatsApp us your BBS and we will confirm the exact quantity and rate.",
  },
  {
    question: "What is carbon equivalent (Ceq) and why does it matter?",
    answer:
      "Carbon equivalent (Ceq) is a formula combining carbon, manganese, chromium, vanadium, nickel, molybdenum, and copper content. It is a proxy for weldability — the higher the Ceq, the more care is needed when welding or bending. IS 1786:2008 caps Ceq at 0.42 for Fe 500 and Fe 500D, and 0.44 for Fe 550. An MTC reporting Ceq within these limits indicates the bars can be welded and bent on site following standard practice.",
  },
  {
    question: "What is the standard length of a TMT bar?",
    answer:
      "IS 1786:2008 specifies bars in standard lengths of 10 m, 12 m, and customized lengths. Most supply from our Ghaziabad yard is in 12-metre lengths. Confirm the required length when ordering, as cutting charges may apply for non-standard lengths.",
  },
  {
    question: "What tolerances apply on nominal weight of TMT bars?",
    answer:
      "IS 1786:2008 allows a tolerance of ±7% on the nominal weight per metre for individual bars (measured over a sample). The theoretical weight formula is D² ÷ 162 kg/m. If you receive bars significantly lighter than this, ask for the MTC and check the actual measured weight — under-weight bars are a red flag for under-filled cross-section.",
  },
  {
    question: "Do you supply mill test certificates (MTC) with every order?",
    answer:
      "Yes. A Rungta Steel mill test certificate accompanies every consignment dispatched from Premier Steels, without exception. The MTC covers the specific production lot in your delivery and confirms chemical composition and mechanical properties against IS 1786:2008 for the declared grade.",
  },
];

function buildProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Rungta Steel TMT Bars — Fe 500, Fe 500D, Fe 550",
    description:
      "Rungta Steel TMT bars conforming to IS 1786:2008. Grades Fe 500, Fe 500D, and Fe 550. Sizes 8 mm to 32 mm. Mill test certificate with every consignment. Supplied by Premier Steels, Ghaziabad.",
    brand: { "@type": "Brand", name: "Rungta Steel" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "52",
      highPrice: "63",
      priceSpecification: {
        "@type": "PriceSpecification",
        valueAddedTaxIncluded: false,
      },
      seller: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Standard", value: "IS 1786:2008" },
      { "@type": "PropertyValue", name: "Size range", value: "8 mm to 32 mm" },
      {
        "@type": "PropertyValue",
        name: "Grades",
        value: "Fe 500, Fe 500D, Fe 550",
      },
    ],
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

function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rungta TMT Specifications",
        item: `${site.url}/rungta-tmt-specifications`,
      },
    ],
  };
}

export default function RungtaTmtSpecificationsPage() {
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
            <span className="text-text-subtle">
              Rungta TMT Specifications
            </span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 max-w-3xl">
            Rungta TMT Bar Specifications —{" "}
            <span className="text-accent">
              Grades, Sizes, IS 1786:2008 Properties
            </span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
            <span>
              <span className="font-semibold text-foreground">
                Premier Steels
              </span>{" "}
              — Authorized Rungta Distributor, Ghaziabad
            </span>
            <span aria-hidden className="text-text-subtle">
              ·
            </span>
            <time dateTime="2026-06-12" className="text-text-subtle">
              Last updated: 12 June 2026
            </time>
          </div>

          <p className="mt-8 text-lg text-text-muted leading-relaxed">
            All specifications on this page are drawn from{" "}
            <strong className="text-foreground">IS 1786:2008</strong> — the
            Bureau of Indian Standards specification for high-strength deformed
            steel bars and wires for concrete reinforcement. We stock Rungta
            Steel TMT bars in Fe 500, Fe 500D, and Fe 550, in 8 mm to 32 mm,
            with a mill test certificate confirming these properties for every
            consignment.
          </p>

          {/* ── Section 1: Mechanical Properties ──────────────────────────── */}
          <section className="mt-12">
            <h2 className="text-h2 mb-2">
              Mechanical Properties — IS 1786:2008 Minimum Requirements
            </h2>
            <p className="mb-5 text-sm text-text-muted">
              These are the <strong className="text-foreground">minimum</strong>{" "}
              values mandated by the standard. A conforming mill test certificate
              must show values at or above these for the declared grade.
            </p>

            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Property
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Fe 500
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Fe 500D
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Fe 550
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 text-text-muted">
                      Min. yield strength (0.2% proof stress)
                    </td>
                    {GRADE_SPECS.map((g) => (
                      <td
                        key={g.grade}
                        className="px-5 py-4 text-right font-mono text-foreground"
                      >
                        {g.minYS} N/mm²
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 text-text-muted">
                      Min. tensile strength (UTS)
                    </td>
                    {GRADE_SPECS.map((g) => (
                      <td
                        key={g.grade}
                        className="px-5 py-4 text-right font-mono text-foreground"
                      >
                        {g.minUTS} N/mm²
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 text-text-muted">
                      Min. % elongation (gauge 5.65√A)
                    </td>
                    {GRADE_SPECS.map((g) => (
                      <td
                        key={g.grade}
                        className={[
                          "px-5 py-4 text-right font-mono",
                          g.grade === "Fe 500D"
                            ? "text-accent font-bold"
                            : "text-foreground",
                        ].join(" ")}
                      >
                        {g.minElongation}%
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 text-text-muted">
                      UTS / YS ratio (min.)
                    </td>
                    {GRADE_SPECS.map((g) => (
                      <td
                        key={g.grade}
                        className="px-5 py-4 text-right font-mono text-foreground"
                      >
                        {g.utsYsRatioMin}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-3">
              {GRADE_SPECS.map((g) => (
                <div
                  key={g.grade}
                  className="rounded-lg border border-border bg-surface/50 px-5 py-4 text-sm text-text-muted"
                >
                  <span className="font-semibold text-foreground">
                    {g.grade}:
                  </span>{" "}
                  {g.notes}
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 2: Chemical Composition ───────────────────────────── */}
          <section className="mt-14">
            <h2 className="text-h2 mb-2">
              Chemical Composition — IS 1786:2008 Maximum Limits
            </h2>
            <p className="mb-5 text-sm text-text-muted">
              The standard sets maximum limits on these elements (% by mass). An
              MTC must report values at or below these limits. Fe 500D has the
              tightest chemistry — lower carbon and sulphur/phosphorus limits
              contribute to higher ductility and better weldability.
            </p>

            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Grade
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      C (max%)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      S (max%)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      P (max%)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      S+P (max%)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Ceq (max)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {CHEM_SPECS.map((c) => (
                    <tr
                      key={c.grade}
                      className="hover:bg-surface/50 transition-colors"
                    >
                      <td className="px-5 py-4 font-display font-bold text-foreground">
                        {c.grade}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-text-muted">
                        {c.maxC}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-text-muted">
                        {c.maxS}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-text-muted">
                        {c.maxP}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-text-muted">
                        {c.maxSP}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-text-muted">
                        {c.maxCeq}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-subtle">
              Ceq = C + Mn/6 + (Cr + Mo + V)/5 + (Ni + Cu)/15. Source: IS
              1786:2008 Table 1.
            </p>
          </section>

          {/* ── Section 3: Sizes and Weight per Metre ─────────────────────── */}
          <section className="mt-14">
            <h2 className="text-h2 mb-2">
              Sizes and Theoretical Weight per Metre
            </h2>
            <p className="mb-5 text-sm text-text-muted">
              We stock all eight sizes below in Fe 500, Fe 500D, and Fe 550.
              Theoretical weight uses the standard formula{" "}
              <strong className="text-foreground">W = D² ÷ 162 kg/m</strong>{" "}
              where D is nominal diameter in mm. IS 1786:2008 allows ±7%
              tolerance on individual bar weight.
            </p>

            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Dia (mm)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Weight (kg/m)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Weight (kg/12m bar)
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Bars per MT (12m)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {BAR_SIZES.map((b) => {
                    const per12m = parseFloat((b.weightPerM * 12).toFixed(2));
                    const barsPerMT = parseFloat(
                      (1000 / per12m).toFixed(1)
                    );
                    return (
                      <tr
                        key={b.dia}
                        className="hover:bg-surface/50 transition-colors"
                      >
                        <td className="px-5 py-4 font-display font-bold text-foreground">
                          {b.dia} mm
                        </td>
                        <td className="px-5 py-4 text-right font-mono text-text-muted">
                          {b.weightPerM}
                        </td>
                        <td className="px-5 py-4 text-right font-mono text-text-muted">
                          {per12m} kg
                        </td>
                        <td className="px-5 py-4 text-right font-mono text-text-muted">
                          ≈{barsPerMT}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-subtle">
              Theoretical values only. Actual weight may vary within IS 1786:2008
              tolerances. Use this table to cross-check bar weight and estimate
              quantities — your bar bending schedule gives the exact order.
            </p>
          </section>

          {/* ── Section 4: Reading an MTC ──────────────────────────────────── */}
          <section className="mt-14">
            <h2 className="text-h2 mb-4">
              How to Read a Mill Test Certificate (MTC)
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              A Rungta Steel mill test certificate (MTC) is issued per production
              heat. Here is what each section means and what to check:
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">
                  1. Heat Number / Lot Number
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  The unique identifier for the production batch. This links the
                  bars in your delivery to the specific test results on the MTC.
                  If the heat number on the MTC does not match the heat number
                  bundled with your bars, the certificate does not apply to your
                  delivery.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">
                  2. Grade and Standard
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  Confirm the grade (Fe 500 / Fe 500D / Fe 550) and the
                  standard (IS 1786:2008) are what you ordered. A common fraud
                  vector is supplying a lower grade than invoiced — the MTC is
                  your documentary check.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">
                  3. Chemical Composition Results
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  The MTC will report measured values for C, Mn, S, P, Si, and
                  Ceq. Cross-check these against the IS 1786:2008 maximum limits
                  in the table above. If any value exceeds the limit for the
                  declared grade, the batch is non-conforming.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">
                  4. Mechanical Test Results
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  The MTC reports measured yield strength (0.2% proof stress),
                  UTS, elongation (%), and bend test result. Check each against
                  the IS 1786:2008 minimums in the table above. Elongation is
                  particularly important for Fe 500D — the measured value must be
                  ≥16%.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">
                  5. Size(s) and Weight
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  Confirms which nominal diameters the certificate covers. The
                  MTC may also report the actual measured weight per metre — check
                  this against the D²÷162 theoretical weight. IS 1786:2008 allows
                  ±7% tolerance on individual bars and ±5% on a 10-bar sample.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground">
                  6. Manufacturer Stamp and Date
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  A valid Rungta Steel MTC will carry the manufacturer&apos;s
                  letterhead, authorized signatory, and production date. If these
                  are absent or the document looks like a photocopy of a
                  photocopy, ask for the original or a fresh certificate directly
                  from the distributor.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 px-5 py-4 text-sm text-text-muted">
              <p>
                <span className="font-semibold text-accent">
                  Our commitment:
                </span>{" "}
                Premier Steels provides a Rungta Steel mill test certificate with
                every consignment. If you have questions about interpreting an MTC
                from us, WhatsApp us — we will walk you through it.
              </p>
            </div>
          </section>

          {/* ── Section 5: Which grade for what use ───────────────────────── */}
          <section className="mt-14">
            <h2 className="text-h2 mb-4">
              Choosing the Right Grade — Practical Guide for Contractors
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="font-display font-bold text-foreground text-lg">
                  Fe 500
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  Standard residential and commercial construction. G+2 and
                  smaller structures in lower seismic zones. Budget-sensitive
                  projects where structural engineer approves Fe 500.
                </p>
              </div>
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-5">
                <p className="font-display font-bold text-accent text-lg">
                  Fe 500D ← Most specified
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  Default for multi-storey RCC frames in Delhi NCR (seismic zone
                  IV). IS 13920 ductile detailing typically calls for Fe 500D or
                  higher. Most structural engineers in our region specify Fe 500D
                  as a baseline.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="font-display font-bold text-foreground text-lg">
                  Fe 550
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  Industrial sheds, warehouses, heavy-load foundations,
                  infrastructure projects. Reduces bar quantity vs Fe 500 by
                  roughly 10% in equivalent designs — a cost benefit on large
                  volumes.
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-text-muted">
              Always confirm grade with your structural engineer. The above is a
              practical guide — the structural drawings and BBS are the
              authoritative specification.
            </p>
          </section>

          {/* Internal links */}
          <div className="mt-12 rounded-xl border border-border bg-surface p-6">
            <h2 className="text-h2 mb-4">Related Pages</h2>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link
                  href="/rungta-tmt-price-today"
                  className="text-accent hover:underline"
                >
                  Rungta TMT price today — Delhi NCR &amp; UP
                </Link>{" "}
                — Today&apos;s indicative rate ranges for Fe 500, Fe 500D, Fe 550.
              </li>
              <li>
                <Link
                  href="/rungta-steel-review"
                  className="text-accent hover:underline"
                >
                  Rungta Steel TMT review 2026 — dealer&apos;s guide
                </Link>{" "}
                — Manufacturer background, brand comparison, and our honest
                distributor view.
              </li>
              <li>
                <Link
                  href="/rungta-tmt-dealer-delhi-ncr"
                  className="text-accent hover:underline"
                >
                  Authorized Rungta TMT dealer in Delhi NCR
                </Link>{" "}
                — How to verify an authorized Rungta distributor.
              </li>
              <li>
                <Link
                  href="/rungta-fe-500d-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 500D TMT bars
                </Link>{" "}
                — The ductile grade for seismic zones and high-rises.
              </li>
              <li>
                <Link
                  href="/rungta-fe-550-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 550 TMT bars
                </Link>{" "}
                — High-strength grade for industrial and heavy-load projects.
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-xl font-bold text-foreground">
              Bulk &amp; trade inquiries — Rungta TMT bars
            </p>
            <p className="mt-2 text-sm text-text-muted">
              WhatsApp your grade, quantity (MT), and delivery location. We
              supply Ghaziabad same-day and Delhi NCR next-day. Mon–Sat,
              9 AM–7 PM.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta
                message="Hi Premier Steels, Rungta TMT inquiry — Grade: ___ , Quantity (MT): ___ , Delivery location: ___"
                label="WhatsApp for Rungta TMT Quote"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="text-h2">Frequently Asked Questions</h2>
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
          </div>
        </div>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
