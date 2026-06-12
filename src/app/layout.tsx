import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { site } from "@/lib/site";
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

const SITE_URL = site.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Premier Steels — Authorized Rungta TMT Distributor | Ghaziabad",
    template: "%s | Premier Steels",
  },
  description:
    "Authorized Rungta Steel TMT bar distributor in Ghaziabad. Bulk supply of Fe 500, Fe 500D, and Fe 550 grade rebars (8–32 mm) across Delhi NCR and Uttar Pradesh. Mill test certificate with every consignment.",
  keywords: [
    "Rungta Steel distributor",
    "TMT bars Ghaziabad",
    "Fe 500D rebar Delhi NCR",
    "bulk steel supplier UP",
    "authorized Rungta dealer",
    "construction steel Uttar Pradesh",
    "Rungta TMT price today",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Premier Steels",
    url: SITE_URL,
    title: "Premier Steels — Authorized Rungta Steel TMT Distributor",
    description:
      "Bulk Rungta TMT bars — Fe 500, Fe 500D, Fe 550 — across Delhi NCR & UP. 10,000+ MT monthly. Mill-certified every consignment.",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Premier Steels — Authorized Rungta Steel Distributor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Steels — Authorized Rungta Steel TMT Distributor",
    description:
      "Bulk Rungta TMT bars across Delhi NCR & UP. 10,000+ MT monthly. Mill-certified.",
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

/**
 * JSON-LD structured data — LocalBusiness + Organization.
 * Rendered server-side as a plain script tag for maximum crawler compatibility.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: site.name,
      description:
        "Authorized Rungta Steel TMT bar distributor serving Delhi NCR and Uttar Pradesh. Fe 500, Fe 500D, Fe 550 grades in 8–32 mm. Mill test certificate with every consignment.",
      url: SITE_URL,
      telephone: site.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${site.contact.address.street}, ${site.contact.address.area}`,
        addressLocality: site.contact.address.city,
        addressRegion: site.contact.address.state,
        postalCode: site.contact.address.pincode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.6692,
        longitude: 77.4538,
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Delhi NCR" },
        { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
        { "@type": "City", name: "Ghaziabad" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Faridabad" },
        { "@type": "City", name: "Gurugram" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, Cheque",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: site.name,
      url: SITE_URL,
      description:
        "Authorized distributor of Rungta Steel TMT bars for Delhi NCR and Uttar Pradesh since 2018.",
      foundingDate: "2004",
      founder: {
        "@type": "Person",
        name: site.contact.name,
        jobTitle: site.contact.designation,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.contact.phone,
        contactType: "sales",
        availableLanguage: ["Hindi", "English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      },
    },
  ],
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
      <head>
        {/* JSON-LD structured data — LocalBusiness + Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
