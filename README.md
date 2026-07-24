# barneypinkerton.github.io

Personal site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Structure

- `src/pages/` — routes: `index.astro` (home), `projects.astro`, `writing.astro`
- `src/layouts/BaseLayout.astro` — shared nav, footer, and page shell
- `public/styles/global.css` — shared styles (nav, footer, cards, buttons)
- `public/scripts/site.js` — shared behaviour (lazy iframe loading, scroll reveal)
- `public/notebooks/` — static HTML exports of Jupyter notebooks, embedded via iframe
- `public/assets/` — images and PDFs referenced by the pages

## Development

```
npm install
npm run dev      # local dev server
npm run build    # build to dist/
npm run preview  # preview the production build
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages.
