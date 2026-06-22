# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Side Stories Next.js landing page. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), with a reverse proxy configured in `next.config.js` to route events through `/ingest` and reduce ad-blocker interference. Client-side event tracking was added to the two landing pages by extracting interactive CTA sections into dedicated `"use client"` components (`CTACard`, `MapLink`, `AboutCTA`), keeping the server component architecture intact. Environment variables are stored in `.env.local` and declared in `src/env.ts` using the existing `@t3-oss/env-nextjs` validation pattern.

| Event                    | Description                                                                 | File                               |
| ------------------------ | --------------------------------------------------------------------------- | ---------------------------------- |
| `registration_clicked`   | User clicked the 'Registrovat se' (Register) CTA — primary conversion event | `src/app/_components/cta-card.tsx` |
| `registration_clicked`   | User clicked 'Registrovat se' on the About page                             | `src/app/about/about-cta.tsx`      |
| `instagram_link_clicked` | User clicked the Instagram social link                                      | `src/app/_components/cta-card.tsx` |
| `instagram_link_clicked` | User clicked the Instagram social link on the About page                    | `src/app/about/about-cta.tsx`      |
| `whatsapp_link_clicked`  | User clicked the WhatsApp community link                                    | `src/app/_components/cta-card.tsx` |
| `whatsapp_link_clicked`  | User clicked the WhatsApp community link on the About page                  | `src/app/about/about-cta.tsx`      |
| `map_link_clicked`       | User clicked the event start location map link                              | `src/app/_components/map-link.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://eu.posthog.com/project/200727/dashboard/744906)
- [Registration Clicks Over Time](https://eu.posthog.com/project/200727/insights/nnIWTYxv) — daily trend of register button clicks
- [Social Link Clicks](https://eu.posthog.com/project/200727/insights/ZbCG5y5t) — Instagram vs WhatsApp clicks over time
- [Registration Conversion Funnel](https://eu.posthog.com/project/200727/insights/3O8dIwDG) — pageview → registration click conversion rate
- [Registration by Page](https://eu.posthog.com/project/200727/insights/gmxvmrNd) — registration clicks broken down by home vs about page
- [All CTA Clicks Total](https://eu.posthog.com/project/200727/insights/KhG7c9Po) — all CTA interactions in one chart

> **Action required:** Run `pnpm install` from the monorepo root to install `posthog-js`. The package was added to `package.json` but the lockfile could not be updated automatically.

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
