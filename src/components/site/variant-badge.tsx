import { heroVariants, type VariantId } from "@/lib/site";

/**
 * Tiny dev/preview pill in the bottom-left so the user can tell at-a-glance
 * which of the 5 variants they're viewing. Hidden when no variant id is set
 * (i.e. on the eventual production main branch after a winner is picked).
 */
export function VariantBadge() {
  const id = process.env.NEXT_PUBLIC_VARIANT_ID as VariantId | undefined;
  if (!id) return null;
  const meta = heroVariants.find((v) => v.id === id);
  return (
    <div className="fixed bottom-5 left-5 z-40 rounded-full border border-border bg-surface/90 px-3 py-1.5 backdrop-blur lg:bottom-8 lg:left-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
        <span className="text-accent">{id.toUpperCase()}</span> · {meta?.name ?? "Variant"}
      </p>
    </div>
  );
}
