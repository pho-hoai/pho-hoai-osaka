"use client";

import BUN from "@/assets/products/bun-tuoi.png";
import GAO from "@/assets/products/gao.png";
import PHO from "@/assets/products/pho-tuoi.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

const products = [
  {
    name: "products.1.name",
    description: "products.1.description",
    price: "¥1,200",
    image: BUN,
  },
  {
    name: "products.2.name",
    description: "products.2.description",
    price: "¥800",
    image: PHO,
  },
  {
    name: "products.3.name",
    description: "products.3.description",
    price: "¥500",
    image: GAO,
  },
];

export default function OurProducts() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {t("ourProducts.title")}
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <Card className="flex h-full flex-col border">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={t(product.name)}
                    className="max-h-[200px] mx-auto object-cover rounded-t-lg py-4"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {t(product.name)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-foreground mb-4">
                      {t(product.description)}
                    </p>
                    {/* <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-secondary">
                          {product.price}
                        </span>
                        <Button variant="outline">Add to Cart</Button>
                      </div> */}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="flex flex-col h-full justify-center items-center p-6 border">
                <CardTitle className="text-2xl text-primary mb-4">
                  {t("ourProducts.comingSoon.title")}
                </CardTitle>
                <p className="text-foreground text-center">
                  {t("ourProducts.comingSoon.description")}
                </p>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 bg-white text-black" />
          <CarouselNext className="right-2 md:-right-12 bg-white text-black" />
        </Carousel>
      </div>
    </section>
  );
}
