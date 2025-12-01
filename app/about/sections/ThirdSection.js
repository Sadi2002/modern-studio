import Button from "@/app/components/Button";
import ArrowWhite from "../../../public/arrow-right-white.png";

export default function ThirdSection() {
  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet lg:flex-row lg:justify-between lg:mx-small-laptop mb-[40px] lg:mb-[80px] xl:mb-[150px]">
      <div>
        <h3 className="text-[clamp(36px,6.5vw,45px)] leading-[clamp(36px,6.5vw,45px)] font-medium uppercase relative after:content-['(05)'] after:absolute after:top-[-15px] after:text-[8px] xl:after:top-[-25px] 2xl:after:top-[-35px] mb-5 xl:text-6xl xl:after:text-[14px] xl:after:top-[-3px]  xl:mb-[20px] 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal 2xl:max-w-[1200px]">
          MEET OUR STUDIO
        </h3>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[40px] xl:mb-[50px] min-[380px]:max-w-[390px] md:max-w-[400px] lg:max-w-[500px]">
          We are an architectural studio dedicated to creating spaces that
          combine functionality, aesthetics, and a thoughtful understanding of
          the user’s needs. W
        </p>
        <div className="flex justify-start">
          <Button
            arrow={ArrowWhite}
            linkTo="#"
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="hidden md:self-end lg:flex"
          >
            Czytaj więcej
          </Button>
        </div>
      </div>
    </section>
  );
}
