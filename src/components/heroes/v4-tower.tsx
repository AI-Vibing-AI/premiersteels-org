import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/site";

/**
 * Variant 4 — Tower Showcase
 * Iconic vertical TMT bar / tower visual on the right (cinematic crop).
 * Bold copy + sticky CTA on the left. Memorable, product-forward.
 */
export function HeroTower() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="container-page relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT — copy + CTAs */}
          <div className="lg:col-span-7 lg:pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-accent">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Authorized Rungta Steel · Ghaziabad
            </div>

            <h1 className="text-display mt-6">
              The structural{" "}
              <span className="text-accent">backbone</span>
              <br className="hidden lg:block" />
              of{" "}
              <span className="font-mono italic font-light tracking-tight">your</span>{" "}
              project.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-text-muted lg:text-xl">
              Premier Steels supplies authentic Rungta TMT bars to builders moving
              real tonnage. Three grades, eight sizes, mill-certified — delivered to
              your casting day, not someone else&apos;s schedule.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Mill test certificate per consignment",
                "Same-day Ghaziabad · Next-day NCR",
                "Direct from yard, no broker delays",
                "MT-grade pricing, transparent",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface/60 p-3"
                >
                  <span className="mt-0.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-14 bg-accent px-8 text-base font-semibold text-accent-foreground shadow-[0_12px_40px_-8px_rgba(200,16,46,0.45)] hover:bg-accent-hover"
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
                className="h-14 border-border-strong px-8 text-base"
              >
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT — tower / TMT visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl border border-border bg-surface lg:aspect-[3/4] lg:max-w-none">
              <Image
                src="/imagery/rungta-tmt-bar.jpg"
                alt="Rungta TMT bars — Fe 550D grade"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover scale-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(200,16,46,0.18)_0%,transparent_60%)]" />

              {/* Floating spec card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-border-strong bg-surface/90 p-5 backdrop-blur-md lg:left-auto lg:right-6 lg:max-w-xs">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Featured grade
                </p>
                <p className="mt-2 font-display text-3xl font-bold tracking-tight">
                  Fe 500D
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  Ductile TMT for seismic-zone construction. {site.products[1].yieldStrength}.
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-text-subtle">
                    8mm – 32mm
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {site.products[1].certification}
                  </span>
                </div>
              </div>

              {/* Vertical accent rail */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent via-accent/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
