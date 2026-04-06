import {
  faAngular,
  faNodeJs,
  faReact,
  faSquareFigma,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCode,
  faGraduationCap,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="@container bg-[#688ea6] min-h-screen items-center justify-center flex"
    >
      <div className="w-full max-w-7xl py-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col px-2 mb-5">
          <span className="text-3xl lg:text-5xl font-medium w-full">
            Sobre mí
          </span>
          <p className="mt-4 text-md">
            Soy estudiante de Ingeniería Informática y desarrollador full-stack
            en formación, abierto a incorporarme a un equipo donde pueda aportar
            y seguir creciendo. Me enfoco en crear aplicaciones claras,
            funcionales y bien estructuradas, aplicando buenas prácticas y
            tecnologías modernas.
          </p>
          <p className="mt-2 text-md">
            Mi camino combina formación técnica, práctica constante y proyectos
            full-stack completos, que me han permitido entender cómo se diseña y
            construye una solución desde el frontend hasta el backend.
          </p>
          <p className="mt-2 text-md">
            Me interesa especialmente el ecosistema JavaScript: React y Next.js
            para el frontend, Node.js y Express para el backend, y TypeScript
            como base para trabajar con mayor claridad y escalabilidad. También
            tengo experiencia con Angular, PHP y Java a nivel académico.
          </p>
        </div>
        <div className="w-full flex flex-col px-2 items-center">
          {/* Education Section */}
          <div className="w-full mx-2 rounded-2xl bg-white shadow-lg p-4 mb-2">
            <div className="flex text-[#688ea6] text-2xl font-semibold gap-2 items-center ">
              <div className="bg-[#688ea6] rounded-xl p-2">
                <FontAwesomeIcon icon={faGraduationCap} color="white" />
              </div>
              <span className="font-light text-black/60">Educación</span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col text-black/60">
                <span className="text-lg">Desarrollo de Aplicaciones Web</span>
                <p className="text-sm italic">
                  2022/2024 - GFGS Universidad Alfonso X el Sabio
                </p>
              </div>
              <div className="flex flex-col text-black/60">
                <span className="text-lg">
                  Ingeniería Informática (2º Curso)
                </span>
                <p className="text-sm italic">
                  2025/Actualidad - Universidad Alfonso X el Sabio
                </p>
              </div>
            </div>
          </div>
          {/* Technical Training Section */}
          <div className="w-full mx-2 rounded-2xl bg-white shadow-lg mb-2 p-4">
            <div className="flex text-[#688ea6] mt-3 text-2xl font-semibold gap-2 items-center ">
              <div className="bg-[#688ea6] rounded-xl p-2">
                <FontAwesomeIcon icon={faLaptopCode} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-light text-black/60">
                  Formación Tecnica
                </span>
                <span className="font-extralight italic text-xs">
                  Cursos, certificados y formación complementaria
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 mx-auto">
              <div className="flex items-center text-black/60">
                <FontAwesomeIcon icon={faSquareFigma} size="lg" />
                <span className="text-lg">Diseño UX/UI</span>
              </div>
              <div className="flex items-center text-black/60">
                <FontAwesomeIcon icon={faSquareJs} size="lg" />
                <span className="text-lg">JavaScript</span>
              </div>
              <div className="flex items-center text-black/60">
                <FontAwesomeIcon icon={faAngular} size="lg" />
                <span className="text-lg">Angular</span>
              </div>
              <div className="flex items-center text-black/60">
                <FontAwesomeIcon icon={faReact} size="lg" />
                <span className="text-lg">React</span>
              </div>
              <div className="flex items-center text-black/60">
                <FontAwesomeIcon icon={faNodeJs} size="lg" />
                <span className="text-lg">NodeJS</span>
              </div>
              <div className="flex items-center text-black/60">
                <FontAwesomeIcon icon={faCode} size="lg" />
                <span className="text-lg">NextJS</span>
              </div>
            </div>
          </div>
          {/* Work Experience Section */}
          <div className="w-full mx-2 rounded-2xl bg-white shadow-lg p-4">
            <div className="flex text-[#688ea6] mt-3 text-2xl font-semibold gap-2 items-center ">
              <div className="bg-[#688ea6] rounded-xl p-2">
                <FontAwesomeIcon icon={faBriefcase} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-light text-black/60">
                  Experiencia Laboral
                </span>
                <span className="font-extralight italic text-xs">
                  Prácticas, trabajos anteriores y proyectos freelance.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col text-black/60">
                <span className="text-lg">
                  Sección9 - Desarrollo Web (Prácticas)
                </span>
                <p className="text-sm italic">2024/2025 - Barcelona, España.</p>
                <ul className="text-sm font-light mt-1 list-disc list-inside">
                  <li className="mb-1">
                    Desarrollo y mantenimiento de aplicaciones web con Laravel y
                    WordPress.
                  </li>
                  <li className="mb-1">
                    Colaboración en la planificación y seguimiento de tareas
                    usando Trello, dentro de metodologías ágiles (Scrum).
                  </li>
                  <li className="mb-1">
                    Creación de soluciones digitales personalizadas, mejorando
                    la experiencia de usuario y optimización de rendimiento con
                    Figma.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col text-black/60">
                <span className="text-lg">
                  Proyectos freelance - Desarrollo web (MERN)
                </span>
                <p className="text-sm italic">mayo 2025 - Actualidad</p>
                <ul className=" text-sm font-light mt-1  list-inside">
                  <li className="mb-1">
                    <strong>
                      ERP para pyme de construcción (módulos CRM / Inventario /
                      Facturación). <br />
                    </strong>
                    Sistema interno para control de recursos y procesos; mejoras
                    de eficiencia operativa y visibilidad de recursos. Stack:
                    React, Node.js, Express, MongoDB; auth básica, roles y panel
                    admin.
                  </li>
                  <li className="mb-1">
                    <strong>
                      Landing page + Aula virtual para academia de español.{" "}
                      <br />
                    </strong>
                    Landing enfocada en visibilidad y captación (estructura SEO,
                    mensajes claros); Aula virtual para gestión de contenido y
                    acceso de estudiantes y staff. Stack: React (frontend),
                    integraciones simples (formularios/email), despliegue
                    estático.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
