/**
 * TMT Steel Quantity Estimator — /tmt-steel-calculator
 *
 * Server shell for SEO + metadata. Interactive estimator is a client component.
 * Logic: standard thumb rules for residential and commercial RCC-frame construction.
 * Residential: 3.5–4.5 kg/sq ft (4 kg midpoint). Commercial: 5–5.5 kg/sq ft.
 * Output: tonnage range + suggested grade + bar-size guidance.
 * CTA: WhatsApp button with prefilled message including the computed estimate.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { SteelCalculator } from "./steel-calculator";

export const metadata: Metadata = {
  title: "TMT Steel Quantity Calculator — Estimate Steel for Your Build",
  description:
    "Free TMT steel quantity estimator for Ghaziabad & Delhi-NCR builders. Enter built-up area and floors to get tonnage range, recommended grade, and bar-size guidance. Rungta TMT Fe 500D & Fe 550.",
  alternates: {
    canonical: `${site.url}/tmt-steel-calculator`,
  },
  robots: { index: true, follow: true },
};

const FAQ_ITEMS = [
  {
    question: "How accurate is this TMT steel quantity estimate?",
    answer:
      "The estimator uses industry thumb rules: 3.5–4.5 kg/sq ft for residential RCC-frame construction and 5–5.5 kg/sq ft for commercial. These are planning-stage figures used by contractors and quantity surveyors to size orders before detailed design. Your structural engineer's Bar Bending Schedule (BBS) is the definitive document — it will be more precise because it accounts for your actual column grid, span lengths, and load conditions. Use this tool to get a ballpark before design, not to replace engineering.",
  },
  {
    question: "What does Fe 500D mean and why is it recommended for residential?",
    answer:
      "Fe 500D is a ductile TMT grade per IS 1786:2008. The 'D' stands for ductility — it has a minimum elongation of 16%, compared to 12% for standard Fe 500. Higher elongation means the bar bends and absorbs energy before breaking, which is exactly what you want in seismic zones. Delhi NCR and western UP fall in seismic Zone IV. For any RCC-frame building in this region, Fe 500D is the sensible choice — and what most structural engineers specify.",
  },
  {
    question: "When should I use Fe 550 instead of Fe 500D?",
    answer:
      "Fe 550 (550 N/mm² yield strength, also IS 1786:2008) is suited for heavy-load structures: multi-storey commercial buildings, industrial sheds, infrastructure like bridges and flyovers. Its higher strength allows your structural engineer to reduce bar diameters or spacing, which can cut steel quantity by roughly 10% versus an Fe 500 design. For standard residential construction, Fe 500D is the preferred choice. Fe 550 makes economic sense when the project is structural-engineer-driven and optimizing for material savings at scale.",
  },
  {
    question: "What bar sizes should I use for foundations, columns, and slabs?",
    answer:
      "As a general guide (your BBS governs): Foundations and footings — 12 mm to 16 mm main bars. Columns and beams — 12 mm to 20 mm main bars, 8 mm stirrups. Slabs — 8 mm to 10 mm distribution bars. Larger diameters (25 mm, 28 mm, 32 mm) are used in heavily loaded columns and transfer beams. These are typical patterns — your structural drawings will specify exact diameters, lengths, and lap lengths.",
  },
  {
    question: "What is the formula for TMT bar weight per metre?",
    answer:
      "Standard formula per IS 1786: Weight (kg/m) = D² ÷ 162, where D is diameter in mm. Examples: 8 mm → 0.395 kg/m; 10 mm → 0.617 kg/m; 12 mm → 0.889 kg/m; 16 mm → 1.580 kg/m; 20 mm → 2.469 kg/m; 25 mm → 3.858 kg/m; 32 mm → 6.321 kg/m. Multiply by the total length from your BBS to get total weight per size, then sum for total tonnage.",
  },
  {
    question: "Does the estimate include wastage and lapping?",
    answer:
      "Yes — the thumb-rule factors already incorporate typical site wastage (3–5%) and lapping allowance, which is why they sit higher than the raw theoretical weight. Standard lap lengths are 50–60 bar diameters for tension zones. If you are working from a BBS with exact cut lengths, add 5–8% for wastage and laps explicitly. Do not double-count by applying wastage again on top of a thumb-rule estimate.",
  },
  {
    question: "Can I get the estimated quantity supplied by Premier Steels?",
    answer:
      "Yes. Premier Steels is an authorized Rungta Steel distributor in Ghaziabad supplying Delhi NCR and Uttar Pradesh. Monthly capacity is 10,000+ MT. Once you have your estimate, WhatsApp us with the grade, quantity, and delivery location — Vivek Aggarwal will respond personally with a price and delivery timeline.",
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

export default function TmtSteelCalculatorPage() {
  return (
    <>
      <SiteHeader />

      {/* JSON-LD */}
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
            <span aria-hidden className="text-text-subtle">
              /
            </span>
            <span className="text-text-subtle">TMT Steel Calculator</span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 max-w-3xl">
            TMT Steel Quantity Estimator —{" "}
            <span className="text-accent">Delhi NCR &amp; UP Builders</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
            <span>
              <span className="font-semibold text-foreground">
                Premier Steels
              </span>{" "}
              — Authorized Rungta Distributor, Ghaziabad
            </span>
          </div>

          {/* Intro prose */}
          <p className="mt-8 text-lg text-text-muted leading-relaxed">
            Planning how much TMT steel you need before your structural design
            is ready? Use this estimator to get a quick tonnage range based on
            built-up area and floors. Results use standard industry thumb rules
            — useful for budgeting and sizing your steel order. Your structural
            engineer&apos;s Bar Bending Schedule (BBS) is the final word.
          </p>

          {/* Interactive Calculator — client component */}
          <div className="mt-10">
            <SteelCalculator />
          </div>

          {/* How the calculator works — SEO prose */}
          <div className="mt-14 space-y-8">
            <section>
              <h2 className="text-h2">
                How this estimator works — the thumb-rule method
              </h2>
              <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Structural steel quantity estimation before detailed design
                  relies on per-square-foot thumb rules derived from years of
                  built data across similar project types. These are not
                  approximations made up for convenience — they are backward
                  calculations from actual completed buildings.
                </p>
                <p>
                  <strong className="text-foreground">
                    Residential RCC frame (G+1 to G+4):
                  </strong>{" "}
                  3.5 to 4.5 kg per sq ft of built-up area, with 4 kg/sq ft as
                  the working midpoint. A 2,000 sq ft floor plate in a 3-floor
                  building (6,000 sq ft total) lands at roughly 21–27 MT of TMT
                  steel. The midpoint estimate is 24 MT.
                </p>
                <p>
                  <strong className="text-foreground">
                    Commercial RCC frame (offices, retail, showrooms):
                  </strong>{" "}
                  5 to 5.5 kg per sq ft. Commercial buildings carry heavier live
                  loads (floors designed for crowds, machinery, or stacking),
                  which requires more steel in slabs, beams, and columns.
                </p>
                <p>
                  Both ranges already include an allowance for typical site
                  wastage (3–5%) and lapping. Do not add wastage again on top.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-h2">
                Bar size guidance — foundations, columns, slabs
              </h2>
              <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Steel quantity is only half the picture — the other half is
                  which diameters to order in what proportion. Your BBS will
                  specify exact sizes, but typical RCC-frame distribution looks
                  like this:
                </p>
                <div className="overflow-hidden rounded-xl border border-border mt-4">
                  <table className="w-full text-sm">
                    <thead className="bg-surface border-b border-border">
                      <tr>
                        <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                          Structural element
                        </th>
                        <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                          Typical bar sizes
                        </th>
                        <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                          Note
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-background">
                      <tr className="hover:bg-surface/50 transition-colors">
                        <td className="px-5 py-4 font-semibold text-foreground">
                          Foundations &amp; footings
                        </td>
                        <td className="px-5 py-4 font-mono text-foreground">
                          12–16 mm
                        </td>
                        <td className="px-5 py-4 text-text-muted">
                          Main bars; stirrups 8–10 mm
                        </td>
                      </tr>
                      <tr className="hover:bg-surface/50 transition-colors">
                        <td className="px-5 py-4 font-semibold text-foreground">
                          Columns &amp; beams
                        </td>
                        <td className="px-5 py-4 font-mono text-foreground">
                          12–20 mm
                        </td>
                        <td className="px-5 py-4 text-text-muted">
                          Main bars; links/stirrups 8 mm
                        </td>
                      </tr>
                      <tr className="hover:bg-surface/50 transition-colors">
                        <td className="px-5 py-4 font-semibold text-foreground">
                          Slabs
                        </td>
                        <td className="px-5 py-4 font-mono text-foreground">
                          8–10 mm
                        </td>
                        <td className="px-5 py-4 text-text-muted">
                          Main &amp; distribution bars
                        </td>
                      </tr>
                      <tr className="hover:bg-surface/50 transition-colors">
                        <td className="px-5 py-4 font-semibold text-foreground">
                          Heavy columns / transfer beams
                        </td>
                        <td className="px-5 py-4 font-mono text-foreground">
                          25–32 mm
                        </td>
                        <td className="px-5 py-4 text-text-muted">
                          As specified by structural engineer
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm">
                  These are typical patterns. Your structural drawings will
                  specify exact diameters, lengths, and lap lengths — always
                  order to the BBS, not to generalised patterns.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-h2">Grade selection — Fe 500D vs Fe 550</h2>
              <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
                <p>
                  Rungta Steel TMT bars are available in Fe 500, Fe 500D, and
                  Fe 550 — all certified to IS 1786:2008, all supplied with mill
                  test certificates on every consignment.
                </p>
                <p>
                  <strong className="text-foreground">Fe 500D</strong> is the
                  standard recommendation for residential construction in Delhi
                  NCR and UP. The ductile grade (16% elongation minimum) is
                  suited to Seismic Zone IV, and most structural engineers
                  default to it for RCC-frame houses and apartments. It carries
                  a small price premium over Fe 500 — worth it for seismic
                  safety.
                </p>
                <p>
                  <strong className="text-foreground">Fe 550</strong> makes
                  sense for commercial and industrial projects where the
                  structural engineer is optimising for strength-to-weight
                  ratio. At 550 N/mm² yield, fewer or smaller bars may achieve
                  the same structural result, potentially cutting steel quantity
                  by ~10% versus an Fe 500 design. Confirm with your engineer
                  before specifying.
                </p>
                <p className="text-sm">
                  Premier Steels does not stock Fe 550D. Stocked grades: Fe
                  500, Fe 500D, Fe 550.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-h2">
                Bar weight formula — D² ÷ 162 (IS 1786)
              </h2>
              <div className="mt-4 space-y-4 text-text-muted leading-relaxed">
                <p>
                  When working from a BBS, use the standard IS 1786:2008
                  formula to convert bar lengths to weight:
                </p>
                <div className="rounded-xl border border-border bg-surface p-5 font-mono text-sm text-foreground">
                  Weight (kg/m) = D² ÷ 162, where D = diameter in mm
                </div>
                <div className="overflow-hidden rounded-xl border border-border mt-4">
                  <table className="w-full text-sm">
                    <thead className="bg-surface border-b border-border">
                      <tr>
                        <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                          Dia (mm)
                        </th>
                        <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                          Weight (kg/m)
                        </th>
                        <th className="px-4 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                          Weight (kg/12m bar)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-background">
                      {[8, 10, 12, 16, 20, 25, 28, 32].map((d) => {
                        const kgpm = parseFloat((d * d / 162).toFixed(3));
                        const kgper12 = parseFloat((kgpm * 12).toFixed(2));
                        return (
                          <tr key={d} className="hover:bg-surface/50 transition-colors">
                            <td className="px-4 py-3 font-mono font-bold text-foreground">
                              {d} mm
                            </td>
                            <td className="px-4 py-3 text-right font-mono text-foreground">
                              {kgpm} kg/m
                            </td>
                            <td className="px-4 py-3 text-right font-mono text-text-muted">
                              {kgper12} kg
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm">
                  Standard bundle lengths from mill: 12 m. Cut lengths as per
                  BBS; laps at 50–60 bar diameters in tension zones.
                </p>
              </div>
            </section>

            {/* Internal links */}
            <section>
              <h2 className="text-h2">Ready to get your steel?</h2>
              <div className="mt-4 space-y-2 text-sm text-text-muted">
                <p>
                  Premier Steels supplies Rungta TMT bars to contractors,
                  builders, and project managers across Ghaziabad, Delhi NCR,
                  and Uttar Pradesh. Minimum order 5 MT for delivery; no minimum
                  for ex-yard pickup. Mill test certificate with every
                  consignment.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/rungta-tmt-price-today"
                      className="text-accent hover:underline"
                    >
                      Rungta TMT Price Today — Delhi NCR &amp; UP
                    </Link>{" "}
                    — Indicative rate ranges. Confirm exact price on WhatsApp.
                  </li>
                  <li>
                    <Link
                      href="/rungta-tmt-dealer-delhi-ncr"
                      className="text-accent hover:underline"
                    >
                      Authorized Rungta TMT Dealer in Delhi NCR
                    </Link>{" "}
                    — Why authorized matters; how to verify your distributor.
                  </li>
                </ul>
              </div>
            </section>
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
