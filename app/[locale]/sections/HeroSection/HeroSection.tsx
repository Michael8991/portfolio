// "use client";

// import { motion } from "framer-motion";
// import { MainCard } from "@/components/ui";
// import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import {
//   faCubes,
//   faEnvelope,
//   faLayerGroup,
//   faSquareArrowUpRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { useTranslations } from "next-intl";

// export default function HeroSection() {
//   const [hovered, setHovered] = useState(false);
//   const t = useTranslations("Hero");

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (!element) return;

//     element.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <section
//       id="hero-section"
//       className="@container min-h-screen max-xl:pt-25 pt-35 pb-10 bg-radial-[at_50%_25%] from-[#f09819] to-[#ff512f]"
//     >
//       <div className="grid grid-cols-1 xl:grid-cols-3 max-w-7xl m-auto">
//         <div className="flex flex-col items-center">
//           <MainCard />
//         </div>

//         <div className="mt-4 lg:mt-0 col-span-2">
//           <div className="flex flex-wrap items-center">
//             <h1 className="text-3xl max-xl:text-center md:text-5xl lg:text-6xl xl:text-6xl font-extrabold tracking-wide">
//               {t("titlePrimary")}{" "}
//               <span className="text-white/30">{t("titleSecondary")}</span>
//             </h1>
//           </div>

//           <p className="mt-5 text-white/80 font-light max-xl:text-center max-xl:mx-2">
//             {t("description")}
//           </p>

//           <div className="flex items-center justify-start mt-8">
//             <div className="flex items-center justify-start relative lg:mx-10 xl:mx-0">
//               <motion.div
//                 className="relative h-16 w-30 flex items-center justify-center"
//                 onHoverStart={() => setHovered(true)}
//                 onHoverEnd={() => setHovered(false)}
//               >
//                 <motion.a
//                   href="https://www.linkedin.com/in/michaelrodrigueziranzo"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="absolute"
//                   animate={{
//                     x: hovered ? -40 : -30,
//                     zIndex: hovered ? 3 : 3,
//                   }}
//                   transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                   aria-label="LinkedIn"
//                 >
//                   <div className="py-3.5 px-3 rounded-full bg-blue-400 shadow-lg">
//                     <FontAwesomeIcon
//                       icon={faLinkedin}
//                       size="xl"
//                       className="text-white"
//                     />
//                   </div>
//                 </motion.a>

//                 <motion.a
//                   href="https://github.com/Michael8991"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="absolute"
//                   animate={{
//                     x: hovered ? 10 : -5,
//                     zIndex: hovered ? 2 : 2,
//                   }}
//                   transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                   aria-label="GitHub"
//                 >
//                   <div className="py-3.5 px-3 rounded-full bg-green-700 shadow-lg">
//                     <FontAwesomeIcon
//                       icon={faGithub}
//                       size="xl"
//                       className="text-white"
//                     />
//                   </div>
//                 </motion.a>

//                 <motion.a
//                   href="mailto:michael2002982@gmail.com"
//                   className="absolute"
//                   animate={{
//                     x: hovered ? 60 : 20,
//                     zIndex: hovered ? 1 : 1,
//                   }}
//                   transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                   aria-label="Email"
//                 >
//                   <div className="py-3.5 px-3 rounded-full bg-yellow-500 shadow-lg">
//                     <FontAwesomeIcon
//                       icon={faEnvelope}
//                       size="xl"
//                       className="text-black"
//                     />
//                   </div>
//                 </motion.a>
//               </motion.div>

//               <motion.div
//                 animate={{
//                   x: hovered ? 35 : 0,
//                   zIndex: hovered ? 1 : 1,
//                 }}
//                 transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                 className="flex flex-col items-start justify-center"
//               >
//                 <span className="font-medium">{t("connectLine1")}</span>
//                 <span className="font-medium">{t("connectLine2")}</span>
//               </motion.div>

//               <div className="max-md:absolute max-md:z-0 max-md:left-20">
//                 <svg
//                   width="214"
//                   height="96"
//                   viewBox="0 0 214 96"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M15 60
//                       C 40 25, 55 25, 70 40
//                       S 100 75, 120 55
//                       S 155 20, 185 25"
//                     fill="none"
//                     stroke="#666666"
//                     strokeWidth="6"
//                     strokeLinecap="round"
//                     strokeDasharray="8 10"
//                   />
//                   <path
//                     d="M178 18 L190 25 L182 35"
//                     fill="none"
//                     stroke="#666666"
//                     strokeWidth="6"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <div className="ms-auto">
//               <svg
//                 width="96"
//                 height="96"
//                 viewBox="0 0 96 96"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20 30 L40 48 L20 66"
//                   fill="none"
//                   stroke="#F29057"
//                   strokeWidth="8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//                 <line
//                   x1="48"
//                   y1="66"
//                   x2="76"
//                   y2="66"
//                   stroke="#F29057"
//                   strokeWidth="8"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 mx-4 lg:grid-cols-2 items-center justify-center gap-3 mt-10">
//             <div className="bg-[#F29057] rounded-xl p-3 mt-5">
//               <p className="text-[#fcd8c4] text-md uppercase font-bold">
//                 <FontAwesomeIcon
//                   icon={faCubes}
//                   size="xl"
//                   className="me-2"
//                   style={{ color: "#fcd8c4" }}
//                 />
//                 {t("technologies.title")}
//               </p>

//               <div className="flex flex-col">
//                 <p className="mt-2 font-bold text-[#fcd8c4] text-sm uppercase">
//                   {t("technologies.frontend")}
//                 </p>
//                 <div className="flex flex-wrap w-full items-center gap-3 font-medium">
//                   <p>NextJS</p>
//                   <p>React</p>
//                   <p>TypeScript</p>
//                   <p>HTML</p>
//                   <p>CSS</p>
//                 </div>

//                 <p className="mt-2 font-bold text-[#fcd8c4] text-sm uppercase">
//                   {t("technologies.backend")}
//                 </p>
//               </div>

//               <div className="flex flex-wrap w-full items-center gap-3 font-medium">
//                 <p>NodeJS</p>
//                 <p>Express</p>
//                 <p>MongoDB</p>
//                 <p>PHP</p>
//               </div>

//               <div className="w-full group flex items-center justify-end">
//                 <button
//                   onClick={() => scrollToSection("projects-section")}
//                   className="font-medium text-sm hover:cursor-pointer"
//                 >
//                   {t("technologies.cta")}
//                   <FontAwesomeIcon
//                     icon={faSquareArrowUpRight}
//                     size="xl"
//                     className="group-hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out ms-1"
//                   />
//                 </button>
//               </div>
//             </div>

//             <div className="bg-[#C5DB32] rounded-xl p-3 mt-5">
//               <p className="text-[#899a1a] text-md uppercase font-bold">
//                 <FontAwesomeIcon
//                   icon={faLayerGroup}
//                   size="xl"
//                   className="me-2"
//                   style={{ color: "#899a1a" }}
//                 />
//                 {t("background.title")}
//               </p>

//               <div className="flex flex-col gap-0.5 text-black/60 mt-2">
//                 <p className="font-medium">{t("background.item1")}</p>
//                 <p className="font-medium">{t("background.item2")}</p>
//                 <p className="font-medium">{t("background.item3")}</p>
//               </div>

//               <div className="w-full flex group items-center justify-end">
//                 <button
//                   onClick={() => scrollToSection("about-section")}
//                   className="font-medium text-sm hover:cursor-pointer"
//                 >
//                   {t("background.cta")}
//                   <FontAwesomeIcon
//                     icon={faSquareArrowUpRight}
//                     size="xl"
//                     className="group-hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out ms-1"
//                   />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { MainCard } from "@/components/ui";
import { useState } from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

import photoCV from "@/public/MichaelMainPhoto.png";

import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  locale: string;
}

export default function HeroSection({ locale }: HeroSectionProps) {
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
      className="@container min-h-screen max-xl:pt-25 pt-35 pb-10 bg-radial-[at_50%_25%] from-[#f09819] to-[#ff512f]"
    >
      <div className="flex flex-col justify-center items-center max-w-7xl m-auto">
        <div className="mt-4 w-full relative flex flex-col items-center justify-center">
          <p
            className={`flex w-full items-center justify-center text-5xl font-bold title-name-font -translate-y-4 text-white/75 drop-shadow-md`}
          >
            Michael Rodríguez
          </p>
          <div className="flex flex-wrap items-center justify-center absolute z-2 drop-shadow-2xl">
            <h1 className="text-3xl max-xl:text-center md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-black/80 tracking-wide">
              {t("titlePrimary")}{" "}
              <span className="text-white">{t("titleSecondary")}</span>
            </h1>
          </div>

          <p className="mt-10 text-white/80  max-xl:text-center max-xl:mx-2">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col h-fit"
          >
            {/* TS */}
            <motion.div
              animate={{ y: [20, 10, 20], x: [70, 55, 70] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute lg:flex z-2 w-fit h-16 md:h-18 py-1 px-3 rounded-2xl items-center justify-center font-extrabold text-base md:text-lg"
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  position: "relative",
                }}
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white drop-shadow-2xl"
                >
                  <title>TypeScript</title>
                  <path
                    fill="currentColor"
                    d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* React */}
            <motion.div
              animate={{ y: [150, 140, 150], x: [120, 100, 120] }}
              transition={{
                duration: 7.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute lg:flex z-2 w-fit h-16 md:h-18 py-1 px-3 rounded-2xl items-center justify-center font-extrabold text-base md:text-lg"
            >
              <div style={{ width: 50, height: 50, position: "relative" }}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>React</title>
                  <path
                    fill="#fff"
                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Node.js */}
            <motion.div
              animate={{ y: [150, 140, 150], x: [-170, -200, -170] }}
              transition={{
                duration: 8.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute lg:flex z-2 w-fit h-16 md:h-18 py-1 px-3 rounded-2xl items-center justify-center font-extrabold text-base md:text-lg"
            >
              <div style={{ width: 50, height: 50, position: "relative" }}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Node.js</title>
                  <path
                    fill="white"
                    d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* Next.js */}
            <motion.div
              animate={{ y: [30, 10, 30], x: [-170, -155, -170] }}
              transition={{
                duration: 7.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute lg:flex z-2 w-fit h-16 md:h-18 py-1 px-3 rounded-2xl items-center justify-center font-extrabold text-base md:text-lg"
            >
              <div style={{ width: 50, height: 50, position: "relative" }}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Next.js</title>
                  <path
                    fill="white"
                    d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"
                  />
                </svg>
              </div>
            </motion.div>

            {/* MongoDB */}
            <motion.div
              animate={{
                x: [110, 130, 110],
                y: [255, 230, 255],
              }}
              transition={{
                duration: 8.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute lg:flex z-2 w-fit h-16 md:h-18 py-1 px-3 rounded-2xl items-center justify-center font-extrabold text-base md:text-lg"
            >
              <div style={{ width: 50, height: 50, position: "relative" }}>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>MongoDB</title>
                  <path
                    fill="white"
                    d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
                  />
                </svg>
              </div>
            </motion.div>
            {/* PlayWright */}
            <motion.div
              animate={{
                x: [-170, -200, -170],
                y: [255, 230, 255],
              }}
              transition={{
                duration: 8.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute lg:flex z-2 w-fit h-16 md:h-18 py-1 px-3 rounded-2xl items-center justify-center font-extrabold text-base md:text-lg"
            >
              <div style={{ width: 50, height: 50, position: "relative" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  id="Playwright--Streamline-Svg-Logos"
                  height="44"
                  width="44"
                >
                  <desc>
                    Playwright Streamline Icon: https://streamlinehq.com
                  </desc>
                  <title>PlayWright</title>
                  <path
                    fill="#fff"
                    d="M9.7126 15.915175V14.388l-4.243175 1.2032s0.313525 -1.82175 2.526475 -2.4495c0.6711 -0.1902 1.2437 -0.1889 1.7167 -0.09755V6.780125h2.124575c-0.231325 -0.714825 -0.4551 -1.26515 -0.64305 -1.64755 -0.310925 -0.632925 -0.62965 -0.21335 -1.35325 0.39185 -0.50965 0.425775 -1.797675 1.33405 -3.7359 1.85635 -1.938275 0.522625 -3.50525 0.384025 -4.15906 0.2708 -0.9268825 -0.1599 -1.4116925 -0.36345 -1.3663375 0.34155 0.03947 0.621825 0.187595 1.58595 0.5268925 2.859275C1.8405325 13.609875 4.266525 18.9232 8.85135 17.68835c1.197625 -0.3227 2.04295 -0.960525 2.6289 -1.7735h-1.76765v0.000325ZM2.865625 10.89025l3.258275 -0.858325s-0.094975 1.25345 -1.31645 1.57545c-1.2218 0.321675 -1.941825 -0.717125 -1.941825 -0.717125Z"
                    stroke-width="0.25"
                  ></path>
                  <path
                    fill="#fff"
                    d="M21.975075 6.8525c-0.84695 0.148475 -2.878875 0.33345 -5.389975 -0.339625 -2.5118 -0.672675 -4.17835 -1.849175 -4.838625 -2.402175 -0.936 -0.783975 -1.347725 -1.328825 -1.752925 -0.5047 -0.358225 0.726875 -0.816325 1.909875 -1.259725 3.565925 -0.960775 3.586125 -1.67885 11.15385 4.260525 12.7463 5.938125 1.591125 9.09945 -5.322175 10.0603 -8.908625 0.4434 -1.655725 0.637825 -2.9095 0.691325 -3.717925 0.061 -0.915775 -0.568025 -0.64995 -1.7709 -0.439175ZM10.0418 9.81945s0.936 -1.45575 2.523525 -1.00455c1.588525 0.451225 1.711525 2.207425 1.711525 2.207425l-4.23505 -1.202875ZM13.917 16.352c-2.79235 -0.817975 -3.223 -3.04465 -3.223 -3.04465l7.501125 2.0972c0 -0.00035 -1.5141 1.755175 -4.278125 0.94745Zm2.6521 -4.57605s0.9347 -1.45475 2.521925 -1.00225c1.587175 0.4519 1.71215 2.2081 1.71215 2.2081l-4.234075 -1.20585Z"
                    stroke-width="0.25"
                  ></path>
                  <path
                    fill="#fff"
                    d="M8.2299 14.808525 5.4695 15.590875s0.29985 -1.708225 2.33335 -2.385175l-1.563075 -5.865975 -0.135075 0.04105c-1.93825 0.5227 -3.505225 0.384025 -4.15903 0.2708 -0.9268775 -0.159825 -1.411685 -0.36345 -1.3663375 0.341625 0.0394775 0.621825 0.187595 1.585875 0.5268925 2.85925 0.7340675 2.757425 3.160075 8.07075 7.744875 6.8359l0.135075 -0.042425 -0.756275 -2.8374ZM2.8657 10.8903l3.258275 -0.858375s-0.094975 1.25345 -1.316425 1.57545c-1.221825 0.321675 -1.94185 -0.717075 -1.94185 -0.717075Z"
                    stroke-width="0.25"
                  ></path>
                  <path
                    fill="#fff"
                    d="m14.04295 16.382625 -0.1263 -0.0307c-2.792325 -0.8179 -3.223 -3.044575 -3.223 -3.044575l3.86805 1.0812 2.047825 -7.86915 -0.024775 -0.006525c-2.5118 -0.672675 -4.17825 -1.849175 -4.838625 -2.402175 -0.936 -0.783975 -1.347725 -1.328825 -1.752925 -0.5047 -0.357875 0.726875 -0.815975 1.909875 -1.259375 3.565925 -0.960775 3.586125 -1.67885 11.15385 4.260525 12.74625l0.121725 0.027425 0.926875 -3.562975ZM10.0418 9.819475s0.936 -1.455775 2.523525 -1.004575c1.588525 0.451225 1.711525 2.207425 1.711525 2.207425l-4.23505 -1.20285Z"
                    stroke-width="0.25"
                  ></path>
                  <path
                    fill="#fff"
                    d="m8.37055 14.7683 -0.740275 0.2101c0.174875 0.9859 0.483125 1.93205 0.966975 2.7679 0.0842 -0.0186 0.167725 -0.034575 0.2535 -0.058075 0.2248 -0.06065 0.43325 -0.13575 0.63395 -0.21765 -0.5406 -0.802225 -0.898225 -1.726175 -1.11415 -2.702275Zm-0.289075 -6.9439c-0.3804 1.419825 -0.720725 3.46345 -0.62705 5.51325 0.167675 -0.072775 0.3448 -0.140575 0.54155 -0.1964l0.13705 -0.030625c-0.167075 -2.189525 0.194075 -4.4207 0.600925 -5.93875 0.103125 -0.384025 0.206525 -0.741225 0.3096 -1.07435 -0.166025 0.105675 -0.3448 0.213975 -0.548425 0.32555 -0.137325 0.42385 -0.276 0.887125 -0.41365 1.401325Z"
                    stroke-width="0.25"
                  ></path>
                </svg>
              </div>
            </motion.div>
          </motion.div>
          <div
            className="relative w-full max-w-md mx-auto mt-10 drop-shadow-2xl"
            style={{ height: "480px" }}
          >
            <Image
              src={photoCV}
              alt="Michael's Photo"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="bg-white px-4 py-2 rounded-xl shadow-xl w-xl -translate-y-5 flex items-center justify-center">
            <a
              href=""
              className="flex flex-col items-center justify-center hover:bg-orange-200 rounded-lg py-2 px-4"
            >
              <p className=" flex flex-col items-center justify-center group hover:translate-y-1 transition-all duration-200 ease-in-out">
                Ver proyectos
                <span className="flex items-center justify-center rounded-full">
                  <ArrowDown size={14} className="" />
                </span>
              </p>
            </a>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
