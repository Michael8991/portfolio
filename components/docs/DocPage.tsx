"use client";

import { DocSection, DocSectionKind } from "@/lib/types/DocSidebarTypes";
import DocSidebar from "./DocSidebar";
import { useTranslations } from "next-intl";
import { getDocSectionIcon } from "./ui/iconDictionary";
import { useEffect, useMemo, useState } from "react";
import DocContentRender from "./DocContentRender";

interface DocPageProps {
  id: string;
}

interface MessageDocSubItem {
  id: string;
  label: string;
  content?: string;
  href?: string;
  badge?: string;
  isNew?: boolean;
}

interface MessageDocSection {
  id: string;
  label: string;
  content?: string;
  kind: DocSectionKind;
  href?: string;
  badge?: string;
  items?: MessageDocSubItem[];
}

interface MessageDocSectionsByProject {
  [projectKey: string]: {
    sections?: MessageDocSection[];
  };
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

function mapDocSections(
  sections: MessageDocSection[] | undefined,
): DocSection[] {
  if (!sections?.length) {
    return [];
  }

  return sections.map((section) => ({
    id: section.id,
    label: section.label,
    content: section.content,
    icon: getDocSectionIcon(section.kind),
    href: section.href || undefined,
    badge: section.badge || undefined,
    items: section.items?.map((item) => ({
      id: item.id,
      label: item.label,
      content: item.content,
      href: item.href ?? "",
      badge: item.badge ?? "",
      isNew: item.isNew,
    })),
  }));
}

function getSectionsForProject(
  docSectionsTranslations: { raw: (key: string) => unknown },
  projectKey: string,
): MessageDocSection[] {
  const readRaw = (key: string) => {
    try {
      return docSectionsTranslations.raw(key);
    } catch {
      return undefined;
    }
  };

  const sectionsByProject = readRaw("projects") as
    | MessageDocSectionsByProject
    | undefined;
  const projectSections = sectionsByProject?.[projectKey]?.sections;
  const defaultSections = sectionsByProject?.default?.sections;

  if (projectSections?.length) {
    return projectSections;
  }

  if (defaultSections?.length) {
    return defaultSections;
  }

  const legacySections = readRaw("sections") as MessageDocSection[] | undefined;

  if (legacySections?.length) {
    return legacySections;
  }

  return [];
}

export const DocPage = ({ id }: DocPageProps) => {
  const projectTranslations = useTranslations("catalogCaseStudy");
  const docSectionsTranslations = useTranslations("docSections");
  const projectKey = deriveProjectKey(id);

  const sections = useMemo(
    () =>
      mapDocSections(
        getSectionsForProject(docSectionsTranslations, projectKey),
      ),
    [docSectionsTranslations, projectKey],
  );

  const initialActiveId = useMemo(() => {
    if (!sections.length) {
      return "";
    }

    return sections[0]?.items?.[0]?.id || sections[0]?.id || "";
  }, [sections]);

  const [activeId, setActiveId] = useState(initialActiveId);
  useEffect(() => {
    setActiveId(initialActiveId);
  }, [initialActiveId]);

  const handleNavigate = (href: string, nextId: string) => {
    setActiveId(nextId);
    // Future: add scroll or router navigation with href if needed.
  };

  return (
    <div className="flex flex-col w-full gap-8 ">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-slate-900 mb-1">
          {projectTranslations(`${projectKey}.title`)}
        </h1>
      </div>
      <div className="flex w-full gap-8 border-t border-gray-200 pt-5">
        <DocSidebar
          sections={sections}
          activeId={activeId}
          onNavigate={handleNavigate}
        />

        <div className="flex-1 flex flex-col items-center ">
          <DocContentRender sections={sections} activeId={activeId} />
        </div>
      </div>
    </div>
  );
};
