"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { transitionStore } from "@/lib/transitionStore";

export default function HeroImage({ src, alt }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // jeśli jest transition (wchodzimy z gridu) → ukryj
    if (transitionStore.clone) {
      setHidden(true);
    }
  }, []);

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      className={`object-cover ${hidden ? "opacity-0" : "opacity-100"}`}
    />
  );
}
