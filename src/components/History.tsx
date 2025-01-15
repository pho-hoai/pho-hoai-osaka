import Image from "next/image";

export default function History() {
  return (
    <section id="history" className="py-16 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Restaurant history"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Lịch sử quán 📖
            </h2>
            <p className="text-lg mb-4">
              Câu chuyện của Phở Hoài 666 Từ một gánh phở nhỏ trên phố, Phở Hoài
              666 đã trở thành một điểm đến yêu thích của những tín đồ ẩm thực
              phở. Được thành lập từ năm [năm thành lập], chúng tôi tự hào giữ
              trọn vẹn hương vị gia truyền qua nhiều thế hệ. Hành trình của
              chúng tôi là câu chuyện về sự tận tâm, đam mê và lòng yêu nghề.
            </p>
            <p className="text-lg mb-4">
              Không chỉ dừng lại ở Việt Nam, Phở Hoài 666 còn có cơ hội giới
              thiệu phở Việt đến bạn bè quốc tế khi mở một chi nhánh tại Osaka,
              Nhật Bản. Tại đây, món phở của chúng tôi nhanh chóng chiếm được
              cảm tình của người dân địa phương nhờ nước dùng thanh ngọt, sợi
              phở mềm mịn và cách phục vụ chu đáo. Câu chuyện thành công tại
              Osaka chính là niềm tự hào và động lực để chúng tôi tiếp tục hoàn
              thiện từng bát phở gửi đến khách hàng.
            </p>
            <p className="text-lg">
              Dù ở Việt Nam hay Nhật Bản, chúng tôi luôn cam kết giữ trọn vẹn
              hương vị phở truyền thống, như một lời tri ân gửi đến tất cả thực
              khách đã yêu mến Phở Hoài 666.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
