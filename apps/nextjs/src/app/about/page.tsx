import Image from "next/image";
import Link from "next/link";

import { AboutCTA } from "./about-cta";

function FounderCard(props: {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  secondaryImage: string;
  secondaryAlt: string;
  accent: string;
}) {
  return (
    <article className="grid gap-4 lg:grid-cols-[0.82fr_1fr] lg:items-stretch">
      <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#170b22]">
        <Image
          src={props.image}
          alt={props.imageAlt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(15,5,25,0.9)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-[#fff7ee]">
          <h2 className="font-display text-5xl leading-none font-extrabold">
            {props.name}
          </h2>
          <p className="mt-2 text-lg font-bold" style={{ color: props.accent }}>
            {props.role}
          </p>
        </div>
      </div>
      <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-[#170b22]">
        <Image
          src={props.secondaryImage}
          alt={props.secondaryAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-[center_38%]"
        />
      </div>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f3eee8] text-[#211a16]">
      <section className="bg-[#170b22] px-4 py-5 text-[#fff7ee] sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <nav className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-display text-sm font-bold tracking-[0.16em] uppercase"
            >
              Side Stories
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/15"
            >
              Akce
            </Link>
          </nav>

          <div className="grid gap-8 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-24">
            <div>
              <p className="text-sm font-bold tracking-[0.18em] text-[#ffb45f] uppercase">
                O nas
              </p>
              <h1 className="font-display mt-4 text-5xl leading-[0.92] font-extrabold tracking-normal sm:text-7xl">
                Kdo za tim stoji
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#fff7ee]/82 sm:text-xl sm:leading-9">
              Chteli jsme poznavat nove lidi, ale vetsina akci tomu neni moc
              prizpusobena. Tak jsme vytvorili Side Stories, akce, kde se
              spolecny zazitek stane prvni vetou konverzace.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-18">
        <div className="mx-auto grid max-w-6xl gap-5">
          <FounderCard
            name="Tom"
            role="Ten, co vsechno dotahne do konce."
            image="/side-stories/tom-bridge-web.jpg"
            imageAlt="Tom ze Side Stories"
            secondaryImage="/side-stories/tom-boulder-web.jpg"
            secondaryAlt="Tom na boulderingu"
            accent="#ffce8a"
          />
          <FounderCard
            name="Kacka"
            role="Holka pro kazdou srandu."
            image="/side-stories/kacka-main.webp"
            imageAlt="Kacka ze Side Stories"
            secondaryImage="/side-stories/kacka-secondary.webp"
            secondaryAlt="Kacka na stene"
            accent="#ff9ec0"
          />
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-10 lg:pb-20">
        <div className="mx-auto grid max-w-6xl gap-6 overflow-hidden rounded-[2rem] bg-[#170b22] p-4 text-[#fff7ee] shadow-2xl sm:p-6 lg:grid-cols-[0.72fr_1fr] lg:p-8">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] bg-black">
            <Image
              src="/side-stories/landing-bottom.webp"
              alt="Side Stories energie a pohyb"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-2 sm:p-4 lg:p-8">
            <p className="text-sm font-bold tracking-[0.18em] text-[#ffb45f] uppercase">
              Takhle to u nas vypada
            </p>
            <h2 className="font-display mt-4 text-4xl leading-none font-extrabold sm:text-5xl">
              Prave pratelstvi casto zacina mimo komfortni zonu.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#fff7ee]/82">
              Side Stories je pro lidi, kteri chteji zazit mesto jinak a potkat
              nekoho noveho bez trapneho networkingu. Dostanes tym, sidequesty a
              duvod zacit mluvit.
            </p>
            <AboutCTA />
          </div>
        </div>
      </section>
    </main>
  );
}
