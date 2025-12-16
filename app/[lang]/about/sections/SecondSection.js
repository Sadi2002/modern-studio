import Image from "next/image";

import { urlFor } from "../../../../lib/sanity/client";

export default function SecondSection({ data, lang }) {
  return (
    <section id="more" className="mb-[80px] xl:mb-[150px]">
      <div className="flex flex-col gap-[40px] lg:flex-row lg:justify-between">
        <div className="w-full lg:w-[45%]">
          <div className="mx-margin-mobile md:mx-tablet lg:mx-desktop 2xl:mx-[50px]">
            <h3 className="text-[clamp(23px,5.5vw,36px)] leading-[clamp(32px,10vw,48px)] font-medium-font-weight lg:font-normal mb-[20px] ">
              {data?.leftBox?.title?.[lang]}
            </h3>
            <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px] lg:max-w-[600px]">
              <p>{data?.leftBox?.paragraph1?.[lang]}</p>
              <p>{data?.leftBox?.paragraph2?.[lang]}</p>
            </div>
          </div>
          <div className="relative aspect-[5/4]">
            <Image
              src={urlFor(data.leftBox.image).url()}
              alt="projekt"
              className="object-cover absolute top-0 left-0 w-full h-full  px-[20px]  md:px-[40px]  lg:px-[50px] 2xl:px-[50px]"
              fill
            />
          </div>
        </div>
        <div className="lg:pt-[200px] lg:w-[45%]">
          <div className="mx-margin-mobile md:mx-tablet 2xl:mx-[50px]">
            <h3 className="text-[clamp(23px,5.5vw,36px)] leading-[clamp(32px,10vw,48px)] font-medium-font-weight lg:font-normal mb-[20px] ">
              {data?.rightBox?.title?.[lang]}
            </h3>
            <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px] lg:max-w-[600px] ">
              <p>{data?.rightBox?.paragraph1?.[lang]}</p>
              <p>{data?.rightBox?.paragraph2?.[lang]}</p>
            </div>
          </div>
          <div className="relative aspect-[6/4] 2xl:aspect-[7/4]">
            <Image
              src={urlFor(data.rightBox.image).url()}
              alt="projekt"
              className="object-cover absolute top-0 left-0 w-full h-full  px-[20px] md:px-[40px] 2xl:px-[50px]"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
