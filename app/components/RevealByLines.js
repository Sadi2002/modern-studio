"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function RevealByLines({
  children,
  lineDelay = 200, // opóźnienie między wierszami
  duration = 600,
}) {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [show, setShow] = useState(false);

  // 1️⃣ po renderze obliczamy wiersze
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const wordSpans = Array.from(
      containerRef.current.querySelectorAll("[data-word]")
    );

    const linesMap = new Map();

    wordSpans.forEach((span) => {
      const top = span.offsetTop;
      if (!linesMap.has(top)) {
        linesMap.set(top, []);
      }
      linesMap.get(top).push(span.dataset.word);
    });

    setLines(Array.from(linesMap.values()));
  }, [children]);

  // 2️⃣ start animacji po `app-ready`
  useEffect(() => {
    const onReady = () => setShow(true);
    window.addEventListener("app-ready", onReady);
    return () => window.removeEventListener("app-ready", onReady);
  }, []);

  if (typeof children !== "string") return children;

  const words = children.trim().split(/\s+/);

  return (
    <span className="inline-block overflow-hidden">
      {/* HIDDEN MEASUREMENT LAYER */}
      <span
        ref={containerRef}
        aria-hidden
        className="absolute pointer-events-none opacity-0"
      >
        {words.map((word, i) => (
          <span key={i} data-word={word} className="inline-block mr-[0.25em]">
            {word}
          </span>
        ))}
      </span>

      {/* VISIBLE ANIMATED LAYER */}
      <span className="relative inline-block">
        {lines.map((lineWords, lineIndex) => (
          <span
            key={lineIndex}
            className="block overflow-hidden"
            style={{
              transitionDelay: `${lineIndex * lineDelay}ms`,
            }}
          >
            <span
              className="inline-block"
              style={{
                transform: show ? "translateY(0)" : "translateY(100%)",
                opacity: show ? 1 : 0,
                transition: `
                  transform ${duration}ms cubic-bezier(0.75,0.10,0.22,1),
                  opacity ${duration}ms cubic-bezier(0.75,0.10,0.22,1)
                `,
                transitionDelay: `${lineIndex * lineDelay}ms`,
              }}
            >
              {lineWords.map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em]">
                  {word}
                </span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
