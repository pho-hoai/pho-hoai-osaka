"use client";

import GA from "@/assets/bowl/ga.jpg";
import GAN from "@/assets/bowl/gan.jpg";
import NAM from "@/assets/bowl/nam.jpg";
import TAI_LAN from "@/assets/bowl/tai-lan.jpg";
import TAI from "@/assets/bowl/tai.jpg";
import THAP_CAM from "@/assets/bowl/thap-cam.jpg";
import WAGYU from "@/assets/bowl/wagyu.jpg";
import AN_KEM from "@/assets/bowl/an-kem.jpeg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const menuItems = [
  {
    title: "menuDetail.items.0.title",
    image: TAI_LAN,
    description: "menuDetail.items.0.description",
  },
  {
    title: "menuDetail.items.1.title",
    image: TAI,
    description: "menuDetail.items.1.description",
  },
  {
    title: "menuDetail.items.2.title",
    image: NAM,
    description: "menuDetail.items.2.description",
  },
  {
    title: "menuDetail.items.3.title",
    image: WAGYU,
    description: "menuDetail.items.3.description",
  },
  {
    title: "menuDetail.items.4.title",
    image: GAN,
    description: "menuDetail.items.4.description",
  },
  {
    title: "menuDetail.items.5.title",
    image: GA,
    description: "menuDetail.items.5.description",
  },
  {
    title: "menuDetail.items.6.title",
    image: THAP_CAM,
    description: "menuDetail.items.6.description",
  },
  {
    title: "menuDetail.items.7.title",
    image: AN_KEM,
    description: "menuDetail.items.7.description",
  },
];

export default function MenuDetail() {
  const { t } = useTranslation();

  return (
    <section className="py-16 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("menuDetail.title")}
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={item.title}
              className="overflow-hidden bg-white shadow-md"
            >
              <CardContent className="p-0">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-[65%] p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-2 text-primary">
                      {t(item.title)}
                    </h3>
                    <p className="text-gray-600 mb-4">{t(item.description)}</p>
                  </div>
                  <div className="w-full md:w-[35%]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={t(item.title)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
