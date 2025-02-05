"use client";

import Logo from "@/assets/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 600], [1, 0.7]);
  const headerPadding = useTransform(scrollY, [0, 600], [16, 0]);
  const { t } = useTranslation();

  return (
    <motion.header
      className="sticky w-full top-0 z-50 bg-white shadow-md"
      style={{
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
      initial={{ height: "auto" }}
      animate={{ transition: { duration: 0.3 } }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center justify-center space-x-4">
          <motion.div style={{ scale: logoScale }}>
            <Image
              src={Logo}
              alt="Restaurant logo"
              className="w-20 h-20 md:w-28 md:h-28"
            />
          </motion.div>
          <p className="text-3xl md:text-4xl font-bold text-primaryRed font-arizonia">
            {t("header.brandName")}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  );
}
