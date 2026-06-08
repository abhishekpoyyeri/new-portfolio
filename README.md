This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO Checklist (what I applied and next steps)

- Added meta `description`, `og:*` tags, `twitter:card`, and `theme-color` in `index.html`.
- Injected a runtime `canonical` link and `og:url` so canonical/og reflect the deployed domain automatically.
- Added `application/ld+json` (Person) structured data for better knowledge-graph results.
- Created `public/robots.txt` and `public/sitemap.xml` templates — replace `https://your-domain.example/` with your production domain and submit to Google Search Console.
- Recommended: Set up Google Search Console + submit sitemap, enable Analytics, and add hreflang if you have multiple locales.
- Recommended: Use a CDN and enable Brotli/ gzip and long cache headers for static assets.
- Recommended: Run Lighthouse audits (performance, accessibility, SEO) and fix issues flagged.
