import type { Metadata } from "next";
import { Arizonia } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";

const arizonia = Arizonia<"--font-arizonia">({
  variable: "--font-arizonia",
  subsets: ["vietnamese"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Phở Hoài 666",
  description: "ベトナムのフォーの精髄、家庭の味。",
  openGraph: {
    type: "website",
    url: "",
    images: [
      {
        url: "/images/TOP/hero-image.jpg",
        width: 800,
        height: 600,
        alt: "Phở Hoài 666",
      },
    ],
    siteName: "Phở Hoài 666",
    locale: "ja_JP",
  },
  keywords: [
    "フォー",
    "ベトナム料理",
    "Phở Hoài",
    "大阪",
    "ベトナムレストラン",
    "アジア料理",
    "ベトナムフォー",
    "エスニック料理",
    "ベトナム伝統料理",
    "フォーホアイ",
    "Pho",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleTagManager gtmId="GTM-KVTRC924" />
      <body className={`${arizonia.variable} antialiased`}>{children}</body>
    </html>
  );
}
