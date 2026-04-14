import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "./routing";

import enHome from "@/messages/en/home/home.json";
import esHome from "@/messages/es/home/home.json";
import enCatalogCaseStudy from "@/messages/en/projects/catalogCaseStudy.json";
import esCatalogCaseStudy from "@/messages/es/projects/catalogCaseStudy.json";
import enUi from "@/messages/en/ui/ui.json";
import esUi from "@/messages/es/ui/ui.json";
import enAboutMe from "@/messages/en/home/aboutMe.json"
import esAboutMe from "@/messages/es/home/aboutMe.json"
import esDocSection from "@/messages/es/projects/docSections.json"
import enDocSection from "@/messages/en/projects/docSections.json"

const messagesByLocale = {
  en: {
    ...enHome,
    ...enCatalogCaseStudy,
    ...enUi,
    ...enAboutMe,
    ...enDocSection,
  },
  es: {
    ...esHome,
    ...esCatalogCaseStudy,
    ...esUi,
    ...esAboutMe,
    ...esDocSection,
  },
} satisfies Record<Locale, Record<string, unknown>>;

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  const validLocale = locales.includes(requestedLocale as Locale)
    ? (requestedLocale as Locale)
    : defaultLocale;

  return {
    locale: validLocale,
    messages: messagesByLocale[validLocale],
  };
});