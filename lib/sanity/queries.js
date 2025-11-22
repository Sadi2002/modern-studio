export const homePageQuery = `
  *[_type == "homePage"][0]{
    heroSection{
      title,
      subtitle,
      buttonLabel,
      buttonLink,
      backgroundImage
    },
      aboutSection{
      title,
      subtitle1,
      subtitle2,
      buttonLabel,
      buttonLink,
      aboutImage
      }
  }
`;

export const navigationQuery = `
*[_type == "navigation"][0]{
  logo,
  links[]{ label, href }
}`;
