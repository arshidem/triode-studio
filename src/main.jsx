import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App.jsx";
const element = (
  <StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </StrictMode>
);
const root = document.getElementById("root");
if (root.hasChildNodes()) hydrateRoot(root, element);
else createRoot(root).render(element);
