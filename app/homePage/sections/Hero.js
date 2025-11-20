import Image from "next/image";

import arrow from "../../../public/arrow.png";
import heroImgLarge from "../../../public/projekt3-large.webp";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-[100dvh] relative w-full mb-[20px]">
      <Image src={heroImgLarge} className="object-cover" fill alt="test" />

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]"></div>

      <div className="mx-margin-mobile flex flex-col h-full relative md:mx-tablet lg:mx-small-laptop 2xl:mx-desktop">
        <div className="absolute bottom-[120px] w-full xl:bottom-[120px] z-20 2xl:bottom-[150px]">
          <h1 className="text-main-white text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] font-medium mb-[25px] lg:text-[70px] lg:leading-[70px] xl:text-[100px] xl:font-normal-font-weight xl:leading-[100px] uppercase 2xl:leading-[110px] 2xl:text-[110px] max-w-[600px] lg:max-w-[800px] xl:max-w-[1200px] 2xl:max-w-[1200px]">
            creation of luxury villas in Mallorca
          </h1>

          <p className="text-main-white font-light-font-weight mb-[50px] text-[clamp(0.75rem,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] max-w-[300px] lg:max-w-[450px] min-[420px]:max-w-[400px] xl:max-w-[740px] xl:mb-[70px]">
            Luxury villas in Mallorca combine modern design with the unique
            atmosphere of the island, offering comfort, privacy, and
            unforgettable views.
          </p>

          <button className="bg-main-white rounded-[500px] px-[clamp(1rem,3.35vw,1.5rem)] py-[clamp(0.5rem,3.35vw,0.7rem)] text-main-black ml-auto mr-0 font-medium flex items-center md:ml-0 text-[clamp(0.75rem,3.35vw,1rem)]">
            <Link href="#about" className="flex justify-center items-center">
              Read more{" "}
              <Image
                src={arrow}
                alt="strzałka"
                className="w-[clamp(1.5rem,3.35vw,1.7rem)] h-[clamp(1.5rem,3.35vw,1.7rem)] top-[0.5px] relative"
              />
            </Link>
          </button>
        </div>
      </div>

      <span className="absolute bottom-5 left-0 mx-margin-mobile font-normal-font-weight text-[#c6c6c6] text-[10px] md:mx-tablet md:bottom-[50px] md:left-auto md:right-0 md:text-[14px] opacity-[64%] 2xl:mx-desktop">
        (scroll down)
      </span>
    </section>
  );
}
