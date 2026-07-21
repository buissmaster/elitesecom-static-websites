export interface ComparisonRow {
  feature: string;
  elitesecom: string;
  competitor: string;
  highlight?: boolean;
}

export interface AlternativePageConfig {
  id: string;
  competitorName: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  metaAngle: string;
  rows: ComparisonRow[];
  advantages: string[];
  faqs: { q: string; a: string }[];
}

export const UNICOMMERCE_ALTERNATIVE: AlternativePageConfig = {
  id: "unicommerce-alternative",
  competitorName: "Unicommerce",
  heroTitle: "Best Unicommerce Alternative for",
  heroHighlight: "Indian Marketplace Sellers",
  heroSubtitle:
    "Elitesecom OMS gives you transparent pricing, built-in payment & return reconciliation, and multichannel order management — without hidden implementation fees or long enterprise onboarding cycles.",
  metaAngle: "Unicommerce alternative",
  rows: [
    {
      feature: "Published pricing",
      elitesecom: "Transparent plans on website",
      competitor: "Custom quote required",
      highlight: true,
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Built into every plan",
      competitor: "UniReco (often add-on tier)",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "Via UniReco module",
    },
    {
      feature: "Onboarding time",
      elitesecom: "Fast setup with dedicated support",
      competitor: "Often 3–8 weeks for SMBs",
    },
    {
      feature: "Marketplace integrations",
      elitesecom: "Amazon, Flipkart, Meesho, Shopify & more",
      competitor: "290+ integrations",
    },
    {
      feature: "Ideal order volume",
      elitesecom: "1,000 – 50,000 orders/month",
      competitor: "5,000 – 50 lakh orders/month",
      highlight: true,
    },
    {
      feature: "WMS + OMS",
      elitesecom: "Unified dashboard",
      competitor: "Uniware suite",
    },
    {
      feature: "ISO-certified security",
      elitesecom: "ISO 27001, 37001, 42001",
      competitor: "Enterprise-grade security",
    },
  ],
  advantages: [
    "Transparent GST-inclusive pricing — no surprise implementation invoices",
    "Elitesecom OMS reconciliation built in, not sold as a separate finance tool",
    "Better fit for growing sellers not yet at enterprise scale",
    "Dedicated server infrastructure with 99.9% uptime",
    "Free onboarding assistance on all plans",
  ],
  faqs: [
    {
      q: "Is Elitesecom a good Unicommerce alternative?",
      a: "Yes. Elitesecom OMS is ideal for Indian sellers who need multichannel OMS, payment reconciliation, and WMS at a published price point — especially if Unicommerce's custom enterprise pricing feels too heavy for your current order volume.",
    },
    {
      q: "Does Elitesecom OMS include payment reconciliation like UniReco?",
      a: "Yes. Payment reconciliation, return reconciliation, and settlement matching are core Elitesecom OMS features included in Startup, Growth, and Enterprise plans.",
    },
    {
      q: "Can I migrate from Unicommerce to Elitesecom?",
      a: "Yes. Our team provides onboarding support to connect marketplaces, sync inventory, and configure reconciliation workflows with minimal disruption to live operations.",
    },
  ],
};

export const EASYECOM_ALTERNATIVE: AlternativePageConfig = {
  id: "easyecom-alternative",
  competitorName: "EasyEcom",
  heroTitle: "EasyEcom Alternative with",
  heroHighlight: "Transparent INR Pricing",
  heroSubtitle:
    "Compare Elitesecom OMS vs EasyEcom for multichannel order management, payment reconciliation, and warehouse operations — with clear India pricing and ISO-certified infrastructure.",
  metaAngle: "EasyEcom alternative",
  rows: [
    {
      feature: "Pricing currency",
      elitesecom: "INR plans with GST included",
      competitor: "USD-based tiers",
      highlight: true,
    },
    {
      feature: "Startup plan",
      elitesecom: "₹17,700/mo — 6,000 orders",
      competitor: "~$89/mo — 500 orders",
    },
    {
      feature: "Growth scale",
      elitesecom: "₹1,00,300/mo — 50,000 orders",
      competitor: "~$449/mo — 5,000 orders",
      highlight: true,
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Built-in settlement matching",
      competitor: "EasyReco module",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund tracking",
      competitor: "Missing returns reconciliation",
    },
    {
      feature: "Security certifications",
      elitesecom: "ISO 27001, 37001, 42001",
      competitor: "ISO 27001",
    },
    {
      feature: "Infrastructure",
      elitesecom: "20+ dedicated AWS servers",
      competitor: "Cloud SaaS",
    },
    {
      feature: "Marketplace focus",
      elitesecom: "Amazon, Flipkart, Meesho, Shopify",
      competitor: "220+ channel integrations",
    },
  ],
  advantages: [
    "INR pricing with GST included — easier finance planning for Indian teams",
    "Higher order limits on Growth plan for fast-scaling brands",
    "ISO 27001 + AI management (42001) certifications for enterprise trust",
    "Reconciliation included without separate EasyReco-style upsells",
    "Dedicated infrastructure built for high-volume Indian marketplace sellers",
  ],
  faqs: [
    {
      q: "How is Elitesecom OMS different from EasyEcom?",
      a: "Elitesecom OMS offers INR-native pricing, ISO-certified security, dedicated infrastructure, and built-in reconciliation — designed for Indian sellers scaling beyond basic multichannel sync.",
    },
    {
      q: "Is Elitesecom OMS cheaper than EasyEcom at scale?",
      a: "For high-volume sellers (10,000+ orders/month), Elitesecom OMS Growth at ₹1,00,300 for 50,000 orders often delivers lower per-order cost than EasyEcom's tiered USD pricing.",
    },
    {
      q: "Does Elitesecom OMS support the same marketplaces as EasyEcom?",
      a: "Yes. Elitesecom OMS integrates with Amazon, Flipkart, Meesho, Myntra, Shopify, Ajio, and other major Indian ecommerce channels with real-time order and inventory sync.",
    },
  ],
};

export const VINCULUM_ALTERNATIVE: AlternativePageConfig = {
  id: "vinculum-alternative",
  competitorName: "Vinculum",
  heroTitle: "Best Vinculum Alternative with",
  heroHighlight: "Published INR Pricing",
  heroSubtitle:
    "Compare Elitesecom OMS vs Vinculum Vin eRetail for multichannel order management, payment reconciliation, and warehouse operations — with transparent India pricing instead of custom enterprise quotes.",
  metaAngle: "Vinculum alternative",
  rows: [
    {
      feature: "Pricing model",
      elitesecom: "Published INR plans on website",
      competitor: "Custom quotes & annual contracts",
      highlight: true,
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Built into every plan",
      competitor: "Omnichannel recon module (add-on)",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "Returns module in Vin suite",
    },
    {
      feature: "Onboarding",
      elitesecom: "Fast setup with dedicated support",
      competitor: "Implementation fees common",
    },
    {
      feature: "Marketplace integrations",
      elitesecom: "Amazon, Flipkart, Meesho, Shopify & more",
      competitor: "150+ channels & 3PL integrations",
    },
    {
      feature: "Ideal order volume",
      elitesecom: "1,000 – 50,000 orders/month",
      competitor: "Enterprise & omnichannel retail",
      highlight: true,
    },
    {
      feature: "WMS + OMS",
      elitesecom: "Unified dashboard",
      competitor: "Vin OMS + Vin WMS modules",
    },
    {
      feature: "ISO-certified security",
      elitesecom: "ISO 27001, 37001, 42001",
      competitor: "Enterprise-grade security",
    },
  ],
  advantages: [
    "Published GST-inclusive pricing — no multi-month contract negotiation for mid-market sellers",
    "Reconciliation included in every plan, not a separate finance module",
    "Better fit for marketplace-first brands scaling before full omnichannel retail",
    "Dedicated AWS infrastructure with 99.9% uptime SLA",
    "Free onboarding assistance on Startup and Growth plans",
  ],
  faqs: [
    {
      q: "Is Elitesecom OMS a good Vinculum alternative?",
      a: "Yes. Elitesecom OMS is ideal for Indian marketplace sellers who need OMS, WMS, and payment reconciliation at a published price — especially if Vinculum's custom enterprise pricing and implementation timeline exceed your current scale.",
    },
    {
      q: "Does Elitesecom OMS match Vinculum's omnichannel features?",
      a: "Elitesecom OMS covers multichannel order management, inventory sync, warehouse operations, and reconciliation for Amazon, Flipkart, Meesho, Shopify, and more. Vinculum leads on complex BOPIS/BORIS and 3PL orchestration at very large scale.",
    },
    {
      q: "Can I migrate from Vinculum to Elitesecom?",
      a: "Yes. Our onboarding team helps reconnect marketplaces, sync inventory, and configure reconciliation workflows with minimal disruption to live order processing.",
    },
  ],
};

export const BROWNTAPE_ALTERNATIVE: AlternativePageConfig = {
  id: "browntape-alternative",
  competitorName: "Browntape (Ginesys OMS)",
  heroTitle: "Best Browntape Alternative for",
  heroHighlight: "Marketplace-First Sellers",
  heroSubtitle:
    "Compare Elitesecom OMS vs Browntape (Ginesys OMS) for multichannel order management — with higher order limits, built-in reconciliation, and transparent pricing without per-line-item usage fees.",
  metaAngle: "Browntape alternative",
  rows: [
    {
      feature: "Pricing model",
      elitesecom: "Flat monthly plans (GST included)",
      competitor: "Base fee + per order-line charges",
      highlight: true,
    },
    {
      feature: "Startup plan",
      elitesecom: "₹17,700/mo — 6,000 orders",
      competitor: "From ~₹5,000/mo + usage fees",
    },
    {
      feature: "Growth scale",
      elitesecom: "₹1,00,300/mo — 50,000 orders",
      competitor: "Custom tiers + line-item fees",
      highlight: true,
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Built-in settlement matching",
      competitor: "Marketplace payment tracking",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund tracking",
      competitor: "Returns management module",
    },
    {
      feature: "ERP integration",
      elitesecom: "Marketplace + WMS focused",
      competitor: "Deep Ginesys ERP/POS bridge",
    },
    {
      feature: "Marketplace focus",
      elitesecom: "Amazon, Flipkart, Meesho, Shopify",
      competitor: "60+ Indian marketplaces",
    },
    {
      feature: "ISO-certified security",
      elitesecom: "ISO 27001, 37001, 42001",
      competitor: "Cloud SaaS security",
    },
  ],
  advantages: [
    "Predictable monthly pricing — no surprise per-line-item usage bills",
    "50,000 orders on Growth vs Browntape-style usage-based scaling",
    "Payment and return reconciliation included without ERP add-ons",
    "Dedicated infrastructure for high-volume Indian marketplace sellers",
    "Free onboarding support on all plans",
  ],
  faqs: [
    {
      q: "Is Elitesecom OMS a good Browntape alternative?",
      a: "Yes. Elitesecom OMS suits Indian marketplace sellers who want OMS, WMS, and reconciliation in one platform with published INR pricing — without Browntape's base fee plus per-order-line usage model.",
    },
    {
      q: "How does Elitesecom OMS compare to Ginesys OMS (Browntape)?",
      a: "Ginesys OMS excels when you need deep ERP/POS integration across retail stores. Elitesecom OMS is built for marketplace-first brands that prioritize order volume, reconciliation, and warehouse operations at transparent pricing.",
    },
    {
      q: "Can I switch from Browntape to Elitesecom?",
      a: "Yes. We help migrate marketplace connections, inventory data, and reconciliation rules so your team can continue fulfilling orders without downtime.",
    },
  ],
};

export const ANCHANTO_ALTERNATIVE: AlternativePageConfig = {
  id: "anchanto-alternative",
  competitorName: "Anchanto",
  heroTitle: "Best Anchanto Alternative for",
  heroHighlight: "Indian Marketplace Sellers",
  heroSubtitle:
    "Compare Elitesecom OMS vs Anchanto SelluSeller for order management, inventory sync, and payment reconciliation — with India-native pricing and ISO-certified infrastructure.",
  metaAngle: "Anchanto alternative",
  rows: [
    {
      feature: "Pricing model",
      elitesecom: "Published INR plans on website",
      competitor: "Custom quotes by tier",
      highlight: true,
    },
    {
      feature: "Regional focus",
      elitesecom: "India marketplace specialists",
      competitor: "APAC-wide (14+ countries)",
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Built into every plan",
      competitor: "Finance modules via integrations",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "Returns management in OMS",
    },
    {
      feature: "Marketplace integrations",
      elitesecom: "Amazon, Flipkart, Meesho, Shopify & more",
      competitor: "100+ APAC marketplaces",
    },
    {
      feature: "Ideal order volume",
      elitesecom: "1,000 – 50,000 orders/month",
      competitor: "SME to enterprise scale",
      highlight: true,
    },
    {
      feature: "WMS + OMS",
      elitesecom: "Unified dashboard",
      competitor: "OMS + WMS + PIM suite",
    },
    {
      feature: "ISO-certified security",
      elitesecom: "ISO 27001, 37001, 42001",
      competitor: "Enterprise SaaS security",
    },
  ],
  advantages: [
    "India-first OMS with GST-inclusive pricing on the website",
    "Built-in payment and return reconciliation for Amazon, Flipkart, Meesho",
    "Dedicated AWS infrastructure — not shared multi-tenant APAC hosting",
    "Faster onboarding for Indian marketplace sellers without cross-border setup",
    "ISO 27001 + AI management (42001) certifications",
  ],
  faqs: [
    {
      q: "Is Elitesecom OMS a good Anchanto alternative?",
      a: "Yes. Elitesecom OMS is built for Indian marketplace sellers who need OMS, WMS, and reconciliation at published pricing — especially if Anchanto's APAC-focused platform and custom quotes are more than you need today.",
    },
    {
      q: "Does Elitesecom OMS support the same marketplaces as Anchanto?",
      a: "Elitesecom OMS integrates with Amazon, Flipkart, Meesho, Myntra, Shopify, Ajio, and other major Indian channels. Anchanto covers broader APAC marketplaces like Shopee and Lazada for cross-border sellers.",
    },
    {
      q: "Can I migrate from Anchanto to Elitesecom?",
      a: "Yes. Our team assists with marketplace reconnections, catalog sync, and reconciliation setup to minimize disruption during migration.",
    },
  ],
};

export const SHIPROCKET_ALTERNATIVE: AlternativePageConfig = {
  id: "shiprocket-alternative",
  competitorName: "Shiprocket",
  heroTitle: "Full OMS Alternative to",
  heroHighlight: "Shiprocket Logistics",
  heroSubtitle:
    "Shiprocket excels at shipping aggregation — Elitesecom OMS gives you complete order management, inventory sync, payment reconciliation, and WMS when you've outgrown logistics-only tools.",
  metaAngle: "Shiprocket OMS alternative",
  rows: [
    {
      feature: "Primary focus",
      elitesecom: "Full OMS + WMS + reconciliation",
      competitor: "Logistics & shipping aggregation",
      highlight: true,
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Marketplace settlement matching",
      competitor: "COD remittance tracking only",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "RTO & returns shipping tools",
    },
    {
      feature: "Inventory management",
      elitesecom: "Real-time multichannel sync",
      competitor: "Basic channel order sync",
    },
    {
      feature: "Warehouse operations",
      elitesecom: "Pick-pack-ship WMS built in",
      competitor: "Shiprocket Fulfillment (3PL add-on)",
    },
    {
      feature: "Pricing model",
      elitesecom: "Flat monthly OMS plans",
      competitor: "Per-shipment shipping rates",
      highlight: true,
    },
    {
      feature: "Marketplace focus",
      elitesecom: "Amazon, Flipkart, Meesho, Shopify",
      competitor: "Shopify, WooCommerce, marketplaces",
    },
    {
      feature: "Scale ceiling",
      elitesecom: "Up to unlimited orders (Enterprise)",
      competitor: "Best under ~5,000 orders/day",
    },
  ],
  advantages: [
    "End-to-end OMS — not just label printing and courier selection",
    "Marketplace payment reconciliation beyond COD remittance",
    "Multichannel inventory sync to prevent overselling across channels",
    "WMS workflows for pick lists, packing, and warehouse KPIs",
    "Works alongside Shiprocket shipping — or replaces the need for a separate OMS layer",
  ],
  faqs: [
    {
      q: "Do I need Elitesecom OMS if I already use Shiprocket?",
      a: "If you only ship D2C orders from one store, Shiprocket may be enough. Once you sell on multiple marketplaces and need inventory sync, settlement reconciliation, and warehouse management, a full OMS like Elitesecom becomes essential.",
    },
    {
      q: "Can Elitesecom OMS work with Shiprocket for shipping?",
      a: "Yes. Many sellers use Elitesecom OMS for order orchestration, inventory, and reconciliation while continuing to ship via their preferred courier or aggregator integrations.",
    },
    {
      q: "Is Elitesecom OMS better than Shiprocket for marketplace sellers?",
      a: "For Amazon, Flipkart, and Meesho sellers managing thousands of orders monthly, Elitesecom OMS provides deeper reconciliation, return matching, and WMS capabilities that logistics-first tools typically do not cover.",
    },
  ],
};

export const INCREFF_ALTERNATIVE: AlternativePageConfig = {
  id: "increff-alternative",
  competitorName: "Increff",
  heroTitle: "Best Increff Alternative for",
  heroHighlight: "Marketplace & D2C Brands",
  heroSubtitle:
    "Compare Elitesecom OMS vs Increff for order management and reconciliation — with transparent pricing for multichannel sellers who don't need fashion-specific merchandising modules.",
  metaAngle: "Increff alternative",
  rows: [
    {
      feature: "Primary focus",
      elitesecom: "OMS + WMS + reconciliation",
      competitor: "Fashion merchandising & planning",
      highlight: true,
    },
    {
      feature: "Pricing model",
      elitesecom: "Published INR plans on website",
      competitor: "Custom enterprise quotes",
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Built into every plan",
      competitor: "Operations-focused analytics",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "Returns & markdown planning",
    },
    {
      feature: "Marketplace integrations",
      elitesecom: "Amazon, Flipkart, Meesho, Shopify & more",
      competitor: "Fashion retail & marketplace ops",
    },
    {
      feature: "Ideal seller profile",
      elitesecom: "Marketplace & D2C brands (any category)",
      competitor: "Fashion & apparel brands",
      highlight: true,
    },
    {
      feature: "WMS + OMS",
      elitesecom: "Unified dashboard",
      competitor: "Merchandising + fulfillment suite",
    },
    {
      feature: "ISO-certified security",
      elitesecom: "ISO 27001, 37001, 42001",
      competitor: "Enterprise SaaS security",
    },
  ],
  advantages: [
    "Category-agnostic OMS for any product vertical — not fashion-only",
    "Published GST-inclusive pricing without enterprise merchandising modules",
    "Built-in payment and return reconciliation for Indian marketplaces",
    "Faster onboarding for sellers who need OMS, not assortment planning",
    "Dedicated infrastructure with 99.9% uptime for high order volumes",
  ],
  faqs: [
    {
      q: "Is Elitesecom OMS a good Increff alternative?",
      a: "Yes. Elitesecom OMS suits multichannel sellers who need order management, inventory sync, and reconciliation at published pricing — especially if Increff's fashion merchandising and planning tools exceed your operational needs.",
    },
    {
      q: "When should I choose Increff over Elitesecom OMS?",
      a: "Increff is strong for fashion brands needing assortment planning, markdown optimization, and merchandising analytics. Elitesecom OMS is better when your priority is marketplace order processing, reconciliation, and warehouse operations.",
    },
    {
      q: "Does Elitesecom OMS work for fashion brands?",
      a: "Yes. Elitesecom OMS supports fashion and apparel sellers on Amazon, Flipkart, Myntra, Ajio, and Shopify with inventory sync, returns reconciliation, and WMS workflows.",
    },
  ],
};

export const EVANIK_ALTERNATIVE: AlternativePageConfig = {
  id: "evanik-alternative",
  competitorName: "eVanik",
  heroTitle: "Best eVanik Alternative with",
  heroHighlight: "Unified OMS & WMS",
  heroSubtitle:
    "Compare Elitesecom OMS vs eVanik OWS for multichannel order management, payment reconciliation, and warehouse operations — with published INR pricing and ISO-certified infrastructure.",
  metaAngle: "eVanik alternative",
  rows: [
    {
      feature: "Pricing model",
      elitesecom: "Published INR plans on website",
      competitor: "Tiered plans from ~₹3,333/mo",
      highlight: true,
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Built into every plan",
      competitor: "4-level reconciliation engine",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "Settlement & claim workflows",
    },
    {
      feature: "WMS + OMS",
      elitesecom: "Unified dashboard",
      competitor: "OWS combined platform",
    },
    {
      feature: "Marketplace integrations",
      elitesecom: "Amazon, Flipkart, Meesho, Shopify & more",
      competitor: "50+ marketplace channels",
    },
    {
      feature: "Infrastructure",
      elitesecom: "20+ dedicated AWS servers",
      competitor: "Cloud SaaS",
      highlight: true,
    },
    {
      feature: "Security certifications",
      elitesecom: "ISO 27001, 37001, 42001",
      competitor: "Standard cloud security",
    },
    {
      feature: "Onboarding support",
      elitesecom: "Free onboarding on all plans",
      competitor: "Implementation support available",
    },
  ],
  advantages: [
    "Dedicated AWS infrastructure with 99.9% uptime — not shared multi-tenant hosting",
    "ISO 27001 + AI management (42001) certifications for enterprise trust",
    "Higher Growth plan order limits (50,000 orders) at published pricing",
    "Full WMS pick-pack-ship workflows alongside reconciliation",
    "Transparent GST-inclusive pricing without module upsells",
  ],
  faqs: [
    {
      q: "Is Elitesecom OMS a good eVanik alternative?",
      a: "Yes. Elitesecom OMS matches eVanik's core strengths — marketplace OMS, payment reconciliation, and multichannel sync — with dedicated infrastructure, ISO certifications, and published Growth plan pricing for high-volume sellers.",
    },
    {
      q: "How does Elitesecom OMS reconciliation compare to eVanik?",
      a: "Both platforms offer payment and return reconciliation for Indian marketplaces. Elitesecom includes reconciliation in every plan alongside WMS operations in one unified dashboard.",
    },
    {
      q: "Can I migrate from eVanik to Elitesecom?",
      a: "Yes. Our onboarding team helps reconnect marketplaces, migrate inventory rules, and configure reconciliation workflows with minimal disruption.",
    },
  ],
};

export const OMSGURU_ALTERNATIVE: AlternativePageConfig = {
  id: "omsguru-alternative",
  competitorName: "OMSGuru",
  heroTitle: "Best OMSGuru Alternative for",
  heroHighlight: "Scaling Marketplace Sellers",
  heroSubtitle:
    "Outgrown basic OMSGuru workflows? Elitesecom OMS adds payment reconciliation, return matching, WMS, and higher order limits for fast-growing Indian marketplace brands.",
  metaAngle: "OMSGuru alternative",
  rows: [
    {
      feature: "Pricing model",
      elitesecom: "Published plans up to unlimited orders",
      competitor: "Entry plans from ~₹2,000/mo",
      highlight: true,
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Built into every plan",
      competitor: "Not included",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "Basic returns tracking",
    },
    {
      feature: "WMS + OMS",
      elitesecom: "Unified warehouse dashboard",
      competitor: "Order-focused OMS",
    },
    {
      feature: "Growth ceiling",
      elitesecom: "50,000+ orders on Growth plan",
      competitor: "Best for early-stage SMBs",
      highlight: true,
    },
    {
      feature: "Marketplace integrations",
      elitesecom: "Amazon, Flipkart, Meesho, Shopify & more",
      competitor: "Amazon, Flipkart focus",
    },
    {
      feature: "ISO-certified security",
      elitesecom: "ISO 27001, 37001, 42001",
      competitor: "Standard SaaS",
    },
    {
      feature: "Infrastructure",
      elitesecom: "Dedicated AWS servers",
      competitor: "Shared cloud hosting",
    },
  ],
  advantages: [
    "Payment and return reconciliation included — not available on basic OMSGuru tiers",
    "Scale to 50,000 orders/month without switching platforms",
    "Built-in WMS for pick-pack-ship warehouse operations",
    "ISO-certified security and dedicated infrastructure",
    "Free onboarding assistance on all plans",
  ],
  faqs: [
    {
      q: "Is Elitesecom OMS a good OMSGuru alternative?",
      a: "Yes. Elitesecom OMS is ideal when you've outgrown OMSGuru's basic order sync and need reconciliation, WMS, and higher order volumes at transparent pricing.",
    },
    {
      q: "Does Elitesecom OMS cost more than OMSGuru?",
      a: "Startup plan starts at ₹17,700 for 6,000 orders with reconciliation and WMS included. For sellers processing thousands of orders monthly, the per-order value often beats basic OMS tools plus separate finance spreadsheets.",
    },
    {
      q: "Can I switch from OMSGuru to Elitesecom?",
      a: "Yes. We help migrate marketplace connections and order workflows so your team can continue fulfilling orders without downtime.",
    },
  ],
};

export const ZOHO_INVENTORY_ALTERNATIVE: AlternativePageConfig = {
  id: "zoho-inventory-alternative",
  competitorName: "Zoho Inventory",
  heroTitle: "Zoho Inventory Alternative for",
  heroHighlight: "Marketplace Sellers",
  heroSubtitle:
    "Zoho Inventory works for basic stock tracking — Elitesecom OMS is built for Indian marketplace sellers who need multichannel order management, settlement reconciliation, and warehouse operations.",
  metaAngle: "Zoho Inventory alternative",
  rows: [
    {
      feature: "Primary focus",
      elitesecom: "Marketplace OMS + reconciliation",
      competitor: "Inventory & basic order tracking",
      highlight: true,
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Marketplace settlement matching",
      competitor: "Not built for marketplace recon",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "Manual returns handling",
    },
    {
      feature: "Marketplace integrations",
      elitesecom: "Amazon, Flipkart, Meesho native sync",
      competitor: "Shopify, WooCommerce, limited MP",
    },
    {
      feature: "WMS workflows",
      elitesecom: "Pick-pack-ship built in",
      competitor: "Basic packing/shipping",
    },
    {
      feature: "Pricing model",
      elitesecom: "Flat monthly OMS plans (INR)",
      competitor: "Per-org SaaS tiers",
      highlight: true,
    },
    {
      feature: "Multichannel inventory",
      elitesecom: "Real-time sync across marketplaces",
      competitor: "Channel inventory updates",
    },
    {
      feature: "ISO-certified security",
      elitesecom: "ISO 27001, 37001, 42001",
      competitor: "Zoho cloud security",
    },
  ],
  advantages: [
    "Purpose-built for Amazon, Flipkart, Meesho marketplace operations",
    "Payment reconciliation for marketplace settlements — not just invoicing",
    "WMS workflows for warehouse teams beyond inventory counts",
    "Dedicated infrastructure for high-volume Indian sellers",
    "No Zoho ecosystem lock-in for non-Zoho finance stacks",
  ],
  faqs: [
    {
      q: "Is Elitesecom OMS a good Zoho Inventory alternative?",
      a: "Yes, for marketplace-first sellers. Zoho Inventory suits businesses already on Zoho Books with simple D2C orders. Elitesecom OMS is built for multichannel marketplace operations with reconciliation and WMS.",
    },
    {
      q: "Can I use Elitesecom OMS if I use Zoho Books?",
      a: "Yes. Many sellers run Elitesecom OMS for marketplace operations and export reconciliation reports for their finance team. Our team can discuss integration options during onboarding.",
    },
    {
      q: "Does Elitesecom OMS replace Zoho Inventory entirely?",
      a: "For marketplace-heavy sellers, Elitesecom OMS typically replaces inventory and order tools with a specialized OMS. D2C-only brands on Zoho may keep Zoho for accounting while using Elitesecom for marketplace ops.",
    },
  ],
};

export const ODOO_ALTERNATIVE: AlternativePageConfig = {
  id: "odoo-alternative",
  competitorName: "Odoo",
  heroTitle: "Odoo OMS Alternative for",
  heroHighlight: "Marketplace Operations",
  heroSubtitle:
    "Odoo covers broad ERP workflows — Elitesecom OMS gives marketplace sellers focused order management, payment reconciliation, and WMS without ERP complexity or customization projects.",
  metaAngle: "Odoo OMS alternative",
  rows: [
    {
      feature: "Primary focus",
      elitesecom: "Marketplace OMS + reconciliation",
      competitor: "Full ERP suite (CRM, HR, accounting)",
      highlight: true,
    },
    {
      feature: "Setup complexity",
      elitesecom: "Fast marketplace onboarding",
      competitor: "Modules, customization, partners",
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Built into every plan",
      competitor: "Requires custom modules/workflows",
    },
    {
      feature: "Marketplace integrations",
      elitesecom: "Amazon, Flipkart, Meesho native",
      competitor: "Connector-dependent setup",
    },
    {
      feature: "Pricing model",
      elitesecom: "Published INR OMS plans",
      competitor: "Per-user ERP licensing + hosting",
      highlight: true,
    },
    {
      feature: "WMS + OMS",
      elitesecom: "Unified ecommerce dashboard",
      competitor: "Inventory + Manufacturing modules",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "Manual ERP return workflows",
    },
    {
      feature: "Time to value",
      elitesecom: "Days to weeks",
      competitor: "Weeks to months",
    },
  ],
  advantages: [
    "Marketplace-ready out of the box — no Odoo partner customization required",
    "Built-in payment and return reconciliation for Indian marketplaces",
    "Predictable OMS pricing vs per-user ERP licensing that scales with headcount",
    "Dedicated ecommerce infrastructure — not self-hosted ERP maintenance",
    "Free onboarding support focused on marketplace sellers",
  ],
  faqs: [
    {
      q: "Is Elitesecom OMS a good Odoo alternative for ecommerce?",
      a: "Yes, if your priority is marketplace order management and reconciliation rather than a full ERP. Odoo suits businesses needing CRM, manufacturing, and accounting in one system. Elitesecom OMS specializes in multichannel ecommerce operations.",
    },
    {
      q: "Can Odoo and Elitesecom OMS work together?",
      a: "Some enterprises use Odoo for back-office ERP and a dedicated OMS for marketplace operations. Elitesecom can serve as your ecommerce operations layer while finance stays on Odoo.",
    },
    {
      q: "Why switch from Odoo to Elitesecom OMS?",
      a: "Sellers often switch when Odoo ecommerce modules can't keep up with marketplace reconciliation, return matching, or multichannel inventory sync without expensive customization.",
    },
  ],
};

export const NETSUITE_ALTERNATIVE: AlternativePageConfig = {
  id: "netsuite-alternative",
  competitorName: "NetSuite",
  heroTitle: "NetSuite OMS Alternative for",
  heroHighlight: "Indian Marketplace Brands",
  heroSubtitle:
    "NetSuite powers enterprise ERP — Elitesecom OMS delivers marketplace order management, payment reconciliation, and WMS at a fraction of the cost and implementation time for growing Indian sellers.",
  metaAngle: "NetSuite OMS alternative",
  rows: [
    {
      feature: "Primary focus",
      elitesecom: "Marketplace OMS + reconciliation",
      competitor: "Enterprise ERP & financials",
      highlight: true,
    },
    {
      feature: "Pricing model",
      elitesecom: "Published INR plans from ₹17,700/mo",
      competitor: "Enterprise licensing + implementation",
    },
    {
      feature: "Implementation time",
      elitesecom: "Days to weeks",
      competitor: "Months to quarters",
      highlight: true,
    },
    {
      feature: "Payment reconciliation",
      elitesecom: "Marketplace settlement matching",
      competitor: "ERP financial reconciliation",
    },
    {
      feature: "Marketplace integrations",
      elitesecom: "Amazon, Flipkart, Meesho native",
      competitor: "Custom integration projects",
    },
    {
      feature: "WMS + OMS",
      elitesecom: "Unified ecommerce dashboard",
      competitor: "NetSuite WMS module (add-on)",
    },
    {
      feature: "Return reconciliation",
      elitesecom: "Automated refund matching",
      competitor: "ERP return workflows",
    },
    {
      feature: "Ideal seller profile",
      elitesecom: "1,000 – 50,000+ orders/month",
      competitor: "Large enterprise operations",
    },
  ],
  advantages: [
    "Marketplace-ready OMS without six-figure ERP implementations",
    "Built-in Amazon, Flipkart, Meesho reconciliation — not custom NetSuite scripts",
    "Published pricing vs NetSuite's per-module enterprise licensing",
    "ISO-certified dedicated infrastructure for Indian ecommerce scale",
    "Free onboarding focused on marketplace sellers, not ERP consultants",
  ],
  faqs: [
    {
      q: "Is Elitesecom OMS a good NetSuite alternative?",
      a: "Yes, for marketplace-first brands who need OMS and reconciliation without full ERP scope. NetSuite suits large enterprises needing unified financials, HR, and global ERP. Elitesecom OMS specializes in Indian marketplace operations.",
    },
    {
      q: "Can NetSuite and Elitesecom OMS work together?",
      a: "Enterprise brands sometimes use NetSuite for financials and a dedicated OMS for marketplace order processing. Elitesecom can serve as your ecommerce operations layer with reconciliation reports for finance teams.",
    },
    {
      q: "Why choose Elitesecom over NetSuite for ecommerce?",
      a: "Faster time to value, lower total cost, and purpose-built marketplace reconciliation — without NetSuite partner fees, module licensing, and long implementation cycles.",
    },
  ],
};

export const COMPARISONS_HUB = {
  pageKey: "comparisonsHub",
  path: "/oms-comparisons",
} as const;

export const COMPARISON_CATEGORIES = [
  "Enterprise OMS",
  "SMB OMS",
  "Logistics & Shipping",
  "ERP & Inventory",
  "Vertical Solutions",
] as const;

export type ComparisonCategory = (typeof COMPARISON_CATEGORIES)[number];

export const ALTERNATIVE_PAGE_REGISTRY = [
  {
    pageKey: "unicommerceAlt",
    path: "/unicommerce-alternative",
    category: "Enterprise OMS" as ComparisonCategory,
    teaser: "Published INR pricing vs custom Uniware enterprise quotes.",
    config: UNICOMMERCE_ALTERNATIVE,
  },
  {
    pageKey: "easyecomAlt",
    path: "/easyecom-alternative",
    category: "SMB OMS" as ComparisonCategory,
    teaser: "Transparent INR plans vs USD-based EasyEcom tiers.",
    config: EASYECOM_ALTERNATIVE,
  },
  {
    pageKey: "vinculumAlt",
    path: "/vinculum-alternative",
    category: "Enterprise OMS" as ComparisonCategory,
    teaser: "Flat pricing vs Vinculum Vin eRetail custom contracts.",
    config: VINCULUM_ALTERNATIVE,
  },
  {
    pageKey: "browntapeAlt",
    path: "/browntape-alternative",
    category: "SMB OMS" as ComparisonCategory,
    teaser: "No per-line fees vs Browntape usage-based pricing.",
    config: BROWNTAPE_ALTERNATIVE,
  },
  {
    pageKey: "anchantoAlt",
    path: "/anchanto-alternative",
    category: "Enterprise OMS" as ComparisonCategory,
    teaser: "India-native OMS vs APAC-focused Anchanto SelluSeller.",
    config: ANCHANTO_ALTERNATIVE,
  },
  {
    pageKey: "shiprocketAlt",
    path: "/shiprocket-alternative",
    category: "Logistics & Shipping" as ComparisonCategory,
    teaser: "Full OMS + reconciliation beyond Shiprocket shipping tools.",
    config: SHIPROCKET_ALTERNATIVE,
  },
  {
    pageKey: "increffAlt",
    path: "/increff-alternative",
    category: "Vertical Solutions" as ComparisonCategory,
    teaser: "Category-agnostic OMS vs Increff fashion merchandising.",
    config: INCREFF_ALTERNATIVE,
  },
  {
    pageKey: "evanikAlt",
    path: "/evanik-alternative",
    category: "SMB OMS" as ComparisonCategory,
    teaser: "Dedicated infrastructure vs eVanik shared cloud hosting.",
    config: EVANIK_ALTERNATIVE,
  },
  {
    pageKey: "omsguruAlt",
    path: "/omsguru-alternative",
    category: "SMB OMS" as ComparisonCategory,
    teaser: "Reconciliation + WMS when you've outgrown basic OMSGuru.",
    config: OMSGURU_ALTERNATIVE,
  },
  {
    pageKey: "zohoInventoryAlt",
    path: "/zoho-inventory-alternative",
    category: "ERP & Inventory" as ComparisonCategory,
    teaser: "Marketplace OMS vs Zoho Inventory stock tracking.",
    config: ZOHO_INVENTORY_ALTERNATIVE,
  },
  {
    pageKey: "odooAlt",
    path: "/odoo-alternative",
    category: "ERP & Inventory" as ComparisonCategory,
    teaser: "Focused marketplace OMS vs Odoo ERP customization.",
    config: ODOO_ALTERNATIVE,
  },
  {
    pageKey: "netsuiteAlt",
    path: "/netsuite-alternative",
    category: "ERP & Inventory" as ComparisonCategory,
    teaser: "Fast marketplace OMS vs NetSuite enterprise ERP projects.",
    config: NETSUITE_ALTERNATIVE,
  },
] as const;

export type AlternativePageKey =
  (typeof ALTERNATIVE_PAGE_REGISTRY)[number]["pageKey"];

export function getAlternativeConfigByPageKey(
  page: string,
): AlternativePageConfig | undefined {
  return ALTERNATIVE_PAGE_REGISTRY.find((entry) => entry.pageKey === page)?.config;
}

export function getAlternativePageToPath(): Record<string, string> {
  return Object.fromEntries(
    ALTERNATIVE_PAGE_REGISTRY.map(({ pageKey, path }) => [pageKey, path]),
  );
}

export function getAlternativePathToPage(): Record<string, string> {
  return Object.fromEntries(
    ALTERNATIVE_PAGE_REGISTRY.map(({ pageKey, path }) => [path, pageKey]),
  );
}

export function getAlternativeStaticRoutes(): string[] {
  return ALTERNATIVE_PAGE_REGISTRY.map(({ path }) => path);
}

export function getComparisonsGroupedByCategory(): Record<
  ComparisonCategory,
  (typeof ALTERNATIVE_PAGE_REGISTRY)[number][]
> {
  const grouped = {} as Record<
    ComparisonCategory,
    (typeof ALTERNATIVE_PAGE_REGISTRY)[number][]
  >;

  for (const category of COMPARISON_CATEGORIES) {
    grouped[category] = [];
  }

  for (const entry of ALTERNATIVE_PAGE_REGISTRY) {
    grouped[entry.category].push(entry);
  }

  return grouped;
}
