"use client";

import {motion} from "framer-motion";
import { MainCard } from "@/components/ui";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

export default function HeroSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="hero-section" className="@container min-h-screen pt-35">
      <div className="min-h-screen grid grid-cols-3 max-w-7xl m-auto">
        <div className="flex flex-col items-center">
          <MainCard/>
        </div>
        <div className="col-span-2">
          <h1 className="title-tech-font text-6xl font-extrabold tracking-wide">JUNIOR FULLSTACK</h1>
          <h2 className="title-tech-font text-6xl font-extrabold tracking-wide mt-2 text-white/30">DEVELOPER</h2>
          <p className="mt-5 text-white/80 font-light">Enfocado en crear aplicaciones claras, eficientes y bien pensadas, con atención al detalle y una mentalidad orientada a mejorar cada día.</p>
          <div className="flex items-center justify-start mt-8">
            <div className="socialMediaContainer flex items-center justify-start">
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
                    <FontAwesomeIcon icon={faLinkedin} size="xl" className="text-white" />
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
                    <FontAwesomeIcon icon={faGithub} size="xl" className="text-white" />
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
                    <FontAwesomeIcon icon={faEnvelope} size="xl" className="text-black" />
                  </div>
                </motion.a>
            </motion.div>
              <motion.div
                 animate={{
                    x: hovered ? 35 : 0,
                    zIndex: hovered ? 1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex flex-col items-start justify-center">
              <span className="font-medium">Conecta</span>
              <span className="font-medium">conmigo</span>
            </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
