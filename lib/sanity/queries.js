export const homePageQuery = `
  *[_type == "homePage"][0]{
    sekcje[0]{
      title,
      subtitle,
      buttonText,
      buttonLink,
      backgroundImage
    }
  }
`;
