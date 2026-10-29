import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { getPageMetadata, staticPaths } from "../dist-ssr/entry-server.js";
import { getEmailConfig, buildEnquiryParams } from "../src/lib/enquiry.js";
test("every public page has visible static content, canonical metadata, and truthful schema", async () => {
  const titles = new Set();
  for (const path of staticPaths) {
    const html = await readFile(
      `dist${path === "/" ? "" : path}/index.html`,
      "utf8",
    );
    assert.match(html, /<h1[ >]/);
    assert.match(
      html,
      /<link rel="canonical" href="https:\/\/triodestudio.vercel.app/,
    );
    assert.match(
      html,
      /<meta property="og:image" content="https:\/\/triodestudio.vercel.app\/social-card.png"/,
    );
    assert.doesNotMatch(
      html,
      /TODO:|your_service_id|60%|45%|10,000\+|style="opacity:0/,
    );
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    assert.ok(!titles.has(title), `Duplicate title ${title}`);
    titles.add(title);
    const schema = JSON.parse(
      html.match(
        /id="jsonLd-schema" type="application\/ld\+json">(.*?)<\/script>/,
      )[1],
    );
    assert.equal(schema["@graph"][0].name, "Triode Studio");
    const sitemap = await readFile("dist/sitemap.xml", "utf8");
    assert.ok(sitemap.includes(getPageMetadata(path).url));
  }
});
test("internal links point to generated pages or real assets", async () => {
  for (const path of staticPaths) {
    const html = await readFile(
      `dist${path === "/" ? "" : path}/index.html`,
      "utf8",
    );
    for (const match of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
      const target = decodeURIComponent(match[1]);
      if (target.startsWith("/assets/") || /\.[a-z]+$/i.test(target)) {
        await stat("dist" + target);
        continue;
      }
      assert.ok(
        staticPaths.includes(target),
        `${path} links to missing ${target}`,
      );
    }
  }
});
test("missing or placeholder EmailJS configuration never enables delivery", () => {
  assert.equal(getEmailConfig({}), null);
  assert.equal(
    getEmailConfig({
      VITE_EMAILJS_SERVICE_ID: "your_service_id",
      VITE_EMAILJS_TEMPLATE_ID: "template",
      VITE_EMAILJS_PUBLIC_KEY: "key",
    }),
    null,
  );
  assert.deepEqual(
    getEmailConfig({
      VITE_EMAILJS_SERVICE_ID: "service",
      VITE_EMAILJS_TEMPLATE_ID: "template",
      VITE_EMAILJS_PUBLIC_KEY: "key",
    }),
    { serviceId: "service", templateId: "template", publicKey: "key" },
  );
});
test("enquiries map only intended fields and preserve service choices", () => {
  const result = buildEnquiryParams(
    {
      businessName: " Studio ",
      name: " Name ",
      email: " name@example.com ",
      phone: "",
      budget: "Not sure yet",
      timeline: "Flexible",
      description: " A poster campaign ",
      website: "ignore",
    },
    ["Posters & Graphics", "AI Video Production"],
  );
  assert.equal(result.message, "A poster campaign");
  assert.equal(result.from_email, "name@example.com");
  assert.equal(result.project_type, "Posters & Graphics, AI Video Production");
  assert.ok(!("website" in result));
});
test("not-found HTML is not indexable", async () => {
  assert.match(await readFile("dist/404.html", "utf8"), /noindex, follow/);
});
