/**
 * Rates engine — typed reader for src/data/rates.json.
 *
 * Priority logic:
 *   1. If rates.exact is non-null and exact.date is today → use exact prices.
 *   2. Otherwise → range mode (indicative band, confirm on WhatsApp).
 *
 * Never import rates.json directly in client components (it contains source URLs).
 * Instead consume the /api/rates GET endpoint or pass the resolved RatesView
 * from a server component.
 */

import rawRates from "@/data/rates.json";

export type GradeRange = {
  grade: string;
  minPerKg: number;
  maxPerKg: number;
};

export type GradeExact = {
  grade: string;
  pricePerKg: number;
};

export type RatesData = {
  mode: "range" | "exact";
  lastUpdated: string;
  currency: string;
  unit: string;
  ranges: GradeRange[];
  exact: { date: string; prices: GradeExact[] } | null;
  sources: string[];
};

/** What page components receive — no raw source URLs exposed. */
export type RatesView =
  | {
      displayMode: "exact";
      lastUpdated: string;
      currency: string;
      unit: string;
      prices: GradeExact[];
    }
  | {
      displayMode: "range";
      lastUpdated: string;
      currency: string;
      unit: string;
      ranges: GradeRange[];
    }
  | { displayMode: "unavailable" };

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/**
 * Resolves the current rate display mode.
 * Runs server-side only (reads the JSON at build/request time).
 */
export function resolveRates(): RatesView {
  const data = rawRates as RatesData;

  // Exact rates are fresh if their date matches today in IST (UTC+5:30)
  if (data.exact && data.exact.prices.length > 0) {
    const today = todayISO();
    if (data.exact.date === today) {
      return {
        displayMode: "exact",
        lastUpdated: data.exact.date,
        currency: data.currency,
        unit: data.unit,
        prices: data.exact.prices,
      };
    }
  }

  if (data.ranges && data.ranges.length > 0) {
    return {
      displayMode: "range",
      lastUpdated: data.lastUpdated,
      currency: data.currency,
      unit: data.unit,
      ranges: data.ranges,
    };
  }

  return { displayMode: "unavailable" };
}

/** Returns the full raw data — for the API route only. */
export function getRawRates(): RatesData {
  return rawRates as RatesData;
}
