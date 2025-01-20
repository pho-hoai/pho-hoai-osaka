import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primaryYellow text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-5xl font-bold mb-4 font-arizonia">Phở Hoài 666</h3>
            {/* <p className="mb-2">Kết nối với phở hoài 666</p> */}
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+818055491293" className="hover:text-primary">
                  （＋81）8055491293 ZALO
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+817084473456" className="hover:text-primary">
                  （＋81）7084473456
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+84918817112" className="hover:text-primary">
                  （＋84）918817112
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a
                  href="mailto:hinahome.jp@gmail.com"
                  className="hover:text-primary"
                >
                  hinahome.jp@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Địa chỉ</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>大阪市西成区南津守3-10-16</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>Trụ sở: 大阪市西成区松3-11-22</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
