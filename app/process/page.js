import { sanityClient } from "../../lib/sanity/client";
import { processPageQuery } from "@/lib/sanity/queries";
import ProcessClient from "@/app/components/ProcessClient";

export const revalidate = 0;

export default async function ProcessPage() {
  const processPageData = await sanityClient.fetch(processPageQuery);

  if (!processPageData) {
    return null;
  }

  const { welcomeSection, processesSection } = processPageData;

  return (
    <ProcessClient
      welcomeSection={welcomeSection}
      stepsSection={processesSection}
    />
  );
}
