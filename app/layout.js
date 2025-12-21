"use client";

import { useEffect } from "react";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    window.__FIRST_LOAD__ = true;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.__FIRST_LOAD__ = false;
      });
    });
  }, []);

  return (
    <ViewTransitions>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ViewTransitions>
  );
}
