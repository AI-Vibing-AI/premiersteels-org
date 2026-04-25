import Image from "next/image";
import { Award, Clock, Quote, ShieldCheck, Truck } from "lucide-react";
import { site } from "@/lib/site";

const STATS = [
  { value: site.trust.monthlyCapacity, label: "Monthly Capacity" },
  { value: site.trust.projectsSupplied, label: "Projects Supplied" },
  { value: site.trust.yearsInBusiness, label: "Years in Business" },
  { value: site.trust.serviceArea.split("·")[0].trim(), label: "Primary Region" },
];

const BADGES = [
  { icon: ShieldCheck, label: "Authorized Rungta", sub: `Distributor since ${site.trust.rungtaAuthorizedSince}` },
  { icon: Award, label: "ISI Marked", sub: "BIS-licensed steel" },
  { icon: Truck, label: "Fleet Owned", sub: "Same-day Ghaziabad" },
  { icon: Clock, label: "On-time", sub: "Schedule-grade delivery" },
];

export function Trust() {
  return (
    <section id="trust" className="section-y relative overflow-hidden">
      {/* Subtle forge glow at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute inset-0 bg-forge-radial pointer-events-none" />

      <div className="container-page relative">
        {/* Stats band */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start bg-surface p-6 lg:p-8"
            >
              <p className="font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Heading */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Why builders choose us
            </p>
            <h2 className="text-h1 mt-4">
              Authentic Rungta steel.{" "}
              <span className="text-accent">Engineered partnership.</span>
            </h2>
            <p className="mt-6 text-lg text-text-muted">
              Authenticity isn&apos;t a feature — it&apos;s the price of admission. What separates
              Premier Steels is the operational discipline behind every consignment:
              schedule-grade delivery, mill test certificates, and a yard sized for
              project-scale orders.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {BADGES.map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-4"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="text-xs text-text-muted">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {site.testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="relative rounded-xl border border-border bg-surface p-6 lg:p-8"
                >
                  <Quote
                    className="absolute right-6 top-6 h-8 w-8 text-accent/20"
                    aria-hidden
                  />
                  <blockquote className="text-base leading-relaxed text-foreground lg:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
                      {t.author.charAt(1)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.author}</p>
                      <p className="text-xs text-text-muted">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Client marquee */}
        <div className="mt-20">
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-text-subtle">
            Trusted by builders across Delhi-NCR
          </p>
          <div className="mt-6 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
            <div className="flex w-max animate-marquee gap-12 py-2">
              {[...site.clients, ...site.clients, ...site.clients].map((c, i) => (
                <div
                  key={`${c}-${i}`}
                  className="flex h-12 w-44 flex-shrink-0 items-center justify-center rounded-lg border border-border bg-surface/60 font-display text-sm font-semibold text-text-muted"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Authorized banner */}
        <div className="mt-16 grid items-center gap-8 rounded-2xl border border-border bg-surface p-8 lg:grid-cols-[auto_1fr_auto] lg:p-12">
          <Image
            src="/brand/rungta-logo-white.png"
            alt="Rungta Steel"
            width={160}
            height={64}
            className="h-12 w-auto opacity-90"
          />
          <div>
            <p className="font-display text-xl font-bold tracking-tight lg:text-2xl">
              Officially Authorized Rungta Steel Distributor
            </p>
            <p className="mt-2 text-sm text-text-muted">
              Premier Steels is the authorized Rungta Steel distributor for Ghaziabad
              and Delhi-NCR. Every TMT bar carries Rungta&apos;s mill test certificate.
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Since {site.trust.rungtaAuthorizedSince}
          </p>
        </div>
      </div>
    </section>
  );
}
