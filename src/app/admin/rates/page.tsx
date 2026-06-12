"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { site } from "@/lib/site";

// Noindex — this page is for internal use only
export const dynamic = "force-dynamic";

// NOTE: metadata export is not supported in client components in Next.js App Router.
// The noindex is handled via the robots.ts disallow rule for /admin/.

const GRADES = site.products.map((p) => p.grade);

type GradePrice = { grade: string; pricePerKg: string };

export default function AdminRatesPage() {
  const today = new Date().toISOString().slice(0, 10);

  const [adminKey, setAdminKey] = useState("");
  const [date, setDate] = useState(today);
  const [prices, setPrices] = useState<GradePrice[]>(
    GRADES.map((g) => ({ grade: g, pricePerKg: "" }))
  );
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  function updatePrice(grade: string, value: string) {
    setPrices((prev) =>
      prev.map((p) => (p.grade === grade ? { ...p, pricePerKg: value } : p))
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "loading" });

    const parsedPrices = prices
      .map((p) => ({
        grade: p.grade,
        pricePerKg: parseFloat(p.pricePerKg),
      }))
      .filter((p) => !isNaN(p.pricePerKg) && p.pricePerKg > 0);

    if (parsedPrices.length === 0) {
      setStatus({
        type: "error",
        message: "Enter at least one valid price per kg.",
      });
      return;
    }

    try {
      const res = await fetch("/api/rates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-key": adminKey,
        },
        body: JSON.stringify({ exact: { date, prices: parsedPrices } }),
      });

      const body = await res.json();

      if (!res.ok) {
        setStatus({
          type: "error",
          message: body?.error || body?.message || `Error ${res.status}`,
        });
        return;
      }

      setStatus({
        type: "success",
        message: body?.message || "Rates updated successfully.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          err instanceof Error ? err.message : "Network error. Try again.",
      });
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-8">
        <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
          Update TMT Rates
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Enter today&apos;s exact Rungta TMT prices. These will be committed to
          GitHub and trigger a Vercel redeploy.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Admin key */}
          <div>
            <label
              htmlFor="adminKey"
              className="block font-mono text-xs uppercase tracking-wider text-text-muted"
            >
              Admin key <span className="text-accent">*</span>
            </label>
            <input
              id="adminKey"
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              required
              placeholder="Enter RATES_ADMIN_KEY"
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50"
            />
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="rateDate"
              className="block font-mono text-xs uppercase tracking-wider text-text-muted"
            >
              Rate date <span className="text-accent">*</span>
            </label>
            <input
              id="rateDate"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50"
            />
          </div>

          {/* Grade prices */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
              Price per kg (ex-GST, INR)
            </p>
            <div className="mt-3 space-y-3">
              {prices.map((p) => (
                <div key={p.grade} className="flex items-center gap-4">
                  <span className="w-20 font-display text-sm font-semibold text-foreground">
                    {p.grade}
                  </span>
                  <input
                    type="number"
                    value={p.pricePerKg}
                    onChange={(e) => updatePrice(p.grade, e.target.value)}
                    placeholder="e.g. 56.50"
                    step="0.01"
                    min="1"
                    max="999"
                    className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50"
                  />
                  <span className="text-sm text-text-muted">₹/kg</span>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          {status.type !== "idle" && status.type !== "loading" && (
            <div
              className={`rounded-lg px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border border-green-800 bg-green-950 text-green-300"
                  : "border border-red-800 bg-red-950 text-red-300"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90 disabled:opacity-50"
          >
            {status.type === "loading" ? "Updating…" : "Update Rates"}
          </button>
        </form>
      </div>
    </div>
  );
}
