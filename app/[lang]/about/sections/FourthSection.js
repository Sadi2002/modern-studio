import Image from "next/image";
import { urlFor } from "../../../../lib/sanity/client";
import FadeInMobile from "@/app/components/FadeInMobile";
import ParallaxImage from "@/app/components/ParallaxImage";

export default function FourthSection({ data, lang }) {
  return (
    <section className="relative w-full mb-[40px] xl:mb-[80px] px-[20px] md:px-[40px] lg:px-[50px] h-[400px] min-h-[400px] min-[500px]:min-h-[500px] min-[500px]:h-[500px] md:h-[550px] lg:h-[650px]">
      <div className="bg-[rgba(0,0,0,0.59)] w-full h-full absolute inset-0 z-100" />

      <ParallaxImage
        src={urlFor(data.image).url()}
        alt="projekt"
        className="object-cover h-full z-10"
        intensity={60}
      />

      <div className="flex flex-col w-full h-full relative z-150 text-white py-[clamp(60px,10vw,80px)] lg:py-[100px] justify-between">
        <FadeInMobile>
          <h3 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] max-w-[525px] font-medium uppercase md:max-w-[70%] lg:max-w-[55%] lg:text-[45px] lg:leading-[45px] xl:max-w-[60%] 2xl:max-w-[65%] xl:text-[60px] lg:font-normal xl:leading-[60px] 2xl:text-[80px] 2xl:leading-[80px]">
            {data?.title?.[lang]}
          </h3>
        </FadeInMobile>

        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] self-end md:max-w-[50%] lg:max-w-[50%] xl:max-w-[35%]">
          <FadeInMobile>{data?.description?.[lang]}</FadeInMobile>
        </p>
      </div>
    </section>
  );
}
