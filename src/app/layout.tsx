import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://premiersteels.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Premier Steels — Authorized Rungta Steel Distributor | Bulk TMT Bars Ghaziabad",
    template: "%s | Premier Steels",
  },
  description:
    "Authorized Rungta Steel TMT bar distributor in Ghaziabad. Bulk supply of Fe 500, Fe 500D, and Fe 550 grade rebars (8-32 mm) across Delhi-NCR. Built for builders.",
  keywords: [
    "Rungta Steel distributor",
    "TMT bars Ghaziabad",
    "Fe 500D rebar",
    "bulk steel supplier Delhi NCR",
    "authorized Rungta dealer",
    "construction steel UP",
  ],
  openGraph: {
    type: "website",
    siteName: "Premier Steels",
    url: SITE_URL,
    title: "Premier Steels — Authorized Rungta Steel Distributor",
    description:
      "Bulk TMT bars from authorized Rungta Steel distributor in Ghaziabad. Fe 500, Fe 500D, Fe 550 — 8 to 32 mm.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Steels — Authorized Rungta Steel Distributor",
    description:
      "Bulk TMT bars from authorized Rungta Steel distributor in Ghaziabad.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Toaster richColors theme="dark" position="bottom-right" />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
