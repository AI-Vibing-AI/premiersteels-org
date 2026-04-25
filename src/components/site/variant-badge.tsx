import { heroVariants } from "@/lib/site";
import { VARIANT_ID } from "@/lib/variant";

/**
 * Small pill in the bottom-left showing which of the 5 variants is rendering.
 * Visible on every preview branch so the user can identify variants at-a-glance.
 * Hidden in production by checking VERCEL_ENV.
 */
export function VariantBadge() {
  // Hide on real production deploys (premiersteels.org). Show on previews + local dev.
  if (process.env.VERCEL_ENV === "production") return null;
  const meta = heroVariants.find((v) => v.id === VARIANT_ID);
  return (
    <div className="fixed bottom-5 left-5 z-40 rounded-full border border-border bg-surface/90 px-3 py-1.5 backdrop-blur lg:bottom-8 lg:left-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
        <span className="text-accent">{VARIANT_ID.toUpperCase()}</span> ·{" "}
        {meta?.name ?? "Variant"}
      </p>
    </div>
  );
}
