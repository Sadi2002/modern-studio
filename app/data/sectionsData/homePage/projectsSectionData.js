// PROJECT 1
import project1MainImage from "../../../../public/sectionsData/homePage/projectsSection/project1/mainImage.png";
import project1Gallery1 from "../../../../public/sectionsData/homePage/projectsSection/project1/gallery1.png";
import project1Gallery2 from "../../../../public/sectionsData/homePage/projectsSection/project1/gallery2.png";
import project1Gallery3 from "../../../../public/sectionsData/homePage/projectsSection/project1/gallery3.png";
import project1Gallery4 from "../../../../public/sectionsData/homePage/projectsSection/project1/gallery4.png";
import project1Gallery5 from "../../../../public/sectionsData/homePage/projectsSection/project1/gallery5.png";
import project1Gallery6 from "../../../../public/sectionsData/homePage/projectsSection/project1/gallery6.png";

// PROJECT 2
import project2MainImage from "../../../../public/sectionsData/homePage/projectsSection/project2/mainImage.png";
import project2Gallery1 from "../../../../public/sectionsData/homePage/projectsSection/project2/gallery1.png";
import project2Gallery2 from "../../../../public/sectionsData/homePage/projectsSection/project2/gallery2.png";
import project2Gallery3 from "../../../../public/sectionsData/homePage/projectsSection/project2/gallery3.png";
import project2Gallery4 from "../../../../public/sectionsData/homePage/projectsSection/project2/gallery4.png";
import project2Gallery5 from "../../../../public/sectionsData/homePage/projectsSection/project2/gallery5.png";
import project2Gallery6 from "../../../../public/sectionsData/homePage/projectsSection/project2/gallery6.png";

// PROJECT 3
import project3MainImage from "../../../../public/sectionsData/homePage/projectsSection/project3/mainImage.png";
import project3Gallery1 from "../../../../public/sectionsData/homePage/projectsSection/project3/gallery1.png";
import project3Gallery2 from "../../../../public/sectionsData/homePage/projectsSection/project3/gallery2.png";
import project3Gallery3 from "../../../../public/sectionsData/homePage/projectsSection/project3/gallery3.png";
import project3Gallery4 from "../../../../public/sectionsData/homePage/projectsSection/project3/gallery4.png";
import project3Gallery5 from "../../../../public/sectionsData/homePage/projectsSection/project3/gallery5.png";
import project3Gallery6 from "../../../../public/sectionsData/homePage/projectsSection/project3/gallery6.png";

// PROJECT 4
import project4MainImage from "../../../../public/sectionsData/homePage/projectsSection/project4/mainImage.png";
import project4Gallery1 from "../../../../public/sectionsData/homePage/projectsSection/project4/gallery1.png";
import project4Gallery2 from "../../../../public/sectionsData/homePage/projectsSection/project4/gallery2.png";
import project4Gallery3 from "../../../../public/sectionsData/homePage/projectsSection/project4/gallery3.png";
import project4Gallery4 from "../../../../public/sectionsData/homePage/projectsSection/project4/gallery4.png";
import project4Gallery5 from "../../../../public/sectionsData/homePage/projectsSection/project4/gallery5.png";
import project4Gallery6 from "../../../../public/sectionsData/homePage/projectsSection/project4/gallery6.png";

export const projectsSectionData = {
  title: {
    pl: "Nasze projekty",
    en: "Our projects",
    de: "Unsere Projekte",
  },

  subtitle: {
    pl: "Nasze portfolio obejmuje projekty światowej klasy, ustanawiające nowe standardy w projektowaniu i realizacji. Każdy projekt łączy funkcjonalność, estetykę i najwyższą jakość wykonania.",
    en: "Our portfolio features world-class projects, setting new benchmarks in design and execution. Each project combines functionality, aesthetics, and the highest quality craftsmanship.",
    de: "Unser Portfolio zeigt Projekte von Weltklasse, die neue Maßstäbe in Design und Umsetzung setzen. Jedes Projekt vereint Funktionalität, Ästhetik und höchste handwerkliche Qualität.",
  },

  button: {
    buttonLabel: {
      pl: "Zobacz wszystkie",
      en: "View all",
      de: "Alles sehen",
    },
    buttonLink: "portfolio",
  },

  projects: [
    {
      title: {
        pl: "Grand Hill",
        en: "Grand Hill",
        de: "Grand Hill",
      },

      description: {
        pl: "Rezydencja Grand Hill – luksusowy dom na wzgórzu, łączący nowoczesną architekturę, panoramiczne widoki i prywatność. Idealne miejsce dla prestiżu, komfortu i elegancji w harmonii z naturą.",
        en: "Grand Hill Residence – a luxury hilltop home combining modern architecture, panoramic views, and privacy. The perfect place for prestige, comfort, and elegance in harmony with nature.",
        de: "Residenz Grand Hill – ein luxuriöses Haus auf dem Hügel, modern gestaltet, mit Panoramablick und Privatsphäre. Ideal für Prestige, Komfort und Eleganz in Harmonie mit der Natur.",
      },

      imgSrc: project1MainImage,
      model3D: "model.glb",

      alt: {
        pl: "Na wzgórzu stoi nowoczesny, elegancki dom z dużymi oknami. Przed nim taras z widokiem na zieloną dolinę. Niebo jest ciepłe, zachodzące słońce rozświetla dom i wzgórza. Całość wygląda spokojnie i luksusowo.",
        en: "On a hill stands a modern, elegant house with large windows. In front, a terrace overlooks a green valley. The sky is warm, with the setting sun illuminating the house and hills. The scene feels peaceful and luxurious.",
        de: "Auf einem Hügel steht ein modernes, elegantes Haus mit großen Fenstern. Davor erstreckt sich eine Terrasse mit Blick auf ein grünes Tal. Der Himmel ist warm, die untergehende Sonne beleuchtet Haus und Hügel. Die Szene wirkt ruhig und luxuriös.",
      },

      slug: {
        current: "grand-hill",
      },

      year: 2023,

      location: {
        pl: "Hiszpania",
        en: "Spain",
        de: "Spanien",
      },

      dataCompleted: {
        pl: "Data zakończenia",
        en: "Data completed",
        de: "Abschlussdatum",
      },

      typeTitle: {
        pl: "Typ projektu",
        en: "Project type",
        de: "Projekttyp",
      },

      type: {
        pl: "Luksusowa rezydencja",
        en: "Luxury Residence",
        de: "Luxuriöse Residenz",
      },

      collaboratorsTitle: {
        pl: "Współpracownicy",
        en: "Collaborators",
        de: "Mitarbeitende",
      },

      collaborators: [
        {
          title: {
            pl: "Architekt: Olivia Bennett",
            en: "Architect: Olivia Bennett",
            de: "Architekt: Olivia Bennett",
          },
        },
        {
          title: {
            pl: "Projektant wnętrz: Henry Whitman",
            en: "Interior Designer: Henry Whitman",
            de: "Innenarchitekt: Henry Whitman",
          },
        },
        {
          title: {
            pl: "Firma krajobrazowa: Elysium Landscapes",
            en: "Landscaping Company: Elysium Landscapes",
            de: "Landschaftsunternehmen: Elysium Landscapes",
          },
        },
      ],

      details: [
        {
          title: {
            pl: "Koncepcja i wizja",
            en: "Concept & Vision",
            de: "Konzept & Vision",
          },
          text: {
            pl: "W tym etapie powstaje główna idea rezydencji, uwzględniająca wyjątkowe położenie na wzgórzu oraz relację z krajobrazem. Analizujemy kierunki widoków, nasłonecznienie i naturalne otoczenie, tworząc podstawy dla harmonijnego projektu.",
            en: "At this stage, the main concept of the residence is developed, considering its unique hilltop location and relationship with the landscape. We analyze sightlines, sunlight, and natural surroundings, establishing the foundation for a harmonious design.",
            de: "In dieser Phase wird das Hauptkonzept der Residenz entwickelt, wobei die einzigartige Lage auf dem Hügel und die Beziehung zur Landschaft berücksichtigt werden. Wir analysieren Sichtachsen, Sonneneinstrahlung und natürliche Umgebung, um die Grundlage für ein harmonisches Design zu schaffen.",
          },
        },
        {
          title: {
            pl: "Projekt architektoniczny",
            en: "Architectural Design",
            de: "Architekturentwurf",
          },
          text: {
            pl: "Tworzone są szczegółowe rysunki techniczne, elewacje i przekroje budynku. Dobierane są nowoczesne materiały wysokiej jakości, uwzględniające zarówno estetykę, jak i trwałość. Architektura integruje bryłę z terenem, zachowując elegancję i funkcjonalność.",
            en: "Detailed technical drawings, elevations, and cross-sections of the building are created. Modern, high-quality materials are selected, ensuring both aesthetics and durability. The architecture integrates the building with the terrain, maintaining elegance and functionality.",
            de: "Detaillierte technische Zeichnungen, Fassaden und Schnittpläne des Gebäudes werden erstellt. Moderne, hochwertige Materialien werden ausgewählt, um Ästhetik und Langlebigkeit zu gewährleisten. Die Architektur integriert das Gebäude in das Gelände und bewahrt Eleganz und Funktionalität.",
          },
        },
        {
          title: {
            pl: "Projekt wnętrz",
            en: "Interior Design",
            de: "Innenarchitektur",
          },
          text: {
            pl: "Projekt wnętrz łączy elegancję z funkcjonalnością. Dobierane są meble, materiały i oświetlenie premium, tworząc przestrzenie komfortowe, luksusowe i spójne stylistycznie. Każdy detal ma znaczenie – od układu pomieszczeń po wykończenia i dekoracje.",
            en: "The interior design combines elegance with functionality. Furniture, materials, and premium lighting are selected to create comfortable, luxurious, and stylistically coherent spaces. Every detail matters – from room layout to finishes and decor.",
            de: "Das Interior Design verbindet Eleganz mit Funktionalität. Möbel, Materialien und hochwertige Beleuchtung werden ausgewählt, um komfortable, luxuriöse und stilistisch kohärente Räume zu schaffen. Jedes Detail zählt – vom Raumlayout bis zu Oberflächen und Dekorationen.",
          },
        },
        {
          title: {
            pl: "Projekt krajobrazu",
            en: "Landscape Design",
            de: "Landschaftsgestaltung",
          },
          text: {
            pl: "Projekt krajobrazu obejmuje tarasy, ogrody i zielone strefy wokół rezydencji. Tworzymy harmonijne połączenie z naturalnym otoczeniem, uwzględniając roślinność, ścieżki, strefy wypoczynkowe i widoki z tarasów.",
            en: "The landscape design includes terraces, gardens, and green areas surrounding the residence. We create a harmonious connection with the natural environment, considering vegetation, pathways, leisure areas, and terrace views.",
            de: "Das Landschaftsdesign umfasst Terrassen, Gärten und Grünflächen rund um die Residenz. Wir schaffen eine harmonische Verbindung mit der natürlichen Umgebung, unter Berücksichtigung von Bepflanzung, Wegen, Ruhebereichen und Terrassenblicken.",
          },
        },
        {
          title: {
            pl: "Wizualizacje i makieta 3D",
            en: "Visualizations & 3D Model",
            de: "Visualisierungen & 3D-Modell",
          },
          text: {
            pl: "Tworzymy wizualizacje i modele 3D, aby przedstawić przestrzeń inwestorowi. Pozwalają one ocenić proporcje, materiały i układ wnętrz oraz w pełni doświadczyć efektu końcowego przed rozpoczęciem budowy.",
            en: "We create visualizations and 3D models to present the space to the investor. They allow assessment of proportions, materials, and interior layout, and fully experience the final effect before construction begins.",
            de: "Wir erstellen Visualisierungen und 3D-Modelle, um den Raum dem Investor zu präsentieren. Sie ermöglichen die Beurteilung von Proportionen, Materialien und Innenraumaufteilung und bieten ein vollständiges Erlebnis des Endergebnisses vor Baubeginn.",
          },
        },
        {
          title: {
            pl: "Realizacja i nadzór",
            en: "Construction & Supervision",
            de: "Bau & Überwachung",
          },
          text: {
            pl: "Etap realizacji obejmuje budowę, nadzór architektoniczny, wykonawstwo wykończeń oraz finalny odbiór rezydencji. Wszystkie prace są kontrolowane pod kątem jakości, zgodności z projektem i detali premium.",
            en: "The construction phase includes building, architectural supervision, finishing works, and final handover of the residence. All work is monitored for quality, compliance with the design, and premium details.",
            de: "Die Bauphase umfasst den Bau, die architektonische Überwachung, Ausführungsarbeiten und die endgültige Übergabe der Residenz. Alle Arbeiten werden auf Qualität, Projektkonformität und hochwertige Details überwacht.",
          },
        },
      ],

      gallery: [
        {
          image: project1Gallery1,
        },
        {
          image: project1Gallery2,
        },
        {
          image: project1Gallery3,
        },
        {
          image: project1Gallery4,
        },
        {
          image: project1Gallery5,
        },
        {
          image: project1Gallery6,
        },
      ],
    },
    {
      title: {
        pl: "Aurora Natura",
        en: "Aurora Natura",
        de: "Aurora Natura",
      },

      description: {
        pl: "Luksusowa rezydencja, w której minimalizm spotyka naturę. Przestrzeń pełna harmonii, światła i spokoju, stworzona z myślą o relaksie i głębokim kontakcie z otoczeniem.",
        en: "A luxury residence where minimalism meets nature. A space of harmony, light, and tranquility, designed for relaxation and deep connection with the surroundings.",
        de: "Eine luxuriöse Residenz, in der Minimalismus auf die Natur trifft. Ein Raum voller Harmonie, Licht und Ruhe, geschaffen für Entspannung und tiefe Verbundenheit mit der Umgebung.",
      },

      imgSrc: project2MainImage,
      model3D: "model.glb",

      alt: {
        pl: "Aurora Natura to luksusowa rezydencja, w której minimalizm spotyka naturę. Dom daje poczucie spokoju, harmonii i przestrzeni. Można poczuć naturalne materiały, delikatne tekstury i subtelny zapach drewna oraz roślin. Wnętrza są ciche, wypełnione łagodnymi dźwiękami otoczenia – szelest liści, szum wody.",
        en: "Aurora Natura is a luxury residence where minimalism meets nature. The home provides a sense of calm, harmony, and spaciousness. You can feel natural materials, soft textures, and subtle scents of wood and plants. The interior is quiet, filled with gentle ambient sounds – rustling leaves, the murmur of water.",
        de: "Aurora Natura ist eine luxuriöse Residenz, in der Minimalismus auf Natur trifft. Das Haus vermittelt ein Gefühl von Ruhe, Harmonie und Weite. Man kann natürliche Materialien, sanfte Texturen und subtile Düfte von Holz und Pflanzen wahrnehmen. Das Innere ist ruhig, erfüllt von sanften Umgebungsgeräuschen – raschelnde Blätter, leises Wasserrauschen.",
      },

      slug: {
        current: "aurora-natura",
      },

      year: 2023,

      location: {
        pl: "Włochy",
        en: "Italy",
        de: "Italia",
      },

      dataCompleted: {
        pl: "Data zakończenia",
        en: "Data completed",
        de: "Abschlussdatum",
      },

      typeTitle: {
        pl: "Typ projektu",
        en: "Project type",
        de: "Projekttyp",
      },

      type: {
        pl: "Rezydencja zen",
        en: "Zen Residence",
        de: "Zen-Residenz",
      },

      collaboratorsTitle: {
        pl: "Współpracownicy",
        en: "Collaborators",
        de: "Mitarbeitende",
      },

      collaborators: [
        {
          title: {
            pl: "Architekt wnętrz: Studio Forma",
            en: "Interior Architect: Studio Forma",
            de: "Innenarchitekt: Studio Forma",
          },
        },
        {
          title: {
            pl: "Dekorator: LuxStyle",
            en: "Interior Stylist: LuxStyle",
            de: "Innenraumstylist: LuxStyle",
          },
        },
        {
          title: {
            pl: "Generalny wykonawca: InterioPro",
            en: "General Contractor: InterioPro",
            de: "Generalunternehmer: InterioPro",
          },
        },
      ],

      details: [
        {
          title: {
            pl: "Koncepcja i inspiracja",
            en: "Concept & Inspiration",
            de: "Konzept & Inspiration",
          },
          text: {
            pl: "Na tym etapie powstaje kompleksowa wizja rezydencji. Analizujemy potrzeby przyszłych mieszkańców, styl życia i preferencje estetyczne. Tworzymy moodboardy i zestaw inspiracji, które łączą nowoczesny minimalizm z naturalnymi elementami. To moment, w którym projekt nabiera charakteru i zaczyna odzwierciedlać harmonię między luksusem a naturą.",
            en: "At this stage, we develop a comprehensive vision for the residence. We analyze the needs of future residents, their lifestyle, and aesthetic preferences. Moodboards and inspiration sets are created to combine modern minimalism with natural elements. This is the moment when the project gains its character and begins to reflect harmony between luxury and nature.",
            de: "In dieser Phase wird eine umfassende Vision für die Residenz entwickelt. Wir analysieren die Bedürfnisse der zukünftigen Bewohner, ihren Lebensstil und ästhetische Vorlieben. Moodboards und Inspirationssammlungen werden erstellt, um modernen Minimalismus mit natürlichen Elementen zu verbinden. Dies ist der Moment, in dem das Projekt seinen Charakter gewinnt und die Harmonie zwischen Luxus und Natur widerspiegelt.",
          },
        },
        {
          title: {
            pl: "Projekt funkcjonalny",
            en: "Functional Design",
            de: "Funktionales Design",
          },
          text: {
            pl: "Tworzymy przemyślany układ przestrzeni, który maksymalizuje komfort i funkcjonalność. Strefy dzienne i prywatne są harmonijnie połączone, zapewniając zarówno prywatność, jak i przestrzeń do wspólnego spędzania czasu. Projektujemy ergonomiczne meble i rozwiązania architektoniczne, które ułatwiają codzienne życie. Każde pomieszczenie jest tak zaplanowane, aby optymalnie korzystać ze światła dziennego i zapewnić spójność stylistyczną całego domu.",
            en: "We develop a well-thought-out spatial layout that maximizes comfort and functionality. Living and private zones are harmoniously connected, providing both privacy and space for shared activities. We design ergonomic furniture and architectural solutions to facilitate daily life. Each room is planned to make optimal use of natural light and to maintain stylistic coherence throughout the house.",
            de: "Wir entwickeln einen durchdachten Raumplan, der Komfort und Funktionalität maximiert. Wohn- und Privatzonen sind harmonisch verbunden und bieten sowohl Privatsphäre als auch Raum für gemeinsame Aktivitäten. Ergonomische Möbel und architektonische Lösungen werden entworfen, um den Alltag zu erleichtern. Jeder Raum ist so geplant, dass das natürliche Licht optimal genutzt wird und die stilistische Kohärenz im gesamten Haus gewahrt bleibt.",
          },
        },
        {
          title: {
            pl: "Wybór materiałów i kolorystyki",
            en: "Material & Color Selection",
            de: "Material- und Farbauswahl",
          },
          text: {
            pl: "W tym etapie selekcjonujemy naturalne, luksusowe materiały: drewno, kamień, szkło, tkaniny wysokiej jakości. Dobieramy stonowane, neutralne barwy, które tworzą spójny, relaksujący klimat. Każdy element jest starannie wyselekcjonowany pod kątem estetyki, trwałości i ekologicznego pochodzenia.",
            en: "At this stage, we select natural, luxury materials: wood, stone, glass, and high-quality fabrics. We choose calm, neutral colors that create a cohesive, relaxing atmosphere. Every element is carefully chosen for its aesthetics, durability, and sustainable sourcing.",
            de: "In dieser Phase wählen wir natürliche, luxuriöse Materialien: Holz, Stein, Glas und hochwertige Stoffe. Wir wählen ruhige, neutrale Farben, die eine harmonische, entspannende Atmosphäre schaffen. Jedes Element wird sorgfältig nach Ästhetik, Haltbarkeit und nachhaltiger Herkunft ausgewählt.",
          },
        },
        {
          title: {
            pl: "Projekt wnętrz i oświetlenia",
            en: "Interior & Lighting Design",
            de: "Innen- und Lichtdesign",
          },
          text: {
            pl: "Projektujemy minimalistyczne wnętrza z naciskiem na funkcjonalność i elegancję. Oświetlenie dzienne i sztuczne jest starannie zaplanowane, aby podkreślać naturalne tekstury i przestrzeń. Akcenty roślinne i subtelne dodatki wprowadzają poczucie natury do każdego pomieszczenia, tworząc spójną całość.",
            en: "We design minimalist interiors with a focus on functionality and elegance. Daylight and artificial lighting are carefully planned to enhance natural textures and space. Plant accents and subtle details bring a sense of nature into every room, creating a coherent whole.",
            de: "Wir gestalten minimalistische Innenräume mit Fokus auf Funktionalität und Eleganz. Tages- und Kunstlicht werden sorgfältig geplant, um natürliche Texturen und den Raum zu betonen. Pflanzenakzente und subtile Details bringen ein Naturgefühl in jeden Raum und schaffen ein stimmiges Gesamtbild.",
          },
        },
        {
          title: {
            pl: "Współpraca z wykonawcami i nadzór",
            en: "Contractors Collaboration & Supervision",
            de: "Zusammenarbeit mit Auftragnehmern & Bauaufsicht",
          },
          text: {
            pl: "Wybieramy sprawdzonych, zaufanych wykonawców, którzy realizują projekt z najwyższą precyzją. Nadzorujemy każdy etap budowy, dbając o zgodność z projektem, jakość materiałów i terminowość. To etap, w którym koncepcja staje się rzeczywistością, a każdy detal jest dopracowany do perfekcji.",
            en: "We select trusted, experienced contractors who execute the project with the highest precision. We supervise every stage of construction, ensuring adherence to the design, material quality, and timely completion. This is the stage where the concept becomes reality, and every detail is perfected.",
            de: "Wir wählen vertrauenswürdige, erfahrene Auftragnehmer, die das Projekt mit höchster Präzision umsetzen. Wir überwachen jede Bauphase und stellen die Einhaltung des Designs, die Materialqualität und die termingerechte Fertigstellung sicher. Dies ist die Phase, in der das Konzept Realität wird und jedes Detail perfektioniert wird.",
          },
        },
        {
          title: {
            pl: "Finalizacja i aranżacja detali",
            en: "Finalization & Detail Styling",
            de: "Fertigstellung & Detailgestaltung",
          },
          text: {
            pl: "Ostatni etap to dopracowanie wszystkich detali – dekoracje, tekstury, rośliny i subtelne akcenty. Każdy element wnętrza jest starannie umieszczony, aby tworzyć spójną, harmonijną przestrzeń. Aurora Natura staje się miejscem nie tylko do mieszkania, ale także do doświadczenia pełni luksusu, spokoju i kontaktu z naturą.",
            en: "The final stage is the refinement of all details – decorations, textures, plants, and subtle accents. Every element of the interior is carefully placed to create a harmonious, cohesive space. Aurora Natura becomes not just a residence, but a place to experience the full essence of luxury, tranquility, and connection with nature.",
            de: "Die letzte Phase ist die Verfeinerung aller Details – Dekorationen, Texturen, Pflanzen und subtile Akzente. Jedes Element des Innenraums wird sorgfältig platziert, um einen harmonischen, stimmigen Raum zu schaffen. Aurora Natura wird nicht nur zu einer Residenz, sondern zu einem Ort, an dem man Luxus, Ruhe und Naturverbundenheit in ihrer ganzen Essenz erleben kann.",
          },
        },
      ],

      gallery: [
        {
          image: project2Gallery1,
        },
        {
          image: project2Gallery2,
        },
        {
          image: project2Gallery3,
        },
        {
          image: project2Gallery4,
        },
        {
          image: project2Gallery5,
        },
        {
          image: project2Gallery6,
        },
      ],
    },
    {
      title: {
        pl: "Villa Serenità",
        en: "Villa Serenità",
        de: "Villa Serenità",
      },

      description: {
        pl: "Villa Serenità to nowoczesna, luksusowa rezydencja, w której minimalizm spotyka naturalne materiały i otwartą przestrzeń. Przeszklenia zapewniają kontakt z otoczeniem, a subtelne detale z drewna i kamienia tworzą harmonijną, relaksującą atmosferę.",
        en: "Villa Serenità is a modern, luxury residence where minimalism meets natural materials and open spaces. Large windows ensure a connection with the surroundings, while subtle wood and stone details create a harmonious, relaxing atmosphere.",
        de: "Villa Serenità ist eine moderne, luxuriöse Residenz, in der Minimalismus auf natürliche Materialien und offene Räume trifft. Große Fenster sorgen für Verbindung zur Umgebung, während subtile Holz- und Steindetails eine harmonische, entspannende Atmosphäre schaffen.",
      },

      imgSrc: project3MainImage,
      model3D: "model.glb",

      alt: {
        pl: "Villa Serenità to przestrzeń pełna spokoju i harmonii. Duże przeszklenia pozwalają poczuć kontakt z otoczeniem. Wnętrza są ciche, z naturalnymi materiałami: drewno, kamień i delikatne tekstury.",
        en: "Villa Serenità is a space full of calm and harmony. Large windows allow a connection with the surroundings. Interiors are quiet, with natural materials: wood, stone, and soft textures.",
        de: "Villa Serenità ist ein Raum voller Ruhe und Harmonie. Große Fenster ermöglichen die Verbindung mit der Umgebung. Innenräume sind ruhig, mit natürlichen Materialien: Holz, Stein und sanfte Texturen.",
      },

      slug: {
        current: "villa-serenita",
      },

      year: 2023,

      location: {
        pl: "Hiszpania",
        en: "Spain",
        de: "Spanien",
      },

      dataCompleted: {
        pl: "Data zakończenia",
        en: "Data completed",
        de: "Abschlussdatum",
      },

      typeTitle: {
        pl: "Typ projektu",
        en: "Project type",
        de: "Projekttyp",
      },

      type: {
        pl: "Minimalistyczna willa premium",
        en: "Minimalist Premium Villa",
        de: "Minimalistische Premiumvilla",
      },

      collaboratorsTitle: {
        pl: "Współpracownicy",
        en: "Collaborators",
        de: "Mitarbeitende",
      },

      collaborators: [
        {
          title: {
            pl: "Architektura – Studio Forma Architects",
            en: "Architecture – Studio Forma Architects",
            de: "Architektur – Studio Forma Architects",
          },
        },
        {
          title: {
            pl: "Projekt wnętrz – Nowak Interior Design",
            en: "Interior Design – Nowak Interior Design",
            de: "Innenarchitektur – Nowak Interior Design",
          },
        },
        {
          title: {
            pl: "Generalny wykonawca – Horizon Construction",
            en: "General Contractor – Horizon Construction",
            de: "Generalunternehmer – Horizon Construction",
          },
        },
      ],

      details: [
        {
          title: {
            pl: "Koncepcja i inspiracja",
            en: "Concept & Inspiration",
            de: "Konzept & Inspiration",
          },
          text: {
            pl: "Tworzymy wizję rezydencji, analizując potrzeby mieszkańców i inspiracje minimalistyczne. Moodboardy łączą naturalne materiały, światło i przestrzeń w elegancką całość.",
            en: "We develop the vision for the residence, analyzing residents’ needs and minimalist inspirations. Moodboards combine natural materials, light, and space into an elegant whole.",
            de: "Wir entwickeln die Vision der Residenz, analysieren die Bedürfnisse der Bewohner und minimalistische Inspirationen. Moodboards verbinden natürliche Materialien, Licht und Raum zu einem eleganten Ganzen.",
          },
        },
        {
          title: {
            pl: "Projekt funkcjonalny",
            en: "Functional Design",
            de: "Funktionales Design",
          },
          text: {
            pl: "Projektujemy układ wnętrz, łącząc przestrzeń dzienną i prywatną w harmonijną całość. Ergonomiczne rozwiązania zapewniają komfort i funkcjonalność.",
            en: "We design the interior layout, harmoniously connecting living and private zones. Ergonomic solutions ensure comfort and functionality.",
            de: "Wir gestalten den Innenraum, verbinden Wohn- und Privatbereiche harmonisch. Ergonomische Lösungen gewährleisten Komfort und Funktionalität.",
          },
        },
        {
          title: {
            pl: "Wybór materiałów i kolorystyki",
            en: "Material & Color Selection",
            de: "Material- und Farbauswahl",
          },
          text: {
            pl: "Wybieramy naturalne materiały – drewno, kamień, szkło – oraz stonowaną kolorystykę, tworząc relaksującą, spójną atmosferę.",
            en: "We select natural materials – wood, stone, glass – and a muted color palette, creating a relaxing, cohesive atmosphere.",
            de: "Wir wählen natürliche Materialien – Holz, Stein, Glas – und eine zurückhaltende Farbpalette, um eine entspannende, stimmige Atmosphäre zu schaffen.",
          },
        },
        {
          title: {
            pl: "Projekt wnętrz i oświetlenia",
            en: "Interior & Lighting Design",
            de: "Innen- und Lichtdesign",
          },
          text: {
            pl: "Minimalistyczne wnętrza z przemyślanym oświetleniem dziennym i sztucznym podkreślają przestronność i naturalne tekstury.",
            en: "Minimalist interiors with carefully planned natural and artificial lighting emphasize spaciousness and natural textures.",
            de: "Minimalistische Innenräume mit durchdachter Tages- und Kunstbeleuchtung betonen Weite und natürliche Texturen.",
          },
        },
        {
          title: {
            pl: "Współpraca z wykonawcami i nadzór",
            en: "Contractors Collaboration & Supervision",
            de: "Zusammenarbeit mit Auftragnehmern & Bauaufsicht",
          },
          text: {
            pl: "Wybieramy doświadczonych wykonawców, nadzorujemy realizację projektu, dbając o najwyższą jakość i zgodność z koncepcją.",
            en: "We select experienced contractors and supervise the project execution, ensuring top quality and adherence to the concept.",
            de: "Wir wählen erfahrene Auftragnehmer und überwachen die Projektausführung, um höchste Qualität und Konzepttreue sicherzustellen.",
          },
        },
        {
          title: {
            pl: "Finalizacja i aranżacja detali",
            en: "Finalization & Detail Styling",
            de: "Fertigstellung & Detailgestaltung",
          },
          text: {
            pl: "Dopracowanie detali – meble, dodatki, tekstury – tworzy harmonijną, elegancką przestrzeń do życia i relaksu.",
            en: "Finalization & Detail StyRefining details – furniture, accessories, textures – creates a harmonious, elegant space for living and relaxation.ling",
            de: "Die Verfeinerung von Details – Möbel, Accessoires, Texturen – schafft einen harmonischen, eleganten Raum zum Leben und Entspannen.",
          },
        },
      ],

      gallery: [
        {
          image: project3Gallery1,
        },
        {
          image: project3Gallery2,
        },
        {
          image: project3Gallery3,
        },
        {
          image: project3Gallery4,
        },
        {
          image: project3Gallery5,
        },
        {
          image: project3Gallery6,
        },
      ],
    },
    {
      title: {
        pl: "Mist Valley",
        en: "Mist Valley",
        de: "Mist Valley",
      },

      description: {
        pl: "Mist Valley Residence to spokojna, minimalistyczna rezydencja inspirowana naturą i światłem dziennym. Projekt łączy surowe materiały, miękkie formy oraz harmonijną relację wnętrza z otaczającym krajobrazem, tworząc przestrzeń sprzyjającą wyciszeniu i codziennemu komfortowi.",
        en: "Mist Valley Residence is a calm and minimalist private home inspired by nature and natural light. The project combines raw materials, soft forms, and a strong connection between interior spaces and the surrounding landscape, creating an atmosphere of balance and everyday comfort.",
        de: "Die Mist Valley Residence ist eine ruhige, minimalistische Privatresidenz, inspiriert von Natur und Tageslicht. Das Projekt verbindet rohe Materialien, weiche Formen und eine enge Beziehung zwischen Innenraum und Landschaft und schafft so eine harmonische und komfortable Wohnatmosphäre.",
      },

      imgSrc: project4MainImage,
      model3D: "model.glb",

      alt: {
        pl: "Nowoczesna, minimalistyczna przestrzeń dzienna z dużymi przeszkleniami, otwarta na naturalny krajobraz. Neutralna paleta barw, naturalne materiały i miękkie formy mebli tworzą spokojną, harmonijną atmosferę. Światło dzienne odgrywa kluczową rolę, podkreślając relację między wnętrzem a otoczeniem.",
        en: "A modern, minimalist living space with large glazing opening towards the natural landscape. A neutral color palette, natural materials, and soft furniture forms create a calm and harmonious atmosphere. Natural daylight plays a key role, enhancing the connection between the interior and its surroundings.",
        de: "Ein moderner, minimalistischer Wohnraum mit großflächigen Verglasungen und Blick in die natürliche Landschaft. Eine neutrale Farbpalette, natürliche Materialien und weiche Möbelformen schaffen eine ruhige und harmonische Atmosphäre. Das Tageslicht spielt eine zentrale Rolle und betont die Verbindung zwischen Innenraum und Umgebung.",
      },

      slug: {
        current: "mist-valley",
      },

      year: 2023,

      location: {
        pl: "Szwajcaria",
        en: "Switzerland",
        de: "Schweiz",
      },

      dataCompleted: {
        pl: "Data zakończenia",
        en: "Data completed",
        de: "Abschlussdatum",
      },

      typeTitle: {
        pl: "Typ projektu",
        en: "Project type",
        de: "Projekttyp",
      },

      type: {
        pl: "Projekt wnętrz i oświetlenia",
        en: "Interior & Lighting Design",
        de: "Innen- und Lichtdesign",
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
            pl: "Szczegółowa analiza oczekiwań inwestora, stylu życia oraz sposobu użytkowania przestrzeni. Na tym etapie definiowany jest funkcjonalny układ wnętrz, relacje pomiędzy strefami oraz główne założenia projektowe.",
            en: "A detailed analysis of the client’s expectations, lifestyle, and space usage. This stage defines the functional layout, spatial relationships, and core design principles.",
            de: "Detaillierte Analyse der Erwartungen des Bauherrn, des Lebensstils und der Nutzung der Räume. In dieser Phase werden die funktionale Raumaufteilung, Beziehungen zwischen den Zonen und grundlegende Entwurfsprinzipien definiert.",
          },
        },
        {
          title: {
            pl: "Projekt koncepcyjny wnętrz",
            en: "Interior concept design",
            de: "Innenraumkonzept",
          },
          text: {
            pl: "Opracowanie spójnej wizji estetycznej projektu, obejmującej formę, proporcje oraz charakter wnętrza. Etap ten wyznacza kierunek stylistyczny i atmosferę całej przestrzeni.",
            en: "Development of a cohesive aesthetic vision, including form, proportions, and the overall character of the interior. This stage sets the stylistic direction and atmosphere of the project.",
            de: "Entwicklung einer ganzheitlichen gestalterischen Vision mit Fokus auf Form, Proportionen und Charakter des Innenraums. Diese Phase legt die stilistische Richtung und Atmosphäre fest.",
          },
        },
        {
          title: {
            pl: "Dobór materiałów i palety kolorystycznej",
            en: "Material and color palette selection",
            de: "Material- und Farbkonzept",
          },
          text: {
            pl: "Staranna selekcja materiałów wykończeniowych, faktur i kolorów, które podkreślają architekturę wnętrza oraz zapewniają trwałość i ponadczasowość projektu.",
            en: "Careful selection of finishing materials, textures, and colors that enhance the interior architecture while ensuring durability and timeless appeal.",
            de: "Sorgfältige Auswahl von Materialien, Oberflächen und Farben, die die Innenarchitektur unterstreichen und Langlebigkeit sowie zeitlose Qualität gewährleisten.",
          },
        },
        {
          title: {
            pl: "Projekt oświetlenia i detali",
            en: "Lighting and detail design",
            de: "Licht- und Detailplanung",
          },
          text: {
            pl: "Kompleksowe zaprojektowanie oświetlenia funkcjonalnego i nastrojowego, a także detali architektonicznych, które budują klimat wnętrza i wydobywają jego walory estetyczne.",
            en: "Comprehensive design of functional and atmospheric lighting, along with architectural details that enhance the mood and highlight key elements of the interior.",
            de: "Umfassende Planung von funktionalem und stimmungsvollem Licht sowie architektonischen Details, die die Raumwirkung verstärken und Akzente setzen.",
          },
        },
        {
          title: {
            pl: "Koordynacja wykonawcza",
            en: "Execution coordination",
            de: "Ausführungskoordination",
          },
          text: {
            pl: "Ścisła współpraca z wykonawcami i dostawcami, nadzór nad realizacją oraz dbałość o zgodność prac z dokumentacją projektową i założonym standardem jakości.",
            en: "Close collaboration with contractors and suppliers, supervision of the construction process, and ensuring full compliance with the design documentation and quality standards.",
            de: "Enge Zusammenarbeit mit Auftragnehmern und Lieferanten, Überwachung der Umsetzung sowie Sicherstellung der Übereinstimmung mit den Planungsunterlagen und Qualitätsstandards.",
          },
        },
        {
          title: {
            pl: "Finalizacja i stylizacja wnętrz",
            en: "Finalization and interior styling",
            de: "Finalisierung und Interior Styling",
          },
          text: {
            pl: "Ostateczne dopracowanie przestrzeni, montaż elementów wyposażenia, ustawienie mebli i dodatków oraz przygotowanie wnętrza do użytkowania.",
            en: "Final refinement of the space, installation of furnishings, arrangement of furniture and accessories, and preparation of the interior for use.",
            de: "Abschließende Ausarbeitung des Projekts, Montage der Ausstattung, Möblierung sowie dekorative Gestaltung der Räume vor der Übergabe.",
          },
        },
      ],

      gallery: [
        {
          image: project4Gallery1,
        },
        {
          image: project4Gallery2,
        },
        {
          image: project4Gallery3,
        },
        {
          image: project4Gallery4,
        },
        {
          image: project4Gallery5,
        },
        {
          image: project4Gallery6,
        },
      ],
    },
  ],
};
