// STEP IMAGES
import step1Image from "../../../../public/sectionsData/homePage/processSection/step1.png";
import step2Image from "../../../../public/sectionsData/homePage/processSection/step2.png";
import step3Image from "../../../../public/sectionsData/homePage/processSection/step3.png";
import step4Image from "../../../../public/sectionsData/homePage/processSection/step4.png";
import step5Image from "../../../../public/sectionsData/homePage/processSection/step5.png";

export const processSectionData = {
  title: {
    pl: "Jak pracujemy",
    en: "How we work",
    de: "Wie wir arbeiten",
  },

  description: {
    pl: "Pracujemy w bliskiej współpracy z klientem, dbając o jasną komunikację oraz przemyślane decyzje projektowe.",
    en: "We work in close collaboration with the client, ensuring clear communication and well‑considered design decisions.",
    de: "Wir arbeiten in enger Zusammenarbeit mit dem Kunden und achten auf klare Kommunikation sowie gut durchdachte Entwurfsentscheidungen.",
  },

  button: {
    buttonLabel: {
      pl: "Czytaj więcej",
      en: "Read more",
      de: "Mehr lesen",
    },
    buttonLink: "process",
  },

  steps: [
    {
      title: {
        pl: "Konsultacja wstępna",
        en: "Initial Consultation",
        de: "Erste Beratung",
      },

      imgSrc: step1Image,

      alt: {
        pl: "Rozmowa dwóch ludzi w biurze",
        en: "Two people talking in an office",
        de: "Zwei Personen unterhalten sich in einem Büro",
      },
    },

    {
      title: {
        pl: "Koncepcja projektu",
        en: "Concept Design",
        de: "Designkonzept",
      },

      imgSrc: step2Image,

      alt: {
        pl: "Praca w biurze",
        en: "Working in the office",
        de: "Arbeiten im Büro",
      },
    },

    {
      title: {
        pl: "Szczegóły projektu",
        en: "Design Details",
        de: "Design Details",
      },

      imgSrc: step3Image,

      alt: {
        pl: "Szczegóły projektu",
        en: "Details",
        de: "Details",
      },
    },

    {
      title: {
        pl: "Koordynacja projektu",
        en: "Project Coordination",
        de: "Projektkoordination",
      },

      imgSrc: step4Image,

      alt: {
        pl: "Zarządzanie projektem",
        en: "Project management",
        de: "Projektmanagement",
      },
    },

    {
      title: {
        pl: "Finalizacja projektu",
        en: "Final Completion",
        de: "Projektabschluss",
      },

      imgSrc: step5Image,

      alt: {
        pl: "Przekazanie kluczy",
        en: "Handing over the keys",
        de: "Übergabe der Schlüssel",
      },
    },
  ],
};
