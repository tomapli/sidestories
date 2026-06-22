import posthog from "posthog-js";

import { env } from "~/env";

if (env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
  api_host: "/ingest",
    ui_host: env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  debug: env.NODE_ENV === "development",
  });
}
