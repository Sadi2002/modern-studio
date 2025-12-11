"use client";

import { useMemo } from "react";
import { urlFor } from "../../lib/sanity/client";
import Image from "next/image";

// Buduje layout: [{ type: "two" | "one", index }]
function buildLayout(gallery) {
  const layout = [];
  let i = 0;
  let isPair = true; // Zaczynamy od pary
  while (i < gallery.length) {
    if (isPair && i + 1 < gallery.length) {
      layout.push({ type: "two", index: i });
      i += 2;
    } else {
      layout.push({ type: "one", index: i });
      i += 1;
    }
    isPair = !isPair;
  }
  return layout;
}

export default function ProjectGallery({ gallery }) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  const layout = useMemo(() => buildLayout(gallery), [gallery]);

  const items = layout.map((block, idx) => {
    if (block.type === "one") {
      const big = gallery[block.index];
      if (!big) return null;

      return (
        <div key={`big-${idx}`} className="w-full mb-[10px] md:mb-[16px]">
          <div className="relative w-full overflow-hidden aspect-[8/6]  lg:aspect-[6/3]">
            <img
              src={big.imgSrc}
              alt={big.alt || ""}
              className="h-full w-full object-cover"
            />

            <Image
              src={urlFor(big).url()}
              alt={big.alt || ""}
              fill
              className="object-cover"
            />
          </div>
        </div>
      );
    }

    const firstSmall = gallery[block.index];
    const secondSmall = gallery[block.index + 1];

    return (
      <div
        key={`pair-${idx}`}
        className="flex flex-col gap-[10px] md:gap-[16px] lg:grid lg:grid-cols-2 mb-[10px] md:mb-[16px]"
      >
        {firstSmall && (
          <div className="relative overflow-hidden aspect-[8/9] lg:aspect-[6/6]">
            <Image
              src={urlFor(firstSmall).url()}
              alt={firstSmall.alt || ""}
              fill
              className="object-cover"
            />
          </div>
        )}
        {secondSmall && (
          <div className="relative overflow-hidden aspect-[8/9] lg:aspect-[6/6]">
            <Image
              src={urlFor(secondSmall).url()}
              alt={secondSmall.alt || ""}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    );
  });

  return <section className="space-y-6 w-full">{items}</section>;
}
