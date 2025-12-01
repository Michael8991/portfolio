"use client";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faFolder,
  faHouse,
  faPenToSquare,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navItems = [
  { section: "hero-section", label: "Inicio", icon: faHouse },
  { section: "about-section", label: "Sobre mí", icon: faUser },
  { section: "projects-section", label: "Proyectos", icon: faFolder },
  { section: "contact-section", label: "Contacto", icon: faPenToSquare },
];

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="w-full flex justify-center py-5 fixed z-10">
      <nav className="flex items-center gap-5 rounded-2xl bg-body-secondary px-5 py-2 shadow-lg/20 ">
        {navItems.map((item) => (
          <button
            key={item.section}
            onClick={() => scrollToSection(item.section)}
            className="group hover:cursor-pointer relative flex h-9 w-9 items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition"
          >
            <FontAwesomeIcon icon={item.icon} size="lg" />

            {/* Tooltip debajo */}
            <span
              className="
                pointer-events-none
                absolute left-1/2 -translate-x-1/2
                -translate-y-10 opacity-0
                mt-2
                rounded-xl bg-body-secondary px-3 py-1
                text-xs text-white/90
                whitespace-nowrap
                shadow-md
                transition
                ease-in-out 
                duration-400
                group-hover:opacity-100 group-hover:translate-y-11
              "
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </header>
  );
}
