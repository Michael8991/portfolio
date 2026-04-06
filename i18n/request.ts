import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "./routing";

import enHome from "@/messages/en/home/home.json";
import esHome from "@/messages/es/home/home.json";

const messagesByLocale = {
  en: {
    ...enHome,
  },
  es: {
    ...esHome,
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