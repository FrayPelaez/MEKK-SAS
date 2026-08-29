import type { Product } from "../types/product";

export const products: Product[] = [
  // =========================================================
  // PUESTAS A TIERRA
  // =========================================================
  {
    id: 1,
    name: "Equipo de puesta a tierra alta tensión",
    category: "Puestas a tierra",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/equipo alta tension.png",
    description:
      "Equipo de puesta a tierra para trabajos eléctricos en alta tensión.",
  },
  {
    id: 2,
    name: "Equipo de puesta a tierra baja tensión",
    category: "Puestas a tierra",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/equipo baja tension.png",
    description:
      "Equipo de puesta a tierra para trabajos eléctricos en baja tensión.",
  },
  {
    id: 3,
    name: "Equipo de puesta a tierra media tensión",
    category: "Puestas a tierra",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/equipo media tension.png",
    description:
      "Equipo de puesta a tierra para trabajos eléctricos en media tensión.",
  },
  {
    id: 4,
    name: "Sistema de puesta a tierra baja tensión",
    category: "Puestas a tierra",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/sistema baja tension.png",
    description:
      "Sistema de puesta a tierra para instalaciones de baja tensión.",
  },
  {
    id: 5,
    name: "Sistema de puesta a tierra media tensión",
    category: "Puestas a tierra",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/sistema media tension.png",
    description:
      "Sistema de puesta a tierra para instalaciones de media tensión.",
  },

  // =========================================================
  // PÉRTIGAS
  // Las imágenes están físicamente dentro de material electrico
  // en el ZIP, pero la categoría visible sigue siendo Pértigas.
  // =========================================================
  {
    id: 6,
    name: "Pértiga escopeta",
    category: "Pértigas",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/material electrico/pertiga escopeta.png",
    description:
      "Pértiga tipo escopeta para maniobras y trabajos en sistemas eléctricos.",
  },
  {
    id: 7,
    name: "Pértiga Hastings",
    category: "Pértigas",
    brand: "Hastings",
    reference: "N/A",
    image: "/imgs/productos/material electrico/pertigaHasting.png",
    description:
      "Pértiga Hastings para trabajos y maniobras en instalaciones eléctricas.",
  },

  // =========================================================
  // EPP
  // =========================================================
  {
    id: 8,
    name: "Balaclava",
    category: "EPP",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/epps/balaclava.png",
    description:
      "Elemento de protección personal para trabajos eléctricos especializados.",
  },

  // =========================================================
  // ESCALERAS
  // =========================================================
  {
    id: 9,
    name: "Escaleras",
    category: "Escaleras",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/escaleras/escaleras.png",
    description:
      "Escaleras para trabajos profesionales en instalaciones eléctricas.",
  },

  // =========================================================
  // CUBRIMIENTOS LÍNEA VIVA
  // =========================================================
  {
    id: 10,
    name: "Cobertor aislador de suspensión",
    category: "Cubrimientos línea viva",
    brand: "N/A",
    reference: "N/A",
    image:
      "/imgs/productos/cubrimientos linea viva/cobertor aislador de suspension.png",
    description:
      "Cobertor aislante para protección durante trabajos en línea viva.",
  },
  {
    id: 11,
    name: "Cobertor corta circuito",
    category: "Cubrimientos línea viva",
    brand: "N/A",
    reference: "N/A",
    image:
      "/imgs/productos/cubrimientos linea viva/cobertor corta circuito .png",
    description: "Cobertor aislante para protección de cortacircuitos.",
  },
  {
    id: 12,
    name: "Jumper",
    category: "Cubrimientos línea viva",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/cubrimientos linea viva/jumper.png",
    description:
      "Jumper para aplicaciones y trabajos especializados en sistemas eléctricos.",
  },
  {
    id: 13,
    name: "Manta dieléctrica abierta clase 2",
    category: "Cubrimientos línea viva",
    brand: "N/A",
    reference: "N/A",
    image:
      "/imgs/productos/cubrimientos linea viva/manta dielectrica  abierta clase 2.png",
    description:
      "Manta dieléctrica abierta clase 2 para protección en trabajos eléctricos.",
  },
  {
    id: 14,
    name: "Manta dieléctrica cerrada clase 2",
    category: "Cubrimientos línea viva",
    brand: "N/A",
    reference: "N/A",
    image:
      "/imgs/productos/cubrimientos linea viva/manta dielectrica cerrada clase 2.png",
    description:
      "Manta dieléctrica cerrada clase 2 para protección en trabajos eléctricos.",
  },

  // =========================================================
  // MATERIAL ELÉCTRICO
  // =========================================================
  {
    id: 15,
    name: "Barra dieléctrica",
    category: "Material eléctrico",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/material electrico/barra dielectrica.png",
    description: "Barra dieléctrica para trabajos eléctricos especializados.",
  },
  {
    id: 16,
    name: "Capuchones aislados",
    category: "Material eléctrico",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/material electrico/capuchones aislados.png",
    description:
      "Capuchones aislados para protección en instalaciones eléctricas.",
  },
  {
    id: 17,
    name: "Cizalla aislada",
    category: "Material eléctrico",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/material electrico/cizalla aislada.png",
    description:
      "Cizalla aislada para trabajos de corte en instalaciones eléctricas.",
  },
  {
    id: 18,
    name: "Cizalla pico de loro aislada",
    category: "Material eléctrico",
    brand: "N/A",
    reference: "N/A",
    image:
      "/imgs/productos/material electrico/cizalla pico de loro aislada.png",
    description: "Cizalla tipo pico de loro aislada para trabajos eléctricos.",
  },
  {
    id: 19,
    name: "Diferencial aislada",
    category: "Material eléctrico",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/material electrico/diferencial aislada.png",
    description: "Diferencial aislada para trabajos eléctricos especializados.",
  },
  {
    id: 20,
    name: "Gancho colgador dieléctrico",
    category: "Material eléctrico",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/material electrico/gancho colgador dielectrico.jpg",
    description: "Gancho colgador dieléctrico para aplicaciones eléctricas.",
  },
  {
    id: 21,
    name: "Gancho espiral dieléctrico",
    category: "Material eléctrico",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/material electrico/gancho espiral dielectrico.png",
    description: "Gancho espiral dieléctrico para trabajos eléctricos.",
  },

  // =========================================================
  // HERRAMIENTA ESPECIALIZADA
  // =========================================================
  {
    id: 22,
    name: "Ampact",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/ampact.png",
    description:
      "Herramienta especializada para aplicaciones en sistemas eléctricos.",
  },
  {
    id: 23,
    name: "Antenalla 1656-20",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "1656-20",
    image: "/imgs/productos/herramienta especializada/antenalla 1656-20.png",
    description: "Antenalla para sujeción y trabajos especializados.",
  },
  {
    id: 24,
    name: "Antenalla 1656-30",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "1656-30",
    image: "/imgs/productos/herramienta especializada/antenalla 1656-30.png",
    description: "Antenalla para sujeción y trabajos especializados.",
  },
  {
    id: 25,
    name: "Antenalla 1656-40",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "1656-40",
    image: "/imgs/productos/herramienta especializada/antenalla 1656-40.png",
    description: "Antenalla para sujeción y trabajos especializados.",
  },
  {
    id: 26,
    name: "Antenalla Haven 1 Ton",
    category: "Herramienta especializada",
    brand: "Haven",
    reference: "1 Ton",
    image:
      "/imgs/productos/herramienta especializada/antenalla Haven 1ton - copia (2).jpg",
    description: "Antenalla Haven con capacidad de una tonelada.",
  },
  {
    id: 27,
    name: "Antenalla Haven 2 Ton",
    category: "Herramienta especializada",
    brand: "Haven",
    reference: "2 Ton",
    image:
      "/imgs/productos/herramienta especializada/antenalla Haven 2ton - copia.jpg",
    description: "Antenalla Haven con capacidad de dos toneladas.",
  },
  {
    id: 28,
    name: "Antenalla Haven 3 Ton",
    category: "Herramienta especializada",
    brand: "Haven",
    reference: "3 Ton",
    image: "/imgs/productos/herramienta especializada/antenalla Haven 3ton.jpg",
    description: "Antenalla Haven con capacidad de tres toneladas.",
  },
  {
    id: 29,
    name: "Antenallas",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/antenallas.png",
    description:
      "Herramienta de sujeción para trabajos eléctricos especializados.",
  },
  {
    id: 30,
    name: "Detector HP277",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "HP277",
    image: "/imgs/productos/herramienta especializada/detector hp277.jpg",
    description:
      "Detector para aplicaciones y trabajos eléctricos especializados.",
  },
  {
    id: 31,
    name: "Detector SEW",
    category: "Herramienta especializada",
    brand: "SEW",
    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/detector sew.png",
    description:
      "Detector para comprobación y trabajos en sistemas eléctricos.",
  },
  {
    id: 32,
    name: "Detector tipo lápiz",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/detectortipolapiz.png",
    description: "Detector compacto tipo lápiz para trabajos eléctricos.",
  },
  {
    id: 33,
    name: "Garrucha",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/garrucha.png",
    description: "Garrucha para levantamiento y trabajos especializados.",
  },
  {
    id: 34,
    name: "ID",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/id.png",
    description: "Herramienta especializada para aplicaciones eléctricas.",
  },
  {
    id: 35,
    name: "Pinza amperimétrica UNI-T UT202A",
    category: "Herramienta especializada",
    brand: "UNI-T",
    reference: "UT202A",
    image:
      "/imgs/productos/herramienta especializada/pinza amperimetrica unit ut202A.jpg",
    description: "Pinza amperimétrica para medición de parámetros eléctricos.",
  },
  {
    id: 36,
    name: "Zunchadora",
    category: "Herramienta especializada",
    brand: "N/A",
    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/zunchadora.png",
    description:
      "Herramienta para operaciones de zunchado y trabajos especializados.",
  },
];
