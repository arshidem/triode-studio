# Triode Studio

A three-founder digital studio website built with React and Vite. Public pages are prerendered at build time so visitors and search/social crawlers receive meaningful HTML.

## Local setup

Use Node.js 22.12+ (or a compatible current LTS release).

```sh
npm ci
cp .env.example .env.local
npm run dev
```

For a production preview:

```sh
npm run build
npm run preview
```

The build generates responsive WebP artwork, a social preview image, 17 public pages, a not-found page, route metadata, robots.txt, and a sitemap. Generated artwork is ignored by Git. Original artwork remains in `public/assets/posters`; only optimized variants are included in the deployment output.

## Enquiry delivery

Set these public EmailJS identifiers in Vercel's project environment settings, then rebuild:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

The EmailJS template must deliver to your team's inbox and support these fields: `project_type`, `selected_services`, `business_name`, `from_name`, `from_email`, `phone`, `budget`, `timeline`, `message`.

Restrict allowed origins in EmailJS to your actual production domain and any preview domains you intentionally support. Configure provider abuse controls appropriate to your plan. The client honeypot only reduces simple automated submissions; it is not a substitute for provider protections.

Missing configuration shows an honest error and email/WhatsApp alternatives. Success appears only after EmailJS accepts a send. Before merging, test a controlled enquiry on a configured preview and check the actual inbox, reply-to mapping, and spam folder. Automated tests intercept EmailJS and never send real messages.

The existing tracked browser configuration is preserved for deployment compatibility. New local environment files are ignored. EmailJS public identifiers are intentionally exposed in the browser; keep private server credentials out of all Vite variables and source files. You can override the existing public identifiers through Vercel environment settings.

## Content and domains

- Edit services in `src/user/data/services.js` and projects in `src/user/data/projects.js`.
- `src/user/data/seo.js` owns the production origin, route titles, canonical URLs, schema, and generated sitemap routes. Update its `siteOrigin` when a custom domain is ready.
- Keep studio products and independent concepts labeled accurately. Only publish measured results you can support. Poster brand names do not establish commissioned client work.
- Add genuine product screenshots and verified live/demo links when available. No fake screenshots, testimonials, or video samples are generated.
- Review privacy wording and the response-time promise against the team's actual practices.
- Vercel should run `npm run build` and publish `dist`. `vercel.json` enables clean URLs. Do not add a blanket rewrite to the homepage: the build creates real pages and `404.html`.
- Keep preview deployments protected or send `X-Robots-Tag: noindex` through the preview environment configuration. Canonicals always point to the production origin; production itself stays indexable.

The old PWA shell is retired by `public/sw.js`; it clears the previous Workbox caches and unregisters itself so visitors receive fresh public pages.

## Checks

```sh
npm run lint
npm run build
npm test
npx playwright install chromium
npm run test:e2e
```

Tests cover prerendered content and metadata, internal destinations, enquiry mapping/configuration, desktop and mobile journeys, keyboard dialogs, automated accessibility checks, and provider success/failure via interception. The GitHub Actions workflow runs these checks on pull requests and main.

Vercel Analytics tracks aggregate usage and enquiry/contact events without enquiry content or contact details. Speed Insights is mounted for production performance data. Actual analytics collection, Search Console indexing, and inbox delivery must be verified in the deployed environment.
