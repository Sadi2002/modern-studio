"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";

const words = ["Sadowski", "Studio"];

export default function Intro() {
  const [phase, setPhase] = useState("idle");
  const [hideOverlay, setHideOverlay] = useState(false);

  const router = useTransitionRouter();
  const pathname = usePathname();

  useEffect(() => {
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

    // 3️⃣ CHOWANIE OVERLAYA
    // 200ms przed końcem exitu "Studio"
    const overlayHideTime =
      exitStart + EXIT_DURATION + STAGGER * (words.length - 1) - 200;

    const overlayTimer = setTimeout(() => {
      setHideOverlay(true);
    }, overlayHideTime);

    // 4️⃣ NAWIGACJA + cleanup
    const doneTimer = setTimeout(() => {
      router.push(pathname);
      setPhase("done");
    }, overlayHideTime + 600);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(overlayTimer);
      clearTimeout(doneTimer);
    };
  }, [pathname, router]);

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
      <div className="flex gap-[5px] text-white text-5xl md:text-7xl font-semibold">
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
