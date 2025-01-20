import { cn } from "@/lib/utils";
import customer_1 from "@/assets/customer/customer-1.jpg";
import customer_2 from "@/assets/customer/customer-2.jpg";
import customer_3 from "@/assets/customer/customer-3.jpg";
import customer_4 from "@/assets/customer/customer-4.jpg";
import customer_5 from "@/assets/customer/customer-5.jpg";
import customer_6 from "@/assets/customer/customer-6.jpg";
import ImagePreview from "./ui/image-preview";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Cell = ({ image }: { image: any | StaticImport }) => {
  return (
    <div className="size-full rounded-lg center bg-zinc-200 dark:bg-zinc-900 max-h-64 overflow-hidden ">
      <ImagePreview
        src={image}
        alt="Restaurant history"
        width={600}
        height={400}
        // fill
        // layout="fill"
        // objectFit="cover"
        className="rounded-lg shadow-md  hover:transition duration-300 hover:scale-105"
      />
    </div>
  );
};
const cells = [
  customer_1,
  customer_2,
  customer_3,
  customer_4,
  customer_5,
  customer_6,
];
//======================================
const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Hình ảnh thực khách
      </h2>
      <div className=" mx-auto grid sm:grid-cols-2 md:grid-cols-6 gap-2 mb-12">
        {cells.map((n, i) => (
          <div
            key={`item-${i}`}
            className={cn(
              "p-1 rounded-lg",
              i < 2 && "md:col-span-3",
              i == 2 && "md:col-span-4",
              i == 3 && "md:col-span-2",
              i == 4 && "md:col-span-2",
              i == 5 && "md:col-span-4"
            )}
          >
            <Cell image={n} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
