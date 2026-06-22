# Contributing

## Database schema changes

This project uses **Drizzle for schema authoring** and **Supabase migrations** for deployable migration history.
Developers push schema changes with Drizzle, then commit the Supabase migration generated from the linked project diff.

### Workflow

1. Edit the schema in `packages/db/src/schema.ts`.
2. Push the Drizzle schema and create a Supabase migration:
   ```sh
   pnpm db:migration
   ```
   This runs `pnpm db:push`, links the project with `supabase link --project-ref xpxpbfzxavfnvxhfcecq`, writes a migration under `supabase/migrations/` from `supabase db diff --linked`, and marks that migration as applied on the linked dev project because Drizzle already changed it there.
3. Review the generated migration SQL before committing. Supabase owns the `auth` schema and `auth.users`; keep only public-schema changes and any foreign keys that reference `auth.users`.
4. Commit both the schema change and the generated Supabase migration together.

### Why

Drizzle is the source of truth for TypeScript schema definitions, while Supabase migrations are the source of truth for applying schema history across environments.

The CD job applies committed migrations with `pnpm db:migrate` (`supabase db push`) — fully non-interactive.

### Local dev

For quick iteration, you can still run `pnpm db:push` to apply the Drizzle schema to the database configured by `POSTGRES_URL`. Before opening a PR, run `pnpm db:migration <name>` and commit the generated Supabase migration.
