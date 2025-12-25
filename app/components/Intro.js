"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import { slideInOut } from "@/app/components/animations/slideInOut";

const words = ["Sadowski", "Studio"];

export default function Intro() {
  const [phase, setPhase] = useState("idle"); // idle → enter → exit → done
  const router = useTransitionRouter();
  const pathname = usePathname();

  useEffect(() => {
    const enterDelay = 0;
    const enterDuration = 400;
    const exitDuration = 400;
    const stagger = 120;

    // 1️⃣ start wejścia
    const enterTimer = setTimeout(() => {
      setPhase("enter");
    }, enterDelay);

    // 2️⃣ start wyjścia
    const exitTimer = setTimeout(() => {
      setPhase("exit");
    }, enterDelay + enterDuration + stagger * (words.length - 1) + 400);

    // 3️⃣ View Transition
    const transitionTimer = setTimeout(() => {
      window.__FIRST_LOAD__ = false;
      window.__VT_CONTEXT__ = "intro";

      router.push(pathname, {
        onTransitionReady: () => {
          slideInOut();
          setPhase("done");
        },
      });
    }, enterDelay + enterDuration + exitDuration + stagger * (words.length - 1) + 800);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(transitionTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="flex gap-[5px] text-white text-5xl md:text-7xl font-semibold">
        {words.map((word, i) => (
          <div key={word} className="overflow-hidden">
            <span
              className={`
                inline-block
                transition-all duration-700 ease-[cubic-bezier(0.75,0.10,0.22,1)] font-light-font-weight text-[23px] lg:text-[26px] 

                ${phase === "idle" ? "translate-y-full opacity-0" : ""}

                ${phase === "enter" ? "translate-y-0 opacity-100" : ""}

                ${phase === "exit" ? "-translate-y-full opacity-0" : ""}
              `}
              style={{
                transitionDelay:
                  phase === "enter"
                    ? `${i * 0.1}s`
                    : phase === "exit"
                    ? `${i * 0.1}s`
                    : "0s",
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
