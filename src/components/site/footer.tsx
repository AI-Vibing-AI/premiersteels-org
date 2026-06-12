import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

const CITIES = [
  { href: "/rungta-tmt-dealer-delhi-ncr", label: "Delhi NCR" },
  { href: "/rungta-tmt-dealer-in-ghaziabad", label: "Ghaziabad" },
  { href: "/rungta-tmt-dealer-in-noida", label: "Noida" },
  { href: "/rungta-tmt-dealer-in-greater-noida", label: "Greater Noida" },
  { href: "/rungta-tmt-dealer-in-faridabad", label: "Faridabad" },
  { href: "/rungta-tmt-dealer-in-gurgaon", label: "Gurgaon" },
  { href: "/rungta-tmt-dealer-in-meerut", label: "Meerut" },
  { href: "/rungta-tmt-dealer-in-moradabad", label: "Moradabad" },
  { href: "/rungta-tmt-dealer-in-hapur", label: "Hapur" },
];

const PRODUCTS_PRICES = [
  { href: "/rungta-tmt-price-today", label: "Rungta TMT Price Today" },
  { href: "/saria-rate-today-delhi", label: "Saria Rate Today Delhi" },
  { href: "/rungta-fe-500d-tmt-bars", label: "Rungta Fe 500D TMT Bars" },
  { href: "/rungta-fe-550-tmt-bars", label: "Rungta Fe 550 TMT Bars" },
  { href: "/bulk-tmt-bar-supplier-delhi-ncr", label: "Bulk TMT Supplier Delhi NCR" },
  { href: "/rungta-tmt-specifications", label: "TMT Specifications" },
];

const GUIDES = [
  { href: "/tmt-bar-weight-chart", label: "TMT Bar Weight Chart" },
  { href: "/tmt-steel-calculator", label: "TMT Steel Calculator" },
  { href: "/fe-500-vs-fe-500d-vs-fe-550", label: "Fe 500 vs Fe 500D vs Fe 550" },
  { href: "/steel-required-for-1000-sq-ft-house", label: "Steel for 1000 sq ft House" },
  { href: "/rungta-steel-review", label: "Rungta Steel Review" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        {/* Brand column */}
        <div className="lg:col-span-4">
          <Image
            src="/brand/premier-steels-mark.svg"
            alt={site.name}
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <p className="mt-4 font-display text-2xl font-bold tracking-tight">
            PREMIER <span className="text-accent">STEELS</span>
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            Authorized Rungta Distributor · Ghaziabad
          </p>
          <p className="mt-6 max-w-md text-sm text-text-muted">
            Bulk-grade Rungta Steel TMT bars supplied across Delhi NCR and
            Uttar Pradesh. {site.trust.monthlyCapacity} monthly capacity.{" "}
            {site.trust.projectsSupplied} projects supplied since{" "}
            {site.trust.rungtaAuthorizedSince}.
          </p>

          {/* Contact */}
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                aria-hidden
              />
              <address className="not-italic text-foreground">
                {site.contact.address.street},<br />
                {site.contact.address.area},<br />
                {site.contact.address.city}, {site.contact.address.state}{" "}
                {site.contact.address.pincode}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
              <a
                href={`tel:${site.contact.phoneRaw}`}
                className="plausible-event-name=call_click font-mono text-foreground hover:text-accent transition-colors"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="text-text-muted">{site.contact.hours}</li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="plausible-event-name=whatsapp_click text-foreground hover:text-accent transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Cities Served */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            Cities Served
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {CITIES.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products & Prices */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            Products &amp; Prices
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {PRODUCTS_PRICES.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Guides */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            Guides
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {GUIDES.map((g) => (
              <li key={g.href}>
                <a
                  href={g.href}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {g.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-text-subtle md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Premier Steels. All rights
            reserved.{" "}
            <span className="text-text-muted">
              Authorized distributor of Rungta Steel Limited.
            </span>
          </p>
          <p className="font-mono uppercase tracking-wider">
            {site.contact.address.city} · India
          </p>
        </div>
      </div>
    </footer>
  );
}
