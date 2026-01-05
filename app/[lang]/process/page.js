import Delivers from "./Delivers";
import ProcessClient from "./ProcessClient";
import { welcomeSectionData } from "@/app/data/sectionsData/processPage/welcomeSectionData";
import { processesSectionData } from "../../data/sectionsData/processPage/processesSectionData";
import { deliversSectionData } from "@/app/data/sectionsData/processPage/deliversSectionData";

export async function generateStaticParams() {
  return [{ lang: "pl" }, { lang: "en" }, { lang: "de" }];
}

export default async function ProcessPage({ params }) {
  const { lang } = await params;

  const welcomeSection = welcomeSectionData;
  const processesSection = processesSectionData;
  const deliversSection = deliversSectionData;

  if (!welcomeSection || !processesSection || !deliversSection) {
    return null;
  }

  return (
    <>
      <ProcessClient
        welcomeSection={welcomeSection}
        stepsSection={processesSection}
        lang={lang}
      />
      <Delivers data={deliversSection} lang={lang} />
    </>
  );
}
