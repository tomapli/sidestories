"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import posthog from "posthog-js";

type ConsentStatus = "pending" | "granted" | "denied" | "";

export function CookieConsentBanner() {
  const [consentGiven, setConsentGiven] = useState<ConsentStatus>("");
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setConsentGiven(posthog.get_explicit_consent_status());
  }, []);

  const handleAcceptCookies = () => {
    posthog.opt_in_capturing();
    setConsentGiven("granted");
    setSettingsOpen(false);
  };

  const handleDeclineCookies = () => {
    posthog.opt_out_capturing();
    setConsentGiven("denied");
    setSettingsOpen(false);
  };

  const showBanner = consentGiven === "pending" || settingsOpen;

  if (!consentGiven) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <div
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/12 bg-[#170b22]/95 p-4 text-[#fff7ee] shadow-[0_-24px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-5"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p
                id="cookie-consent-title"
                className="font-display text-lg font-bold"
              >
                Cookies a analytika
              </p>
              <p
                id="cookie-consent-description"
                className="mt-2 text-sm leading-6 text-[#fff7ee]/82 sm:text-base"
              >
                Používáme analytické cookies prostřednictvím PostHog k měření
                návštěvnosti a zlepšování webu. Data jsou zpracována v EU. Bez
                souhlasu cookies neukládáme; po odmítnutí měříme pouze anonymní
                počet návštěv. Více v{" "}
                <Link
                  href="/podminky-akce"
                  className="font-semibold text-[#ffb45f] underline decoration-[#ffb45f]/50 underline-offset-2 transition hover:text-[#ffd166]"
                >
                  podmínkách účasti
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleDeclineCookies}
                className="min-h-11 rounded-full border border-white/30 px-5 py-2.5 text-sm font-bold transition hover:bg-white/10"
              >
                Odmítnout
              </button>
              <button
                type="button"
                onClick={handleAcceptCookies}
                className="min-h-11 rounded-full bg-[#fff7ee] px-5 py-2.5 text-sm font-bold text-[#170b22] transition hover:bg-white"
              >
                Přijmout
              </button>
            </div>
          </div>
        </div>
      )}

      {consentGiven !== "pending" && !showBanner && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-4 left-4 z-40 rounded-full border border-[#211a16]/15 bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#62564d] shadow-sm backdrop-blur-sm transition hover:bg-white"
        >
          Nastavení cookies
        </button>
      )}
    </>
  );
}
