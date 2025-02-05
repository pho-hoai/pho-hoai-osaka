"use client";

import Ingredient_1 from "@/assets/ingredient/ingredient-1.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function DiningExperience() {
  const { t } = useTranslation();

  const diningSteps = [
    t("diningExperience.steps.0"),
    t("diningExperience.steps.1"),
    t("diningExperience.steps.2"),
    t("diningExperience.steps.3"),
    t("diningExperience.steps.4"),
  ];

  return (
    <section id="dining-experience" className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {t("diningExperience.title")}
        </h2>
        <p className=" text-gray-600 mb-8">
          {t("diningExperience.description")}
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  {t("diningExperience.stepsTitle")}
                </h3>
                <ol className="space-y-4">
                  {diningSteps.map((step, index) => (
                    <li key={index} className="flex">
                      <span className="flex-shrink-0 w-8 h-8 bg-primaryYellow text-black rounded-full flex items-center justify-center mr-3 font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-gray-600">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-md italic text-gray-500">
                  {t("diningExperience.last")}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-1/2 my-auto p-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src={Ingredient_1 || "/placeholder.svg"}
                  alt={`Dining experience step`}
                  objectFit="cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
