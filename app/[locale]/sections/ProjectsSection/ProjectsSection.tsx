import CatalogCaseStudy from "@/components/CatalogCaseStudy";

interface ProjectSectionProps {
  locale: string;
}

export default function ProjectsSection({ locale }: ProjectSectionProps) {
  return (
    <section
      id="projects-section"
      className="@container min-h-screen bg-white relative"
      // style={{
      //   background: "radial-gradient(to left, #fbbf24, #fff)",
      // }}
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            fill="#3A6F8F"
            d="M0,70 C150,-20 350,120 500,70 L500,0 L0,0 Z"
          />
        </svg>
      </div>
      <div className="w-full max-w-7xl mx-auto py-10 flex flex-col">
        <span className="max-lg:mx-2 text-3xl lg:text-5xl font-medium w-full text-black mt-3">
          {locale === "es" ? "Proyectos" : "Projects"}
        </span>
        <CatalogCaseStudy locale={locale} />
      </div>
    </section>
  );
}
