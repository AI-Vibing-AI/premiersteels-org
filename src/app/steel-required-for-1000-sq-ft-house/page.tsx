import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/site/article-layout";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Steel Required for 1000 Sq Ft House — TMT Quantity Guide",
  description:
    "How much TMT steel is needed for a 1000 sq ft house? Thumb-rule: 3.5–4.5 MT for G+0. Floor-wise table, element split, cost framing, and what changes the number.",
  alternates: {
    canonical: `${site.url}/steel-required-for-1000-sq-ft-house`,
  },
  robots: { index: true, follow: true },
};

/* ── FAQ data ─────────────────────────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    question: "How many kg of TMT steel is required for a 1000 sq ft house?",
    answer:
      "The standard thumb rule is 3.5 to 4.5 kg of TMT steel per sq ft of built-up area for a residential RCC structure. For 1000 sq ft (G+0 / single storey), that works out to roughly 3,500–4,500 kg, i.e. 3.5–4.5 MT. Your structural engineer's Bar Bending Schedule (BBS) is the only authoritative figure — this range is for budgeting, not for ordering.",
  },
  {
    question: "Does adding a floor change the total steel significantly?",
    answer:
      "Yes. Each additional floor adds roughly 2.5–3.5 kg/sq ft (its own slab, beams, columns) AND increases the load on the lower floors, requiring heavier column reinforcement below. A G+1 house (2 floors × 1000 sq ft) typically uses 6–8 MT total, not simply double the G+0 figure — column reinforcement at ground level becomes heavier.",
  },
  {
    question: "Which TMT grade should I use for a residential house?",
    answer:
      "Fe 500D is the preferred grade for residential construction in Delhi NCR and UP. The 'D' denotes higher ductility (elongation ≥16%), which is important for seismic resistance. IS 13920 recommends ductile grades for earthquake-prone regions. Fe 500 is also acceptable for low-seismic designs; Fe 550 is more commonly used for heavy industrial/infrastructure projects.",
  },
  {
    question: "What sizes of TMT bars are used in a house?",
    answer:
      "Typical residential usage: 8 mm for slab mesh and stirrups; 10–12 mm for stirrups in beams and columns; 12–16 mm for main bars in beams and columns; 16–20 mm for heavily loaded columns. Your structural drawing specifies exact sizes. Rungta TMT is available 8 mm to 32 mm.",
  },
  {
    question: "How do I calculate the cost of TMT steel for my house?",
    answer:
      "Multiply your estimated tonnage (e.g. 4 MT for a 1000 sq ft G+0) by the current per-MT rate. Steel prices move daily, so check today's Rungta TMT price before budgeting. Allow a 5–8% wastage margin on your total estimate. See our live price page for current rates.",
  },
  {
    question: "Is this estimate enough to place a steel order?",
    answer:
      "No. The 3.5–4.5 kg/sq ft thumb rule is only for initial budgeting. Before placing any order, get a Bar Bending Schedule (BBS) prepared by your structural engineer from the approved structural drawing. The BBS gives exact bar sizes, lengths, and quantities for each structural element.",
  },
  {
    question: "What does 'seismic detailing' do to steel quantity?",
    answer:
      "IS 13920 seismic detailing (required in seismic zones III–V, which includes Delhi NCR and most of UP) mandates closer stirrup spacing in beam-column joints, confinement hoops in columns, and minimum reinforcement ratios that are higher than the basic IS 456 design. This typically adds 15–25% to column and beam steel quantities compared to a non-seismic design.",
  },
];

/* ── JSON-LD: FAQPage ─────────────────────────────────────────────────────── */

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

/* ── Page ─────────────────────────────────────────────────────────────────── */

export default function SteelFor1000SqFtPage() {
  const WA_MESSAGE =
    "Hi Premier Steels, Rungta TMT inquiry — Grade: Fe 500D , Quantity (MT): ___ , Delivery location: ___ (1000 sq ft house project)";

  return (
    <>
      <SiteHeader />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />

      <main className="flex-1">
        <ArticleLayout
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Steel Required for 1000 Sq Ft House" },
          ]}
          h1="How Much TMT Steel Is Required for a 1000 Sq Ft House?"
          date="2026-06-12"
          ctaMessage={WA_MESSAGE}
        >
          {/* ── Intro ──────────────────────────────────────────────────────── */}
          <p>
            One of the first things every contractor and home-builder wants to
            know before breaking ground: <strong>how much TMT steel will I
            need?</strong> The honest answer is — only your structural
            engineer&apos;s <strong>Bar Bending Schedule (BBS)</strong> gives
            you the correct number. What this page gives you is the
            industry-standard thumb rule for residential RCC construction, a
            floor-wise breakdown, and a clear explanation of what pushes that
            number up or down.
          </p>

          <div className="not-prose my-8 rounded-xl border border-accent/30 bg-accent/5 px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Disclaimer
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              All figures on this page are <strong>thumb-rule estimates</strong>{" "}
              for residential RCC construction. They are suitable for initial
              budgeting only. <strong>Your approved structural drawing and
              Bar Bending Schedule (BBS) are the final authority</strong> for
              ordering steel. Do not place a procurement order based solely on
              these estimates.
            </p>
          </div>

          {/* ── Thumb rule ─────────────────────────────────────────────────── */}
          <h2>The Thumb Rule: 3.5–4.5 kg per Sq Ft</h2>
          <p>
            For a standard single-storey (ground-floor) residential RCC
            structure in Delhi NCR / UP, the widely used thumb rule is:
          </p>
          <ul>
            <li>
              <strong>Low-load design</strong> (small spans, stable soil, non-seismic
              detailing): ~3.5 kg/sq ft
            </li>
            <li>
              <strong>Typical residential design</strong> (standard spans 4–5 m,
              Delhi NCR seismic zone, standard column spacing): ~4.0 kg/sq ft
            </li>
            <li>
              <strong>Heavy-load or seismic detailing</strong> (IS 13920 ductile
              detailing, rocky/filled soil with deep foundations, longer spans):
              ~4.5 kg/sq ft
            </li>
          </ul>
          <p>
            For a <strong>1000 sq ft single-storey house</strong>, this translates
            to:
          </p>

          {/* Quick summary box */}
          <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-surface">
                <tr>
                  <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                    Scenario
                  </th>
                  <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                    Rate (kg/sq ft)
                  </th>
                  <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                    Total (1000 sq ft)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                <tr>
                  <td className="px-5 py-4 text-foreground">Low-load G+0</td>
                  <td className="px-5 py-4 text-right font-mono text-text-muted">3.5 kg</td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">3.5 MT</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">Typical G+0</td>
                  <td className="px-5 py-4 text-right font-mono text-text-muted">4.0 kg</td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">4.0 MT</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">Seismic-detailed G+0</td>
                  <td className="px-5 py-4 text-right font-mono text-text-muted">4.5 kg</td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">4.5 MT</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Floor-wise table ───────────────────────────────────────────── */}
          <h2>Floor-wise Steel Estimate — 1000 Sq Ft Footprint</h2>
          <p>
            When you add floors, each floor adds its own slab, beams, and
            columns — and the lower-storey columns become heavier to carry the
            accumulated load. The table below shows typical cumulative steel for
            a 1000 sq ft built-up area per floor (standard residential design,
            seismic zone IV, approx. 4–5 m spans).
          </p>

          <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-surface">
                <tr>
                  <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                    Structure
                  </th>
                  <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                    Total built-up
                  </th>
                  <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                    Steel range
                  </th>
                  <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                    Typical mid
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                <tr>
                  <td className="px-5 py-4 font-semibold text-foreground">G (Ground only)</td>
                  <td className="px-5 py-4 text-right text-text-muted">1,000 sq ft</td>
                  <td className="px-5 py-4 text-right font-mono text-text-muted">3.5–4.5 MT</td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">~4.0 MT</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-foreground">G + 1 (2 floors)</td>
                  <td className="px-5 py-4 text-right text-text-muted">2,000 sq ft</td>
                  <td className="px-5 py-4 text-right font-mono text-text-muted">7.5–9.5 MT</td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">~8.5 MT</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-foreground">G + 2 (3 floors)</td>
                  <td className="px-5 py-4 text-right text-text-muted">3,000 sq ft</td>
                  <td className="px-5 py-4 text-right font-mono text-text-muted">12–15.5 MT</td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">~13.5 MT</td>
                </tr>
              </tbody>
            </table>
            <p className="px-5 py-3 text-xs text-text-muted border-t border-border">
              Estimates only. Each floor adds 3.5–4.5 kg/sq ft for its own slab/beams,
              plus heavier columns below due to cumulative load. Structural BBS is final.
            </p>
          </div>

          <p>
            Notice that G+1 is <em>not</em> simply 2× the G+0 figure. The
            ground-floor columns must now carry twice the load, and IS 13920
            seismic detailing requires closer stirrup spacing in column-beam
            joints — both push up the column reinforcement weight.
          </p>

          {/* ── Element-wise split ─────────────────────────────────────────── */}
          <h2>Element-wise Steel Split (Typical Residential)</h2>
          <p>
            Where does the steel actually go? For a typical single-storey
            residential RCC structure, the approximate split is:
          </p>

          <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-surface">
                <tr>
                  <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                    Element
                  </th>
                  <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                    % of total steel
                  </th>
                  <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                    Common bar sizes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                <tr>
                  <td className="px-5 py-4 text-foreground">
                    <span className="font-semibold">Footing / Foundation</span>
                    <span className="block text-xs text-text-muted">
                      Isolated or strip footings
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">
                    20–25%
                  </td>
                  <td className="px-5 py-4 text-text-muted text-xs">
                    12 mm, 16 mm
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">
                    <span className="font-semibold">Columns</span>
                    <span className="block text-xs text-text-muted">
                      Main bars + lateral ties / stirrups
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">
                    20–25%
                  </td>
                  <td className="px-5 py-4 text-text-muted text-xs">
                    12 mm, 16 mm (main); 8 mm, 10 mm (stirrups)
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">
                    <span className="font-semibold">Beams</span>
                    <span className="block text-xs text-text-muted">
                      Main tension/compression bars + stirrups
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">
                    25–30%
                  </td>
                  <td className="px-5 py-4 text-text-muted text-xs">
                    12 mm, 16 mm (main); 8 mm, 10 mm (stirrups)
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">
                    <span className="font-semibold">Slab</span>
                    <span className="block text-xs text-text-muted">
                      Two-way / one-way mesh
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">
                    20–25%
                  </td>
                  <td className="px-5 py-4 text-text-muted text-xs">
                    8 mm, 10 mm
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">
                    <span className="font-semibold">Lintel / Misc.</span>
                    <span className="block text-xs text-text-muted">
                      Door/window lintels, staircase, misc. ties
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-mono font-bold text-foreground">
                    5–10%
                  </td>
                  <td className="px-5 py-4 text-text-muted text-xs">
                    8 mm, 10 mm, 12 mm
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="px-5 py-3 text-xs text-text-muted border-t border-border">
              Approximate percentages for a typical G+0 residential RCC structure.
              Actual split varies with your structural design.
            </p>
          </div>

          {/* ── Cost framing ───────────────────────────────────────────────── */}
          <h2>Estimating the Steel Cost</h2>
          <p>
            Once you have a tonnage estimate, multiply by the current TMT price
            per MT. Steel prices change daily with market conditions — never
            budget using a rate you heard a week ago.
          </p>
          <p>
            <strong>Formula:</strong> Steel cost = Estimated tonnage (MT) ×
            Current rate (₹/MT)
          </p>
          <p>
            Example at a hypothetical rate of ₹56,000/MT (Fe 500D):
          </p>
          <ul>
            <li>G+0 low estimate: 3.5 MT × ₹56,000 = ₹1,96,000</li>
            <li>G+0 typical: 4.0 MT × ₹56,000 = ₹2,24,000</li>
            <li>G+0 high estimate: 4.5 MT × ₹56,000 = ₹2,52,000</li>
          </ul>
          <p>
            Add 5–8% for wastage on site (cutting, lapping). For the latest
            Rungta TMT rate in Delhi NCR and UP, see our{" "}
            <Link href="/rungta-tmt-price-today">
              Rungta TMT Price Today
            </Link>{" "}
            page — rates are updated regularly and confirmed on WhatsApp before
            any order.
          </p>

          {/* ── What changes the number ────────────────────────────────────── */}
          <h2>What Changes the Steel Quantity?</h2>
          <p>
            The 3.5–4.5 kg/sq ft range is not random — these factors are what
            push a design toward the lower or upper end:
          </p>

          <h3>1. Soil Bearing Capacity</h3>
          <p>
            Weak or filled soil requires deeper, wider footings or even pile
            foundations — significantly more steel in the foundation. Stable
            hard soil with a good bearing capacity allows smaller footings and
            cuts foundation steel. Get a soil test (SBC test) before finalizing
            your foundation design.
          </p>

          <h3>2. Span Lengths (Column Spacing)</h3>
          <p>
            Longer spans between columns mean longer beams carrying heavier
            loads — beam steel increases roughly as the square of the span.
            Typical residential column spacing is 3.5–5 m. If your layout
            demands 6+ m spans (open living area, garage), expect noticeably
            heavier beams and more steel per sq ft.
          </p>

          <h3>3. Number of Floors</h3>
          <p>
            As explained in the floor-wise table above, each floor adds its own
            structural elements and increases the load on lower columns.
            Going G+0 → G+1 → G+2 does not scale steel linearly — column
            reinforcement at lower floors grows faster than the floor area.
          </p>

          <h3>4. Seismic Zone and IS 13920 Detailing</h3>
          <p>
            Delhi, Noida, Ghaziabad, and most of UP fall in seismic zones III
            and IV. IS 13920 ductile detailing requires:
          </p>
          <ul>
            <li>
              Minimum stirrup/tie spacing of d/4 or 100 mm in beam-column
              joint zones (vs. d/2 in basic IS 456 design)
            </li>
            <li>
              Confinement hoops in columns over the full potential plastic hinge
              length
            </li>
            <li>
              Higher minimum reinforcement ratios in columns and beams
            </li>
          </ul>
          <p>
            This adds roughly 15–25% steel in columns and beams compared to a
            basic IS 456 design for the same loads. If your structural engineer
            is doing IS 13920 detailing (as they should in Delhi NCR and UP),
            budget toward the higher end of the thumb rule.
          </p>

          <h3>5. Grade of TMT Steel</h3>
          <p>
            Higher-strength grades can reduce steel quantity:
          </p>
          <ul>
            <li>
              <strong>Fe 500D</strong> — recommended for residential,
              especially seismic zones; typical choice.
            </li>
            <li>
              <strong>Fe 550</strong> — ~10% less steel by weight vs. Fe 500
              for an equivalent design, useful in heavily reinforced columns and
              beams. Less common for typical residential work.
            </li>
          </ul>
          <p>
            Switching from Fe 500D to Fe 550 mid-project is not recommended —
            your structural drawing is grade-specific. Confirm the design grade
            with your engineer before ordering.
          </p>

          <h3>6. Slab Thickness</h3>
          <p>
            A standard residential slab is 125–150 mm thick. Thicker slabs
            (150–175 mm for heavier loads, terraces) add slab steel weight
            proportionally. Thin slabs (100 mm, sometimes used in stilt floors)
            reduce slab steel but increase beam reinforcement.
          </p>

          {/* ── Bar weight note ────────────────────────────────────────────── */}
          <h2>Quick Reference: Bar Weight per Metre</h2>
          <p>
            The standard formula for the weight of a TMT bar per metre of
            length (IS 1786:2008) is:
          </p>
          <p className="font-mono text-sm bg-surface rounded-lg px-4 py-3 not-prose my-4">
            Weight (kg/m) = D² ÷ 162
          </p>
          <p>
            Where D is the nominal diameter in mm. Common sizes:
          </p>

          <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-surface">
                <tr>
                  <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                    Dia (mm)
                  </th>
                  <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                    Weight (kg/m)
                  </th>
                  <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                    Typical use in house
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {[
                  { d: 8, w: "0.395", use: "Slab mesh, stirrups" },
                  { d: 10, w: "0.617", use: "Slab mesh, stirrups, lintels" },
                  { d: 12, w: "0.889", use: "Column ties, beam stirrups, slab (heavy)" },
                  { d: 16, w: "1.580", use: "Column main bars, beam main bars" },
                  { d: 20, w: "2.469", use: "Heavy columns, ground floor" },
                  { d: 25, w: "3.858", use: "Multi-storey columns (G+2 and above)" },
                ].map((row) => (
                  <tr key={row.d} className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-3 font-mono font-bold text-foreground">
                      {row.d} mm
                    </td>
                    <td className="px-5 py-3 text-right font-mono text-accent">
                      {row.w}
                    </td>
                    <td className="px-5 py-3 text-text-muted text-xs">
                      {row.use}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-5 py-3 text-xs text-text-muted border-t border-border">
              Formula: D² ÷ 162 kg/m per IS 1786:2008. For a full size chart,
              see our{" "}
              <Link href="/tmt-bar-weight-chart" className="text-accent hover:underline">
                TMT Bar Weight Chart
              </Link>.
            </p>
          </div>

          {/* ── Internal links ─────────────────────────────────────────────── */}
          <h2>Next Steps</h2>
          <p>
            Once you have your structural drawing and BBS, use these tools to
            refine your estimate and check today&apos;s pricing:
          </p>
          <ul>
            <li>
              <Link href="/tmt-steel-calculator">
                TMT Steel Calculator
              </Link>{" "}
              — Enter bar diameter, length, and count to get the exact weight
              from your BBS.
            </li>
            <li>
              <Link href="/tmt-bar-weight-chart">
                TMT Bar Weight Chart
              </Link>{" "}
              — Full weight-per-metre reference for 8 mm to 32 mm Rungta TMT bars.
            </li>
            <li>
              <Link href="/rungta-tmt-price-today">
                Rungta TMT Price Today
              </Link>{" "}
              — Current indicative rates for Fe 500, Fe 500D, Fe 550 in Delhi
              NCR and UP. Confirm exact rate on WhatsApp.
            </li>
            <li>
              <Link href="/rungta-tmt-dealer-delhi-ncr">
                Authorized Rungta Dealer in Delhi NCR
              </Link>{" "}
              — How to verify an authorized Rungta Steel distributor and what
              the mill test certificate covers.
            </li>
          </ul>

          {/* ── FAQ ────────────────────────────────────────────────────────── */}
          <h2>Frequently Asked Questions</h2>
          <div className="not-prose mt-6 space-y-3">
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
        </ArticleLayout>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
