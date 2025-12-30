import FadeInMobile from "@/app/components/FadeInMobile";
import FaqComponent from "@/app/components/FaqComponent";
import RevealAfterTransition from "@/app/components/RevealAfterTransition";

export default function Faq({ data, lang }) {
  if (!data) return null;
  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet  lg:mx-small-laptop mb-[80px] xl:mb-[150px]">
      <FadeInMobile>
        <h3 className="mb-5 text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium uppercase relative after:content-['(06)'] after:absolute after:bottom-[clamp(15px,4vw,25px)] md:after:bottom-[clamp(20px,4vw,25px)] xl:after:bottom-[clamp(20px,4vw,30px)] 2xl:after:top-[-35px] after:text-[10px] md:after:text-[12px] md:mb-[20px] xl:mb-[40px] xl:text-6xl xl:after:text-[14px] 2xl:after:bottom-[35px] 2xl:text-[80px]  2xl:leading-[80px] xl:font-normal md:mb-0 2xl:max-w-[1400px] ">
          {data?.title?.[lang]}
        </h3>
      </FadeInMobile>
      <FaqComponent data={data} lang={lang} />
    </section>
  );
}
