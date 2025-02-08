"use client";

import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/hero.jpg";
import { TextAnimate } from "./ui/text-animate";
import { useTranslation } from "next-export-i18n";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Image
        src={hero}
        alt="Restaurant interior"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 font-arizonia"
        >
          {t("hero.title")}
        </TextAnimate>

        <p className="text-xl sm:text-2xl mb-6">
          {t("hero.subtitle")}
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          {t("hero.description")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="#menu"
            className="bg-primaryYellow  text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            {t("hero.menuButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
