import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";

import "~/app/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Side Stories | Lost in Prague",
  description:
    "Pruchod Prahou, sidequesty, novi lide a vystup z komfortni zony.",
  openGraph: {
    title: "Side Stories | Lost in Prague",
    description:
      "Pruchod Prahou, sidequesty, novi lide a vystup z komfortni zony.",
    url: "https://sidestories.cz",
    siteName: "Side Stories",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hanken.variable} ${bricolage.variable} min-h-screen bg-[#f3eee8] font-sans text-[#211a16] antialiased`}
      >
        {props.children}
      </body>
    </html>
  );
}
