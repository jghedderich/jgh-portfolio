# Portfolio — Juan Hedderich

Personal site: work history, skills, and project case studies. Built with [Astro](https://astro.build) (static), React islands, MDX, and Tailwind. Locales: English (unprefixed), Spanish (`/es/`), German (`/de/`).

**Canonical origin:** [https://juanhedderich.com](https://juanhedderich.com)

## Prerequisites

- [Bun](https://bun.sh) (use the current release; do not pin a version for CI)
- A clone of this repository

```sh
bun install
```

## Local development

Run from the repo root:

| Command | What it does |
| --- | --- |
| `bun run dev` | Dev server (default `http://localhost:4321`) |
| `bun run build` | Typecheck (`astro check`) and write the static site to `dist/` |
| `bun run preview` | Serve `dist/` locally |
| `bun run test` | Vitest |
| `bunx wrangler deploy --dry-run` | After a build: validate Wrangler config and asset upload without publishing |

## Deployment

Production is a **Cloudflare Worker** named `jgh-portfolio` (static assets from `dist/`, plus a small Worker that 301s `www.juanhedderich.com` to the apex). GitHub is connected via **Workers Builds**: pushes to `main` run `bun run build` then `npx wrangler deploy`. Other branches use `npx wrangler versions upload` (preview URLs).

Config lives in `wrangler.jsonc`. Custom domains `juanhedderich.com` and `www.juanhedderich.com` are declared there.

### Workers Builds (dashboard)

The build image’s default Bun is often older than local Bun. Frozen install (`bun install --frozen-lockfile`) then fails with “lockfile had changes”. Do **not** pin `BUN_VERSION` to a specific `1.x.y`. Use one of:

1. Build variable **`BUN_VERSION=latest`**, or
2. **`SKIP_DEPENDENCY_INSTALL=1`** and set the **build command** to `bun install && bun run build`

Keep **deploy** as `npx wrangler deploy`. After changing build settings, retry the failed build or push a commit.

### Manual deploy

```sh
bun run build
bunx wrangler deploy
```

Requires Wrangler auth to the same Cloudflare account as the Worker.

### Netlify (temporary backup)

The previous host is still configured in `netlify.toml` (`bun install` → `bun run build` → publish `dist`). It is not the canonical origin. Remove it when the Cloudflare cutover is done.

## Project layout

```text
public/          # files copied as-is (CVs, favicon, manifests)
src/pages/       # routes (including locale prefixes)
src/content/     # project case studies (MDX)
src/i18n/        # UI strings and locale helpers
workers/         # www → apex redirect Worker
wrangler.jsonc   # Cloudflare Worker + assets
```
