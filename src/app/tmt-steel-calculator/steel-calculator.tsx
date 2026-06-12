"use client";

/**
 * SteelCalculator — interactive client component.
 *
 * Inputs: built-up area (sq ft), number of floors, construction type.
 * Logic:
 *   Residential: 3.5–4.5 kg/sq ft (4 kg midpoint)
 *   Commercial:  5.0–5.5 kg/sq ft (5.25 kg midpoint)
 * Output:
 *   - Estimated tonnage range (low / midpoint / high)
 *   - Suggested grade (Fe 500D residential, Fe 550 commercial)
 *   - Bar-size split guidance
 *   - WhatsApp CTA with estimate pre-filled in message
 */

import { useState, useId } from "react";
import { MessageCircle, Calculator, ChevronDown } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

type ConstructionType = "residential" | "commercial";

interface EstimateResult {
  totalAreaSqFt: number;
  lowMT: number;
  midMT: number;
  highMT: number;
  suggestedGrade: string;
  constructionType: ConstructionType;
}

const RATES: Record<ConstructionType, { low: number; mid: number; high: number }> = {
  residential: { low: 3.5, mid: 4.0, high: 4.5 },
  commercial:  { low: 5.0, mid: 5.25, high: 5.5 },
};

// kg/sq ft → MT: multiply by totalSqFt then divide by 1000
function calcEstimate(areaSqFt: number, floors: number, type: ConstructionType): EstimateResult {
  const totalAreaSqFt = areaSqFt * floors;
  const rate = RATES[type];
  const lowMT  = parseFloat(((totalAreaSqFt * rate.low)  / 1000).toFixed(1));
  const midMT  = parseFloat(((totalAreaSqFt * rate.mid)  / 1000).toFixed(1));
  const highMT = parseFloat(((totalAreaSqFt * rate.high) / 1000).toFixed(1));
  return {
    totalAreaSqFt,
    lowMT,
    midMT,
    highMT,
    suggestedGrade: type === "commercial" ? "Fe 550" : "Fe 500D",
    constructionType: type,
  };
}

function buildWhatsAppMessage(result: EstimateResult, deliveryLocation: string): string {
  const loc = deliveryLocation.trim() || "___";
  return `Hi Premier Steels, Rungta TMT inquiry — Grade: ${result.suggestedGrade} , Quantity (MT): ~${result.midMT} MT (estimate for ${result.totalAreaSqFt.toLocaleString("en-IN")} sq ft ${result.constructionType}) , Delivery location: ${loc}`;
}

export function SteelCalculator() {
  const areaId = useId();
  const floorsId = useId();
  const typeId = useId();
  const locationId = useId();

  const [area, setArea] = useState<string>("");
  const [floors, setFloors] = useState<string>("1");
  const [constructionType, setConstructionType] = useState<ConstructionType>("residential");
  const [deliveryLocation, setDeliveryLocation] = useState<string>("");
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [error, setError] = useState<string>("");

  function handleCalculate() {
    setError("");
    const areaNum = parseFloat(area);
    const floorsNum = parseInt(floors, 10);

    if (!area || isNaN(areaNum) || areaNum <= 0) {
      setError("Enter a valid built-up area in sq ft (e.g. 1200).");
      return;
    }
    if (areaNum > 500000) {
      setError("Area looks very large. For projects over 5 lakh sq ft, WhatsApp us directly for a bulk consultation.");
      return;
    }
    if (!floors || isNaN(floorsNum) || floorsNum < 1 || floorsNum > 50) {
      setError("Enter number of floors between 1 and 50.");
      return;
    }

    setResult(calcEstimate(areaNum, floorsNum, constructionType));
  }

  function handleReset() {
    setArea("");
    setFloors("1");
    setConstructionType("residential");
    setDeliveryLocation("");
    setResult(null);
    setError("");
  }

  const whatsappHref = result
    ? whatsappUrl(buildWhatsAppMessage(result, deliveryLocation))
    : "#";

  return (
    <div className="rounded-2xl border border-border bg-surface overflow-hidden">
      {/* Calculator header */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-border bg-surface-elevated">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Calculator className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <p className="font-display font-semibold text-foreground">
            Steel Quantity Estimator
          </p>
          <p className="text-xs text-text-muted">
            Thumb-rule method · IS 1786:2008 · Planning stage only
          </p>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Row 1: Area + Floors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Built-up area */}
          <div className="space-y-1.5">
            <label
              htmlFor={areaId}
              className="block text-sm font-medium text-foreground"
            >
              Built-up area per floor{" "}
              <span className="text-text-muted font-normal">(sq ft)</span>
            </label>
            <input
              id={areaId}
              type="number"
              inputMode="decimal"
              min="1"
              max="500000"
              placeholder="e.g. 1500"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
                setError("");
                setResult(null);
              }}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-text-subtle focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
            />
          </div>

          {/* Number of floors */}
          <div className="space-y-1.5">
            <label
              htmlFor={floorsId}
              className="block text-sm font-medium text-foreground"
            >
              Number of floors
            </label>
            <input
              id={floorsId}
              type="number"
              inputMode="numeric"
              min="1"
              max="50"
              placeholder="e.g. 3"
              value={floors}
              onChange={(e) => {
                setFloors(e.target.value);
                setError("");
                setResult(null);
              }}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-text-subtle focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
            />
          </div>
        </div>

        {/* Construction type */}
        <div className="space-y-1.5">
          <label
            htmlFor={typeId}
            className="block text-sm font-medium text-foreground"
          >
            Construction type
          </label>
          <div className="relative">
            <select
              id={typeId}
              value={constructionType}
              onChange={(e) => {
                setConstructionType(e.target.value as ConstructionType);
                setError("");
                setResult(null);
              }}
              className="w-full appearance-none rounded-lg border border-border bg-background px-4 py-2.5 pr-10 text-sm text-foreground focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors cursor-pointer"
            >
              <option value="residential">
                Residential RCC frame — house, apartment, villa (3.5–4.5 kg/sq ft)
              </option>
              <option value="commercial">
                Commercial RCC frame — office, showroom, retail (5–5.5 kg/sq ft)
              </option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted"
              aria-hidden
            />
          </div>
        </div>

        {/* Delivery location (for WhatsApp prefill) */}
        <div className="space-y-1.5">
          <label
            htmlFor={locationId}
            className="block text-sm font-medium text-foreground"
          >
            Delivery location{" "}
            <span className="text-text-muted font-normal">
              (optional — included in WhatsApp message)
            </span>
          </label>
          <input
            id={locationId}
            type="text"
            placeholder="e.g. Noida Sector 62 / Ghaziabad / Delhi"
            value={deliveryLocation}
            onChange={(e) => setDeliveryLocation(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-text-subtle focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
          />
        </div>

        {/* Error */}
        {error && (
          <p
            role="alert"
            className="text-sm text-accent font-medium rounded-lg border border-accent/30 bg-accent/8 px-4 py-3"
          >
            {error}
          </p>
        )}

        {/* Calculate button */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleCalculate}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/40"
          >
            <Calculator className="h-4 w-4" aria-hidden />
            Calculate Estimate
          </button>
          {result && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-text-muted hover:text-foreground hover:border-border-strong transition-colors focus:outline-none focus:ring-2 focus:ring-border"
            >
              Reset
            </button>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="animate-fade-up rounded-xl border border-accent/30 bg-accent/5 p-6 space-y-5">
            {/* Headline numbers */}
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted mb-3">
                Estimated steel requirement for{" "}
                {result.totalAreaSqFt.toLocaleString("en-IN")} sq ft total built-up area
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-border bg-background p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-foreground">
                    {result.lowMT}
                  </p>
                  <p className="mt-1 text-xs text-text-muted uppercase tracking-wider">
                    Low (MT)
                  </p>
                </div>
                <div className="rounded-lg border border-accent/40 bg-accent/8 p-4 text-center ring-1 ring-accent/20">
                  <p className="font-mono text-2xl font-bold text-accent">
                    {result.midMT}
                  </p>
                  <p className="mt-1 text-xs text-accent/70 uppercase tracking-wider">
                    Midpoint (MT)
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-foreground">
                    {result.highMT}
                  </p>
                  <p className="mt-1 text-xs text-text-muted uppercase tracking-wider">
                    High (MT)
                  </p>
                </div>
              </div>
            </div>

            {/* Grade + size guidance */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <div className="flex-1 min-w-[180px] rounded-lg border border-border bg-surface p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
                    Suggested grade
                  </p>
                  <p className="font-display font-bold text-foreground text-lg">
                    {result.suggestedGrade}
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    {result.constructionType === "residential"
                      ? "Ductile grade — seismic zones IV (Delhi NCR / UP)"
                      : "High-strength — heavy load / commercial structures"}
                  </p>
                </div>
                <div className="flex-1 min-w-[180px] rounded-lg border border-border bg-surface p-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-text-muted mb-1">
                    Typical size split
                  </p>
                  <div className="space-y-0.5 text-xs text-text-muted mt-1">
                    <p>
                      <span className="font-mono font-semibold text-foreground">
                        8–10 mm
                      </span>{" "}
                      — slabs
                    </p>
                    <p>
                      <span className="font-mono font-semibold text-foreground">
                        12–16 mm
                      </span>{" "}
                      — foundations
                    </p>
                    <p>
                      <span className="font-mono font-semibold text-foreground">
                        12–20 mm
                      </span>{" "}
                      — columns / beams
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-text-muted rounded-lg border border-border bg-surface/50 px-4 py-3">
                <span className="font-semibold text-foreground">
                  Thumb-rule estimate only.
                </span>{" "}
                Range: {RATES[result.constructionType].low}–
                {RATES[result.constructionType].high} kg/sq ft for{" "}
                {result.constructionType} RCC frame. Your structural
                engineer&apos;s BBS governs actual quantities, bar sizes, and
                lap lengths.
              </p>
            </div>

            {/* WhatsApp CTA with estimate in message */}
            <div className="rounded-xl border border-[#25D366]/25 bg-[#25D366]/5 p-5">
              <p className="font-semibold text-foreground text-sm mb-1">
                Get a bulk quote for ~{result.midMT} MT of {result.suggestedGrade}
              </p>
              <p className="text-xs text-text-muted mb-4">
                Your estimate is pre-filled in the WhatsApp message. Add your
                delivery location and send — Vivek Aggarwal responds personally.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp inquiry for ~${result.midMT} MT ${result.suggestedGrade}`}
                className="plausible-event-name=whatsapp_click group inline-flex items-center gap-3 rounded-xl border border-[#25D366]/40 bg-[#25D366]/8 px-6 py-3.5 text-sm font-semibold text-[#25D366] transition-all hover:border-[#25D366]/70 hover:bg-[#25D366]/15"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp ~{result.midMT} MT {result.suggestedGrade} Inquiry
                <span
                  aria-hidden
                  className="ml-1 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
