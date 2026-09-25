"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, Download, MapPin } from "lucide-react";
import michaelPhoto from "@/public/MichaelMainPhoto.png";

interface HeroSectionProps {
  locale: string;
}

type Technology = {
  name: string;
  icon: string;
};

const technologies: Technology[] = [
  { name: "React", icon: "/stack/react.svg" },
  { name: "Next.js", icon: "/stack/nextdotjs.svg" },
  { name: "TypeScript", icon: "/stack/typescript.svg" },
  { name: "Node.js", icon: "/stack/nodejs.svg" },
  { name: "MongoDB", icon: "/stack/mongodb.svg" },
];

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations("Hero");
  const u = useTranslations("ui");
  const prefersReducedMotion = useReducedMotion();
  const cvFile =
    locale === "es"
      ? "ESPJul26MichaelRodriguezSoftwareDeveloper.pdf"
      : "ENJul26MichaelRodriguezSoftwareDeveloper.pdf";

  const scrollToProjects = () =>
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      id="hero-section"
      className="relative isolate flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden bg-[var(--hero-background)] px-4 pb-10 pt-28 text-[var(--hero-ink)] sm:px-6 sm:pb-12 sm:pt-32 lg:px-8 lg:pb-10 lg:pt-28"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="grid min-w-0 items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,.95fr)] lg:gap-8">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.65,
              ease: "easeOut",
            }}
            className="z-10 mx-auto min-w-0 max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.22em] text-[var(--hero-forest)] sm:text-sm">
              {t("name")}
            </p>
            <h1 className="text-balance text-[clamp(2.8rem,11vw,6.5rem)] font-extrabold leading-[0.88] tracking-[-0.055em] text-[var(--hero-ink)] lg:text-[clamp(4.25rem,6.8vw,6.5rem)]">
              {t("titlePrimary")}
              <span className="block text-[var(--hero-forest)]">
                {t("titleSecondary")}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-[32.5rem] text-base font-medium leading-[1.65] text-[var(--hero-muted)] sm:text-[17px] lg:mx-0">
              {t("description")}
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={scrollToProjects}
                className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-[14px] bg-[var(--hero-forest)] px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(23,59,46,0.16),inset_0_1px_0_rgba(255,255,255,0.14)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#204d3c] hover:shadow-[0_11px_28px_rgba(23,59,46,0.20),inset_0_1px_0_rgba(255,255,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hero-forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-background)] motion-reduce:transform-none sm:w-auto"
              >
                {u("buttons.viewProjects")}
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[var(--hero-lime)] text-[var(--hero-forest)]">
                  <ArrowDownRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 motion-reduce:transform-none"
                  />
                </span>
              </button>
              <a
                href={`/${cvFile}`}
                download={cvFile}
                className="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-[14px] border border-[var(--hero-border)] bg-white/70 px-5 text-sm font-semibold text-[var(--hero-forest)] shadow-[0_8px_24px_rgba(23,59,46,0.06),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(23,59,46,0.18)] hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hero-forest)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hero-background)] motion-reduce:transform-none sm:w-auto"
              >
                {u("buttons.downloadCV")}
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--hero-lime-soft)] text-[var(--hero-forest)]">
                  <Download
                    size={16}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-y-0.5 motion-reduce:transform-none"
                  />
                </span>
              </a>
            </div>

            <dl className="mx-auto mt-5 flex min-w-0 max-w-xl flex-wrap items-center justify-center gap-3 lg:mx-0 lg:justify-start">
              <div className="flex min-h-9 items-center gap-2 rounded-full border border-[var(--hero-border)] bg-white/60 px-3.5 py-2 backdrop-blur-sm">
                <dt className="sr-only">{t("statusLabel")}</dt>
                <dd className="flex items-center gap-2 text-[13px] font-medium leading-none text-[var(--hero-forest)]">
                  <span
                    className="size-2 shrink-0 rounded-full bg-[#18a768] shadow-[0_0_0_4px_rgba(24,167,104,0.12)]"
                    aria-hidden="true"
                  />
                  {u("buttons.openToWork")}
                </dd>
              </div>
              <div className="flex min-h-9 items-center gap-2 rounded-full border border-[var(--hero-border)] bg-white/60 px-3.5 py-2 backdrop-blur-sm">
                <dt className="sr-only">{t("locationLabel")}</dt>
                <dd className="flex items-center gap-2 text-[13px] font-medium leading-none text-[var(--hero-forest)]">
                  <MapPin
                    size={14}
                    strokeWidth={1.9}
                    className="shrink-0 text-[var(--hero-forest)]/70"
                    aria-hidden="true"
                  />
                  {t("location")}
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.7,
              ease: "easeOut",
              delay: prefersReducedMotion ? 0 : 0.12,
            }}
            className="relative mx-auto h-[23rem] w-full min-w-0 max-w-[39rem] sm:h-[31rem] lg:h-[clamp(28rem,58vh,35rem)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[-5%] inset-y-[-2%] bg-[radial-gradient(ellipse_at_center,rgba(183,255,56,0.82)_0%,rgba(183,255,56,0.48)_30%,rgba(216,255,151,0.24)_50%,transparent_72%)] sm:inset-x-[-10%]"
            />
            <Image
              src={michaelPhoto}
              alt={t("photoAlt")}
              priority
              sizes="(max-width: 639px) 94vw, (max-width: 1023px) 496px, 540px"
              className="absolute bottom-0 left-1/2 z-10 h-auto w-[min(94%,24rem)] max-w-none -translate-x-1/2 object-contain [mask-image:linear-gradient(to_bottom,#000_0%,#000_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_82%,transparent_100%)] sm:w-[min(80%,31rem)] lg:w-[clamp(24rem,36vw,33.75rem)]"
            />
          </motion.div>
        </div>

        <motion.section
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.55,
            ease: "easeOut",
            delay: prefersReducedMotion ? 0 : 0.2,
          }}
          aria-labelledby="hero-stack-heading"
          className="mt-8 rounded-[20px] border border-[var(--hero-border)] bg-white/70 p-3.5 shadow-[0_18px_45px_rgba(23,59,46,0.08),inset_0_1px_0_rgba(255,255,255,0.80)] backdrop-blur-xl sm:mt-10 sm:px-4 lg:mt-8 lg:flex lg:items-center lg:gap-4"
        >
          <h2
            id="hero-stack-heading"
            className="mb-2.5 shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--hero-forest)]/65 lg:mb-0 lg:border-r lg:border-[var(--hero-border)] lg:py-2 lg:pr-5"
          >
            {t("stackLabel")}
          </h2>
          <ul className="grid min-w-0 flex-1 grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-5 lg:gap-2">
            {technologies.map((technology, index) => (
              <li
                key={technology.name}
                className={index === technologies.length - 1 ? "max-sm:col-span-2 max-sm:w-[calc(50%-0.1875rem)] max-sm:justify-self-center" : ""}
              >
                <div
                  tabIndex={0}
                  aria-label={technology.name}
                  className="group flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-2.5 py-2 text-sm font-semibold text-[var(--hero-forest)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[var(--hero-lime-subtle)] focus-visible:-translate-y-0.5 focus-visible:bg-[var(--hero-lime-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hero-forest)]/60 motion-reduce:transform-none"
                >
                  <Image
                    src={technology.icon}
                    alt=""
                    width={26}
                    height={26}
                    className="size-[26px] shrink-0 object-contain"
                  />
                  <span>{technology.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </section>
  );
}
