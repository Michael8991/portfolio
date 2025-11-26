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

export default function HeroSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="hero-section" className="@container min-h-screen pt-35">
      <div className="min-h-screen grid grid-cols-3 max-w-7xl m-auto">
        <div className="flex flex-col items-center">
          <MainCard />
        </div>
        <div className="col-span-2">
          <h1 className="title-tech-font text-6xl font-extrabold tracking-wide">
            JUNIOR FULLSTACK
          </h1>
          <div className="flex items-center">
            <h2 className="title-tech-font text-6xl font-extrabold tracking-wide mt-2 text-white/30">
              DEVELOPER
            </h2>
            <a
              className="ms-auto flex items-center hover:scale-105 transition duration-200 ease-in-out"
              href=""
            >
              <div className="flex items-center  bg-white text-black p-3 rounded-2xl">
                <p>Descargar CV</p>
                <div className="ms-2 bg-[#F29057] rounded-sm">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 24 L24 8"
                      fill="none"
                      stroke="#fff"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16 8 H24 V16"
                      fill="none"
                      stroke="#fff"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
          <p className="mt-5 text-white/80 font-light">
            Desarrollo aplicaciones claras, modernas y bien estructuradas,
            combinando frontend y backend con un enfoque práctico y orientado a
            resultados.
          </p>
          <div className="flex items-center justify-start mt-8">
            <div className="flex items-center justify-start">
              <motion.div
                className="relative h-16 w-30 flex items-center justify-center"
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
              >
                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/tu-perfil"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute"
                  animate={{
                    x: hovered ? -40 : -30,
                    zIndex: hovered ? 3 : 3,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <div className="py-3.5 px-3 rounded-full bg-blue-400 shadow-lg">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="xl"
                      className="text-white"
                    />
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/tu-usuario"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute"
                  animate={{
                    x: hovered ? 10 : -5,
                    zIndex: hovered ? 2 : 2,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <div className="py-3.5 px-3 rounded-full bg-green-700 shadow-lg">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="xl"
                      className="text-white"
                    />
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:tuemail@correo.com"
                  className="absolute"
                  animate={{
                    x: hovered ? 60 : 20,
                    zIndex: hovered ? 1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
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
                <span className="font-medium">Conecta</span>
                <span className="font-medium">conmigo</span>
              </motion.div>
              <div>
                <svg
                  width="214"
                  height="96"
                  viewBox="0 0 214 96"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Fondo oscuro (opcional) */}
                  <rect width="214" height="96" fill="none" />

                  {/* Trazo ondulado discontinuo */}
                  <path
                    d="M15 60
                      C 40 25, 55 25, 70 40
                      S 100 75, 120 55
                      S 155 20, 185 25"
                    fill="none"
                    stroke="#666666"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-dasharray="8 10"
                  />

                  {/* Flecha al final (sólida) */}
                  <path
                    d="M178 18 L190 25 L182 35"
                    fill="none"
                    stroke="#666666"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                {/*<!-- Símbolo > -->*/}
                <path
                  d="M20 30 L40 48 L20 66"
                  fill="none"
                  stroke="#F29057"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                {/* Guion bajo _ */}
                <line
                  x1="48"
                  y1="66"
                  x2="76"
                  y2="66"
                  stroke="#F29057"
                  stroke-width="8"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-3 mt-10">
            <div className=" bg-[#F29057] rounded-xl p-3 mt-5">
              <p className="text-[#fcd8c4] text-md uppercase font-bold">
                <FontAwesomeIcon
                  icon={faCubes}
                  size="xl"
                  className="me-2"
                  style={{ color: "#fcd8c4" }}
                />
                Tecnologías
              </p>
              <div className="flex flex-col">
                <p className="mt-2 font-bold text-[#fcd8c4] text-sm uppercase">
                  frontend
                </p>
                <div className="flex w-full items-center gap-3 font-medium">
                  <p>NextJS</p>
                  <p>React</p>
                  <p>TypeScript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
                <p className="mt-2 font-bold text-[#fcd8c4] text-sm uppercase">
                  backend
                </p>
              </div>
              <div className="flex w-full items-center gap-3 font-medium">
                <p>NodeJS</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>PHP</p>
              </div>
              <div className="w-full flex items-center justify-end">
                <span className="font-medium text-sm">Proyecto</span>
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  size="xl"
                  className="hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out "
                />
              </div>
            </div>
            <div className=" bg-[#C5DB32] rounded-xl p-3 mt-5">
              <p className="text-[#899a1a] text-md uppercase font-bold">
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  size="xl"
                  className="me-2"
                  style={{ color: "#899a1a" }}
                />
                Background
              </p>
              <div className="flex flex-col gap-0.5 text-black/60 mt-2">
                <div className="flex flex-col"></div>
                <p className="font-medium">Ingeniería Informática 2º Curso</p>
                <p className="font-medium">Desarrollo de Aplicaciones Web</p>
                <p className="font-medium">Proyectos Full-Stack</p>
              </div>
              <div className="w-full flex items-center justify-end">
                <span className="font-medium text-sm">Sobre mí</span>
                <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  size="xl"
                  className="hover:scale-110 hover:cursor-pointer transition duration-300 ease-in-out "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
