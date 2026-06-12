"use client";

import posthog from "posthog-js";

import { LumaCheckoutButton } from "./luma-checkout-button";

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

export function CTACard() {
  return (
    <div className="rounded-[2rem] border border-white/18 bg-[#13091f]/72 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
      <LumaCheckoutButton page="home" />
      <div className="mt-3 grid grid-cols-2 gap-3">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/12 px-3 py-3 text-sm font-bold transition hover:bg-white/20"
          aria-label="Side Stories Instagram"
          onClick={() =>
            posthog.capture("instagram_link_clicked", { page: "home" })
          }
        >
          <InstagramIcon />
          Instagram
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/12 px-3 py-3 text-sm font-bold transition hover:bg-white/20"
          aria-label="Side Stories WhatsApp"
          onClick={() =>
            posthog.capture("whatsapp_link_clicked", { page: "home" })
          }
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
      <p className="mt-4 text-center text-sm text-[#fff7ee]/75">
        Sraz u pomniku Josefa Manesa na Alsove nabrezi.
      </p>
    </div>
  );
}
