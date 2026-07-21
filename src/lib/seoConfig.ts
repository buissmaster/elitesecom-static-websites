import type { BlogEntry } from "./blogSlugs";
import {
  BRAND,
  KNOWS_ABOUT_TOPICS,
  SAME_AS_URLS,
} from "./brandProfiles";
import { allFaqItems } from "./faqData";
import {
  COMPARISONS_HUB,
  getAlternativeConfigByPageKey,
} from "./alternativePages";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  getBlogDetailPath,
  getPathForPage,
} from "./routes";

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

/** Primary ranking targets for Elitesecom */
export const PRIMARY_KEYWORDS = [
  "order management system",
  "OMS",
  "ecommerce OMS",
  "order management software",
  "multichannel order management",
  "payment reconciliation",
  "return reconciliation",
  "accounting reconciliation",
  "inventory management system",
  "warehouse management system",
  "WMS",
  "ecommerce order management India",
];

export const HOME_KEYWORDS = PRIMARY_KEYWORDS.join(", ");

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  legalName: BRAND.legalName,
  url: BRAND.website,
  logo: DEFAULT_OG_IMAGE,
  email: BRAND.email,
  telephone: BRAND.phone,
  description:
    "Elitesecom (EliteOMS) is an ecommerce order management system (OMS) with payment reconciliation, return reconciliation, inventory management, and warehouse management for multichannel sellers in India.",
  sameAs: SAME_AS_URLS,
  knowsAbout: [...KNOWS_ABOUT_TOPICS],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BRAND.phone,
    email: BRAND.email,
    contactType: "Customer Support",
    areaServed: ["IN", "Worldwide"],
    availableLanguage: ["English", "Hindi"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${SITE_NAME} OMS`,
  url: SITE_URL,
  description:
    "Order management system (OMS) for ecommerce sellers with reconciliation, inventory, and warehouse management.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `${BRAND.productName} — Order Management System`,
  alternateName: ["Elitesecom OMS", "EliteOMS", "Elitesecom Order Management System"],
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Order Management Software",
  operatingSystem: "Web, iOS, Android",
  url: SITE_URL,
  description:
    "Cloud-based order management system (OMS) for ecommerce businesses. Manage multichannel orders, payment reconciliation, return reconciliation, inventory, and warehouse operations from one dashboard.",
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "11800",
    url: `${SITE_URL}/pricing`,
  },
  featureList: [
    "Multichannel order management",
    "Payment reconciliation",
    "Return reconciliation",
    "Inventory management",
    "Warehouse management system (WMS)",
    "Marketplace integrations",
    "Shipping label generation",
    "Analytics and reporting",
  ],
  provider: {
    "@type": "Organization",
    name: BRAND.name,
    url: SITE_URL,
    sameAs: SAME_AS_URLS,
  },
};

function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}

function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

const pageSeo: Record<
  string,
  Omit<SeoConfig, "canonical"> & { path: string }
> = {
  home: {
    path: "/",
    title:
      "Order Management System (OMS) | Payment & Return Reconciliation | Elitesecom",
    description:
      "Elitesecom is India's leading ecommerce order management system (OMS). Manage multichannel orders, payment reconciliation, return reconciliation, inventory & warehouse operations from one dashboard.",
    keywords: HOME_KEYWORDS,
  },
  services: {
    path: "/ourservices",
    title:
      "OMS Features | Order Management, Reconciliation, Inventory & WMS",
    description:
      "Explore Elitesecom OMS features: multichannel order management, payment reconciliation, return reconciliation, inventory management, warehouse management (WMS), and shipping label automation.",
    keywords:
      "OMS features, order management system features, payment reconciliation software, return reconciliation, inventory management, warehouse management system, WMS, Elitesecom",
  },
  integration: {
    path: "/integration",
    title:
      "OMS Marketplace Integrations | Amazon, Flipkart, Shopify Order Sync",
    description:
      "Connect your order management system to Amazon, Flipkart, Meesho, Shopify, Myntra & 20+ channels. Real-time order sync, inventory reconciliation, and multichannel OMS dashboard.",
    keywords:
      "OMS integrations, marketplace order management, Amazon OMS, Flipkart order management, Shopify OMS integration, multichannel order sync, inventory reconciliation",
  },
  customers: {
    path: "/customer",
    title:
      "OMS Customer Success | Ecommerce Order Management Case Studies",
    description:
      "See how 2500+ sellers use Elitesecom OMS for order management, payment reconciliation, and multichannel operations across Amazon, Flipkart, and D2C stores.",
    keywords:
      "OMS customers, order management system reviews, ecommerce reconciliation software, multichannel seller OMS, Elitesecom clients",
  },
  about: {
    path: "/aboutus",
    title:
      "About Elitesecom | Ecommerce Order Management System (OMS) Company",
    description:
      "Elitesecom builds India's trusted order management system (OMS) for ecommerce sellers — with ISO-certified security, reconciliation automation, and multichannel operations support.",
    keywords:
      "about Elitesecom, OMS company India, order management system provider, ecommerce operations platform",
  },
  faqs: {
    path: "/faqs",
    title:
      "OMS FAQs | Order Management System & Reconciliation Questions",
    description:
      "Answers about Elitesecom order management system (OMS), payment reconciliation, return reconciliation, inventory sync, warehouse management, pricing, and integrations.",
    keywords:
      "OMS FAQ, order management system questions, payment reconciliation FAQ, return reconciliation, what is OMS, Elitesecom support",
  },
  blog: {
    path: "/Blog",
    title:
      "OMS & Ecommerce Operations Blog | Order Management & Reconciliation Guides",
    description:
      "Expert guides on order management systems, payment reconciliation, return reconciliation, inventory, warehouse management, and scaling multichannel ecommerce.",
    keywords:
      "OMS blog, order management guides, payment reconciliation tips, return reconciliation ecommerce, inventory management articles",
  },
  pricing: {
    path: "/pricing",
    title:
      "OMS Pricing | Order Management System Plans & Reconciliation Software",
    description:
      "Affordable order management system (OMS) pricing for startups to enterprises. Plans include multichannel orders, payment reconciliation, return reconciliation, and WMS.",
    keywords:
      "OMS pricing, order management system cost, reconciliation software pricing, ecommerce OMS plans, Elitesecom pricing India",
  },
  contact: {
    path: "/contactus",
    title: "Contact Elitesecom OMS | Order Management System Sales & Support",
    description:
      "Contact Elitesecom for OMS demos, order management support, reconciliation setup, and sales. Email contact@elitesecom.ai or call +91 94038 93414.",
    keywords:
      "contact OMS provider, order management system demo, Elitesecom sales, reconciliation software support",
  },
  demo: {
    path: "/requestdemo",
    title:
      "Request OMS Demo | Order Management System & Reconciliation Walkthrough",
    description:
      "Book a free demo of Elitesecom order management system (OMS). See multichannel order processing, payment reconciliation, return reconciliation, and WMS in action.",
    keywords:
      "OMS demo, order management system demo, reconciliation software demo, free OMS trial, Elitesecom demo",
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions | Elitesecom Order Management System",
    description:
      "Terms and conditions for using Elitesecom order management system (OMS) and ecommerce operations platform.",
    keywords: "Elitesecom terms, OMS terms of service",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy | Elitesecom OMS Platform",
    description:
      "Privacy policy for Elitesecom order management system (OMS) — how we protect your order, inventory, and reconciliation data.",
    keywords: "Elitesecom privacy, OMS data privacy",
  },
  refund: {
    path: "/RefundPolicy",
    title: "Refund Policy | Elitesecom OMS Subscription",
    description:
      "Refund policy for Elitesecom order management system (OMS) subscription plans.",
    keywords: "Elitesecom refund policy, OMS subscription refund",
  },
  team: {
    path: "/team",
    title: "Our Team | Elitesecom OMS & Ecommerce Operations Experts",
    description:
      "Meet the team behind Elitesecom — India's order management system (OMS) for multichannel order processing and reconciliation.",
    keywords: "Elitesecom team, OMS experts, ecommerce operations team",
  },
  unicommerceAlt: {
    path: "/unicommerce-alternative",
    title:
      "Best Unicommerce Alternative 2026 | Elitesecom OMS & Reconciliation",
    description:
      "Compare Elitesecom OMS vs Unicommerce. Transparent INR pricing, built-in payment & return reconciliation, multichannel OMS and WMS for Indian marketplace sellers.",
    keywords:
      "Unicommerce alternative, Unicommerce vs Elitesecom OMS, OMS India, payment reconciliation, UniReco alternative, ecommerce OMS",
  },
  easyecomAlt: {
    path: "/easyecom-alternative",
    title:
      "Best EasyEcom Alternative 2026 | Elitesecom OMS with INR Pricing",
    description:
      "Compare Elitesecom OMS vs EasyEcom for order management, payment reconciliation, and WMS. Transparent GST-inclusive pricing for Indian ecommerce sellers.",
    keywords:
      "EasyEcom alternative, EasyEcom vs Elitesecom OMS, OMS comparison, EasyReco alternative, reconciliation software India",
  },
  vinculumAlt: {
    path: "/vinculum-alternative",
    title:
      "Best Vinculum Alternative 2026 | Elitesecom OMS & Reconciliation",
    description:
      "Compare Elitesecom OMS vs Vinculum Vin eRetail. Published INR pricing, built-in payment reconciliation, and multichannel OMS for Indian marketplace sellers.",
    keywords:
      "Vinculum alternative, Vinculum vs Elitesecom OMS, Vin OMS alternative, payment reconciliation, ecommerce OMS India",
  },
  browntapeAlt: {
    path: "/browntape-alternative",
    title:
      "Best Browntape Alternative 2026 | Ginesys OMS vs Elitesecom OMS",
    description:
      "Compare Elitesecom OMS vs Browntape (Ginesys OMS). Flat INR pricing, built-in reconciliation, and higher order limits for Indian marketplace sellers.",
    keywords:
      "Browntape alternative, Ginesys OMS alternative, Browntape vs Elitesecom OMS, multichannel OMS India",
  },
  anchantoAlt: {
    path: "/anchanto-alternative",
    title:
      "Best Anchanto Alternative 2026 | Elitesecom OMS for India Sellers",
    description:
      "Compare Elitesecom OMS vs Anchanto SelluSeller. India-native OMS with published pricing, payment reconciliation, and WMS for marketplace sellers.",
    keywords:
      "Anchanto alternative, SelluSeller alternative, Anchanto vs Elitesecom OMS, OMS India, multichannel order management",
  },
  shiprocketAlt: {
    path: "/shiprocket-alternative",
    title:
      "Shiprocket OMS Alternative 2026 | Full Elitesecom OMS Platform",
    description:
      "Outgrown Shiprocket logistics? Elitesecom OMS adds inventory sync, marketplace reconciliation, and WMS — beyond shipping aggregation.",
    keywords:
      "Shiprocket OMS alternative, Shiprocket vs Elitesecom OMS, full OMS India, payment reconciliation, warehouse management",
  },
  increffAlt: {
    path: "/increff-alternative",
    title:
      "Best Increff Alternative 2026 | Elitesecom OMS for Multichannel Sellers",
    description:
      "Compare Elitesecom OMS vs Increff. Transparent pricing for marketplace and D2C brands who need OMS and reconciliation without fashion merchandising modules.",
    keywords:
      "Increff alternative, Increff vs Elitesecom OMS, OMS India, marketplace order management, payment reconciliation",
  },
  comparisonsHub: {
    path: COMPARISONS_HUB.path,
    title:
      "OMS Comparisons 2026 | Elitesecom vs Unicommerce, EasyEcom & 10+ Platforms",
    description:
      "Compare Elitesecom OMS with Unicommerce, EasyEcom, Vinculum, Browntape, Shiprocket, eVanik, Zoho, Odoo, NetSuite, and more. Side-by-side pricing, reconciliation, and WMS.",
    keywords:
      "OMS comparison India, Unicommerce vs Elitesecom, EasyEcom alternative, order management system comparison, ecommerce OMS India",
  },
  evanikAlt: {
    path: "/evanik-alternative",
    title: "Best eVanik Alternative 2026 | Elitesecom OMS & Reconciliation",
    description:
      "Compare Elitesecom OMS vs eVanik OWS. Dedicated infrastructure, ISO certifications, and published INR pricing with built-in payment reconciliation.",
    keywords:
      "eVanik alternative, eVanik vs Elitesecom OMS, OMS reconciliation India, marketplace order management",
  },
  omsguruAlt: {
    path: "/omsguru-alternative",
    title: "Best OMSGuru Alternative 2026 | Elitesecom OMS with Reconciliation",
    description:
      "Outgrown OMSGuru? Elitesecom OMS adds payment reconciliation, WMS, and 50,000-order Growth plans for scaling marketplace sellers.",
    keywords:
      "OMSGuru alternative, OMSGuru vs Elitesecom OMS, SMB OMS India, payment reconciliation",
  },
  zohoInventoryAlt: {
    path: "/zoho-inventory-alternative",
    title:
      "Zoho Inventory Alternative 2026 | Marketplace OMS | Elitesecom",
    description:
      "Compare Elitesecom OMS vs Zoho Inventory for Amazon, Flipkart, and Meesho sellers. Marketplace reconciliation and WMS beyond basic inventory tracking.",
    keywords:
      "Zoho Inventory alternative, Zoho vs Elitesecom OMS, marketplace OMS India, multichannel inventory",
  },
  odooAlt: {
    path: "/odoo-alternative",
    title: "Odoo OMS Alternative 2026 | Elitesecom Marketplace Operations",
    description:
      "Compare Elitesecom OMS vs Odoo for ecommerce. Focused marketplace OMS and reconciliation without ERP customization projects.",
    keywords:
      "Odoo OMS alternative, Odoo vs Elitesecom OMS, marketplace order management, ERP alternative India",
  },
  netsuiteAlt: {
    path: "/netsuite-alternative",
    title:
      "NetSuite OMS Alternative 2026 | Elitesecom for Marketplace Brands",
    description:
      "Compare Elitesecom OMS vs NetSuite ERP. Fast marketplace onboarding, built-in reconciliation, and published pricing for Indian ecommerce sellers.",
    keywords:
      "NetSuite OMS alternative, NetSuite vs Elitesecom OMS, enterprise ERP alternative, marketplace OMS India",
  },
};

function getFaqSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

function getArticleSchema(blog: BlogEntry): Record<string, unknown> {
  const articleUrl = absoluteUrl(getBlogDetailPath(blog.slug));
  const imageUrl = blog.image.startsWith("http")
    ? blog.image
    : `${SITE_URL}${blog.image.startsWith("/") ? blog.image : `/${blog.image}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.subtitle,
    image: imageUrl,
    datePublished: blog.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
}

function getPageJsonLd(page: string): Record<string, unknown>[] {
  const jsonLd: Record<string, unknown>[] = [organizationSchema];

  if (page === "home") {
    jsonLd.push(websiteSchema, softwareApplicationSchema);
    return jsonLd;
  }

  const config = pageSeo[page] ?? pageSeo.home;
  const alternativeConfig = getAlternativeConfigByPageKey(page);

  const breadcrumbs: { name: string; path: string }[] = alternativeConfig
    ? [
        { name: "Home", path: "/" },
        { name: "OMS Comparisons", path: COMPARISONS_HUB.path },
        {
          name: alternativeConfig.metaAngle.replace(/^./, (c) => c.toUpperCase()),
          path: config.path,
        },
      ]
    : [
        { name: "Home", path: "/" },
        {
          name: config.title.split("|")[0]?.trim() ?? page,
          path: config.path,
        },
      ];
  jsonLd.push(breadcrumbSchema(breadcrumbs));

  if (["services", "pricing", "demo", "comparisonsHub"].includes(page)) {
    jsonLd.push(softwareApplicationSchema);
  }

  if (page === "faqs") {
    jsonLd.push(getFaqSchema());
  }

  return jsonLd;
}

export function getSeoConfig(
  page: string,
  blogEntry?: BlogEntry | null,
): SeoConfig {
  if (page === "blogdetail" && blogEntry) {
    const path = getBlogDetailPath(blogEntry.slug);
    return {
      title: `${blogEntry.title} | OMS & Ecommerce Blog | Elitesecom`,
      description: blogEntry.subtitle,
      keywords:
        "OMS, order management, ecommerce operations, reconciliation, inventory management, Elitesecom blog",
      canonical: absoluteUrl(path),
      ogImage: blogEntry.image.startsWith("http")
        ? blogEntry.image
        : `${SITE_URL}${blogEntry.image.startsWith("/") ? blogEntry.image : `/${blogEntry.image}`}`,
      jsonLd: [
        organizationSchema,
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/Blog" },
          { name: blogEntry.title, path },
        ]),
        getArticleSchema(blogEntry),
      ],
    };
  }

  const config = pageSeo[page] ?? pageSeo.home;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    canonical: absoluteUrl(config.path),
    ogImage: DEFAULT_OG_IMAGE,
    jsonLd: getPageJsonLd(page),
  };
}

export function getAllPrerenderPaths(): string[] {
  return Object.values(pageSeo).map((page) => page.path);
}

export { getPathForPage };
