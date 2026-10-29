import { readFile, writeFile, mkdir, readdir, unlink } from "node:fs/promises";
import { join } from "node:path";
import {
  render,
  getPageMetadata,
  staticPaths,
  siteOrigin,
} from "../dist-ssr/entry-server.js";
const template = await readFile("dist/index.html", "utf8");
const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
for (const path of [...staticPaths, "/404"]) {
  const meta = getPageMetadata(path);
  const tags =
    `<title>${escape(meta.title)}</title><meta name="description" content="${escape(meta.description)}"><meta name="robots" content="${meta.robots}"><link rel="canonical" href="${meta.url}">` +
    Object.entries({
      title: meta.title,
      description: meta.description,
      url: meta.url,
      image: meta.image,
      type: "website",
      site_name: "Triode Studio",
    })
      .map(
        ([key, value]) =>
          `<meta property="og:${key}" content="${escape(value)}">`,
      )
      .join("") +
    Object.entries({
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      image: meta.image,
    })
      .map(
        ([key, value]) =>
          `<meta name="twitter:${key}" content="${escape(value)}">`,
      )
      .join("") +
    `<script id="jsonLd-schema" type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(/</g, "\u003c")}</script>`;
  const html = template
    .replace("<!--page-head-->", tags)
    .replace("<!--app-html-->", render(path));
  const file =
    path === "/"
      ? "dist/index.html"
      : path === "/404"
        ? "dist/404.html"
        : join("dist", path, "index.html");
  await mkdir(join(file, ".."), { recursive: true });
  await writeFile(file, html);
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticPaths.map((path) => `<url><loc>${siteOrigin}${path === "/" ? "/" : path}</loc></url>`).join("")}</urlset>`,
);
await writeFile(
  "dist/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`,
);
console.log(`Prerendered ${staticPaths.length} public pages and a 404 page.`);

for (const file of await readdir("dist/assets/posters"))
  if (/\.(png|jpg)$/i.test(file)) await unlink("dist/assets/posters/" + file);
