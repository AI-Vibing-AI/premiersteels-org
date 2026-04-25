import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/site";

/**
 * Variant 1 — Forge Reactor (selected winner)
 * Cinematic full-bleed hero. Slow Ken Burns on the welding-sparks background,
 * pulsing forge-glow radial, and decorative drifting embers. Sheen shimmer on the
 * accent word "India". Dual-native composed for desktop + mobile.
 *
 * All motion respects prefers-reduced-motion (see globals.css).
 */
export function HeroForge() {
  return (
    <section
      id="top"
      className="relative min-h-[88svh] lg:min-h-[92vh] overflow-hidden"
    >
      {/* Background — animated Ken Burns on industrial welding sparks */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="/imagery/welding-sparks.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Pulsing crimson forge glow */}
        <div
          className="absolute inset-0 animate-forge-pulse bg-[radial-gradient(ellipse_at_25%_70%,rgba(200,16,46,0.18)_0%,transparent_55%)]"
          aria-hidden
        />

        {/* Layered overlays for legibility (industrial depth) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 lg:from-background/97 lg:via-background/75 lg:to-background/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
          aria-hidden
        />
      </div>

      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay"
        aria-hidden
      />

      {/* Drifting embers — decorative, hidden from a11y tree */}
      <Embers />

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
              <span className="animate-sheen">India.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-text-muted lg:text-xl">
              Authorized Rungta Steel TMT bars supplied across Delhi-NCR by the
              truckload. Schedule-grade delivery.{" "}
              <span className="text-foreground">Mill-certified</span>, every
              consignment.
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
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <div
                  key={s.l}
                  className="bg-surface/90 p-4 backdrop-blur-sm lg:p-5"
                >
                  <p className="font-display text-2xl font-bold lg:text-3xl">
                    {s.v}
                  </p>
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

/**
 * Decorative drifting embers — small crimson-tinted dots that float upward
 * over the hero, creating a subtle "sparks" atmosphere. Pure CSS, no JS.
 */
function Embers() {
  // Deterministic positions/timings so SSR === CSR (no hydration mismatch).
  const embers = [
    { left: "8%", size: 3, dur: 14, delay: 0, drift: 0.5 },
    { left: "17%", size: 2, dur: 18, delay: 3, drift: -0.3 },
    { left: "29%", size: 4, dur: 12, delay: 5, drift: 0.4 },
    { left: "38%", size: 2, dur: 20, delay: 1, drift: -0.4 },
    { left: "46%", size: 3, dur: 15, delay: 7, drift: 0.6 },
    { left: "57%", size: 2, dur: 17, delay: 2, drift: -0.5 },
    { left: "66%", size: 4, dur: 13, delay: 6, drift: 0.3 },
    { left: "74%", size: 3, dur: 19, delay: 4, drift: -0.2 },
    { left: "83%", size: 2, dur: 16, delay: 8, drift: 0.5 },
    { left: "92%", size: 3, dur: 14, delay: 9, drift: -0.4 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {embers.map((e, i) => (
        <span
          key={i}
          className="animate-ember absolute rounded-full bg-accent/80"
          style={{
            left: e.left,
            bottom: "-12px",
            width: `${e.size}px`,
            height: `${e.size}px`,
            boxShadow: "0 0 8px 1px rgba(200,16,46,0.6)",
            animationDuration: `${e.dur}s`,
            animationDelay: `${e.delay}s`,
            // pseudo-static drift via per-particle CSS var (no inline keyframes)
            // each particle drifts its own % across width via translate during anim
          }}
        />
      ))}
    </div>
  );
}
