import Image from "next/image";
import Project1 from "../../../public/project1.png";
import Project2 from "../../../public/project2.png";
import Project3 from "../../../public/project3.png";
import Project4 from "../../../public/project4.png";

export default function Projects() {
  return (
    <section className="mx-margin-mobile">
      <h3 className="text-[36px] font-medium uppercase relative after:content-['(04)'] after:absolute after:top-[0px] after:text-[8px] mb-5">
        Our projects
      </h3>
      <div className="flex flex-col gap-[68px]  ">
        <div className="max-w-[80%]">
          <div className="relative aspect-8/7 ">
            <Image
              src={Project1}
              alt="projekt 1"
              quality={50}
              placeholder="blur"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex justify-between mt-[5px]  w-full text-[clamp(12px,3.35vw,1rem)]">
            <span>Our project</span>
            <span>View project</span>
          </div>
        </div>

        <div className="w-[86%] flex flex-col items-end self-end">
          <div className="flex flex-col justify-end w-full relative aspect-5/3">
            <Image
              src={Project2}
              alt="projekt 2"
              quality={50}
              placeholder="blur"
              className="object-cover "
              fill
            />
          </div>
          <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)]">
            <span>Our project</span>
            <span>View project</span>
          </div>
        </div>
        <div className="w-full">
          <div className="relative aspect-6/5">
            <Image
              src={Project3}
              alt="projekt 3"
              quality={50}
              placeholder="blur"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex justify-between mt-[5px]  w-full text-[clamp(12px,3.35vw,1rem)]">
            <span>Our project</span>
            <span>View project</span>
          </div>
        </div>
        <div className="max-w-[78%]">
          <div className="relative aspect-7/8 ">
            <Image
              src={Project4}
              alt="projekt 5"
              quality={50}
              placeholder="blur"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex justify-between mt-[5px] w-full text-[clamp(12px,3.35vw,1rem)]">
            <span>Our project</span>
            <span>View project</span>
          </div>
        </div>
      </div>
      {/* <div >
        <p>
          Oferujemy doświadczenie wyrafinowanego komfortu, ponadczasowej
          elegancji i szczerej gościnności. Położona w romantycznym sercu.
        </p>
      </div> */}
    </section>
  );
}
