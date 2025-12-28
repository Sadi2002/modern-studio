"use client";

import { useEffect, useState } from "react";

const words = ["Sadowski", "Studio"];

export default function Intro() {
  const [phase, setPhase] = useState("lcp");
  const [hideOverlay, setHideOverlay] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const ENTER_DURATION = 400;
    const EXIT_DURATION = 400;
    const STAGGER = 120;

    /**
     * FRAME 1: LCP
     * tekst istnieje w DOM, ale jest niewidoczny dla usera
     */

    // FRAME 2: pokazujemy wrapper, ale tekst nadal jest w IDLE
    const showWrapper = requestAnimationFrame(() => {
      setPhase("idle");

      // FRAME 3: dopiero TERAZ startuje animacja (stagger działa)
      requestAnimationFrame(() => {
        setPhase("enter");
      });
    });

    // EXIT – BEZ ZMIAN
    const exitStart = ENTER_DURATION + STAGGER * (words.length - 1) + 400;

    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, exitStart);

    // CHOWANIE OVERLAYA — BEZ ZMIAN
    const overlayHideTime =
      exitStart + EXIT_DURATION + STAGGER * (words.length - 1) - 200;

    const overlayTimer = setTimeout(() => {
      setHideOverlay(true);
    }, overlayHideTime);

    // START CONTENTU — BEZ ZMIAN
    const CONTENT_START_OFFSET = 400;

    const contentStartTimer = setTimeout(() => {
      window.dispatchEvent(new Event("app-content-start"));
    }, overlayHideTime + 600 - CONTENT_START_OFFSET);

    // KONIEC INTRO — BEZ ZMIAN
    const doneTimer = setTimeout(() => {
      setPhase("done");
      window.dispatchEvent(new Event("app-ready"));
    }, overlayHideTime + 600);

    return () => {
      cancelAnimationFrame(showWrapper);
      clearTimeout(exitTimer);
      clearTimeout(overlayTimer);
      clearTimeout(contentStartTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999] bg-black
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
      <div
        className="flex gap-[5px] text-white text-5xl md:text-7xl font-semibold"
        style={{
          // 🔑 tylko na 1 frame dla LCP
          visibility: phase === "lcp" ? "hidden" : "visible",
        }}
      >
        {words.map((word, i) => (
          <div key={word} className="overflow-hidden">
            <span
              className={`
                inline-block
                transition-all duration-700
                ease-[cubic-bezier(0.75,0.10,0.22,1)]
                font-light-font-weight
                text-[23px] lg:text-[26px]

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
