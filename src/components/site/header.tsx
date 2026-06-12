"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/rungta-tmt-price-today", label: "Prices" },
  { href: "/rungta-tmt-dealer-delhi-ncr", label: "Dealer" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#trust", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const RESOURCES = [
  { href: "/tmt-bar-weight-chart", label: "TMT Bar Weight Chart" },
  { href: "/tmt-steel-calculator", label: "Steel Calculator" },
  { href: "/fe-500-vs-fe-500d-vs-fe-550", label: "Grade Comparison" },
  { href: "/steel-required-for-1000-sq-ft-house", label: "Steel for 1000 sq ft" },
  { href: "/rungta-tmt-specifications", label: "Specifications" },
  { href: "/bulk-tmt-bar-supplier-delhi-ncr", label: "Bulk Supplier" },
  { href: "/saria-rate-today-delhi", label: "Saria Rate Today" },
  { href: "/rungta-steel-review", label: "Rungta Steel Review" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close Resources dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    if (resourcesOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [resourcesOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/brand/premier-steels-mark.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 lg:h-10 lg:w-10"
            priority
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">
              PREMIER <span className="text-accent">STEELS</span>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
              Authorized Rungta Distributor
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}

          {/* Resources dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm font-medium text-text-muted transition-colors hover:text-foreground"
            >
              Resources
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  resourcesOpen && "rotate-180"
                )}
                aria-hidden
              />
            </button>
            {resourcesOpen && (
              <div className="absolute left-0 top-full mt-2 w-52 rounded-lg border border-border bg-background shadow-lg">
                <ul className="py-1.5">
                  {RESOURCES.map((r) => (
                    <li key={r.href}>
                      <a
                        href={r.href}
                        onClick={() => setResourcesOpen(false)}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-surface hover:text-accent transition-colors"
                      >
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="font-mono">{site.contact.phone}</span>
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent-hover">
            <a href="#contact">Get Bulk Quote</a>
          </Button>
        </div>

        {/* Mobile cluster */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent-hover"
          >
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border-strong text-foreground hover:bg-surface"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav
            className="container-page flex flex-col py-4"
            aria-label="Mobile primary"
            onClick={() => setOpen(false)}
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium text-foreground border-b border-border last:border-0"
              >
                {item.label}
              </a>
            ))}
            <p className="pt-4 pb-1 text-xs font-semibold uppercase tracking-wider text-text-muted">
              Resources
            </p>
            {RESOURCES.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2.5 text-sm font-medium text-foreground border-b border-border last:border-0"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4">
              <a
                href={`tel:${site.contact.phone.replace(/\s+/g, "")}`}
                className="font-mono text-sm text-text-muted"
              >
                {site.contact.phone}
              </a>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
                <a href="#contact">Get Bulk Quote</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
