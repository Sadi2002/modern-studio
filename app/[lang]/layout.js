import "../globals.css";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default async function RootLayout({ children, params }) {
  const getParams = await params;
  const lang = getParams?.lang || "en";

  return (
    <>
      <Header lang={lang} />

      <main>{children}</main>

      <Footer lang={lang} />
    </>
  );
}
