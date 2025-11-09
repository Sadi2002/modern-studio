import Image from "next/image";
import AboutImage from "../../../public/about.webp";
import ButtonWithoutArrow from "@/app/components/ButtonWithoutArrow";

export default function About() {
  return (
    <section className="pt-about-section-padding-top-mobile flex flex-col gap-about-section-gap-mobile xl:gap-about-section-gap-laptop xl:pt-about-section-padding-top-laptop 2xl:gap-about-section-gap-desktop mb-about-section-margin-bottom">
      <div className=" mx-margin-mobile lg:flex md:mx-tablet lg:mx-small-laptop lg:justify-between xl:justify-between 2xl:mx-desktop">
        <h2 className="text-about-title-size-mobile leading-about-title-line-height-mobile font-medium mb-about-title-margin-bottom max-w-about-title-max-width-mobile lg:text-about-title-size-laptop lg:leading-about-title-line-height-laptop lg:max-w-about-title-max-width-laptop lg:w-about-title-width-laptop 2xl:max-w-about-title-max-width-desktop  2xl:font-normal">
          Witamy w Visual Studio Twoje eleganckie
        </h2>
        <div className="flex flex-col items-end lg:items-start lg:w-about-text-width-laptop">
          <div
            className="flex flex-col gap-about-text-box-gap font-light-font-weight mb-about-text-box-margin-bottom items-start text-about-text-box-size
          leading-[clamp(0.75rem,10vw, 1.5rem)] w-full-width"
          >
            <p className=" lg:max-w-about-text-max-width-small-laptop 2xl:max-w-full-width">
              Projektując przestrzeń, poszukuję harmonii między światłem a
              materią. Perfekcja detalu prowadzi do ponadczasowej formy, która
              inspiruje użytkowników.
            </p>
            <p className="  lg:max-w-about-text-max-width-small-laptop 2xl:max-w-full-width">
              Przestrzeń powinna oddychać światłem i funkcją. Projektując,
              poszukuję relacji między naturą a strukturą. Perspektywa
              użytkownika prowadzi każdy detal, czyniąc architekturę.
            </p>
          </div>
          <ButtonWithoutArrow>Więcej o nas</ButtonWithoutArrow>
        </div>
      </div>
      <div className="relative max-w-about-image-max-width-mobile xl:w-about-image-width-laptop aspect-about-image-aspect-ratio">
        <Image
          src={AboutImage}
          alt="pokój"
          placeholder="blur"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 80vw, 60vw"
          className="object-cover"
          quality={40}
        />
      </div>
    </section>
  );
}
