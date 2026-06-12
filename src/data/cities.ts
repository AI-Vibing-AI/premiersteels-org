/**
 * Cities data — consumed by src/components/site/city-page.tsx.
 *
 * DO NOT delete the City type or the `cities` export — they are
 * referenced by CityPage and the page generation scripts.
 *
 * Each city entry generates a page at /rungta-tmt-dealer-in-<city-slug>.
 */

export type CityFaq = {
  question: string;
  answer: string;
};

export type City = {
  /** URL slug, e.g. "ghaziabad" → /rungta-tmt-dealer-in-ghaziabad */
  slug: string;
  /** Display name, e.g. "Ghaziabad" */
  name: string;
  /** Full H1, e.g. "Rungta TMT Bars in Ghaziabad — Authorized Distributor" */
  h1: string;
  /** 2–3 sentence intro paragraph for the city page. */
  intro: string;
  /** Delivery promise specific to this city. */
  deliveryPromise: string;
  /** Notable localities/areas served in this city — shown as a list. */
  localities: string[];
  /** 4 FAQs specific to this city. */
  faqs: CityFaq[];
};

/**
 * Fully-worked EXAMPLE entry for Ghaziabad (headquarters city).
 * Kept as reference only — not exported into the cities array.
 */
const GHAZIABAD_EXAMPLE: City = {
  slug: "ghaziabad",
  name: "Ghaziabad",
  h1: "Rungta TMT Bars in Ghaziabad — Authorized Distributor",
  intro:
    "Premier Steels is the authorized Rungta Steel distributor for Ghaziabad, operating from our yard at 8, Loha Mandi, Bulandshahar Industrial Area. We supply Fe 500, Fe 500D, and Fe 550 grade TMT bars (8–32 mm) to construction firms, structural engineers, and infrastructure projects across Ghaziabad. Mill test certificate with every consignment.",
  deliveryPromise:
    "Same-day dispatch within Ghaziabad. Orders placed before 1 PM are typically delivered by end of business day.",
  localities: [
    "Indirapuram",
    "Vaishali",
    "Kaushambi",
    "Crossings Republik",
    "Raj Nagar Extension",
    "Siddharth Vihar",
    "NH-9 corridor",
    "Bulandshahar Road industrial belt",
  ],
  faqs: [
    {
      question: "What grades of Rungta TMT bars are available in Ghaziabad?",
      answer:
        "We stock Fe 500, Fe 500D, and Fe 550 Rungta TMT bars in 8 mm, 10 mm, 12 mm, 16 mm, 20 mm, 25 mm, 28 mm, and 32 mm diameters. All bars are IS 1786:2008 certified and supplied with Rungta's mill test certificate.",
    },
    {
      question: "What is the minimum order quantity for Ghaziabad delivery?",
      answer:
        "Minimum order quantity for delivery is typically 5 MT. For ex-yard pickup, there is no minimum. WhatsApp us your requirement for confirmation.",
    },
    {
      question: "Do you provide delivery across Ghaziabad?",
      answer:
        "Yes, we deliver across all areas of Ghaziabad including Indirapuram, Vaishali, Kaushambi, Raj Nagar Extension, and Crossings Republik. Same-day delivery is available for orders placed before 1 PM.",
    },
    {
      question: "Are Rungta TMT prices in Ghaziabad GST-inclusive?",
      answer:
        "Prices quoted by us are exclusive of GST (18%). The final invoice will include applicable GST. WhatsApp us for the current rate with GST breakup.",
    },
  ],
};

export const cities: City[] = [
  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    h1: "Rungta TMT Bars in Ghaziabad — Authorized Distributor",
    intro:
      "Premier Steels operates from 8, Loha Mandi, Bulandshahar Industrial Area — the heart of Ghaziabad's steel trading belt — making us the fastest-responding Rungta TMT source in the district. We supply Fe 500, Fe 500D, and Fe 550 grade TMT bars in 8–32 mm diameters to builders, contractors, and infrastructure projects across Ghaziabad city and its expanding corridors. Every consignment leaves the yard with a Rungta mill test certificate verifying grade, yield strength, and elongation per IS 1786:2008.",
    deliveryPromise:
      "Same-day dispatch within Ghaziabad city and adjoining zones. Orders confirmed before 1 PM are typically on-site by end of business day. Ex-yard pickup available round-the-clock on working days.",
    localities: [
      "Indirapuram",
      "Vaishali",
      "Kaushambi",
      "Crossings Republik",
      "Raj Nagar Extension",
      "Siddharth Vihar",
      "Mohan Nagar",
      "Lal Kuan",
      "NH-9 corridor",
      "Bulandshahar Road industrial belt",
      "Dasna",
      "Muradnagar",
    ],
    faqs: [
      {
        question:
          "What Rungta TMT grades do you supply in Ghaziabad, and what sizes are available?",
        answer:
          "We stock Fe 500, Fe 500D, and Fe 550 Rungta TMT bars in 8 mm, 10 mm, 12 mm, 16 mm, 20 mm, 25 mm, 28 mm, and 32 mm. Fe 500D is the most popular grade for Ghaziabad's high-rise residential projects given the seismic zone requirements.",
      },
      {
        question:
          "Can I get same-day delivery of Rungta TMT bars in Ghaziabad?",
        answer:
          "Yes — same-day delivery is our standard for Ghaziabad. Confirm your order on WhatsApp before 1 PM with grade, quantity, and site address, and the material is dispatched the same day. For larger quantities (20 MT+) WhatsApp us early in the day.",
      },
      {
        question:
          "What is the difference between Fe 500 and Fe 500D for Ghaziabad construction?",
        answer:
          "Both meet IS 1786:2008. Fe 500D has a higher elongation (min 16% vs 12% for Fe 500), which gives it better ductility under seismic loads. For residential buildings in Ghaziabad — which falls in Seismic Zone IV — structural engineers typically specify Fe 500D. Fe 500 is suitable for non-seismic or lightly loaded elements.",
      },
      {
        question:
          "Do Rungta TMT prices in Ghaziabad include GST and transport?",
        answer:
          "Prices we quote are ex-yard, exclusive of GST (18%). Transport cost within Ghaziabad is quoted separately and depends on quantity and delivery point. WhatsApp us with your site address and quantity for an all-in delivered price.",
      },
    ],
  },
  {
    slug: "noida",
    name: "Noida",
    h1: "Rungta TMT Bars in Noida — Authorized Distributor",
    intro:
      "Premier Steels supplies Rungta Steel TMT bars to Noida's construction sector from our Ghaziabad yard, just 15–20 km from most Noida sites via the NH-9 and NH-58 corridors. Noida's dense high-rise residential zones — Sector 137, 150, 76, 78 — and the ongoing commercial development along the Noida Expressway demand consistent, large-volume TMT supply with verified quality documentation. We deliver Fe 500, Fe 500D, and Fe 550 in 8–32 mm with a Rungta mill test certificate on every truck.",
    deliveryPromise:
      "Next-day delivery to Noida and Greater Noida (Delhi NCR standard). For urgent requirements in central Noida sectors, same-day delivery may be arranged — WhatsApp us before 11 AM to confirm availability.",
    localities: [
      "Sector 137",
      "Sector 150 (Noida Expressway)",
      "Sector 76 / 77 / 78",
      "Sector 62 (IT / commercial belt)",
      "Sector 18 (Atta Market area)",
      "Sector 44 / 45",
      "Sector 100 / 104",
      "Film City Road corridor",
      "Expressway Zone (Sectors 125–135)",
      "Sector 168 / 171",
    ],
    faqs: [
      {
        question:
          "How quickly can Rungta TMT bars be delivered to a Noida construction site?",
        answer:
          "Standard delivery to Noida is next business day. For time-critical pours, WhatsApp us before 11 AM — we can sometimes arrange same-day dispatch depending on yard availability and your Noida sector. Minimum 5 MT for delivery.",
      },
      {
        question:
          "Which grade of Rungta TMT is best for Noida high-rise residential projects?",
        answer:
          "Fe 500D is the go-to grade for Noida's high-rise residential segment. Noida falls in Seismic Zone IV, and IS 13920 (ductile detailing) typically mandates the higher elongation of Fe 500D for RCC frames. Fe 550 is preferred for heavy transfer slabs and podium structures where reducing steel weight matters.",
      },
      {
        question:
          "Do you supply to builder projects in Noida Expressway sectors?",
        answer:
          "Yes. We supply TMT bars to construction projects along the Noida Expressway (Sectors 100–171). Bulk orders for large projects can be scheduled with staggered deliveries to match your RCC pouring schedule. WhatsApp your monthly requirement and we will set up a supply arrangement.",
      },
      {
        question:
          "What documentation do I get with Rungta TMT delivered to Noida?",
        answer:
          "Every consignment includes a Rungta Steel mill test certificate (MTC) that specifies lot number, grade (Fe 500/500D/550), yield strength, ultimate tensile strength, elongation percentage, and chemical composition — all per IS 1786:2008. The MTC is accepted by structural engineers, PMCs, and RERA auditors.",
      },
    ],
  },
  {
    slug: "greater-noida",
    name: "Greater Noida",
    h1: "Rungta TMT Bars in Greater Noida — Authorized Distributor",
    intro:
      "Greater Noida's infrastructure and residential expansion — from Knowledge Park and the Yamuna Expressway Industrial Development Authority (YEIDA) zones to Sector Mu, Gamma, and the Pari Chowk belt — demands high-volume, quality-certified TMT supply. Premier Steels delivers Rungta Steel Fe 500, Fe 500D, and Fe 550 TMT bars from our Ghaziabad yard to Greater Noida sites, with a mill test certificate on every consignment and grades from 8 mm to 32 mm in stock.",
    deliveryPromise:
      "Next-day delivery to Greater Noida (Delhi NCR standard). For Knowledge Park and sectors nearest to Ghaziabad, WhatsApp before noon for possible same-day dispatch.",
    localities: [
      "Knowledge Park I / II / III / IV / V",
      "Sector Alpha I & II",
      "Sector Beta I & II",
      "Sector Gamma I & II",
      "Sector Mu (residential)",
      "Sector Delta",
      "Pari Chowk commercial zone",
      "Yamuna Expressway corridor",
      "Sector Omega",
      "Ecotech industrial areas",
      "Surajpur industrial area",
      "Kasna / Rabupura belt",
    ],
    faqs: [
      {
        question:
          "Do you supply Rungta TMT bars to projects on the Yamuna Expressway belt?",
        answer:
          "Yes. We supply to construction sites along the Yamuna Expressway in Greater Noida and YEIDA zones. For projects south of Pari Chowk, allow one working day for delivery. WhatsApp us the project location and requirement for a delivery confirmation.",
      },
      {
        question:
          "What sizes of Rungta TMT bars are most in demand for Greater Noida housing projects?",
        answer:
          "For typical Greater Noida G+3 to G+12 residential projects, 10 mm and 12 mm are used for stirrups and slabs, while 16 mm, 20 mm, and 25 mm are the core column and beam sizes. We stock all eight standard diameters (8–32 mm) and can supply to your bar-bending schedule.",
      },
      {
        question:
          "Is Fe 500D mandatory for Greater Noida's seismic zone classification?",
        answer:
          "Greater Noida falls in Seismic Zone IV. IS 13920:2016 requires ductile reinforcement (Fe 500D or higher elongation grades) for moment-resisting frames in seismic zones III and above. Most structural engineers in Greater Noida specify Fe 500D as the default for RCC-framed buildings.",
      },
      {
        question:
          "What is the minimum order for delivery to Greater Noida, and are prices ex-yard or delivered?",
        answer:
          "Minimum 5 MT for delivery. Prices are quoted ex-yard (Ghaziabad), exclusive of GST (18%); transport to Greater Noida is quoted separately. For large scheduled orders, we can quote an all-in delivered price. WhatsApp us your site address and monthly requirement.",
      },
    ],
  },
  {
    slug: "gurgaon",
    name: "Gurgaon",
    h1: "Rungta TMT Bars in Gurgaon — Authorized Distributor",
    intro:
      "Gurgaon's construction scene — from the dense residential sectors of Sohna Road and New Gurgaon to the high-rise commercial clusters of Golf Course Road and Cyber City — requires TMT supply that can meet both volume and documentation standards set by project management consultants. Premier Steels delivers Rungta Steel Fe 500, Fe 500D, and Fe 550 TMT bars from our Ghaziabad yard to Gurgaon sites, with full IS 1786:2008 certification and mill test certificate included on every load.",
    deliveryPromise:
      "Next-day delivery to Gurgaon (Delhi NCR standard). Dispatch is coordinated the same evening as order confirmation — your material arrives at your Gurgaon site first thing the next working day.",
    localities: [
      "Sector 49 / 57 (Sohna Road)",
      "Sector 65 / 67 / 68 (Southern Peripheral Road)",
      "New Gurgaon (Sectors 80–95)",
      "Dwarka Expressway corridor (Sectors 99–115)",
      "Golf Course Road",
      "Golf Course Extension Road",
      "Cyber City / DLF Cyber Park area",
      "NH-48 (Delhi–Jaipur Highway) belt",
      "Manesar Industrial belt (IMT Manesar)",
      "Palam Vihar",
    ],
    faqs: [
      {
        question:
          "Do you deliver Rungta TMT bars directly to Gurgaon construction sites?",
        answer:
          "Yes. We deliver to Gurgaon from our Ghaziabad yard. Standard lead time is next working day. For New Gurgaon and Dwarka Expressway sectors, delivery typically happens in the morning slot. WhatsApp your site address, grade, and quantity to confirm the delivery window.",
      },
      {
        question:
          "My Gurgaon project PMC requires a mill test certificate. Do you provide one?",
        answer:
          "Absolutely — a Rungta Steel mill test certificate (MTC) comes standard with every consignment, without exception. The MTC covers grade, heat number, chemical composition, yield strength, UTS, and elongation per IS 1786:2008, and is accepted by all PMCs and structural auditors.",
      },
      {
        question:
          "For a Gurgaon high-rise project in Seismic Zone IV, which grade should I specify?",
        answer:
          "Fe 500D is the standard specification for RCC moment frames in Seismic Zone IV under IS 13920:2016. It provides the higher elongation (min 16%) required for ductile frame behaviour. Fe 550 is also available if your structural engineer wants to reduce steel tonnage — it can lower steel quantity by approximately 10% in equivalent designs.",
      },
      {
        question:
          "Can you supply TMT bars on a scheduled basis for a large Gurgaon project?",
        answer:
          "Yes. For projects requiring regular monthly tonnage, we can set up a supply schedule tied to your RCC programme — weekly or fortnightly truck arrivals with pre-confirmed quantities. WhatsApp Vivek Aggarwal directly with your monthly requirement and we will work out a supply agreement.",
      },
    ],
  },
  {
    slug: "faridabad",
    name: "Faridabad",
    h1: "Rungta TMT Bars in Faridabad — Authorized Distributor",
    intro:
      "Faridabad — Haryana's largest industrial city and part of the Delhi NCR — has a thriving construction sector spanning Sector 15–88, the NIT area, Ballabhgarh, and the fast-developing zones along NH-19 (formerly NH-2). Premier Steels supplies Rungta Steel TMT bars to Faridabad from our Ghaziabad yard, with next-day delivery across the city and full quality documentation per IS 1786:2008. Fe 500, Fe 500D, and Fe 550 in 8 mm to 32 mm are in continuous stock.",
    deliveryPromise:
      "Next-day delivery to Faridabad (Delhi NCR standard). Orders confirmed by 3 PM are dispatched the same evening, arriving at your Faridabad site the next morning.",
    localities: [
      "Sector 15 / 16 / 17 (NIT Faridabad)",
      "Sector 31 / 37 (commercial belt)",
      "Sector 46 / 56 / 57",
      "Ballabhgarh",
      "NH-19 / Mathura Road corridor",
      "HSIDC Industrial Estate",
      "Sector 65 / 75 / 85",
      "Old Faridabad (Ajronda area)",
      "Bata Chowk industrial zone",
      "IMT Faridabad",
    ],
    faqs: [
      {
        question:
          "How long does delivery of Rungta TMT bars from Ghaziabad to Faridabad take?",
        answer:
          "Typically next working day. Our Ghaziabad yard dispatches to Faridabad via NH-9 and the Peripheral Expressway. Confirm your order by 3 PM and your material is loaded the same evening for next-morning site delivery.",
      },
      {
        question:
          "Do you supply to industrial construction projects in HSIDC / IMT Faridabad?",
        answer:
          "Yes. Industrial construction typically requires Fe 550 or Fe 500D depending on structural loads. We supply bulk TMT for industrial shed structures, warehouse RCC frames, and factory floors in HSIDC Industrial Estate and IMT Faridabad. WhatsApp your bar schedule for a bulk quote.",
      },
      {
        question:
          "What is the bar weight per metre for Rungta TMT bars — how do I estimate my order quantity?",
        answer:
          "Standard formula: weight (kg/m) = D² ÷ 162, where D is diameter in mm. For example, 16 mm bar = 256 ÷ 162 ≈ 1.58 kg/m; 20 mm = 400 ÷ 162 ≈ 2.47 kg/m. Multiply by the total bar length in your bar-bending schedule to get MT required. WhatsApp us the schedule and we can help cross-check the quantity.",
      },
      {
        question:
          "Are Rungta TMT bars suitable for Faridabad's industrial and warehouse construction?",
        answer:
          "Yes. Rungta TMT bars are IS 1786:2008 certified and manufactured under quality protocols suitable for industrial-grade construction. For heavy industrial slabs and warehouse frames, Fe 550 can reduce overall steel consumption; for standard commercial and residential construction in Faridabad, Fe 500D is the commonly specified grade.",
      },
    ],
  },
  {
    slug: "meerut",
    name: "Meerut",
    h1: "Rungta TMT Bars in Meerut — Authorized Distributor",
    intro:
      "Meerut is one of the most active construction markets in western Uttar Pradesh, with growth concentrated around Shastri Nagar, Kankerkhera, the Delhi-Meerut Expressway corridor, and the Meerut-Hapur bypass areas. Premier Steels supplies Rungta Steel Fe 500, Fe 500D, and Fe 550 TMT bars from our Ghaziabad yard to Meerut contractors and builders — roughly 60 km away via the Delhi-Meerut Expressway — with scheduled next-day delivery and full IS 1786:2008 documentation.",
    deliveryPromise:
      "Scheduled delivery to Meerut — typically next working day via the Delhi-Meerut Expressway. Orders confirmed by 2 PM are dispatched the same evening for next-morning delivery.",
    localities: [
      "Shastri Nagar",
      "Kankerkhera",
      "Garh Road",
      "Mawana Road corridor",
      "Delhi-Meerut Expressway belt",
      "Hapur Road",
      "Civil Lines",
      "Modipuram",
      "Lisari Gate area",
      "Pallavpuram",
      "Bhavishya Nidhi residential zone",
      "Naubasta Kalan",
    ],
    faqs: [
      {
        question:
          "How does Premier Steels supply Rungta TMT bars to Meerut?",
        answer:
          "We dispatch from our Ghaziabad yard via the Delhi-Meerut Expressway — approximately 60 km. Standard transit time is 1.5–2 hours, making next-day morning delivery reliable. Orders above 10 MT can often be prioritised for early dispatch. WhatsApp us your site location and requirement.",
      },
      {
        question:
          "Is Fe 500D the right grade for Meerut residential construction given UP's seismic risk?",
        answer:
          "Meerut district falls in Seismic Zone IV, which means IS 13920 ductile detailing applies to RCC frames. Fe 500D, with its minimum 16% elongation, is the appropriate grade for all moment-resisting frames. For standalone G+2 residential houses not requiring seismic detailing, Fe 500 is commonly used.",
      },
      {
        question:
          "Do you have a local dealer in Meerut or only supply direct?",
        answer:
          "We supply direct from our authorized Rungta distributorship in Ghaziabad — there is no intermediary local dealer markup. This means you receive Rungta's mill test certificate, a verified bill, and competitive bulk pricing. To enquire, WhatsApp Vivek Aggarwal directly.",
      },
      {
        question:
          "What is the minimum order for Rungta TMT delivery to Meerut?",
        answer:
          "Minimum 5 MT for a delivery run to Meerut. For smaller quantities, ex-yard pickup from our Ghaziabad yard is available with no minimum. For regular monthly supply to a Meerut project, we can schedule weekly deliveries — WhatsApp us your programme.",
      },
    ],
  },
  {
    slug: "hapur",
    name: "Hapur",
    h1: "Rungta TMT Bars in Hapur — Authorized Distributor",
    intro:
      "Hapur — a rapidly urbanising district headquarters in western UP — sits approximately 35 km from our Ghaziabad yard along NH-9, making it one of our fastest-served outstation markets. Construction activity in Hapur city, Pilkhuwa, and the industrial belt along the NH-9 bypass has grown significantly. Premier Steels delivers Rungta Steel Fe 500, Fe 500D, and Fe 550 TMT bars (8–32 mm) to Hapur with efficient next-day delivery and a mill test certificate on every consignment.",
    deliveryPromise:
      "Next-day delivery to Hapur — typically within 2 hours of dispatch from Ghaziabad via NH-9. Orders confirmed by 2 PM can often be delivered the same day given the short distance.",
    localities: [
      "Hapur city (Lal Kuan road)",
      "Pilkhuwa",
      "Garh Mukteshwar belt",
      "NH-9 bypass industrial zone",
      "Simbhaoli",
      "Dhaulana",
      "Hapur-Meerut Road corridor",
      "Babugarh",
      "Asafpur",
    ],
    faqs: [
      {
        question:
          "How quickly can you deliver Rungta TMT bars to Hapur from Ghaziabad?",
        answer:
          "Hapur is approximately 35 km from our Ghaziabad yard along NH-9, roughly 45–60 minutes transit. Orders confirmed by 2 PM can typically be delivered the same day. For next-morning guaranteed delivery, confirm your order by 5 PM the previous day.",
      },
      {
        question:
          "Are Rungta TMT bars in Hapur priced the same as in Ghaziabad?",
        answer:
          "The ex-yard price is the same. There is a small transport charge for Hapur delivery that depends on quantity. For 10 MT or more, the per-kg transport addition is minimal. WhatsApp us for an all-in delivered price to your Hapur site.",
      },
      {
        question:
          "Can I pick up Rungta TMT bars from the Ghaziabad yard instead of taking delivery in Hapur?",
        answer:
          "Yes, ex-yard pickup from 8, Loha Mandi, Bulandshahar Industrial Area, Ghaziabad is available Mon–Sat, 9 AM–7 PM with no minimum quantity. Many Hapur builders and contractors send their own trucks to pick up. WhatsApp us ahead of time so material is ready for loading.",
      },
      {
        question:
          "What grade should I use for a G+3 residential building in Hapur?",
        answer:
          "Hapur falls under Seismic Zone IV. Structural engineers typically specify Fe 500D for all RCC-framed buildings — the higher elongation is required by IS 13920 for ductile frame behaviour in seismic zones III and above. Fe 500 is acceptable for lightly loaded non-seismic elements and foundations where seismic detailing is not required.",
      },
    ],
  },
  {
    slug: "moradabad",
    name: "Moradabad",
    h1: "Rungta TMT Bars in Moradabad — Authorized Distributor",
    intro:
      "Moradabad — the 'Brass City' of UP and a major industrial and residential growth centre — sits approximately 165 km from our Ghaziabad yard along NH-9 and the Ghaziabad-Moradabad highway. Construction in Moradabad city, Civil Lines, Pakbara, and the expanding sectors of Moradabad Development Authority (MDA) areas requires consistent, certified TMT supply. Premier Steels dispatches Rungta Steel Fe 500, Fe 500D, and Fe 550 TMT bars with scheduled deliveries, full IS 1786:2008 documentation, and a mill test certificate on every consignment.",
    deliveryPromise:
      "Scheduled delivery to Moradabad — typically next working day. Orders confirmed by 1 PM are dispatched the same afternoon, arriving at your Moradabad site the following morning.",
    localities: [
      "Civil Lines",
      "Pakbara",
      "Katghar",
      "Jail Road area",
      "Peepal Mandi",
      "MDA sectors (Moradabad Development Authority zones)",
      "Ram Ganga Vihar",
      "Delhi Road corridor (NH-9 belt)",
      "Buddhi Vihar",
      "Thakurdwara Road",
      "Sambhal Road belt",
    ],
    faqs: [
      {
        question:
          "Do you regularly deliver Rungta TMT bars to Moradabad?",
        answer:
          "Yes, we supply to Moradabad on a scheduled basis. Our trucks cover the NH-9 / Ghaziabad-Moradabad corridor. For consistent supply to a Moradabad project, we typically set up a weekly or bi-weekly dispatch schedule tied to your RCC programme. WhatsApp us your monthly requirement to arrange.",
      },
      {
        question:
          "Why choose an authorized Rungta distributor in Ghaziabad over a local Moradabad dealer?",
        answer:
          "Buying direct from an authorized Rungta distributor guarantees you get genuine IS 1786:2008 certified material with a Rungta mill test certificate — not a re-rolled or substitute bar. You also get direct pricing without extra distributor margins. The small transport cost to Moradabad is often offset by the price advantage and the certainty of certified quality.",
      },
      {
        question:
          "Can you supply Rungta Fe 550 to Moradabad for an industrial project?",
        answer:
          "Yes. Fe 550 is stocked in all eight standard sizes (8–32 mm) and can be dispatched to Moradabad on the next scheduled run. Fe 550 is preferred for heavy industrial structures and large-span frames where reducing steel tonnage by ~10% versus Fe 500 in equivalent designs is structurally and commercially attractive.",
      },
      {
        question:
          "How do I verify the quality of Rungta TMT bars delivered to Moradabad?",
        answer:
          "Each consignment comes with a Rungta Steel mill test certificate (MTC) that records heat number, grade, yield strength, UTS, elongation, and chemical composition per IS 1786:2008. Your structural engineer or QA team can cross-check the bar dimensions against IS 1786 nominal tolerances. Third-party testing labs in Moradabad can also conduct independent testing if your project requires it.",
      },
    ],
  },
];

// Export the example for reference only.
export { GHAZIABAD_EXAMPLE };
