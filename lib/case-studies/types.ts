import type { StaticImageData } from "next/image";

export type CaseStudyId = "001" | "002";
export type CaseStudyKey = "academy" | "lms";
export type CaseStudyKind = "landing" | "app";
export type CaseStudyStatus = "production" | "mvp-in-use";
export type CaseStudyContentNamespace =
  | "caseStudies.academy"
  | "caseStudies.lms";

export interface CaseStudySectionDefinition {
  id: string;
  /** Translation key relative to the case study content namespace. */
  labelKey: string;
}

export interface CaseStudyContentReference {
  /** Translation namespace owned by this case study. */
  namespace: CaseStudyContentNamespace;
  /** Translation key below catalogCaseStudy. */
  catalogKey: CaseStudyKey;
}

export interface CaseStudyImageAsset {
  id: string;
  src: StaticImageData;
  /** Translation key relative to the case study content namespace. */
  altKey: string;
}

export interface CaseStudyDefinition {
  id: CaseStudyId;
  route: `/projects/${CaseStudyId}`;
  key: CaseStudyKey;
  kind: CaseStudyKind;
  status: CaseStudyStatus;
  content: CaseStudyContentReference;
  links: {
    repository: string;
    website?: string;
    demoRoute?: `/projects/${CaseStudyId}/demo`;
  };
  media: {
    cover: CaseStudyImageAsset;
    supporting?: readonly CaseStudyImageAsset[];
  };
  /** Ordered, project-owned chapters for the future case-study template. */
  sections: readonly CaseStudySectionDefinition[];
}

export type LandingCaseStudyDefinition = CaseStudyDefinition & {
  kind: "landing";
};

export type AppCaseStudyDefinition = CaseStudyDefinition & {
  kind: "app";
};
