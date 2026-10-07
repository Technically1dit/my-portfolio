import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, ".output", "public");
const serverEntryPath = path.join(rootDir, ".output", "server", "index.mjs");

const routes = [
  "/",
  "/about",
  "/projects",
  "/achievements",
  "/contact",
];

async function main() {
  console.log("Starting static HTML export for GitHub Pages...");

  // 1. Ensure dist directory exists
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
  fs.mkdirSync(outputDir, { recursive: true });

  // 2. Copy all public assets (.output/public -> dist)
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, outputDir, { recursive: true });
    console.log("✓ Copied static assets from .output/public to dist");
  }

  // 3. Create .nojekyll for GitHub Pages
  fs.writeFileSync(path.join(outputDir, ".nojekyll"), "");
  console.log("✓ Created .nojekyll");

  // 4. Import the compiled server entry to render each route
  const serverModule = await import(`file://${serverEntryPath.replace(/\\/g, "/")}`);
  const handler = serverModule.default?.fetch ? serverModule.default : serverModule;

  for (const route of routes) {
    const url = `https://vandit.portfolio${route}`;
    const req = new Request(url, {
      headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml",
        "User-Agent": "Mozilla/5.0 (StaticPrerender)",
      },
    });

    try {
      const mockEnv = {};
      const mockCtx = {
        waitUntil: () => {},
        passThroughOnException: () => {},
      };
      const res = await handler.fetch(req, mockEnv, mockCtx);
      const html = await res.text();

      let targetFile;
      if (route === "/") {
        targetFile = path.join(outputDir, "index.html");
      } else {
        const routeDir = path.join(outputDir, route.replace(/^\//, ""));
        fs.mkdirSync(routeDir, { recursive: true });
        targetFile = path.join(routeDir, "index.html");
      }

      fs.writeFileSync(targetFile, html, "utf-8");
      console.log(`✓ Rendered route: ${route} -> ${path.relative(rootDir, targetFile)}`);

      // If root, also make it 404.html for GitHub Pages SPA fallback
      if (route === "/") {
        fs.writeFileSync(path.join(outputDir, "404.html"), html, "utf-8");
        console.log("✓ Created 404.html fallback for GitHub Pages");
      }
    } catch (err) {
      console.error(`✗ Error rendering route ${route}:`, err);
    }
  }

  console.log("\n✨ Static export completed successfully! Output directory: dist/");
}

main().catch((err) => {
  console.error("Fatal prerender error:", err);
  process.exit(1);
});
