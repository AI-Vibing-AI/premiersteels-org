import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <Image
            src="/brand/premier-steels-mark.svg"
            alt={site.name}
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <p className="mt-4 font-display text-2xl font-bold tracking-tight">
            PREMIER <span className="text-accent">STEELS</span>
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
            Authorized Rungta Distributor · Ghaziabad
          </p>
          <p className="mt-6 max-w-md text-sm text-text-muted">
            Bulk-grade Rungta Steel TMT bars supplied across Delhi-NCR, Western UP,
            and Uttarakhand. {site.trust.monthlyCapacity} monthly capacity.{" "}
            {site.trust.projectsSupplied} projects supplied since {site.trust.rungtaAuthorizedSince}.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            Sections
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="text-foreground hover:text-accent transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#trust" className="text-foreground hover:text-accent transition-colors">
                Why Us
              </a>
            </li>
            <li>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">
                Bulk Quote
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
              <span className="text-foreground">
                {site.contact.address.street},<br />
                {site.contact.address.area},<br />
                {site.contact.address.city}, {site.contact.address.state} {site.contact.address.pincode}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" aria-hidden />
              <a
                href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                className="font-mono text-foreground hover:text-accent transition-colors"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" aria-hidden />
              <a
                href={`mailto:${site.contact.email}`}
                className="text-foreground hover:text-accent transition-colors"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="pt-2 text-text-muted">{site.contact.hours}</li>
            <li className="font-mono text-xs text-text-subtle">{site.contact.gst}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-text-subtle md:flex-row">
          <p>
            © {new Date().getFullYear()} Premier Steels. All rights reserved.{" "}
            <span className="text-text-muted">
              Authorized distributor of Rungta Steel Limited.
            </span>
          </p>
          <p className="font-mono uppercase tracking-wider">
            {site.contact.address.city} · India
          </p>
        </div>
      </div>
    </footer>
  );
}
