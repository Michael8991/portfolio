"use client";

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
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

import photoCV from "@/public/MichaelMainPhoto.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: 0.15 + i * 0.13,
    },
  }),
};

const techItemVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 18,
      delay: i * 0.08,
    },
  }),
};

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    x.set((e.clientX - left) / width - 0.5);
    y.set((e.clientY - top) / height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

function TiltCard({
  children,
  custom,
}: {
  children: React.ReactNode;
  custom: number;
}) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt();

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      custom={custom}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      whileHover={{ boxShadow: "0 24px 48px rgba(0,0,0,0.18)" }}
      className="w-full rounded-2xl bg-white/95 backdrop-blur-sm shadow-md p-3 sm:p-5 mb-3 cursor-pointer border border-white/60"
    >
      {children}
    </motion.div>
  );
}

function CardHeader({
  icon,
  label,
}: {
  icon: typeof faGraduationCap;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <motion.div
        whileHover={{ rotate: [0, -15, 15, -10, 10, 0], scale: 1.15 }}
        transition={{ duration: 0.5 }}
        className="bg-[#ff512f] rounded-lg p-1.5 sm:p-2 flex items-center justify-center"
      >
        <FontAwesomeIcon
          icon={icon}
          color="white"
          className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
        />
      </motion.div>
      <span className="font-semibold text-base sm:text-lg text-black/90 tracking-tight">
        {label}
      </span>
    </div>
  );
}

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
      className="@container relative bg-[#3A6F8F] min-h-screen items-center justify-center flex text-white overflow-hidden"
    >
      {/* Floating background orbs */}
      <motion.div
        className="pointer-events-none absolute top-10 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 right-16 w-96 h-96 rounded-full bg-[#ff512f]/10 blur-3xl"
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative w-full max-w-7xl py-12 px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {/* ── Left column ── */}
        <div className="flex flex-col">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-2xl sm:text-3xl lg:text-5xl font-medium w-full"
          >
            {t("title")}
          </motion.span>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-sm sm:text-base opacity-90 leading-relaxed"
          >
            {t("intro.paragraph1")}
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-2 text-sm sm:text-base opacity-90 leading-relaxed"
          >
            {t("intro.paragraph2")}
          </motion.p>
          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-2 text-sm sm:text-base opacity-90 leading-relaxed"
          >
            {t("intro.paragraph3")}
          </motion.p>

          {/* Photo */}
          <motion.div
            variants={fadeUp}
            custom={4}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative mx-auto mt-8"
            style={{
              height: "clamp(220px, 50vw, 420px)",
              width: "clamp(220px, 50vw, 420px)",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{ scale: [1, 1.04, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src={photoCV}
              alt="Michael's Photo"
              fill
              className="object-cover object-top rounded-2xl"
            />
          </motion.div>
        </div>

        {/* ── Right column ── */}
        <motion.div
          variants={staggerContainer}
          className="w-full flex flex-col"
        >
          {/* Education card */}
          <TiltCard custom={0}>
            <CardHeader icon={faGraduationCap} label={t("education.title")} />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-2 mt-2 divide-y divide-black/5"
            >
              {[
                <div key="e1" className="flex flex-col pt-2 first:pt-0">
                  <span className="text-sm sm:text-base font-semibold text-black/90">
                    {t("education.item1.degree")}
                  </span>
                  <p className="text-xs sm:text-sm text-black/50 italic mt-0.5">
                    {t("education.item1.meta")}
                  </p>
                </div>,
                <div key="e2" className="flex flex-col pt-2">
                  <span className="text-sm sm:text-base font-semibold text-black/90">
                    {t("education.item2.degree")}
                  </span>
                  <span className="text-xs text-black/40 italic">
                    {t("education.item2.subtitle")}
                  </span>
                  <p className="text-xs sm:text-sm text-black/50 italic mt-0.5">
                    {t("education.item2.meta")}
                  </p>
                </div>,
                <div key="e3" className="flex flex-col pt-2">
                  <span className="text-sm sm:text-base font-semibold text-black/90">
                    {t("education.item3.degree")}
                  </span>
                  <span className="text-xs text-black/40 italic">
                    {t("education.item3.subtitle")}
                  </span>
                </div>,
              ].map((child, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {child}
                </motion.div>
              ))}
            </motion.div>
          </TiltCard>

          {/* Technical training card */}
          <TiltCard custom={1}>
            <CardHeader
              icon={faLaptopCode}
              label={t("technicalTraining.title")}
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2 mt-2 text-black/90"
            >
              {technicalItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={techItemVariants}
                  custom={i}
                  whileHover={{ scale: 1.08, color: "#ff512f" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex items-center gap-1.5 text-black/80 cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-4 h-4 shrink-0"
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </TiltCard>

          {/* Experience card */}
          <TiltCard custom={2}>
            <CardHeader icon={faBriefcase} label={t("experience.title")} />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-3 mt-2 text-black/90"
            >
              <motion.div
                variants={fadeUp}
                custom={0}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col"
              >
                <span className="text-sm sm:text-base font-semibold text-black/90">
                  {t("experience.item1.role")}
                </span>
                <p className="text-xs sm:text-sm text-black/50 italic mt-0.5">
                  {t("experience.item1.meta")}
                </p>
                <ul className="text-xs sm:text-sm mt-1.5 list-disc list-inside space-y-0.5 text-black/70">
                  <li>{t("experience.item1.points.0")}</li>
                  <li>{t("experience.item1.points.1")}</li>
                  <li>{t("experience.item1.points.2")}</li>
                </ul>
              </motion.div>

              <div className="border-t border-black/8" />

              <motion.div
                variants={fadeUp}
                custom={1}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col"
              >
                <span className="text-sm sm:text-base font-semibold text-black/90">
                  {t("experience.item2.role")}
                </span>
                <p className="text-xs sm:text-sm text-black/50 italic mt-0.5">
                  {t("experience.item2.meta")}
                </p>
                <ul className="text-xs sm:text-sm mt-1.5 list-inside space-y-1.5 text-black/70">
                  <li>
                    <span className="font-semibold text-black/80">
                      {t("experience.item2.points.0.title")}
                    </span>
                    <span className="block pl-3 mt-0.5">
                      {t("experience.item2.points.0.description")}
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold text-black/80">
                      {t("experience.item2.points.1.title")}
                    </span>
                    <span className="block pl-3 mt-0.5">
                      {t("experience.item2.points.1.description")}
                    </span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
