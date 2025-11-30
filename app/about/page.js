import dynamic from "next/dynamic";

const DynamicFirstSection = dynamic(() => import("./sections/FirstSection"));
const DynamicSecondSection = dynamic(() => import("./sections/SecondSection"));

export const metadata = {
  title: "Sadowski Studio - Nowoczesna Architektura i Design",
  description:
    "Odkryj Sadowski Studio - Twoje źródło nowoczesnej architektury i designu. Tworzymy przestrzenie, które inspirują i zachwycają.",
};

export default async function About() {
  return (
    <>
      <DynamicFirstSection />
      <DynamicSecondSection />
    </>
  );
}
