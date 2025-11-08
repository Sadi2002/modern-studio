import Image from "next/image";
import heroImage from "../../../public/main.png";
import Button from "@/app/components/Button";

export default function Hero() {
  return (
    <section className="h-hero-height relative top-0 left-0 w-full">
      <div>
        <div className="absolute top-0 left-0 w-full h-hero-height bg-[rgba(0,0,0,0.55)] -z-1"></div>
        <Image
          src={heroImage}
          fill
          quality={75}
          placeholder="blur"
          alt="nowoczesny dom"
          className="object-cover -z-10 absolute"
        />
      </div>
      <div className="mx-margin-mobile flex flex-col h-full relative md:mx-tablet 2xl:mx-desktop">
        <div className="absolute bottom-30  w-full">
          <h1 className="text-white text-[clamp(2rem,10vw,3rem)] leading-[clamp(2.2rem,10vw,3rem)] font-medium mb-2.5 lg:text-[70px] lg:leading-[70px] xl:text-[100px] xl:font-normal xl:leading-[100px] uppercase 2xl:leading-[120px] 2xl:text-[120px] max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] ">
            OSIEDLE ZACISZE W Warszawie
          </h1>
          <p
            className="text-white font-light  mb-[50px] text-[clamp(0.75rem,3.35vw,1rem)]
          leading-[clamp(0.75rem,10vw, 1.5rem)] max-w-[300px] lg:max-w-[450px] mobile-text:max-w-[360px] xl:max-w-[740px] xl:mb-[70px]  
          "
          >
            Oferujemy doświadczenie wyrafinowanego komfortu, ponadczasowej
            elegancji i szczerej gościnności. Położona w romantycznym sercu
            Paryża.
          </p>
          <Button>Czytaj więcej</Button>
        </div>
      </div>
      <span className="absolute bottom-[20px] left-0 mx-margin-mobile font-normal text-[#C6C6C6] text-[10px] md:mx-tablet md:bottom-[50px] md:left-auto md:right-0 md:text-[14px] opacity-[64%] 2xl:mx-desktop">
        (scroll down)
      </span>
    </section>
  );
}
