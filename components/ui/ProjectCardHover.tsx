import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProjectCardHover({
  image,
  alt,
  title,
  category,
  url,
}: {
  image: StaticImageData;
  alt: string;
  title: string;
  category: string;
  url: string;
}) {
  return (
    <div className="w-full h-64 relative hover:scale-130 group cursor-pointer transition duration-300 ease-in-out">
      <div className="w-full h-64 aspect-video overflow-hidden cursor-pointer group-hover:blur transition duration-300 ease-in-out">
        <Image src={image} alt={alt} fill />
      </div>
      <div className="w-full h-64 flex-col text-black hidden group-hover:flex group-hover:flex-col transition duration-300 ease-in-out absolute top-0 left-0  bg-rose-200/40 justify-start items-center gap-2 transition duration-300 ease-in-out">
        <span className="text-2xl font-semibold mt-3">{title}</span>
        <span className="text-lg font-light">{category}</span>
      </div>
    </div>
  );
}
