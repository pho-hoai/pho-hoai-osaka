import Image from "next/image";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./dialog";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { X } from "lucide-react";

export default function ImagePreview({
  src,
  alt,
  className,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  if (!src) return null;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={src}
          alt={alt || ""}
          sizes="100vw"
          className={className}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={100}
        />
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
        <DialogClose>
          <div className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/75 focus:outline-none">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </div>
        </DialogClose>
        <div className="relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md">
          <Image
            src={src}
            fill
            alt={alt || ""}
            className="h-full w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
