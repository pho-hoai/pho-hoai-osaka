"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Menu1 from "@/assets/menu/1.png";
import Menu2 from "@/assets/menu/2.png";
import Menu3 from "@/assets/menu/3.png";
import Menu4 from "@/assets/menu/4.png";
import Menu5 from "@/assets/menu/5.png";
import Menu6 from "@/assets/menu/6.png";
import Menu7 from "@/assets/menu/7.png";
import { useTranslation } from "next-export-i18n";

const menuImages = [Menu1, Menu2, Menu3, Menu4, Menu5, Menu6, Menu7];

export default function Menu() {
  const { t } = useTranslation();

  return (
    <section id="menu" className="py-12 bg-stone-100 scroll-mt-16 md:scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">
          {t("menu.title")}
        </h2>
        <Carousel className="max-w-2xl mx-auto">
          <CarouselContent>
            {menuImages.map((src, index) => (
              <CarouselItem key={index}>
                <Card className="border-none">
                  <CardContent className="flex aspect-[1414/2000] items-center justify-center p-0">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Menu page ${index + 1}`}
                      width={600}
                      height={800}
                      className="object-cover rounded-lg shadow-xl"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white text-black" />
          <CarouselNext className="right-4 bg-white text-black" />
        </Carousel>
      </div>
    </section>
  );
}
