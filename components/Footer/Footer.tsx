"use client";

import { faDribbble, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="@container flex items-center justify-center w-full bg-white min-h-[200px] rounded-t-2xl py-5 mt-10">
      <div className="max-w-7xl grid grid-cols-1 xl:grid-cols-4 gap-4  justify-center items-stretch mx-auto">
        <div className="flex flex-col gap-1 text-black/80 justify-center items-center">
          <p className="text-2xl font-semibold text-center">
            Gracias por visitar mi portfolio
          </p>
          <p className="text-sm text-center font-medium text-black/60 mb-3 w-80">
            Muestra de mis proyectos y experiencia como desarrollador
            full-stack, con enfoque en aplicaciones web modernas.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 text-black/60">
          <p className="text-sm font-semibold text-center text-black/80">
            Links
          </p>
          <button
            className="hover:cursor-pointer"
            onClick={() => scrollToSection("hero-section")}
          >
            Home
          </button>
          <button
            className="hover:cursor-pointer"
            onClick={() => scrollToSection("about-section")}
          >
            About me
          </button>
          <button
            className="hover:cursor-pointer"
            onClick={() => scrollToSection("projects-section")}
          >
            Projects
          </button>
        </div>
        <div className="flex flex-col items-center gap-2 text-black/60">
          <p className="text-sm font-semibold text-center text-black/80">
            Contacta conmigo
          </p>
          <a href="mailto:michael2002982@gmail.com">
            michael2002982@gmail.com{" "}
            <FontAwesomeIcon icon={faSquareArrowUpRight} />
          </a>
          <p className="">+34 68 05 08 750</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-black/60 ">
          <p className="text-center text-sm font-semibold text-black/80">
            Sígueme
          </p>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <a target="_blank" href="https://www.instagram.com/_michael98_/">
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/michaelrodrigueziranzo"
            >
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a target="_blank" href="https://github.com/Michael8991">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a target="_blank" href="https://dribbble.com/Michael9881">
              <FontAwesomeIcon icon={faDribbble} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
