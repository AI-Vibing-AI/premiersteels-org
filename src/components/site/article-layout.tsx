import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";

/**
 * ArticleLayout — shell for long-form SEO pages (grade pages, dealer pages, city pages).
 *
 * Usage:
 *   <ArticleLayout
 *     breadcrumbs={[{ label: "Home", href: "/" }, { label: "Fe 500D TMT Bars" }]}
 *     h1="Rungta Fe 500D TMT Bars — Delhi NCR"
 *     date="2026-06-12"
 *     ctaMessage="Hi, I need Rungta Fe 500D — Quantity: ___ MT — Location: ___"
 *   >
 *     <p>Article prose here...</p>
 *   </ArticleLayout>
 *
 * Props:
 *   breadcrumbs   Array of { label, href? }. Last item has no href (current page).
 *   h1            Page heading rendered as an actual <h1>.
 *   date?         ISO date string "YYYY-MM-DD" shown as "Last updated: June 12, 2026".
 *   ctaMessage?   Custom WhatsApp prefilled message for the closing CTA.
 *   children      Article prose content.
 */

export type Breadcrumb = { label: string; href?: string };

export type ArticleLayoutProps = {
  breadcrumbs: Breadcrumb[];
  h1: string;
  date?: string;
  ctaMessage?: string;
  children: React.ReactNode;
};

export function ArticleLayout({
  breadcrumbs,
  h1,
  date,
  ctaMessage,
  children,
}: ArticleLayoutProps) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <article className="container-page py-12 lg:py-16">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-text-muted"
      >
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden />
            )}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-accent transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-text-subtle">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      {/* Heading */}
      <h1 className="text-h1 max-w-3xl">{h1}</h1>

      {/* Author + date */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
        <span>
          <span className="font-semibold text-foreground">Premier Steels</span>{" "}
          — Authorized Rungta Distributor, Ghaziabad
        </span>
        {formattedDate && (
          <>
            <span aria-hidden className="hidden sm:inline text-text-subtle">
              ·
            </span>
            <time dateTime={date} className="text-text-subtle">
              Last updated: {formattedDate}
            </time>
          </>
        )}
      </div>

      {/* Prose */}
      <div className="prose prose-invert prose-slate max-w-none mt-10 prose-headings:font-display prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground">
        {children}
      </div>

      {/* Closing CTA */}
      <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-lg font-semibold text-foreground">
          Ready to place a bulk order?
        </p>
        <p className="mt-2 text-sm text-text-muted">
          Send your requirement on WhatsApp — grade, quantity, and delivery
          location. Vivek Aggarwal responds personally.
        </p>
        <div className="mt-6 flex justify-center">
          <WhatsAppCta message={ctaMessage} label="WhatsApp Your Inquiry" />
        </div>
      </div>
    </article>
  );
}
