import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("public pages render, hydrate, and fit the viewport", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const path of [
    "/",
    "/services",
    "/services/app-development",
    "/portfolio",
    "/portfolio/kofind",
    "/posters",
    "/about",
    "/contact",
    "/privacy",
  ]) {
    const response = await page.goto(path);
    expect(response.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  expect(errors).toEqual([]);
});
test("form without configuration never reports success", async ({ page }) => {
  await page.goto("http://127.0.0.1:4175/contact");
  await fill(page);
  await page.getByRole("button", { name: "Send Enquiry", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText("has not been sent");
  await expect(page.getByText("Enquiry sent.", { exact: true })).toHaveCount(0);
});
async function fill(page) {
  await page
    .getByLabel("Your name (required)", { exact: true })
    .fill("Test Person");
  await page
    .getByLabel("Email (required)", { exact: true })
    .fill("test@example.com");
  await page
    .getByLabel("What would you like to create? (required)", { exact: true })
    .fill("A test project enquiry.");
}
test("provider failure preserves details and allows a successful retry", async ({
  page,
}) => {
  let attempts = 0;
  await page.route(
    "https://api.emailjs.com/api/v1.0/email/send",
    async (route) => {
      attempts++;
      await route.fulfill({
        status: attempts === 1 ? 500 : 200,
        body: attempts === 1 ? "Unavailable" : "OK",
      });
    },
  );
  await page.goto("http://127.0.0.1:4174/contact");
  await fill(page);
  await page.getByRole("button", { name: "Send Enquiry", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText(
    "could not confirm delivery",
  );
  await expect(
    page.getByLabel("Your name (required)", { exact: true }),
  ).toHaveValue("Test Person");
  await page.getByRole("button", { name: "Send Enquiry", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Enquiry sent." }),
  ).toBeVisible();
  expect(attempts).toBe(2);
});
test("service interest is carried into the enquiry", async ({ page }) => {
  await page.goto("/services/app-development");
  await page
    .getByRole("link", { name: "Discuss Your Project →", exact: true })
    .last()
    .click();
  await expect(
    page.getByRole("button", { name: "Mobile App Development", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
});
test("poster dialog supports keyboard controls and restores focus", async ({
  page,
}) => {
  await page.goto("/posters");
  const trigger = page.getByRole("button", {
    name: "Enlarge Casa Nova poster",
  });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("dialog")).toContainText("Ember Table");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(trigger).toBeFocused();
});
test("public pages have no serious accessibility violations", async ({
  page,
}) => {
  for (const path of [
    "/",
    "/services",
    "/portfolio",
    "/posters",
    "/about",
    "/contact",
  ]) {
    await page.goto(path);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations.filter((v) =>
        ["serious", "critical"].includes(v.impact),
      ),
      path,
    ).toEqual([]);
  }
});
test("missing pages have a useful 404 response", async ({ page }) => {
  const response = await page.goto("/missing-page");
  expect(response.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "We could not find that page." }),
  ).toBeVisible();
});

test("mobile navigation closes on Escape and restores the trigger", async ({
  page,
}, testInfo) => {
  if (testInfo.project.name !== "mobile") return;
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await trigger.click();
  await expect(page.getByRole("dialog", { name: "Navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(page.getByRole("dialog")).toHaveCount(0);
});
test("a pending enquiry cannot submit twice", async ({ page }) => {
  let requests = 0;
  let release;
  const hold = new Promise((resolve) => {
    release = resolve;
  });
  await page.route(
    "https://api.emailjs.com/api/v1.0/email/send",
    async (route) => {
      requests++;
      await hold;
      await route.fulfill({ status: 200, body: "OK" });
    },
  );
  await page.goto("http://127.0.0.1:4174/contact");
  await fill(page);
  await page.getByRole("button", { name: "Send Enquiry", exact: true }).click();
  await expect(page.getByRole("button", { name: "Sending…" })).toBeDisabled();
  expect(requests).toBe(1);
  release();
  await expect(
    page.getByRole("heading", { name: "Enquiry sent." }),
  ).toBeVisible();
});
test("static content remains available without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/services/app-development");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Mobile App Development",
  );
  await page
    .getByRole("link", { name: "Discuss Your Project →", exact: true })
    .last()
    .click();
  await expect(
    page.getByLabel("Your name (required)", { exact: true }),
  ).toBeVisible();
  await context.close();
});
test("narrow and intermediate screens do not clip content", async ({
  page,
}) => {
  for (const width of [320, 375, 768, 981, 1024]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      String(width),
    ).toBe(true);
  }
});
