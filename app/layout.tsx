import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@/components/Analytics";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "鬼々よろしく魁望蓮｜2027年、うらじゃ復活",
  description:
    "岡山の子ども踊り連「鬼々よろしく魁望蓮（おにおによろしく のぞみれん）」は、2027年うらじゃで復活します。小学1年生から中学3年生まで、100人の子どもたちが本気で輝ける場所を目指します。",
  keywords: [
    "鬼々よろしく魁望蓮",
    "おにおによろしくのぞみれん",
    "うらじゃ",
    "岡山",
    "子ども踊り連",
    "踊り子募集",
  ],
  applicationName: "鬼々よろしく魁望蓮",
  authors: [{ name: "鬼々よろしく魁望蓮" }],
  creator: "鬼々よろしく魁望蓮",
  alternates: { canonical: "/" },
  openGraph: {
    title: "鬼々よろしく魁望蓮｜2027年、うらじゃ復活",
    description: "7年の時を越えて再始動。子どもたちが本気で輝ける場所を、岡山にもう一度。",
    type: "website",
    locale: "ja_JP",
    siteName: "鬼々よろしく魁望蓮",
  },
  twitter: {
    card: "summary_large_image",
    title: "鬼々よろしく魁望蓮｜2027年、うらじゃ復活",
    description: "7年の時を越えて再始動。子どもたちが本気で輝ける場所を、岡山にもう一度。",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c9251c",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main-content">
          本文へ移動
        </a>
        <SiteHeader />
        <ScrollEffects />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
