import Button from "@/app/components/Button";
import RevealAfterTransition from "@/app/components/RevealAfterTransition";
import Image from "next/image";
import ArrowWhite from "../../../public/arrow-right-white.png";

export default function Delivers() {
  return (
    <section className="lg:border-t lg:border-[rgba(0,0,0,0.2)] pt-[40px] lg:pt-[100px] w-screen mb-[80px] md:mb-[80px] lg:mb-[80px] xl:mb-[150px] relative flex justify-between">
      <div className="w-full lg:flex lg:justify-between lg:items-center lg:w-1/2">
        <div className="w-full px-[20px] md:px-[40px] lg:px-[50px] lg:max-w-[700px] 2xl:max-w-[800px] 2xl:pl-[50px]">
          <h1 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] uppercase font-medium mb-[20px] xl:mb-[20px] max-w-[500px] lg:text-[45px] lg:leading-[45px] lg:max-w-[500px] lg:w-[100%] xl:text-[60px] xl:leading-[60px] xl:max-w-[600px] 2xl:max-w-[1200px] lg:font-normal 2xl:text-[clamp(60px,4.3vw,5rem)] 2xl:leading-[80px] 2xl:w-[750px] min-[1589px]:!w-[800px] ">
            <RevealAfterTransition delay={0} stagger={50}>
              What This Process Delivers
            </RevealAfterTransition>
          </h1>
          <div className="font-light-font-weight text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] flex flex-col gap-[16px] mb-[40px] xl:mb-[50px]">
            <p>
              <RevealAfterTransition delay={0} stagger={5}>
                Get to know the people behind the studio. We are a
                multidisciplinary team united by a shared approach to design,
                collaboration, and attention to detail at every stage of the
                process.
              </RevealAfterTransition>
            </p>
          </div>
          <div className="flex justify-end lg:justify-start">
            <Button
              arrow={ArrowWhite}
              linkTo={`#`}
              bgColor="main-black"
              textColor="main-white"
              additionalStyles="md:self-end"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[60%] lg:flex gap-[20px] px-[20px] md:px-[40px] lg:px-[50px] hidden">
        <div className="w-[35%] h-[200px] relative aspect-8/7 overflow-hidden self-end">
          <Image
            className="object-cover"
            fill
            src={"/about-large.webp"}
            alt="test"
          />
        </div>
        <div className="w-[75%] relative aspect-8/8 overflow-hidden">
          <Image
            className="object-cover"
            fill
            src={"/about-large.webp"}
            alt="test"
          />
        </div>
      </div>
    </section>
  );
}
