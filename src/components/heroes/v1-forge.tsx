import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/site";

/**
 * Variant 1 — Forge Reactor
 * Cinematic full-bleed hero. Steel-mill imagery with deep gradient overlay.
 * Massive display headline. Two heroic CTAs. Trust strip below the fold-line.
 */
export function HeroForge() {
  return (
    <section id="top" className="relative min-h-[88svh] lg:min-h-[92vh] overflow-hidden">
      {/* Background — industrial steel mill, deep treatment */}
      <div className="absolute inset-0">
        <Image
          src="/imagery/welding-sparks.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        {/* Deep navy overlay + crimson radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_70%,rgba(200,16,46,0.14)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 lg:from-background/97 lg:via-background/75 lg:to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" aria-hidden />

      {/* Content */}
      <div className="container-page relative flex min-h-[88svh] lg:min-h-[92vh] flex-col justify-end pb-16 pt-28 lg:pb-24 lg:pt-32">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-accent">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Authorized Rungta Steel Distributor · Ghaziabad
            </div>
            <h1 className="text-display mt-6">
              Built to build{" "}
              <span className="text-accent">India.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-text-muted lg:text-xl">
              Bulk Rungta TMT bars — Fe&nbsp;500, Fe&nbsp;500D, Fe&nbsp;550 — supplied
              across Delhi-NCR by the truckload. Schedule-grade delivery.{" "}
              <span className="text-foreground">Mill-certified</span>, every consignment.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="group h-14 bg-accent px-8 text-base font-semibold text-accent-foreground shadow-[0_12px_40px_-8px_rgba(200,16,46,0.45)] hover:bg-accent-hover"
              >
                <a href="#contact">
                  Get Bulk Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 border-border-strong px-8 text-base hover:bg-surface hover:text-foreground"
              >
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Sales
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-1">
              {[
                { v: site.trust.monthlyCapacity, l: "Monthly capacity" },
                { v: site.trust.projectsSupplied, l: "Projects supplied" },
                { v: `${site.trust.yearsInBusiness} yrs`, l: "In business" },
              ].map((s) => (
                <div key={s.l} className="bg-surface/90 p-4 backdrop-blur-sm lg:p-5">
                  <p className="font-display text-2xl font-bold lg:text-3xl">{s.v}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom forge line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  );
}
