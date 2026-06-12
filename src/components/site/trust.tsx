import Image from "next/image";
import { Award, Clock, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const STATS = [
  { value: site.trust.monthlyCapacity, label: "Monthly Capacity" },
  { value: site.trust.projectsSupplied, label: "Projects Supplied" },
  { value: site.trust.yearsInBusiness, label: "Years in Business" },
  {
    value: `Since ${site.trust.rungtaAuthorizedSince}`,
    label: "Rungta Authorized",
  },
];

const BADGES = [
  {
    icon: ShieldCheck,
    label: "Authorized Rungta",
    sub: `Distributor since ${site.trust.rungtaAuthorizedSince}`,
  },
  { icon: Award, label: "IS 1786:2008", sub: "Mill test cert with every lot" },
  { icon: ShieldCheck, label: "Direct from Yard", sub: "Same-day Ghaziabad delivery" },
  { icon: Clock, label: "On-time", sub: "Schedule-grade dispatch" },
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

        {/* Why choose us */}
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
              Authenticity isn&apos;t a feature — it&apos;s the price of
              admission. What separates Premier Steels is the operational
              discipline behind every consignment: schedule-grade delivery, mill
              test certificates, and a yard sized for project-scale orders across
              Delhi NCR and Uttar Pradesh.
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

          {/* What we guarantee */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {[
                {
                  title: "Mill test certificate with every consignment",
                  body: "Every TMT bar we supply comes with Rungta's original mill test certificate. Your structural engineer can verify grade, elongation, and tensile strength — not just take our word for it.",
                },
                {
                  title: "Pricing confirmed before dispatch — no surprises",
                  body: "Rates change daily in the steel market. We lock in your price at the time of order and confirm in writing on WhatsApp before a single bar leaves our yard.",
                },
                {
                  title: "Delivery scheduled to your casting day",
                  body: "Same-day dispatch within Ghaziabad. Next-day delivery across Delhi NCR. Scheduled dispatch to project sites across Uttar Pradesh — coordinated with your pour schedule.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-surface p-6 lg:p-8"
                >
                  <p className="text-base font-semibold text-foreground lg:text-lg">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.body}
                  </p>
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
              Premier Steels is the authorized Rungta Steel distributor for
              Ghaziabad and Delhi NCR. Every TMT bar carries Rungta&apos;s mill
              test certificate. Service area: Delhi NCR and Uttar Pradesh.
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
