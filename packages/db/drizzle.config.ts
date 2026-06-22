import { readFileSync } from "node:fs";

import type { Config } from "drizzle-kit";

if (!process.env.POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL");
}

const nonPoolingUrl = process.env.POSTGRES_URL.replace(":6543", ":5432");

// Supabase requires SSL. Verify the connection against the project CA cert
// committed alongside this config rather than disabling verification.
const ca = readFileSync(
  new URL("./prod-ca-2021.crt", import.meta.url),
  "utf-8",
);

export default {
  schema: "./src/schema.ts",
  out: "../../supabase/drizzle",
  dialect: "postgresql",
  dbCredentials: { url: nonPoolingUrl, ssl: { ca } },
  casing: "snake_case",
} satisfies Config;
