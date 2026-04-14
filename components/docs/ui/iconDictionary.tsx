import { DocSectionKind } from "@/lib/types/DocSidebarTypes";
import {
  Boxes,
  CircuitBoard,
  Flag,
  FolderTree,
  GitBranch,
  Goal,
  LayoutPanelLeft,
  Lightbulb,
  LucideIcon,
  LucideProps,
  Settings2,
  Workflow,
  FileText,
} from "lucide-react";

export const docSectionIconMap: Record<DocSectionKind, LucideIcon> = {
  projectOverview: LayoutPanelLeft,
  productVision: Goal,
  coreModules: Boxes,
  systemArchitecture: CircuitBoard,
  domainModeling: Workflow,
  keyUserFlows: GitBranch,
  engineeringDecisions: Settings2,
  projectStructure: FolderTree,
  currentStatusRoadmap: Flag,
  lessonsLearned: Lightbulb,
};

const defaultIcon = FileText;

export function getDocSectionIcon(
  kind: DocSectionKind,
  iconProps?: LucideProps,
) {
  const Icon = docSectionIconMap[kind] ?? defaultIcon;
  return <Icon size={16} strokeWidth={1.8} aria-hidden="true" {...iconProps} />;
}

export const DOC_SECTION_KIND_ORDER: DocSectionKind[] = [
  "projectOverview",
  "productVision",
  "coreModules",
  "systemArchitecture",
  "domainModeling",
  "keyUserFlows",
  "engineeringDecisions",
  "projectStructure",
  "currentStatusRoadmap",
  "lessonsLearned",
];
