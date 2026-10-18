# Shah & Shah — Business Portfolio Website

Professional portfolio site for **Shah & Shah**, a multidisciplinary advisory firm. Built with Next.js (App Router), TypeScript and Tailwind CSS v4. All copy and project details are placeholder content.

## Features

- Responsive, accessible design with dark theme
- Animated hero, scroll reveals, animated stats, testimonial carousel
- Filterable projects with case-study pages; services and insights (blog) pages
- Validated contact form (react-hook-form + zod) with API route, honeypot and rate limit
- SEO: metadata, Open Graph, sitemap, robots; static generation for all content pages

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

## Structure

See [docs/architecture.md](docs/architecture.md). In short: `src/app` (routes), `src/core` (config, utils), `src/shared` (reusable UI), `src/features/*` (data + components per domain).

## Customising

1. Edit `src/core/config/site.ts` (name, contact, socials).
2. Replace filler in `src/features/*/data/`.
3. Tweak the palette in `src/app/globals.css`.
4. Wire email delivery in `src/app/api/contact/route.ts`.
