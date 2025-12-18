import FaqComponent from "@/app/components/FaqComponent";

export default function Faq({ data, lang }) {
  if (!data) return null;
  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet  lg:mx-small-laptop mb-[80px] xl:mb-[150px]">
      <h3 className="mb-5 text-[clamp(30px,6.5vw,45px)] leading-[clamp(36px,10vw,45px)] font-medium uppercase relative after:content-['(06)'] after:absolute after:bottom-[15px] md:after:bottom-[20px] after:text-[10px] md:after:text-[12px] md:mb-[20px] xl:mb-[40px] xl:text-6xl xl:after:text-[14px] xl:after:bottom-[30px] 2xl:after:bottom-[35px]  2xl:text-[80px]  2xl:leading-[80px] xl:font-normal md:mb-0 2xl:max-w-[1200px] ">
        {data?.title?.[lang]}
      </h3>
      <FaqComponent data={data} lang={lang} />
    </section>
  );
}
