import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { ArticleLayout } from "@/components/site/article-layout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fe 500 vs Fe 500D vs Fe 550 — Which TMT Grade?",
  description:
    "IS 1786:2008 comparison of Fe 500, Fe 500D, Fe 550 TMT grades. Yield strength, UTS ratio, elongation, seismic suitability. Grade recommendations for Ghaziabad, Noida & Delhi NCR projects.",
  alternates: {
    canonical: `${site.url}/fe-500-vs-fe-500d-vs-fe-550`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Fe 500 vs Fe 500D vs Fe 550: Which TMT Grade for Your Project?",
    description:
      "Clear IS 1786:2008 comparison table, what the 'D' suffix really means, and concrete grade recommendations for residential and commercial projects in Delhi NCR and UP.",
    url: `${site.url}/fe-500-vs-fe-500d-vs-fe-550`,
    siteName: site.name,
    type: "article",
  },
};

/* ─── IS 1786:2008 comparison data ──────────────────────────────────────────
   Source: IS 1786:2008 Table 1 (mechanical properties).
   Yield strength: minimum characteristic value.
   UTS/YS ratio: minimum required by the standard.
   Elongation: minimum % gauge length.
   All values are minimums — actual mill production typically exceeds them.
──────────────────────────────────────────────────────────────────────────── */
const GRADE_DATA = [
  {
    grade: "Fe 500",
    yieldStrength: "500 N/mm² min",
    utsYsRatio: "1.08 min",
    elongation: "12% min",
    ductility: "Standard",
    seismic: "Zone II–III (low seismic risk)",
    bestFor: "Standard residential, low-rise commercial",
    highlight: false,
  },
  {
    grade: "Fe 500D",
    yieldStrength: "500 N/mm² min",
    utsYsRatio: "1.10 min",
    elongation: "16% min",
    ductility: "High (D = Ductile)",
    seismic: "Zone III–V — mandated in Zone IV+ per IS 13920",
    bestFor: "Seismic zones, multi-storey, bridges",
    highlight: true,
  },
  {
    grade: "Fe 550",
    yieldStrength: "550 N/mm² min",
    utsYsRatio: "1.06 min",
    elongation: "10% min",
    ductility: "Lower than Fe 500D",
    seismic: "Zone II–III; use with caution in Zone IV+",
    bestFor: "Heavy industrial, large-span commercial",
    highlight: false,
  },
];

const FAQ_ITEMS = [
  {
    question: "What does the 'D' in Fe 500D stand for?",
    answer:
      "The 'D' stands for Ductile. IS 1786:2008 defines Fe 500D as having a higher minimum elongation (16% vs 12% for Fe 500) and a higher UTS/YS ratio (1.10 vs 1.08). These two properties together mean the bar can absorb more energy before fracture — which is exactly what you need during an earthquake when the structure deflects but must not collapse.",
  },
  {
    question: "Is Fe 500D mandatory for Delhi NCR projects?",
    answer:
      "Delhi NCR falls in Seismic Zone IV per IS 1893. IS 13920 (ductile detailing of reinforced concrete structures — the mandatory companion code for Zone III and above) requires ductile reinforcement. IS 13920:2016 Clause 5.2 explicitly recommends steel conforming to IS 1786:2008 with higher ductility — i.e., Fe 500D. Structural engineers designing for Zone IV routinely specify Fe 500D as the default. Fe 500 is not prohibited, but a competent structural engineer will choose Fe 500D for any seismic-zone project.",
  },
  {
    question: "Can I mix Fe 500 and Fe 500D in the same structure?",
    answer:
      "Technically you can mix grades within a structure if the structural engineer specifies it — for example, Fe 500 in non-seismic secondary members, Fe 500D in primary columns and beams. However, this complicates site management and inspection. For most residential projects in Delhi NCR and Uttar Pradesh, specifying Fe 500D throughout is simpler, avoids procurement errors, and adds only a marginal cost premium over Fe 500.",
  },
  {
    question: "Why is Fe 550 cheaper to use despite costing more per kg?",
    answer:
      "Fe 550 has a higher yield strength (550 N/mm² vs 500 N/mm²), so a structural engineer can design with ~10% less steel for equivalent strength in non-seismic members. If you are building a large industrial shed or a warehouse where seismic ductility is less critical, the lower steel quantity can offset the higher per-kg price. However, Fe 550 has lower minimum elongation (10% vs 16% for Fe 500D), so it is not the right choice for seismic-zone residential or frame buildings.",
  },
  {
    question: "What is Fe 550D and does Premier Steels stock it?",
    answer:
      "Fe 550D is a high-strength ductile grade — 550 N/mm² yield strength combined with high elongation. It exists in the IS 1786:2008 standard and is available in the market. Premier Steels currently stocks Fe 500, Fe 500D, and Fe 550. We do not stock Fe 550D. If your project requires Fe 550D, WhatsApp us and we will check availability through our Rungta Steel supply chain.",
  },
  {
    question: "How do I verify the grade of bars I receive on site?",
    answer:
      "Every consignment from Premier Steels comes with a Rungta Steel mill test certificate (MTC) that states the heat number, chemical composition, yield strength, UTS, and elongation. The bars themselves are roll-marked with the grade designation (e.g., 'Fe500D'). Cross-check the roll mark against the MTC heat number. If you need a third-party lab test, we can point you to NABL-accredited labs in Ghaziabad.",
  },
  {
    question: "What is the weight per metre for common TMT bar sizes?",
    answer:
      "TMT bar weight per metre = D² / 162 kg/m (where D is diameter in mm). Quick reference: 8mm = 0.395 kg/m, 10mm = 0.617 kg/m, 12mm = 0.889 kg/m, 16mm = 1.580 kg/m, 20mm = 2.469 kg/m, 25mm = 3.858 kg/m, 32mm = 6.321 kg/m. This applies to all three grades — weight per metre is set by diameter, not by grade.",
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
        name: "Fe 500 vs Fe 500D vs Fe 550",
        item: `${site.url}/fe-500-vs-fe-500d-vs-fe-550`,
      },
    ],
  };
}

function buildArticleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Fe 500 vs Fe 500D vs Fe 550: Which TMT Grade for Your Project?",
    description:
      "IS 1786:2008 comparison of Fe 500, Fe 500D, and Fe 550 TMT bar grades with grade recommendations for Delhi NCR and UP construction projects.",
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    datePublished: "2026-06-12",
    dateModified: "2026-06-12",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/fe-500-vs-fe-500d-vs-fe-550`,
    },
  };
}

export default function GradeComparisonPage() {
  return (
    <>
      <SiteHeader />

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildArticleJsonLd()),
        }}
      />

      <main className="flex-1">
        <ArticleLayout
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Fe 500 vs Fe 500D vs Fe 550" },
          ]}
          h1="Fe 500 vs Fe 500D vs Fe 550: Which TMT Grade for Your Project?"
          date="2026-06-12"
          ctaMessage="Hi Premier Steels, Rungta TMT inquiry — Grade: ___ , Quantity (MT): ___ , Delivery location: ___"
        >
          {/* ── Intro ── */}
          <p>
            If you are buying Rungta TMT bars for a project in Ghaziabad, Noida,
            or anywhere in Delhi NCR, you will be asked to choose between Fe 500,
            Fe 500D, and Fe 550. The grades look similar on a price list but they
            are meaningfully different under IS 1786:2008 — the standard that
            governs TMT bars in India. This page gives you the actual numbers from
            the standard, explains what the &quot;D&quot; suffix means, and makes
            a concrete grade recommendation for three common project types.
          </p>

          {/* ── IS 1786:2008 comparison table ── */}
          <h2>IS 1786:2008 Grade Comparison</h2>
          <p>
            All three grades are defined in IS 1786:2008, Table 1 (mechanical
            properties of hot-rolled TMT bars). The key differences are yield
            strength, the UTS/YS (Ultimate Tensile Strength to Yield Strength)
            ratio, and minimum elongation.
          </p>

          <div className="not-prose my-8 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[680px] text-sm">
              <thead className="bg-surface border-b border-border">
                <tr>
                  <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                    Property
                  </th>
                  <th className="px-5 py-3 text-center font-mono text-xs uppercase tracking-wider text-text-muted">
                    Fe 500
                  </th>
                  <th className="px-5 py-3 text-center font-mono text-xs uppercase tracking-wider text-accent">
                    Fe 500D ★
                  </th>
                  <th className="px-5 py-3 text-center font-mono text-xs uppercase tracking-wider text-text-muted">
                    Fe 550
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">
                    Min. Yield Strength (YS)
                  </td>
                  <td className="px-5 py-4 text-center font-mono text-foreground">
                    500 N/mm²
                  </td>
                  <td className="px-5 py-4 text-center font-mono font-bold text-accent bg-accent/5">
                    500 N/mm²
                  </td>
                  <td className="px-5 py-4 text-center font-mono text-foreground">
                    550 N/mm²
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">
                    Min. UTS / YS Ratio
                  </td>
                  <td className="px-5 py-4 text-center font-mono text-foreground">
                    1.08
                  </td>
                  <td className="px-5 py-4 text-center font-mono font-bold text-accent bg-accent/5">
                    1.10
                  </td>
                  <td className="px-5 py-4 text-center font-mono text-foreground">
                    1.06
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">
                    Min. Elongation
                  </td>
                  <td className="px-5 py-4 text-center font-mono text-foreground">
                    12%
                  </td>
                  <td className="px-5 py-4 text-center font-mono font-bold text-accent bg-accent/5">
                    16%
                  </td>
                  <td className="px-5 py-4 text-center font-mono text-foreground">
                    10%
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">
                    Ductility classification
                  </td>
                  <td className="px-5 py-4 text-center text-text-muted">
                    Standard
                  </td>
                  <td className="px-5 py-4 text-center font-semibold text-accent bg-accent/5">
                    High (D = Ductile)
                  </td>
                  <td className="px-5 py-4 text-center text-text-muted">
                    Lower than Fe 500D
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">
                    Seismic zone suitability
                  </td>
                  <td className="px-5 py-4 text-center text-text-muted">
                    Zone II–III
                  </td>
                  <td className="px-5 py-4 text-center font-semibold text-accent bg-accent/5">
                    Zone III–V; required in Zone IV+
                  </td>
                  <td className="px-5 py-4 text-center text-text-muted">
                    Zone II–III; caution in Zone IV+
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-medium text-foreground">
                    Standard reference
                  </td>
                  <td className="px-5 py-4 text-center text-text-muted">
                    IS 1786:2008
                  </td>
                  <td className="px-5 py-4 text-center text-text-muted bg-accent/5">
                    IS 1786:2008
                  </td>
                  <td className="px-5 py-4 text-center text-text-muted">
                    IS 1786:2008
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-text-muted">
            ★ Fe 500D is highlighted because Delhi NCR lies in Seismic Zone IV —
            see below for details.
          </p>

          {/* ── What the D suffix means ── */}
          <h2>What Does the &quot;D&quot; in Fe 500D Mean?</h2>
          <p>
            The &quot;D&quot; stands for <strong>Ductile</strong>. Ductility in
            steel means the ability to deform plastically — bend and stretch —
            before fracturing. A ductile bar gives you visible warning before
            failure; a brittle bar snaps without warning.
          </p>
          <p>
            IS 1786:2008 encodes ductility through two requirements that Fe 500D
            must meet which Fe 500 does not:
          </p>
          <ul>
            <li>
              <strong>Minimum elongation of 16%</strong> (vs 12% for Fe 500).
              Elongation measures how much a bar stretches before breaking in a
              tensile test. Higher elongation = more energy absorbed = more
              ductile.
            </li>
            <li>
              <strong>Minimum UTS/YS ratio of 1.10</strong> (vs 1.08 for Fe 500).
              This ratio measures the gap between where the bar yields and where
              it breaks. A larger gap means the structure can redistribute load
              after yielding — critical in seismic events where members are
              pushed well past their yield point.
            </li>
          </ul>
          <p>
            Together these two requirements mean an Fe 500D bar can deform
            significantly under extreme loads — such as an earthquake — without
            fracturing. This is the core reason seismic codes mandate it.
          </p>

          {/* ── Delhi NCR seismic zone callout ── */}
          <div className="not-prose my-8 rounded-2xl border border-accent/40 bg-accent/5 px-6 py-5">
            <p className="font-bold text-accent text-base">
              Delhi NCR is Seismic Zone IV — Fe 500D is the sensible residential
              default
            </p>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              IS 1893 (Part 1):2016 classifies Delhi and the National Capital
              Region — including Ghaziabad, Noida, Faridabad, and Gurugram — in
              Seismic Zone IV (high damage risk). IS 13920:2016 (ductile
              detailing of reinforced concrete structures), which is mandatory for
              Zone III and above, requires reinforcement with adequate ductility.
              Structural engineers designing for Zone IV specify Fe 500D as
              standard practice for primary structural members — columns, beams,
              and shear walls. This is not a marketing claim; it is the
              engineering consensus for this seismic zone.
            </p>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              Fe 500 is not prohibited in Zone IV, but any engineer familiar with
              IS 13920 will default to Fe 500D for a residential frame structure
              in Delhi NCR. The price premium over Fe 500 is typically ₹2–4/kg —
              marginal against the cost of the project.
            </p>
          </div>

          {/* ── Three project scenarios ── */}
          <h2>Grade Recommendation by Project Type</h2>
          <p>
            Here are three project types common to customers ordering from
            Premier Steels&apos; yard in Ghaziabad, with a specific grade
            recommendation and the reasoning behind it.
          </p>

          {/* Scenario 1: G+1 house Ghaziabad */}
          <h3>Scenario 1 — G+1 House, Ghaziabad (Personal Residence)</h3>
          <div className="not-prose mb-2 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5">
            <span className="font-mono text-sm font-bold text-accent">
              Recommended: Fe 500D
            </span>
          </div>
          <p>
            A ground-plus-one residential house in Ghaziabad is a standard
            reinforced concrete frame structure. The structural engineer will
            design columns, beams, and slabs as per IS 456:2000 and IS
            13920:2016. Because Ghaziabad is in Zone IV, the detailing code
            applies. The slab steel (distributors) can be Fe 500 if your engineer
            specifies it, but primary members — columns and beams — should be Fe
            500D.
          </p>
          <p>
            Practically: specify Fe 500D throughout. It eliminates procurement
            confusion on site (one grade, one set of cut-bending markings), and
            the cost premium over Fe 500 on a typical G+1 house of 1,500 sq ft
            built-up area is roughly ₹15,000–25,000 — call it 0.5% of build
            cost. Not a number worth arguing with your structural engineer over.
          </p>

          {/* Scenario 2: 4-floor builder floor Noida */}
          <h3>
            Scenario 2 — 4-Floor Builder Floor, Noida (Investment / Rental)
          </h3>
          <div className="not-prose mb-2 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5">
            <span className="font-mono text-sm font-bold text-accent">
              Recommended: Fe 500D throughout
            </span>
          </div>
          <p>
            Four-storey builder floor constructions in Noida and Greater Noida
            typically go up quickly and are sold as individual floors. Noida is
            also Zone IV. At four storeys the structure is taller, the load on
            ground-floor columns is higher, and seismic forces are amplified
            compared to a G+1. IS 13920 detailing is not optional here — it is
            the minimum.
          </p>
          <p>
            Fe 500D throughout is the correct call. Some builders try to use Fe
            500 on upper floors to save money; a competent structural engineer
            will not sign off on this without specific justification. If a
            contractor quotes you Fe 500 for a 4-floor Noida structure, ask for
            the structural engineer&apos;s written grade specification before
            accepting.
          </p>

          {/* Scenario 3: Commercial shed */}
          <h3>Scenario 3 — Industrial Shed / Warehouse, Ghaziabad</h3>
          <div className="not-prose mb-2 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5">
            <span className="font-mono text-sm font-bold text-accent">
              Recommended: Fe 550 (columns/beams); Fe 500D (footings)
            </span>
          </div>
          <p>
            A single-storey industrial shed — steel-frame or pre-engineered
            building (PEB) with an RCC foundation — has a different structural
            character from a residential frame. The roof is lightweight, lateral
            loads are low, and primary columns carry vertical loads without the
            seismic ductility demand of a multi-storey frame.
          </p>
          <p>
            For the RCC columns and portal frames of a shed, Fe 550 allows the
            structural engineer to reduce bar diameter or spacing while
            maintaining the same capacity — typically a 10% reduction in steel
            quantity vs Fe 500. On a 10,000 sq ft shed requiring 30 MT of steel,
            that is 3 MT saved. If Fe 550 trades at ₹2–4/kg more than Fe 500 but
            you need 10% less of it, the net saving is meaningful.
          </p>
          <p>
            For footings and ground beams — where ductile failure is preferable
            to brittle failure in an earthquake — Fe 500D remains the better
            choice even for industrial structures. Discuss the split with your
            structural engineer; they will confirm based on your specific design.
          </p>

          {/* ── Fe 550D mention ── */}
          <h2>What About Fe 550D?</h2>
          <p>
            Fe 550D is defined in IS 1786:2008 — it combines the 550 N/mm²
            minimum yield strength of Fe 550 with the higher elongation (14.5%
            min) and UTS/YS ratio (1.06 min) of the &quot;D&quot; designation.
            It is used in demanding infrastructure projects — long-span bridges,
            metro rail structures, high-rise cores — where both high strength and
            seismic ductility are required simultaneously.
          </p>
          <p>
            Fe 550D is available in the Indian market from major mills. Premier
            Steels stocks Fe 500, Fe 500D, and Fe 550. If your structural
            engineer specifies Fe 550D,{" "}
            <Link href="/" className="text-accent hover:underline">
              contact us on WhatsApp
            </Link>{" "}
            and we will check availability through our Rungta Steel supply chain.
          </p>

          {/* ── How to read the mill test cert ── */}
          <h2>How to Verify Grade on Site — Reading the Mill Test Certificate</h2>
          <p>
            Every consignment from Premier Steels comes with a Rungta Steel mill
            test certificate (MTC). Here is what to check:
          </p>
          <ul>
            <li>
              <strong>Grade designation:</strong> Should read &quot;Fe 500D&quot;,
              &quot;Fe 500&quot;, or &quot;Fe 550&quot; exactly.
            </li>
            <li>
              <strong>Yield strength (YS):</strong> Must meet or exceed the
              minimum for the grade (500 or 550 N/mm²).
            </li>
            <li>
              <strong>UTS/YS ratio:</strong> Check it is ≥ 1.10 for Fe 500D, ≥
              1.08 for Fe 500, ≥ 1.06 for Fe 550.
            </li>
            <li>
              <strong>Elongation %:</strong> Must be ≥ 16% for Fe 500D, ≥ 12%
              for Fe 500, ≥ 10% for Fe 550.
            </li>
            <li>
              <strong>Roll mark:</strong> Each bar carries a roll-stamped grade
              mark. Match it to the MTC heat number.
            </li>
          </ul>
          <p>
            If the MTC shows elongation of 14% on bars sold as Fe 500D, that is a
            non-conformance — push back with the MTC in hand. All Rungta Steel
            MTCs we supply are issued by Rungta Steel&apos;s own quality lab and
            cover the full heat batch.
          </p>

          {/* ── Bar weight reference ── */}
          <h2>Quick Bar Weight Reference (All Grades)</h2>
          <p>
            Bar weight per metre is determined by diameter, not by grade. Formula:
            weight (kg/m) = D² ÷ 162, where D is diameter in mm.
          </p>

          <div className="not-prose my-6 overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-surface border-b border-border">
                <tr>
                  <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                    Diameter
                  </th>
                  <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                    kg / m
                  </th>
                  <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                    kg / 12 m bar
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {[
                  { dia: "8 mm", kgm: "0.395", kg12: "4.74" },
                  { dia: "10 mm", kgm: "0.617", kg12: "7.41" },
                  { dia: "12 mm", kgm: "0.889", kg12: "10.67" },
                  { dia: "16 mm", kgm: "1.580", kg12: "18.96" },
                  { dia: "20 mm", kgm: "2.469", kg12: "29.63" },
                  { dia: "25 mm", kgm: "3.858", kg12: "46.30" },
                  { dia: "28 mm", kgm: "4.840", kg12: "58.07" },
                  { dia: "32 mm", kgm: "6.321", kg12: "75.85" },
                ].map((row) => (
                  <tr key={row.dia} className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-3 font-mono font-medium text-foreground">
                      {row.dia}
                    </td>
                    <td className="px-5 py-3 text-right font-mono text-foreground">
                      {row.kgm}
                    </td>
                    <td className="px-5 py-3 text-right font-mono text-text-muted">
                      {row.kg12}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-muted">
            Weight per metre = D² ÷ 162 kg/m (IS standard formula). Values apply
            to Fe 500, Fe 500D, and Fe 550 equally.
          </p>

          {/* ── Internal links ── */}
          <h2>Prices and Availability</h2>
          <p>
            Premier Steels stocks all three grades — Fe 500, Fe 500D, and Fe 550
            — as Rungta Steel TMT bars, 8 mm to 32 mm, with mill test certificate
            on every consignment. We supply across Delhi NCR and Uttar Pradesh
            from our yard at Loha Mandi, Ghaziabad.
          </p>
          <ul>
            <li>
              <Link
                href="/rungta-tmt-price-today"
                className="text-accent hover:underline"
              >
                Rungta TMT price today
              </Link>{" "}
              — indicative per-kg rate for all three grades, updated daily.
            </li>
            <li>
              <Link
                href="/rungta-tmt-dealer-delhi-ncr"
                className="text-accent hover:underline"
              >
                Authorized Rungta dealer in Delhi NCR
              </Link>{" "}
              — how to verify distributor authorization and what it means for
              your project.
            </li>
            <li>
              <Link
                href="/rungta-fe-500d-tmt-bars"
                className="text-accent hover:underline"
              >
                Rungta Fe 500D TMT bars
              </Link>{" "}
              — specifications, sizes, and ordering for the ductile grade.
            </li>
            <li>
              <Link
                href="/rungta-fe-550-tmt-bars"
                className="text-accent hover:underline"
              >
                Rungta Fe 550 TMT bars
              </Link>{" "}
              — specifications and use cases for the high-strength grade.
            </li>
          </ul>

          {/* ── FAQ ── */}
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
