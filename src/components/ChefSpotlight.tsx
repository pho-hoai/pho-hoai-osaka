"use client";

import Image from "next/image";
import chef_1 from "@/assets/chef/chef-1.jpg";
import { useTranslation } from "next-export-i18n";

export default function ChefSpotlight() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("chefSpotlight.title")}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/3">
            <Image
              src={chef_1}
              alt="Chef Portrait"
              width={400}
              height={400}
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">
              {t("chefSpotlight.subtitle")}
            </h3>
            <p className="text-lg mb-6 text-gray-600">
              {t("chefSpotlight.description1")}
            </p>
            <blockquote className="italic text-black border-l-4 border-primaryYellow pl-4 mb-6 font-medium">
              {t("chefSpotlight.quote")}
            </blockquote>
            <p className="text-lg text-gray-600">
              {t("chefSpotlight.description2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
