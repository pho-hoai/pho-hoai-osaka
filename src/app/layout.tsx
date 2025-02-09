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
  description: "Phở Hoài 666は、ベトナムの伝統的なフォーの味を守る場所です。各ボウルの熱々のフォーは、愛と情熱の結晶であり、すべてのお客様に完全な食の体験を提供します。",
  openGraph: {
    type: "website",
    url: "https://phohoai666.org/",
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
