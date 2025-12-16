import Button from "../../components/Button";
import Image from "next/image";
import ArrowWhite from "../../../public/arrow-right-white.png";

import { urlFor } from "../../../lib/sanity/client";

export default function FirstSection({ data, lang }) {
  return (
    <section className="pt-[100px] md:pt-[150px] lg:pt-[100px] w-screen mb-[40px] md:mb-[40px] lg:mb-[80px] relative ">
      <div className="hidden lg:flex justify-center items-center w-[70px] h-[70px] rounded-[500px] bg-black absolute bottom-[30px] left-[50%] translate-x-[-50%] cursor-pointer">
        <Image
          src={ArrowWhite}
          alt="projekt"
          width={45}
          height={45}
          className="rotate-35"
        />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="px-[20px] lg:pt-[100px] md:px-[40px] lg:px-[50px] lg:max-w-[700px]  2xl:max-w-[850px] 2xl:pl-[50px]">
          <h1 className="text-[clamp(36px,8vw,45px)] leading-[clamp(36px,8vw,45px)] font-medium mb-[20px] xl:mb-[20px] max-w-[500px] lg:text-[45px] lg:leading-[45 px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] xl:max-w-[600px] 2xl:max-w-[1200px] lg:font-normal 2xl:text-[80px] 2xl:leading-[80px] 2xl:w-[750px]">
            {data?.title?.[lang]}
          </h1>
          <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px] xl:mb-[50px]">
            <p>{data?.description1?.[lang]}</p>
          </div>
          <div className="flex justify-end lg:justify-start mb-[40px]">
            <Button
              arrow={ArrowWhite}
              linkTo={data?.buttonLink?.[lang]}
              bgColor="main-black"
              textColor="main-white"
              additionalStyles="md:self-end"
            >
              {data?.buttonLabel?.[lang]}
            </Button>
          </div>
        </div>
        <div className="relative aspect-[5/6] md:aspect-[6/7] max-w-[80%] w-[80%]  xl:aspect-[5/8]  lg:w-[45%] lg:aspect-[4/5] lg:h-[calc(100vh-100px)] 2xl:w-[46%]">
          <Image
            src={urlFor(data.image).url()}
            alt="projekt"
            className="object-cover absolute
                top-0 left-0 w-full h-full"
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
}
