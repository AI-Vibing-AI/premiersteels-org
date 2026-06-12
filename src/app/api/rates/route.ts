/**
 * /api/rates — Rates management endpoint.
 *
 * GET  → returns current rates.json (no auth required).
 * POST → updates exact prices; requires x-admin-key header matching env RATES_ADMIN_KEY.
 *        If env GITHUB_RATES_TOKEN is set, commits updated rates.json to GitHub
 *        (owner: AI-Vibing-AI, repo: premiersteels-org, path: site/src/data/rates.json)
 *        which triggers a Vercel redeploy. Otherwise, returns 501 with instructions.
 *
 * POST body: { exact: { date: "YYYY-MM-DD", prices: [{ grade, pricePerKg }] } }
 *
 * Never cache this route.
 */

import { NextResponse } from "next/server";
import { getRawRates } from "@/lib/rates";
import type { RatesData, GradeExact } from "@/lib/rates";

export const dynamic = "force-dynamic";

const GITHUB_OWNER = "AI-Vibing-AI";
const GITHUB_REPO = "premiersteels-org";
const GITHUB_PATH = "site/src/data/rates.json";

/* ── GET ──────────────────────────────────────────────────────────────────── */

export async function GET() {
  const data = getRawRates();
  // Strip sources from public response to keep the response clean
  const { sources: _sources, ...publicData } = data;
  return NextResponse.json(publicData, {
    headers: { "Cache-Control": "no-store" },
  });
}

/* ── POST ─────────────────────────────────────────────────────────────────── */

export async function POST(req: Request) {
  // Auth
  const adminKey = process.env.RATES_ADMIN_KEY;
  if (!adminKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "RATES_ADMIN_KEY env var is not configured on the server. Set it in Vercel environment variables.",
      },
      { status: 503 }
    );
  }

  const incomingKey = req.headers.get("x-admin-key");
  if (incomingKey !== adminKey) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized." },
      { status: 401 }
    );
  }

  // Parse body
  let body: { exact?: { date: string; prices: GradeExact[] } };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  if (!body.exact || !body.exact.date || !Array.isArray(body.exact.prices)) {
    return NextResponse.json(
      {
        ok: false,
        error:
          'Body must be { exact: { date: "YYYY-MM-DD", prices: [{ grade, pricePerKg }] } }',
      },
      { status: 400 }
    );
  }

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(body.exact.date)) {
    return NextResponse.json(
      { ok: false, error: 'date must be "YYYY-MM-DD".' },
      { status: 400 }
    );
  }

  // Build updated rates object
  const current = getRawRates();
  const updated: RatesData = {
    ...current,
    exact: {
      date: body.exact.date,
      prices: body.exact.prices,
    },
  };

  const updatedJson = JSON.stringify(updated, null, 2) + "\n";

  // Try to commit to GitHub
  const ghToken = process.env.GITHUB_RATES_TOKEN;
  if (!ghToken) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "GITHUB_RATES_TOKEN is not configured. To enable automatic Vercel redeploy on rate update, add this env var (a GitHub PAT with repo:write scope on the premiersteels-org repo). Without it, the rate cannot be persisted — the file lives in the built bundle.",
        updatedPayload: updated,
      },
      { status: 501 }
    );
  }

  try {
    // Get current file SHA (required by GitHub API for updates)
    const shaRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}`,
      {
        headers: {
          Authorization: `token ${ghToken}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!shaRes.ok) {
      const err = await shaRes.text();
      console.error("[api/rates] GitHub SHA fetch failed:", shaRes.status, err);
      return NextResponse.json(
        {
          ok: false,
          error: `GitHub API error fetching file SHA: ${shaRes.status}. Check GITHUB_RATES_TOKEN permissions.`,
        },
        { status: 502 }
      );
    }

    const shaData = await shaRes.json();
    const sha = shaData.sha as string;

    // Commit updated file
    const commitRes = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${ghToken}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `chore: update exact TMT rates for ${body.exact.date}`,
          content: Buffer.from(updatedJson).toString("base64"),
          sha,
        }),
      }
    );

    if (!commitRes.ok) {
      const err = await commitRes.text();
      console.error("[api/rates] GitHub commit failed:", commitRes.status, err);
      return NextResponse.json(
        {
          ok: false,
          error: `GitHub commit failed: ${commitRes.status}. The rate was not saved.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        message:
          "Rates updated and committed to GitHub. Vercel will redeploy automatically.",
        exact: updated.exact,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    console.error("[api/rates] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error committing to GitHub." },
      { status: 500 }
    );
  }
}
