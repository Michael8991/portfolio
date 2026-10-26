import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";

export interface MediaBlockProps {
  src: StaticImageData;
  alt: string;
  title: ReactNode;
  caption: ReactNode;
  eyebrow?: ReactNode;
  sizes: string;
  priority?: boolean;
  className?: string;
}

export default function MediaBlock({
  src,
  alt,
  title,
  caption,
  eyebrow,
  sizes,
  priority = false,
  className = "",
}: MediaBlockProps) {
  return (
    <figure
      data-case-study-media
      className={`overflow-hidden rounded-[clamp(1.25rem,3vw,2rem)] bg-[var(--hero-surface-strong)] shadow-[0_20px_60px_rgba(23,59,46,0.08)] ${className}`}
    >
      <div className="overflow-hidden border border-[var(--hero-border)] bg-[var(--hero-background)]">
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full object-cover"
        />
      </div>

      <figcaption className="grid gap-3 border-x border-b border-[var(--hero-border)] px-5 py-5 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 sm:px-7 sm:py-6">
        <div>
          {eyebrow ? (
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--hero-forest)]/70">
              {eyebrow}
            </p>
          ) : null}
          <h3 className="mt-2 text-lg font-semibold leading-snug tracking-[-0.02em] text-[var(--hero-ink)] sm:text-xl">
            {title}
          </h3>
        </div>
        <p className="text-sm leading-[1.75] text-[var(--hero-muted)] sm:text-base">
          {caption}
        </p>
      </figcaption>
    </figure>
  );
}
