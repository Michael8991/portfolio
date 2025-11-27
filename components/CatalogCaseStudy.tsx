import ProjectCard from "./ui/ProjectCard";
import CostaSpanishMain from "@/public/CostaSpanishAcademy/CostaSpanishAcademyMain.png";

export default function CatalogCaseStudy() {
  return (
    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 mt-10 items-center justify-center">
      <div className="">
        <ProjectCard
          image={CostaSpanishMain}
          alt="Costa Spanish Academy Project Image"
          title="CostaSpanish Landing Page"
          category={["Frontend", "UI/UX Design"]}
          url=""
        />
      </div>
      <div className="row-span-2 col-span-2 border border-white"></div>
      <div className="row-span-2 border border-white"></div>
      <div className="col-span-2 border border-white"></div>
    </div>
  );
}
