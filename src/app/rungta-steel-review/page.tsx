import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const metadata: Metadata = {
  title: "Rungta Steel TMT Review 2026 — Dealer's Buyer Guide",
  description:
    "Honest dealer's review of Rungta Steel TMT bars. Manufacturer background, product range, IS 1786:2008, and how Rungta compares vs Tata Tiscon and JSW. Delhi NCR & UP.",
  alternates: {
    canonical: `${site.url}/rungta-steel-review`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Rungta Steel TMT Review 2026 — Dealer's Buyer Guide",
    description:
      "A distributor's honest look at Rungta Steel TMT bars — grades, sizes, certifications, and market positioning vs major national brands.",
    url: `${site.url}/rungta-steel-review`,
    siteName: site.name,
    type: "article",
  },
};

const FAQ_ITEMS = [
  {
    question: "Who manufactures Rungta Steel TMT bars?",
    answer:
      "Rungta Steel TMT bars are manufactured by Rungta Mines Limited, a Jharkhand-based integrated steel group established in 1962. The group has steel plants in Jharkhand and Odisha and markets its TMT products under the Rungta Steel brand.",
  },
  {
    question: "Is Rungta Steel IS 1786:2008 certified?",
    answer:
      "Yes. Rungta Steel TMT bars conform to IS 1786:2008, the Indian Standard for high strength deformed steel bars and wires for concrete reinforcement. A mill test certificate (MTC) accompanies every consignment dispatched from Premier Steels, verifying the mechanical properties and chemical composition for that specific batch.",
  },
  {
    question: "How does Rungta Steel compare to Tata Tiscon?",
    answer:
      "Tata Tiscon and Rungta Steel both manufacture IS 1786:2008-compliant TMT bars. Tata Tiscon has a longer national brand history and is often priced at a premium. Rungta Steel is positioned as a strong regional and mid-tier national brand, offering competitive pricing while meeting the same IS standard. The grade, size, and mill test certificate — not the brand name alone — are the legally and structurally relevant factors. We are a Rungta dealer, not a Tata dealer, so we cannot make a direct price comparison on the same day's rates.",
  },
  {
    question: "How does Rungta compare to JSW Neosteel?",
    answer:
      "JSW Neosteel is a national premium brand with wide marketing. Rungta Steel competes on price-to-performance in Delhi NCR and UP markets. Both meet IS 1786:2008. We distribute only Rungta Steel — our view is that for budget-conscious but specification-compliant projects, Rungta offers a better value proposition in our geography.",
  },
  {
    question: "What grades does Premier Steels stock from Rungta?",
    answer:
      "We stock Rungta TMT bars in Fe 500, Fe 500D, and Fe 550 — in sizes 8 mm to 32 mm. We do not stock Fe 550D. The manufacturer's full range (per their catalogue) extends to Fe 550D and sizes up to 40 mm, but our yard carries 8–32 mm in the three grades listed above.",
  },
  {
    question: "What is a mill test certificate and should I ask for one?",
    answer:
      "A mill test certificate (MTC) is a document issued by the steel manufacturer for each production lot. It certifies the chemical composition (carbon, sulphur, phosphorus, etc.) and mechanical properties (yield strength, tensile strength, elongation, bend test result) of that batch. Yes — always ask for the MTC. It is the only documented proof that the bars you received meet the grade you ordered. Premier Steels provides an MTC with every consignment.",
  },
  {
    question: "Are there brand ambassadors for Rungta Steel?",
    answer:
      "As of our last information, Rungta Steel has used high-profile Bollywood talent (Shah Rukh Khan, Alia Bhatt, Ranbir Kapoor) in national advertising campaigns. These endorsements signal a national brand investment strategy — they do not constitute a quality certification, but they do indicate Rungta Steel's intent to operate as a national-scale branded player rather than a purely regional supplier.",
  },
  {
    question: "Should I choose Fe 500 or Fe 500D for a house in Ghaziabad?",
    answer:
      "Ghaziabad falls in seismic zone IV. IS 13920 (ductile detailing for seismic zones) recommends Fe 500D (or higher ductility grades) for moment-resisting frames in seismic zones III and above. For a safe answer: consult your structural engineer. As a practical note, most serious structural consultants in Delhi NCR default to Fe 500D for any reinforced concrete framing work. We stock Fe 500D in all sizes. WhatsApp us for quantity and pricing.",
  },
];

function buildArticleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Rungta Steel TMT Bars Review (2026): A Dealer's Honest Buyer's Guide",
    description:
      "Factual review of Rungta Steel TMT bars — manufacturer background, product grades, IS 1786:2008, and honest comparison with Tata Tiscon and JSW Neosteel.",
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
    url: `${site.url}/rungta-steel-review`,
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
        name: "Rungta Steel Review 2026",
        item: `${site.url}/rungta-steel-review`,
      },
    ],
  };
}

export default function RungtaSteelReviewPage() {
  return (
    <>
      <SiteHeader />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleJsonLd()) }}
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
            <span className="text-text-subtle">Rungta Steel Review 2026</span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 max-w-3xl">
            Rungta Steel TMT Bars Review (2026):{" "}
            <span className="text-accent">A Dealer&apos;s Honest Buyer&apos;s Guide</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
            <span>
              <span className="font-semibold text-foreground">Premier Steels</span>{" "}
              — Authorized Rungta Distributor, Ghaziabad
            </span>
            <span aria-hidden className="text-text-subtle">
              ·
            </span>
            <time dateTime="2026-06-12" className="text-text-subtle">
              Last updated: 12 June 2026
            </time>
          </div>

          {/* Disclosure */}
          <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 px-5 py-4 text-sm text-text-muted">
            <p>
              <span className="font-semibold text-accent">Disclosure:</span>{" "}
              Premier Steels is an authorized distributor of Rungta Steel TMT
              bars for Delhi NCR and Uttar Pradesh. We have a commercial
              relationship with Rungta Steel. This review presents factual
              information about the brand and product; where we compare Rungta
              to competing brands, we will clearly say when a claim is based on
              market positioning rather than independent measurement data.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-slate max-w-none mt-10 prose-headings:font-display prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">

            <h2>About Rungta Steel — Who Makes These Bars?</h2>
            <p>
              Rungta Steel TMT bars are manufactured by{" "}
              <strong>Rungta Mines Limited</strong>, a Jharkhand-based integrated
              steel group with roots going back to 1962. The group operates iron
              ore mines, pellet plants, sponge iron units, and steel plants in
              Jharkhand and Odisha — a vertically integrated setup that gives them
              control over upstream raw material costs.
            </p>
            <p>
              For the Delhi NCR and UP market, Rungta Steel has invested
              significantly in brand visibility. Their national advertising
              campaigns have featured Shah Rukh Khan, Alia Bhatt, and Ranbir
              Kapoor. This level of marketing investment signals that Rungta is
              positioning itself as a national-scale brand rather than a purely
              regional supplier. Brand ambassador spend is a useful proxy for a
              manufacturer&apos;s intent to build long-term brand equity — it is not,
              by itself, a quality indicator, but it does reduce the likelihood of
              the brand-name disappearing overnight.
            </p>
            <p>
              We have distributed Rungta Steel TMT bars since 2018. In that time
              we have handled over 10,000 MT of monthly capacity and supplied
              500+ projects across Ghaziabad, Delhi, Noida, and the broader UP
              belt. Our experience with the product is hands-on, not theoretical.
            </p>

            <h2>Product Range — What Rungta Makes vs What We Stock</h2>
            <p>
              Rungta Steel&apos;s full manufacturer catalogue includes Fe 500, Fe 500D,
              Fe 550, and Fe 550D grades in sizes from 8 mm to 40 mm. Our yard
              stocks the following:
            </p>

            <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Grade
                    </th>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Sizes stocked
                    </th>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      Best for
                    </th>
                    <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                      In stock
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 font-display font-bold text-foreground">
                      Fe 500
                    </td>
                    <td className="px-5 py-4 text-text-muted">8 – 32 mm</td>
                    <td className="px-5 py-4 text-text-muted">
                      Residential, commercial
                    </td>
                    <td className="px-5 py-4 text-[#25D366] font-semibold">Yes</td>
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 font-display font-bold text-foreground">
                      Fe 500D
                    </td>
                    <td className="px-5 py-4 text-text-muted">8 – 32 mm</td>
                    <td className="px-5 py-4 text-text-muted">
                      Seismic zones, high-rises
                    </td>
                    <td className="px-5 py-4 text-[#25D366] font-semibold">Yes</td>
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 font-display font-bold text-foreground">
                      Fe 550
                    </td>
                    <td className="px-5 py-4 text-text-muted">8 – 32 mm</td>
                    <td className="px-5 py-4 text-text-muted">
                      Industrial, heavy-load
                    </td>
                    <td className="px-5 py-4 text-[#25D366] font-semibold">Yes</td>
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 font-display font-bold text-text-muted">
                      Fe 550D
                    </td>
                    <td className="px-5 py-4 text-text-muted">—</td>
                    <td className="px-5 py-4 text-text-muted">
                      Special-order only
                    </td>
                    <td className="px-5 py-4 text-text-subtle font-semibold">
                      Not stocked
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              If you need Fe 550D or sizes above 32 mm, WhatsApp us — we can
              arrange it as a special order via the manufacturer, but lead times
              will differ from our standard ex-yard supply.
            </p>

            <h2>IS 1786:2008 — What the Standard Actually Requires</h2>
            <p>
              Every Rungta Steel TMT bar we supply conforms to{" "}
              <strong>IS 1786:2008</strong>, the Bureau of Indian Standards
              specification for high strength deformed steel bars and wires for
              concrete reinforcement. Here is what that standard mandates for the
              three grades we stock:
            </p>

            <div className="not-prose my-6 overflow-hidden rounded-xl border border-border">
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
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      500 N/mm²
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      500 N/mm²
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      550 N/mm²
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 text-text-muted">
                      Min. tensile strength
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      545 N/mm²
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      565 N/mm²
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      585 N/mm²
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 text-text-muted">
                      Min. % elongation (gauge length 5.65√A)
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      12%
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-accent font-bold">
                      16%
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      10%
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/50 transition-colors">
                    <td className="px-5 py-4 text-text-muted">
                      UTS / YS ratio (min.)
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      1.08
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      1.10
                    </td>
                    <td className="px-5 py-4 text-right font-mono text-foreground">
                      1.06
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The &quot;D&quot; in Fe 500D stands for the enhanced ductility
              requirement — 16% minimum elongation vs 12% for Fe 500. Higher
              elongation means the bar deforms more before fracturing, which is
              critical in an earthquake, where structures undergo repeated
              large-deformation cycles. Ghaziabad is in seismic zone IV. For
              any moment-resisting reinforced concrete frame — which is standard
              in multi-storey residential and commercial construction — your
              structural engineer will almost certainly specify Fe 500D.
            </p>

            <p>
              A mill test certificate (MTC) from Rungta Steel will report these
              values for the specific lot you receive. If the values on your MTC
              are below the IS 1786:2008 minimums for the grade marked on the
              bars, that is a non-conformance. Always cross-check.{" "}
              <Link href="/rungta-tmt-specifications">
                Full IS 1786:2008 specifications for each grade are on our spec
                page.
              </Link>
            </p>

            <h2>
              How Rungta Compares to Tata Tiscon, JSW Neosteel, and Regional
              Brands
            </h2>
            <p>
              We will be direct: we are a Rungta dealer, and we do not
              independently test competing brands. The following comparison is
              based on market positioning, not on side-by-side laboratory data
              — we will say explicitly which claims are positioning and which
              are specification facts.
            </p>

            <h3>Rungta Steel vs Tata Tiscon</h3>
            <p>
              <strong>Specification fact:</strong> Both brands produce IS
              1786:2008-compliant TMT bars. The same minimum mechanical
              properties apply to both.
            </p>
            <p>
              <strong>Positioning:</strong> Tata Tiscon is widely considered a
              premium national brand and typically carries a price premium of
              ₹2–5/kg over Rungta Steel in the Delhi NCR market, depending on
              the day&apos;s rate. Tata Steel&apos;s brand has a longer national history.
              Whether that premium is justified for a given project is a
              commercial decision, not a structural one — both meet the same
              standard.
            </p>
            <p>
              <strong>Our view:</strong> For budget-sensitive projects where the
              structural engineer is satisfied with IS 1786:2008-compliant Fe
              500D from an authorized distributor with mill test certificates,
              Rungta Steel is a cost-effective alternative to Tata Tiscon.
            </p>

            <h3>Rungta Steel vs JSW Neosteel</h3>
            <p>
              <strong>Specification fact:</strong> JSW Neosteel also conforms
              to IS 1786:2008. Both are IS-compliant products.
            </p>
            <p>
              <strong>Positioning:</strong> JSW Neosteel markets heavily on
              its Thermex quenching technology branding. Thermex is a
              manufacturing process — it is one way to achieve the required
              mechanical properties, not a standard above IS 1786:2008. Both
              Rungta and JSW ultimately must meet the same IS 1786 specification
              to carry the grade marking.
            </p>
            <p>
              <strong>Our view:</strong> In Ghaziabad, Noida, and Delhi NCR,
              Rungta Steel is competitively priced against JSW Neosteel. Supply
              consistency from our Ghaziabad yard is predictable — we maintain
              significant stock. For large projects, delivery schedule
              reliability often matters as much as per-kg price.
            </p>

            <h3>Rungta Steel vs Regional / Local Brands</h3>
            <p>
              The Delhi NCR and UP market has numerous smaller regional mills
              selling TMT bars, sometimes at prices ₹5–10/kg below Rungta
              Steel. These products may or may not meet IS 1786:2008 — the
              critical difference is documentation and traceability.
            </p>
            <p>
              Rungta Steel is a nationally marketed brand with a formal
              authorized distributor network, which means:
            </p>
            <ul>
              <li>
                Mill test certificates are issued per production lot and traceable
                to the manufacturing plant.
              </li>
              <li>
                The brand name creates accountability — a non-conformance can be
                formally escalated.
              </li>
              <li>
                Banks and government project approvals routinely accept Rungta
                Steel as a compliant brand.
              </li>
            </ul>
            <p>
              For any project where the structure will be handed over to a buyer,
              where a bank loan is involved, or where a government agency
              inspects materials, a documented supply chain with MTCs is
              non-negotiable. Local unbranded TMT at a lower price point
              typically cannot provide that documentation trail.
            </p>

            <h2>Mill Test Certificate — What It Is and Why You Need It</h2>
            <p>
              A mill test certificate (MTC), also called a test certificate or
              material test report (MTR), is a document issued by the steel mill
              for each production heat (batch). It states:
            </p>
            <ul>
              <li>
                <strong>Chemical composition</strong> — carbon (C), sulphur (S),
                phosphorus (P), manganese (Mn), and carbon equivalent (Ceq) for
                the batch.
              </li>
              <li>
                <strong>Mechanical properties</strong> — measured yield strength
                (0.2% proof stress), UTS, elongation, and bend test result for
                the lot.
              </li>
              <li>
                Grade designation (Fe 500 / Fe 500D / Fe 550) and the IS 1786:2008
                standard.
              </li>
              <li>
                Size range covered, heat number, and date of production.
              </li>
            </ul>
            <p>
              <strong>Premier Steels supplies a Rungta Steel MTC with every
              consignment, without exception.</strong> If a dealer (including us,
              on any future order) cannot produce an MTC, that is a red flag.
              Do not accept bars without documentation.
            </p>
            <p>
              For a full breakdown of how to read an MTC and what the IS
              1786:2008 limits are,{" "}
              <Link href="/rungta-tmt-specifications">
                see our Rungta TMT specifications page
              </Link>
              .
            </p>

            <h2>Delivery and Supply — Delhi NCR and Uttar Pradesh</h2>
            <p>
              Premier Steels operates from Loha Mandi, Bulandshahar Industrial
              Area, Ghaziabad — the main steel trading hub for eastern Delhi NCR
              and western UP. We supply:
            </p>
            <ul>
              <li>
                <strong>Same-day dispatch:</strong> within Ghaziabad (subject to
                order size and stock availability).
              </li>
              <li>
                <strong>Next-day delivery:</strong> across Delhi NCR — Delhi,
                Noida, Gurugram, Faridabad.
              </li>
              <li>
                <strong>Scheduled delivery:</strong> wider UP locations — confirm
                lead time on WhatsApp.
              </li>
            </ul>
            <p>
              We are an authorized distributor for Delhi NCR and Uttar Pradesh
              only. We do not supply outside this geography.
            </p>

            <h2>Bottom Line — Should You Buy Rungta Steel TMT Bars?</h2>
            <p>
              If your project requirements are:
            </p>
            <ul>
              <li>IS 1786:2008-compliant TMT bars with documented MTCs</li>
              <li>
                A nationally recognized brand accepted by banks, government
                agencies, and structural consultants
              </li>
              <li>
                Delivery to Ghaziabad, Delhi NCR, or Uttar Pradesh
              </li>
              <li>
                Competitive pricing vs Tata Tiscon / JSW Neosteel with no
                sacrifice on specification compliance
              </li>
            </ul>
            <p>
              Then Rungta Steel TMT bars from an authorized distributor are a
              rational choice. We are an authorized distributor. WhatsApp us
              your grade, quantity, and location and we will give you the day&apos;s
              confirmed rate.
            </p>
          </div>

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
                  href="/rungta-tmt-specifications"
                  className="text-accent hover:underline"
                >
                  Rungta TMT bar specifications (IS 1786:2008)
                </Link>{" "}
                — Full spec tables: grades, mechanical properties, sizes, and
                how to read an MTC.
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
              WhatsApp your grade, quantity, and delivery location. Vivek
              Aggarwal responds personally with today&apos;s confirmed rate.
              Mon–Sat, 9 AM–7 PM.
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
