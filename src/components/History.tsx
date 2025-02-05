import Image from "next/image";
import history from "@/assets/history.jpg";
import { useTranslation } from "next-export-i18n";

export default function History() {
  const { t } = useTranslation();

  return (
    <section id="history" className="py-16 text-black bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-9/12 mb-8 md:mb-0 mx-auto">
            <Image
              src={history}
              alt="Restaurant history"
              width={400}
              height={500}
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("history.title")}
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              {t("history.description1")}
            </p>
            <p className="text-lg mb-4 text-gray-600">
              {t("history.description2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
