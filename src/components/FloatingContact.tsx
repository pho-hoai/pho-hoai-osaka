"use client";

import { Phone } from "lucide-react";
import { useTranslation } from "next-export-i18n";


import { cn } from "@/lib/utils";

export default function FloatingContact() {
  const { t } = useTranslation();

  return (
    <div className="fixed left-0 md:left-auto right-3 bottom-3">
      <div className="grid grid-cols-1 w-7/12 md:w-full mx-auto">
        <a  href="tel:(+81) 7084473456" className="group cursor-pointer rounded-full border-4 border-red-500 border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100 ">
          <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-full bg-primaryRed px-10 py-4 font-bold text-white">
            <Phone className="transition-all group-hover:translate-x-2 group-hover:scale-125 " />
            {t("header.contact")}
            <div
              className={cn(
                "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]"
              )}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
