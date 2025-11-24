import PortfolioClient from "./PortfolioClient";
import dataProjects from "../data/dataProjects";
export const revalidate = 0;

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function Portfolio() {
  const projects = await dataProjects();

  return <PortfolioClient projects={projects} />;
}
