# Arthur Asasira portfolio

A recruiter-facing portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Vercel Analytics.

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The site runs at `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Published portfolio facts live in typed modules under `app/data`. A production build rejects a published project that contains `[VERIFY]` or lacks the required evidence categories.

## Public routes

- `/` — portfolio home
- `/projects/[slug]` — project case studies
- `/about` — professional story, experience, and education
- `/resume` — print-friendly public résumé
- `/contact` — direct contact and profile links
- `/privacy` — analytics and contact privacy information

The private career dashboard remains a separate project and is not exposed here.
