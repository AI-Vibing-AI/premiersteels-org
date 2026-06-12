import type { Metadata } from "next";
import Link from "next/link";
import { resolveRates } from "@/lib/rates";
import { site, whatsappUrl } from "@/lib/site";
import { WhatsAppCta } from "@/components/site/whatsapp-cta";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "सरिया का रेट आज दिल्ली NCR — Saria Rate Today Delhi",
  description:
    "आज का सरिया रेट दिल्ली, गाज़ियाबाद, NCR — Rungta TMT Fe 500, Fe 500D, Fe 550. Today's indicative TMT bar price per kg. WhatsApp पर exact rate पूछें। Premier Steels, Ghaziabad.",
  alternates: {
    canonical: `${site.url}/saria-rate-today-delhi`,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "सरिया का रेट आज — Saria Rate Today Delhi NCR | Premier Steels",
    description:
      "दिल्ली, गाज़ियाबाद में आज का Rungta सरिया रेट। Fe 500, Fe 500D, Fe 550 का indicative rate per kg। Authorized distributor से सीधे रेट पाएं।",
    url: `${site.url}/saria-rate-today-delhi`,
    siteName: site.name,
    locale: "hi_IN",
    type: "website",
  },
};

/* ─── Hindi FAQ content ───────────────────────────────────────────────────── */

const FAQ_HI = [
  {
    question: "सरिया और TMT बार में क्या फ़र्क है?",
    answer:
      "सरिया एक common Hindi/Urdu शब्द है जो steel reinforcement bar के लिए use होता है — वही जिसे English में TMT bar या rebar कहते हैं। TMT का मतलब है Thermo-Mechanically Treated। तो 'सरिया' और 'TMT bar' एक ही चीज़ हैं। Rungta TMT bars IS 1786:2008 standard के हिसाब से बनते हैं।",
  },
  {
    question: "Fe 500, Fe 500D, Fe 550 — इनमें क्या अंतर है?",
    answer:
      "Fe का मतलब है Iron (लोहा), और number yield strength बताता है। Fe 500 का yield strength 500 N/mm² होता है — यह residential और commercial buildings के लिए standard grade है। Fe 500D में 'D' का मतलब Ductile है — इसमें elongation ज़्यादा होता है (16% min), इसलिए earthquake zones में use होता है। Fe 550 में ज़्यादा strength (550 N/mm²) होती है — heavy industrial structures में steel quantity ~10% कम लगती है। हम Fe 550D नहीं बेचते।",
  },
  {
    question: "एक bundle में कितने किलो सरिया होता है?",
    answer:
      "आमतौर पर एक bundle में 3–7 bars होती हैं, जो size और length के हिसाब से vary करता है। प्रति meter वज़न का formula है: D×D÷162 kg/m — जहाँ D diameter in mm है। जैसे 12mm bar का वज़न होगा 12×12÷162 = 0.888 kg/m। एक MT (1000 kg) = 1 tonne। Bulk में हम tonnes में deal करते हैं। अपनी exact requirement के लिए WhatsApp पर बताएं।",
  },
  {
    question: "सरिया का रेट रोज़ बदलता है — क्यों?",
    answer:
      "Steel prices iron ore के global rates, domestic scrap prices, energy costs, और seasonal demand के हिसाब से daily move करती हैं। यहाँ दिखाया गया rate indicative range है। Order करने से पहले WhatsApp पर today's exact rate confirm करें — Vivek Aggarwal personally respond करते हैं।",
  },
  {
    question: "GST अलग से लगेगा?",
    answer:
      "हाँ। यहाँ दिखाए गए सभी rates GST के बिना हैं। TMT bars पर 18% GST लगता है। Invoice में base price + 18% GST अलग-अलग दिखेगा। WhatsApp पर exact rate with GST पूछें।",
  },
  {
    question: "कम से कम कितना order करना होगा?",
    answer:
      "Delivery के लिए minimum order आमतौर पर 5 MT है। अगर आप हमारे Ghaziabad yard से खुद उठाना चाहते हैं (ex-yard pickup), तो कोई minimum नहीं है। अपनी requirement WhatsApp पर share करें — हम confirm करेंगे।",
  },
  {
    question: "Rungta सरिया के साथ mill test certificate मिलता है क्या?",
    answer:
      "हाँ — हर consignment के साथ Rungta Steel का mill test certificate मिलता है, बिना exception के। Certificate में grade (Fe 500 / Fe 500D / Fe 550), yield strength, elongation, और chemical composition — सब IS 1786:2008 के अनुसार verify होता है।",
  },
  {
    question: "दिल्ली, Noida, Gurugram में delivery मिलेगी?",
    answer:
      "हाँ। हम Delhi NCR (Delhi, Noida, Gurugram, Faridabad, Ghaziabad, Greater Noida) और पूरे Uttar Pradesh में supply करते हैं। Ghaziabad में same-day dispatch; Delhi NCR में next-day। दूसरे UP locations के लिए scheduled delivery — WhatsApp पर confirm करें।",
  },
];

/* ─── JSON-LD builders ────────────────────────────────────────────────────── */

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "hi",
    mainEntity: FAQ_HI.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "सरिया का रेट आज दिल्ली",
        item: `${site.url}/saria-rate-today-delhi`,
      },
    ],
  };
}

/* ─── Grade Hindi labels ──────────────────────────────────────────────────── */

const GRADE_HINDI: Record<string, { label: string; use: string }> = {
  "Fe 500": {
    label: "Fe 500 — Standard Grade",
    use: "घर, flat, commercial building",
  },
  "Fe 500D": {
    label: "Fe 500D — Ductile Grade",
    use: "Earthquake zone, high-rise, bridge",
  },
  "Fe 550": {
    label: "Fe 550 — High Strength",
    use: "Industrial structure, heavy load",
  },
};

/* ─── Page component ──────────────────────────────────────────────────────── */

export default function SariaRateTodayDelhiPage() {
  const rates = resolveRates();

  const hindiCtaMessage =
    "नमस्ते Premier Steels, Rungta TMT inquiry — Grade: ___ , Quantity (MT): ___ , Delivery location: ___";

  const formattedDateHi =
    rates.displayMode !== "unavailable"
      ? new Date(rates.lastUpdated).toLocaleDateString("hi-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null;

  return (
    <>
      <SiteHeader />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbJsonLd()),
        }}
      />

      <main className="flex-1">
        <div className="container-page py-12 lg:py-16 max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-text-muted"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span aria-hidden className="text-text-subtle">
              /
            </span>
            <span className="text-text-subtle">सरिया रेट आज दिल्ली</span>
          </nav>

          {/* H1 — bilingual */}
          <h1 className="text-h1 max-w-3xl" lang="hi">
            सरिया का रेट आज —{" "}
            <span className="text-accent">दिल्ली / गाज़ियाबाद</span>
            <span className="block mt-1 text-xl font-medium text-text-muted" lang="en">
              Saria Rate Today Delhi NCR &amp; Ghaziabad
            </span>
          </h1>

          {/* Source line */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted">
            <span>
              <span className="font-semibold text-foreground">
                Premier Steels
              </span>{" "}
              — Authorized Rungta Distributor, Ghaziabad
            </span>
            {formattedDateHi && (
              <>
                <span aria-hidden className="text-text-subtle">·</span>
                <time
                  dateTime={
                    rates.displayMode !== "unavailable"
                      ? rates.lastUpdated
                      : undefined
                  }
                  className="text-text-subtle"
                  lang="hi"
                >
                  आखिरी update: {formattedDateHi}
                </time>
              </>
            )}
          </div>

          {/* Hindi intro */}
          <div lang="hi" className="mt-8 space-y-3 text-lg text-text-muted leading-relaxed">
            <p>
              नीचे दिए गए rates Premier Steels के Ghaziabad yard से{" "}
              <strong className="text-foreground">
                दिल्ली NCR और Uttar Pradesh
              </strong>{" "}
              में supply होने वाले Rungta Steel TMT bars के{" "}
              <strong className="text-foreground">indicative price ranges</strong>{" "}
              हैं।
            </p>
            <p className="text-base">
              Steel का रेट रोज़ बदलता है — यहाँ दिखाया गया range budget के लिए
              है। Order करने से पहले WhatsApp पर आज का exact रेट confirm करें।
            </p>
          </div>

          {/* ── Rate table ──────────────────────────────────────────────────── */}
          <section aria-labelledby="rate-table-heading" className="mt-10">
            <h2
              id="rate-table-heading"
              className="text-h2"
              lang="hi"
            >
              आज का Rungta सरिया रेट — Delhi NCR
            </h2>

            <div className="mt-4">
              {rates.displayMode === "exact" ? (
                <ExactRateTableHi
                  prices={rates.prices}
                  unit={rates.unit}
                />
              ) : rates.displayMode === "range" ? (
                <RangeRateTableHi
                  ranges={rates.ranges}
                  unit={rates.unit}
                />
              ) : (
                <UnavailableFallbackHi ctaMessage={hindiCtaMessage} />
              )}
            </div>

            {/* Size premium note — Hindi */}
            <div
              className="mt-5 rounded-lg border border-border bg-surface/50 px-5 py-4 text-sm text-text-muted"
              lang="hi"
            >
              <p>
                <span className="font-semibold text-foreground">
                  Available sizes:
                </span>{" "}
                8 mm, 10 mm, 12 mm, 16 mm, 20 mm, 25 mm, 28 mm, 32 mm।
                छोटे diameter (8–12 mm) पर आमतौर पर ₹2–4/kg premium होता है
                16 mm+ के मुकाबले — rolling cost की वजह से। WhatsApp पर
                per-size exact rate confirm करें।
              </p>
            </div>

            {/* GST disclaimer — Hindi */}
            <div
              className="mt-3 rounded-lg border border-accent/20 bg-accent/5 px-5 py-4 text-sm text-text-muted"
              lang="hi"
            >
              <p>
                <span className="font-semibold text-accent">ध्यान दें:</span>{" "}
                ऊपर दिए गए rates GST के बिना हैं (ex-GST)। TMT bars पर 18%
                GST लगता है। Actual price quantity, size, payment terms, और
                daily market movement पर depend करती है। Order से पहले
                WhatsApp पर today&apos;s exact rate ज़रूर confirm करें।
              </p>
            </div>
          </section>

          {/* ── Big Hindi WhatsApp CTA ───────────────────────────────────────── */}
          <div className="mt-10 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/5 p-8 text-center">
            <p
              className="text-2xl font-bold text-foreground"
              lang="hi"
            >
              आज का exact रेट WhatsApp पर पूछें
            </p>
            <p
              className="mt-2 text-sm text-text-muted"
              lang="hi"
            >
              Grade, quantity (MT), और delivery location बताएं — Vivek
              Aggarwal personally confirm करेंगे। Mon–Sat 9 AM–7 PM।
            </p>
            <p className="mt-3 text-xs text-text-muted font-mono bg-surface rounded-lg px-4 py-2 inline-block" lang="hi">
              &ldquo;नमस्ते Premier Steels, Rungta TMT inquiry — Grade: ___ , Quantity (MT): ___ , Delivery location: ___&rdquo;
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappUrl(hindiCtaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp पर सरिया रेट पूछें"
                className="plausible-event-name=whatsapp_click group inline-flex items-center gap-3 rounded-xl border border-[#25D366]/40 bg-[#25D366]/8 px-7 py-4 text-base font-semibold text-[#25D366] transition-all hover:border-[#25D366]/70 hover:bg-[#25D366]/15"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                <span lang="hi">WhatsApp पर रेट पूछें</span>
                <span aria-hidden className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          {/* ── Hindi explainer: Saria kya hota hai ────────────────────────── */}
          <section aria-labelledby="explainer-heading" className="mt-14" lang="hi">
            <h2
              id="explainer-heading"
              className="text-h2"
            >
              सरिया क्या होता है? Grades का क्या मतलब है?
            </h2>

            <div className="mt-5 space-y-4 text-text-muted leading-relaxed">
              <p>
                <strong className="text-foreground">सरिया</strong> वो steel rod
                है जो concrete (cement-sand-aggregate mixture) के अंदर डाली जाती
                है — इसी को RCC (Reinforced Cement Concrete) कहते हैं। बिना
                सरिया के concrete टूट जाता है; सरिया उसे tensile strength देता
                है।
              </p>
              <p>
                आजकल सारे quality सरिए{" "}
                <strong className="text-foreground">TMT process</strong> से बनते
                हैं — Thermo-Mechanically Treated। इसमें hot rolling के बाद bar
                को water quench किया जाता है, जिससे outer layer hardened हो
                जाती है और inner core soft रहती है। नतीजा: मज़बूत भी, flexible
                भी।
              </p>

              {/* Grade cards */}
              <div className="grid gap-4 sm:grid-cols-3 mt-6">
                {[
                  {
                    grade: "Fe 500",
                    strength: "500 N/mm²",
                    elongation: "12% min",
                    use: "घर, flat, commercial building के RCC work के लिए standard choice।",
                    tag: "Standard",
                  },
                  {
                    grade: "Fe 500D",
                    strength: "500 N/mm²",
                    elongation: "16% min",
                    use: "Earthquake zone में mandatory। High-rise और bridge के लिए structural engineers prefer करते हैं।",
                    tag: "Ductile — Most specified",
                    featured: true,
                  },
                  {
                    grade: "Fe 550",
                    strength: "550 N/mm²",
                    elongation: "10% min",
                    use: "Heavy industrial structures में Fe 500 के मुकाबले ~10% कम steel लगती है।",
                    tag: "High Strength",
                  },
                ].map((g) => (
                  <div
                    key={g.grade}
                    className={[
                      "rounded-xl border bg-surface p-5",
                      g.featured
                        ? "border-accent/50 ring-1 ring-accent/20"
                        : "border-border",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div className="font-display text-xl font-bold text-foreground">
                      {g.grade}
                    </div>
                    <div className="mt-0.5 text-xs text-accent font-semibold">
                      {g.tag}
                    </div>
                    <div className="mt-3 space-y-1 text-xs text-text-muted font-mono">
                      <div>Yield: {g.strength}</div>
                      <div>Elongation: {g.elongation}</div>
                    </div>
                    <p className="mt-3 text-sm text-text-muted leading-snug">
                      {g.use}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm mt-2">
                हम <strong className="text-foreground">Fe 550D</strong> नहीं
                बेचते। अगर कोई supplier Rungta Fe 550D बेचने का claim करे, तो
                पहले mill test certificate माँगें।
              </p>
            </div>
          </section>

          {/* ── Bundle & tonne explainer ──────────────────────────────────────── */}
          <section
            aria-labelledby="bundle-heading"
            className="mt-14"
            lang="hi"
          >
            <h2 id="bundle-heading" className="text-h2">
              Bundle क्या होता है? Per-tonne rate से per-bundle rate कैसे निकालें?
            </h2>
            <div className="mt-5 space-y-4 text-text-muted leading-relaxed">
              <p>
                TMT bars को{" "}
                <strong className="text-foreground">bundle</strong> में बेचा
                जाता है — कुछ bars एक साथ बंधी होती हैं। एक bundle का वज़न
                size और length के हिसाब से vary करता है (आमतौर पर 35–70 kg
                per bundle)। Bulk orders में हम{" "}
                <strong className="text-foreground">MT (metric tonne = 1000 kg)</strong>{" "}
                में deal करते हैं।
              </p>
              <p>
                Rate जब ₹/kg में दिया जाए, तो per-tonne rate निकालना आसान है:
              </p>
              <div className="rounded-xl border border-border bg-surface px-6 py-4 font-mono text-sm text-foreground">
                Per MT rate (₹) = Rate (₹/kg) × 1000
              </div>
              <p>
                प्रति meter bar का वज़न निकालने का standard formula है:
              </p>
              <div className="rounded-xl border border-accent/30 bg-accent/5 px-6 py-4 font-mono text-sm text-foreground">
                वज़न (kg/m) = D × D ÷ 162
                <span className="block text-text-muted mt-1 text-xs">
                  (D = bar diameter in mm · IS 1786:2008 के अनुसार)
                </span>
              </div>
              <p className="text-sm">
                Example: 16 mm bar का वज़न = 16 × 16 ÷ 162 = 1.58 kg/m। 12 mm
                = 12 × 12 ÷ 162 = 0.889 kg/m। अपने project का steel calculation
                करने के लिए हमारा{" "}
                <Link
                  href="/tmt-bar-weight-chart"
                  className="text-accent hover:underline"
                >
                  TMT bar weight chart
                </Link>{" "}
                देखें।
              </p>
            </div>
          </section>

          {/* ── Internal links ────────────────────────────────────────────────── */}
          <section aria-labelledby="related-heading" className="mt-14">
            <h2 id="related-heading" className="text-h2" lang="hi">
              Related Pages
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>
                <Link
                  href="/rungta-tmt-price-today"
                  className="text-accent hover:underline"
                >
                  Rungta TMT price today — Delhi NCR &amp; UP
                </Link>{" "}
                — English rate page with full price table.
              </li>
              <li>
                <Link
                  href="/rungta-tmt-dealer-delhi-ncr"
                  className="text-accent hover:underline"
                >
                  Authorized Rungta TMT Dealer in Delhi NCR
                </Link>{" "}
                — Authorized distributor verification &amp; how to order.
              </li>
              <li>
                <Link
                  href="/tmt-bar-weight-chart"
                  className="text-accent hover:underline"
                >
                  TMT Bar Weight Chart
                </Link>{" "}
                <span lang="hi">— हर size का weight per meter।</span>
              </li>
              <li>
                <Link
                  href="/steel-required-for-1000-sq-ft-house"
                  className="text-accent hover:underline"
                >
                  Steel required for 1000 sq ft house
                </Link>{" "}
                <span lang="hi">
                  — घर बनाने में कितना सरिया लगता है?
                </span>
              </li>
            </ul>
          </section>

          {/* ── FAQ in Hindi ──────────────────────────────────────────────────── */}
          <section aria-labelledby="faq-heading" className="mt-14">
            <h2 id="faq-heading" className="text-h2" lang="hi">
              अक्सर पूछे जाने वाले सवाल
            </h2>
            <div className="mt-6 space-y-3" lang="hi">
              {FAQ_HI.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border bg-surface p-5 open:border-accent/40"
                >
                  <summary className="cursor-pointer list-none font-semibold text-foreground group-open:text-accent">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ── Closing WhatsApp CTA ──────────────────────────────────────────── */}
          <div className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-xl font-bold text-foreground" lang="hi">
              Rungta TMT बार चाहिए दिल्ली NCR या UP में?
            </p>
            <p className="mt-2 text-sm text-text-muted" lang="hi">
              Grade, quantity, और delivery location WhatsApp पर भेजें — Vivek
              Aggarwal personally locked-in rate confirm करेंगे। Mon–Sat 9
              AM–7 PM।
            </p>
            <div className="mt-6 flex justify-center">
              <WhatsAppCta
                message={hindiCtaMessage}
                label="WhatsApp पर Bulk Inquiry भेजें"
              />
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}

/* ─── Sub-components ──────────────────────────────────────────────────────── */

function RangeRateTableHi({
  ranges,
  unit,
}: {
  ranges: { grade: string; minPerKg: number; maxPerKg: number }[];
  unit: string;
}) {
  return (
    <div>
      <p
        className="mb-3 font-mono text-xs uppercase tracking-wider text-text-muted"
        lang="hi"
      >
        Indicative price range · {unit} · GST अलग
      </p>
      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface border-b border-border">
            <tr>
              <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                Grade
              </th>
              <th
                className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted hidden sm:table-cell"
                lang="hi"
              >
                कहाँ use होता है
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                Min (₹/kg)
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                Max (₹/kg)
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted hidden md:table-cell">
                Per MT range
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {ranges.map((r) => {
              const info = GRADE_HINDI[r.grade];
              return (
                <tr
                  key={r.grade}
                  className="hover:bg-surface/50 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="font-display font-bold text-foreground">
                      {r.grade}
                    </div>
                    {info && (
                      <div className="text-xs text-text-muted mt-0.5 sm:hidden" lang="hi">
                        {info.use}
                      </div>
                    )}
                  </td>
                  <td
                    className="px-5 py-4 text-sm text-text-muted hidden sm:table-cell"
                    lang="hi"
                  >
                    {info?.use ?? "—"}
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-foreground">
                    ₹{r.minPerKg}
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-foreground">
                    ₹{r.maxPerKg}
                  </td>
                  <td className="px-5 py-4 text-right text-text-muted hidden md:table-cell">
                    ₹{(r.minPerKg * 1000).toLocaleString("en-IN")}–
                    {(r.maxPerKg * 1000).toLocaleString("en-IN")}/MT
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ExactRateTableHi({
  prices,
  unit,
}: {
  prices: { grade: string; pricePerKg: number }[];
  unit: string;
}) {
  return (
    <div>
      <p
        className="mb-3 font-mono text-xs uppercase tracking-wider text-text-muted"
        lang="hi"
      >
        आज का confirmed rate · {unit} · GST अलग
      </p>
      <div className="overflow-hidden rounded-xl border border-accent/40">
        <table className="w-full text-sm">
          <thead className="bg-accent/10 border-b border-accent/30">
            <tr>
              <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted">
                Grade
              </th>
              <th
                className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-text-muted hidden sm:table-cell"
                lang="hi"
              >
                कहाँ use होता है
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted">
                Rate (₹/kg)
              </th>
              <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-text-muted hidden md:table-cell">
                Per MT
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {prices.map((p) => {
              const info = GRADE_HINDI[p.grade];
              return (
                <tr
                  key={p.grade}
                  className="hover:bg-surface/50 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="font-display font-bold text-foreground">
                      {p.grade}
                    </div>
                    {info && (
                      <div className="text-xs text-text-muted mt-0.5 sm:hidden" lang="hi">
                        {info.use}
                      </div>
                    )}
                  </td>
                  <td
                    className="px-5 py-4 text-sm text-text-muted hidden sm:table-cell"
                    lang="hi"
                  >
                    {info?.use ?? "—"}
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-accent font-bold">
                    ₹{p.pricePerKg}
                  </td>
                  <td className="px-5 py-4 text-right font-mono text-text-muted hidden md:table-cell">
                    ₹{(p.pricePerKg * 1000).toLocaleString("en-IN")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UnavailableFallbackHi({
  ctaMessage,
}: {
  ctaMessage: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 text-center">
      <p className="text-lg font-semibold text-foreground" lang="hi">
        आज का रेट WhatsApp पर available है
      </p>
      <p className="mt-2 text-sm text-text-muted" lang="hi">
        Steel prices daily change होती हैं। अपनी grade, quantity, और
        delivery location बताएं — exact rate मिलेगा।
      </p>
      <div className="mt-6 flex justify-center">
        <WhatsAppCta
          message={ctaMessage}
          label="WhatsApp पर रेट पूछें"
        />
      </div>
    </div>
  );
}
