import Button from "@/app/components/Button";
import ArrowWhite from "../../../public/arrow-right-white.png";
import TeamMember from "@/app/components/TeamMember";
import { urlFor } from "../../../lib/sanity/client";

export default function ThirdSection({ data }) {
  // data = teamSection z Sanity
  const membersRaw = data?.members || [];

  // zamiana struktury Sanity -> propsy dla TeamMember
  const team =
    membersRaw
      .map((entry, index) => {
        const m = entry.teamMember ?? entry;
        if (!m) return null;

        return {
          image: m.photo ? urlFor(m.photo).url() : "/person1.png", // fallback gdy brak zdjęcia
          name: m.fullName,
          role: m.role || "",
          instagram: m.instagram || null,
          linkedin: m.linkedin || null,
          // zachowujemy Twój pattern wrapperClass naprzemiennie
          wrapperClass: index % 2 === 0 ? "md:self-end" : "md:self-start",
        };
      })
      .filter(Boolean) || [];

  return (
    <section className="mx-margin-mobile flex flex-col md:mx-tablet gap-[40px] lg:gap-[80px]  lg:justify-between lg:mx-small-laptop mb-[80px] xl:mb-[150px]">
      <div>
        <h3 className="text-[clamp(36px,6.5vw,45px)] leading-[clamp(36px,6.5vw,45px)] font-medium uppercase relative  mb-5 xl:text-6xl xl:leading-[60px] xl:mb-[20px] 2xl:text-[80px] 2xl:leading-[80px] 2xl:font-normal 2xl:max-w-[1200px]">
          {data.title}
        </h3>
        <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] w-full font-light-font-weight mb-[40px] xl:mb-[50px] min-[380px]:max-w-[390px] md:max-w-[400px] lg:max-w-[500px]">
          {data.description}
        </p>
        <div className="flex justify-end lg:justify-start">
          <Button
            arrow={ArrowWhite}
            linkTo={data.buttonLink}
            bgColor="main-black"
            textColor="main-white"
            additionalStyles="md:self-end lg:flex"
          >
            {data.buttonLabel}
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
