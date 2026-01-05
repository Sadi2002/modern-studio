import dataBlog from "../../data/dataBlog";
import BlogList from "./BlogList";
import RevealAfterTransition from "@/app/components/RevealAfterTransition";
import { blogSectionData } from "@/app/data/sectionsData/homePage/blogSectionData";
import { postsSectionData } from "@/app/data/sectionsData/blogPage/postsSectionData";

export async function generateStaticParams() {
  return [{ lang: "pl" }, { lang: "en" }, { lang: "de" }];
}

export default async function Blog({ params }) {
  const { lang } = await params;
  const postsSection = postsSectionData;

  const posts = dataBlog();

  return (
    <section className="px-[20px] pt-[100px] md:px-[40px] md:pt-[150px] 2xl:pt-[200px] lg:px-[50px] mb-[80px] xl:mb-[150px] relative">
      <div className="flex flex-col gap-[40px] justify-start lg:flex-row lg:justify-between lg:items-center lg:mb-[80px] xl:mb-[150px]">
        <div>
          <h1 className="text-[clamp(1.5rem,8vw,3rem)] leading-[clamp(2.2rem,10vw,3.5rem)] uppercase font-medium mb-[20px] max-w-[600px] md:max-w-[600px] lg:text-[45px] lg:leading-[45px] lg:max-w-[650px] lg:w-[100%] xl:max-w-[700px] xl:text-[60px] xl:leading-[60px] 2xl:max-w-[900px] 2xl:text-[clamp(60px,4.3vw,5rem)] 2xl:leading-[clamp(60px,5vw,5rem)] lg:font-normal">
            <RevealAfterTransition delay={0} stagger={50}>
              {postsSection?.sectionTitle?.[lang]}
            </RevealAfterTransition>
          </h1>
          <p className="text-[clamp(12px,3.35vw,1rem)] leading-[clamp(0.75rem,10vw,1.5rem)] font-light-font-weight max-w-[600px] mb-[40px] lg:mb-[0]">
            <RevealAfterTransition delay={0} stagger={5}>
              {postsSection?.sectionDescription?.[lang]}
            </RevealAfterTransition>
          </p>
        </div>
      </div>
      <BlogList posts={posts} postsSection={postsSection} lang={lang} />
    </section>
  );
}
