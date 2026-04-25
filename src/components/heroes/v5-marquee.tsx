import Image from "next/image";
import { ArrowRight, Award, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/site";

const TRUST_TOKENS = [
  { icon: ShieldCheck, label: "Authorized Rungta" },
  { icon: Award, label: "ISI Marked" },
  { icon: Award, label: "BIS Certified" },
  { icon: Truck, label: "Owned Fleet" },
  { icon: ShieldCheck, label: "IS 1786:2008" },
  { icon: ShieldCheck, label: "Mill Test Certified" },
];

/**
 * Variant 5 — Trust Marquee
 * Trust-anchored. Top: scrolling marquee of certifications/clients. Center:
 * stark large headline + tagline. Below: stark single CTA + supporting micro-copy.
 */
export function HeroMarquee() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/imagery/industrial-mill.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />

      {/* Trust marquee strip — TOP */}
      <div className="relative border-b border-border bg-surface/50 backdrop-blur-sm">
        <div className="overflow-hidden py-3">
          <div className="flex w-max animate-marquee items-center gap-10">
            {[...TRUST_TOKENS, ...TRUST_TOKENS, ...TRUST_TOKENS].map((t, i) => (
              <div
                key={`${t.label}-${i}`}
                className="flex flex-shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text-muted"
              >
                <t.icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CENTER — stark headline */}
      <div className="container-page relative pt-20 pb-20 text-center lg:pt-32 lg:pb-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Authorized Rungta Steel Distributor · Ghaziabad
        </p>

        <h1 className="text-display mx-auto mt-6 max-w-5xl">
          Tonnage-grade steel.{" "}
          <span className="text-accent">Trusted by builders</span> across Delhi-NCR.
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-text-muted lg:text-xl">
          Bulk Rungta TMT bars from the authorized distributor builders return to.{" "}
          {site.trust.monthlyCapacity} monthly capacity ·{" "}
          {site.trust.projectsSupplied} projects ·{" "}
          {site.trust.yearsInBusiness} years of supply.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="group h-14 bg-accent px-10 text-base font-semibold text-accent-foreground shadow-[0_12px_40px_-8px_rgba(200,16,46,0.45)] hover:bg-accent-hover"
          >
            <a href="#contact">
              Request Bulk Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 border-border-strong px-10 text-base"
          >
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Sales
            </a>
          </Button>
        </div>

        {/* Trust strip — bottom */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {[
            { v: site.trust.monthlyCapacity, l: "Capacity" },
            { v: site.trust.projectsSupplied, l: "Projects" },
            { v: `${site.trust.yearsInBusiness}+`, l: "Years" },
            { v: "100%", l: "Mill Certified" },
          ].map((s) => (
            <div key={s.l} className="bg-surface/90 p-5">
              <p className="font-display text-3xl font-bold tracking-tight">{s.v}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
