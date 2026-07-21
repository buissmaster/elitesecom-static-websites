/** Central route map — keep URLs unchanged for production SEO. */
import {
  COMPARISONS_HUB,
  getAlternativePageToPath,
  getAlternativePathToPage,
  getAlternativeStaticRoutes,
} from "./alternativePages";

export const SITE_URL = "https://www.elitesecom.ai";
export const SITE_NAME = "Elitesecom";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/Logo/oms.png`;

const alternativePageToPath = getAlternativePageToPath();
const alternativePathToPage = getAlternativePathToPage();

export const pageToPath: Record<string, string> = {
  home: "/",
  services: "/ourservices",
  integration: "/integration",
  customers: "/customer",
  about: "/aboutus",
  faqs: "/faqs",
  blog: "/Blog",
  blogdetail: "/Blog",
  pricing: "/pricing",
  contact: "/contactus",
  demo: "/requestdemo",
  terms: "/terms",
  privacy: "/privacy",
  refund: "/RefundPolicy",
  team: "/team",
  [COMPARISONS_HUB.pageKey]: COMPARISONS_HUB.path,
  ...alternativePageToPath,
};

export const pathToPage: Record<string, string> = {
  "/": "home",
  "/ourservices": "services",
  "/integration": "integration",
  "/customer": "customers",
  "/aboutus": "about",
  "/faqs": "faqs",
  "/Blog": "blog",
  "/pricing": "pricing",
  "/contactus": "contact",
  "/requestdemo": "demo",
  "/terms": "terms",
  "/privacy": "privacy",
  "/RefundPolicy": "refund",
  "/team": "team",
  [COMPARISONS_HUB.path]: COMPARISONS_HUB.pageKey,
  ...alternativePathToPage,
};

export function getPathForPage(page: string): string {
  return pageToPath[page] ?? "/";
}

export function getPageFromPath(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, "") || "/";

  if (normalized.startsWith("/Blog/") && normalized.length > "/Blog/".length) {
    return "blogdetail";
  }

  return pathToPage[normalized] ?? "home";
}

export function getBlogSlugFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/Blog\/([^/]+)/i);
  return match?.[1] ?? null;
}

export function getBlogDetailPath(slug: string): string {
  return `/Blog/${slug}`;
}

/** All static routes used for sitemap + prerender. */
export const staticRoutes: string[] = [
  "/",
  "/ourservices",
  "/integration",
  "/customer",
  "/aboutus",
  "/faqs",
  "/Blog",
  "/pricing",
  "/contactus",
  "/requestdemo",
  "/terms",
  "/privacy",
  "/RefundPolicy",
  "/team",
  COMPARISONS_HUB.path,
  ...getAlternativeStaticRoutes(),
];
