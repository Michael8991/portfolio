"use client";

import { DocSection } from "@/lib/types/DocSidebarTypes";
import DocSidebar from "./DocSidebar";
import { useTranslations } from "next-intl";

interface DocPageProps {
  id: string;
}

function deriveProjectKey(id: string) {
  if (!id) {
    return "project1";
  }

  if (id.startsWith("project")) {
    return id;
  }

  const numericId = Number.parseInt(id, 10);

  if (!Number.isNaN(numericId)) {
    return `project${numericId}`;
  }

  return `project${id}`;
}

export const DocPage = ({ id }: DocPageProps) => {
  const section: DocSection[] = [];

  const t = useTranslations("catalogCaseStudy");

  const projectKey = deriveProjectKey(id);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 text-slate-800 md:px-8 flex  items-center justify-center">
      <DocSidebar sections={section} />

      <h1 className="text-xl mt-20">{t(`${projectKey}.title`)}</h1>
    </div>
  );
};
