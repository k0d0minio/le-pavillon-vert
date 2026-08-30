# AGENTS.md — Layer 0: Repository Identity & Routing

> This is the **first file any agent session reads.** It says what this repo is and where
> to go for a given task. Keep it short; detail lives in `README.md` and the routed files.

## What this repo is

**le-pavillon-vert** — the landing page for **Le Pavillon Vert**, a refined brasserie and
events venue inside the **Château-ferme de Falnuée**, a 13th-century keep listed as Walloon
heritage, at the heart of the golf course in **Gembloux, Belgium**.

The site is **in French** (`fr_BE`) — copy, tone and business material all are. It is built
as the foundation for a future all-in-one platform for running the business (reservations,
events, menus); today it is the landing page, and reservations still hand off to the
Falnuée golf-hotel site.

Next.js 14 (App Router) + TypeScript · Tailwind CSS with a bespoke palette (forest /
champagne gold / cream) · shadcn/ui Button · Framer Motion for scroll reveals, parallax
hero and micro-interactions · `next/font` (Cormorant Garamond + Montserrat) · `next/image`
· SEO metadata, Open Graph, `sitemap.xml`, `robots.txt` and `Restaurant` JSON-LD.

**`lib/site.ts` is the single source of truth** for business information — name, tagline,
description, phone, both email addresses, the reservation URL, the postal address and the
opening hours. Nothing user-facing should hardcode any of it.

## Routing — "if the task is… → go to…"

| The task | Go to |
|---|---|
| Business facts — hours, address, contact, reservation link | [`lib/site.ts`](lib/site.ts) — **the** source of truth |
| A page section | [`components/sections/`](components/sections/) — `navbar` · `hero` · `about` · `features` · `gallery` · `events` · `contact` · `footer` |
| Routes, layout, page metadata | [`app/`](app/) |
| Buttons and motion primitives | [`components/ui/`](components/ui/) |
| Brand palette, type scale | the Tailwind config + `app/` global styles |
| Images | [`public/`](public/) |
| The commercial proposal behind this build | [`proposal.pdf`](proposal.pdf) |
| Helpers | [`lib/utils.ts`](lib/utils.ts) — `cn()` |
| Plan or track work on this repo | [`.icm/intake/`](.icm/intake/) — epics and stubs, contract in its README |

## Standing rules

- **User-facing copy is French (`fr_BE`).** Do not introduce English strings, and do not
  "correct" the French toward English phrasing.
- **Business facts come from `lib/site.ts`.** Never hardcode an address, a phone number or
  an opening time into a component, and never invent one — the venue is real and its
  details are checkable.
- **Reservations currently leave the site.** `contact.reservationUrl` points at the
  Falnuée golf-hotel site; do not build a booking flow that implies otherwise without a
  decision from Jamie.
- **The heritage claims are load-bearing.** The 13th-century keep and the Walloon heritage
  listing are the venue's own claims — repeat them, do not embellish them.
- **CI is the source of truth.** Never run `build`/`lint`/`typecheck` locally — push and
  read the Vercel deployment check.
- **Planning is tickets.** Any plan or backlog becomes stubs in `.icm/intake/`, never a
  loose `TODO.md`. Ticket-only commits go straight to `main`; everything else through a PR
  on a `claude/` branch.
- **Gates are human checkboxes** — read them, never tick them.
- **No secrets in git, ever.** Env vars only; flag any plaintext credential found.
