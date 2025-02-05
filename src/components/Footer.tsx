"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "next-export-i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primaryYellow text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-5xl font-bold mb-4 font-arizonia">{t("footer.title")}</h3>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("footer.contactTitle")}</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+818055491293" className="hover:text-primary">
                  {t("footer.phone1")}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+817084473456" className="hover:text-primary">
                  {t("footer.phone2")}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+84918817112" className="hover:text-primary">
                  {t("footer.phone3")}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a
                  href="mailto:hinahome.jp@gmail.com"
                  className="hover:text-primary"
                >
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("footer.addressTitle")}</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>{t("footer.address1")}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>{t("footer.address2")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
