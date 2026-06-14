import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CTACard } from "./_components/cta-card";
import { MapLink } from "./_components/map-link";
import {
  createEventJsonLd,
  createOrganizationJsonLd,
  createWebsiteJsonLd,
  event,
  siteUrl,
} from "~/lib/seo";

export const metadata: Metadata = {
  title: `${event.name} | Side Stories`,
  description: event.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Lost in Prague",
    "Side Stories",
    "akce Praha",
    "seznamovací akce Praha",
    "sidequesty Praha",
    "městská hra Praha",
  ],
  openGraph: {
    title: `${event.name} | Side Stories`,
    description: event.description,
    url: siteUrl,
    siteName: "Side Stories",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: event.image,
        width: 1200,
        height: 630,
        alt: "Praha při západu slunce s Karlovým mostem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${event.name} | Side Stories`,
    description: event.description,
    images: [event.image],
  },
};

const structuredData = [
  createOrganizationJsonLd(),
  createWebsiteJsonLd(),
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: `${event.name} | Side Stories`,
    description: event.description,
    inLanguage: "cs-CZ",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#event`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: event.image,
    },
  },
  createEventJsonLd(),
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f3eee8] text-[#211a16]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative min-h-screen px-4 py-5 text-[#fff7ee] sm:px-6 lg:px-10">
        <Image
          src="/side-stories/landing-cta.webp"
          alt="Praha při západu slunce s Karlovým mostem"
          fill
          priority
          sizes="100vw"
          quality={82}
          className="object-cover object-[center_45%]"
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
                  Lost in Prague
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-7 font-medium text-[#fff7ee]/90 sm:text-2xl sm:leading-9">
                  Pruchod Prahou, plneni sidequestu, poznavani novych lidi a
                  vystup z komfortni zony.
                </p>
              </div>

              <CTACard />
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
              src="/side-stories/landing-bottom.webp"
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
              <MapLink />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
