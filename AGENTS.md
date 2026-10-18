<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project rules (Shah & Shah)

- Layout and dependency rules: [docs/architecture.md](docs/architecture.md). Feature-first: `src/features/<name>/{data,components,lib}`; routes stay thin in `src/app`.
- Commands: `npm run dev`, `npm run lint`, `npm run typecheck`, `npm run build` (all must pass before finishing).
- Use colour tokens from `globals.css` (`bg-brand`, `text-accent`, ...), not raw hex. Use `cn()` for class merging.
- Use `routes` / `siteConfig` from `src/core/config`; no hard-coded paths or contact details.
- Server Components by default; add `"use client"` only when needed. Cache Components is on, so no bare `new Date()`/`Math.random()` in server render.
- Conventional commits (`feat(projects): ...`).
