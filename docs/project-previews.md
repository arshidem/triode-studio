# Project UI previews

These are browser captures of the projects' actual running interfaces, not generated mockups. The screenshot files are committed as optimized WebP images in `public/assets/projects` and are displayed on Home, Portfolio, and project overview pages.

Captured 31 October 2026:

| Project                 | Source snapshot                                          | Captured view                               |
| ----------------------- | -------------------------------------------------------- | ------------------------------------------- |
| KoFind                  | `a36146f7958edd5a4965e820583b679fc35e1ccc`               | Lost-and-found homepage, desktop and mobile |
| Nike E-commerce Concept | Nike-Redesign `d25fc2b693cc668def4dc78b9d33ebacee19026a` | Storefront homepage, desktop and mobile     |
| KoFund                  | `cef3bbe158fba1d4de37cdf78cd100e4ba1cad8c`               | Mobile authentication screen                |

KoFind was run with isolated local Supabase configuration and empty responses. Nike's public storefront was run with empty API responses. No account was signed into, no private records were included, and no production data was changed. Development tooling overlays were excluded from the captures.

KoFund was built from the Flutter source using Flutter 3.35.7 / Dart 3.9.2. Case-sensitive import paths were normalized in the local preview copy, and its icon dependency was updated within the existing major version for build compatibility. Layouts and screen copy were not redesigned. These adjustments were not pushed to the source project repositories.

The previews show interface design and public/authentication flows; they are not evidence of user adoption, measured business results, or Nike affiliation. KoFind copy now reflects the actual lost-and-found product, and KoFund's technology list reflects Provider rather than Riverpod.

To refresh these images, run the project sources locally, capture the same views without private records, and generate both a full-size WebP and a 640px thumbnail. Update `src/user/data/projects.js` if the views or dimensions change. Original capture PNGs and app build outputs do not need to be committed to this website.
