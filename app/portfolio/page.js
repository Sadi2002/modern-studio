import PortfolioClient from "./PortfolioClient";
import dataProjects from "../data/dataProjects";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
export const revalidate = 0;

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function Portfolio() {
  const lang = "en";
  const projects = await dataProjects();

  return (
    <>
      <Header lang={"en"} />
      <PortfolioClient projects={projects} lang={lang} />;
      <Footer lang={"en"} />
    </>
  );
}
