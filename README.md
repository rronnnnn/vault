# Vault

Single-page brand hero for **Vault**, a fictional cybersecurity company. A full-viewport
rounded panel with the Vault logotype, a tracked-out tagline, and an interactive 3D globe
that auto-rotates, responds to drag, and bleeds off the bottom edge.

## Stack

- Next.js 14 (App Router) · TypeScript
- Tailwind CSS
- [`cobe`](https://cobe.vercel.app/) for the WebGL globe
- [`motion`](https://motion.dev/) for the page-load entrance and globe inertia

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx        # Inter font, metadata, viewport
  page.tsx          # the hero composition + entrance motion
  globals.css       # Tailwind layers + base styles
  icon.svg          # favicon (shield mark)
components/ui/
  globe.tsx         # cobe globe: auto-rotate + draggable
lib/
  utils.ts          # cn() — clsx + tailwind-merge
```

The globe is positioned by a static outer wrapper (centering + bottom crop) while a nested
`motion.div` owns the opacity/scale entrance — keeping motion's `transform` from clobbering
the centering transform. Respects `prefers-reduced-motion`.
