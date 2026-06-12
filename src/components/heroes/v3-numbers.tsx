import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/site";

/**
 * Variant 3 — Numbers That Matter
 * Trust-by-scale. Massive numerical typography as the visual centerpiece.
 * The numbers ARE the design. Subtitle, supporting copy, then dual CTA.
 */
export function HeroNumbers() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="absolute inset-0 bg-grid-tight opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-forge-radial" aria-hidden />
      <div className="absolute right-0 top-0 hidden h-full w-1/3 lg:block">
        <Image
          src="/imagery/steel-frame.jpg"
          alt=""
          fill
          priority
          sizes="33vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/70 to-background" />
      </div>

      <div className="container-page relative pt-28 pb-20 lg:pt-36 lg:pb-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Premier Steels · Authorized Rungta Distributor · Ghaziabad
        </p>

        <h1 className="text-display mt-6 max-w-5xl">
          The numbers behind{" "}
          <span className="text-accent">India&apos;s</span> next foundation.
        </h1>

        {/* The numbers — typographic centerpiece */}
        <div className="mt-14 grid grid-cols-2 gap-8 lg:mt-20 lg:grid-cols-4 lg:gap-4">
          {[
            { v: site.trust.monthlyCapacity, l: "Monthly tonnage", sub: "Schedule-grade supply" },
            { v: site.trust.projectsSupplied, l: "Projects supplied", sub: "Delhi NCR · Uttar Pradesh" },
            { v: site.trust.yearsInBusiness, l: "Years in trade", sub: `Since ${2026 - parseInt(site.trust.yearsInBusiness)}` },
            { v: site.products.length.toString(), l: "Rungta TMT grades", sub: "Fe 500 · 500D · 550" },
          ].map((s, i) => (
            <div
              key={s.l}
              className="border-l-2 border-accent/60 pl-4 lg:pl-6"
              style={{
                animation: `fadeUp 600ms cubic-bezier(0.19,1,0.22,1) ${i * 120}ms both`,
              }}
            >
              <p className="font-display text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl">
                {s.v}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-text-muted lg:text-xs">
                {s.l}
              </p>
              <p className="mt-1 text-sm text-text-subtle">{s.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <p className="text-lg text-text-muted lg:col-span-6 lg:text-xl">
            Every number above is operational reality, not marketing copy. Premier
            Steels supplies builders who measure projects in tonnes and casting
            schedules in working days — Rungta&apos;s authorized partner for the
            Delhi-NCR construction belt.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:items-end lg:justify-end">
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
              className="h-14 border-border-strong px-8 text-base"
            >
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Sales
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
