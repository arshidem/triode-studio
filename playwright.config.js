import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: true,
  workers: 2,
  timeout: 30000,
  use: { baseURL: "http://127.0.0.1:4173", trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    {
      name: "mobile",
      use: { ...devices["iPhone 13"], defaultBrowserType: "chromium" },
    },
  ],
  webServer: [
    {
      command: "npm run dev -- --host 127.0.0.1 --port 4175 --strictPort",
      url: "http://127.0.0.1:4175",
      env: {
        VITE_EMAILJS_SERVICE_ID: "",
        VITE_EMAILJS_TEMPLATE_ID: "",
        VITE_EMAILJS_PUBLIC_KEY: "",
      },
      reuseExistingServer: false,
    },
    {
      command: "node scripts/serve.mjs",
      url: "http://127.0.0.1:4173",
      reuseExistingServer: false,
    },
    {
      command: "npm run dev -- --host 127.0.0.1 --port 4174 --strictPort",
      url: "http://127.0.0.1:4174",
      env: {
        VITE_EMAILJS_SERVICE_ID: "service_test",
        VITE_EMAILJS_TEMPLATE_ID: "template_test",
        VITE_EMAILJS_PUBLIC_KEY: "public_test",
      },
      reuseExistingServer: false,
    },
  ],
});
