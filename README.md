# Clean Girl Nails — Hood Landing (v2)

This is a minimal Next.js + TailwindCSS landing page preconfigured for easy deployment to Vercel.

## What I fixed in this v2 package
- Use **relative import** in `pages/_app.js` (`import '../styles/globals.css'`) to avoid build errors.
- Included `_app.js` so Tailwind's `globals.css` is actually loaded.
- Clean, single CTA linking to: https://amzn.to/482nzlr
- Simple project structure that Vercel detects as a Next.js app.

## How to deploy
1. Unzip this package.
2. Create a GitHub repo and **upload the contents** (not the outer folder) OR upload the zip directly to Vercel (if your Vercel UI shows Upload).
3. Connect/import to Vercel and deploy — Vercel will auto-detect Next.js.
4. Optional: shorten the resulting `.vercel.app` link with Bitly for Pinterest.