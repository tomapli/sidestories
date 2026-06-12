import Image from "next/image";
import Link from "next/link";

const REGISTER_URL = "https://chat.whatsapp.com/BzqGCZUh4Ke5bYZ9FffNjV";
const INSTAGRAM_URL = "https://www.instagram.com/side.stories.cz";
const WHATSAPP_URL = "https://chat.whatsapp.com/BzqGCZUh4Ke5bYZ9FffNjV";
const START_MAP_URL = "https://maps.app.goo.gl/KveAJP7a8HSzxFky8";
const END_MAP_URL = "https://maps.app.goo.gl/9ZL2Zw7U5M6BLoPk6";

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

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3eee8] text-[#211a16]">
      <section className="relative min-h-screen px-4 py-5 text-[#fff7ee] sm:px-6 lg:px-10">
        <Image
          src="/side-stories/tom-bridge-web.jpg"
          alt="Praha během akce Side Stories"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,11,34,0.28)_0%,rgba(23,11,34,0.2)_35%,rgba(118,27,70,0.68)_72%,rgba(18,8,28,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,114,60,0.45),rgba(42,16,74,0.06)_45%,rgba(17,87,83,0.28))]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-2.5rem)] w-full max-w-6xl flex-col">
          <nav className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-display text-sm font-bold tracking-[0.16em] uppercase"
            >
              Side Stories
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/35 bg-black/20 px-4 py-2 text-sm font-semibold backdrop-blur-md transition hover:bg-white/15"
            >
              O nas
            </Link>
          </nav>

          <div className="flex flex-1 items-end pt-20 pb-6 lg:items-center lg:pb-0">
            <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                  <span className="size-2 rounded-full bg-[#ffd166] shadow-[0_0_18px_#ffd166]" />
                  Streda 24. 6. v 16:30
                </p>
                <h1 className="font-display text-[4.5rem] leading-[0.86] font-extrabold tracking-normal sm:text-[6.8rem] lg:text-[8.5rem]">
                  Lost in Prag
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-7 font-medium text-[#fff7ee]/90 sm:text-2xl sm:leading-9">
                  Pruchod Prahou, plneni sidequestu, poznavani novych lidi a
                  vystup z komfortni zony.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/18 bg-[#13091f]/72 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display flex min-h-14 items-center justify-center rounded-full bg-[#fff7ee] px-6 py-4 text-xl font-bold text-[#170b22] shadow-lg transition hover:translate-y-[-1px] hover:bg-white"
                >
                  Registrovat se
                  <span className="ml-2" aria-hidden="true">
                    -&gt;
                  </span>
                </a>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/12 px-3 py-3 text-sm font-bold transition hover:bg-white/20"
                    aria-label="Side Stories Instagram"
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
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                </div>
                <p className="mt-4 text-center text-sm text-[#fff7ee]/75">
                  Sraz u pomniku Josefa Manesa na Alsove nabrezi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {[
            [
              "16:30",
              "Small talk",
              "Prichod, seznameni a rozdeleni do mensich tymu.",
            ],
            [
              "17:00",
              "Start hry",
              "Oficialni zahajeni a prvni sidequesty napric Prahou.",
            ],
            [
              "19:30",
              "Konec hry",
              "Spolecne posezeni, neco dobreho a dalsi seznamovani.",
            ],
          ].map(([time, title, text]) => (
            <div
              key={time}
              className="rounded-[1.6rem] border border-[#211a16]/10 bg-white/65 p-6 shadow-[0_18px_50px_-32px_rgba(33,26,22,0.7)]"
            >
              <p className="font-display text-5xl font-extrabold text-[#bd2f62]">
                {time}
              </p>
              <h2 className="font-display mt-5 text-2xl font-bold">{title}</h2>
              <p className="mt-2 text-base leading-7 text-[#62564d]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-10 lg:pb-20">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#170b22] text-[#fff7ee] shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[360px]">
            <Image
              src="/side-stories/kacka-climb-web.jpg"
              alt="Side Stories energie a pohyb"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,11,34,0.05),rgba(23,11,34,0.55))]" />
          </div>
          <div className="p-6 sm:p-9 lg:p-12">
            <p className="text-sm font-bold tracking-[0.18em] text-[#ffb45f] uppercase">
              Co te ceka
            </p>
            <h2 className="font-display mt-4 text-4xl leading-none font-extrabold sm:text-5xl">
              Mesto jako hriste. Lidi jako hlavni pribeh.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#fff7ee]/82">
              Tymy se budou michat, potkavat a postupne se probojovavat Prahou.
              Nebude to networking v obleku. Bude to lehce divne, trochu
              dobrodruzny a presne tak akorat mimo komfortni zonu.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={START_MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/16 bg-white/10 p-4 font-semibold transition hover:bg-white/15"
              >
                Start: pomnik Josefa Manesa
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
