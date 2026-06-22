import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
const resp = await page.goto(
  "http://localhost:5175/#blog/why-sellers-lose-orders-during-sale-events",
  { waitUntil: "domcontentloaded", timeout: 30000 },
);
console.log("status", resp?.status());
await page.waitForTimeout(2000);

const before = await page.evaluate(() => {
  const toc = document.querySelector("aside h3")?.closest("div");
  const aside = document.querySelector("aside");
  const blockers = [];
  let el = toc?.parentElement;
  while (el) {
    const cs = getComputedStyle(el);
    if (
      ["hidden", "auto", "scroll", "clip"].includes(cs.overflow) ||
      ["hidden", "auto", "scroll", "clip"].includes(cs.overflowY)
    ) {
      blockers.push({
        tag: el.tagName,
        class: el.className.slice(0, 100),
        overflow: cs.overflow,
        overflowY: cs.overflowY,
      });
    }
    el = el.parentElement;
  }
  return {
    tocTop: toc?.getBoundingClientRect().top,
    position: toc ? getComputedStyle(toc).position : null,
    asideHeight: aside?.getBoundingClientRect().height,
    asideAlignSelf: aside ? getComputedStyle(aside).alignSelf : null,
    blockers,
  };
});

await page.evaluate(() => window.scrollTo(0, 800));
await page.waitForTimeout(300);

const after = await page.evaluate(() => {
  const toc = document.querySelector("aside h3")?.closest("div");
  return {
    scrollY: window.scrollY,
    tocTop: toc?.getBoundingClientRect().top,
    position: toc ? getComputedStyle(toc).position : null,
  };
});

console.log(JSON.stringify({ before, after }, null, 2));
await browser.close();
