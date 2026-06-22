#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";

const PROJECT_REF = "xpxpbfzxavfnvxhfcecq";
const migrationName = process.argv[2];

if (!migrationName) {
  console.error("Usage: pnpm db:migration <migration-name>");
  process.exit(1);
}

const run = (command, args) => {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
};

const migrationVersions = () =>
  new Set(
    readdirSync("supabase/migrations", { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith(".sql"))
      .map((entry) => entry.name.split("_")[0]),
  );

const before = migrationVersions();

run("pnpm", ["db:push"]);
run("pnpm", ["supabase", "link", "--project-ref", PROJECT_REF]);
run("pnpm", [
  "supabase",
  "db",
  "diff",
  "--linked",
  "--schema",
  "public",
  "--file",
  migrationName,
]);

const after = migrationVersions();
const createdVersions = [...after].filter((version) => !before.has(version));

if (createdVersions.length !== 1) {
  console.error("Could not determine the created Supabase migration version.");
  process.exit(1);
}

// Drizzle already applied the schema change to the linked dev database. Mark
// the generated migration as applied there so future `supabase db push` runs
// only apply it to databases that do not have the change yet.
run("pnpm", [
  "supabase",
  "migration",
  "repair",
  "--status",
  "applied",
  createdVersions[0],
]);
