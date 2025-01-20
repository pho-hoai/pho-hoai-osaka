import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Header() {
  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.8]); 
  const headerPadding = useTransform(scrollY, [0, 200], [16, 0]); 

  return (
    <motion.header
      className="sticky w-full top-0 z-50 bg-white shadow-sm"
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
          <Image src={Logo} alt="Restaurant logo" width={100} height={100} />
        </motion.div>
        <p className="text-4xl font-bold text-primaryRed font-arizonia">Phở Hoài 666</p>
      </div>
        <a
          href="tel:(+81) 7084473456"
          className="bg-primaryRed hover:bg-red-700 text-white px-4 py-2 rounded-full flex items-center"
        >
          <Phone className="w-4 h-4 mr-2" />
          <span className="inline">Liên Hệ</span>
        </a>
      </div>
    </motion.header>
  );
}