"use client";

import posthog from "posthog-js";

const START_MAP_URL = "https://maps.app.goo.gl/KveAJP7a8HSzxFky8";

export function MapLink() {
  return (
    <a
      href={START_MAP_URL}
      target="_blank"
      rel="noreferrer"
      className="rounded-2xl border border-white/16 bg-white/10 p-4 font-semibold transition hover:bg-white/15"
      onClick={() => posthog.capture("map_link_clicked", { page: "home" })}
    >
      Start: pomnik Josefa Manesa
    </a>
  );
}
