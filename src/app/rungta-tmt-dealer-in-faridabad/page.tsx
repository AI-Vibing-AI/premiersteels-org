import type { Metadata } from "next";
import { site } from "@/lib/site";
import { cities } from "@/data/cities";
import { CityPage } from "@/components/site/city-page";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";

const city = cities.find((c) => c.slug === "faridabad")!;


export const metadata: Metadata = {
  title: "Rungta TMT Dealer in Faridabad — Premier Steels",
  description:
    "Authorized Rungta Steel TMT bar distributor serving Faridabad. Fe 500, Fe 500D, Fe 550 · 8–32 mm · IS 1786:2008 · Mill test certificate · Next-day delivery.",
  alternates: {
    canonical: `${site.url}/rungta-tmt-dealer-in-faridabad`,
  },
  robots: { index: true, follow: true },
};

function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description:
      "Authorized Rungta Steel TMT bar distributor serving Faridabad. Fe 500, Fe 500D, Fe 550 · 8–32 mm · IS 1786:2008.",
    url: `${site.url}/rungta-tmt-dealer-in-faridabad`,
    telephone: site.contact.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.contact.address.street}, ${site.contact.address.area}`,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.state,
      postalCode: site.contact.address.pincode,
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-19:00",
    areaServed: { "@type": "City", name: "Faridabad" },
  };
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export default function FaridabadPage() {
  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />
      <main className="flex-1">
        <CityPage city={city} />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
