import "../globals.css";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import LenisScrollReset from "../components/LenisScrollReset";
import HistoryTransitionHandler from "../hooks/HistoryTransitionHandler";
import LenisAfterTransitionFix from "../components/LenisAfterTransitionFix";
import LazySmoothScroll from "../components/LazySmoothScroll";

export default async function RootLayout({ children, params }) {
  const getParams = await params;
  const lang = getParams?.lang || "en";

  return (
    <>
      <Header lang={lang} />
      <main className={poppins.className}>
        <LazySmoothScroll>
          <LenisScrollReset />
          <HistoryTransitionHandler />
          <LenisAfterTransitionFix />
          {children}
        </LazySmoothScroll>
      </main>
      <Footer lang={lang} />
    </>
  );
}
