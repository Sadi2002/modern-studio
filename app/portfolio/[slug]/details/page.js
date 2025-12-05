export const revalidate = 0;

import Image from "next/image";
import { urlFor } from "../../../../lib/sanity/client";
import dataProjects from "../../../data/dataProjects";
import Button from "@/app/components/Button";
import ArrowWhite from "../../../../public/arrow-right-white.png";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = await dataProjects();
  return projects.map((p) => ({ slug: p.slug.current }));
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const projects = await dataProjects();
  const project = projects.find((p) => p.slug.current === slug);

  if (!project) {
    return <div className="p-10">Project not found.</div>;
  }

  return (
    <section className="px-[20px] md:px-[40px] lg:px-[50px] pt-[100px] lg:pt-[150px] pb-[80px]">
      {/* TYTUŁ */}
      <div className="lg:max-w-[850px] ">
        <div className="flex justify-start">
          <Link
            href={`/portfolio/${slug}`}
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[50%] bg-main-black flex items-center justify-center mb-[40px]"
          >
            <Image
              width={18}
              height={18}
              src="/close2.png"
              alt="Lupka"
              className="object-cover"
            />
          </Link>
        </div>
        <h1 className="text-[clamp(36px,6vw,60px)] leading-tight font-medium uppercase 2xl:font-normal-font-weight mb-[40px] 2xl:mb-[80px] lg:pl-[80px] 2xl:text-[80px]">
          {project.title}
        </h1>

        {/* OPIS SZCZEGÓŁOWY */}
        <div className="pl-0 lg:pl-[80px]">
          <div className="flex flex-col gap-[20px] pb-[40px]">
            <div className="flex gap-[20px] items-center">
              <span className="text-[20px]">(01)</span>
              <span className="text-[23px] font-medium-font-weight">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px]">
            <div className="flex gap-[20px] items-center">
              <span className="text-[20px]">(01)</span>
              <span className="text-[23px] font-medium-font-weight">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px]">
            <div className="flex gap-[20px] items-center">
              <span className="text-[20px]">(01)</span>
              <span className="text-[23px] font-medium-font-weight">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px]">
            <div className="flex gap-[20px] items-center">
              <span className="text-[20px]">(01)</span>
              <span className="text-[23px] font-medium-font-weight">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px]">
            <div className="flex gap-[20px] items-center">
              <span className="text-[20px]">(01)</span>
              <span className="text-[23px] font-medium-font-weight">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
          <div className="flex flex-col gap-[20px] pb-[40px]">
            <div className="flex gap-[20px] items-center">
              <span className="text-[20px]">(01)</span>
              <span className="text-[23px] font-medium-font-weight">
                Założenia projektu:
              </span>
            </div>
            <p className="ml-0 lg:ml-[60px] pb-[20px] border-b border-[rgba(0,0,0,0.48)] font-light-font-weight">
              Projekt willi na Majorce rozpoczął się od określenia potrzeb
              inwestora, który oczekiwał nowoczesnej, jasnej przestrzeni z
              widokiem na morze, minimalistycznej formy oraz zastosowania
              naturalnych materiałów typowych dla śródziemnomorskiego klimatu.
            </p>
          </div>
        </div>
      </div>

      {/* POWRÓT */}
    </section>
  );
}
