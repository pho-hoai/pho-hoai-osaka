import type { Metadata } from "next";
import { Arizonia } from "next/font/google";
import "./globals.css";

const arizonia = Arizonia<"--font-arizonia">({
  variable: "--font-arizonia",
  subsets: ["vietnamese"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Phở Hoài 666",
  description: "Tinh hoa phở Việt, hương vị gia đình.",
  // ogType: 'website',
  // ogUrl: '',
  // ogImage: '/images/TOP/hero-image.jpg',
  // ogSiteName: '',
  // ogLocale: 'ja_jp',
  // keywords: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${arizonia.variable}  antialiased`}>{children}</body>
    </html>
  );
}
