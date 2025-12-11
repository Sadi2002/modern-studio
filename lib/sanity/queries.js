export const navigationQuery = `
*[_type == "navigation"][0]{
  logo,
  links[]{ label, href }
}`;
export const navigationMobileQuery = `
*[_type == "navigationMobile"][0]{
  logo,
  closeIcon,
  links,
socialMedia,
legalLinks,
}`;

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
      },

      projectsSection{
      title,
      subtitle,
      buttonLabel,
      buttonLink,
      projects,
      
      },

      processSection{
     title,
     description,
     buttonLabel,
      buttonLink,
      steps
      },

      blogSection{
     title,
     description,
     buttonLabel,
      buttonLink,
      posts
      },

      faqSection{
     title,
     items
      },
  }
`;

export const aboutPageQuery = `
  *[_type == "aboutPage"][0]{
    welcomeSection{
      title,
      description1,
      description2,
      buttonLabel,
      buttonLink,
     image
    },
    moreInformationSection{
      leftBox,
      rightBox,
      title,
      paragraph1,
      paragraph2,
     image
    },
    teamSection{
      title,
      description,
      buttonLabel,
      buttonLink,
      members,
    },
    awardsSection{
      title,
      description,
      image,
    },
    overviewSection{
      title,
     awards
    },
  }
`;

export const portfolioPageQuery = `
  *[_type == "portfolioPage"][0]{
      portfolioSection {
      projects
      }
    
  }
`;

export const processPageQuery = `
  *[_type == "processPage"][0]{
    welcomeSection{
      title,
      description1,
      buttonLabel,
      buttonLink,
     image
    },
    processesSection{
      items,
      
    },
  }
`;

export const blogPageQuery = `
  *[_type == "blogPage"][0]{
    postsSection{
      sectionTitle,
      sectionDescription,
      searchPlaceholder,
      posts,
    },
  }
`;

export const contactPageQuery = `
  *[_type == "contactPage"][0]{
    contactSection{
      title,
      description,
      formTitle,
      nameLabel,
     emailLabel,
     messageLabel,
     submitLabel,
     email,
  phone,
  facebookLabel,
  facebookUrl,
    },
  }
`;

export const footerQuery = `
  *[_type == "footer"][0]{
      logo,
      navLinks,
      quickContact,
      privacyPolicyLabel,
     privacyPolicyHref,
     copyrightText,
    
  }
`;
