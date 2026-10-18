# Architecture

Next.js (App Router) + TypeScript + Tailwind CSS v4. Feature-first layout, mirroring the structure used in `sport-buddy-player`.

```
src/
  app/          Routes only: layouts, pages, metadata, route handlers. Thin; compose features.
  core/         config (site, routes), utils (cn, format). No React components.
  shared/       components used by 2+ features: ui/, layout/, motion/, hooks/
  features/<name>/
    data/         typed filler content (swap for CMS/API later)
    components/   feature UI
    lib/          schemas, helpers
```

Features: `home`, `services`, `projects`, `team`, `testimonials`, `blog`, `contact`.

## Dependency rule

`app -> features -> shared -> core`. Features never import from other features' `components/`; cross-feature reuse goes through `data/` or `shared/`. (Exception today: `contact` reads `services` data for its select list.)

## Conventions

- Server Components by default; `"use client"` only for interactivity (header, theme toggle, filters, carousel, form, motion).
- Colours come from CSS variables in `globals.css`; never hard-code hex in components.
- Paths come from `core/config/routes.ts`; site facts from `core/config/site.ts`.
- Cache Components is enabled: anything time-dependent (e.g. `new Date()`) must be cached or client-side.
- Content is placeholder. Replace `features/*/data/*` and `core/config/site.ts` with real details.

## Routes

`/`, `/about`, `/services`, `/services/[slug]`, `/projects`, `/projects/[slug]`, `/blog`, `/blog/[slug]`, `/contact`, `POST /api/contact`, `/sitemap.xml`, `/robots.txt`.

## Adding things

- New page: `app/<route>/page.tsx` + entry in `routes.ts` (+ `mainNav` if in the menu) + `sitemap.ts`.
- New project/service/post: add an object to its `data/*.ts` file; pages and sitemap pick it up.
- Real email delivery: implement the TODO in `app/api/contact/route.ts`.
