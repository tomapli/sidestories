# Contributing

## Database schema changes

This project uses **Drizzle migrations** rather than `drizzle-kit push` in CI/CD.
All interactive decisions (column renames, destructive changes, etc.) must be made locally and committed before a PR is merged.

### Workflow

1. Edit the schema in `packages/db/src/schema.ts`.
2. Generate a migration file:
   ```sh
   pnpm db:generate
   ```
   Answer any prompts Drizzle shows (e.g. "is this a rename or a drop?"). The generated SQL files land in `supabase/drizzle/`.
   Supabase already owns the `auth` schema and `auth.users`. If a generated migration includes `CREATE SCHEMA "auth"` or `CREATE TABLE "auth"."users"`, remove those statements before committing — keep only the public-schema changes and any foreign keys that reference `auth.users`.
3. Commit both the schema change and the generated migration files together.

### Why

The CI job `DB migrations up to date` runs `pnpm -F @acme/db generate` headless and fails if the result differs from what is already committed. This ensures no schema change reaches the deploy step without a reviewed migration capturing it.

The CD job then applies committed migrations with `pnpm db:migrate` (`drizzle-kit migrate`) — fully non-interactive.

### Local dev

For local Supabase, you can still use `pnpm db:push` to quickly push schema changes to your local instance without generating a migration file. This is fine for iterating locally, but remember to generate and commit a migration before opening a PR.
