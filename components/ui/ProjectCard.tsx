import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProjectCard({
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
    <div className="w-full h-64 relative hover:scale-100 group cursor-pointer transition duration-300 ease-in-out">
      <div className="w-full h-64 aspect-video overflow-hidden cursor-pointer group-hover:blur transition duration-300 ease-in-out group-hover:brightness">
        <Image src={image} alt={alt} fill />
      </div>
      <div className="w-full h-64 flex-col text-black hidden group-hover:flex group-hover:flex-col transition duration-300 ease-in-out absolute top-0 left-0 bg-white/20 justify-center items-center gap-2 transition duration-300 ease-in-out">
        <span className="text-2xl font-semibold">{title}</span>
        <span className="text-lg font-light">{category}</span>
      </div>
    </div>
  );
}
