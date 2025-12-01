import { StaticImageData } from "next/image";
import Image from "next/image";
import "./gradients-ui.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight, faLock } from "@fortawesome/free-solid-svg-icons";

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
  theme = "pink",
  status = "done", // ← NUEVO: valor por defecto
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
  theme?: "pink" | "black";
  status?: "in-progress" | "done";
}) {
  const titleColor = theme === "pink" ? "text-black" : "text-white";
  const textColor = theme === "pink" ? "text-black/80" : "text-white/80";
  const chipTextColor = theme === "pink" ? "text-black" : "text-white";
  const chipBgColor = theme === "pink" ? "bg-white" : "bg-black/30";

  if (status === "in-progress") {
    return (
      <div
        className={`relative rounded-2xl p-4 ${bgColor} mx-2 my-5 lg:mx-0 max-xl:max-w-full xl:w-full h-[300px] flex items-center justify-center`}
      >
        <FontAwesomeIcon
          icon={faLock}
          size="7x"
          style={{ color: "black" }}
          className=""
        />
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl p-4 ${bgColor} mx-2 lg:mx-0 max-xl:max-w-full xl:w-full h-fit lg:h-[450px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 p-5`}
    >
      <div className="lg:col-span-2 xl:col-span-3 flex flex-col h-full px-5">
        <span className={`max-lg:text-center text-3xl font-semibold mb-2 ${titleColor}`}>
          {title}
        </span>
        <span className={`max-lg:text-center text-lg font-light ${theme === "pink" ? "text-black/60" : "text-white/60"}`}>
          {subtitle}
        </span>
        <p className={`max-lg:text-center text-md font-normal my-auto ${textColor}`}>
          {desc}
        </p>

        <div className="max-lg:justify-center flex flex-wrap gap-2 my-4">
          <a
            target="_blank"
            className={`text-base items-center justify-center gap-2 ${textColor}`}
            href={codeUrl}
          >
            Código <FontAwesomeIcon icon={faSquareArrowUpRight} size="sm" />
          </a>
          <a
            target="_blank"
            className={`text-base items-center justify-center gap-2 ${textColor}`}
            href={url}
          >
            Web <FontAwesomeIcon icon={faSquareArrowUpRight} size="sm" />
          </a>
        </div>

        <div className="flex flex-wrap gap-4 w-full mt-auto justify-center mb-5">
          {category.map((cat, index) => (
            <span
              className={`${chipBgColor} rounded-md text-sm px-4 py-2 shadow-lg ${chipTextColor}`}
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
