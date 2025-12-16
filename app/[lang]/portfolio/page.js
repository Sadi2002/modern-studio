import PortfolioClient from "./PortfolioClient";
import dataProjects from "../../data/dataProjects";
import { portfolioPageQuery } from "@/lib/sanity/queries";
import { sanityClient } from "@/lib/sanity/client";
export const revalidate = 0;

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function Portfolio({ params }) {
  const getParams = await params;
  const lang = getParams.lang;
  const projects = await dataProjects();

  const portfolioPageData = await sanityClient.fetch(portfolioPageQuery);

  const { beforeProjectsText, viewDetails } = portfolioPageData;

  return (
    <PortfolioClient
      projects={projects}
      lang={lang}
      beforeProjectsText={beforeProjectsText}
      viewDetails={viewDetails}
    />
  );
}
