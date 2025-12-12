import { sanityClient } from "../../../lib/sanity/client";
import { processPageQuery } from "@/lib/sanity/queries";
import ProcessClient from "@/app/process/ProcessClient";

export const revalidate = 0;

export default async function ProcessPage({ params }) {
  const getParams = await params;
  const lang = getParams.lang;
  const processPageData = await sanityClient.fetch(processPageQuery);

  if (!processPageData) {
    return null;
  }

  const { welcomeSection, processesSection } = processPageData;

  return (
    <ProcessClient
      welcomeSection={welcomeSection}
      stepsSection={processesSection}
      lang={lang}
    />
  );
}
