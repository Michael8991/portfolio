import { NextIntlClientProvider, hasLocale } from "next-intl";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Anton, Orbitron, Pinyon_Script } from "next/font/google";
import { getMessages, getTranslations } from "next-intl/server";

import { SiteHeader } from "@/components/Header";
import { locales } from "@/i18n/routing";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyonScript",
  weight: ["400"],
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: ["400"],
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata.global" });

  return {
    title: {
      default: t("title"),
      template: "%s | Michael Rodríguez",
    },
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${anton.variable} ${orbitron.variable} ${pinyonScript.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
