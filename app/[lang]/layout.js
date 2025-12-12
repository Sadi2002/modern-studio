import "../globals.css";
import Header from "./Header/Header";
import Footer from "../components/Footer/Footer";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
});

export default async function RootLayout({ children, params }) {
  const getParams = await params;
  const lang = getParams.lang || "en";

  return (
    <>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
