import "../globals.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export default async function RootLayout({ children, params }) {
  const getParams = await params;
  const lang = getParams?.lang || "en";

  return (
    <div className={poppins.className}>
      <Header lang={lang} />
      <main>{children}</main>

      <Footer lang={lang} />
    </div>
  );
}
