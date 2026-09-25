"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

const email = "michael2002982@gmail.com";

const professionalProfiles = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/michaelrodrigueziranzo",
    icon: faLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Michael8991",
    icon: faGithub,
  },
] as const;

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navigation = [
    { section: "hero-section", label: t("navigation.home") },
    { section: "about-section", label: t("navigation.about") },
    { section: "projects-section", label: t("navigation.projects") },
  ];

  return (
    <footer
      id="site-footer"
      className="w-full rounded-t-[24px] border-t border-stone-950/[0.07] bg-[#fffaf7] px-4 pt-9 text-[#151515] sm:px-6 sm:pt-10 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-9 md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-[1.4fr_.7fr_1fr] lg:gap-12">
          <section aria-labelledby="footer-intro-heading">
            <h2
              id="footer-intro-heading"
              className="text-xl font-semibold tracking-[-0.02em] text-[#151515]"
            >
              {t("title")}
            </h2>
            <p className="mt-2.5 max-w-[19rem] text-sm leading-[1.65] text-[#5E5A54]">
              {t("description")}
            </p>
          </section>

          <nav aria-label={t("navigationAria")}>
            <h2 className="text-sm font-semibold text-[#151515]">
              {t("navigationTitle")}
            </h2>
            <ul className="mt-2.5 space-y-0.5">
              {navigation.map((item) => (
                <li key={item.section}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.section)}
                    className="group inline-flex min-h-11 items-center text-sm font-medium text-[#5E5A54] transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-[#c94f17] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c94f17] motion-reduce:transform-none"
                  >
                    <span className="border-b border-transparent group-hover:border-current">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <section
            aria-labelledby="footer-contact-heading"
            className="md:col-span-2 lg:col-span-1"
          >
            <h2
              id="footer-contact-heading"
              className="text-sm font-semibold text-[#151515]"
            >
              {t("contactTitle")}
            </h2>
            <a
              href={`mailto:${email}`}
              className="mt-2.5 inline-flex min-h-11 max-w-full items-center gap-2 text-sm font-medium text-[#5E5A54] transition-colors hover:text-[#c94f17] focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c94f17]"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="size-4 shrink-0"
                aria-hidden="true"
              />
              <span className="break-all sm:break-normal">{email}</span>
            </a>

            <div className="mt-3.5 flex items-center gap-2">
              {professionalProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`profiles.${profile.name.toLowerCase()}`)}
                  className="grid size-11 place-items-center rounded-lg text-[#5E5A54] transition-[color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-stone-950/[0.05] hover:text-[#151515] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c94f17] motion-reduce:transform-none"
                >
                  <FontAwesomeIcon
                    icon={profile.icon}
                    className="size-[21px]"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 border-t border-stone-950/[0.07] py-4">
          <p className="text-xs text-[#5E5A54]/85">
            © {currentYear} {t("copyrightName")}
          </p>
        </div>
      </div>
    </footer>
  );
}
