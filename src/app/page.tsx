import { About } from "@/components/site/about";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { LeadForm } from "@/components/site/lead-form";
import { Products } from "@/components/site/products";
import { Trust } from "@/components/site/trust";
import { VariantBadge } from "@/components/site/variant-badge";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { HeroForge } from "@/components/heroes/v1-forge";
import { HeroSpec } from "@/components/heroes/v2-spec";
import { HeroNumbers } from "@/components/heroes/v3-numbers";
import { HeroTower } from "@/components/heroes/v4-tower";
import { HeroMarquee } from "@/components/heroes/v5-marquee";
import { heroVariants } from "@/lib/site";
import { VARIANT_ID } from "@/lib/variant";

const HERO_MAP = {
  v1: HeroForge,
  v2: HeroSpec,
  v3: HeroNumbers,
  v4: HeroTower,
  v5: HeroMarquee,
} as const;

export default function Home() {
  const variantId = VARIANT_ID;
  const Hero = HERO_MAP[variantId];
  const variantMeta = heroVariants.find((v) => v.id === variantId);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
        <Trust />
        <LeadForm />
        {/* Build-time variant marker — visible only on inspect; not displayed */}
        <meta name="x-variant-id" content={variantId} />
        <meta name="x-variant-name" content={variantMeta?.name || "default"} />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <VariantBadge />
    </>
  );
}
