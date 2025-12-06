import Button from "@/app/components/Button";
import ArrowWhite from "../../../public/arrow-right-white.png";
import Image from "next/image";
import TeamMember from "@/app/components/TeamMember";

export default function ThirdSection() {
  const team = [
    {
      image: "/person1.png",
      name: "Anna Schedmann",
      role: "General Architect",
      wrapperClass: "md:self-end",
    },
    {
      image: "/person2.png",
      name: "Anna Schedmann",
      role: "General Architect",
      wrapperClass: "md:self-start",
    },
    {
      image: "/person3.png",
      name: "Anna Schedmann",
      role: "General Architect",
      wrapperClass: "md:self-end",
    },
    {
      image: "/person4.png",
      name: "Anna Schedmann",
      role: "General Architect",
      wrapperClass: "md:self-start",
    },
    {
      image: "/person5.png",
      name: "Anna Schedmann",
      role: "General Architect",
      wrapperClass: "md:self-end",
    },
    {
      image: "/person6.png",
      name: "Anna Schedmann",
      role: "General Architect",
      wrapperClass: "md:self-start",
    },
  ];
  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet gap-[40px] lg:gap-[80px]  lg:justify-between lg:mx-small-laptop mb-[80px] xl:mb-[150px]">
      <div>
        <h3 className="text-[clamp(36px,6.5vw,45px)] leading-[clamp(36px,6.5vw,45px)] font-medium uppercase relative  mb-5 xl:text-6xl xl:leading-[60px] xl:mb-[20px] 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal 2xl:max-w-[1200px]">
          MEET OUR STUDIO
        </h3>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[40px] xl:mb-[50px] min-[380px]:max-w-[390px] md:max-w-[400px] lg:max-w-[500px]">
          We are an architectural studio dedicated to creating spaces that
          combine functionality, aesthetics, and a thoughtful understanding of
          the user’s needs. W
        </p>
        <div className="flex justify-end lg:justify-start">
          <Button
            arrow={ArrowWhite}
            linkTo="#"
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="md:self-end lg:flex"
          >
            Czytaj więcej
          </Button>
        </div>
      </div>
      <div className="lg:flex ">
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-full gap-[40px] lg:gap-[40px] lg:justify-end 2xl:gap-x-[80px] 2xl:max-w-[100%]">
          {team.map((member, i) => (
            <TeamMember key={i} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
