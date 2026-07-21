import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { allBlogEntries } from "../src/lib/blogSlugs";
import { SITE_URL, staticRoutes } from "../src/lib/routes";

const lastmod = new Date().toISOString();
const publicDir = resolve(process.cwd(), "public");

function xmlEscape(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function urlEntry(path: string, priority = "0.8", changefreq = "weekly"): string {
  const loc =
    path === "/"
      ? `${SITE_URL}/`
      : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return [
    "  <url>",
    `    <loc>${xmlEscape(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

const blogRoutes = allBlogEntries.map((entry) => `/Blog/${entry.slug}`);

const urls = [
  ...staticRoutes.map((route) =>
    urlEntry(route, route === "/" ? "1.0" : "0.8"),
  ),
  ...blogRoutes.map((route) => urlEntry(route, "0.7", "monthly")),
];

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  "</urlset>",
  "",
].join("\n");

const sitemapIndex = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  `  <sitemap><loc>${SITE_URL}/sitemap-0.xml</loc><lastmod>${lastmod}</lastmod></sitemap>`,
  "</sitemapindex>",
  "",
].join("\n");

writeFileSync(resolve(publicDir, "sitemap-0.xml"), sitemap, "utf8");
writeFileSync(resolve(publicDir, "sitemap.xml"), sitemapIndex, "utf8");

console.log(
  `Generated sitemap with ${staticRoutes.length} static routes and ${blogRoutes.length} blog posts.`,
);
