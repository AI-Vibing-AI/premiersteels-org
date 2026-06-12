import type { Metadata } from "next";
import Link from "next/link";
import { resolveRates } from "@/lib/rates";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

export const metadata: Metadata = {
  title: "Rungta TMT Bar Price Today — Delhi NCR & UP",
  description:
    "Today's indicative Rungta Steel TMT bar prices in Delhi NCR and Uttar Pradesh. Fe 500, Fe 500D, Fe 550 rate ranges per kg. Confirm exact daily price on WhatsApp.",
  alternates: {
    canonical: `${site.url}/rungta-tmt-price-today`,
  },
  robots: { index: true, follow: true },
};

const FAQ_ITEMS = [
  {
    question: "Are these prices inclusive of GST?",
    answer:
      "No. All prices shown are exclusive of GST. Rungta TMT bars attract 18% GST. Your invoice will show the base price + 18% GST separately. WhatsApp us for the exact rate with GST.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum order for delivery is typically 5 MT. For ex-yard pickup at our Ghaziabad yard, there is no minimum. WhatsApp us to confirm for your specific requirement.",
  },
  {
    question: "What delivery areas do you cover?",
    answer:
      "We supply across Delhi NCR (Delhi, Noida, Gurugram, Faridabad, Ghaziabad) and Uttar Pradesh. Same-day dispatch within Ghaziabad; next-day to Delhi NCR; scheduled to other UP locations.",
  },
  {
    question: "Do you provide a mill test certificate?",
    answer:
      "Yes — a Rungta Steel mill test certificate comes with every consignment, without exception. The certificate verifies grade (Fe 500 / Fe 500D / Fe 550), yield strength, elongation, and chemical composition per IS 1786:2008.",
  },
  {
    question: "Why do Rungta TMT prices vary daily?",
    answer:
      "Steel prices move with global iron ore costs, domestic scrap rates, energy prices, and seasonal demand. Indicative ranges help you budget; the confirmed price is locked at order time. Always WhatsApp before ordering to get today's actual rate.",
  },
  {
    question: "What is the difference between Fe 500, Fe 500D, and Fe 550?",
    answer:
      "Fe 500 is the standard grade for residential and commercial construction. Fe 500D ('D' for ductile) has higher elongation and is mandatory in seismic zones per IS 13920. Fe 550 offers higher strength, reducing steel quantity by ~10% in equivalent designs — preferred for heavy industrial and infrastructure projects.",
  },
];

/** Product JSON-LD for Rungta TMT */
function buildProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Rungta Steel TMT Bars",
    description:
      "Rungta Steel TMT bars in Fe 500, Fe 500D, and Fe 550 grades. Sizes 8 mm to 32 mm. IS 1786:2008 certified. Supplied with mill test certificate.",
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
      {
        "@type": "PropertyValue",
        name: "Standard",
        value: "IS 1786:2008",
      },
      {
        "@type": "PropertyValue",
        name: "Size range",
        value: "8 mm to 32 mm",
      },
    ],
  };
}

/** FAQPage JSON-LD */
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

export default function PriceTodayPage() {
  const rates = resolveRates();

  const formattedDate =
    rates.displayMode !== "unavailable"
      ? new Date(rates.lastUpdated).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null;

  return (
    <>
      <SiteHeader />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildProductJsonLd()),
        }}
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
            <span aria-hidden className="text-text-subtle">
              /
            </span>
            <span className="text-text-subtle">Rungta TMT Price Today</span>
          </nav>

          {/* H1 */}
          <h1 className="text-h1 max-w-3xl">
            Rungta TMT Bar Price Today —{" "}
            <span className="text-accent">Delhi NCR &amp; UP</span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
            <span>
              <span className="font-semibold text-foreground">
                Premier Steels
              </span>{" "}
              — Authorized Rungta Distributor, Ghaziabad
            </span>
            {formattedDate && (
              <>
                <span aria-hidden className="text-text-subtle">
                  ·
                </span>
                <time
                  dateTime={rates.displayMode !== "unavailable" ? rates.lastUpdated : undefined}
                  className="text-text-subtle"
                >
                  Last updated: {formattedDate}
                </time>
              </>
            )}
          </div>

          {/* Intro */}
          <p className="mt-8 text-lg text-text-muted leading-relaxed">
            Below are today&apos;s indicative price ranges for Rungta Steel TMT
            bars supplied by Premier Steels across Delhi NCR and Uttar Pradesh.
            Steel prices fluctuate daily — exact rates are confirmed on WhatsApp
            at the time of order and locked in writing before dispatch.
          </p>

          {/* Price table or unavailable fallback */}
          <div className="mt-10">
            {rates.displayMode === "exact" ? (
              <ExactPriceTable prices={rates.prices} unit={rates.unit} />
            ) : rates.displayMode === "range" ? (
              <RangePriceTable ranges={rates.ranges} unit={rates.unit} />
            ) : (
              <UnavailableFallback />
            )}
          </div>

          {/* Per-size note */}
          <div className="mt-6 rounded-lg border border-border bg-surface/50 px-5 py-4 text-sm text-text-muted">
            <p>
              <span className="font-semibold text-foreground">
                Sizes available:
              </span>{" "}
              8 mm, 10 mm, 12 mm, 16 mm, 20 mm, 25 mm, 28 mm, 32 mm. Smaller
              diameters (8–12 mm) typically carry a ₹2–4/kg premium over 16 mm+
              due to rolling costs. Confirm exact per-size rate on WhatsApp.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 px-5 py-4 text-sm text-text-muted">
            <p>
              <span className="font-semibold text-accent">Disclaimer:</span>{" "}
              Rates shown are indicative ranges only, excluding GST (18%).
              Actual prices depend on quantity, size, payment terms, and daily
              market movement. Confirm today&apos;s exact rate on WhatsApp
              before placing your order.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-xl font-bold text-foreground">
              Get today&apos;s exact Rungta TMT rate
            </p>
            <p className="mt-2 text-sm text-text-muted">
              WhatsApp your grade, quantity, and delivery location — Vivek
              Aggarwal responds personally with a locked-in price.
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta label="WhatsApp for Exact Price" />
            </div>
          </div>

          {/* Internal links */}
          <div className="mt-12">
            <h2 className="text-h2">Related Pages</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
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
              <li>
                <Link
                  href="/rungta-fe-550-tmt-bars"
                  className="text-accent hover:underline"
                >
                  Rungta Fe 550 TMT Bars
                </Link>{" "}
                — High-strength grade for heavy industrial projects.
              </li>
            </ul>
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

/* ─── Sub-components ──────────────────────────────────────────────────────── */

function RangePriceTable({
  ranges,
  unit,
}: {
  ranges: { grade: string; minPerKg: number; maxPerKg: number }[];
  unit: string;
}) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-muted">
        Indicative price range · {unit}
      </p>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                Grade
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                Min (₹/kg)
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                Max (₹/kg)
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                Indicative band
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {ranges.map((r) => (
              <tr key={r.grade} className="hover:bg-surface/50 transition-colors">
                <td className="px-5 py-4 font-display font-bold text-foreground">
                  {r.grade}
                </td>
                <td className="px-5 py-4 text-right font-mono text-foreground">
                  ₹{r.minPerKg}
                </td>
                <td className="px-5 py-4 text-right font-mono text-foreground">
                  ₹{r.maxPerKg}
                </td>
                <td className="px-5 py-4 text-right text-text-muted">
                  ₹{r.minPerKg * 1000}–{r.maxPerKg * 1000}/MT
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ExactPriceTable({
  prices,
  unit,
}: {
  prices: { grade: string; pricePerKg: number }[];
  unit: string;
}) {
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-text-muted">
        Today&apos;s confirmed rate · {unit}
      </p>
      <div className="overflow-hidden rounded-xl border border-accent/40">
        <table className="w-full text-sm">
          <thead className="bg-accent/10 border-b border-accent/30">
            <tr>
              <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                Grade
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                Price (₹/kg)
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                Per MT
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {prices.map((p) => (
              <tr key={p.grade} className="hover:bg-surface/50 transition-colors">
                <td className="px-5 py-4 font-display font-bold text-foreground">
                  {p.grade}
                </td>
                <td className="px-5 py-4 text-right font-mono text-accent font-bold">
                  ₹{p.pricePerKg}
                </td>
                <td className="px-5 py-4 text-right font-mono text-text-muted">
                  ₹{(p.pricePerKg * 1000).toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UnavailableFallback() {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center">
      <p className="text-lg font-semibold text-foreground">
        Today&apos;s Rungta TMT rates available on WhatsApp
      </p>
      <p className="mt-2 text-sm text-text-muted">
        Steel prices move daily. For an accurate rate for your grade, quantity,
        and delivery location, WhatsApp us directly.
      </p>
      <div className="mt-6 flex justify-center">
        <WhatsAppCta label="Get Today's Rate on WhatsApp" />
      </div>
    </div>
  );
}
