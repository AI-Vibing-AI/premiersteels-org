import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

/**
 * #contact section — WhatsApp-first. No form, no email.
 * Primary CTA: WhatsApp with prefilled structured inquiry template.
 * Secondary: phone call card (owner's personal line, positioned as bulk/trade).
 * Plus: address block with Google Maps link + business hours.
 */
export function Contact() {
  const waUrl = whatsappUrl();

  return (
    <section
      id="contact"
      className="section-y relative overflow-hidden bg-gradient-to-b from-background to-surface"
    >
      {/* Subtle forge glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute inset-0 bg-forge-radial pointer-events-none" />

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Bulk &amp; Trade Inquiries
            </p>
            <h2 className="text-h1 mt-4">
              Send your tonnage on{" "}
              <span className="text-accent">WhatsApp.</span>
            </h2>
            <p className="mt-6 mx-auto max-w-xl text-lg text-text-muted">
              Share your grade, quantity, and delivery location. Vivek Aggarwal
              responds personally — fastest route to a confirmed quote.
            </p>
          </div>

          {/* Primary WhatsApp CTA */}
          <div className="mt-10">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send WhatsApp inquiry to Premier Steels"
              className="plausible-event-name=whatsapp_click group flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/8 p-8 text-center transition-all hover:border-[#25D366]/70 hover:bg-[#25D366]/12 sm:flex-row sm:text-left lg:p-10"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366] transition-colors group-hover:bg-[#25D366]/25">
                <MessageCircle className="h-8 w-8" aria-hidden />
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-foreground">
                  WhatsApp — Bulk inquiry
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  Message pre-fills automatically:{" "}
                  <span className="font-mono text-text-muted/80">
                    Grade · Quantity (MT) · Delivery location
                  </span>
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#25D366]">
                  Tap to open WhatsApp →
                </p>
              </div>
            </a>
          </div>

          {/* Secondary cards — call + address */}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {/* Call card */}
            <a
              href={`tel:${site.contact.phoneRaw}`}
              aria-label={`Call Premier Steels at ${site.contact.phone}`}
              className="plausible-event-name=call_click group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/50 hover:bg-surface-elevated"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <Phone className="h-5 w-5" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground">Call direct</p>
                <p className="font-mono text-base text-accent mt-0.5">
                  {site.contact.phone}
                </p>
                <p className="text-xs text-text-muted mt-1">
                  Bulk orders · Payment on loading/delivery only · No credit
                </p>
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Call →
              </span>
            </a>

            {/* Address card */}
            <a
              href={site.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Premier Steels location on Google Maps"
              className="group flex items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/50 hover:bg-surface-elevated"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <MapPin className="h-5 w-5" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground">Visit the yard</p>
                <address className="not-italic mt-1 text-sm text-text-muted leading-snug">
                  {site.contact.address.street},{" "}
                  {site.contact.address.area},<br />
                  {site.contact.address.city},{" "}
                  {site.contact.address.state}{" "}
                  {site.contact.address.pincode}
                </address>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Open in Maps →
                </p>
              </div>
            </a>
          </div>

          {/* Business hours strip */}
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-5 py-3">
            <Clock className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
            <p className="text-sm text-text-muted">
              <span className="font-semibold text-foreground">Business hours:</span>{" "}
              {site.contact.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
