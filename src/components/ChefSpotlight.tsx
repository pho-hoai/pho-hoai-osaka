import Image from "next/image";

export default function ChefSpotlight() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Đầu bếp
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Chef Portrait"
              width={300}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">
              Bí quyết từ bàn tay tài hoa
            </h3>
            <p className="text-lg mb-6">
              Đầu bếp chính của Phở Hoài 666, anh/chị Hoài [tên đầy đủ nếu có],
              có hơn 20 năm kinh nghiệm trong việc chế biến phở truyền thống.
              Với niềm đam mê ẩm thực và kỹ năng tinh tế, chúng tôi cam kết mang
              đến bát phở chuẩn vị, trọn vẹn yêu thương trong từng sợi bánh,
              từng lát thịt.
            </p>
            <blockquote className="italic text-gray-600 border-l-4 border-green-500 pl-4 mb-6">
              &quot;Cooking is not just about ingredients, recipes, and
              techniques. It&apos;s about harnessing the elements of nature to
              create a memorable experience for our guests.&quot;
            </blockquote>
            <p className="text-lg">
              Chef Maria&apos;s signature dishes include her renowned
              &quot;Deconstructed Ratatouille&quot; and &quot;Truffle-infused
              Risotto with Wild Mushrooms.&quot; Don&apos;t miss the opportunity
              to experience her culinary mastery during your visit to Gourmet
              Haven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
