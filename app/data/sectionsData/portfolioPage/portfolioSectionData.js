// PROJECT 5
import project5MainImage from "../../../../public/sectionsData/portfolioPage/project1/mainImage.png";
import project5Gallery1 from "../../../../public/sectionsData/portfolioPage/project1/gallery1.png";
import project5Gallery2 from "../../../../public/sectionsData/portfolioPage/project1/gallery2.png";
import project5Gallery3 from "../../../../public/sectionsData/portfolioPage/project1/gallery3.png";
import project5Gallery4 from "../../../../public/sectionsData/portfolioPage/project1/gallery4.png";
import project5Gallery5 from "../../../../public/sectionsData/portfolioPage/project1/gallery5.png";
import project5Gallery6 from "../../../../public/sectionsData/portfolioPage/project1/gallery6.png";

// PROJECT 6
import project6MainImage from "../../../../public/sectionsData/portfolioPage/project2/mainImage.png";
import project6Gallery1 from "../../../../public/sectionsData/portfolioPage/project2/gallery1.png";
import project6Gallery2 from "../../../../public/sectionsData/portfolioPage/project2/gallery2.png";
import project6Gallery3 from "../../../../public/sectionsData/portfolioPage/project2/gallery3.png";
import project6Gallery4 from "../../../../public/sectionsData/portfolioPage/project2/gallery4.png";
import project6Gallery5 from "../../../../public/sectionsData/portfolioPage/project2/gallery5.png";
import project6Gallery6 from "../../../../public/sectionsData/portfolioPage/project2/gallery6.png";

export const portfolioSectionData = {
  projects: [
    {
      title: {
        pl: "Desert Frame",
        en: "Desert Frame",
        de: "Desert Frame",
      },

      description: {
        pl: "Desert Frame House to nowoczesna rezydencja o horyzontalnej formie, silnie osadzona w suchym, naturalnym krajobrazie. Projekt opiera się na prostych bryłach, dużych przeszkleniach oraz konsekwentnym połączeniu wnętrza z otoczeniem. Naturalne materiały i stonowana kolorystyka budują spokojną, luksusową atmosferę.",
        en: "Desert Frame House is a modern private residence defined by horizontal forms and a strong connection to the surrounding landscape. Large glazing, natural materials, and a restrained color palette create a calm and refined living environment.",
        de: "Desert Frame House ist eine moderne Residenz mit klarer horizontaler Architektur und starker Verbindung zur umgebenden Landschaft. Großzügige Verglasungen und natürliche Materialien schaffen eine ruhige und hochwertige Wohnatmosphäre.",
      },

      imgSrc: project5MainImage,
      model3D: "model.glb",

      alt: {
        pl: "Nowoczesna, parterowa rezydencja o prostej, horyzontalnej formie, otwarta dużymi przeszkleniami na suchy, naturalny krajobraz. Wnętrza utrzymane są w jasnej, stonowanej kolorystyce z wykorzystaniem naturalnych materiałów.",
        en: "A modern single-story residence with a horizontal form, featuring large glass openings towards a dry, natural landscape. The interiors use a light, neutral palette and natural materials.",
        de: "Eine moderne, eingeschossige Residenz mit klarer, horizontaler Architektur und großflächigen Verglasungen zur natürlichen Landschaft. Die Innenräume sind hell, ruhig und mit natürlichen Materialien gestaltet.",
      },

      slug: {
        current: "desert-frame",
      },

      dataCompleted: {
        pl: "Data zakończenia",
        en: "Data completed",
        de: "Abschlussdatum",
      },

      year: 2022,

      location: {
        pl: "Hiszpania",
        en: "Spain",
        de: "Spanien",
      },

      typeTitle: {
        pl: "Typ projektu",
        en: "Project type",
        de: "Projekttyp",
      },

      type: {
        pl: "Rezydencja prywatna",
        en: "Private Residence",
        de: "Private Residenz",
      },

      collaboratorsTitle: {
        pl: "Współpracownicy",
        en: "Collaborators",
        de: "Mitarbeitende",
      },

      collaborators: [
        {
          title: {
            pl: "Architektura – Nordic Line Architects",
            en: "Architecture – Nordic Line Architects",
            de: "Architektur – Nordic Line Architects",
          },
        },
        {
          title: {
            pl: "Projekt wnętrz – Studio Vale Interior",
            en: "Interior Design – Studio Vale Interior",
            de: "Innenarchitektur – Studio Vale Interior",
          },
        },
        {
          title: {
            pl: "Generalny wykonawca – Axis Build Group",
            en: "General Contractor – Axis Build Group",
            de: "Generalunternehmer – Axis Build Group",
          },
        },
      ],

      details: [
        {
          title: {
            pl: "Analiza potrzeb klienta i koncepcja funkcjonalna",
            en: "Client needs analysis and functional concept",
            de: "Analyse der Kundenbedürfnisse und Funktionskonzept",
          },
          text: {
            pl: "Proces rozpoczyna się od szczegółowego poznania oczekiwań inwestora, jego stylu życia oraz sposobu użytkowania przestrzeni. Na tym etapie analizowane są również uwarunkowania lokalne, kontekst architektoniczny oraz potencjał miejsca, co pozwala stworzyć spójne założenia funkcjonalne projektu.",
            en: "The process begins with an in-depth analysis of the client’s expectations, lifestyle, and spatial requirements. Local conditions, architectural context, and site potential are also examined to establish a coherent functional foundation for the project.",
            de: "Der Projektprozess beginnt mit einer detaillierten Analyse der Erwartungen des Bauherrn, seines Lebensstils und der funktionalen Anforderungen. Zusätzlich werden Standort, architektonischer Kontext und räumliches Potenzial untersucht, um eine solide funktionale Grundlage zu schaffen.",
          },
        },
        {
          title: {
            pl: "Projekt koncepcyjny wnętrz",
            en: "Interior concept design",
            de: "Innenraumkonzept",
          },
          text: {
            pl: "Na podstawie ustalonych założeń powstaje koncepcja estetyczna wnętrz, obejmująca układ przestrzenny, proporcje oraz ogólny charakter projektu. Etap ten definiuje styl, atmosferę oraz główne kierunki materiałowe i kolorystyczne.",
            en: "Based on the initial assumptions, a comprehensive aesthetic concept is developed, including spatial layout, proportions, and the overall character of the interior. This stage defines the style, atmosphere, and primary material and color direction.",
            de: "Auf Basis der definierten Anforderungen wird ein ganzheitliches Gestaltungskonzept entwickelt, das Raumaufteilung, Proportionen und den Charakter des Innenraums umfasst. Diese Phase legt Stil, Atmosphäre sowie die gestalterische Ausrichtung fest.",
          },
        },
        {
          title: {
            pl: "Dobór materiałów i palety kolorystycznej",
            en: "Material and color palette selection",
            de: "Material- und Farbkonzept",
          },
          text: {
            pl: "Starannie dobierane są materiały wykończeniowe, faktury i kolory, które podkreślają architekturę wnętrza i zapewniają jego ponadczasowy charakter. Selekcja opiera się zarówno na walorach estetycznych, jak i trwałości oraz jakości rozwiązań.",
            en: "Finishing materials, textures, and colors are carefully selected to enhance the interior architecture and ensure a timeless, high-quality result. The selection balances aesthetics, durability, and functionality.",
            de: "Materialien, Oberflächen und Farben werden sorgfältig ausgewählt, um die Innenarchitektur zu unterstreichen und eine zeitlose, hochwertige Wirkung zu erzielen. Dabei werden ästhetische, funktionale und qualitative Aspekte berücksichtigt.",
          },
        },
        {
          title: {
            pl: "Projekt oświetlenia i detali",
            en: "Lighting and detail design",
            de: "Licht- und Detailplanung",
          },
          text: {
            pl: "Opracowywana jest kompleksowa koncepcja oświetlenia, uwzględniająca światło funkcjonalne, nastrojowe oraz akcentujące. Równolegle projektowane są detale architektoniczne i elementy wyposażenia, które budują spójność i unikalny charakter przestrzeni.",
            en: "A comprehensive lighting concept is designed, incorporating functional, ambient, and accent lighting. Architectural details and custom elements are developed simultaneously to strengthen the identity and coherence of the space.",
            de: "Es wird ein umfassendes Lichtkonzept erarbeitet, das funktionales, atmosphärisches und akzentuierendes Licht kombiniert. Parallel dazu werden architektonische Details und maßgeschneiderte Elemente entwickelt.",
          },
        },
        {
          title: {
            pl: "Koordynacja wykonawcza",
            en: "Execution coordination",
            de: "Ausführungskoordination",
          },
          text: {
            pl: "Etap obejmuje ścisłą współpracę z wykonawcami, dostawcami oraz zespołem technicznym. Nadzorowana jest realizacja projektu, kontrola jakości oraz zgodność prac z dokumentacją projektową i przyjętymi założeniami estetycznymi.",
            en: "This stage involves close collaboration with contractors, suppliers, and technical teams. The implementation is supervised to ensure quality, precision, and full compliance with the design documentation.",
            de: "Diese Phase umfasst die enge Zusammenarbeit mit Auftragnehmern, Lieferanten und Fachplanern. Die Umsetzung wird überwacht, um Qualität, Präzision und Übereinstimmung mit der Planung sicherzustellen.",
          },
        },
        {
          title: {
            pl: "Finalizacja i stylizacja wnętrz",
            en: "Finalization and interior styling",
            de: "Finalisierung und Interior Styling",
          },
          text: {
            pl: "Ostatnia faza projektu polega na dopracowaniu detali, montażu wyposażenia, ustawieniu mebli i elementów dekoracyjnych. Wnętrze przygotowywane jest do użytkowania, zachowując spójność wizji projektowej w każdym detalu.",
            en: "The final stage focuses on refining details, installing furnishings, arranging furniture, and styling decorative elements. The interior is prepared for use while maintaining the integrity of the original design vision.",
            de: "In der abschließenden Phase werden alle Details final ausgearbeitet, Möbel und Ausstattung montiert sowie dekorative Elemente platziert. Der Raum wird vollständig vorbereitet und zur Nutzung übergeben.",
          },
        },
      ],

      gallery: [
        { image: project5Gallery1 },
        { image: project5Gallery2 },
        { image: project5Gallery3 },
        { image: project5Gallery4 },
        { image: project5Gallery5 },
        { image: project5Gallery6 },
      ],
    },
    {
      title: {
        pl: "Cresta House",
        en: "Cresta House",
        de: "Cresta House",
      },

      description: {
        pl: "Silent Courtyard Residence to elegancka, nowoczesna rezydencja skupiona wokół wewnętrznego dziedzińca. Projekt wnętrz opiera się na spokojnej kolorystyce, miękkich formach oraz subtelnej grze światła, tworząc harmonijną i intymną przestrzeń do życia.",
        en: "Silent Courtyard Residence is a contemporary home organized around a private inner courtyard. Soft forms, muted tones, and carefully designed lighting create a calm, intimate living environment.",
        de: "Die Silent Courtyard Residence ist eine moderne Wohnresidenz, die um einen privaten Innenhof organisiert ist. Sanfte Formen, zurückhaltende Farben und eine präzise Lichtplanung schaffen eine ruhige, intime Wohnatmosphäre.",
      },

      imgSrc: project6MainImage,
      model3D: "model.glb",

      alt: {
        pl: "Nowoczesna rezydencja skupiona wokół wewnętrznego dziedzińca, z dużymi przeszkleniami i miękkim światłem dziennym. Wnętrza są minimalistyczne, spokojne i harmonijnie połączone z zielenią.",
        en: "A contemporary residence organized around a private courtyard, featuring large glazing and soft natural daylight. The interiors are minimalist, calm, and closely connected to greenery.",
        de: "Eine moderne Residenz, die um einen privaten Innenhof organisiert ist, mit großzügigen Verglasungen und sanftem Tageslicht. Die Innenräume sind minimalistisch, ruhig und mit der Natur verbunden.",
      },

      slug: {
        current: "silent-courtyard",
      },

      dataCompleted: {
        pl: "Data zakończenia",
        en: "Data completed",
        de: "Abschlussdatum",
      },

      year: 2022,

      location: {
        pl: "Szwajcaria",
        en: "Switzerland",
        de: "Schweiz",
      },

      typeTitle: {
        pl: "Typ projektu",
        en: "Project type",
        de: "Projekttyp",
      },

      type: {
        pl: "Rezydencja prywatna",
        en: "Private Residence",
        de: "Private Residenz",
      },

      collaboratorsTitle: {
        pl: "Współpracownicy",
        en: "Collaborators",
        de: "Mitarbeitende",
      },

      collaborators: [
        {
          title: {
            pl: "Architektura – Alpine Studio Architects",
            en: "Architecture – Alpine Studio Architects",
            de: "Architektur – Alpine Studio Architects",
          },
        },
        {
          title: {
            pl: "Projekt wnętrz – Studio Vale Interior",
            en: "Interior design – Studio Vale Interior",
            de: "Innenarchitektur – Studio Vale Interior",
          },
        },
        {
          title: {
            pl: "Generalny wykonawca – Helvetia Build",
            en: "General contractor – Helvetia Build",
            de: "Generalunternehmer – Helvetia Build",
          },
        },
      ],

      details: [
        {
          title: {
            pl: "Analiza potrzeb klienta i kontekstu krajobrazowego",
            en: "Client needs and landscape context analysis",
            de: "Analyse der Kundenbedürfnisse und des landschaftlichen Kontexts",
          },
          text: {
            pl: "Pierwszym etapem jest szczegółowe poznanie oczekiwań inwestora oraz analiza działki i jej otoczenia. Uwzględniane są uwarunkowania krajobrazowe, klimat, ekspozycja na światło dzienne oraz relacja projektowanego obiektu z naturalnym kontekstem.",
            en: "The process begins with a detailed understanding of the client’s expectations and an analysis of the site and its surroundings. Landscape conditions, climate, daylight exposure, and the relationship between the building and its natural context are carefully considered.",
            de: "Zu Beginn werden die Erwartungen des Bauherrn sowie das Grundstück und dessen Umgebung analysiert. Landschaftliche Bedingungen, Klima, Tageslichtexposition und die Beziehung des Gebäudes zur Natur werden berücksichtigt.",
          },
        },
        {
          title: {
            pl: "Koncepcja architektoniczna i funkcjonalna",
            en: "Architectural and functional concept",
            de: "Architektur- und Funktionskonzept",
          },
          text: {
            pl: "Na podstawie zebranych informacji opracowywana jest koncepcja bryły budynku oraz układu funkcjonalnego. Etap ten definiuje formę architektoniczną, proporcje oraz sposób organizacji przestrzeni wewnętrznych i zewnętrznych.",
            en: "Based on the collected data, the architectural form and functional layout are developed. This stage defines the building’s geometry, proportions, and the organization of interior and exterior spaces.",
            de: "Auf Basis der Analyse wird die architektonische Form sowie das funktionale Raumkonzept entwickelt. Diese Phase definiert Geometrie, Proportionen und die Organisation der Innen- und Außenräume.",
          },
        },
        {
          title: {
            pl: "Projekt wnętrz spójny z bryłą budynku",
            en: "Interior design aligned with the building form",
            de: "Innenraumkonzept im Einklang mit der Gebäudearchitektur",
          },
          text: {
            pl: "Tworzony jest projekt wnętrz, który stanowi naturalne przedłużenie architektury. Rozwiązania przestrzenne, materiały i kolorystyka są podporządkowane formie budynku oraz relacji z otaczającym krajobrazem.",
            en: "The interior design is created as a natural extension of the architecture. Spatial solutions, materials, and color schemes are directly linked to the building’s form and its connection to the surrounding landscape.",
            de: "Das Innenraumkonzept wird als natürliche Erweiterung der Architektur entwickelt. Raumlösungen, Materialien und Farbkonzepte stehen in direktem Bezug zur Gebäudestruktur und zum Landschaftskontext.",
          },
        },
        {
          title: {
            pl: "Dobór materiałów i detali architektonicznych",
            en: "Material and architectural detail selection",
            de: "Material- und architektonisches Detailkonzept",
          },
          text: {
            pl: "Następuje selekcja materiałów elewacyjnych i wykończeniowych oraz opracowanie detali architektonicznych. Etap ten koncentruje się na jakości, trwałości i spójności estetycznej wszystkich elementów projektu.",
            en: "This stage focuses on the selection of façade and interior materials, as well as the development of architectural details. Emphasis is placed on quality, durability, and visual coherence.",
            de: "In dieser Phase erfolgt die Auswahl der Fassaden- und Innenraummaterialien sowie die Ausarbeitung architektonischer Details. Der Fokus liegt auf Qualität, Langlebigkeit und gestalterischer Einheit.",
          },
        },
        {
          title: {
            pl: "Koordynacja wykonawcza",
            en: "Execution coordination",
            de: "Ausführungskoordination",
          },
          text: {
            pl: "Projekt jest nadzorowany na etapie realizacji poprzez współpracę z wykonawcami i konsultantami technicznymi. Kontrolowana jest zgodność prac z dokumentacją projektową oraz przyjętym standardem jakości.",
            en: "The project is supervised during construction through close collaboration with contractors and technical consultants. Implementation is monitored to ensure compliance with the design documentation and quality standards.",
            de: "Während der Bauphase erfolgt eine enge Zusammenarbeit z wykonawcami i Fachplanern. Die Umsetzung wird überwacht, um die Übereinstimmung z dokumentacją projektową i standardami jakości sicherzustellen.",
          },
        },
        {
          title: {
            pl: "Finalizacja projektu",
            en: "Project finalization",
            de: "Projektfinalisierung",
          },
          text: {
            pl: "Ostatni etap obejmuje końcowe dopracowanie detali, odbiory prac oraz przygotowanie obiektu do użytkowania, z zachowaniem pierwotnych założeń projektowych.",
            en: "The final stage includes refining details, project handover, and preparing the building for use, while maintaining the original design intent.",
            de: "Die abschließende Phase umfasst die Detailverfeinerung, Abnahmen sowie die Übergabe des Objekts zur Nutzung unter Wahrung der ursprünglichen Entwurfsidee.",
          },
        },
      ],

      gallery: [
        { image: project6Gallery1 },
        { image: project6Gallery2 },
        { image: project6Gallery3 },
        { image: project6Gallery4 },
        { image: project6Gallery5 },
        { image: project6Gallery6 },
      ],
    },
  ],
};
