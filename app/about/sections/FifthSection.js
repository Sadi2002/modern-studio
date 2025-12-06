import AwardRow from "@/app/components/AwardRow";

export default function FifthSection() {
  const awards = [
    { title: "Local Architecture Award", city: "Barcelona", year: "2025" },
    { title: "Prix Versailles", city: "Milano", year: "2023" },
    {
      title: "Global Award for Sustainable Architecture",
      city: "Madrid",
      year: "2022",
    },
    { title: "Prix Versailles", city: "Roma", year: "2020" },
  ];

  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-desktop lg:mx-small-laptop 2xl:mx-desktop mb-[80px] xl:mb-[110px] ">
      <span className="block mb-[10px] md:mb-[20px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,5.5vw,1.5rem)] font-light-font-weight">
        Awards Overview
      </span>
      {awards.map((award, i) => (
        <AwardRow key={i} {...award} />
      ))}
    </section>
  );
}
