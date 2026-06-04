# Giovanni Lion — Portfolio

Astro 5 static site. The homepage hero is a vanilla-Canvas port of
[Friendly Polygons](https://observablehq.com/@venetanji/friendly-poligons).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serves ./dist
```

Node ≥ 20.

## Structure

```
src/
  assets/                # images optimised by Astro (project + publication covers)
  components/
    PolygonField.astro   # Canvas hero animation (Friendly Polygons)
    SiteHeader.astro
    SiteFooter.astro
  content/
    projects/            # one .md per project (front-matter -> content collection)
    publications/        # one .md per publication
  data/
    site.ts              # bio, social links, education, experience, sketches index
  layouts/Base.astro
  lib/format.ts          # date / author / image helpers
  pages/
    index.astro          # home (hero + about + work + cv + writing + contact)
    lab.astro            # /lab — sketches and experiments index
    projects/[...slug].astro
    publications/[...slug].astro
  styles/global.css
public/                   # static assets served as-is (favicon, docs, images/*)
scripts/bundle-thesis.mjs # copies the thesis web edition into dist/thesis
vendor/thesis/            # git submodule: the PhD thesis repo (pre-built site/)
.legacy-hugo/             # archived Hugo source (reference only — not built)
```

## The thesis at `/thesis/`

The PhD dissertation *Concept Formation in Computational Creativity* lives in
its own repo and is pinned here as a **git submodule** at `vendor/thesis`. It is
served as a **subdirectory** (`venetanji.com/thesis/`), not a subdomain — a
subdirectory consolidates SEO authority onto the main domain. The thesis ships
its own pre-built static site (pandoc) under `vendor/thesis/site`, themed to
match this portfolio; `scripts/bundle-thesis.mjs` copies it into `dist/thesis`
after `astro build` (wired into `npm run build`).

```bash
# First checkout / CI: pull the submodule
git submodule update --init --recursive

# Update to the latest thesis (bump the pinned commit, then commit the bump)
git submodule update --remote vendor/thesis
git add vendor/thesis && git commit -m "thesis: bump submodule"
```

**Cloudflare Pages:** enable *"Include submodules"* (Settings → Builds) so the
build can fetch `vendor/thesis`. The submodule URL is the public GitHub HTTPS
URL, so the runner can clone it without extra credentials. If the submodule is
ever missing at build time, the bundle step warns and skips rather than failing
the deploy.

## Adding content

- **Projects** → drop a markdown file in `src/content/projects/<slug>.md` with
  `title`, `summary`, `subtitle`, `date`, `featured`, optional `weight` for
  ordering. Hero image: drop a file at `src/assets/projects/<slug>.{jpg,png,webp}`.
- **Publications** → same pattern under `src/content/publications/`.
- **Lab sketches** → append to `sketches` in `src/data/site.ts`. To inline a
  sketch, add a new component under `src/components/` and use it on `/lab`.

### Adding a new music video

The `the-best-thing-ever.md` and `spacerat.md` projects are the templates.
Each is a normal project with one extra front-matter field, `youtube: <id>`,
which makes the project detail page render the video as the hero (iframe in
the hero slot, no thumbnail). The thumbnail at `src/assets/projects/<slug>.*`
is still used as the homepage tile preview.

```bash
# 1. Copy a template; edit title, summary, dates, youtube ID, links
cp src/content/projects/the-best-thing-ever.md src/content/projects/<slug>.md

# 2. Drop a thumbnail (used on the homepage tile)
curl -L -o src/assets/projects/<slug>.jpg \
  https://i.ytimg.com/vi/<VIDEO_ID>/maxresdefault.jpg

# 3. Commit; Cloudflare Pages rebuilds.
git add . && git commit -m "projects: add <title>" && git push
```

The `youtube:` field is a generic project frontmatter — any project can opt
in to a video hero by setting it. See `src/pages/projects/[...slug].astro`.

## Deploy

Hosted on **Cloudflare Pages**, auto-deployed from `main`. Pages auto-detects
`npm run build` → `dist` and serves the static output via Cloudflare's CDN.
Cloudflare Pages reads `public/_headers` and `public/_redirects` natively
(same syntax as Netlify).

`netlify.toml` is legacy from the Hugo era and is no longer used by the
deploy — kept around as a no-op fallback in case the project ever moves
back to Netlify.
