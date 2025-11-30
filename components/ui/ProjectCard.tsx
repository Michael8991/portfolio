import { StaticImageData } from "next/image";
import Image from "next/image";
import "./gradients-ui.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({
  image,
  alt,
  title,
  category,
  url,
  bgColor,
  subtitle,
  desc,
  codeUrl,
}: {
  image: StaticImageData;
  alt: string;
  title: string;
  category: string[];
  url: string;
  bgColor: string;
  subtitle?: string;
  desc: string;
  codeUrl: string;
}) {
  return (
    <div
      className={`relative rounded-2xl p-4 ${bgColor} mx-2 lg:mx-0 max-xl:max-w-full xl:w-full h-fit lg:h-[450px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 p-5 `}
    >
      <div className="lg:col-span-2 xl:col-span-3 flex flex-col h-full px-5">
        <span className="max-lg:text-center text-3xl font-semibold mb-2 text-black">
          {title}
        </span>
        <span className="max-lg:text-center text-lg font-light text-black/60">
          {subtitle}
        </span>
        <p className="max-lg:text-center text-md font-normal text-black/80 my-auto">
          {desc}
        </p>
        <div className="max-lg:justify-center flex flex-wrap gap-2 my-4">
          <a
            target="_blank"
            className="text-base text-black/80 items-center justify-center gap-2"
            href={codeUrl}
          >
            Codigo <FontAwesomeIcon icon={faSquareArrowUpRight} size="sm" />
          </a>
          <a
            target="_blank"
            className="text-base text-black/80 items-center justify-center gap-2"
            href={url}
          >
            Web <FontAwesomeIcon icon={faSquareArrowUpRight} size="sm" />
          </a>
        </div>
        <div className="flex flex-wrap gap-4 w-full mt-auto justify-center mb-5">
          {category.map((cat, index) => (
            <span
              className="bg-white rounded-md text-sm px-4 py-2 shadow-lg text-black"
              key={index}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Image
          src={image}
          alt={alt}
          height={500}
          className="drop-shadow-2xl md:absolute md:top-[-55px] md:right-0 mx-auto "
        />
      </div>
    </div>
  );
}
