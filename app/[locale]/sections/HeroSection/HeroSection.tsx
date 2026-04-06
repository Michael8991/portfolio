"use client";

import { motion } from "framer-motion";
import { MainCard } from "@/components/ui";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCubes,
  faEnvelope,
  faLayerGroup,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const [hovered, setHovered] = useState(false);
  const t = useTranslations("Hero");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero-section"
      className="@container min-h-screen max-xl:pt-25 pt-35 pb-10"
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 max-w-7xl m-auto">
        <div className="flex flex-col items-center">
          <MainCard />
        </div>

        <div className="mt-4 lg:mt-0 col-span-2">
          <div className="flex flex-wrap items-center">
            <h1 className="text-3xl max-xl:text-center md:text-5xl lg:text-6xl xl:text-6xl font-extrabold tracking-wide">
              {t("titlePrimary")}{" "}
              <span className="text-white/30">{t("titleSecondary")}</span>
            </h1>
          </div>

          <p className="mt-5 text-white/80 font-light max-xl:text-center max-xl:mx-2">
            {t("description")}
          </p>

          <div className="flex items-center justify-start mt-8">
            <div className="flex items-center justify-start relative lg:mx-10 xl:mx-0">
              <motion.div
                className="relative h-16 w-30 flex items-center justify-center"
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
              >
                <motion.a
                  href="https://www.linkedin.com/in/michaelrodrigueziranzo"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute"
                  animate={{
                    x: hovered ? -40 : -30,
                    zIndex: hovered ? 3 : 3,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  aria-label="LinkedIn"
                >
                  <div className="py-3.5 px-3 rounded-full bg-blue-400 shadow-lg">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="xl"
                      className="text-white"
                    />
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/Michael8991"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute"
                  animate={{
                    x: hovered ? 10 : -5,
                    zIndex: hovered ? 2 : 2,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  aria-label="GitHub"
                >
                  <div className="py-3.5 px-3 rounded-full bg-green-700 shadow-lg">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="xl"
                      className="text-white"
                    />
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:michael2002982@gmail.com"
                  className="absolute"
                  animate={{
                    x: hovered ? 60 : 20,
                    zIndex: hovered ? 1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  aria-label="Email"
                >
                  <div className="py-3.5 px-3 rounded-full bg-yellow-500 shadow-lg">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="xl"
                      className="text-black"
                    />
                  </div>
                </motion.a>
              </motion.div>

              <motion.div
                animate={{
                  x: hovered ? 35 : 0,
                  zIndex: hovered ? 1 : 1,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex flex-col items-start justify-center"
              >
                <span className="font-medium">{t("connectLine1")}</span>
                <span className="font-medium">{t("connectLine2")}</span>
              </motion.div>

              <div className="max-md:absolute max-md:z-0 max-md:left-20">
                <svg
                  width="214"
                  height="96"
                  viewBox="0 0 214 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 60
                      C 40 25, 55 25, 70 40
                      S 100 75, 120 55
                      S 155 20, 185 25"
                    fill="none"
                    stroke="#666666"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                  />
                  <path
                    d="M178 18 L190 25 L182 35"
                    fill="none"
                    stroke="#666666"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="ms-auto">
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 30 L40 48 L20 66"
                  fill="none"
                  stroke="#F29057"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="48"
                  y1="66"
                  x2="76"
                  y2="66"
                  stroke="#F29057"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 mx-4 lg:grid-cols-2 items-center justify-center gap-3 mt-10">
            <div className="bg-[#F29057] rounded-xl p-3 mt-5">
              <p className="text-[#fcd8c4] text-md uppercase font-bold">
                <FontAwesomeIcon
                  icon={faCubes}
                  size="xl"
                  className="me-2"
                  style={{ color: "#fcd8c4" }}
                />
                {t("technologies.title")}
              </p>

              <div className="flex flex-col">
                <p className="mt-2 font-bold text-[#fcd8c4] text-sm uppercase">
                  {t("technologies.frontend")}
                </p>
                <div className="flex flex-wrap w-full items-center gap-3 font-medium">
                  <p>NextJS</p>
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>

                <p className="mt-2 font-bold text-[#fcd8c4] text-sm uppercase">
                  {t("technologies.backend")}
                </p>
              </div>

              <div className="flex flex-wrap w-full items-center gap-3 font-medium">
                <p>NodeJS</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>PHP</p>
              </div>

              <div className="w-full group flex items-center justify-end">
                <button
                  onClick={() => scrollToSection("projects-section")}
                  className="font-medium text-sm hover:cursor-pointer"
                >
                  {t("technologies.cta")}
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    size="xl"
                    className="group-hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out ms-1"
                  />
                </button>
              </div>
            </div>

            <div className="bg-[#C5DB32] rounded-xl p-3 mt-5">
              <p className="text-[#899a1a] text-md uppercase font-bold">
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  size="xl"
                  className="me-2"
                  style={{ color: "#899a1a" }}
                />
                {t("background.title")}
              </p>

              <div className="flex flex-col gap-0.5 text-black/60 mt-2">
                <p className="font-medium">{t("background.item1")}</p>
                <p className="font-medium">{t("background.item2")}</p>
                <p className="font-medium">{t("background.item3")}</p>
              </div>

              <div className="w-full flex group items-center justify-end">
                <button
                  onClick={() => scrollToSection("about-section")}
                  className="font-medium text-sm hover:cursor-pointer"
                >
                  {t("background.cta")}
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    size="xl"
                    className="group-hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out ms-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
