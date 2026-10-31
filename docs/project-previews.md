# Project UI previews

These are browser captures of the projects' actual running interfaces, not generated mockups. The screenshot files are committed as optimized WebP images in `public/assets/projects` and are displayed on Home, Portfolio, and project overview pages.

Captured 31 October 2026:

| Project                 | Source snapshot                                          | Captured view                                                 |
| ----------------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| KoFind                  | `a36146f7958edd5a4965e820583b679fc35e1ccc`               | Lost-and-found homepage with demo reports, desktop and mobile |
| Nike E-commerce Concept | Nike-Redesign `d25fc2b693cc668def4dc78b9d33ebacee19026a` | Storefront homepage, desktop and mobile                       |
| KoFund                  | `cef3bbe158fba1d4de37cdf78cd100e4ba1cad8c`               | Community dashboard (demo) and mobile authentication          |

KoFind was run with isolated local Supabase configuration. Its refreshed previews use five in-memory fictional lost-and-found reports with generic item illustrations. Nike's public storefront was run with empty API responses. No production account was signed into, no private records were included, and no production data was changed. Development tooling overlays were excluded from the captures.

KoFund was built from the Flutter source using Flutter 3.35.7 / Dart 3.9.2. Case-sensitive import paths were normalized in the local preview copy, and its icon dependency was updated within the existing major version for build compatibility. Layouts and screen copy were not redesigned. These adjustments were not pushed to the source project repositories.

The previews show interface design and public/authentication flows; they are not evidence of user adoption, measured business results, or Nike affiliation. KoFind copy now reflects the actual lost-and-found product, and KoFund's technology list reflects Provider rather than Riverpod.

To refresh these images, run the project sources locally, capture the same views without private records, and generate both a full-size WebP and a 640px thumbnail. Update `src/user/data/projects.js` if the views or dimensions change. Original capture PNGs and app build outputs do not need to be committed to this website.

## Demo-data refresh

KoFund now opens with a community dashboard preview using its actual Flutter dashboard widgets and isolated in-memory provider fixtures. The authentication screenshot is retained as the second screen. The capture uses a dummy Firebase project configuration; production Firestore traffic is blocked. These capture-only fixtures and provider adjustments are not deployed to the KoFund app.

Fictional dashboard figures: 48 members; 39 contributors; ₹48,750 collected; ₹12,750 expenses; ₹36,000 balance; ₹60,000 target. The numbers are sample UI content, not real financial records or evidence of customer outcomes.

KoFind's sample reports are a brown wallet, black headphones, a blue backpack, house keys, and a silver watch. Names, locations, times, and item illustrations are demonstration content only. The captures do not read or write production listings.

The screenshots include a visible demo-data banner, and the website marks demo previews on cards and captions.
