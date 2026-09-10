![Portfolio](https://user-images.githubusercontent.com/65879727/164993069-caf6910e-18d6-4064-85a1-59070fc435ad.png)

# naman-dev.com

Personal portfolio of **Naman Mattu** — web developer based in Newcastle, Australia.

Built with **React 18 + Vite**, styled with **Tailwind CSS**, and pre-rendered to
static HTML at build time with **[vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg)**
(single-page mode) so the content is crawlable by search engines and social/link
unfurlers without needing JavaScript.

## Scripts

| Command | What it does |
| --- | --- |
| `yarn dev` | Start the Vite dev server (client-rendered, fast HMR) at http://localhost:5173 |
| `yarn build` | Type-free production build **+ static pre-render** → `dist/` |
| `yarn preview` | Serve the built `dist/` locally to check the pre-rendered output |

## Deployment (Vercel)

`vercel.json` pins the build:

```jsonc
"buildCommand": "vite-react-ssg build",
"outputDirectory": "dist"
```

Push to `main` and Vercel builds and deploys. After deploying, confirm
`/robots.txt` and `/sitemap.xml` return plain text / XML (not the app shell),
then in Google Search Console submit `sitemap.xml` and request indexing for
`https://www.naman-dev.com/`.

## SEO notes

- `index.html` (project root) holds the `<title>`, meta description, canonical,
  Open Graph / Twitter tags, and JSON-LD (`Person` + `WebSite`). Edit it there.
- Client-only widgets (animated cursor, aurora background, icon cloud) are wrapped
  in `<ClientOnly>` from `vite-react-ssg` so they don't run during pre-render.
- `public/` holds static files served at the site root: `robots.txt`,
  `sitemap.xml`, `manifest.json`, `logo.png`, `icons/`.

## Project layout

```
index.html              # HTML entry + all <head> SEO tags
src/main.jsx            # ViteReactSSG single-page entry
src/App.jsx             # app shell (sections + providers)
src/components/*.jsx    # page sections
src/components/ui/*.tsx # shared UI primitives
vite.config.ts         # React plugin, "@" alias, ssr.noExternal for legacy CJS deps
```
