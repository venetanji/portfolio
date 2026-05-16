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
.legacy-hugo/             # archived Hugo source (reference only — not built)
```

## Adding content

- **Projects** → drop a markdown file in `src/content/projects/<slug>.md` with
  `title`, `summary`, `subtitle`, `date`, `featured`, optional `weight` for
  ordering. Hero image: drop a file at `src/assets/projects/<slug>.{jpg,png,webp}`.
- **Publications** → same pattern under `src/content/publications/`.
- **Lab sketches** → append to `sketches` in `src/data/site.ts`. To inline a
  sketch, add a new component under `src/components/` and use it on `/lab`.

### Adding a new music video

Two-file convention, mirrored across the `the-best-thing-ever.md` and
`spacerat.md` projects:

1. Copy one of those project files to `src/content/projects/<slug>.md` and
   replace the title, summary, YouTube ID (in both `links` and the `<iframe>`
   `src`), and dates.
2. Download the YouTube cover:
   ```bash
   curl -L -o src/assets/projects/<slug>.jpg \
     https://i.ytimg.com/vi/<VIDEO_ID>/maxresdefault.jpg
   ```
3. Commit; Netlify rebuilds.

The body template (front-matter + iframe + a short paragraph linking to
[creative-skills](https://github.com/venetanji/creative-skills) and the
relevant `creative-scripts/music-videos/<slug>/song.yaml`) is the same for
every video — just swap titles and IDs.

## Deploy

`netlify.toml` is configured for Netlify (`npm run build` → `dist`).
