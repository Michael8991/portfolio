import type { MetadataRoute } from "next";

import { featuredCaseStudies } from "@/lib/case-studies";
import { absoluteUrl, localizedPath } from "@/lib/seo";

const indexablePaths = [
  "",
  "/privacy",
  ...featuredCaseStudies.map((caseStudy) => caseStudy.route),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.flatMap((pathname) =>
    (["es", "en"] as const).map((locale) => ({
      url: absoluteUrl(localizedPath(locale, pathname)),
      alternates: {
        languages: {
          es: absoluteUrl(localizedPath("es", pathname)),
          en: absoluteUrl(localizedPath("en", pathname)),
          "x-default": absoluteUrl(pathname || "/"),
        },
      },
    })),
  );
}
