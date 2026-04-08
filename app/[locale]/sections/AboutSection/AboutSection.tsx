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
      whileHover={{ boxShadow: "0 24px 48px rgba(0,0,0,0.22)" }}
      className="w-full mx-2 rounded-2xl bg-white shadow-lg p-4 mb-2 cursor-pointer"
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
    <div className="flex text-[#ff512f] text-2xl font-semibold gap-2 items-center">
      <motion.div
        whileHover={{ rotate: [0, -15, 15, -10, 10, 0], scale: 1.15 }}
        transition={{ duration: 0.5 }}
        className="bg-[#ff512f] rounded-xl p-2"
      >
        <FontAwesomeIcon icon={icon} color="white" />
      </motion.div>
      <span className="font-semibold text-black/90">{label}</span>
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
      className="@container bg-[#3A6F8F] min-h-screen items-center justify-center flex text-white overflow-hidden"
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
        className="relative w-full max-w-7xl py-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* ── Left column ── */}
        <div className="flex flex-col px-2 mb-5">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-3xl lg:text-5xl font-medium w-full"
          >
            {t("title")}
          </motion.span>

          <motion.p variants={fadeUp} custom={1} className="mt-4 text-md">
            {t("intro.paragraph1")}
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="mt-2 text-md">
            {t("intro.paragraph2")}
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="mt-2 text-md">
            {t("intro.paragraph3")}
          </motion.p>

          {/* Photo with hover lift + subtle float */}
          <motion.div
            variants={fadeUp}
            custom={4}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative mx-auto mt-10"
            style={{ height: "480px", width: "480px" }}
          >
            {/* Accent ring that pulses */}
            <motion.div
              className="absolute inset-0 rounded-2xl  "
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
          className="w-full flex flex-col px-2 items-center"
        >
          {/* Education card */}
          <TiltCard custom={0}>
            <CardHeader icon={faGraduationCap} label={t("education.title")} />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-2 mt-2 text-black/90"
            >
              {[
                <div key="e1" className="flex flex-col text-black/90">
                  <span className="text-lg font-medium">
                    {t("education.item1.degree")}
                  </span>
                  <p className="text-sm italic font-medium">
                    {t("education.item1.meta")}
                  </p>
                </div>,
                <div key="e2" className="flex flex-col text-black/90">
                  <span className="text-lg font-medium">
                    {t("education.item2.degree")}
                  </span>
                  <span className="text-xs italic">
                    {t("education.item2.subtitle")}
                  </span>
                  <p className="text-sm italic font-medium">
                    {t("education.item2.meta")}
                  </p>
                </div>,
                <div key="e3" className="flex flex-col text-black/90">
                  <span className="text-lg font-medium">
                    {t("education.item3.degree")}
                  </span>
                  <span className="text-xs italic">
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
              className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 mx-auto text-black/90"
            >
              {technicalItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={techItemVariants}
                  custom={i}
                  whileHover={{ scale: 1.12, color: "#ff512f" }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex items-center gap-2 text-black/90 cursor-pointer"
                >
                  <FontAwesomeIcon icon={item.icon} size="lg" />
                  <span className="text-lg font-medium">{item.label}</span>
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
              {/* Experience item 1 */}
              <motion.div
                variants={fadeUp}
                custom={0}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col text-black/90"
              >
                <span className="text-lg font-medium">
                  {t("experience.item1.role")}
                </span>
                <p className="text-sm italic font-medium">
                  {t("experience.item1.meta")}
                </p>
                <ul className="text-sm mt-1 list-disc list-inside">
                  <li className="mb-1">{t("experience.item1.points.0")}</li>
                  <li className="mb-1">{t("experience.item1.points.1")}</li>
                  <li className="mb-1">{t("experience.item1.points.2")}</li>
                </ul>
              </motion.div>

              {/* Divider */}
              <motion.hr
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="border-black/10 origin-left"
              />

              {/* Experience item 2 */}
              <motion.div
                variants={fadeUp}
                custom={1}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col text-black/90"
              >
                <span className="text-lg font-medium">
                  {t("experience.item2.role")}
                </span>
                <p className="text-sm italic font-medium">
                  {t("experience.item2.meta")}
                </p>
                <ul className="text-sm mt-1 list-inside">
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
              </motion.div>
            </motion.div>
          </TiltCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
