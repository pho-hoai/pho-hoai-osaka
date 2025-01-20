"use client";

import Ingredient_1 from "@/assets/ingredient/ingredient-1.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const diningSteps = [
  {
    description:
      " Nếm thử nước dùng trước khi thêm gia vị. Một tô phở ngon chuẩn vị phải có nước dùng đậm đà, đủ sức hấp dẫn ngay cả khi chưa cần thêm gia vị.",
  },
  {
    description:
      "Tùy theo khẩu vị, thêm các loại gia vị như chanh, tương ớt, tương đen, tỏi ngâm, giá đỗ… vào tô phở. Trộn đều và khuấy nhẹ để các hương vị hòa quyện.",
  },
  {
    description:
      "Ăn phở kèm món phụ như quẩy để tận hưởng sự đa dạng và phong phú của hương vị.",
  },
  {
    description:
      "Thưởng thức từng gắp phở, từng miếng thịt, kèm theo vài muỗng nước dùng. Cảm nhận sự cân bằng giữa các nguyên liệu cho đến khi gần cạn nước.",
  },
  {
    description:
      "Một tô phở đúng điệu là khi ăn xong, nước dùng vẫn giữ được độ ấm, đủ để thực khách húp cạn và cảm nhận hương vị trọn vẹn đến giọt cuối cùng.",
  },
];

export default function DiningExperience() {
  return (
    <section id="dining-experience" className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Hướng dẫn thưởng thức phở tại Phở Hoài
        </h2>
        <p className=" text-gray-600 mb-8">
          Tại Phở Hoài chi nhánh Việt Nam, khách hàng có thể trải nghiệm trọn
          vẹn hương vị với các gia vị đặc trưng như: tương ớt nhà làm, tỏi ngâm
          giấm được tự tay ủ, sa tế cay, tương đen, ớt thái lát, chanh tươi và
          các loại rau thơm ăn kèm. <br /> Trong khi đó, tại chi nhánh Phở Hoài
          Osaka, do những hạn chế trong khâu nguyên vật liệu, chúng tôi phục vụ
          các gia vị đi kèm như tương ớt Bắc nhà làm, tỏi ngâm giấm táo chế biến
          từ táo Nhật Bản, tương đen và chanh tươi. Dù giản đơn hơn, bộ gia vị
          tại đây vẫn đảm bảo mang đến hương vị hài hòa và độc đáo đúng chuẩn
          Phở Hoài.
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Cách ăn phở kiểu Phở Hoài:
                </h3>
                <ol className="space-y-4">
                  {diningSteps.map((step, index) => (
                    <li key={index} className="flex">
                      <span className="flex-shrink-0 w-8 h-8 bg-primaryYellow text-black rounded-full flex items-center justify-center mr-3 font-bold">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-md italic text-gray-500">
                  Đây chính là nghệ thuật thưởng thức phở theo phong cách Phở
                  Hoài – nơi mỗi tô phở là một trải nghiệm ẩm thực đầy tinh tế
                  và yêu thương!
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
                  // layout="fill"
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
