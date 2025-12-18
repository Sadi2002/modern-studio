import Image from "next/image";
import arrow from "../../../../public/arrow.png";
import Button from "@/app/components/Button";

import { urlFor } from "../../../../lib/sanity/client";

export default async function Hero({ data, lang }) {
  return (
    <section className="h-[100dvh] relative w-full">
      {data.backgroundImage && (
        <Image
          src={urlFor(data.backgroundImage).url()}
          alt={data.title}
          fill
          className="object-cover"
        />
      )}

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]"></div>

      <div className="mx-margin-mobile flex flex-col h-full relative md:mx-tablet lg:mx-small-laptop 2xl:mx-desktop">
        <div className="flex flex-col md:items-start absolute bottom-[120px] w-full xl:bottom-[120px] z-20 2xl:bottom-[150px]">
          <h1 className="text-main-white text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium mb-[20px] lg:text-[70px] lg:mb-[20px] lg:leading-[70px] xl:text-[100px] xl:font-normal-font-weight xl:leading-[100px] uppercase 2xl:leading-[110px] 2xl:text-[110px] max-w-[520px] lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1200px]">
            {data?.title?.[lang] || "Default title"}
          </h1>

          <p className="text-main-white font-light-font-weight mb-[40px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] max-w-[300px] lg:max-w-[450px] min-[420px]:max-w-[400px] xl:max-w-[600px] xl:mb-[70px]">
            {data?.subtitle?.[lang] || ""}
          </p>

          <Button
            arrow={arrow}
            linkTo={data?.buttonLink?.[lang]}
            bgColor="main-white"
            textColor="main-black"
            additionalStyles="md:self-start"
          >
            {data?.buttonLabel?.[lang] || "Click."}
          </Button>
        </div>
      </div>

      <span className="absolute bottom-5 left-0 mx-margin-mobile font-normal-font-weight text-[#c6c6c6] text-[10px] md:mx-tablet md:bottom-[50px] md:left-auto md:right-0 md:text-[14px] opacity-[64%] 2xl:mx-desktop">
        ({data?.scrollDown?.[lang] || "Scroll down"})
      </span>
    </section>
  );
}
