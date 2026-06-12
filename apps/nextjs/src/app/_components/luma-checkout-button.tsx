"use client";

import posthog from "posthog-js";

const LUMA_EVENT_URL = "https://luma.com/event/evt-8VCNJC3sdOnrctC";
const LUMA_EVENT_ID = "evt-8VCNJC3sdOnrctC";

const buttonClassName =
  "font-display flex min-h-14 w-full items-center justify-center rounded-full bg-[#fff7ee] px-6 py-4 text-xl font-bold text-[#170b22] shadow-lg transition hover:translate-y-[-1px] hover:bg-white";

export function LumaCheckoutButton(props: {
  page: "home" | "about";
  className?: string;
}) {
  return (
    <a
      href={LUMA_EVENT_URL}
      className={[buttonClassName, props.className].filter(Boolean).join(" ")}
      data-luma-action="checkout"
      data-luma-event-id={LUMA_EVENT_ID}
      onClick={() =>
        posthog.capture("registration_clicked", { page: props.page })
      }
    >
      Registrovat se
      <span className="ml-2" aria-hidden="true">
        -&gt;
      </span>
    </a>
  );
}
