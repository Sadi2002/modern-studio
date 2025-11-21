export const homePageQuery = `
  *[_type == "homePage"][0]{
    hero{
      title,
      subtitle,
      buttonText,
      buttonLink,
      backgroundImage
    }
  }
`;
