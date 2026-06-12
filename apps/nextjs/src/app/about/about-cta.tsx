"use client";

import posthog from "posthog-js";

const REGISTER_URL = "https://chat.whatsapp.com/BzqGCZUh4Ke5bYZ9FffNjV";
const INSTAGRAM_URL = "https://www.instagram.com/side.stories.cz";
const WHATSAPP_URL = "https://chat.whatsapp.com/BzqGCZUh4Ke5bYZ9FffNjV";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5">
      <path
        d="M4 20l1.4-4.1A8 8 0 1 1 8.1 18.6L4 20z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AboutCTA() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noreferrer"
        className="font-display flex min-h-12 items-center justify-center rounded-full bg-[#fff7ee] px-5 py-3 text-lg font-bold text-[#170b22] transition hover:bg-white sm:col-span-3"
        onClick={() =>
          posthog.capture("registration_clicked", { page: "about" })
        }
      >
        Registrovat se -&gt;
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-3 font-bold transition hover:bg-white/15 sm:col-span-1"
        onClick={() =>
          posthog.capture("instagram_link_clicked", { page: "about" })
        }
      >
        <InstagramIcon />
        Instagram
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-3 font-bold transition hover:bg-white/15 sm:col-span-2"
        onClick={() =>
          posthog.capture("whatsapp_link_clicked", { page: "about" })
        }
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    </div>
  );
}
