import type { BlogEntry } from "./blogSlugs";
import {
  BRAND,
  KNOWS_ABOUT_TOPICS,
  SAME_AS_URLS,
} from "./brandProfiles";
import { allFaqItems } from "./faqData";

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
 
  team: {
    path: "/team",
    title: "Our Team | Elitesecom OMS & Ecommerce Operations Experts",
    description:
      "Meet the team behind Elitesecom — India's order management system (OMS) for multichannel order processing and reconciliation.",
    keywords: "Elitesecom team, OMS experts, ecommerce operations team",
  },
  security: {
    path: "/security",
    title: "Security & Compliance | SOC 2, ISO 27001 | EliteSecom",
    description:
      "Learn about EliteSecom's security and compliance practices, including SOC 2 Type II, ISO/IEC 27001:2022, VAPT, Amazon SP-API data protection and privacy.",
    keywords:
      "EliteSecom security, SOC 2 Type II, ISO 27001, VAPT, Amazon SP-API security, data protection, compliance",
  },
  "amazon-sp-api-security": {
    path: "/amazon-sp-api-security",
    title: "Amazon SP-API Security & Data Protection | Elitesecom",
    description:
      "Learn how Elitesecom protects and handles Amazon SP-API data, including Amazon PII, storage, transmission, access controls, retention, and deletion.",
    keywords:
      "Amazon SP-API security, Amazon data protection, Amazon PII, data retention, data deletion, access control, Elitesecom",
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

function toIsoDate(value: string): string | undefined {
  const isoMatch = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (isoMatch) {
    const [, yearText, monthText, dayText] = isoMatch;
    const year = Number(yearText);
    const month = Number(monthText);
    const day = Number(dayText);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year &&
      date.getUTCMonth() === month - 1 &&
      date.getUTCDate() === day
      ? value.trim()
      : undefined;
  }

  const displayMatch = /^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/.exec(
    value.trim(),
  );
  if (!displayMatch) return undefined;

  const [, monthText, dayText, yearText] = displayMatch;
  const monthNames = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december",
  ];
  const month = monthNames.indexOf(monthText.toLowerCase());
  const year = Number(yearText);
  const day = Number(dayText);
  if (month < 0) return undefined;

  const date = new Date(Date.UTC(year, month, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month ||
    date.getUTCDate() !== day
  ) {
    return undefined;
  }

  return date.toISOString().slice(0, 10);
}

function getArticleSchema(blog: BlogEntry): Record<string, unknown> {
  const articleUrl = absoluteUrl(getBlogDetailPath(blog.slug));
  const imagePath = blog.image?.trim();
  const imageUrl = imagePath
    ? new URL(imagePath, `${SITE_URL}/`).href
    : DEFAULT_OG_IMAGE;
  const datePublished = toIsoDate(blog.date);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.subtitle,
    image: imageUrl,
    ...(datePublished ? { datePublished } : {}),
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/elitesecom-full-black-logo.webp`,
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

  const breadcrumbs: { name: string; path: string }[] = [
    { name: "Home", path: "/" },
    {
      name: config.title.split("|")[0]?.trim() ?? page,
      path: config.path,
    },
  ];
  jsonLd.push(breadcrumbSchema(breadcrumbs));

  if (["services", "pricing", "demo"].includes(page)) {
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
