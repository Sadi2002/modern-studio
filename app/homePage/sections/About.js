import Image from "next/image";
import aboutLarge from "../../../public/about-large.webp";
import LazyComponent from "@/app/components/lazyComponent";

export default function About() {
  return (
    <section className="pt-[60px] flex flex-col gap-[40px] xl:gap-[80px] xl:pt-[150px] 2xl:gap-[100px] mb-[80px] xl:mb-[150px]">
      <div className="mx-margin-mobile lg:flex md:mx-tablet lg:mx-small-laptop lg:justify-between xl:justify-between 2xl:mx-desktop">
        <h2 className="text-[clamp(1.6rem,7.5vw,2.5rem)] leading-[clamp(2.1rem,7.5vw,2.5rem)] font-medium mb-[30px] max-w-[500px] lg:text-[clamp(2rem,3.5vw,64px)] lg:leading-[clamp(2rem,3.5vw,64px)] lg:max-w-[700px] lg:w-[50%] 2xl:max-w-[850px] xl:font-normal">
          Witamy w Visual Studio Twoje eleganckie
        </h2>
        <div className="flex flex-col items-end lg:items-start lg:w-[50%]">
          <div className="flex flex-col gap-[16px] font-light-font-weight mb-[40px] items-start text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full">
            <p className="lg:max-w-[900px] 2xl:max-w-full">
              Projektując przestrzeń, poszukuję harmonii między światłem a
              materią. Perfekcja detalu prowadzi do ponadczasowej formy, która
              inspiruje użytkowników.
            </p>
            <p className="lg:max-w-[900px] 2xl:max-w-full">
              Przestrzeń powinna oddychać światłem i funkcją. Projektując,
              poszukuję relacji między naturą a strukturą. Perspektywą
              użytkownika prowadzi każdy detal, czyniąc architekturę.
            </p>
          </div>
          <button className="font-medium-font-weight text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-main-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full-width after:h-[1px] after:w-full">
            Więcej o nas
          </button>
        </div>
      </div>

      <div className="relative max-w-[90%] xl:w-[80%] aspect-[3/1.7] bg-[url('/about-small.webp')] bg-center bg-cover">
        <LazyComponent height={200}>
          <Image
            src={aboutLarge}
            alt="pokój"
            fill
            className="object-cover"
            unoptimized
          />
        </LazyComponent>
      </div>
    </section>
  );
}
