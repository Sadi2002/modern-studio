// "use client";
import "./globals.css";
import Header from "./components/Header/Header";
// import { Poppins } from "next/font/google";
// import Lenis from "./components/Lenis";
// import { useEffect, useState } from "react";

// export const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500"],
//   display: "swap",
//   preload: false,
// });

export default function RootLayout({ children }) {
  // const [showLenis, setShowLenis] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowLenis(true), 10);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <html lang="pl">
      <body className={` min-h-[10000px] bg-bg-main`}>
        {/* {showLenis && <Lenis />} */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
