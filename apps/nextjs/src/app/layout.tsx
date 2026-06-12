import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";

import "~/app/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sidestories.cz"),
  title: "Side Stories | Lost in Prag",
  description:
    "Pruchod Prahou, sidequesty, novi lide a vystup z komfortni zony.",
  applicationName: "Side Stories",
  authors: [{ name: "Side Stories" }],
  creator: "Side Stories",
  publisher: "Side Stories",
  openGraph: {
    title: "Side Stories | Lost in Prag",
    description:
      "Pruchod Prahou, sidequesty, novi lide a vystup z komfortni zony.",
    url: "https://sidestories.cz",
    siteName: "Side Stories",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@side.stories.cz",
    creator: "@side.stories.cz",
  },
};

export const viewport: Viewport = {
  themeColor: "#170b22",
};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body
        className={`${hanken.variable} ${bricolage.variable} min-h-screen bg-[#f3eee8] font-sans text-[#211a16] antialiased`}
      >
        {props.children}
      </body>
    </html>
  );
}
