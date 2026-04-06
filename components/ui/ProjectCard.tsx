import { StaticImageData } from "next/image";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { CircleDotDashed, Dot } from "lucide-react";
import StatusIcon from "./StatusIcon";

interface ProjectCardProps {
  image: StaticImageData;
  alt: string;
  title: string;
  category: string[];
  url: string;
  subtitle?: string;
  desc: string;
  codeUrl: string;
  theme?: "light" | "dark";
  status?: "in-progress" | "done";
}

export default function ProjectCard({
  image,
  alt,
  title,
  category,
  url,
  subtitle,
  desc,
  codeUrl,
  theme = "light",
  status = "done",
}: ProjectCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-4 ${theme === "light" ? "bg-linear-to-r from-indigo-200 via-red-200 to-yellow-100" : "text-white/60"} mx-2 lg:mx-0 max-xl:max-w-full xl:w-full h-fit lg:h-[450px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 p-5`}
    >
      <div className="lg:col-span-2 xl:col-span-3 flex flex-col h-full px-5">
        <div className="flex items-center justify-start my-3">
          <StatusIcon status={status} />
        </div>
        <span
          className={`max-lg:text-center text-3xl font-semibold mb-2 text-black`}
        >
          {title}
        </span>
        <span className={`max-lg:text-center text-lg font-light text-gray-700`}>
          {subtitle}
        </span>
        <p
          className={`max-lg:text-center text-md font-normal my-auto text-gray-700`}
        >
          {desc}
        </p>

        <div className="max-lg:justify-center flex flex-wrap gap-2 my-4 text-gray-700">
          <a
            target="_blank"
            className={`text-base items-center justify-center gap-2 `}
            href={codeUrl}
          >
            Código <FontAwesomeIcon icon={faSquareArrowUpRight} size="sm" />
          </a>
          <a
            target="_blank"
            className={`text-base items-center justify-center gap-2`}
            href={url}
          >
            Web <FontAwesomeIcon icon={faSquareArrowUpRight} size="sm" />
          </a>
        </div>

        <div className="flex flex-wrap gap-4 w-full mt-auto justify-center mb-5">
          {category.map((cat, index) => (
            <span
              className={` rounded-md text-sm px-4 py-2 shadow-lg bg-white text-gray-700 hover:translate-y-1 transition-all duration-150 ease-in-out cursor-pointer`}
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
          className="drop-shadow-2xl md:absolute md:top-[-55px] md:right-0 mx-auto"
        />
      </div>
    </div>
  );
}
