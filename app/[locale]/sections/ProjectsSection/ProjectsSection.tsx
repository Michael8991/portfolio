import CatalogCaseStudy from "@/components/CatalogCaseStudy";

interface ProjectSectionProps {
  locale: string;
}

export default function ProjectsSection({ locale }: ProjectSectionProps) {
  return (
    <section id="projects-section" className="@container min-h-screen">
      <div className="w-full max-w-7xl mx-auto py-10 flex flex-col">
        <span className="max-lg:mx-2 text-3xl lg:text-5xl font-medium w-full">
          {locale === "es" ? "Proyectos" : "Projects"}
        </span>
        <CatalogCaseStudy locale={locale} />
      </div>
    </section>
  );
}
