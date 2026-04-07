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
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("aboutMe");

  const technicalItems = [
    { icon: faSquareFigma, label: t("technicalTraining.items.uxui") },
    { icon: faSquareJs, label: t("technicalTraining.items.javascript") },
    { icon: faAngular, label: t("technicalTraining.items.typescript") },
    { icon: faReact, label: t("technicalTraining.items.react") },
    { icon: faNodeJs, label: t("technicalTraining.items.nodejs") },
    { icon: faCode, label: t("technicalTraining.items.nextjs") },
  ];

  return (
    <section
      id="about-section"
      className="@container bg-[#688ea6] min-h-screen items-center justify-center flex"
    >
      <div className="w-full max-w-7xl py-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col px-2 mb-5">
          <span className="text-3xl lg:text-5xl font-medium w-full">
            {t("title")}
          </span>

          <p className="mt-4 text-md">{t("intro.paragraph1")}</p>
          <p className="mt-2 text-md">{t("intro.paragraph2")}</p>
          <p className="mt-2 text-md">{t("intro.paragraph3")}</p>
        </div>

        <div className="w-full flex flex-col px-2 items-center">
          <div className="w-full mx-2 rounded-2xl bg-white shadow-lg p-4 mb-2">
            <div className="flex text-[#688ea6] text-2xl font-semibold gap-2 items-center ">
              <div className="bg-[#688ea6] rounded-xl p-2">
                <FontAwesomeIcon icon={faGraduationCap} color="white" />
              </div>
              <span className="font-light text-black/60">
                {t("education.title")}
              </span>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col text-black/60">
                <span className="text-lg">{t("education.item1.degree")}</span>
                <p className="text-sm italic">{t("education.item1.meta")}</p>
              </div>

              <div className="flex flex-col text-black/60">
                <span className="text-lg">{t("education.item2.degree")}</span>
                <p className="text-sm italic">{t("education.item2.meta")}</p>
              </div>
            </div>
          </div>

          <div className="w-full mx-2 rounded-2xl bg-white shadow-lg mb-2 p-4">
            <div className="flex text-[#688ea6] mt-3 text-2xl font-semibold gap-2 items-center ">
              <div className="bg-[#688ea6] rounded-xl p-2">
                <FontAwesomeIcon icon={faLaptopCode} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-light text-black/60">
                  {t("technicalTraining.title")}
                </span>
                <span className="font-extralight italic text-xs">
                  {t("technicalTraining.subtitle")}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 mx-auto">
              {technicalItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center text-black/60 gap-2"
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                  <span className="text-lg">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full mx-2 rounded-2xl bg-white shadow-lg p-4">
            <div className="flex text-[#688ea6] mt-3 text-2xl font-semibold gap-2 items-center ">
              <div className="bg-[#688ea6] rounded-xl p-2">
                <FontAwesomeIcon icon={faBriefcase} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="font-light text-black/60">
                  {t("experience.title")}
                </span>
                <span className="font-extralight italic text-xs">
                  {t("experience.subtitle")}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex flex-col text-black/60">
                <span className="text-lg">{t("experience.item1.role")}</span>
                <p className="text-sm italic">{t("experience.item1.meta")}</p>
                <ul className="text-sm font-light mt-1 list-disc list-inside">
                  <li className="mb-1">{t("experience.item1.points.0")}</li>
                  <li className="mb-1">{t("experience.item1.points.1")}</li>
                  <li className="mb-1">{t("experience.item1.points.2")}</li>
                </ul>
              </div>

              <div className="flex flex-col text-black/60">
                <span className="text-lg">{t("experience.item2.role")}</span>
                <p className="text-sm italic">{t("experience.item2.meta")}</p>
                <ul className="text-sm font-light mt-1 list-inside">
                  <li className="mb-1">
                    <strong>
                      {t("experience.item2.points.0.title")}
                      <br />
                    </strong>
                    {t("experience.item2.points.0.description")}
                  </li>
                  <li className="mb-1">
                    <strong>
                      {t("experience.item2.points.1.title")}
                      <br />
                    </strong>
                    {t("experience.item2.points.1.description")}
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
