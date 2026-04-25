import { NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  name: z.string().min(2).max(120),
  company: z.string().max(160).optional().or(z.literal("")),
  phone: z.string().min(8).max(20),
  email: z.string().email().optional().or(z.literal("")),
  grade: z.string().min(1).max(40),
  tonnage: z.string().min(1).max(40),
  location: z.string().min(2).max(160),
  message: z.string().max(2000).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  let parsed;
  try {
    const body = await req.json();
    parsed = LeadSchema.parse(body);
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid form data. Please check the required fields." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  // No real Resend key set — accept the lead in dev / preview without failing the form.
  // This lets the UX work end-to-end while the user wires up real Resend later.
  if (!apiKey || apiKey.startsWith("placeholder") || !to) {
    console.log("[lead] (no Resend key — preview mode) lead:", parsed);
    return NextResponse.json({ ok: true, mode: "preview" });
  }

  try {
    const subject = `New bulk inquiry — ${parsed.name} · ${parsed.tonnage} MT ${parsed.grade}`;
    const html = `
<!doctype html>
<html><body style="font-family: system-ui, sans-serif; color: #0a0e14;">
  <h2 style="color: #ea580c;">Premier Steels — bulk inquiry</h2>
  <table cellpadding="6" style="border-collapse: collapse;">
    <tr><td><b>Name</b></td><td>${escapeHtml(parsed.name)}</td></tr>
    <tr><td><b>Company</b></td><td>${escapeHtml(parsed.company || "—")}</td></tr>
    <tr><td><b>Phone</b></td><td><a href="tel:${escapeHtml(parsed.phone)}">${escapeHtml(parsed.phone)}</a></td></tr>
    <tr><td><b>Email</b></td><td>${escapeHtml(parsed.email || "—")}</td></tr>
    <tr><td><b>Grade</b></td><td>${escapeHtml(parsed.grade)}</td></tr>
    <tr><td><b>Tonnage</b></td><td>${escapeHtml(parsed.tonnage)} MT</td></tr>
    <tr><td><b>Location</b></td><td>${escapeHtml(parsed.location)}</td></tr>
    <tr><td valign="top"><b>Notes</b></td><td>${escapeHtml(parsed.message || "—")}</td></tr>
  </table>
  <p style="margin-top: 24px; color: #64748b; font-size: 12px;">
    Submitted via premiersteels.org
  </p>
</body></html>`;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Premier Steels <leads@premiersteels.org>",
        to: [to],
        reply_to: parsed.email || undefined,
        subject,
        html,
      }),
    });

    if (!resp.ok) {
      const errBody = await resp.text();
      console.error("[lead] Resend error", resp.status, errBody);
      return NextResponse.json(
        { ok: false, error: "Could not send email right now. Please try WhatsApp." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] unexpected", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error. Please try WhatsApp." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
