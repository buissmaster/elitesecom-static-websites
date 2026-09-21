import { useEffect } from "react";
import type { BlogEntry } from "@/lib/blogSlugs";
import { getSeoConfig } from "@/lib/seoConfig";

const MANAGED_SELECTOR = '[data-seo-managed="true"]';

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string,
) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`,
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.setAttribute("data-seo-managed", "true");
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  const [element, ...duplicates] = Array.from(
    document.head.querySelectorAll('link[rel="canonical"]'),
  ) as HTMLLinkElement[];

  duplicates.forEach((duplicate) => duplicate.remove());

  let canonical = element;

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("data-seo-managed", "true");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
}

function upsertJsonLd(jsonLd: Record<string, unknown> | Record<string, unknown>[]) {
  document
    .querySelectorAll('script[type="application/ld+json"][data-seo-managed="true"]')
    .forEach((node) => node.remove());

  const payloads = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  payloads.forEach((payload) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-managed", "true");
    script.textContent = JSON.stringify(payload);
    document.head.appendChild(script);
  });
}

interface SeoHeadProps {
  page: string;
  blogEntry?: BlogEntry | null;
  heroImagePreload?: {
    href: string;
    imagesrcset: string;
    imagesizes: string;
  } | null;
}

export function SeoHead({ page, blogEntry, heroImagePreload }: SeoHeadProps) {
  useEffect(() => {
    const seo = getSeoConfig(page, blogEntry);

    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:type", page === "blogdetail" ? "article" : "website");
    upsertMeta("property", "og:url", seo.canonical);
    upsertMeta("property", "og:image", seo.ogImage ?? seo.canonical);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", seo.ogImage ?? seo.canonical);
    upsertCanonical(seo.canonical);

    if (heroImagePreload) {
      upsertImagePreload(
        heroImagePreload.href,
        heroImagePreload.imagesrcset,
        heroImagePreload.imagesizes,
      );
    }

    if (seo.noindex) {
      upsertMeta("name", "robots", "noindex, nofollow");
    } else {
      const robots = document.head.querySelector('meta[name="robots"]');
      if (robots?.getAttribute("data-seo-managed") === "true") {
        robots.remove();
      }
    }

    if (seo.jsonLd) {
      upsertJsonLd(seo.jsonLd);
    }

    document.dispatchEvent(new Event("render-event"));
  }, [page, blogEntry, heroImagePreload]);

  return null;
}

export function cleanupManagedSeoTags() {
  document.querySelectorAll(MANAGED_SELECTOR).forEach((node) => node.remove());
}

export function upsertImagePreload(
  href: string,
  imagesrcset: string,
  imagesizes: string,
) {
  let element = document.head.querySelector(
    `link[rel="preload"][as="image"][href="${href}"]`,
  ) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "preload");
    element.setAttribute("as", "image");
    element.setAttribute("href", href);
    element.setAttribute("data-seo-managed", "true");
    document.head.appendChild(element);
  }

  element.setAttribute("imagesrcset", imagesrcset);
  element.setAttribute("imagesizes", imagesizes);
}
