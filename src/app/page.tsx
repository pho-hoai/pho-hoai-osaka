"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import History from "@/components/History";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ChefSpotlight from "@/components/ChefSpotlight";
import DiningExperience from "@/components/DiningExperience";
import MenuDetail from "@/components/MenuDetail";
import FloatingMenu from "@/components/FloatingContact";
import OurProducts from "@/components/OurProduct";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Suspense fallback={<Loading />}>
        <Header />
        <main>
          <Hero />
          <History />
          <Menu />
          <ChefSpotlight />
          <MenuDetail />
          <DiningExperience />
          <Blog />
          <OurProducts />
        </main>
        <Footer />
        <FloatingMenu />
      </Suspense>
    </div>
  );
}
