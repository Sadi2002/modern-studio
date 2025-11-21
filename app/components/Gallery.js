"use client";

import { useMemo } from "react";

// deterministyczny "random" oparty o klucz + index
function pseudoRandom(key, index) {
  const str = String(key) + ":" + String(index);
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }

  // 0–1
  return ((hash >>> 0) % 10000) / 10000;
}

// buduje layout: [{ type: "one" | "two", index }]
function buildLayout(gallery, projectKey) {
  const layout = [];
  let i = 0; // indeks zdjęcia w gallery
  let step = 0; // numer bloku: 0,1,2,3,...

  let lastType = null; // "one" | "two"
  let lastCount = 0;

  while (i < gallery.length) {
    // 1. deterministycznie wybieramy typ na podstawie projectKey + step
    const rType = pseudoRandom(projectKey + "-type", step);
    let nextType = rType < 0.5 ? "one" : "two";

    // 2. drugi „szum” – czasami odwracamy wybór, żeby projekty różniły się mocniej
    const rShift = pseudoRandom(projectKey + "-shift", step);
    if (rShift > 0.7) {
      nextType = nextType === "one" ? "two" : "one";
    }

    // 3. max 2 takie same pod rząd
    if (nextType === lastType && lastCount >= 2) {
      nextType = nextType === "one" ? "two" : "one";
    }

    // 4. dla "two" musi być miejsce na 2 zdjęcia
    if (nextType === "two" && i + 1 >= gallery.length) {
      nextType = "one";
    }

    layout.push({ type: nextType, index: i });

    // 5. przesuwamy indeks zdjęcia o 1 lub 2
    if (nextType === "one") {
      i += 1;
    } else {
      i += 2;
    }

    // 6. aktualizujemy licznik typu
    if (nextType === lastType) {
      lastCount += 1;
    } else {
      lastType = nextType;
      lastCount = 1;
    }

    step += 1;
  }

  return layout;
}

export default function ProjectGallery({ gallery, projectKey }) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  const layout = useMemo(
    () => buildLayout(gallery, projectKey || "default"),
    [gallery, projectKey]
  );

  const items = layout.map((block, idx) => {
    if (block.type === "one") {
      const big = gallery[block.index];
      if (!big) return null;

      return (
        <div key={`big-${idx}`} className="w-full">
          <div className="relative w-full overflow-hidden rounded-lg aspect-[3/1.7]">
            <img
              src={big.imgSrc}
              alt={big.alt || ""}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      );
    }

    const firstSmall = gallery[block.index];
    const secondSmall = gallery[block.index + 1];

    return (
      <div key={`pair-${idx}`} className="grid grid-cols-2 gap-4">
        {firstSmall && (
          <div className="relative overflow-hidden rounded-lg aspect-[8/9]">
            <img
              src={firstSmall.imgSrc}
              alt={firstSmall.alt || ""}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        {secondSmall && (
          <div className="relative overflow-hidden rounded-lg aspect-[8/9]">
            <img
              src={secondSmall.imgSrc}
              alt={secondSmall.alt || ""}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    );
  });

  return <section className="space-y-6 w-full">{items}</section>;
}
