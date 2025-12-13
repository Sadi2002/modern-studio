import { sanityClient } from "../../lib/sanity/client";
import { processPageQuery } from "@/lib/sanity/queries";
import ProcessClient from "@/app/process/ProcessClient";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const revalidate = 0;

export default async function ProcessPage() {
  const lang = "en";
  const processPageData = await sanityClient.fetch(processPageQuery);

  if (!processPageData) {
    return null;
  }

  const { welcomeSection, processesSection } = processPageData;

  return (
    <>
      <Header lang={"en"} />
      <ProcessClient
        welcomeSection={welcomeSection}
        stepsSection={processesSection}
        lang={lang}
      />
      <Footer lang={"en"} />
    </>
  );
}
