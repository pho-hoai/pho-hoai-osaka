// import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="sticky w-full top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center justify-center space-x-4">
          <Image
            src={Logo}
            alt="Restaurant logo"
            width={100}
            height={100}
            objectFit="contain"
          />
          <div>
            <p className="text-2xl font-bold text-orange-500">Phở Hoài 666</p>
          </div>
        </div>
        {/* <nav className="hidden md:flex space-x-4">
          <Link href="#menu" className="text-orange-700 hover:text-orange-900">
            Menu
          </Link>
          <Link
            href="#history"
            className="text-orange-700 hover:text-orange-900"
          >
            Our History
          </Link>

          <Link
            href="#stories"
            className="text-orange-700 hover:text-orange-900"
          >
            Stories
          </Link>
          <Link href="#blog" className="text-orange-700 hover:text-orange-900">
            Blog
          </Link>
        </nav> */}

        <a
          href="https://line.me/R/ti/p/@your-line-id"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center"
        >
          <Phone className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">Contact on LINE</span>
        </a>
      </div>
    </header>
  );
}
