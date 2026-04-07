import ProjectCard from "./ui/ProjectCard";
import CostaSpanishMockup from "@/public/CostaSpanishAcademy/MockCostaSpanishLandingv2.png";
import CostaSpanishLMSMockup from "@/public/CostaSpanishAcademy/MockCostaSpanishLMS.png";
import { useTranslations } from "next-intl";

interface CatalogCaseStudyProps {
  locale: string;
}

export default function CatalogCaseStudy({ locale }: CatalogCaseStudyProps) {
  const t = useTranslations("catalogCaseStudy");

  const catCostaSpanish = t.raw("project1.category") as string[];
  const catCostaSpanishLMS = t.raw("project2.category") as string[];

  return (
    <div className="w-full max-w-7xl grid grid-cols-1 mt-10 items-center justify-center gap-5">
      <div className="h-full">
        <ProjectCard
          image={CostaSpanishMockup}
          imgSize="xl"
          alt={t("project1.alt")}
          title={t("project1.title")}
          subtitle={t("project1.subtitle")}
          desc={t("project1.desc")}
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
          image={CostaSpanishLMSMockup}
          rotateImg={true}
          imgSize="md"
          alt={t("project2.alt")}
          title={t("project2.title")}
          subtitle={t("project2.subtitle")}
          desc={t("project2.desc")}
          category={catCostaSpanishLMS}
          codeUrl="https://github.com/Michael8991/costaspanish-lms"
          demo="https://michael-rodriguez.dev/projects/demo/002"
          theme="light"
          status="in-progress"
          id="002"
          locale={locale}
        />
      </div>
    </div>
  );
}
