import dynamic from "next/dynamic";
import { welcomeSectionData } from "../../data/sectionsData/aboutPage/welcomeSectionData";
import { moreInformationSectionData } from "@/app/data/sectionsData/aboutPage/moreInformationSectionData";
import { teamSectionData } from "@/app/data/sectionsData/aboutPage/teamSectionData";
import { awardsSectionData } from "@/app/data/sectionsData/aboutPage/awardsSectionData";
import { overviewSectionData } from "@/app/data/sectionsData/aboutPage/overviewSectionData";
import { buttonSectionData } from "@/app/data/sectionsData/aboutPage/buttonSectionData";

const DynamicFirstSection = dynamic(() => import("./sections/FirstSection"));
const DynamicSecondSection = dynamic(() => import("./sections/SecondSection"));
const DynamicThirdSection = dynamic(() => import("./sections/ThirdSection"));
const DynamicFourthSection = dynamic(() => import("./sections/FourthSection"));
const DynamicFifthSection = dynamic(() => import("./sections/FifthSection"));
const DynamicButtonSection = dynamic(() => import("./sections/ButtonSection"));

export async function generateStaticParams() {
  return [{ lang: "pl" }, { lang: "en" }, { lang: "de" }];
}

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function About({ params }) {
  const { lang } = await params;

  const welcomeSection = welcomeSectionData;
  const moreInformationSection = moreInformationSectionData;
  const teamSection = teamSectionData;
  const awardsSection = awardsSectionData;
  const overviewSection = overviewSectionData;
  const buttonSection = buttonSectionData;

  return (
    <>
      <DynamicFirstSection data={welcomeSection} lang={lang} />
      <DynamicSecondSection data={moreInformationSection} lang={lang} />
      <DynamicThirdSection data={teamSection} lang={lang} />
      <DynamicFourthSection data={awardsSection} lang={lang} />
      <DynamicFifthSection data={overviewSection} lang={lang} />
      <DynamicButtonSection data={buttonSection} lang={lang} />
    </>
  );
}
