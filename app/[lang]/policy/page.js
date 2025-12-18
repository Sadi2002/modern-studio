import { sanityClient } from "../../../lib/sanity/client";
import { policyQuery } from "../../../lib/sanity/queries";

export const revalidate = 0;

export default async function page({ params }) {
  const getParams = await params;
  const lang = getParams.lang;

  const policyPageData = await sanityClient.fetch(policyQuery);

  const { policySection } = policyPageData;
  console.log(policySection);

  return (
    <section className="pt-[100px] md:pt-[150px] mx-margin-mobile md:mx-tablet lg:ml-[50px] 2xl:mx-[50px] mb-[80px] xl:mb-[150px]">
      <div className=" mb-[40px]">
        <h1 className="text-[clamp(30px,8vw,45px)] leading-[clamp(36px,8vw,45px)] uppercase font-medium mb-[20px] max-w-[500px] xl:max-w-[700px] lg:text-[45px] lg:leading-[45px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] 2xl:max-w-[1200px] 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal">
          {policySection?.title?.[lang]}
        </h1>
        <p className="lg:max-w-[75%] xl:max-w-[900px] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
          {policySection?.description?.[lang]}
        </p>
      </div>
      <div className="lg:max-w-[75%] xl:max-w-[900px] font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)]">
        {policySection.items.map((policy, index) => (
          <div key={index} className="flex flex-col gap-[20px] mb-[40px]">
            <h3 className="text-[clamp(23px,5.5vw,36px)] leading-[clamp(32px,7vw,42px)] font-normal-font-weight">
              {policy?.title?.[lang]}
            </h3>
            {policy.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph[lang]}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
