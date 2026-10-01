"use client";

import { useRef } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import type { ProjectImage } from "@/data/types";

interface GalleryImageProps {
  image: ProjectImage;
  sizes: string;
}

/** A screenshot that opens full size in a modal dialog. The native dialog handles focus and Escape. */
export function GalleryImage({ image, sizes }: GalleryImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = () => dialogRef.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-lg border border-border transition-colors hover:border-accent"
        aria-label={`Enlarge: ${image.caption ?? image.alt}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="h-auto w-full"
        />
        <span
          className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-md bg-background/80 text-text-primary opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          aria-hidden="true"
        >
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClick={(event) => {
          // Clicking the backdrop (the dialog element itself) closes it
          if (event.target === event.currentTarget) close();
        }}
        className="m-auto max-h-[92vh] max-w-[min(92vw,1600px)] overflow-visible bg-transparent p-0 backdrop:bg-background/90 backdrop:backdrop-blur-sm"
        aria-label={image.caption ?? image.alt}
      >
        <div className="flex flex-col items-end gap-3">
          <button
            type="button"
            onClick={close}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-text-primary hover:border-accent"
            aria-label="Close image"
          >
            <X className="h-5 w-5" />
          </button>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="92vw"
            className="h-auto max-h-[80vh] w-auto rounded-lg border border-border object-contain"
          />
          {image.caption && (
            <p className="label-mono self-start text-text-primary">{image.caption}</p>
          )}
        </div>
      </dialog>
    </>
  );
}
