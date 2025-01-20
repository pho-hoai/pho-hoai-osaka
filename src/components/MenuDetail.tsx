"use client";

import GA from "@/assets/bowl/ga.jpg";
import GAN from "@/assets/bowl/gan.jpg";
import NAM from "@/assets/bowl/nam.jpg";
import TAI_LAN from "@/assets/bowl/tai-lan.jpg";
import TAI from "@/assets/bowl/tai.jpg";
import THAP_CAM from "@/assets/bowl/thap-cam.jpg";
import WAGYU from "@/assets/bowl/wagyu.jpg";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const menuItems = [
  {
    title: "Phở tái lăn",
    image: TAI_LAN,
    description:
      "Món phở tái lăn sử dụng thịt bò Nhật A4, khi xào trên chảo nóng rực lửa với gừng tươi, đã tạo ra một hương thơm dịu dàng đầy quyến rũ. Khi kết hợp với hành lá xanh mướt và nước lèo đậm đà, món ăn không chỉ khiến người ta mê mẩn bởi mùi hương đặc trưng mà còn làm say lòng thực khách bởi sắc màu hấp dẫn. Từng miếng thịt mềm mại, đậm vị, hòa quyện trong hương vị tổng thể, chắc chắn sẽ là trải nghiệm ẩm thực khó quên.",
  },
  {
    title: "Phở tái",
    image: TAI,
    description:
      "Thịt bò Nhật A4 mềm mại, khi kết hợp với nước lèo chuẩn vị đặc trưng của thương hiệu Phở Hoài, đã tạo nên một tô phở tái hoàn hảo. Hương vị đậm đà, tinh tế hòa quyện trong từng sợi bánh phở và lát thịt bò tan ngay trong miệng, mang đến trải nghiệm ẩm thực khó quên. Một lần thưởng thức là một lần đọng lại trong lòng thực khách, khiến họ luôn mong muốn quay lại để cảm nhận hương vị tuyệt vời này.",
  },
  {
    title: "Phở nạm",
    image: NAM,
    description:
      "Phần bắp bò, dưới bàn tay tài hoa của đầu bếp Phở Hoài, được chế biến thành món thịt nạm mềm mại, thấm đượm hương thơm từ gia vị và nước lèo đặc trưng. Đặc biệt, món ăn không hề có mùi bò gây khó chịu, mà thay vào đó là sự hấp dẫn tinh tế trong từng thớ thịt. Đây chính là lựa chọn yêu thích của thực khách mọi lứa tuổi, từ người già đến trẻ nhỏ, nhờ hương vị hài hòa và dễ dàng chinh phục mọi khẩu vị.",
  },
  {
    title: "Phở bò wagyu A5",
    image: WAGYU,
    description:
      "Phở bò A5, sử dụng loại thịt bò Wagyu cao cấp nhất từ Nhật Bản, đã được Phở Hoài lựa chọn để phục vụ những thực khách sành ăn. Miếng thịt bò mềm mịn, tan ngay trong miệng, với phần mỡ béo ngậy nhưng không hề gây ngấy, tạo nên một trải nghiệm ẩm thực tuyệt vời. Được nuôi dưỡng bằng phương pháp đặc biệt, bò Wagyu Nhật mang đến chất lượng thớ thịt mà ngay cả những thị trường lớn như Mỹ và Úc cũng không thể sánh bằng. Sự kết hợp giữa phở truyền thống và loại thịt thượng hạng này đã nâng tầm món phở bò của Phở Hoài lên một đẳng cấp mới, khẳng định vị thế trong lòng thực khách yêu ẩm thực tinh tế.",
  },
  {
    title: "Phở gân",
    image: GAN,
    description:
      "Gân bò mềm là một trong những món đặc trưng tiêu biểu của Phở Hoài Osaka nói riêng và toàn hệ thống chi nhánh Phở Hoài nói chung. Với công thức hầm gân bò đặc biệt, miếng gân luôn giữ được độ mềm dẻo, trong suốt và không hề gây ngấy. Đặc biệt, gân bò tại Phở Hoài được tuyển chọn kỹ lưỡng ngay từ khâu nhập hàng, đảm bảo chất lượng cao nhất, nhưng cũng vì vậy mà số lượng luôn có hạn. Đây không chỉ là một món topping lý tưởng mà còn là nguồn collagen tự nhiên, khiến các tín đồ yêu phở khó lòng cưỡng lại sức hấp dẫn của nó.",
  },
  {
    title: "Phở gà",
    image: GA,
    description:
      "Phở gà tại Phở Hoài mang một phong cách đặc biệt khi vẫn sử dụng nước lèo ninh từ xương bò, tạo nên hương vị đậm đà và độc đáo. Chỉ sử dụng phần thịt đùi gà, món ăn đảm bảo độ mềm mại, không bở như thịt ức gà. Điểm đặc biệt hơn, thịt gà được luộc trực tiếp trong nồi nước lèo, giúp gia vị phở thấm đều vào từng thớ thịt. Nhờ đó, mỗi miếng thịt gà đều tỏa ra hương thơm đặc trưng, quyến rũ, khiến thực khách khó lòng quên được hương vị tinh tế này.",
  },
  {
    title: "Phở thập cẩm",
    image: THAP_CAM,
    description:
      "Phở thập cẩm tại Phở Hoài là sự kết hợp hoàn hảo của tất cả các loại topping, mang đến trải nghiệm ẩm thực phong phú và trọn vẹn. Từ miếng thịt bò mềm mại, gân bò dai giòn, đến phần nạm béo ngậy hay gà đậm đà hương vị, mỗi thành phần đều góp phần tạo nên một bản hòa ca cho vị giác. Thực khách sẽ được dẫn dắt qua từng cung bậc hương vị, từ nhẹ nhàng tinh tế đến đậm đà khó quên. Đây là món ăn mà bất cứ ai lần đầu đến quán cũng khó lòng bỏ qua.",
  },
];

export default function MenuDetail() {
  return (
    <section className="py-16 text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Thực đơn tại phở hoài Osaka :
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {menuItems.map((item, index) => (
            <Card
              key={item.title}
              className="overflow-hidden bg-white shadow-md"
            >
              <CardContent className="p-0">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-[65%] p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-2 text-primary">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  </div>
                  <div className="w-full md:w-[35%]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      // width={600}
                      // height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
