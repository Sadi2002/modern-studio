import AwardRow from "@/app/components/AwardRow";
import FadeInMobile from "@/app/components/FadeInMobile";

export default function FifthSection({ data, lang }) {
  if (!data) return null;

  // tytuł sekcji z Sanity lub fallback
  const title = data?.title?.[lang] || "Awards Overview";

  // awards = array of { awardItem: {...} } zgodnie ze schematem
  const awards =
    data.awards
      ?.map((entry) => {
        const a = entry.awardItem ?? entry;
        if (!a) return null;

        return {
          title: a?.awardTitle?.[lang],
          city: a?.awardLocation?.[lang] || "",
          year: a.awardYear ? String(a.awardYear) : "",
        };
      })
      .filter(Boolean) || [];

  if (!awards.length) return null;

  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-desktop lg:mx-small-laptop 2xl:mx-desktop mb-[20px] ">
      <FadeInMobile>
        <span className="block mb-[10px] md:mb-[20px] text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,5.5vw,1.5rem)] font-light-font-weight">
          {title}
        </span>
      </FadeInMobile>
      {awards.map((award, i) => (
        <AwardRow key={i} {...award} />
      ))}
    </section>
  );
}
