import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const metadata: Metadata = {
  title: "TMT Bar Weight Chart 8mm–32mm — kg/m, per Bar & Bundle",
  description:
    "Accurate TMT bar weight chart for 8mm to 32mm diameters. Per-metre weight (D²/162 formula), per 12m bar weight, bundle weights, and bars-per-tonne table. Essential for BBS and quantity estimation.",
  alternates: {
    canonical: `${site.url}/tmt-bar-weight-chart`,
  },
  robots: { index: true, follow: true },
};

/**
 * TMT bar weight data computed from the IS 1786 formula: W = D² / 162 kg/m
 *
 * Standard industry bundle counts (typical — vary by mill):
 *   8mm  → 10 bars/bundle
 *   10mm → 7 bars/bundle
 *   12mm → 5 bars/bundle
 *   16mm → 3 bars/bundle
 *   20mm → 2 bars/bundle
 *   25mm → 1 bar/bundle (sold loose or in smaller bundles at some mills)
 *   28mm → 1 bar/bundle
 *   32mm → 1 bar/bundle
 */
const BAR_LENGTH_M = 12; // standard mill length

type BarData = {
  dia: number; // mm
  weightPerMetre: number; // kg/m, rounded to 3 dp
  weightPerBar: number; // kg per 12m bar, rounded to 2 dp
  barsPerBundle: number; // typical industry standard
  bundleWeight: number; // kg, rounded to 1 dp
  barsPerTonne: number; // rounded to nearest whole
};

function computeBar(dia: number, barsPerBundle: number): BarData {
  const wpm = parseFloat((Math.pow(dia, 2) / 162).toFixed(3));
  const wpb = parseFloat((wpm * BAR_LENGTH_M).toFixed(2));
  const bw = parseFloat((wpb * barsPerBundle).toFixed(1));
  const bpt = Math.round(1000 / wpb);
  return { dia, weightPerMetre: wpm, weightPerBar: wpb, barsPerBundle, bundleWeight: bw, barsPerTonne: bpt };
}

const BUNDLE_COUNTS: [number, number][] = [
  [8, 10],
  [10, 7],
  [12, 5],
  [16, 3],
  [20, 2],
  [25, 1],
  [28, 1],
  [32, 1],
];

const BAR_TABLE: BarData[] = BUNDLE_COUNTS.map(([dia, bpc]) => computeBar(dia, bpc));

const FAQ_ITEMS = [
  {
    question: "What is the formula for TMT bar weight per metre?",
    answer:
      "The standard formula from IS 1786:2008 is: Weight (kg/m) = D² ÷ 162, where D is the nominal diameter in millimetres. For example, a 16mm bar: 16 × 16 ÷ 162 = 256 ÷ 162 = 1.580 kg/m. This is the same formula used in BBS (Bar Bending Schedule) calculations across India.",
  },
  {
    question: "How much does one bundle of 12mm TMT bar weigh?",
    answer:
      "A standard bundle of 12mm TMT bars contains 5 bars × 12 metres each. Weight per metre = 12² ÷ 162 = 0.889 kg/m. Weight per bar = 0.889 × 12 = 10.67 kg. Bundle weight = 10.67 × 5 = 53.3 kg. Note: exact bundle counts and weights vary slightly by mill — always weigh at delivery.",
  },
  {
    question: "How many 8mm TMT bars are in one tonne?",
    answer:
      "An 8mm bar weighs 8² ÷ 162 = 0.395 kg/m, and 0.395 × 12 = 4.74 kg per 12m bar. One tonne = 1000 kg. So 1000 ÷ 4.74 ≈ 211 bars per tonne of 8mm TMT. Similarly, 10mm ≈ 130 bars/tonne, 12mm ≈ 93 bars/tonne.",
  },
  {
    question: "Does the weight formula change for Fe 500D vs Fe 500?",
    answer:
      "No. The unit weight formula (D² ÷ 162) is independent of grade. Fe 500, Fe 500D, and Fe 550 bars of the same nominal diameter have the same theoretical weight per metre. The difference between grades is in mechanical properties (yield strength, elongation) — not density or cross-section.",
  },
  {
    question: "Why does actual bundle weight sometimes differ from the chart?",
    answer:
      "Three reasons: (1) Nominal diameter vs actual — IS 1786 allows a small tolerance on diameter. (2) Mill bundle counts vary — some mills pack 8mm in 8-bar bundles, others in 10-bar bundles. (3) Rolling tolerances add up. For project estimation, use the formula weight. For payment, always weigh at the yard or site. We supply with a mill test certificate confirming the stated grade.",
  },
  {
    question: "How do I calculate the total steel weight for my BBS?",
    answer:
      "For each bar entry in your BBS: Weight (kg) = (D² ÷ 162) × Length (m) × Number of bars. Sum all entries to get total kg; divide by 1000 for MT. WhatsApp us your BBS or just the total MT and grade — we'll confirm availability and today's rate immediately.",
  },
  {
    question: "What is the standard bar length supplied by Premier Steels?",
    answer:
      "Rungta Steel TMT bars are supplied in standard 12-metre lengths. Cut lengths can be arranged for larger orders — discuss requirements on WhatsApp before ordering.",
  },
  {
    question: "Which TMT grades does Premier Steels stock?",
    answer:
      "We stock Rungta Steel TMT bars in Fe 500, Fe 500D, and Fe 550 grades, sizes 8mm to 32mm. All consignments come with IS 1786:2008 certification and a Rungta mill test certificate. We are an authorized Rungta Steel distributor serving Delhi, NCR and Uttar Pradesh since 2018.",
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

const WA_MESSAGE =
  "Hi Premier Steels, I'd like to share my BBS / requirement for a TMT quantity estimate — Grade: ___ , Total MT (approx): ___ , Delivery location: ___";

export default function WeightChartPage() {
  return (
    <>
      <SiteHeader />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />

      <main className="flex-1">
        <div className="container-page py-12 lg:py-16 max-w-5xl mx-auto">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-text-muted"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span aria-hidden className="text-text-subtle">/</span>
            <span className="text-text-subtle">TMT Bar Weight Chart</span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 max-w-4xl">
            TMT Bar Weight Chart —{" "}
            <span className="text-accent">8mm to 32mm</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
            <span>
              <span className="font-semibold text-foreground">Premier Steels</span>{" "}
              — Authorized Rungta Distributor, Ghaziabad
            </span>
            <span aria-hidden className="hidden sm:inline text-text-subtle">·</span>
            <time dateTime="2026-06-12" className="text-text-subtle">
              Last updated: 12 June 2026
            </time>
          </div>

          {/* Intro */}
          <p className="mt-8 text-lg text-text-muted leading-relaxed">
            This chart gives the unit weight of Rungta Steel TMT bars from 8mm to
            32mm — per metre, per 12-metre bar, and per standard bundle — using
            the IS 1786:2008 formula <strong className="text-foreground">W = D² ÷ 162</strong>.
            Use it for BBS (Bar Bending Schedule) calculations, delivery planning,
            and material estimates before you call for a price.
          </p>

          {/* Formula box */}
          <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 px-6 py-5">
            <h2 className="text-base font-semibold text-foreground">
              The Formula — IS 1786:2008
            </h2>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              <strong className="font-mono text-accent text-base">W (kg/m) = D² ÷ 162</strong>
              <span className="ml-2 text-text-subtle">(D = nominal diameter in mm)</span>
            </p>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              <strong className="text-foreground">Worked example — 16mm bar:</strong>
              {" "}16 × 16 = 256 → 256 ÷ 162 = <strong className="text-foreground">1.580 kg/m</strong>.
              Per 12m bar: 1.580 × 12 = <strong className="text-foreground">18.96 kg</strong>.
              Per bundle of 3 bars: 18.96 × 3 = <strong className="text-foreground">56.9 kg</strong>.
              For 1 tonne of 16mm bars: 1000 ÷ 18.96 ≈ <strong className="text-foreground">53 bars</strong>.
            </p>
            <p className="mt-3 text-xs text-text-subtle">
              Note: 162 derives from the steel density (~7850 kg/m³) and unit conversion constant.
              The same formula applies to Fe 500, Fe 500D, and Fe 550 — grade does not affect unit weight.
            </p>
          </div>

          {/* Main weight chart table */}
          <div className="mt-10">
            <h2 className="text-h2 mb-4">
              TMT Bar Weight Chart — All Sizes
            </h2>
            <p className="mb-4 text-sm text-text-muted">
              Bundle counts shown are typical industry standards and may vary by mill.
              Actual bundle weight should be confirmed at delivery.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Dia (mm)
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      D²
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      kg / metre
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      kg / 12m bar
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Bars / bundle
                      <span className="block normal-case font-normal tracking-normal text-[10px] text-text-subtle">(typical)</span>
                    </th>
                    <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Bundle wt (kg)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {BAR_TABLE.map((row) => (
                    <tr
                      key={row.dia}
                      className="hover:bg-surface/50 transition-colors"
                    >
                      <td className="px-4 py-4 font-display font-bold text-foreground">
                        {row.dia} mm
                      </td>
                      <td className="px-4 py-4 text-right font-mono text-text-muted">
                        {row.dia * row.dia}
                      </td>
                      <td className="px-4 py-4 text-right font-mono text-accent font-semibold">
                        {row.weightPerMetre.toFixed(3)}
                      </td>
                      <td className="px-4 py-4 text-right font-mono text-foreground">
                        {row.weightPerBar.toFixed(2)}
                      </td>
                      <td className="px-4 py-4 text-right font-mono text-foreground">
                        {row.barsPerBundle}
                      </td>
                      <td className="px-4 py-4 text-right font-mono text-foreground">
                        {row.bundleWeight.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-subtle">
              Bundle counts: 8mm–10 bars, 10mm–7 bars, 12mm–5 bars, 16mm–3 bars, 20mm–2 bars,
              25mm/28mm/32mm–1 bar. These are typical and vary by mill. Verify with the mill test
              certificate supplied with every Premier Steels consignment.
            </p>
          </div>

          {/* Bars per tonne table */}
          <div className="mt-12">
            <h2 className="text-h2 mb-4">
              How Many Bars in 1 Tonne? — Quick Reference
            </h2>
            <p className="mb-4 text-sm text-text-muted">
              Useful when estimating delivery loads or checking a quote.
              Based on standard 12m bar lengths.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm min-w-[400px]">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Diameter
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      kg per 12m bar
                    </th>
                    <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                      Bars per tonne (1000 kg)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {BAR_TABLE.map((row) => (
                    <tr
                      key={row.dia}
                      className="hover:bg-surface/50 transition-colors"
                    >
                      <td className="px-5 py-4 font-display font-bold text-foreground">
                        {row.dia} mm
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-text-muted">
                        {row.weightPerBar.toFixed(2)} kg
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-accent font-semibold">
                        ≈ {row.barsPerTonne} bars
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Practical notes for Ghaziabad/Delhi contractors */}
          <div className="mt-12">
            <h2 className="text-h2 mb-4">How to Use This Chart on Site</h2>
            <div className="space-y-4 text-sm text-text-muted leading-relaxed">
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-2">BBS quantity estimation</h3>
                <p>
                  From your structural drawing, list every bar: diameter, cut length, and number of
                  bars. Multiply: <span className="font-mono text-foreground">(D² ÷ 162) × length × count</span> for
                  each row, then sum and divide by 1000 to get MT. Add 5–7% for laps and wastage on
                  a typical residential project; your structural engineer will specify the exact lap
                  length per IS 456.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-2">Checking a TMT rate quote</h3>
                <p>
                  Steel is always quoted per kg or per MT — never per bar. If a supplier quotes per
                  bar, convert using this chart. For example, a 16mm bar quote of ₹950/bar: divide
                  by 18.96 kg = ₹50.1/kg. Compare against the current market rate (see our{" "}
                  <Link href="/rungta-tmt-price-today" className="text-accent hover:underline">
                    Rungta TMT price today
                  </Link>{" "}
                  page) to quickly spot if a quote is fair.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-foreground mb-2">Truck load planning</h3>
                <p>
                  A standard 10-tonne truck carries roughly 10,000 kg of TMT bars, typically with
                  12m bars loaded flat. Use the bars-per-tonne table above to estimate how many
                  bars fit per trip. For large projects in Ghaziabad, Noida, or Delhi, we can
                  arrange direct mill-to-site bulk dispatch — WhatsApp your delivery address and
                  total MT.
                </p>
              </div>
            </div>
          </div>

          {/* Primary WhatsApp CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-xl font-bold text-foreground">
              Send your BBS or requirement for an exact tonnage and today&apos;s rate
            </p>
            <p className="mt-2 text-sm text-text-muted">
              WhatsApp your grade, quantity (MT), and delivery location — Vivek Aggarwal
              responds personally with stock availability and a confirmed price.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta
                message={WA_MESSAGE}
                label="Send BBS / Requirement on WhatsApp"
              />
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-12">
            <h2 className="text-h2 mb-4">Related Pages</h2>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <Link
                  href="/rungta-tmt-price-today"
                  className="text-accent hover:underline"
                >
                  Rungta TMT Bar Price Today — Delhi NCR &amp; UP
                </Link>{" "}
                — Indicative rate ranges for Fe 500, Fe 500D, and Fe 550 per kg.
              </li>
              <li>
                <Link
                  href="/rungta-tmt-dealer-delhi-ncr"
                  className="text-accent hover:underline"
                >
                  Authorized Rungta TMT Dealer in Delhi NCR
                </Link>{" "}
                — How to verify you are buying from an authorized Rungta distributor.
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="text-h2 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
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

          {/* Closing secondary CTA */}
          <div className="mt-12 rounded-xl border border-[#25D366]/20 bg-[#25D366]/5 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-foreground">
                Bulk &amp; trade inquiries — Vivek Aggarwal, Proprietor
              </p>
              <p className="mt-1 text-sm text-text-muted">
                Premier Steels · 8, Loha Mandi, Bulandshahar Industrial Area, Ghaziabad, UP ·
                Mon–Sat 9 AM–7 PM
              </p>
            </div>
            <WhatsAppCta
              message={WA_MESSAGE}
              label="WhatsApp Inquiry"
              size="sm"
            />
          </div>

        </div>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
