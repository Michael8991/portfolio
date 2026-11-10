"use client";

import { Maximize2, X } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

interface ZoomableImageProps {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  expandLabel: string;
  closeLabel: string;
}

export default function ZoomableImage({
  src,
  alt,
  sizes,
  priority = false,
  expandLabel,
  closeLabel,
}: ZoomableImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        aria-label={`${expandLabel}: ${alt}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden bg-[var(--hero-background)] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--hero-forest)]"
      >
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.005] motion-reduce:transition-none"
        />
        <span className="absolute right-3 top-3 inline-flex min-h-10 items-center gap-2 rounded-xl border border-[var(--hero-border)] bg-white/95 px-3 text-xs font-semibold text-[var(--hero-forest)] shadow-[0_8px_24px_rgba(23,59,46,0.14)] backdrop-blur-sm transition-transform duration-200 group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none sm:right-4 sm:top-4">
          <Maximize2 aria-hidden="true" size={15} />
          {expandLabel}
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        className="m-auto max-h-[96svh] w-[min(96vw,112rem)] max-w-none overflow-hidden rounded-2xl border border-white/15 bg-[var(--hero-ink)] p-0 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop:bg-[rgba(10,18,15,0.82)] backdrop:backdrop-blur-sm open:flex open:flex-col"
      >
        <div className="flex min-h-14 shrink-0 items-center justify-between gap-4 border-b border-white/15 px-4 py-2 sm:px-5">
          <p className="truncate text-sm font-medium text-white/80">{alt}</p>
          <button
            type="button"
            onClick={closeDialog}
            className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl border border-white/20 px-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none"
          >
            <X aria-hidden="true" size={17} />
            {closeLabel}
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto p-2 sm:p-4">
          <Image
            src={src}
            alt={alt}
            sizes="96vw"
            className="mx-auto h-auto max-h-[calc(96svh-5rem)] w-auto max-w-full object-contain"
          />
        </div>
      </dialog>
    </>
  );
}
