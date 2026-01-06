import arrow from "../../../../public/arrow.png";
import HeroBackgroundImage from "@/app/components/HeroBackgroundImage";
import HeroScrollEffects from "@/app/components/HeroScrollEffects";
import RevealAfterTransition from "@/app/components/RevealAfterTransition";
import ScrollToSectionGSAP from "@/app/components/ScrollToSectionGSAP";
import Image from "next/image";
import Link from "next/link";

export default async function Hero({ data, lang }) {
  return (
    <section className="h-[100dvh] sticky top-0 w-full overflow-hidden">
      <div className="absolute inset-0">
        {data.backgroundImage && (
          <HeroBackgroundImage src={data.backgroundImage} alt={data.title} />
        )}
      </div>
      <HeroScrollEffects>
        <div className="mx-margin-mobile flex flex-col h-full relative md:mx-tablet lg:mx-small-laptop 2xl:mx-desktop">
          <div className="flex flex-col md:items-start absolute bottom-[120px] w-full xl:bottom-[120px] z-20 2xl:bottom-[150px]">
            <h1 className="text-main-white text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium mb-[20px] lg:text-[70px] lg:mb-[20px] lg:leading-[70px] xl:text-[100px] xl:font-normal-font-weight xl:leading-[100px] uppercase 2xl:leading-[110px] 2xl:text-[110px] max-w-[530px] lg:max-w-[800px] xl:max-w-[1100px] 2xl:max-w-[1200px]">
              <RevealAfterTransition delay={0} stagger={50}>
                {data?.title?.[lang]}
              </RevealAfterTransition>
            </h1>
            <p className="text-main-white font-light-font-weight mb-[40px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] max-w-[300px] lg:max-w-[450px] min-[420px]:max-w-[400px] xl:max-w-[600px] xl:mb-[70px]">
              <RevealAfterTransition delay={0} stagger={5}>
                {data?.subtitle?.[lang]}
              </RevealAfterTransition>
            </p>
            <ScrollToSectionGSAP
              targetId="about"
              duration={1.8}
              ease="power3.out"
            >
              <button
                className={`group cursor-pointer inline-flex gap-2 justify-center items-center leading-none bg-white rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-black font-medium text-[clamp(0.75rem,3.35vw,1rem)] self-end md:self-start`}
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
                  src={arrow}
                  alt="Arrow Icon"
                  className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] relative top-[0.5px]"
                  placeholder="blur"
                />
              </button>
            </ScrollToSectionGSAP>
          </div>
        </div>
      </HeroScrollEffects>
      <span className="absolute bottom-5 left-0 mx-margin-mobile font-normal-font-weight text-[#c6c6c6] text-[10px] md:mx-tablet md:bottom-[50px] md:left-auto md:right-0 md:text-[14px] opacity-[64%] 2xl:mx-desktop">
        ({data?.scrollDown?.[lang]})
      </span>
    </section>
  );
}
