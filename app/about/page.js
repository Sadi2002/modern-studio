import dynamic from "next/dynamic";

import { sanityClient } from "../../lib/sanity/client";
import { aboutPageQuery } from "@/lib/sanity/queries";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const revalidate = 0;

const DynamicFirstSection = dynamic(() => import("./sections/FirstSection"));
const DynamicSecondSection = dynamic(() => import("./sections/SecondSection"));
const DynamicThirdSection = dynamic(() => import("./sections/ThirdSection"));
const DynamicFourthSection = dynamic(() => import("./sections/FourthSection"));
const DynamicFifthSection = dynamic(() => import("./sections/FifthSection"));

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function About() {
  const lang = "en";
  const aboutPageData = await sanityClient.fetch(aboutPageQuery);

  const { welcomeSection } = aboutPageData;
  const { moreInformationSection } = aboutPageData;
  const { teamSection } = aboutPageData;
  const { awardsSection } = aboutPageData;
  const { overviewSection } = aboutPageData;

  return (
    <>
      <Header lang={lang} />
      <DynamicFirstSection data={welcomeSection} lang={lang} />
      <DynamicSecondSection data={moreInformationSection} lang={lang} />
      <DynamicThirdSection data={teamSection} lang={lang} />
      <DynamicFourthSection data={awardsSection} lang={lang} />
      <DynamicFifthSection data={overviewSection} lang={lang} />
      <Footer lang={"en"} />
    </>
  );
}
