import ProjectCard from "./ui/ProjectCard";
import CostaSpanishMockup from "@/public/CostaSpanishAcademy/MockCostaSpanishLandingv2.png";

interface CatalogCaseStudyProps {
  locale: string;
}

export default function CatalogCaseStudy({ locale }: CatalogCaseStudyProps) {
  const descCostaSpanish = `Landing page de alto rendimiento desarrollada con Next.js, TypeScript y Tailwind para una academia de español como lengua extranjera. La plataforma integra SEO avanzado, i18n, formularios de captación orientados a conversión y contenido dinámico extraído desde una base de datos en MongoDB. Su arquitectura modular y escalable está diseñada para evolucionar hacia un LMS completo, incorporando buenas prácticas de accesibilidad, rendimiento y despliegue CI/CD en Vercel.`;
  const descLMSCostaSpanish = `Plataforma SaaS full-stack desarrollada con Next.js y TypeScript, orientada a la automatización de la gestión educativa. El núcleo del sistema es un motor de lógica de negocio respaldado por MongoDB, que gestiona perfiles pedagógicos y un sistema transaccional de créditos en tiempo real. A nivel frontend, destaca la implementación de interfaces altamente interactivas y formularios multipaso con gestión de estado global optimizada (evitando prop drilling y cascading renders) mediante react-hook-form y validación tipada con Zod.`;
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
  const catCostaSpanishLMS = [
    "Next.js App Router",
    "TypeScript",
    "Firebase Storage",
    "MongoDB",
    "React Hook Form",
    "Zod",
    "Arquitectura SaaS",
    "Formularios Complejos",
    "OAuth",
  ];

  return (
    <div className="w-full max-w-7xl grid grid-cols-1 mt-10 items-center justify-center gap-5">
      <div className="h-full">
        <ProjectCard
          image={CostaSpanishMockup}
          alt="Costa Spanish Academy Project Image"
          title="CostaSpanish Academy"
          subtitle="Landing page para venta y presentación de cursos de español."
          desc={descCostaSpanish}
          category={catCostaSpanish}
          codeUrl="https://github.com/Michael8991/costaspanish-academy"
          url="https://www.costaspanishclass.com"
          theme="light"
          status="done"
          id="001"
          locale={locale}
        />
      </div>

      <div className="h-full">
        <ProjectCard
          image={CostaSpanishMockup}
          alt="SaaS for Educational Management"
          title="Learning System Managment CostaSpanish"
          subtitle="SaaS for Educational Management"
          desc={descLMSCostaSpanish}
          category={catCostaSpanishLMS}
          codeUrl={`https://github.com/Michael8991/costaspanish-lms`}
          demo={`https://michael-rodriguez.dev/projects/demo/002`}
          theme="light"
          status="in-progress"
          id="002"
          locale={locale}
        />
      </div>
    </div>
  );
}
