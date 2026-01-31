import Image from "next/image";
import ArrowWhite from "../../../../public/arrow-right-white.png";

import RevealAfterTransition from "@/app/components/RevealAfterTransition";
import ScrollToSectionGSAP from "@/app/components/ScrollToSectionGSAP";

export default function FirstSection({ data, lang }) {
  console.log(data);
  return (
    <section className="pt-[100px] md:pt-[150px] xl:pt-[100px] w-full mb-[40px] md:mb-[80px] xl:mb-[150px] relative ">
      <div className="hidden lg:flex justify-center items-center w-[70px] h-[70px] rounded-[500px] bg-black absolute bottom-[30px] left-[50%] translate-x-[-50%] cursor-pointer">
        <Image
          src={ArrowWhite}
          alt="projekt"
          width={45}
          height={45}
          className="rotate-125"
          placeholder="blur"
        />
      </div>
      <div className="lg:flex lg:justify-between lg:items-center">
        <div className="px-[20px] lg:pt-[100px] md:px-[40px] lg:px-[50px] lg:max-w-[700px]  2xl:max-w-[850px] 2xl:pl-[50px]">
          <h1 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] uppercase font-medium mb-[20px] xl:mb-[20px] max-w-[400px] lg:text-[45px] lg:leading-[45 px] lg:max-w-[400px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] xl:max-w-[525px] 2xl:max-w-[1200px] lg:font-normal 2xl:text-[clamp(60px,4.3vw,5rem)] 2xl:leading-[80px] 2xl:w-[700px]">
            <RevealAfterTransition delay={0} stagger={50}>
              {data?.title?.[lang]}
            </RevealAfterTransition>
          </h1>
          <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px]">
            <p>
              <RevealAfterTransition delay={0} stagger={5}>
                {data?.description1?.[lang]}
              </RevealAfterTransition>
            </p>
            <p>
              <RevealAfterTransition delay={0} stagger={5}>
                {data?.description2?.[lang]}
              </RevealAfterTransition>
            </p>
          </div>
          <div className="flex justify-end lg:justify-start mb-[40px]">
            <ScrollToSectionGSAP
              targetId="more"
              duration={1.8}
              ease="power3.out"
            >
              <button
                className={`group cursor-pointer inline-flex gap-2 justify-center items-center leading-none bg-black rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-white font-medium text-[clamp(0.75rem,3.35vw,1rem)] self-end md:self-start`}
              >
                <span className="relative overflow-hidden block">
                  <span className="block leading-[20px] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full will-change-transform">
                    {data?.button?.buttonLabel?.[lang]}
                  </span>
                  <span className="absolute leading-[20px] left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full will-change-transform">
                    {data?.button?.buttonLabel?.[lang]}
                  </span>
                </span>

                <Image
                  src={ArrowWhite}
                  alt="Arrow Icon"
                  className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] relative top-[0.5px]"
                  placeholder="blur"
                />
              </button>
            </ScrollToSectionGSAP>
          </div>
        </div>

        <div className="relative aspect-[5/6] md:aspect-[6/7] max-w-[80%] w-[80%]  xl:aspect-[5/8]  lg:w-[45%] lg:aspect-[4/5] lg:h-[calc(100dvh-100px)] 2xl:w-[46%]">
          <Image
            src={data.image}
            alt="projekt"
            className="object-cover absolute top-0 left-0 w-full h-full"
            fill
            placeholder="blur"
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
