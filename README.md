# Le Pavillon Vert

Landing page for **Le Pavillon Vert** — a refined brasserie and events venue set
inside the medieval Château-ferme de Falnuée in Gembloux, Belgium.

Built as the foundation for a future all-in-one platform for running the
business (reservations, events, menus, and more).

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a bespoke brand palette (forest / champagne gold / cream)
- **shadcn/ui** primitives (Button)
- **Framer Motion** for scroll-triggered reveals, parallax hero, and micro-interactions
- **next/font** (Cormorant Garamond + Montserrat) and **next/image** for optimized assets
- SEO metadata, Open Graph, `sitemap.xml`, `robots.txt`, and `Restaurant` JSON-LD

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/                 # App Router entry, layout (metadata), routes
components/
  sections/          # Page sections (Navbar, Hero, About, Features, Gallery, Events, Contact, Footer)
  ui/                # shadcn Button + Framer Motion primitives
lib/
  site.ts            # Single source of truth for business info, hours, gallery
  utils.ts           # cn() helper
public/gallery/      # Optimized venue photography
```

Business content (address, hours, contact, gallery) lives in `lib/site.ts` so it
can be swapped for a CMS or database as the platform grows.
