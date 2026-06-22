import { createEnv } from "@t3-oss/env-core";
import { z } from "zod/v4";

const localSupabaseEnv = {
  url: "http://127.0.0.1:55321",
  publishableKey: "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH",
};

function isProductionEnv() {
  return process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "production"
    : process.env.NODE_ENV === "production";
}

export function authEnv() {
  const useLocalSupabase = !isProductionEnv();

  return createEnv({
    clientPrefix: "NEXT_PUBLIC_",
    client: {
      NEXT_PUBLIC_SUPABASE_URL: z.url(),
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: z.string().min(1),
    },
    runtimeEnv: {
      NEXT_PUBLIC_SUPABASE_URL: useLocalSupabase
        ? localSupabaseEnv.url
        : process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: useLocalSupabase
        ? localSupabaseEnv.publishableKey
        : process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    },
    skipValidation:
      !!process.env.CI || process.env.npm_lifecycle_event === "lint",
  });
}
