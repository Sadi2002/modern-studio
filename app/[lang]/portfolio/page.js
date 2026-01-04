import PortfolioClient from "./PortfolioClient";
import dataProjects from "../../data/dataProjects";
import { projectPageTextsData } from "@/app/data/sectionsData/singleProject/projectPageTextsData";

export async function generateStaticParams() {
  return [{ lang: "pl" }, { lang: "en" }, { lang: "de" }];
}

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function Portfolio({ params }) {
  const { lang } = await params;

  const portfolioPageData = projectPageTextsData;
  const projects = dataProjects();

  const { beforeProjectsText, viewDetails, button, beforePortfolioText } =
    portfolioPageData;

  return (
    <PortfolioClient
      projects={projects}
      lang={lang}
      beforeProjectsText={beforeProjectsText}
      viewDetails={viewDetails}
      button={button}
      beforePortfolioText={beforePortfolioText}
    />
  );
}
