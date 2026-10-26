import type { ReactNode } from "react";

export interface CaseStudyLayoutProps {
  hero: ReactNode;
  navigation?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export default function CaseStudyLayout({
  hero,
  navigation,
  children,
  className = "",
  contentClassName = "",
}: CaseStudyLayoutProps) {
  return (
    <main
      data-case-study-layout
      className={`min-h-screen overflow-clip bg-[var(--hero-background)] pb-[clamp(5rem,9vw,8rem)] pt-24 text-[var(--hero-ink)] sm:pt-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8 min-[1440px]:px-12">
        <div className="mx-auto w-full max-w-[87.5rem]">{hero}</div>

        <div
          className={`mt-8 min-w-0 sm:mt-10 min-[1180px]:mt-14 ${
            navigation
              ? "min-[1180px]:grid min-[1180px]:grid-cols-[14rem_minmax(0,1fr)] min-[1180px]:gap-12 min-[1440px]:gap-16"
              : ""
          }`}
        >
          {navigation ? (
            <aside className="contents min-[1180px]:block min-[1180px]:min-w-0">
              {navigation}
            </aside>
          ) : null}

          <div
            className={`min-w-0 self-start ${
              navigation ? "mt-10 min-[1180px]:mt-0" : ""
            }`}
          >
            <div
              data-case-study-content
              className={`mx-auto w-full max-w-[64rem] ${contentClassName}`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
