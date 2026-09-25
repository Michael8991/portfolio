"use client";

import { faEnvelope, faFolder, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigation = {
  es: [
    { section: "projects-section", label: "Proyectos", icon: faFolder },
    { section: "about-section", label: "Sobre mí", icon: faUser },
  ],
  en: [
    { section: "projects-section", label: "Projects", icon: faFolder },
    { section: "about-section", label: "About", icon: faUser },
  ],
};

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() === "en" ? "en" : "es";
  const homePath = `/${currentLocale}`;
  const isHome = pathname === homePath || pathname === `${homePath}/`;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.history.replaceState(null, "", `#${id}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const changeLocale = (locale: "es" | "en") => {
    const cleanPath = pathname.replace(/^\/(es|en)/, "");
    router.replace(`/${locale}${cleanPath}${window.location.hash}`, {
      scroll: false,
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-5">
      <nav
        aria-label={
          currentLocale === "es" ? "Navegación principal" : "Main navigation"
        }
        className="flex max-w-full items-center gap-0.5 rounded-2xl border border-[var(--hero-border)] bg-white/85 p-1.5 text-[var(--hero-forest)] shadow-[0_10px_30px_rgba(23,59,46,0.10)] backdrop-blur-xl sm:gap-1 sm:px-2"
      >
        <Link
          href={homePath}
          aria-label={currentLocale === "es" ? "Ir al inicio" : "Go to home"}
          aria-current={isHome ? "page" : undefined}
          className={`grid size-11 shrink-0 place-items-center rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-forest)] sm:size-10 ${
            isHome
              ? "bg-[var(--hero-lime)] text-[var(--hero-forest)] shadow-sm"
              : "hover:bg-[var(--hero-lime-subtle)]"
          }`}
        >
          <FontAwesomeIcon icon={faHouse} aria-hidden="true" />
        </Link>

        {navigation[currentLocale].map((item) => (
          <button
            key={item.section}
            type="button"
            onClick={() => scrollToSection(item.section)}
            aria-label={item.label}
            className="flex min-h-11 items-center gap-1.5 rounded-xl px-2 text-xs font-semibold transition-colors hover:bg-[var(--hero-lime-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-forest)] sm:min-h-10 sm:px-3 sm:text-sm"
          >
            <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
            <span className="max-[439px]:sr-only">{item.label}</span>
          </button>
        ))}

        <a
          href="mailto:michael2002982@gmail.com"
          aria-label={currentLocale === "es" ? "Contacto" : "Contact"}
          className="flex min-h-11 items-center gap-1.5 rounded-xl px-2 text-xs font-semibold transition-colors hover:bg-[var(--hero-lime-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-forest)] sm:min-h-10 sm:px-3 sm:text-sm"
        >
          <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
          <span className="max-[639px]:sr-only">
            {currentLocale === "es" ? "Contacto" : "Contact"}
          </span>
        </a>

        <div
          className="ml-0.5 flex items-center border-l border-[var(--hero-border)] pl-1 sm:ml-1 sm:pl-2"
          aria-label={
            currentLocale === "es" ? "Cambiar idioma" : "Change language"
          }
        >
          {(["es", "en"] as const).map((locale) => (
            <button
              key={locale}
              type="button"
              onClick={() => changeLocale(locale)}
              aria-pressed={currentLocale === locale}
              aria-label={locale === "es" ? "Español" : "English"}
              className={`flex h-9 w-8 items-center justify-center rounded-lg text-[11px] font-bold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--hero-forest)] sm:w-9 ${
                currentLocale === locale
                  ? "bg-[var(--hero-forest)] text-white shadow-sm"
                  : "text-[var(--hero-muted)] hover:bg-[var(--hero-lime-subtle)] hover:text-[var(--hero-forest)]"
              }`}
            >
              {locale}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
