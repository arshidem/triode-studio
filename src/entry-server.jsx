import { renderToString } from "react-dom/server";
import App from "./App";
export { getPageMetadata, staticPaths, siteOrigin } from "./user/data/seo";
export function render(url) {
  return renderToString(<App url={url} />);
}
