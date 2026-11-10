import academyResponsiveMockup from "@/public/CostaSpanishAcademy/mockupversionmobilecostaspanishlanding.png";
import academyRedesignMockup from "@/public/CostaSpanishAcademy/mockcostaspanishredesign.png";
import academyPreviousLanding from "@/public/CostaSpanishAcademy/CostaSpanishAcademyMain.png";
import lmsMockup from "@/public/CostaSpanishAcademy/MockCostaSpanishLMS.png";
import lmsDashboard from "@/public/CostaSpanishAcademy/LMS Demo/Demo LMS - Dashboard.png";
import lmsGroupSummary from "@/public/CostaSpanishAcademy/LMS Demo/Demo LMS - Grupo Resumen.png";
import lmsClassBook from "@/public/CostaSpanishAcademy/LMS Demo/Demo LMS - Libro de clases.png";
import lmsPlans from "@/public/CostaSpanishAcademy/LMS Demo/Demo LMS - Planes.png";

import type {
  CaseStudyDefinition,
  CaseStudyId,
} from "./types";

export const caseStudyRegistry = {
  "001": {
    id: "001",
    route: "/projects/001",
    key: "academy",
    kind: "landing",
    status: "production",
    content: {
      namespace: "caseStudies.academy",
      catalogKey: "academy",
    },
    links: {
      repository: "https://github.com/Michael8991/costaspanish-academy",
      website: "https://www.costaspanishclass.com",
    },
    media: {
      cover: {
        id: "academy-responsive",
        src: academyResponsiveMockup,
        altKey: "media.responsive.alt",
      },
      supporting: [
        {
          id: "academy-redesign",
          src: academyRedesignMockup,
          altKey: "media.redesign.alt",
        },
        {
          id: "academy-previous-landing",
          src: academyPreviousLanding,
          altKey: "media.previousLanding.alt",
        },
      ],
    },
    sections: [
      { id: "context", labelKey: "sections.context.label" },
      { id: "strategy", labelKey: "sections.strategy.label" },
      { id: "design", labelKey: "sections.design.label" },
      { id: "seo", labelKey: "sections.seo.label" },
      { id: "development", labelKey: "sections.development.label" },
      { id: "results", labelKey: "sections.results.label" },
      { id: "evolution", labelKey: "sections.evolution.label" },
    ],
  },
  "002": {
    id: "002",
    route: "/projects/002",
    key: "lms",
    kind: "app",
    status: "mvp-in-use",
    content: {
      namespace: "caseStudies.lms",
      catalogKey: "lms",
    },
    links: {
      repository: "https://github.com/Michael8991/costaspanish-lms",
      demoRoute: "/projects/002/demo",
    },
    media: {
      cover: {
        id: "lms-dashboard",
        src: lmsMockup,
        altKey: "media.dashboard.alt",
      },
      supporting: [
        {
          id: "lms-dashboard-capture",
          src: lmsDashboard,
          altKey: "media.dashboardCapture.alt",
        },
        {
          id: "lms-group-summary",
          src: lmsGroupSummary,
          altKey: "media.groupSummary.alt",
        },
        {
          id: "lms-plans",
          src: lmsPlans,
          altKey: "media.plans.alt",
        },
        {
          id: "lms-class-book",
          src: lmsClassBook,
          altKey: "media.classBook.alt",
        },
      ],
    },
    sections: [
      { id: "product", labelKey: "sections.product.label" },
      { id: "problem", labelKey: "sections.problem.label" },
      { id: "modules", labelKey: "sections.modules.label" },
      { id: "flows", labelKey: "sections.flows.label" },
      { id: "architecture", labelKey: "sections.architecture.label" },
      { id: "domain-modeling", labelKey: "sections.domainModeling.label" },
      {
        id: "engineering-decisions",
        labelKey: "sections.engineeringDecisions.label",
      },
      {
        id: "quality-integrity",
        labelKey: "sections.qualityIntegrity.label",
      },
      { id: "roadmap", labelKey: "sections.roadmap.label" },
      { id: "lessons", labelKey: "sections.lessons.label" },
    ],
  },
} as const satisfies Record<CaseStudyId, CaseStudyDefinition>;

export const featuredCaseStudies: readonly CaseStudyDefinition[] = [
  caseStudyRegistry["002"],
  caseStudyRegistry["001"],
];

export function getCaseStudy(id: string): CaseStudyDefinition | undefined {
  if (!Object.prototype.hasOwnProperty.call(caseStudyRegistry, id)) {
    return undefined;
  }

  return caseStudyRegistry[id as CaseStudyId];
}
