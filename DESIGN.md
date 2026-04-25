---
name: Premier Steels — Industrial Premium
version: 0.1.0
description: >
  Industrial-premium dark design system for Premier Steels (authorized Rungta
  Steel TMT distributor, Ghaziabad). Refined navy-charcoal canvas + Rungta-aligned
  crimson accent + aged-champagne highlight. Visual language anchored to TATA Steel
  / JSW / Rungta — premium B2B steel, never tacky, never "dark-web". Built dual-native
  for desktop (≥1024px) and mobile (≤640px).

colors:
  # Canvas — refined dark navy-charcoal, premium industrial
  bg: "#0B1220"
  surface: "#111A2E"
  surface-elevated: "#1A2540"
  border: "#1E2A44"
  border-strong: "#2D3D5F"

  # Brand — Rungta-aligned: navy primary + crimson red (industrial heritage)
  primary: "#1E3A8A"
  primary-hover: "#1E40AF"
  primary-foreground: "#F8FAFC"

  accent: "#C8102E"
  accent-hover: "#A30D26"
  accent-foreground: "#FFFFFF"

  # Champagne — used sparingly for premium highlights (numbers, accent borders)
  highlight: "#C9A96E"
  highlight-foreground: "#0B1220"

  # Steel mid-tones for product chrome
  steel: "#64748B"
  steel-light: "#94A3B8"

  # Foregrounds
  text: "#F8FAFC"
  text-muted: "#94A3B8"
  text-subtle: "#64748B"

  # Semantic
  success: "#10B981"
  warning: "#F59E0B"
  danger: "#EF4444"

typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-lg:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.875rem"

spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4rem"
  4xl: "6rem"
  5xl: "8rem"
  section: "clamp(4rem, 8vw, 8rem)"

radius:
  none: "0"
  sm: "0.25rem"
  md: "0.5rem"
  lg: "0.75rem"
  xl: "1rem"
  2xl: "1.5rem"
  full: "9999px"

shadows:
  sm: "0 1px 2px rgba(0,0,0,0.3)"
  md: "0 4px 12px rgba(0,0,0,0.4)"
  lg: "0 12px 32px rgba(0,0,0,0.5)"
  glow-accent: "0 0 32px rgba(234,88,12,0.25)"
  glow-primary: "0 0 24px rgba(30,58,138,0.35)"

motion:
  ease-out-expo: "cubic-bezier(0.19, 1, 0.22, 1)"
  ease-in-out: "cubic-bezier(0.4, 0, 0.2, 1)"
  duration-fast: "150ms"
  duration-base: "300ms"
  duration-slow: "600ms"

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
    borderRadius: "{radius.md}"
    paddingX: "{spacing.lg}"
    paddingY: "{spacing.md}"
    fontWeight: 600
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    border: "1px solid {colors.border-strong}"
    borderRadius: "{radius.md}"
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    borderRadius: "{radius.lg}"
    padding: "{spacing.xl}"
---

# Premier Steels Design System

## Philosophy

This is a B2B brochure site for an authorized **Rungta Steel** TMT bar distributor.
The visitor must feel — within 3 seconds of landing — that they are talking to the
**largest, most professional bulk distributor in the region.** Not a small shop.
Not a generic dealer. The serious option for tonnage-grade orders.

We hit this through three design moves:

1. **Industrial canvas, premium chrome.** Deep near-black backgrounds give industrial
   heft. Crisp typography and generous spacing give premium polish. Together: heavy
   but elegant, like an Audi RS quattro — not a hardware store.

2. **Rungta-respectful, Premier-distinct.** Primary navy honors the Rungta brand
   relationship (we're their authorized distributor, not their competitor). The
   forge-orange accent is *ours* — molten steel, the moment of creation, CTAs that
   feel like commitments.

3. **Numbers as design.** Tonnage, years, projects, grades. B2B steel buyers care
   about scale and specificity. We treat numbers as typographic events — display
   weight, large size, strong baseline.

## Colors

The palette is two layers:

- **Canvas (greys):** `bg` → `surface` → `surface-elevated` give us a three-step
  depth without ever leaving the dark zone. Borders (`border`, `border-strong`)
  separate without lighting things up.
- **Brand (chroma):** Navy `primary` for trust/authority; forge-orange `accent`
  for action/heat. Use accent sparingly — it's a CTA color, not a decoration.

## Typography

**Bricolage Grotesque** for display + headings — modern, slightly geometric, has
authority without being cold. **Inter** for body — neutral, gigabyte-tested across
sizes. **JetBrains Mono** for technical specs (Fe500D, 12mm × 12m, IS 1786:2008).

The display scale uses `clamp()` so hero copy looks intentional at every viewport
— no mobile-stretched-up artifacts.

## Spacing & Rhythm

`section: clamp(4rem, 8vw, 8rem)` controls vertical rhythm between page sections —
this is the biggest single lever for "premium feel." Don't shortchange it on desktop;
visitors should feel space breathing between Hero, About, Products, Trust, Form.

## Motion

Subtle. Industrial premium isn't bouncy. Use:
- Fade-up on scroll for section reveals (300-600ms, ease-out-expo)
- Color-shift hover on CTAs only
- Marquee/scroll for trust-logo strip
- Number count-up animations when tonnage stats enter viewport

Avoid: parallax backgrounds (cheap), particle effects, tilt cards, neon glows.
