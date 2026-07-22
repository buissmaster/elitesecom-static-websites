import {
  createReadStream,
  existsSync,
  mkdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer, { type Page } from "puppeteer";
import { allBlogEntries } from "../src/lib/blogSlugs";
import { staticRoutes } from "../src/lib/routes";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

const routes = [
  ...staticRoutes,
  ...allBlogEntries.map((entry) => `/Blog/${entry.slug}`),
];

const mimeTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};

function resolveDistFile(urlPath: string): string {
  const decoded = decodeURIComponent(urlPath.split("?")[0] ?? "/");
  const normalized = decoded.replace(/\/+$/, "") || "/";

  if (normalized === "/") {
    return path.join(distDir, "index.html");
  }

  const directPath = path.join(distDir, normalized.slice(1));
  if (existsSync(directPath) && statSync(directPath).isFile()) {
    return directPath;
  }

  const nestedIndex = path.join(directPath, "index.html");
  if (existsSync(nestedIndex)) {
    return nestedIndex;
  }

  return path.join(distDir, "index.html");
}

function startPreviewServer(): Promise<{
  server: ReturnType<typeof createServer>;
  port: number;
}> {
  const server = createServer((req, res) => {
    const filePath = resolveDistFile(req.url ?? "/");
    const ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] ?? "application/octet-stream",
    });
    createReadStream(filePath).pipe(res);
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      server.off("error", reject);
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Could not resolve preview server port."));
        return;
      }
      resolve({ server, port: address.port });
    });
  });
}

function outputPathForRoute(route: string): string {
  if (route === "/") {
    return path.join(distDir, "index.html");
  }

  return path.join(distDir, route.slice(1), "index.html");
}

async function prerenderRoute(
  page: Page,
  route: string,
  port: number,
): Promise<void> {
  await page.goto(`http://127.0.0.1:${port}${route}`, {
    waitUntil: "domcontentloaded",
    timeout: 120000,
  });

  await page.waitForFunction(
    () => {
      const description = document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content");
      const title =
        document.title || document.querySelector("title")?.textContent || "";
      return title.length > 0 && !!description;
    },
    { timeout: 60000 },
  );

  const html = await page.content();
  const outputPath = outputPathForRoute(route);
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html, "utf8");
  console.log(`Prerendered ${route} -> ${path.relative(distDir, outputPath)}`);
}

async function main() {
  if (!existsSync(path.join(distDir, "index.html"))) {
    throw new Error("dist/index.html not found. Run vite build first.");
  }

  const { server, port } = await startPreviewServer();
  const browser = await puppeteer.launch({
    headless: true,
    protocolTimeout: 180000,
  });
  const page = await browser.newPage();

  try {
    for (const route of routes) {
      await prerenderRoute(page, route, port);
    }
  } finally {
    await page.close();
    await browser.close();
    server.close();
  }

  console.log(`Prerendered ${routes.length} routes.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
