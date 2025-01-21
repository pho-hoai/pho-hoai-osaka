import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/hero.jpg";
import { TextAnimate } from "./ui/text-animate";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <Image
        src={hero}
        alt="Restaurant interior"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 font-arizonia"
        >
          Phở Hoài 666
        </TextAnimate>

        <p className="text-xl sm:text-2xl mb-6">
          Tinh hoa phở Việt, hương vị gia đình.
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Phở Hoài 666 là nơi gìn giữ hương vị phở truyền thống Việt Nam.
          <br />
          Từng bát phở nóng hổi là kết tinh của tình yêu và tâm huyết, mang đến
          trải nghiệm ẩm thực trọn vẹn cho mọi thực khách.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            href="#menu"
            className="bg-primaryYellow  text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Xem thực đơn
          </Link>
        </div>
        {/* <div className="mt-12 flex justify-center space-x-6">
          <div className="text-center">
            <p className="text-3xl font-bold">4.9</p>
            <p className="text-sm">500+ Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">20+</p>
            <p className="text-sm">Years of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">30+</p>
            <p className="text-sm">Signature Dishes</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
