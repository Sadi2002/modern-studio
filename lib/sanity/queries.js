export const navigationQuery = `
*[_type == "navigation"][0]{
  logo,
  links{
  items[]{ 
  label{en, pl, de},
  href
    }
  },

  
}`;
export const navigationMobileQuery = `
*[_type == "navigationMobile"][0]{
  logo,
  closeIcon{en, pl, de},
  links{
  items[]{
  label{en, pl, de},
    href,
  },
},
socialMedia{
socials[]{
  title,
  url,
}
},

  legalLinks{
  links[]{
    label{en, pl, de},  
    href,    
}
  },
}`;

export const homePageQuery = `
  *[_type == "homePage"][0]{
    heroSection{
     backgroundImage,
      title,
    subtitle,
    button{
     buttonLabel,
      buttonLink,
    },
      scrollDown,
    },
      aboutSection{
         aboutImage,
      title,
      subtitle1,
      subtitle2,
      button{
       buttonLabel,
      buttonLink,
      },
   
      },

      projectsSection{
      title,
      subtitle,
      button{
       buttonLabel,
      buttonLink,
      },
      projects,
      
      },

      processSection{
     title,
     description,
     button{
        buttonLabel,
      buttonLink,
      },
      steps
      },

      blogSection{
     title,
     description,
     button{
 buttonLabel,
      buttonLink,
     },
    
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
      button{
      buttonLabel,
      buttonLink,
      },
      
     image
    },

    moreInformationSection{
      leftBox{
     alt,
     title,
      paragraph1,
      paragraph2,
     image,
      },
      rightBox{
       alt,
     title,
      paragraph1,
      paragraph2,
     image,
      },
      
    
    },
    teamSection{
      title,
      description,
      button{
       buttonLabel,
      buttonLink,
      },
     
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

  beforeProjectsText,
  beforePortfolioText,
  detailsLabel{
    viewDetails,
  hideDetails,
  },
  button{
  beforePortfolioButton,
  beforePortfolioButtonLink,
  },

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
      button{
       buttonLabel,
      buttonLink,
      },
     
     image,
     alt,
    },
    processesSection{
      items,
      
    },
  }
`;

export const blogPageQuery = `
  *[_type == "blogPage"][0]{
    postsSection{
     notFound,
      sectionTitle,
      sectionDescription,
      searchPlaceholder,
      posts,
      seeOtherBlogs{
      seeOtherBlogsLabel,
      button{
      seeOtherBlogsButtonLabel,
      seeOtherBlogsButtonLink,
      },
      },
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
     thankYouMessage,
     privacyPolicyText,
     errorMessage,
     additionalInfo {
      email{
       emailLabel,
       emailAddress,
       },

       phone{
       phoneLabel,
       phoneNumber,
       },

     
    

  facebookLabel,
  facebookUrl,
     }
    
    },
  }
`;

export const footerQuery = `
  *[_type == "footer"][0]{
      logo,
      navLinks,
      quickContact,
      privacyPolicy{
       privacyPolicyLabel,
     privacyPolicyHref,
      },
     
     copyrightText,
    
  }
`;

export const policyQuery = `
  *[_type == "policyPage"][0]{
     policySection {
     title,
     description,
     items
     }
  }
`;
