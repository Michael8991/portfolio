export type DocSectionKind =
  | "projectOverview"
  | "productVision"
  | "coreModules"
  | "systemArchitecture"
  | "domainModeling"
  | "keyUserFlows"
  | "engineeringDecisions"
  | "projectStructure"
  | "currentStatusRoadmap"
  | "lessonsLearned";

export interface DocSubItem {
  id: string;
  label: string;
  href: string;
  content?: string;
  badge?: string;
  isNew?: boolean;
}

export interface DocSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  content?: string;
  href?: string;
  items?: DocSubItem[];
  badge?: string;
  kind?: DocSectionKind;
}
