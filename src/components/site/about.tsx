import { Building2, MapPin, ShieldCheck, Truck } from "lucide-react";
import { site } from "@/lib/site";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Authorized Rungta Distributor",
    body: `Direct authorized partnership with Rungta Steel since ${site.trust.rungtaAuthorizedSince}. Every consignment ships with a mill test certificate.`,
  },
  {
    icon: Truck,
    title: `${site.trust.monthlyCapacity} Monthly Capacity`,
    body: "Yard, fleet and tonnage built for projects measured in MT, not tons. We deliver schedules, not promises.",
  },
  {
    icon: MapPin,
    title: site.trust.serviceArea,
    body: "Same-day Ghaziabad, next-day Delhi NCR, scheduled deliveries across Uttar Pradesh.",
  },
  {
    icon: Building2,
    title: `${site.trust.projectsSupplied} Projects`,
    body: `Builders, contractors, and structural engineers across ${site.trust.yearsInBusiness} years of supply.`,
  },
];

export function About() {
  return (
    <section id="about" className="section-y relative">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              About Premier Steels
            </p>
            <h2 className="text-h1 mt-4">
              Built for builders moving{" "}
              <span className="text-accent">tonnage</span>, not retail.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Premier Steels is the authorized Rungta Steel distributor for Ghaziabad and
              Delhi-NCR. We supply Fe&nbsp;500, Fe&nbsp;500D, and Fe&nbsp;550 grade TMT
              bars to construction firms, structural engineers, and infrastructure
              projects that buy by the truckload — not the bundle.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Every consignment carries Rungta&apos;s mill test certificate. Every delivery is
              scheduled to your casting day. Every relationship begins with the assumption
              that you&apos;ll be back next quarter.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {PILLARS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 hover:bg-surface-elevated"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
