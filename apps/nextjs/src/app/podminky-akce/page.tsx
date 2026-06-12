import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podmínky účasti | Lost in Prague",
  description: "Podmínky účasti na akci Lost in Prague.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const sections = [
  {
    title: "1. Vstupné a vrácení lístků",
    items: [
      "Cena vstupného je 150 Kč za osobu.",
      "Lístek lze vrátit nejpozději do 3 dnů od jeho zakoupení a zároveň nejpozději 3 dny před konáním akce. Obě podmínky musí být splněny současně.",
      "V ostatních případech se vstupné nevrací.",
      "V případě jakéhokoli problému se účastník může obrátit na organizátory prostřednictvím WhatsApp skupiny, případně přímo na organizátory.",
      "Pořadatelé si vyhrazují právo akci zrušit, přesunout nebo upravit její program (např. z důvodu počasí, nízkého počtu účastníků nebo jiných okolností). Při zrušení akce ze strany pořadatele bude vstupné vráceno.",
    ],
  },
  {
    title: "2. Účast na vlastní nebezpečí a odpovědnost",
    items: [
      "Účast na akci je dobrovolná a každý účastník se jí účastní na vlastní nebezpečí a odpovědnost.",
      "Pořadatelé neodpovídají za úrazy, zranění, újmu na zdraví ani za škody na majetku vzniklé v souvislosti s účastí na akci.",
      "Účastníci se po Praze pohybují samostatně a jsou povinni dodržovat právní předpisy, dopravní předpisy a pokyny pořadatelů.",
      "Pořadatelé neodpovídají za ztrátu nebo odcizení osobních věcí účastníků.",
      "Akce je určena osobám starším 17 let.",
    ],
  },
  {
    title: "3. Úkoly (sidequesty)",
    items: [
      "Plnění úkolů je zcela dobrovolné. Účastník je plní podle vlastního uvážení a může kterýkoli úkol kdykoli odmítnout bez jakéhokoli postihu.",
      "Při plnění úkolů nesmí účastníci porušovat právní předpisy, obtěžovat či ohrožovat jiné osoby, vstupovat na zakázaná místa ani jakkoli ohrožovat sebe nebo své okolí.",
    ],
  },
  {
    title: "4. Chování účastníků",
    items: [
      "Na akci platí pravidlo vzájemného respektu. Pořadatelé uplatňují nulovou toleranci vůči obtěžování, diskriminaci, agresi a násilí.",
      "Pořadatelé si vyhrazují právo z akce vyloučit účastníka, který závažně narušuje její průběh, chová se agresivně nebo je pod vlivem návykových látek, a to bez nároku na vrácení vstupného.",
    ],
  },
  {
    title: "5. Fotografie a video",
    items: [
      "Na akci budou pořizovány fotografie a videozáznamy, které mohou být zveřejněny na sociálních sítích pořadatele (zejména na Instagramu).",
      "Účastí na akci bere účastník tuto skutečnost na vědomí. Pokud si účastník nepřeje být zachycen, sdělí to organizátorům, kteří mu vyhoví v rámci svých možností.",
    ],
  },
  {
    title: "6. Ochrana osobních údajů (GDPR)",
    intro:
      "Správcem osobních údajů je Tomáš Protiva, IČO 21650977, se sídlem Boloňská 309/22, Horní Měcholupy, 109 00 Praha.",
    items: [
      "Osobní údaje jsou zpracovávány pro účely organizace akce a pro následné oslovení účastníků s nabídkami dalších akcí.",
      "Příchodem na akci účastník souhlasí se zasíláním nabídek.",
      "Účastník může kdykoli požádat o výmaz svých osobních údajů a o ukončení kontaktování. Žádost lze podat prostřednictvím kontaktů uvedených níže.",
    ],
  },
];

export default function EventTermsPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-8 text-[#f7f1e9] sm:px-6 lg:px-10">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-[#2f73bd] pb-7 text-center">
          <Link
            href="/"
            className="font-display text-sm font-bold tracking-[0.16em] text-[#2f73bd] uppercase"
          >
            Side Stories
          </Link>
          <h1 className="font-display mt-4 text-4xl leading-none font-extrabold text-[#2f73bd] sm:text-5xl">
            LOST IN PRAGUE
          </h1>
          <p className="mt-2 text-sm font-semibold text-[#8f8f8f] sm:text-base">
            Praha • středa 24. 6. 2026 • sraz 16:30 na Alšově nábřeží u sochy
          </p>
        </header>

        <section className="pt-10 text-base leading-8 text-[#d8d8d8] sm:text-lg">
          <h2 className="font-display text-2xl font-extrabold text-[#2f73bd] sm:text-3xl">
            Podmínky účasti na akci
          </h2>
          <p className="mt-5">
            Lost in Prague je akce spočívající v průchodu Prahou, plnění úkolů
            (tzv. sidequestů), poznávání nových lidí a vykročení z komfortní
            zóny. Účastníci se rozdělí do menších týmů, které se během trasy
            potkávají a mísí, a na závěr se společně sejdou na jednom posezení.
            Účastí na akci účastník potvrzuje, že se s těmito podmínkami
            seznámil a souhlasí s nimi.
          </p>
        </section>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-extrabold text-[#2f73bd] sm:text-2xl">
                {section.title}
              </h2>
              {section.intro ? (
                <p className="mt-4 text-base leading-8 text-[#d8d8d8] sm:text-lg">
                  {section.intro}
                </p>
              ) : null}
              <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-[#d8d8d8] sm:text-lg sm:leading-8">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-12 border-t border-[#2f73bd]/70 pt-8">
          <h2 className="font-display text-xl font-extrabold text-[#2f73bd] sm:text-2xl">
            7. Kontakt a další informace
          </h2>
          <dl className="mt-4 grid gap-3 text-base leading-7 text-[#d8d8d8] sm:text-lg">
            <div>
              <dt className="font-semibold text-[#f7f1e9]">Instagram</dt>
              <dd>instagram.com/side.stories.cz</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#f7f1e9]">
                Telefonní kontakt na organizátora
              </dt>
              <dd>+420735120530</dd>
            </div>
          </dl>
          <p className="mt-8 text-sm font-semibold text-[#8f8f8f]">
            Tyto podmínky jsou platné pro akci konanou dne 24. 6. 2026.
          </p>
        </section>
      </article>
    </main>
  );
}
