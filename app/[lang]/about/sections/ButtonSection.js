import Button from "../../../components/Button";
import ArrowWhite from "../../../../public/arrow-right-white.png";

export default function ButtonSection({ data, lang }) {
  return (
    <section className="mx-margin-mobile md:mx-tablet lg:mx-small-laptop mb-[80px] xl:mb-[150px] flex justify-end">
      <Button
        arrow={ArrowWhite}
        linkTo={`/${lang}/${data?.button?.buttonLink}`}
        bgColor="main-black"
        textColor="main-white"
        additionalStyles="md:self-end"
      >
        {data?.button?.buttonLabel?.[lang]}
      </Button>
    </section>
  );
}
