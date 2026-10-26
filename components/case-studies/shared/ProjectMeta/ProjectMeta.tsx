import type { ReactNode } from "react";

export interface ProjectMetaItem {
  label: ReactNode;
  value: ReactNode;
}

export interface ProjectMetaProps {
  items: readonly ProjectMetaItem[];
  className?: string;
}

function hasValue(value: ReactNode) {
  return value !== null && value !== undefined && value !== "" && value !== false;
}

export default function ProjectMeta({
  items,
  className = "",
}: ProjectMetaProps) {
  const visibleItems = items.filter((item) => hasValue(item.value));

  if (!visibleItems.length) {
    return null;
  }

  return (
    <dl
      className={`grid gap-x-8 gap-y-5 border-y border-[var(--hero-border)] py-6 sm:grid-cols-2 ${className}`}
    >
      {visibleItems.map((item, index) => (
        <div key={index} className="min-w-0">
          <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--hero-muted)]/80">
            {item.label}
          </dt>
          <dd className="mt-2 break-words text-sm font-semibold leading-relaxed text-[var(--hero-ink)] sm:text-[15px]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
