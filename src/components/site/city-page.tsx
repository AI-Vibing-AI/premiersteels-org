import { CheckCircle2, MapPin } from "lucide-react";
import { ArticleLayout } from "@/components/site/article-layout";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import type { City } from "@/data/cities";
import { site } from "@/lib/site";

/**
 * CityPage — template component for /rungta-tmt-[city] pages.
 *
 * Usage (in a Next.js page):
 *   import { CityPage } from "@/components/site/city-page";
 *   import { cities } from "@/data/cities";
 *
 *   export default function GhaziabadPage() {
 *     const city = cities.find((c) => c.slug === "ghaziabad")!;
 *     return <CityPage city={city} />;
 *   }
 *
 * Props:
 *   city   A City object from src/data/cities.ts.
 *
 * The component renders:
 *   - ArticleLayout shell (breadcrumb, h1, author, closing WhatsApp CTA)
 *   - Intro paragraph
 *   - Delivery promise highlight
 *   - Localities list
 *   - FAQ accordion (schema-ready — page should add FAQPage JSON-LD)
 *   - Internal links to /rungta-tmt-price-today and /rungta-tmt-dealer-delhi-ncr
 */
export type CityPageProps = {
  city: City;
};

export function CityPage({ city }: CityPageProps) {
  const waMessage = `Hi Premier Steels, Rungta TMT inquiry — Grade: ___ , Quantity (MT): ___ , Delivery location: ${city.name}`;

  return (
    <ArticleLayout
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Rungta TMT Distributor", href: "/rungta-tmt-dealer-delhi-ncr" },
        { label: city.name },
      ]}
      h1={city.h1}
      date={new Date().toISOString().slice(0, 10)}
      ctaMessage={waMessage}
    >
      {/* Intro */}
      <p>{city.intro}</p>

      {/* Delivery promise */}
      <div className="not-prose my-8 flex items-start gap-4 rounded-xl border border-accent/30 bg-accent/5 p-5">
        <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden />
        <div>
          <p className="font-semibold text-foreground">Delivery to {city.name}</p>
          <p className="mt-1 text-sm text-text-muted">{city.deliveryPromise}</p>
        </div>
      </div>

      {/* Products */}
      <h2>Rungta TMT Grades Available in {city.name}</h2>
      <ul>
        {site.products.map((p) => (
          <li key={p.grade}>
            <strong>{p.grade}</strong> — {p.description} Sizes: {p.sizes.join(", ")}.
          </li>
        ))}
      </ul>
      <p>
        Mill test certificate with every consignment. All bars are IS 1786:2008
        certified.
      </p>

      {/* Localities */}
      <h2>Areas Served in {city.name}</h2>
      <div className="not-prose grid grid-cols-2 gap-2 sm:grid-cols-3">
        {city.localities.map((loc) => (
          <div
            key={loc}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm"
          >
            <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-accent" aria-hidden />
            <span>{loc}</span>
          </div>
        ))}
      </div>

      {/* Internal links */}
      <h2>Useful Links</h2>
      <ul>
        <li>
          <a href="/rungta-tmt-price-today">
            Rungta TMT Price Today — Delhi NCR &amp; UP
          </a>{" "}
          — Check today&apos;s indicative rate range.
        </li>
        <li>
          <a href="/rungta-tmt-dealer-delhi-ncr">
            Authorized Rungta TMT Dealer in Delhi NCR
          </a>{" "}
          — How to identify genuine authorized distributors.
        </li>
        <li>
          <a href="/rungta-fe-500d-tmt-bars">Rungta Fe 500D TMT Bars</a> —
          The ductile grade preferred by structural engineers.
        </li>
        <li>
          <a href="/rungta-fe-550-tmt-bars">Rungta Fe 550 TMT Bars</a> —
          High-strength grade for heavy-load projects.
        </li>
      </ul>

      {/* FAQ */}
      <h2>Frequently Asked Questions — {city.name}</h2>
      <div className="not-prose space-y-4">
        {city.faqs.map((faq) => (
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

      {/* WhatsApp CTA inline */}
      <div className="not-prose mt-8 flex justify-center">
        <WhatsAppCta
          message={waMessage}
          label={`WhatsApp for ${city.name} Delivery`}
        />
      </div>
    </ArticleLayout>
  );
}
