import { StaticImageData } from "next/image";
import Image from "next/image";
import { Code, FolderCode, Link2 } from "lucide-react";
import StatusIcon from "./StatusIcon";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  image: StaticImageData;
  alt: string;
  title: string;
  category: string[];
  url?: string;
  demo?: string;
  subtitle?: string;
  desc: string;
  codeUrl: string;
  theme?: "light" | "dark";
  status: "in-progress" | "done";
  id: string;
  locale: string;
  rotateImg?: boolean;
  imgSize: "sm" | "md" | "xl";
}

const HEIGHT_MAP: Record<string, number> = {
  sm: 200,
  md: 300,
  xl: 400,
};

export default function ProjectCard({
  image,
  alt,
  title,
  category,
  url,
  subtitle,
  desc,
  codeUrl,
  theme,
  status,
  id,
  locale,
  demo,
  imgSize,
}: ProjectCardProps) {
  const t = useTranslations("ui");
  const currentHeight = HEIGHT_MAP[imgSize] || 400;

  return (
    <div
      className={` shadow-xl relative rounded-2xl p-4 ${
        theme === "light"
          ? "bg-linear-to-r from-indigo-200 via-red-200 to-yellow-100"
          : "text-white/60"
      } mx-2 lg:mx-0 max-xl:max-w-full xl:w-full h-fit lg:h-[450px] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 p-5`}
    >
      <div className="lg:col-span-2 xl:col-span-3 flex flex-col h-full px-5">
        <div className="flex flex-wrap items-center justify-start my-3 gap-4">
          <StatusIcon status={status} locale={locale} />
          <div className="max-lg:justify-center flex flex-wrap gap-2 my-4 text-gray-700">
            <a
              target="_blank"
              className="relative flex items-center justify-center gap-2 bg-white rounded-2xl px-4 py-1 shadow-sm 
             overflow-hidden
             hover:bg-blue-500 transition-colors duration-200 group"
              href={codeUrl}
            >
              <span className="flex items-center gap-2 transition-all duration-200 group-hover:opacity-0 group-hover:scale-75">
                <p className="text-sm text-gray-700">{t("buttons.code")}</p>
                <Code size={16} className="text-gray-700" />
              </span>

              <Code
                size={18}
                className="absolute text-white opacity-0 scale-50
               group-hover:opacity-100 group-hover:scale-100
               transition-all duration-200 ease-out"
              />
            </a>

            <a
              target="_blank"
              className="relative flex items-center justify-center gap-2 bg-white rounded-2xl px-4 py-1 shadow-sm
             overflow-hidden
             hover:bg-blue-500 transition-colors duration-200 group"
              href={url ? url : demo}
            >
              <span className="flex items-center gap-2 transition-all duration-200 group-hover:opacity-0 group-hover:scale-75">
                <p className="text-sm text-gray-700">
                  {url ? t("buttons.website") : t("buttons.demo")}
                </p>
                <Link2 size={16} className="text-gray-700" />
              </span>
              <Link2
                size={18}
                className="absolute text-white opacity-0 scale-50
               group-hover:opacity-100 group-hover:scale-100
               transition-all duration-200 ease-out"
              />
            </a>

            <Link
              target="_blank"
              className="relative flex items-center justify-center gap-2 bg-white rounded-2xl px-4 py-1 shadow-sm
             overflow-hidden 
             hover:bg-orange-500 transition-colors duration-200 group"
              href={`/${locale}/projects/${id}`}
            >
              <span className="flex items-center gap-2 transition-all duration-200 group-hover:opacity-0 group-hover:scale-75">
                <p className="text-sm text-gray-700">
                  {t("buttons.caseStudy")}
                </p>
                <FolderCode size={16} className="text-gray-700" />
              </span>
              <FolderCode
                size={18}
                className="absolute text-white opacity-0 scale-50
               group-hover:opacity-100 group-hover:scale-100
               transition-all duration-200 ease-out"
              />
            </Link>
          </div>
        </div>

        <span className="max-lg:text-center text-3xl font-semibold mb-2 text-black">
          {title}
        </span>

        <span className="max-lg:text-center text-lg font-light text-gray-700">
          {subtitle}
        </span>

        <p className="max-lg:text-center text-md font-normal my-auto text-gray-700">
          {desc}
        </p>

        <div className="flex flex-wrap gap-4 w-full mt-auto justify-center mb-5">
          {category.map((cat, index) => (
            <span
              className="rounded-md text-sm px-4 py-2 shadow-lg bg-white text-gray-700 hover:translate-y-1 transition-all duration-150 ease-in-out cursor-pointer"
              key={index}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <Image
          src={image}
          alt={alt}
          height={currentHeight}
          className="drop-shadow-2xl md:absolute md:right-3 mx-auto"
        />
      </div>
    </div>
  );
}
