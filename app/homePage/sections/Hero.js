import Image from "next/image";
import arrow from "../../../public/arrow.png";
import heroImg from "../../../public/projekt3-large.webp";

export default function Hero() {
  return (
    <section className="h-hero-height relative w-full overflow-hidden bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImg}
          alt="osidle"
          objectFit="cover"
          priority
          fill
          placeholder="blur"
        />

        <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]"></div>
      </div>

      <div className="mx-margin-mobile flex flex-col h-full relative md:mx-tablet lg:mx-small-laptop 2xl:mx-desktop">
        <div className="absolute bottom-hero-text-position-mobile w-full xl:bottom-hero-text-position-desktop z-20">
          <h1 className="text-main-white text-hero-title-size-mobile leading-hero-title-line-height-mobile font-medium mb-hero-title-margin-bottom lg:text-hero-title-size-small-laptop lg:leading-hero-title-line-height-small-laptop xl:text-hero-title-size-laptop xl:font-normal-font-weight xl:leading-hero-title-line-height-laptop uppercase 2xl:leading-hero-title-line-height-desktop 2xl:text-hero-title-size-desktop max-w-hero-title-max-width-mobile lg:max-w-hero-title-max-width-small-laptop xl:max-w-hero-title-max-width-laptop 2xl:max-w-hero-title-max-width-desktop">
            OSIEDLE ZACISZE W Warszawie
          </h1>
          <p className="text-main-white font-light-font-weight mb-hero-text-margin-bottom-mobile text-hero-text-size-mobile leading-hero-text-line-height-mobile max-w-hero-text-max-width-mobile lg:max-w-hero-text-max-width-small-laptop min-[420px]:max-w-[360px] xl:max-w-hero-text-max-width-laptop xl:mb-hero-text-margin-bottom-laptop">
            Oferujemy doświadczenie wyrafinowanego komfortu, ponadczasowej
            elegancji i szczerej gościnności. Położona w romantycznym sercu
            Paryża.
          </p>
          <button className="bg-main-white rounded-buttonWithArrow-rounded px-buttonWithArrow-padding-x py-buttonWithArrow-padding-y text-main-black ml-buttonWithArrow-margin-left-mobile mr-buttonWithArrow-margin-right-mobile font-medium flex items-center md:ml-buttonWithArrow-margin-left-tablet text-hero-text-size-mobile">
            Czytaj więcej
            <Image
              src={arrow}
              alt="strzałka"
              className="w-buttonWithArrow-icon-width h-buttonWithArrow-icon-height top-[0.5px] relative"
            />
          </button>
        </div>
      </div>

      <span className="absolute bottom-hero-scrollDown-position-bottom-mobile left-hero-scrollDown-position-left-mobile mx-margin-mobile font-normal-font-weight text-hero-scrollDown-color text-hero-scrollDown-size-mobile md:mx-tablet md:bottom-hero-scrollDown-position-bottom-tablet md:left-hero-scrollDown-position-left-tablet md:right-hero-scrollDown-position-right-tablet md:text-hero-scrollDown-size-tablet opacity-hero-scrollDown-opacity 2xl:mx-desktop">
        (scroll down)
      </span>
    </section>
  );
}
