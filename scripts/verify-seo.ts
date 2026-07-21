import puppeteer from "puppeteer";

const BASE_URL = process.env.SEO_BASE_URL ?? "http://127.0.0.1:4173";

const checks: { path: string; expectedTitleIncludes: string; expectedCanonical: string }[] =
  [
    {
      path: "/",
      expectedTitleIncludes: "Order Management System",
      expectedCanonical: "https://www.elitesecom.ai/",
    },
    {
      path: "/aboutus",
      expectedTitleIncludes: "Order Management System",
      expectedCanonical: "https://www.elitesecom.ai/aboutus",
    },
    {
      path: "/contactus",
      expectedTitleIncludes: "OMS",
      expectedCanonical: "https://www.elitesecom.ai/contactus",
    },
    {
      path: "/pricing",
      expectedTitleIncludes: "OMS Pricing",
      expectedCanonical: "https://www.elitesecom.ai/pricing",
    },
    {
      path: "/faqs",
      expectedTitleIncludes: "OMS FAQs",
      expectedCanonical: "https://www.elitesecom.ai/faqs",
    },
    {
      path: "/ourservices",
      expectedTitleIncludes: "OMS Features",
      expectedCanonical: "https://www.elitesecom.ai/ourservices",
    },
    {
      path: "/Blog",
      expectedTitleIncludes: "Blog",
      expectedCanonical: "https://www.elitesecom.ai/Blog",
    },
  ];

async function verifyRoute(
  page: import("puppeteer").Page,
  check: (typeof checks)[number],
) {
  await page.goto(`${BASE_URL}${check.path}`, {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await page.waitForFunction(() => document.title.length > 0, {
    timeout: 15000,
  });

  const result = await page.evaluate(() => ({
    title: document.title,
    description:
      document.querySelector('meta[name="description"]')?.getAttribute("content") ??
      "",
    canonical:
      document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? "",
    internalLinks: Array.from(document.querySelectorAll("a[href^='/']")).length,
    faqSchema: Array.from(
      document.querySelectorAll('script[type="application/ld+json"]'),
    ).some((node) => node.textContent?.includes('"FAQPage"')),
    articleSchema: Array.from(
      document.querySelectorAll('script[type="application/ld+json"]'),
    ).some((node) => node.textContent?.includes('"Article"')),
  }));

  const failures: string[] = [];

  if (!result.title.includes(check.expectedTitleIncludes)) {
    failures.push(
      `title "${result.title}" missing "${check.expectedTitleIncludes}"`,
    );
  }

  if (result.canonical !== check.expectedCanonical) {
    failures.push(
      `canonical "${result.canonical}" !== "${check.expectedCanonical}"`,
    );
  }

  if (!result.description) {
    failures.push("missing meta description");
  }

  if (result.internalLinks < 5) {
    failures.push(`only ${result.internalLinks} internal anchor links found`);
  }

  if (check.path === "/faqs" && !result.faqSchema) {
    failures.push("missing FAQPage JSON-LD");
  }

  return { path: check.path, failures, result };
}

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 180000,
  });
  const page = await browser.newPage();
  const results = [];

  try {
    for (const check of checks) {
      results.push(await verifyRoute(page, check));
    }
  } finally {
    await page.close();
    await browser.close();
  }

  let failed = 0;

  for (const entry of results) {
    if (entry.failures.length === 0) {
      console.log(`PASS ${entry.path}`);
      continue;
    }

    failed += 1;
    console.log(`FAIL ${entry.path}`);
    entry.failures.forEach((failure) => console.log(`  - ${failure}`));
  }

  if (failed > 0) {
    process.exitCode = 1;
    return;
  }

  console.log("All SEO verification checks passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
