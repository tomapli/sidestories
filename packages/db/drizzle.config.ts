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

// drizzle-kit ignores `dbCredentials.ssl` whenever a `url` is supplied (it
// passes only the connection string to the driver). Split the URL into
// discrete fields so the SSL/CA config is actually applied.
const url = new URL(nonPoolingUrl);
const isLocalDatabase = ["127.0.0.1", "localhost"].includes(url.hostname);

export default {
  schema: "./src/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: url.hostname,
    port: url.port ? Number(url.port) : 5432,
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.replace(/^\//, ""),
    ssl: isLocalDatabase ? false : { ca },
  },
  casing: "snake_case",
} satisfies Config;
