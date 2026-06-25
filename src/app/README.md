# v2 Site — Next.js files

Drop these into `me/src/` on the `v2` branch, replacing existing files where noted.

## Copy instructions

```bash
# From the project root (wherever this README lives):
cp globals.css          ../me/src/app/globals.css
cp layout.tsx           ../me/src/app/layout.tsx
cp page.tsx             ../me/src/app/page.tsx
cp components/*.tsx     ../me/src/app/components/
```

Or just copy manually — here's what goes where:

| File here | Destination in repo |
|-----------|---------------------|
| `globals.css` | `app/globals.css` *(replace)* |
| `layout.tsx` | `app/layout.tsx` *(replace)* |
| `page.tsx` | `app/page.tsx` *(replace)* |
| `components/Navigation.tsx` | `app/components/Navigation.tsx` *(replace)* |
| `components/Hero.tsx` | `app/components/Hero.tsx` *(replace)* |
| `components/Footer.tsx` | `app/components/Footer.tsx` *(replace)* |
| `components/About.tsx` | `app/components/About.tsx` *(new)* |
| `components/Work.tsx` | `app/components/Work.tsx` *(new)* |
| `components/Ventures.tsx` | `app/components/Ventures.tsx` *(new)* |
| `components/Resume.tsx` | `app/components/Resume.tsx` *(new)* |
| `components/Speaking.tsx` | `app/components/Speaking.tsx` *(new)* |
| `components/Contact.tsx` | `app/components/Contact.tsx` *(new)* |
| `components/ScrollAnimations.tsx` | `app/components/ScrollAnimations.tsx` *(new)* |

## What changed

- **Single-page** — all sections live on `/`. The old `/about` and `/projects` routes still exist but aren't linked from the nav anymore. Delete or redirect them when ready.
- **Fonts** — JetBrains Mono + Instrument Serif + DM Sans via `next/font/google`. No extra installs needed.
- **CSS variables** — all tokens (`--bg`, `--accent`, etc.) in `globals.css`. Light-mode toggles a `.light` class on `<html>` and persists in `localStorage` under the key `v2-theme`.
- **Hover states** — handled by CSS utility classes (`.hc`, `.hl`, `.ht`, …) in `globals.css`, so section components stay as server components.
- **Scroll animations** — `ScrollAnimations.tsx` (client) wires an `IntersectionObserver` that adds `.visible` to any `[data-animate]` element when it enters the viewport, respecting `data-delay`.
- **Terminal** — hardcoded dark (`#050505`) so it stays dark regardless of theme.

## Local dev

```bash
cd me/src
pnpm dev        # or npm run dev / yarn dev
```
