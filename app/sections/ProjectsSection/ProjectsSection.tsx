import CatalogCaseStudy from "@/components/CatalogCaseStudy";

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="@container min-h-screen">
      <div className="w-full max-w-7xl mx-auto py-10 flex flex-col">
        <span className="text-3xl lg:text-5xl font-medium w-full">
          Proyectos
        </span>
        <CatalogCaseStudy />
      </div>
    </section>
  );
}
