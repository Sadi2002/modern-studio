import Image from "next/image";
import AboutImage from "../../../public/about.png";

export default function About() {
  return (
    <section className="pt-[80px] flex flex-col gap-10 xl:gap-20 xl:pt-[150px] 2xl:gap-[100px]">
      <div className=" mx-mobile lg:flex lg:mx-tablet lg:justify-between xl:justify-between 2xl:mx-desktop">
        <h2 className="text-[clamp(1.9rem,7.5vw,2.5rem)] leading-[clamp(2.2rem,7.5vw,2.5rem)] font-medium mb-[30px] max- md:max-w-[500px] max-w-[500px] lg:text-[30px] lg:text-[clamp(2rem,3.5vw,64px)] lg:leading-[clamp(2rem,3.5vw,64px)] lg:max-w-[700px]  lg:w-[50%] 2xl:max-w-[850px]  2xl:font-normal">
          Witamy w Visual Studio Twoje eleganckie
        </h2>
        <div className="flex flex-col items-end lg:items-start lg:w-[50%]">
          <div
            className="flex flex-col gap-4 font-light mb-10 items-start text-[clamp(12px,3.35vw,1rem)]
          leading-[clamp(0.75rem,10vw, 1.5rem)] w-full"
          >
            <p className=" lg:max-w-[700px] 2xl:max-w-full">
              Projektując przestrzeń, poszukuję harmonii między światłem a
              materią. Perfekcja detalu prowadzi do ponadczasowej formy, która
              inspiruje użytkowników.
            </p>
            <p className="  lg:max-w-[700px] 2xl:max-w-full">
              Przestrzeń powinna oddychać światłem i funkcją. Projektując,
              poszukuję relacji między naturą a strukturą. Perspektywa
              użytkownika prowadzi każdy detal, czyniąc architekturę.
            </p>
          </div>
          <button className="font-semibold text-[clamp(0.75rem,3.5vw,1rem)] relative uppercase after:content-[''] after:bg-black after:absolute after:bottom-[-0.5px] after:left-0 after:w-full after:h-[1px] ">
            Więcej o nas
          </button>
        </div>
      </div>
      <div className="relative max-w-[90%] xl:w-[80%] aspect-[5/3]">
        <Image
          src={AboutImage}
          alt="pokój"
          placeholder="blur"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 80vw, 60vw"
          className="object-cover"
          quality={75}
        />
      </div>
    </section>
  );
}
