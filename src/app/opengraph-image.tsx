import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

export const alt = "Premier Steels — Authorized Rungta Steel TMT Distributor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "64px",
          background: "linear-gradient(135deg, #0a0e14 0%, #12181f 50%, #1a0a0f 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Crimson forge glow — top left */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(200,16,46,0.25) 0%, transparent 60%)",
          }}
        />
        {/* Grid lines decorative */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top badge */}
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "64px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: "1px solid rgba(200,16,46,0.4)",
            borderRadius: "100px",
            padding: "8px 20px",
            background: "rgba(200,16,46,0.1)",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#c8102e",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#c8102e",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Authorized Rungta Steel Distributor
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "80px",
              fontWeight: 800,
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            PREMIER{" "}
            <span style={{ color: "#c8102e" }}>STEELS</span>
          </div>

          <div
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            Rungta TMT Bars — Fe 500, Fe 500D, Fe 550
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "#64748b",
              letterSpacing: "0.05em",
              marginTop: "4px",
            }}
          >
            Delhi NCR · Uttar Pradesh
          </div>
        </div>

        {/* Bottom row: stats + phone */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "48px",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            {[
              { v: site.trust.monthlyCapacity, l: "Monthly Capacity" },
              { v: site.trust.projectsSupplied, l: "Projects Supplied" },
              { v: `${site.trust.yearsInBusiness} yrs`, l: "In Business" },
            ].map((s) => (
              <div
                key={s.l}
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#f1f5f9",
                  }}
                >
                  {s.v}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.l}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontSize: "26px",
                fontWeight: 600,
                color: "#f1f5f9",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {site.contact.phone}
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "#64748b",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Bulk &amp; trade inquiries
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
