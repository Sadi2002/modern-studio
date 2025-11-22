export default function dataProjects() {
  const projects = [
    {
      id: 1,
      title: "Villa Maris",
      description: `We design contemporary villas in Mallorca, combining aesthetics
              with functionality. Our goal is to ensure that every project
              responds both to the island’s climate and the expectations of our
              clients`,
      imgSrc: "/projekt2-large.webp",
      alt: "Villa Maris",
      slug: "villa-maris",
      year: 2025,
      location: "Mallorca",
      type: "Private Residence",
      collaborators: [
        { title: "Measured Up Builders" },
        { title: "Architexture" },
      ],
      gallery: [
        { imgSrc: "/inside1.jpg" },
        { imgSrc: "/inside2.jpg" },
        { imgSrc: "/inside3.jpg" },
        { imgSrc: "/inside4.jpg" },
        { imgSrc: "/inside5.jpg" },
        { imgSrc: "/inside6.jpg" },
      ],
    },
    {
      id: 2,
      title: "Villa Llevant",
      description: `We work with high-quality materials and clean architectural forms,
              focusing on comfort, proportions, and details that define the
              character of each space.`,
      imgSrc: "/projekt4-large.webp",

      alt: "Villa Llevant",
      slug: "villa-llevant",
      year: 2024,
      location: "Mallorca",
      type: "Private Residence",
      collaborators: [
        { title: "Measured Up Builders" },
        { title: "Architexture" },
      ],
      gallery: [],
    },
    {
      id: 3,
      title: "Villa Esencia",
      description: `An elegant villa blending nature and design. From initial concept to final completion — each step brings you closer
          to your exceptional villa.`,
      imgSrc: "/projekt3-large.webp",
      alt: "Villa Esencia",
      slug: "villa-esencia",
      year: 2023,
      location: "Mallorca",
      type: "Private Residence",
      collaborators: [
        { title: "Measured Up Builders" },
        { title: "Architexture" },
      ],
      gallery: [
        { imgSrc: "/inside1.jpg" },
        { imgSrc: "/inside2.jpg" },
        { imgSrc: "/inside3.jpg" },
        { imgSrc: "/inside4.jpg" },
        { imgSrc: "/inside5.jpg" },
        { imgSrc: "/inside6.jpg" },
      ],
    },
    {
      id: 4,
      title: "Son Brisa",
      description: `Luxury villas in Mallorca combine modern design with the unique
            atmosphere of the island, offering comfort, privacy, and
            unforgettable views.`,
      imgSrc: "/inside1.jpg",
      alt: "Son Brisa",
      slug: "son-brisa",
      year: 2022,
      location: "Mallorca",
      type: "Private Residence",
      collaborators: [
        { title: "Measured Up Builders" },
        { title: "Architexture" },
      ],
      gallery: [
        { imgSrc: "/inside1.jpg" },
        { imgSrc: "/inside2.jpg" },
        { imgSrc: "/inside3.jpg" },
        { imgSrc: "/inside4.jpg" },
        { imgSrc: "/inside5.jpg" },
        { imgSrc: "/inside6.jpg" },
      ],
    },
  ];
  return projects;
}
