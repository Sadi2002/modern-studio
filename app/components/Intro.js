"use client";

import { useEffect, useState } from "react";

const words = ["Modern", "Studio"];

export default function Intro() {
  const [phase, setPhase] = useState("idle");
  const [hideOverlay, setHideOverlay] = useState(false);

  useEffect(() => {
    window.__LAYOUT_LOCKED__ = true;
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const ENTER_DURATION = 400;
    const EXIT_DURATION = 400;
    const STAGGER = 120;

    // 1️⃣ ENTER
    const enterTimer = setTimeout(() => {
      setPhase("enter");
    }, 0);

    // 2️⃣ EXIT tekstu
    const exitStart = ENTER_DURATION + STAGGER * (words.length - 1) + 400;

    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, exitStart);

    // 3️⃣ CHOWANIE OVERLAYA — JAK BYŁO
    const overlayHideTime =
      exitStart + EXIT_DURATION + STAGGER * (words.length - 1) - 200;

    const overlayTimer = setTimeout(() => {
      setHideOverlay(true);
    }, overlayHideTime);

    // 4️⃣ KONIEC INTRO — JAK BYŁO
    const CONTENT_START_OFFSET = 400; // ms przed końcem intro

    // 🔥 START CONTENTU (OVERLAP)
    const contentStartTimer = setTimeout(() => {
      window.dispatchEvent(new Event("app-content-start"));
    }, overlayHideTime + 600 - CONTENT_START_OFFSET);

    // ✅ KONIEC INTRO
    const doneTimer = setTimeout(() => {
      setPhase("done");
      window.__LAYOUT_LOCKED__ = false;
      window.dispatchEvent(new Event("app-ready"));
    }, overlayHideTime + 600);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(overlayTimer);
      clearTimeout(doneTimer);
    };
  }, []); // 🔑 JEDYNA RÓŻNICA

  if (phase === "done") return null;

  return (
    <div
      className={`
        fixed inset-0 z-[99999] bg-black
        flex items-center justify-center
        transition-all duration-[1200ms]
        ease-[cubic-bezier(0.75,0.10,0.22,1)]
        ${hideOverlay ? "translate-y-[-100%]" : "translate-y-0"}
      `}
      style={{
        clipPath: hideOverlay
          ? "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
          : "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      }}
    >
      <div className="flex gap-[5px] lg:gap-[10px] text-white text-5xl md:text-7xl font-semibold">
        {words.map((word, i) => (
          <div key={word} className="overflow-hidden">
            <span
              className={`
                inline-block
                transition-all duration-700
                ease-[cubic-bezier(0.75,0.10,0.22,1)]
                font-light-font-weight
                text-[23px] lg:text-[30px]

                ${phase === "idle" ? "translate-y-full opacity-0" : ""}
                ${phase === "enter" ? "translate-y-0 opacity-100" : ""}
                ${phase === "exit" ? "-translate-y-full opacity-0" : ""}
              `}
              style={{
                transitionDelay:
                  phase === "enter" || phase === "exit" ? `${i * 0.12}s` : "0s",
              }}
            >
              {word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
