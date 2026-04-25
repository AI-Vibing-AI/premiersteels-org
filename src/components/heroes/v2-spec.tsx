import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

/**
 * Variant 2 — Spec Sheet
 * Editorial split. Left: brand/copy/CTA. Right: vertical stack of three product
 * spec cards (Fe500, Fe500D, Fe550). Engineering-grade, technical, confident.
 */
export function HeroSpec() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container-page relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — editorial */}
          <div className="lg:col-span-6 lg:pt-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-accent">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Authorized Rungta Distributor · Since {site.trust.rungtaAuthorizedSince}
            </div>
            <h1 className="text-display mt-6">
              Steel by{" "}
              <span className="text-accent">specification.</span>
              <br />
              Supplied by Premier.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-text-muted lg:text-xl">
              Three Rungta TMT grades. Eight sizes. One source you can trust. Every
              consignment carries a mill test certificate matched to your purchase
              order — no exceptions.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
              {[
                { v: site.trust.monthlyCapacity, l: "Capacity" },
                { v: site.trust.projectsSupplied, l: "Projects" },
                { v: `${site.trust.yearsInBusiness} yrs`, l: "Trade" },
              ].map((s) => (
                <div key={s.l} className="bg-surface p-4 lg:p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                    {s.l}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold lg:text-3xl">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-14 bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent-hover"
              >
                <a href="#contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 border-border-strong px-8 text-base hover:bg-surface"
              >
                <a href="#products">View specifications</a>
              </Button>
            </div>
          </div>

          {/* RIGHT — vertical product spec cards */}
          <div className="lg:col-span-6">
            <div className="space-y-3">
              {site.products.map((p, i) => (
                <article
                  key={p.grade}
                  className={`group flex items-center gap-4 rounded-xl border bg-surface p-5 transition-all hover:-translate-x-1 hover:border-accent/40 lg:gap-6 lg:p-6 ${
                    p.featured ? "border-accent/60 ring-1 ring-accent/20" : "border-border"
                  }`}
                  style={{
                    transformOrigin: "right center",
                    animation: `fadeUp 600ms cubic-bezier(0.19,1,0.22,1) ${i * 100}ms both`,
                  }}
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-border lg:h-24 lg:w-24">
                    <Image
                      src="/imagery/rungta-tmt-bar.jpg"
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <p className="font-display text-2xl font-bold tracking-tight lg:text-3xl">
                        {p.label}
                      </p>
                      {p.featured && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                          ★ Most Recommended
                        </span>
                      )}
                    </div>
                    <p className="mt-1 line-clamp-2 text-sm text-text-muted lg:text-base">
                      {p.bestFor}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-text-subtle">
                      <span>{p.yieldStrength}</span>
                      <span>·</span>
                      <span>{p.sizes[0]}–{p.sizes[p.sizes.length - 1]}</span>
                      <span>·</span>
                      <span className="text-accent">{p.certification}</span>
                    </div>
                  </div>

                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-text-subtle transition-all group-hover:text-accent group-hover:translate-x-1" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
