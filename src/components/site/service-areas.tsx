import Link from "next/link";

const CITIES = [
  { href: "/rungta-tmt-dealer-delhi-ncr", label: "Delhi NCR", desc: "Authorized Rungta TMT dealer for the entire Delhi NCR region" },
  { href: "/rungta-tmt-dealer-in-ghaziabad", label: "Ghaziabad", desc: "Same-day delivery from our Loha Mandi warehouse" },
  { href: "/rungta-tmt-dealer-in-noida", label: "Noida", desc: "Next-day TMT delivery to Noida project sites" },
  { href: "/rungta-tmt-dealer-in-greater-noida", label: "Greater Noida", desc: "Bulk Rungta TMT bars supplied to Greater Noida builders" },
  { href: "/rungta-tmt-dealer-in-faridabad", label: "Faridabad", desc: "Rungta TMT dealer serving Faridabad industrial projects" },
  { href: "/rungta-tmt-dealer-in-gurgaon", label: "Gurgaon", desc: "High-strength TMT bars delivered to Gurgaon construction sites" },
  { href: "/rungta-tmt-dealer-in-meerut", label: "Meerut", desc: "Authorized Rungta distributor for Meerut and western UP" },
  { href: "/rungta-tmt-dealer-in-moradabad", label: "Moradabad", desc: "TMT bar supply for Moradabad residential and commercial projects" },
  { href: "/rungta-tmt-dealer-in-hapur", label: "Hapur", desc: "Rungta TMT bars available for Hapur district projects" },
];

const GUIDES = [
  { href: "/tmt-bar-weight-chart", label: "TMT Bar Weight Chart", desc: "Standard IS weight per metre for 8 mm–32 mm bars" },
  { href: "/tmt-steel-calculator", label: "TMT Steel Calculator", desc: "Calculate exact steel tonnage for your slab or column" },
  { href: "/fe-500-vs-fe-500d-vs-fe-550", label: "Fe 500 vs Fe 500D vs Fe 550", desc: "Grade comparison with strength, ductility, and cost data" },
  { href: "/steel-required-for-1000-sq-ft-house", label: "Steel for 1000 sq ft House", desc: "Thumb-rule tonnage estimate for a typical G+1 home" },
  { href: "/rungta-tmt-specifications", label: "Rungta TMT Specifications", desc: "IS 1786:2008 technical spec sheet for all stocked grades" },
  { href: "/bulk-tmt-bar-supplier-delhi-ncr", label: "Bulk TMT Supplier Delhi NCR", desc: "Why contractors choose Premier Steels for large-volume orders" },
  { href: "/saria-rate-today-delhi", label: "Saria Rate Today Delhi", desc: "Live indicative saria rate for Delhi — updated daily" },
  { href: "/rungta-steel-review", label: "Rungta Steel Review", desc: "Independent quality and performance review of Rungta TMT" },
];

export function ServiceAreas() {
  return (
    <section className="border-t border-border bg-surface" aria-labelledby="service-areas-heading">
      <div className="container-page py-16 lg:py-20">

        {/* Service Areas */}
        <div className="mb-14">
          <h2
            id="service-areas-heading"
            className="text-sm font-semibold uppercase tracking-wider text-text-muted"
          >
            Service Areas
          </h2>
          <p className="mt-2 text-lg font-semibold text-foreground">
            Rungta TMT bars delivered across Delhi NCR &amp; Uttar Pradesh
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="group flex flex-col gap-0.5 rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:border-accent hover:bg-accent/5"
                >
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {c.label}
                  </span>
                  <span className="text-xs text-text-muted leading-snug">{c.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Guides */}
        <div>
          <h2
            className="text-sm font-semibold uppercase tracking-wider text-text-muted"
          >
            Guides &amp; Tools
          </h2>
          <p className="mt-2 text-lg font-semibold text-foreground">
            Free resources for builders, contractors, and engineers
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {GUIDES.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="group flex flex-col gap-0.5 rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:border-accent hover:bg-accent/5"
                >
                  <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {g.label}
                  </span>
                  <span className="text-xs text-text-muted leading-snug">{g.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
