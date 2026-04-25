#!/usr/bin/env node
// Verify Stitch SDK works with the provided API key.
// Reads STITCH_API_KEY from .env.local.

import { config } from "dotenv";
import { stitch } from "@google/stitch-sdk";

config({ path: ".env.local" });

if (!process.env.STITCH_API_KEY) {
  console.error("[FATAL] STITCH_API_KEY not set in .env.local");
  process.exit(1);
}

const masked = process.env.STITCH_API_KEY.slice(0, 6) + "..." + process.env.STITCH_API_KEY.slice(-4);
console.log(`[ok] STITCH_API_KEY loaded (${masked})`);

try {
  console.log("[..] Calling stitch.callTool('create_project') to verify auth...");
  const result = await stitch.callTool("create_project", {
    title: "premiersteels-verify",
  });
  console.log("[ok] Stitch responded successfully:");
  console.log(JSON.stringify(result, null, 2));
} catch (err) {
  console.error("[FAIL] Stitch SDK call failed:");
  console.error(err?.message || err);
  if (err?.cause) console.error("Cause:", err.cause);
  process.exit(2);
}
