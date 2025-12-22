import "../globals.css";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SmoothScrollProvider from "../components/SmoothScrollProvider";

export default async function RootLayout({ children, params }) {
  const getParams = await params;
  const lang = getParams?.lang || "en";

  return (
    <>
      <SmoothScrollProvider>
        <Header lang={lang} />
        <main className={poppins.className}>{children}</main>
        <Footer lang={lang} />
      </SmoothScrollProvider>
    </>
  );
}
