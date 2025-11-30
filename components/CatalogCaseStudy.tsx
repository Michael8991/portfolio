import ProjectCard from "./ui/ProjectCard";
import CostaSpanishMockup from "@/public/CostaSpanishAcademy/mockup-LandingCostaSpanish.png";

export default function CatalogCaseStudy() {
  const descCostaSpanish = `Landing page de alto rendimiento desarrollada con Next.js, TypeScript y Tailwind para una academia de español como lengua extranjera. La plataforma integra SEO avanzado, i18n, formularios de captación orientados a conversión y contenido dinámico extraído desde una base de datos en MongoDB. Su arquitectura modular y escalable está diseñada para evolucionar hacia un LMS completo, incorporando buenas prácticas de accesibilidad, rendimiento y despliegue CI/CD en Vercel.`;
  const catCostaSpanish = [
    "Next.js 14",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "i18n / Multi-idioma",
    "SEO Técnico",
    "Lead Generation",
    "Arquitectura Escalable",
    "CI/CD en Vercel",
  ];

  return (
    <div className="w-full max-w-7xl grid grid-cols-1 mt-10 items-center justify-center">
      <div className="">
        <ProjectCard
          image={CostaSpanishMockup}
          alt="Costa Spanish Academy Project Image"
          title="CostaSpanish Academy"
          subtitle="Landing page para venta y presentación de cursos de español."
          desc={descCostaSpanish}
          category={catCostaSpanish}
          codeUrl="https://github.com/Michael8991/costaspanish-academy"
          url="https://www.costaspanishclass.com"
          bgColor="bg-card-project-pink"
        />
      </div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}
