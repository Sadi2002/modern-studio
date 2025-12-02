import Image from "next/image";

export default function FourthSection() {
  return (
    <section className="relative aspect-[5/3] w-full mb-[80px] px-[20px] md:px-[40px] min-h-[400px] min-[500px]:min-h-[500px] lg:max-h-[650px]">
      <div className="bg-[rgba(0,0,0,0.59)] w-full absolute top-0 left-0 h-full z-100"></div>
      <Image
        src="/aboutPage.jpg"
        alt="projekt"
        className="object-cover h-full z-10"
        fill
      />
      <div className="flex flex-col w-full h-full justify-between relative z-150 text-white py-[clamp(60px,10vw,80px)] lg:py-[100px]">
        <h3
          className="text-[clamp(26px,9vw,45px)] leading-[clamp(36px,10vw,55px)]
        md:text-[clamp(45px,6vw,60px)] md:leading-[clamp(55px,8vw,70px)] font-medium uppercase lg:max-w-[70%]  lg:text-[80px] lg:leading-[80px]"
        >
          AWARDS WINNING ARCHITECTURE DESIGN
        </h3>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] self-end  md:max-w-[50%] lg:max-w-[50%] xl:max-w-[35%]">
          We are an architectural studio dedicated to creating spaces that
          combine functionality, aesthetics, and a thoughtful understanding of
          the user’s needs.
        </p>
      </div>
    </section>
  );
}
