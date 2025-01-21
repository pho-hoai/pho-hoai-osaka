import Image from "next/image";
import history from "@/assets/history.jpg";

export default function History() {
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
              Lịch sử quán 📖
            </h2>
            <p className="text-lg mb-4 text-gray-600">
              Phở Hoài, từ một quán nhỏ bên vỉa hè Sài Gòn những năm đầu thế kỷ
              21, nay đã trở thành điểm đến lý tưởng cho các tín đồ yêu phở.
              Khởi nguồn từ niềm đam mê mãnh liệt với món phở, chúng tôi luôn
              gìn giữ trọn vẹn hương vị gia truyền và tinh hoa văn hóa ẩm thực
              qua nhiều thế hệ. Hành trình phát triển của Phở Hoài không chỉ là
              sự mở rộng về quy mô mà còn là câu chuyện đầy cảm hứng về sự tận
              tâm, lòng đam mê, và tình yêu nghề. Từng tô phở chính là lời tri
              ân gửi đến thực khách, cùng mong muốn giữ mãi nét đẹp truyền thống
              của món ăn đặc trưng này.
            </p>
            <p className="text-lg mb-4 text-gray-600">
              Ngày <strong>11/11/2024</strong> đánh dấu một cột mốc quan trọng
              khi chi nhánh Phở Hoài đầu tiên chính thức khai trương tại Osaka,
              Nhật Bản. Đây là bước đi đầu tiên trên hành trình chinh phục ẩm
              thực toàn cầu, mang theo sứ mệnh nâng tầm phở Việt trở thành một
              trong những món ăn ngon nhất thế giới và biểu tượng đặc trưng của
              ẩm thực Việt Nam. Phở Hoài tự hào giới thiệu hương vị truyền thống
              và giá trị văn hóa đậm đà, với mong muốn không chỉ chinh phục khẩu
              vị quốc tế mà còn lan tỏa tình yêu đối với ẩm thực quê hương đến
              khắp năm châu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
