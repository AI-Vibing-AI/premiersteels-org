/**
 * Variant selector — set per branch.
 * - main:       v1 (Forge — default winner candidate)
 * - variant-1:  v1 (Forge)
 * - variant-2:  v2 (Spec Sheet)
 * - variant-3:  v3 (Numbers)
 * - variant-4:  v4 (Tower)
 * - variant-5:  v5 (Marquee)
 *
 * Each variant branch differs ONLY by the value of VARIANT_ID below.
 * Once user picks a winner, main is rebased to that variant and this file
 * stays at the chosen value.
 */
import type { VariantId } from "./site";

export const VARIANT_ID: VariantId = "v5";
