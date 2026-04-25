import Image from "next/image";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/site";

export function Products() {
  return (
    <section id="products" className="section-y bg-surface/40">
      <div className="container-page">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Rungta TMT Range
            </p>
            <h2 className="text-h1 mt-4">
              Three grades. Eight sizes.{" "}
              <span className="text-accent">Every tonnage you need.</span>
            </h2>
            <p className="mt-6 text-lg text-text-muted">
              Authorized Rungta Steel TMT bars in Fe&nbsp;500, Fe&nbsp;500D and
              Fe&nbsp;550 grades — 8&nbsp;mm through 32&nbsp;mm, certified to IS
              1786:2008. Available in 12 m standard or cut-to-length.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent-hover"
          >
            <a href="#contact">Request Bulk Quote</a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {site.products.map((product) => (
            <article
              key={product.grade}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-surface transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(200,16,46,0.22)] ${
                product.featured
                  ? "border-accent/60 ring-1 ring-accent/30"
                  : "border-border hover:border-border-strong"
              }`}
            >
              {product.featured && (
                <div className="absolute right-4 top-4 z-10">
                  <Badge className="bg-accent text-accent-foreground hover:bg-accent">
                    Most Recommended
                  </Badge>
                </div>
              )}
              <div className="relative h-44 w-full overflow-hidden border-b border-border">
                <Image
                  src="/imagery/rungta-tmt-bar.jpg"
                  alt={`Rungta ${product.grade} TMT bar`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="font-display text-3xl font-bold tracking-tight text-foreground">
                    {product.label}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {product.certification}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-text-muted">
                  {product.description}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-text-subtle">
                      Yield
                    </dt>
                    <dd className="mt-1 font-mono text-foreground">
                      {product.yieldStrength}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-text-subtle">
                      Best for
                    </dt>
                    <dd className="mt-1 text-foreground">{product.bestFor}</dd>
                  </div>
                </dl>

                <div className="mt-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-text-subtle">
                    Sizes available
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {product.sizes.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border-strong bg-background/50 px-2 py-0.5 font-mono text-[11px] text-text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-text-muted">
                  <Check className="h-3.5 w-3.5 text-accent" aria-hidden />
                  <span>Mill test certificate with every consignment</span>
                </div>

                <div className="mt-auto pt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-border-strong hover:border-accent hover:text-accent hover:bg-accent/5"
                  >
                    <a
                      href={whatsappUrl(
                        `Hi Premier Steels, I'd like a quote for Rungta ${product.grade}. Quantity ___ MT, sizes ___, location ___.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quote on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
