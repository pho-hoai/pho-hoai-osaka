import Image from "next/image";
import chef_1 from "@/assets/chef/chef-1.jpg";

export default function ChefSpotlight() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Giới thiệu Đầu bếp Đào Thanh Hoài
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/3">
            <Image
              src={chef_1}
              alt="Chef Portrait"
              width={400}
              height={400}
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">
              Người gìn giữ hương vị phở truyền thống
            </h3>
            <p className="text-lg mb-6 text-gray-600">
              Đầu bếp Đào Thanh Hoài, với hơn 20 năm kinh nghiệm trong lĩnh vực
              nấu phở truyền thống, là người đứng sau những tô phở chuẩn vị của
              thương hiệu Phở Hoài. Mang trong mình niềm đam mê mãnh liệt và cái
              tâm với nghề, anh không ngừng nỗ lực để gìn giữ và phát triển
              hương vị phở gia truyền qua từng bát phở phục vụ thực khách. Từng
              công đoạn, từ chọn lựa nguyên liệu đến chế biến nước lèo hay xử lý
              từng phần thịt, đều được đầu bếp Hoài thực hiện với sự tỉ mỉ và
              tâm huyết.
            </p>
            <blockquote className="italic text-black border-l-4 border-primaryYellow pl-4 mb-6 font-medium">
              Nấu phở là gửi gắm yêu thương
            </blockquote>
            <p className="text-lg text-gray-600">
              Với triết lý “nấu phở là gửi gắm yêu thương,” anh cam kết mang đến
              cho khách hàng những tô phở không chỉ thơm ngon, đậm đà mà còn
              trọn vẹn tinh thần và giá trị văn hóa Việt Nam. Hãy cùng đến và
              thưởng thức để cảm nhận sự khác biệt trong từng hương vị, nơi tinh
              hoa của phở truyền thống được thăng hoa qua bàn tay tài hoa của
              đầu bếp Đào Thanh Hoài!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
