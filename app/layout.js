"use client";

import Lenis from "lenis";

import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import gsap from "gsap";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // ⬆️ zwiększ czas (więcej płynności)
      smoothWheel: true,
      smoothTouch: true,
      easing: (t) => 1 - Math.pow(2, -10 * t), // łagodna, naturalna krzywa
    });

    // obsługa scrolla
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <html lang="pl">
      <body className={`${poppins.className} antialiased h-[10000px]`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
