import type { Product } from "../types/product";

export const products: Product[] = [
  // =========================================================
  // PUESTAS A TIERRA
  // =========================================================
  {
    id: 1,
    name: "Equipo de puesta a tierra alta tensión",
    category: "Puestas a tierra",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/equipo alta tension.png",
    description:
      "Equipo de puesta a tierra temporal unipolar diseñado para garantizar la seguridad del personal en trabajos sobre líneas energizadas desenergizadas. Fabricado bajo normas IEC 61230 y RETIE, con componentes de alta resistencia mecánica y excelente conductividad eléctrica, asegurando una conexión efectiva y confiable durante actividades de mantenimiento y reparación en redes de alta tensión.",
    features: [
      "Seguridad para el personal durante maniobras.",
      "Para líneas hasta 115 kV.",
      "Capacidad de corriente hasta 40 kA.",
      "Fabricado conforme a las normas IEC 61230 y RETIE.",
      "Alta confiabilidad y fácil instalación.",
      "Conductores de cobre flexible de alta conductividad.",
      "Prensas o morsetos de tierra para conexión segura al conductor.",
      "Pinzas de aluminio para una sujeción eficiente.",
      "Incluye elementos para transporte y almacenamiento.",
      "Barreno o jabalina helicoidal para conexión efectiva a tierra.",
    ],

    technicalSheet:
      "/imgs/fichas-tecnicas/puestas-a-tierra/FICHA-TECNICA-EQUIPO-ALTA-TENSION115KV.png",
  },
  {
    id: 2,
    name: "Equipo de puesta a tierra baja tensión",
    category: "Puestas a tierra",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/equipo baja tension.png",
    description:
      "Los equipos de puesta a tierra temporales de baja tensión representan una solución integral y segura para prevenir accidentes derivados de tensiones inducidas, descargas atmosféricas, energización accidental y contactos involuntarios con conductores energizados. Su diseño permite una rápida disipación de corriente y protección del personal durante trabajos en redes de baja tensión.",
    features: [
      "Protección del personal.",
      "Capacidad de corriente: 3,5 - 5 kA / 1 s.",
      "Cumple norma IEC 61230-1.",
      "Conductor flexible de alta resistencia.",
      "Cubierta transparente de alta resistencia.",
      "Sistema de conexión mediante pinza automática.",
      "Pinzas automáticas con apertura desde calibre 4 mm hasta 20 mm.",
      "Cable de conexión en cobre de 25 mm².",
      "Prensa tierra en bronce para conexión redonda o cuadrada de 0 a 35 mm.",
      "Barreno de puesta a tierra helicoidal de 1,5 m.",
      "Cable bajante de 8 m / 16 mm².",
      "Incluye maletín de transporte en lona impermeable.",
      "Diseñado para trabajos de transmisión y distribución de baja tensión.",
      "Adecuado para mantenimiento preventivo, correctivo, maniobras de seccionamiento y desenergización.",
      "Proporciona seguridad y confiabilidad durante trabajos en redes.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/puestas-a-tierra/FICHA TECNICA EQUIPO BAJA TENSION.png",
  },
  {
    id: 3,
    name: "Equipo de puesta a tierra media tensión",
    category: "Puestas a tierra",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/equipo media tension.png",
    description:
      "El Equipo Puesta a Tierra Media Tensión está diseñado para proteger la seguridad de los técnicos y disipar cargas eléctricas inducidas durante el mantenimiento de líneas eléctricas entre 13.2 kV y 34.5 kV, garantizando una conexión a tierra temporal y reduciendo los riesgos de arco eléctrico.",
    features: [
      "Seguridad en las maniobras sobre líneas de media tensión.",
      "Protección del personal durante trabajos de mantenimiento.",
      "Disipa cargas eléctricas indeseadas y evita riesgos de arco eléctrico.",
      "Cables de cobre trenzado de 35 mm², aislados y flexibles.",
      "Cables de cobre flexible con alta conductividad.",
      "Pinzas de muelle templado con pinzas tipo bandera para una conexión segura.",
      "Sistema de conexión a tierra temporal.",
      "Diseño práctico, resistente y confiable.",
      "Fácil instalación y transporte.",
      "Diseñado para líneas de media tensión de 13,2 kV a 34,5 kV.",
      "Uso en ambientes interiores y exteriores.",
      "Cumple referencias IEC 61230, ASTM F855 y RETIE.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/puestas-a-tierra/FICHA TECNICA EQUIPO PUESTA A TIERRA MEDIA TENSION.png",
  },
  {
    id: 4,
    name: "Equipo de puesta a tierra tipo caimán",
    category: "Puestas a tierra",
    reference: "N/A",
    image:
      "/imgs/productos/puestas a tierra/equipo puesta a tierra tipo caiman.png",
    description:
      "El equipo de puesta a tierra de baja tensión de tipo CAIMÁN representa un componente esencial en los sistemas eléctricos de baja tensión, siendo fundamental para salvaguardar la integridad de instalaciones residenciales, comerciales e industriales. Este sistema se compone de electrodos estratégicamente enterrados y conectados a un conductor anular, desempeñando un papel crucial al disipar la corriente eléctrica hacia la tierra. Su función principal radica en proporcionar una ruta segura y eficiente para la corriente de falla, lo que minimiza el riesgo de descargas eléctricas y protege tanto los equipos como la seguridad de las personas que interactúan en estos entornos. Al asegurar una trayectoria controlada para la corriente excedente, este método no solo resguarda contra posibles accidentes eléctricos, sino que también contribuye a preservar la integridad operativa de los dispositivos y sistemas conectados a la red eléctrica.",
    features: [
      "(4) Pinzas tipo caimán en aleación de aluminio con apertura desde calibre 4mm hasta 20mm, mangos aislados de 18cm, en colores rojo para la fase y negro para el neutro. Con terminales tipo ojo para conexión de la pinza y los cables de conexión (3 de fase y 1 neutro).",
      "(3) Cables de conexión entre pinza en cobre de 16mm2 con cubierta transparente y terminales en ojo ponchado, separación entre pinzas 60 cm.",
      "(1) Cable bajante en cobre de 16 mm2 con cubierta transparente y terminales de ojo ponchado de 8 m aprox. entre pinza y tomo.",
      "(1) Prensa a tierra en bronce para conexión redonda o cuadrada con capacidad de 0 a 35 mm2.",
      "(1) Barreno o jabalina de puesta a tierra helicoidal de 1,5 m.",
      "(1) Maletín de transporte en lona impermeable resistente para guardar el equipo.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/puestas-a-tierra/FICHA TECNICA EQUIPO PUESTA A TIERRA TIPO CAIMAN.jpeg",
  },
  {
    id: 5,
    name: "Sistema de puesta a tierra baja tensión",
    category: "Puestas a tierra",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/sistema baja tension.png",
    description:
      "Sistema de puesta a tierra para neutro secundario de baja tensión diseñado para disipar corrientes de falla y descargas atmosféricas, garantizando la seguridad del personal y el correcto funcionamiento de los equipos eléctricos. Su instalación proporciona un camino seguro de descarga a tierra, evitando tensiones peligrosas en estructuras y redes.",
    features: [
      "Seguridad humana.",
      "Protección de equipos eléctricos y electrónicos.",
      "Disipación de corrientes de falla.",
      "Mejora el funcionamiento del sistema.",
      "Diseñado para instalación en poste de baja tensión.",
      "Conductor bajante en fleje de 7/8″ x 8 metros.",
      "Conductor en acero inoxidable AISI 304.",
      "Fleje de 1,2 mm de espesor.",
      "Ancho de fleje de 7/8 (22,2 mm).",
      "Electrodo de puesta a tierra de 2,40 m.",
      "Diámetro de electrodo de 10 mm o 15 mm.",
      "Abrazaderas y conectores en acero inoxidable 304.",
      "Aplicación en sistemas de puesta a tierra BT de neutro secundario.",
      "Aplicable en instalaciones industriales, redes de distribución, transformadores de baja tensión y sistemas residenciales y comerciales.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/puestas-a-tierra/FICHA TECNICA KIT SPT BAJA TENSION.png",
  },
  {
    id: 6,
    name: "Sistema de puesta a tierra media tensión",
    category: "Puestas a tierra",
    reference: "N/A",
    image: "/imgs/productos/puestas a tierra/sistema media tension.png",
    description:
      "Sistema diseñado para garantizar la seguridad eléctrica en instalaciones de media tensión, proporcionando un camino eficiente para la disipación de corrientes de falla generadas por descargas atmosféricas o cortocircuitos. Su implementación evita riesgos eléctricos en personas y protege los equipos, asegurando un funcionamiento estable y confiable en redes eléctricas. Fabricado en acero inoxidable 304, ofrece alta resistencia a la corrosión y larga vida útil en condiciones exigentes.",
    features: [
      "Alta resistencia a la corrosión gracias al acero inoxidable 304.",
      "Protección efectiva contra descargas eléctricas y sobrecargas.",
      "Diseñado para sistemas eléctricos industriales y redes de distribución.",
      "Instalación segura y práctica con componentes de calidad.",
      "Sistema de puesta a tierra para media tensión.",
      "Conductor bajante en fleje de acero inoxidable 304 de 7/8″ x 11 metros.",
      "Electrodo de puesta a tierra en acero inoxidable 304 de 10 mm x 2,40 m o 15 mm x 2,40 m.",
      "Resistencia a la corrosión: alta.",
      "Uso en instalaciones exteriores e interiores.",
      "Temperatura de operación: -40 °C a 80 °C.",
      "Incluye manual de instalación.",
      "Aplicable en sistemas eléctricos industriales y redes de distribución.",
      "Protección contra descargas atmosféricas.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/puestas-a-tierra/FICHA TECNICA KIT PUESTA A TIERRA MEDIA TENSION.jpeg",
  },

  // =========================================================
  // PÉRTIGAS
  // =========================================================
  {
    id: 7,
    name: "Pértiga escopeta",
    category: "Pértigas",
    reference: "N/A",
    image: "/imgs/productos/material electrico/pertiga escopeta.png",

    description:
      "La pértiga tipo escopeta cuenta con un gancho retráctil accionado por un mango que se desliza a lo largo de la pértiga controlando la apertura del gancho. Aunque está diseñada principalmente para colocar grapas para trabajo en línea viva y de puesta a tierra, puede usarse tanto en líneas aéreas como subterráneas empleando los accesorios pertinentes.",

    features: [
      "No usar cuando la pértiga se encuentre húmeda, fracturada o en mal estado.",
      "No utilizar en equipos electrificados con tensión de operación mayor a la indicada.",
      "El área protegida es hasta la guarda al final de la empuñadura.",
    ],

    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA PERTIGA ESCOPETA HASTING.png",

    technicalDescription:
      "Este tipo de pértiga tiene una longitud fija y su mecanismo de acción es interno lo que proporciona un mayor tiempo de vida útil. Este tipo de pértiga es apta para realizar trabajos en líneas de tensión que se consideran energizadas, permitiendo al operador ubicarse desde una distancia segura. Están hechas en fibra de vidrio con excelentes propiedades dieléctricas y una buena resistencia mecánica. Todas las pértigas están fabricadas para cumplir con los estándares de prueba de 100 kV por pie.",

    specifications: {
      headers: ["Longitud (m)", "1.4", "2", "2.6", "3.2", "3.8"],
      rows: [["Peso (kgs)", "1.9", "2.2", "2.6", "2.9", "3.2"]],
    },

    faq: [
      {
        question: "¿Cómo garantizar la seguridad al usar una pértiga escopeta?",
        answer:
          "Para usar una pértiga escopeta de manera segura, sigue estas recomendaciones clave:",
        points: [
          "Inspección previa: Examina visualmente la pértiga para identificar daños, grietas o suciedad antes de cada uso.",
          "Mantenimiento adecuado: Mantén la pértiga limpia, seca y libre de contaminantes que puedan comprometer su resistencia dieléctrica.",
          "Uso de equipo de protección personal: Lleva guantes y botas dieléctricas homologadas para evitar riesgos eléctricos.",
          "Entrenamiento especializado: Asegúrate de recibir capacitación adecuada para operar la pértiga de forma eficiente y segura.",
        ],
      },
      {
        question: "¿Cuál es la función del gancho en una pértiga escopeta?",
        answer:
          "El gancho de la pértiga escopeta está diseñado para facilitar tareas específicas en sistemas eléctricos, como:",
        points: [
          "Manipulación de componentes eléctricos: Mover, sostener o ajustar piezas en líneas energizadas.",
          "Desconexión y conexión de equipos: Realizar maniobras seguras sin contacto directo.",
          "Operaciones en líneas eléctricas: Asegurar maniobras seguras en ambientes de alto riesgo.",
        ],
      },
      {
        question:
          "¿Por qué es importante la flexibilidad de la fibra de vidrio en una pértiga escopeta?",
        answer:
          "La fibra de vidrio proporciona una combinación ideal de resistencia y flexibilidad que mejora la seguridad:",
        points: [
          "Absorción de impactos: Reduce el riesgo de fracturas al adaptarse a tensiones mecánicas.",
          "Estabilidad estructural: Mantiene su forma y funcionalidad incluso bajo condiciones de carga intensa.",
          "Durabilidad: Resiste deformaciones y daños en condiciones extremas, como temperaturas altas, humedad o exposición prolongada al sol.",
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Pértiga Telescópica Hastings",
    category: "Pértigas",
    reference: "N/A",
    image: "/imgs/productos/material electrico/pertigaHasting.png",

    description:
      "La pértiga Hastings de MEKK SAS está diseñada para proporcionar máximo alcance, seguridad y comodidad en operaciones eléctricas y de altura. Gracias a su fabricación en fibra de vidrio de grado eléctrico, ofrece una resistencia dieléctrica superior, garantizando protección contra descargas y facilitando el trabajo en condiciones de alto riesgo. Esta pértiga telescópica está diseñada para resistir condiciones extremas y proporcionar una manipulación precisa, siendo una opción ideal para trabajos eléctricos, mantenimiento de líneas de alta tensión y operaciones en altura que requieren seguridad y confiabilidad.",

    features: [
      "Sistema telescópico innovador: Su diseño retráctil permite ajustar la longitud según la necesidad, optimizando el almacenamiento y facilitando la limpieza interna.",
      "Ergonomía y ligereza: Reduce la fatiga del operario y mejora la maniobrabilidad en trabajos prolongados.",
      "Mayor estabilidad y control: Su estructura minimiza la flexión en la punta, ofreciendo una precisión superior respecto a las pértigas convencionales de sección redonda.",
      "Visibilidad mejorada en entornos oscuros: La sección superior fluorescente incrementa la seguridad, permitiendo una rápida identificación del extremo de la pértiga en condiciones de poca iluminación.",
    ],

    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA PERTIGA TELESCOPICA HASTING .png",

    technicalDescription:
      "La pértiga Hastings dieléctrica de MEKK SAS está diseñada para ofrecer seguridad, precisión y durabilidad en trabajos eléctricos de alto riesgo. Gracias a su fabricación en fibra de vidrio de grado eléctrico, garantiza una alta resistencia dieléctrica, protegiendo a los operarios de descargas eléctricas. Con un sistema telescópico innovador, permite ajustar su longitud según la necesidad, facilitando su almacenamiento, transporte y maniobrabilidad sin comprometer la estabilidad ni la seguridad del usuario.",

    specifications: {
      headers: ["Referencia", "HV-208", "HV-225", "HV-230", "HV-235", "HV-240"],
      rows: [
        [
          "Largo Máximo",
          "2.44 metros",
          "7.77 metros",
          "9.1 metros",
          "10.6 metros",
          "12 metros",
        ],
        [
          "Largo Mínimo",
          "0.66 metros",
          "1.62 metros",
          "1.67 metros",
          "1.72 metros",
          "1.75 metros",
        ],
        ["Número de secciones", "5", "6", "7", "8", "9"],
        ["Diámetro de la base", "45 mm", "48 mm", "53 mm", "56 mm", "60 mm"],
        ["Peso", "1.4 kgs", "3.7 kgs", "4.5 kgs", "5.5 kgs", "6.5 kgs"],
      ],
    },

    faq: [
      {
        question: "¿Qué longitud tienen las pértigas Hastings?",
        answer:
          "Las pértigas vienen en distintas longitudes ajustables. Contáctanos para conocer la medida que mejor se adapte a tus necesidades.",
      },
      {
        question: "¿Cuánto pesan las pértigas Hastings?",
        answer:
          "Gracias a su construcción en fibra de vidrio, son ligeras y fáciles de manipular, reduciendo el esfuerzo del operario.",
      },
      {
        question: "¿Son resistentes a la intemperie?",
        answer:
          "Sí, están diseñadas para resistir humedad, rayos UV y temperaturas extremas sin comprometer su desempeño.",
      },
      {
        question: "¿Cuentan con certificaciones de seguridad?",
        answer:
          "Sí, nuestras pértigas cumplen con las normativas IEC 60855, asegurando su confiabilidad en trabajos eléctricos de alto riesgo.",
      },
    ],
  },
  // =========================================================
  // EPP
  // =========================================================
  {
    id: 9,
    name: "Balaclava",
    category: "EPP",
    reference: "N/A",
    image: "/imgs/productos/epps/balaclava.png",
    description:
      "La balaclava ignífuga para protección contra arco eléctrico está diseñada para brindar protección avanzada de la cabeza, rostro, cuello y parte superior de los hombros en trabajos eléctricos de alto riesgo. Su fabricación en fibras técnicas resistentes al fuego proporciona protección térmica, confort y durabilidad, siendo adecuada para labores en entornos de media y alta tensión.",
    features: [
      "Protección contra arco eléctrico de alta energía ( 12, 24, 36 cal/cm²).",
      "Material ignífugo permanente, resistente a la llama y al calor.",
      "Alta resistencia a la propagación de la llama.",
      "Excelente comportamiento térmico y disipación del calor.",
      "Diseño ergonómico para uso prolongado.",
      "Alta transpirabilidad y confort.",
      "Costuras reforzadas de alta resistencia.",
      "Cobertura extendida para protección del cuello y hombros.",
      "Compatible con casco dieléctrico, careta facial y otros EPP.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA BALACLAVA 24CAL.png",
  },
  {
    id: 10,
    name: "Bolso para careta",
    category: "EPP",
    reference: "N/A",
    image: "/imgs/productos/epps/bolso para careta.png",
    description:
      "Nuestros bolsos para careta anti arco es un accesorio diseñado para transportar y proteger de manera segura una careta de soldadura anti arco. Está confeccionado con materiales resistentes y duraderos que garantizan la protección adecuada del equipo, al mismo tiempo que facilitan su transporte y almacenamiento.",
    features: [
      "Fabricado en lona tipo carpa impermeable.",
      "Bolso con molde de la careta.",
      "Forro interno que evita rayones.",
      "Lleva reata ajustable.",
      "Cremallera negra ajustable.",
    ],
    technicalSheet: "/imgs/fichas-tecnicas/epps/FICHA TECNICA BOLSO CARETA.png",
  },
  {
    id: 11,
    name: "Capuchones aislados",
    category: "EPP",
    reference: "N/A",
    image: "/imgs/productos/epps/capuchones aislados.png",
    description:
      "Los Capuchones Aislantes están diseñados para cubrir y aislar las puntas o extremos de conductores, conectores, varillas, pernos y otros elementos metálicos, evitando contactos accidentales y proporcionando protección temporal al personal liniero durante trabajos de mantenimiento o reparación en redes eléctricas. Fabricados en caucho dieléctrico de alta resistencia, ofrecen un excelente aislamiento eléctrico, resistencia mecánica y durabilidad frente a condiciones ambientales exigentes. Disponibles en diferentes diámetros para adaptarse a múltiples aplicaciones y garantizar seguridad en sistemas de distribución y transmisión.",
    features: [
      "Aislamiento dieléctrico de alta eficiencia.",
      "Protección contra contactos accidentales.",
      "Flexibles, livianos y fáciles de instalar.",
      "Fabricados en caucho dieléctrico de alta resistencia.",
      "Color: naranja.",
      "Tensión máxima de uso: hasta 36 kV AC, según diámetro y aplicación.",
      "Tensión de prueba: 40 kV AC por 1 minuto.",
      "Temperatura de operación: -40 °C a +80 °C.",
      "Resistencia a la tracción: mínimo 12 MPa.",
      "Alta elasticidad.",
      "Excelente resistencia al ozono, envejecimiento e intemperie.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA CAPUCHONES AISLANTES.png",
  },
  {
    id: 12,
    name: "Careta de protección",
    category: "EPP",
    reference: "N/A",
    image: "/imgs/productos/epps/careta de proteccion.png",
    description:
      "La Careta de Protección AF ATPV 20 Cal/cm² AMP1-20-HT está diseñada para brindar protección facial y ocular contra los peligros de arco eléctrico, salpicaduras y partículas de alta velocidad. Cuenta con visor de policarbonato con tratamiento antivaho y anti-rayadura, de alta resistencia y gran claridad óptica. Su diseño ergonómico permite un ajuste cómodo y seguro al casco, siendo ideal para trabajos en entornos de alta exigencia eléctrica.",
    features: [
      "Protección contra arco eléctrico ATPV 20 Cal/cm².",
      "Protección facial y ocular de alto impacto.",
      "Visor fabricado en policarbonato de alta resistencia.",
      "Transmisión de luz visible (VLT): 50 % ± 5 %.",
      "Visor de color gris.",
      "Tratamiento antivaho y anti-rayadura.",
      "Resistencia al impacto de alto impacto (B) según ANSI Z87.1.",
      "Diseño ergonómico con ajuste seguro y confortable.",
      "Sistema de montaje rápido y fácil de usar.",
      "Protección facial completa desde la frente hasta el mentón.",
      "Compatible con casco y protección auditiva.",
      "Adaptable a la mayoría de cascos de seguridad tipo ranura universal.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA CARETA DE PROTECCION 20CAL.png",
  },
  {
    id: 13,
    name: "Casco de seguridad tipo II",
    category: "EPP",

    reference: "N/A",
    image: "/imgs/productos/epps/casco de seguridad tipo II.png",
    description:
      "El Casco de Seguridad Tipo 2 está diseñado para brindar protección superior en entornos laborales de alto riesgo. Su diseño robusto y ergonómico ofrece una excelente absorción de impactos y una gran resistencia a la penetración, protegiendo la parte superior, lateral y posterior de la cabeza. Fabricado en polietileno de alta densidad (HDPE) de gran durabilidad, con sistema de suspensión ajustable de 4 o 6 puntos que garantiza comodidad y estabilidad durante largas jornadas de trabajo. Compatible con accesorios de protección facial, auditiva y barbuquejo, proporcionando una solución integral para la seguridad del trabajador.",
    features: [
      "Protección Tipo 2, con protección frontal, lateral y posterior.",
      "Alta resistencia a impactos y penetración.",
      "Fabricado en polietileno de alta densidad (HDPE).",
      "Suspensión interna ajustable de 4 o 6 puntos.",
      "Sistema de ajuste tipo ratchet.",
      "Talla universal: 52 - 64 cm.",
      "Peso aproximado: 370 g.",
      "Color: blanco.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA CASCO DE SEGURIDAD TIPO 2.png",
  },
  {
    id: 14,
    name: "Cuchillo pelacable aislado 1000V",
    category: "EPP",
    reference: "1000V",
    image: "/imgs/productos/epps/cuchillo pela cable aislados 1000V.jpg",
    description:
      "El cuchillo Pelacable Aislad Tramontina PRO está diseñada para realizar cortes y pelados de cables de manera segura en trabajos eléctricos hasta 1000 V CA / 1500 V CC. Su hoja curva de acero inoxidable de alta calidad permite realizar cortes precisos de los conductores sin dañar los componentes internos. El mango y la protección lateral están fabricados en material aislante de alta resistencia, cumpliendo con la norma internacional IEC 60900, que garantiza la protección del usuario contra descargas eléctricas. Herramienta ligera, ergonómica y de fácil manejo, ideal para electricistas y profesionales que requieren seguridad y precisión en cada trabajo.",
    features: [
      "Marca: Tramontina PRO.",
      "Referencia: 44346007.",
      "Tipo: Cortadora curva pelacable aislada.",
      "Aislamiento: Hasta 1000 V CA / 1500 V CC.",
      "Norma: IEC 60900.",
      'Longitud total: 190 mm (7").',
      "Material de la hoja: Acero inoxidable.",
      "Tipo de hoja: Curva.",
      "Material del mango: Poliamida aislante de alta resistencia.",
      "Color: Rojo de alta visibilidad.",
      "Protección lateral: Sí.",
      "Incluye tapa protectora para la hoja.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA  CUCHILLO AISLADO.png",
  },
  {
    id: 15,
    name: "Juego de dados con ratchet aislados a 1000V",
    category: "EPP",
    reference: "1000V",
    image:
      "/imgs/productos/epps/juego de dados con ratchet aislados a 1000v.jpg",
    description:
      'El Juego de Dados con Ratchet Aislados Tramontina PRO está diseñado para proporcionar máxima seguridad en trabajos eléctricos en baja y media tensión hasta 1000 V. Fabricado conforme a la norma internacional IEC 60900, garantiza aislamiento y protección del usuario contra descargas eléctricas. Incluye un ratchet aislado de 3/8", una extensión aislada y 14 dados hexagonales aislados en medidas de 7 mm a 19 mm para trabajos eléctricos seguros. Todas las piezas cuentan con aislamiento de alta calidad, ofreciendo resistencia, durabilidad y rendimiento profesional.',
    features: [
      "Marca: Tramontina PRO.",
      "Referencia: 44335213.",
      "Tipo: Juego de herramientas con ratchet aislado.",
      "Número de piezas: 16 piezas.",
      "Incluye 14 dados aislados, 1 ratchet aislado y 1 extensión aislada.",
      "Aislamiento: Hasta 1000 V CA / 1500 V CC.",
      "Norma: IEC 60900.",
      'Cuadro de encastre: 3/8".',
      "Medidas de los dados: 7 a 19 mm.",
      "Material de los dados: Acero cromo vanadio.",
      "Material del aislamiento: Polipropileno + Elastómero (bimaterial).",
      'Ratchet de 3/8" con 72 dientes.',
      "Extensión incluida: 250 mm aprox.",
      "Acabado: Aislamiento rojo de alta visibilidad.",
      "Maletín de plástico resistente con espuma interna.",
      "Aplicación: Trabajos eléctricos en baja y media tensión.",
      "Ideal para instalaciones eléctricas, tableros, cableado, redes y mantenimiento industrial.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA  JUEGO DE DADOS CON RATCHET AISLADOS.png",
  },
  {
    id: 16,
    name: "Juego de destornilladores aislados a 1000V",
    category: "EPP",
    reference: "1000V",
    image:
      "/imgs/productos/epps/juego de destornilladores aislados a 1000V.jpg",
    description:
      "El Juego de Destornilladores Aislados Tramontina PRO está diseñado para ofrecer máxima seguridad en trabajos eléctricos hasta 1000 V CA (1500 V CC). Cumple con la norma internacional IEC 60900, garantizando el aislamiento de las herramientas para proteger al usuario contra descargas eléctricas. Las varillas son fabricadas en acero especial de alta resistencia con aislamiento en material de alta calidad, y las puntas cromadas negras ofrecen mayor durabilidad, precisión y resistencia al desgaste. El mango ergonómico bimaterial proporciona un agarre cómodo, seguro y antideslizante, permitiendo mayor torque y control durante el trabajo.",
    features: [
      "Marca: Tramontina PRO.",
      "Referencia: 4415/406.",
      "Tipo: Juego de destornilladores aislados.",
      "Número de piezas: 6.",
      "Aislamiento: Hasta 1000 V CA / 1500 V CC.",
      "Norma de seguridad: IEC 60900.",
      "Material de la varilla: Acero especial aislado.",
      "Material del mango: Polipropileno + Elastómero (bimaterial).",
      "Acabado de la punta: Cromado negro.",
      "Mangos ergonómicos bimateriales para mayor comodidad y control.",
      "Puntas con acabado cromado negro para mayor precisión y durabilidad.",
      "Materiales resistentes a impactos, químicos y corrosión.",
      "Incluye estuche plástico termoformado para almacenamiento y transporte.",
      "Incluye: Destornillador plano 2,5 x 75 mm.",
      "Incluye: Destornillador plano 4,0 x 100 mm.",
      "Incluye: Destornillador plano 5,5 x 125 mm.",
      "Incluye: Destornillador Phillips PH1 x 80 mm.",
      "Incluye: Destornillador Phillips PH2 x 100 mm.",
      "Incluye: Destornillador Phillips PH3 x 150 mm.",
      "Aplicación: Trabajos eléctricos y electrónicos en baja y media tensión.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA JUEGO DE DESTORNILLADORES AISLADOS TROMONTINA.png",
  },
  {
    id: 17,
    name: "Llave ajustable aislada 1000V",
    category: "EPP",
    reference: "1000V",
    image: "/imgs/productos/epps/llave ajustable aislada 1000v.jpg",
    description:
      "La Llave Ajustable Aislada Tramontina PRO está diseñada para ofrecer máxima seguridad en trabajos eléctricos en baja y media tensión hasta 1000 V CA (1500 V CC). Fabricada en acero de alta calidad con aislamiento de poliamida, cumple con la norma internacional IEC 60900, garantizando protección del usuario contra descargas eléctricas. Su mordaza ajustable permite trabajar con diferentes medidas de tuercas y pernos, proporcionando firmeza, precisión y comodidad en cada aplicación.",
    features: [
      "Marca: Tramontina PRO.",
      "Tipo: Llave ajustable aislada.",
      "Aislamiento: Hasta 1000 V CA / 1500 V CC.",
      "Norma: IEC 60900.",
      "Material de la llave: Acero al cromo vanadio.",
      "Material del mango: Poliamida aislante de alta resistencia.",
      "Color: Rojo de alta visibilidad.",
      "Mordaza ajustable: Sí.",
      "Escala de medida en la mordaza: Milímetros (mm).",
      'Tamaños disponibles: 8" (200 mm), 10" (250 mm) y 12" (300 mm).',
      "Aplicación: Trabajos eléctricos en baja y media tensión.",
      "Uso: Ajuste de tuercas y pernos.",
      "Mango ergonómico y aislado para un agarre seguro y cómodo.",
      "Herramienta ligera y resistente, ideal para uso profesional e industrial.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA  LLAVE AJUSTABLE.png",
  },
  {
    id: 18,
    name: "Llaves fijas aisladas a 1000V",
    category: "EPP",
    reference: "1000V",
    image: "/imgs/productos/epps/llaves fijas aisladas a 1000v.jpg",
    description:
      "Llave fija aislada de Tramontina, diseñada para trabajos en instalaciones eléctricas energizadas o en proximidad de partes en tensión hasta 1000 V AC. Fabricada en acero cromo vanadio de alta resistencia, con aislamiento en polímero de doble capa que brinda mayor seguridad al usuario. Ideal para aplicaciones en sistemas eléctricos de baja y media tensión.",
    features: [
      "Marca: Tramontina.",
      "Tipo: Llave fija aislada.",
      "Material: Acero cromo vanadio.",
      "Acabado: Cromado con aislamiento en polímero.",
      "Aislamiento: Doble capa.",
      "Tensión máxima de trabajo: 1000 V AC.",
      "Norma de seguridad: IEC 60900.",
      "Uso: Trabajos eléctricos en baja y media tensión.",
      "Color: Rojo.",
      "Aislamiento ergonómico y antideslizante.",
      "Fabricación en acero de alta resistencia y durabilidad.",
      "Disponible en diferentes medidas.",
      "Presentación: Unidad.",
      "Cumple con los requisitos de seguridad para trabajos eléctricos.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA LLAVES FIJAS AISLADAS.jpeg",
  },
  {
    id: 19,
    name: "Pinza de punta aislada 1000V",
    category: "EPP",
    reference: "1000V",
    image: "/imgs/productos/epps/pinza de punta aislada 1000v.jpg",
    description:
      "Pinza de punta aislada 1000 V de Tramontina, diseñada para trabajos eléctricos con mayor seguridad. Fabricada en acero especial con acabado niquelado y mango con aislamiento de dos componentes, proporcionando un agarre cómodo y seguro. Ideal para instalaciones y mantenimientos eléctricos en baja y media tensión.",
    features: [
      "Marca: Tramontina.",
      "Referencia / Código: 41001/108.",
      "Tipo: Pinza de punta aislada.",
      'Longitud total: 8" (200 mm).',
      "Tipo de punta: Larga y estriada.",
      "Material del cuerpo: Acero especial forjado.",
      "Acabado: Niquelado.",
      "Material del mango: Aislamiento en doble componente (polímero).",
      "Tensión máxima de aislamiento: 1000 V AC.",
      "Norma de seguridad: IEC 60900.",
      "Peso aproximado: 220 g.",
      "Color del mango: Rojo con negro.",
      "Longitud de la punta: 73 mm aprox.",
      "Ancho de la cabeza: 18 mm aprox.",
      "Espesor de la punta: 3 mm aprox.",
      "Punta larga y estriada para mayor precisión.",
      "Mangos ergonómicos antideslizantes.",
      "Alta resistencia al desgaste y a la corrosión.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA PINZA DE PUNTA AISLADA.jpeg",
  },
  {
    id: 20,
    name: "Segueta aislada 1000V",
    category: "EPP",
    reference: "1000V",
    image: "/imgs/productos/epps/segueta aislada 1000V.jpg",
    description:
      'El Arco de Sierra Aislado Tramontina PRO de 12" está diseñado para ofrecer máxima seguridad en trabajos eléctricos en baja y media tensión hasta 1000 V CA (1500 V CC). Su estructura y empuñadura están fabricadas en material aislante de alta resistencia, cumpliendo con la norma internacional IEC 60900, que garantiza la protección del usuario contra descargas eléctricas. Ideal para cortes precisos de metales, tubos y materiales conductores, brindando comodidad, control y durabilidad en condiciones exigentes.',
    features: [
      "Marca: Tramontina PRO.",
      "Referencia: 44340020.",
      "Tipo: Arco de sierra aislado.",
      "Tamaño: 12 pulgadas (300 mm).",
      "Aislamiento: Hasta 1000 V CA / 1500 V CC.",
      "Norma: IEC 60900.",
      "Material del arco: Acero con recubrimiento aislante.",
      "Material del mango: Poliamida aislante de alta resistencia.",
      "Color: Rojo de alta visibilidad.",
      "Sistema de tensión: Ajustable.",
      'Hojas compatibles: Hojas de sierra de 12" (300 mm).',
      "Diseño ergonómico para un agarre cómodo y seguro.",
      "Estructura robusta y ligera para mayor control y durabilidad.",
      'Compatible con hojas de sierra de 12", fáciles de reemplazar.',
      "Aplicación: Trabajos eléctricos en baja y media tensión.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/epps/FICHA TECNICA ARCA DE SIERRA.png",
  },

  // =========================================================
  // ESCALERAS
  // =========================================================
  {
    id: 21,
    name: "Apoya poste",
    category: "Escaleras",

    reference: "N/A",
    image: "/imgs/productos/escaleras/apoya poste.png",
    description:
      "Accesorio apoya poste para trabajos con escaleras profesionales.",
  },
  {
    id: 22,
    name: "Escalera de extensión dieléctrica",
    category: "Escaleras",

    reference: "N/A",
    image: "/imgs/productos/escaleras/escalera de extension dielectrica.png",
    description: "Escalera de extensión dieléctrica para trabajos eléctricos.",
  },
  {
    id: 23,
    name: "Escalera sencilla dieléctrica",
    category: "Escaleras",

    reference: "N/A",
    image: "/imgs/productos/escaleras/escalera sencilla dielectrica.png",
    description:
      "Escalera sencilla dieléctrica para trabajos en instalaciones eléctricas.",
  },
  {
    id: 24,
    name: "Escalera tipo tijera dieléctrica",
    category: "Escaleras",

    reference: "N/A",
    image: "/imgs/productos/escaleras/escalera tipo tijera dielectrica.png",
    description:
      "Escalera tipo tijera dieléctrica para trabajos profesionales.",
  },
  {
    id: 25,
    name: "Escaleras",
    category: "Escaleras",

    reference: "N/A",
    image: "/imgs/productos/escaleras/escaleras.png",
    description:
      "Escaleras para trabajos profesionales en instalaciones eléctricas.",
  },
  {
    id: 26,
    name: "Niveladores para escaleras",
    category: "Escaleras",

    reference: "N/A",
    image: "/imgs/productos/escaleras/niveladores para escaleras.jpg",
    description:
      "Niveladores para mejorar la estabilidad de escaleras durante el trabajo.",
  },

  // =========================================================
  // CUBRIMIENTOS LÍNEA VIVA
  // =========================================================
  {
    id: 27,
    name: "Cobertor aislador de pin clase 2",
    category: "Cubrimientos línea viva",
    reference: "Clase 2",
    image:
      "/imgs/productos/cubrimientos linea viva/cobertor aislador de pin clase 2.png",
    description:
      "El Cobertor Aislador de Pin Clase 2 OJRG está diseñado para proteger los pines de los aisladores tipo carrete y herrajes en líneas eléctricas de media tensión, previniendo contactos accidentales y proporcionando seguridad al personal liniero durante trabajos en redes energizadas. Fabricado en material dieléctrico de alta resistencia, ofrece un excelente aislamiento eléctrico y una durabilidad superior frente a condiciones ambientales exigentes. Su diseño flexible y liviano permite una instalación rápida y segura, adaptándose firmemente al pin para garantizar una cobertura confiable.",
    features: [
      "Referencia: OJRG.",
      "Clase dieléctrica: Clase 2.",
      "Tensión máxima de uso: 17,5 kV.",
      "Tensión de prueba: 20 kV.",
      "Material: Caucho dieléctrico de alta resistencia.",
      "Color: Naranja.",
      "Aislamiento dieléctrico Clase 2 para mayor seguridad.",
      "Protección contra contactos accidentales en trabajos energizados.",
      "Diseño flexible que se adapta firmemente al pin.",
      "Compatible con aisladores tipo carrete (pines o pernos).",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA COBERTOR DE AISLADOR DE PIN CLASE 2.png",
  },
  {
    id: 28,
    name: "Cobertor aislador de suspensión",
    category: "Cubrimientos línea viva",

    reference: "N/A",
    image:
      "/imgs/productos/cubrimientos linea viva/cobertor aislador de suspension.png",
    description:
      "El Cobertor Aislador de Suspensión Convencional OR124 está diseñado para proteger temporalmente los aisladores tipo suspensión convencionales en líneas eléctricas energizadas de media tensión, evitando contactos accidentales y garantizando la seguridad del personal liniero durante trabajos de mantenimiento o reparación. Fabricado en material dieléctrico de alta resistencia, ofrece un excelente aislamiento eléctrico, resistencia mecánica y durabilidad frente a condiciones ambientales exigentes. Su diseño flexible y de fácil instalación se adapta firmemente al aislador, asegurando una cobertura confiable y eficaz.",
    features: [
      "Referencia: OR124.",
      "Clase dieléctrica: Clase 4.",
      "Tensión máxima de uso: 36 kV.",
      "Tensión de prueba: 40 kV.",
      "Material: Caucho dieléctrico de alta resistencia.",
      "Color: Naranja.",
      'Compatible con aisladores de suspensión convencional de 13" - 14".',
      "Aislamiento dieléctrico Clase 4 para mayor seguridad.",
      "Protección contra contactos accidentales en redes energizadas.",
      "Diseño flexible que se adapta al aislador tipo suspensión convencional.",
      "Resistente a impactos, rayos UV, ozono y agentes químicos.",
      "Resistencia a la tracción: mínimo 12 MPa.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA COBERTOR  AISLADOR DE SUSPENCION CONVENCIONAL.png",
  },
  {
    id: 29,
    name: "Cobertor corta circuito",
    category: "Cubrimientos línea viva",
    reference: "N/A",
    image:
      "/imgs/productos/cubrimientos linea viva/cobertor corta circuito .png",
    description:
      "El Cobertor Corta Circuito Clase 2 CC-24 está diseñado para cubrir y proteger temporalmente los cortacircuitos en redes eléctricas de distribución, evitando contactos accidentales y garantizando la seguridad del personal liniero durante trabajos de mantenimiento o reparación. Fabricado en caucho dieléctrico de alta resistencia, ofrece un excelente aislamiento eléctrico, resistencia mecánica y durabilidad frente a condiciones ambientales exigentes. Su diseño flexible y liviano permite una instalación rápida y segura, asegurando una cobertura confiable y eficaz.",
    features: [
      "Referencia: CC-24.",
      "Clase dieléctrica: Clase 2.",
      "Tensión máxima de uso: 17,5 kV.",
      "Tensión de prueba: 20 kV.",
      "Material: Caucho dieléctrico de alta resistencia.",
      "Color: Naranja.",
      "Protección temporal de cortacircuitos en redes eléctricas.",
      "Compatible con cortacircuitos clase 15 kV.",
      "Aislamiento dieléctrico Clase 2 para mayor seguridad.",
      "Protección contra contactos accidentales en trabajos energizados.",
      "Resistente a impactos, rayos UV, ozono y agentes químicos.",
      "Diseño flexible que se adapta al equipo a cubrir.",
      "Liviano para facilitar el transporte y la manipulación.",
      "Instalación rápida y segura.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA COBERTOR CORTA CIRCUITO CLASE 2.png",
  },
  {
    id: 30,
    name: "Cobertor para cruceta clase 2",
    category: "Cubrimientos línea viva",
    reference: "Clase 2",
    image:
      "/imgs/productos/cubrimientos linea viva/cobertor para cruceta clase 2.png",
    description:
      "El Cobertor para Cruceta Clase 2 145 está diseñado para ser instalado en crucetas de madera o fibra de vidrio en redes eléctricas de distribución y transmisión, brindando aislamiento y protección temporal al personal liniero. Fabricado en caucho dieléctrico de alta resistencia, ofrece un excelente aislamiento eléctrico, resistencia mecánica y durabilidad frente a condiciones ambientales exigentes. Su diseño escalonado permite cubrir la superficie superior de la cruceta, evitando contactos accidentales y mejorando la seguridad en trabajos de mantenimiento o reparación.",
    features: [
      "Referencia: 145.",
      "Clase dieléctrica: Clase 2.",
      "Tensión máxima de uso: 17 kV.",
      "Tensión de prueba: 20 kV.",
      "Material: Caucho dieléctrico de alta resistencia.",
      "Color: Naranja.",
      "Compatible con crucetas de madera o fibra de vidrio.",
      "Diseño escalonado que se adapta a la forma de la cruceta.",
      'Dimensiones (Largo × Ancho × Alto): 22,5" × 6,5" × 7,5" (571 × 165 × 191 mm).',
      'Ancho interior: 5,5" (140 mm).',
      "Aislamiento dieléctrico Clase 2 para mayor seguridad.",
      "Protección contra contactos accidentales en trabajos energizados.",
      "Resistente a impactos, rayos UV, ozono y agentes químicos.",
      "Resistencia a la tracción: mínimo 12 MPa.",
      "Temperatura de operación: -40 °C a +80 °C.",
      "Excelente resistencia a la intemperie.",
      "Liviano para facilitar el transporte y la manipulación.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA COBERTOR PARA CRUCETA CLASE 2.png",
  },
  {
    id: 31,
    name: "Cobertor para cruceta clase 4",
    category: "Cubrimientos línea viva",
    reference: "Clase 4",
    image:
      "/imgs/productos/cubrimientos linea viva/cobertor para cruceta clase 4.png",
    description:
      "El Cobertor para Cruceta Clase 4 1186 está diseñado para ser instalado en crucetas de madera o fibra de vidrio en redes eléctricas de distribución y transmisión, proporcionando aislamiento y protección temporal al personal liniero. Fabricado en caucho dieléctrico de alta resistencia, ofrece un excelente aislamiento eléctrico, resistencia mecánica y durabilidad frente a condiciones ambientales exigentes. Su diseño escalonado permite cubrir la superficie superior de la cruceta, evitando contactos accidentales y mejorando la seguridad en trabajos de mantenimiento o reparación.",

    features: [
      "Referencia: 1186.",
      "Clase dieléctrica: Clase 4.",
      "Tensión máxima de uso: 36 kV.",
      "Tensión de prueba: 40 kV.",
      "Material: Caucho dieléctrico de alta resistencia.",
      "Color: Naranja.",
      "Compatible con crucetas de madera o fibra de vidrio.",
      "Aislamiento dieléctrico Clase 4 para mayor seguridad.",
      "Protección contra contactos accidentales en trabajos energizados.",
      "Diseño escalonado que se adapta a la forma de la cruceta.",
      "Resistente a impactos, rayos UV, ozono y agentes químicos.",
      "Resistencia a la tracción: mínimo 12 MPa.",
      "Temperatura de operación: -40 °C a +80 °C.",
      "Excelente resistencia a la intemperie.",
      "Liviano para facilitar el transporte y la manipulación.",
      "Instalación rápida y segura.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA COBERTOR PARA CRUCETA CLASE 4.png",
  },
  {
    id: 32,
    name: "Cono de señalización",
    category: "Cubrimientos línea viva",
    reference: "N/A",
    image: "/imgs/productos/cubrimientos linea viva/cono de señalizacion.png",
    description:
      'El Cono Dieléctrico de 90 cm (36") referencia CD-90 está fabricado en PVC de alta calidad, flexible y resistente, diseñado para delimitar y señalizar áreas de trabajo o peligro en instalaciones eléctricas y entornos industriales. Su composición dieléctrica evita la conducción de electricidad, brindando seguridad al personal y a los equipos.',
    features: [
      "Referencia: CD-90.",
      'Altura: 90 cm (36").',
      "Material: PVC flexible de alta resistencia.",
      "Color: Naranja con bandas blancas reflectivas.",
      "Ancho de la base: aprox. 38 × 38 cm.",
      "Peso aproximado: 2,3 kg.",
      "Características dieléctricas: No conduce electricidad.",
      "Resistencia a la tensión: Aislamiento dieléctrico hasta 36 kV, según norma ASTM D495.",
      "Alta resistencia a impactos y deformación.",
      "Resistencia UV: Alta.",
      "Resistente a cambios climáticos y productos químicos.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/cono de señalizacion.jpeg",
  },
  {
    id: 33,
    name: "Cubridor de estribos clase 4",
    category: "Cubrimientos línea viva",
    reference: "Clase 4",
    image:
      "/imgs/productos/cubrimientos linea viva/cubridor de estribos clase 4.png",
    description:
      "El Cubridor de Estribos Clase 4 USC está diseñado para la protección temporal de estribos y herrajes en postes de madera o concreto durante trabajos en redes eléctricas energizadas. Fabricado en material dieléctrico de alta resistencia, proporciona un excelente aislamiento eléctrico y protección contra contactos accidentales, ayudando a garantizar la seguridad del personal liniero. Su diseño resistente y liviano permite una instalación rápida y segura, adaptándose a diferentes tipos de estribos y herrajes utilizados en sistemas de distribución de media y baja tensión.",
    features: [
      "Referencia: USC.",
      "Clase dieléctrica: Clase 4.",
      "Tensión máxima de uso: 36 kV.",
      "Tensión de prueba: 40 kV.",
      "Material: Polietileno dieléctrico de alta resistencia.",
      "Color: Naranja.",
      "Protección temporal de estribos y herrajes en postes.",
      'Compatible con estribos y pernos de hasta 5".',
      "Aislamiento dieléctrico Clase 4 para mayor seguridad.",
      "Protección contra contactos accidentales con partes metálicas.",
      "Resistente a impactos, rayos UV y agentes químicos.",
      "Diseño práctico que permite una instalación rápida y segura.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA CUBRIDOR DE ESTRIBOS CLASE 4.png",
  },
  {
    id: 34,
    name: "Cubridor de punta poste clase 3",
    category: "Cubrimientos línea viva",
    reference: "Clase 3",
    image:
      "/imgs/productos/cubrimientos linea viva/cubridor de punta poste clase 3.png",
    description:
      "El Cubridor de Punta de Poste Clase 3 está diseñado para proteger temporalmente la parte superior de postes de madera o concreto durante trabajos con redes eléctricas de media y baja tensión. Fabricado en polietileno dieléctrico de alto impacto, ofrece excelente aislamiento eléctrico y resistencia mecánica, cubriendo de forma segura la punta del poste y evitando contactos accidentales con conductores, herrajes o equipos energizados. Cuenta con un sistema de sujeción mediante cuerdas de alta resistencia que permite una instalación firme, rápida y confiable en diferentes condiciones de trabajo.",
    features: [
      "Referencia: RC406-0097.",
      "Clase dieléctrica: Clase 3.",
      "Tensión máxima de uso: 26,5 kV.",
      "Tensión de prueba: 30 kV.",
      "Material: Polietileno dieléctrico de alto impacto.",
      "Color: Naranja.",
      'Dimensiones: 430 × 350 × 230 mm (16,9 × 13,8 × 9,1").',
      "Peso aproximado: 2,20 kg.",
      "Temperatura de operación: -40 °C a +60 °C.",
      "Resistencia a la tracción: Mínimo 18 MPa.",
      "Diseño envolvente con parte superior plana para mayor cobertura.",
      "Protección dieléctrica Clase 3 para trabajos eléctricos.",
      "Alta resistencia mecánica y dieléctrica.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA CUBRIDOR DE PUNTA POSTE CLASE 3.png",
  },
  {
    id: 35,
    name: "Jumper",
    category: "Cubrimientos línea viva",
    reference: "N/A",
    image: "/imgs/productos/cubrimientos linea viva/jumper.png",
    description:
      "El Jumper Aislado de 35 kV, con una sección de conductor de 2/0 AWG y una longitud de 3 metros, está diseñado para realizar conexiones temporales seguras y confiables en sistemas eléctricos de alta tensión. Fabricado con conductor de cobre extra flexible 100% y aislamiento dieléctrico de alta resistencia, proporciona excelente conductividad eléctrica y protección frente a las condiciones exigentes de trabajo en redes y sistemas de potencia. Su diseño permite una conexión eficiente en aplicaciones de mantenimiento, pruebas, transformadores y subestaciones eléctricas, ofreciendo un alto nivel de aislamiento y confiabilidad.",
    features: [
      "Tensión máxima de operación: 35 kV.",
      "Sección del conductor: 2/0 AWG.",
      "Longitud: 3 metros.",
      "Material del conductor: Cobre extra flexible 100%.",
      "Material de aislamiento: EPR de alta resistencia.",
      "Color: Naranja.",
      "Frecuencia: 50 / 60 Hz.",
      "Temperatura de operación: -40 °C a +90 °C.",
      "Resistencia a la tensión: ≥ 105 kV.",
      "Aplicación: Conexión temporal en sistemas de alta tensión.",
      "Uso: Interior y exterior.",
      "Jumper aislado para trabajos a contacto.",
      "Alta capacidad de aislamiento hasta 35 kV.",
      "Conductor de cobre extra flexible para facilitar la manipulación.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/JUMPER AISLADO.jpeg",
  },
  {
    id: 36,
    name: "Manta dieléctrica abierta clase 2",
    category: "Cubrimientos línea viva",
    reference: "Clase 2",
    image:
      "/imgs/productos/cubrimientos linea viva/manta dielectrica  abierta clase 2.png",
    description:
      "La Manta Dieléctrica Abierta Clase 2 NOVAX está diseñada para proteger al personal contra contactos accidentales con partes eléctricas energizadas. Fabricada en caucho dieléctrico de alta calidad, ofrece excelente resistencia eléctrica, mecánica y al ozono. Su diseño abierto permite una instalación rápida y práctica sobre conductores, barras y equipos eléctricos, proporcionando protección y confiabilidad durante trabajos de mantenimiento e intervención en instalaciones energizadas.",
    features: [
      "Marca: NOVAX.",
      "Referencia: JGW-T-RIB/01.",
      "Diseño: Abierta.",
      "Clase dieléctrica: Clase 2.",
      "Número de ojales: 18.",
      'Dimensiones: 0,91 m × 0,91 m (36" × 36").',
      "Material: Caucho dieléctrico.",
      "Color: Naranja.",
      "Tensión máxima de utilización CA/CC: 36.000 V / 54.000 V.",
      "Tensión máxima de prueba CA/CC: 40.000 V / 70.000 V.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA MANTA ABIERTA DIELECTRICA CLASE 2 NOVAX.png",
  },
  {
    id: 37,
    name: "Manta dieléctrica cerrada clase 2",
    category: "Cubrimientos línea viva",
    reference: "Clase 2",
    image:
      "/imgs/productos/cubrimientos linea viva/manta dielectrica cerrada clase 2.png",
    description:
      "La Manta Dieléctrica Cerrada Clase 2 NOVAX está diseñada para brindar protección al personal contra contactos accidentales con partes eléctricas energizadas. Fabricada en caucho dieléctrico de alta calidad, ofrece excelente resistencia eléctrica, mecánica y al ozono. Su diseño cerrado proporciona una cobertura completa y segura sobre tableros, equipos y celdas eléctricas, ayudando a reducir el riesgo de contactos accidentales durante trabajos de mantenimiento, instalación y operación en sistemas eléctricos. Es una solución flexible, resistente y confiable para aplicaciones de protección eléctrica en instalaciones de media tensión.",
    features: [
      "Marca: NOVAX.",
      "Referencia: JGW-T-RIB/02.",
      "Tipo: Manta dieléctrica cerrada.",
      "Clase dieléctrica: Clase 2.",
      "Diseño: Cerrado.",
      "Número de ojales: 6.",
      'Dimensiones: 0,91 m × 0,91 m (36" × 36").',
      "Material: Caucho dieléctrico.",
      "Color: Naranja.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA MANTA CERRADA DIELECTRICA CLASE 2 NOVAX.png",
  },
  {
    id: 38,
    name: "Pinza dieléctrica",
    category: "Cubrimientos línea viva",
    reference: "N/A",
    image: "/imgs/productos/cubrimientos linea viva/pinza dielectrica.png",
    description:
      "La Pinza para Mantas Dieléctricas HS21 está diseñada para instalar y retirar mantas aislantes en conductores y equipos energizados de forma segura, rápida y eficiente. Fabricada en material dieléctrico reforzado, ofrece un excelente aislamiento eléctrico y gran durabilidad en condiciones de trabajo exigentes. Sus mordazas, recubiertas con almohadillas antideslizantes, permiten una sujeción firme de la manta y ayudan a evitar su deslizamiento sin causar daños al material aislante. Su diseño ligero y ergonómico facilita la manipulación, siendo adecuada para trabajos en redes eléctricas de media y baja tensión, subestaciones y equipos de distribución.",
    features: [
      "Referencia: HS21.",
      "Material: Material dieléctrico reforzado.",
      "Color: Amarillo.",
      'Longitud total: 330 mm (13").',
      'Apertura máxima de mordaza: 140 mm (5,5").',
      "Aislamiento dieléctrico: 25 kV.",
      "Temperatura de operación: -40 °C a +80 °C.",
      "Mordazas: Recubiertas con almohadillas antideslizantes.",
      "Resorte de apertura: Acero inoxidable.",
      "Anillos de liberación: Acero.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA PINZA PARA MANTAS DIELECTRICAS.jpeg",
  },
  {
    id: 39,
    name: "Protector de cadena rígido clase 4",
    category: "Cubrimientos línea viva",
    reference: "Clase 4",
    image:
      "/imgs/productos/cubrimientos linea viva/PROTECTOR DE CADENA RIGIDO CLASE 4.png",
    description:
      "El Protector de Cadena Rígido Clase 4 RM4948 está diseñado para cubrir y proteger las cadenas de suspensión de equipos y estructuras en redes eléctricas de distribución y transmisión, evitando contactos accidentales y proporcionando aislamiento temporal al personal liniero durante trabajos de mantenimiento o reparación. Fabricado en termoplástico rígido de alta resistencia, ofrece excelente aislamiento eléctrico, resistencia mecánica y durabilidad frente a condiciones ambientales exigentes. Su diseño rígido permite mantener la forma y brindar una cobertura confiable. Cuenta con herrajes de sujeción integrados, facilitando una instalación rápida y segura sobre cadenas de suspensión.",
    features: [
      "Referencia: RM4948.",
      "Clase dieléctrica: Clase 4.",
      "Tensión máxima de uso: 36 kV.",
      "Tensión de prueba: 40 kV AC por 1 minuto.",
      "Material: Termoplástico rígido de alta resistencia.",
      "Color: Amarillo.",
      "Aplicación: Protección temporal de cadenas de suspensión.",
      'Longitud interna útil: 489 mm (19,25").',
      'Diámetro interno: 114 mm (4,50").',
      "Espesor nominal: Mínimo 4,8 mm.",
      "Temperatura de operación: -40 °C a +80 °C.",
      "Resistencia a la tracción: Mínimo 12 MPa.",
      "Resistencia al impacto: Alta.",
      "Resistencia a la intemperie: Excelente.",
      "Peso aproximado: 1,35 kg.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA PROTECTOR DE CADENA RIGIDO CLASE 4.png",
  },
  {
    id: 40,
    name: "Protector de poste clase 4",
    category: "Cubrimientos línea viva",
    reference: "Clase 4",
    image:
      "/imgs/productos/cubrimientos linea viva/protector de poste clase 4.png",
    description:
      "El Protector de Poste Clase 4 RM4937-6 está diseñado para cubrir y proteger temporalmente postes de madera o concreto durante trabajos en redes eléctricas de media y baja tensión. Fabricado en polietileno dieléctrico de alta resistencia, proporciona aislamiento y protección contra contactos accidentales, aumentando la seguridad del personal durante maniobras, instalaciones y labores de mantenimiento. Su diseño semirrígido, liviano y de superficie lisa permite una instalación rápida y segura alrededor del poste. Incluye una cuerda de sujeción que facilita su ajuste y mantiene el protector firmemente instalado durante el trabajo.",
    features: [
      "Referencia: RM4937-6.",
      "Clase dieléctrica: Clase 4.",
      "Tensión máxima de uso: 36 kV.",
      "Tensión de prueba: 40 kV.",
      "Material: Polietileno dieléctrico de alta resistencia.",
      "Color: Naranja de alta visibilidad.",
      'Longitud: 1.200 mm (47,2").',
      'Diámetro interno: 175 mm (6,9").',
      'Espesor de pared: 4,5 mm (0,18").',
      "Peso aproximado: 1,60 kg.",
      "Temperatura de operación: -40 °C a +60 °C.",
      "Resistencia a la tracción: Mínimo 18 MPa.",
      "Diseño: Semirrígido y adaptable al poste.",
      "Superficie lisa: Facilita la limpieza y evita la acumulación de suciedad.",
      "Instalación rápida: No requiere herramientas para su instalación.",
      "Sujeción: Incluye cuerda de alta resistencia.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA PROTECTOR DE POSTE CLASE 4.png",
  },
  {
    id: 41,
    name: "Tapete dieléctrico",
    category: "Cubrimientos línea viva",
    reference: "N/A",
    image: "/imgs/productos/cubrimientos linea viva/tapete dielectrico.png",
    description:
      "El Tapete Dieléctrico Clase 0, 2 y 4 está diseñado para proporcionar aislamiento eléctrico y protección al personal que trabaja en zonas con riesgo de contacto con equipos o componentes energizados. Fabricado en materiales dieléctricos de alta calidad, actúa como una barrera protectora entre el operador y la fuente eléctrica, ayudando a reducir el riesgo de descargas. Su superficie antideslizante proporciona mayor estabilidad y seguridad durante el trabajo, siendo adecuado para subestaciones, tableros eléctricos, áreas industriales y otros espacios donde se requiera aislamiento eléctrico.",
    features: [
      "Tipo: Tapete dieléctrico.",
      "Material: Elastómeros (caucho natural + polímeros).",
      "Superficie: Antideslizante.",
      "Clases disponibles: Clase 0, Clase 2 y Clase 4.",
      "Clase 0: Espesor 2,0 mm; voltaje máximo de trabajo 1,0 kV.",
      "Clase 2: Espesor 3,0 mm; voltaje máximo de trabajo 17,0 kV.",
      "Clase 4: Espesor 4,0 mm; voltaje máximo de trabajo 36,0 kV.",
      "Resistencia mecánica al punzado: Mínimo 70 N.",
      "Resistencia al deslizamiento: Mínimo 50 N.",
      "Temperatura de trabajo: -25 °C a 55 °C.",
      "Propiedades: Retardante a la llama (no se incendia).",
      "Resistencia química: A ácidos y aceites.",
      "Aplicación: Aislamiento y protección en zonas energizadas.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/cubrimientos linea viva/FICHA TECNICA TAPETE DIELECTRICO CLASE.jpeg",
  },

  // =========================================================
  // MATERIAL ELÉCTRICO
  // =========================================================
  {
    id: 42,
    name: "Barra dieléctrica",
    category: "Material eléctrico",
    reference: "N/A",
    image: "/imgs/productos/material electrico/barra dielectrica.png",
    description:
      "La Barra Dieléctrica de 1,50 a 2,20 metros es una herramienta diseñada para brindar seguridad en trabajos realizados en entornos con riesgo eléctrico. Fabricada con materiales de alta resistencia y aislamiento dieléctrico, proporciona protección al operador al trabajar en proximidad de líneas y equipos energizados. Su longitud ajustable permite adaptarla a diferentes situaciones y aplicaciones, ofreciendo versatilidad y facilidad de manipulación. Incorpora un escoplo de 102 mm y una punta reforzada, siendo adecuada para labores de excavación, remoción de tierra y apertura de zanjas en trabajos eléctricos y de telecomunicaciones.",
    features: [
      "Tipo: Barra dieléctrica.",
      "Material del cuerpo: Acero medio carbono recubierto en fibra de vidrio.",
      "Longitud ajustable: 1,50 m – 2,20 m.",
      'Diámetro: 1 pulgada (1").',
      "Escoplo: 102 mm.",
      "Peso aproximado: 7 kg (16 lb).",
      "Aislamiento dieléctrico: Alta rigidez dieléctrica.",
      "Color: Amarillo (fibra de vidrio).",
      "Resistencia dieléctrica: Alta, como aislante eléctrico.",
      "Punta: Reforzada.",
      "No conduce electricidad.",
      "Diseño ligero y fácil de manipular.",
      "Aplicación: Excavación, remoción de tierra y apertura de zanjas.",
      "Uso: Trabajos en proximidad de líneas eléctricas.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA BARRA DIELECTRIA DIELECTRICO.png",
  },
  {
    id: 44,
    name: "Cizalla aislada",
    category: "Material eléctrico",
    reference: "N/A",
    image: "/imgs/productos/material electrico/cizalla aislada.png",
    description:
      "La Cizalla Dieléctrica Manual es una herramienta diseñada para realizar cortes limpios y precisos de cables de cobre y aluminio. Sus mangos fabricados en fibra de vidrio con aislamiento dieléctrico proporcionan protección al operador durante trabajos con riesgo eléctrico de hasta 1000 V. Su diseño robusto y liviano incorpora un sistema de articulación tipo palanca que proporciona un excelente apalancamiento, permitiendo realizar cortes con menor esfuerzo y reduciendo la fatiga durante jornadas de trabajo prolongadas.",
    features: [
      "Tipo: Cizalla dieléctrica manual.",
      "Material de los mangos: Fibra de vidrio con aislamiento dieléctrico.",
      "Material de las cuchillas: Acero de alta resistencia.",
      "Capacidad de corte en cobre: Hasta 20 mm de diámetro.",
      "Capacidad de corte en aluminio: Hasta 20 mm de diámetro.",
      "Longitud total: 600 mm (24 pulgadas).",
      "Peso aproximado: 2,6 kg.",
      "Tensión de trabajo: Hasta 1000 V.",
      "Aislamiento: Dieléctrico.",
      "Aplicación: Corte de cables de cobre y aluminio.",
      "Sistema de articulación: Tipo palanca para mayor apalancamiento y menor esfuerzo.",
      "Cuchillas de alta resistencia: Ofrecen durabilidad y precisión de corte.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA CIZALLA AISLADA.png",
  },
  {
    id: 45,
    name: "Cizalla pico de loro aislada",
    category: "Material eléctrico",
    reference: "N/A",
    image:
      "/imgs/productos/material electrico/cizalla pico de loro aislada.png",
    description:
      "La Cizalla Pico de Loro Aislada es una herramienta manual diseñada para el corte de cables de cobre y aluminio en instalaciones eléctricas de alta tensión. Cuenta con cuchillas de acero de alta dureza que permiten realizar cortes limpios y eficientes, reduciendo la deformación del conductor. Sus mangos incorporan aislamiento dieléctrico de alta tensión, proporcionando protección al operador durante trabajos eléctricos de riesgo. Su diseño tipo pico de loro ofrece una elevada capacidad de corte, mientras que su construcción ligera y resistente facilita el uso profesional.",
    features: [
      "Tipo: Cizalla tipo pico de loro aislada.",
      "Aislamiento dieléctrico: 100 kV por pie de longitud de mango (100.000 V/pie).",
      "Material de las cuchillas: Acero de alta dureza.",
      "Material de los mangos: Recubrimiento aislante dieléctrico.",
      "Capacidad de corte: Hasta 50 mm de diámetro en cobre.",
      "Capacidad de corte: Hasta 40 mm de diámetro en aluminio.",
      "Diseño: Tipo pico de loro para mayor capacidad de corte.",
      "Cuchillas: Resistentes y diseñadas para cortes limpios.",
      "Acabado: Pavonado anticorrosivo.",
      "Uso: Profesional.",
      "Aplicación: Corte de cables de cobre y aluminio en instalaciones eléctricas.",
      "Diseño ergonómico: Facilita la manipulación durante el trabajo.",
      "Construcción: Ligera y resistente para uso profesional.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA CIZALLA PICO DE LORO AISLADA.png",
  },
  {
    id: 46,
    name: "Cortador de cable aislado",
    category: "Material eléctrico",
    reference: "N/A",
    image: "/imgs/productos/material electrico/cortador de cable aislado.png",
    description:
      "El Cortador de Cable Aislado a 1000 V Tool Mex, referencia TC-1000V, es una herramienta diseñada para realizar cortes eficientes y precisos en cables de cobre y aluminio. Su construcción en acero al carbono de alta calidad proporciona resistencia y durabilidad para trabajos profesionales. Cuenta con cuchilla tipo carraca (ratchet), que facilita el corte con menor esfuerzo, y mangos con recubrimiento aislante, antideslizante y ergonómico para brindar mayor seguridad y comodidad durante la operación. Además, incorpora un mecanismo de bloqueo de seguridad para facilitar su almacenamiento y transporte.",
    features: [
      "Marca: Tool Mex.",
      "Referencia: TC-1000V.",
      "Tipo: Cortador de cable aislado.",
      "Tensión máxima de trabajo: 1000 V.",
      "Material del cuerpo: Acero al carbono de alta calidad.",
      "Material de los mangos: PVC aislante.",
      "Tipo de corte: Cuchilla de carraca (ratchet).",
      "Capacidad de corte: Hasta 300 mm² aproximadamente.",
      "Diámetro máximo de cable: 35 mm aproximadamente.",
      'Longitud total: 240 mm (9,5") aproximadamente.',
      "Peso aproximado: 690 g.",
      "Color de los mangos: Rojo.",
      "Mecanismo de bloqueo: Sí, con bloqueo de seguridad.",
      "Mangos: Recubrimiento aislante, antideslizante y ergonómico.",
      "Diseño: Robusto y liviano para uso profesional.",
      "Aplicación: Corte de cables de cobre y aluminio.",
      "Aislamiento: Herramienta dieléctrica probada a 1000 V.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA CORTADOR DE CABLE AISALDO A 1000V.png",
  },
  {
    id: 47,
    name: "Cubridor de cañuela",
    category: "Material eléctrico",
    reference: "N/A",
    image: "/imgs/productos/material electrico/cubridor de cañuela.png",
    description:
      "El Cubridor de Cañuela “NO OPERAR” es un elemento de seguridad dieléctrico diseñado para cubrir y señalizar cañuelas o interruptores eléctricos que se encuentran desenergizados, con el propósito de prevenir manipulaciones accidentales y advertir al personal que el equipo no debe ser operado. Fabricado en plástico dieléctrico de alta resistencia, ofrece aislamiento eléctrico, resistencia mecánica y durabilidad frente a impactos y condiciones climáticas. Su diseño permite una colocación rápida y sencilla sobre la cañuela o interruptor, siendo adecuado para trabajos de mantenimiento y equipos fuera de servicio.",
    features: [
      "Nombre: Cubridor de cañuela “NO OPERAR”.",
      "Función: Cubrir y señalizar cañuelas o interruptores desenergizados.",
      "Material: Plástico dieléctrico de alta resistencia.",
      "Color: Amarillo de alta visibilidad.",
      "Leyenda: “NO OPERAR”.",
      "Símbolo: Riesgo eléctrico.",
      "Uso: Interior y exterior.",
      "Aislamiento: Dieléctrico.",
      "Alta resistencia mecánica.",
      "Resistente a impactos y condiciones climáticas.",
      "Diseño liviano y de fácil instalación.",
      "Diseño abierto: Permite una colocación rápida sobre la cañuela o interruptor.",
      "Señalización visible: Facilita la identificación del equipo que no debe ser operado.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA CUBRIDOR DE CAÑUELA.png",
  },
  {
    id: 48,
    name: "Desviador de vuelo",
    category: "Material eléctrico",
    reference: "N/A",
    image: "/imgs/productos/material electrico/desviador de vuelo.png",
    description:
      "Los Desviadores de Vuelo son dispositivos diseñados para instalarse en los cables de guarda de líneas eléctricas aéreas, con el propósito de aumentar su visibilidad y reducir el riesgo de colisión de aves. Su diseño helicoidal permite una sujeción firme y segura al cable, sin comprometer la integridad de la instalación. Fabricados en PVC/Polipropileno, son livianos, resistentes a la intemperie y cuentan con alta protección frente a los rayos UV. Su color amarillo de alta visibilidad facilita la identificación de los cables por parte de las aves, contribuyendo a la protección de la fauna silvestre y a la seguridad de las líneas eléctricas.",
    features: [
      "Color: Amarillo de alta visibilidad.",
      "Material: PVC / Polipropileno.",
      "Diámetro: 30 cm.",
      "Longitud: 100 cm.",
      "Diseño helicoidal que se adapta al cable de forma segura.",
      "Alta resistencia a la intemperie.",
      "Alta protección contra rayos UV.",
      "Material no conductor, que no genera corrosión en el cable.",
      "Dos secciones delgadas y alargadas que facilitan la adhesión al cable de guarda.",
      "Sección central de mayor diámetro para proporcionar mayor visibilidad a las aves.",
      "Instalación rápida, sin necesidad de herramientas especiales.",
      "Liviano y durable, adecuado para instalaciones en exteriores.",
      "Temperatura de operación: -40 °C a 80 °C.",
      "Aplicación: Cables de guarda en líneas aéreas de baja, media y alta tensión.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA DESVIADORES DE VUELO.png",
  },
  {
    id: 49,
    name: "Diferencial aislada",
    category: "Material eléctrico",
    reference: "N/A",
    image: "/imgs/productos/material electrico/diferencial aislada.png",
    description:
      "La Garrucha Aislada WS1500 está diseñada para realizar el tendido y tensionado de conductores en redes eléctricas de media y baja tensión, proporcionando seguridad y eficiencia durante las labores de izaje. Cuenta con un brazo aislante y una banda de cuero tratada que protegen el conductor y ayudan a minimizar el riesgo de descargas eléctricas. Su sistema de doble gancho con cierre de seguridad garantiza una sujeción firme y confiable, mientras que la polea de aluminio de alta resistencia permite un desplazamiento eficiente del conductor. Su diseño robusto y liviano facilita la manipulación en trabajos de campo, mantenimiento y construcción de líneas eléctricas.",
    features: [
      "Referencia: WS1500.",
      "Carga máxima de trabajo: 1.500 kg (3.300 lb).",
      "Carga mínima de rotura: 7.500 kg (16.500 lb).",
      'Diámetro de la polea: Ø 110 mm (4,3").',
      "Polea de aluminio de alta resistencia y bajo peso.",
      "Brazo aislante de fibra de vidrio con núcleo de espuma.",
      'Longitud del brazo aislante: 610 mm (24").',
      "Aislamiento dieléctrico: 25 kV.",
      "Banda de cuero tratada de alta resistencia para protección del conductor.",
      "Doble gancho con cierre de seguridad para una sujeción firme.",
      "Diseño robusto para trabajos exigentes en campo.",
      "Liviana y balanceada para facilitar la manipulación.",
      "Resistente a la intemperie, rayos UV y agentes químicos.",
      "Ideal para tendido y tensionado de conductores.",
      "Aplicable en redes eléctricas de media y baja tensión.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA GARRUCHA AISLADA.jpeg",
  },
  {
    id: 50,
    name: "Gancho colgador dieléctrico",
    category: "Material eléctrico",
    reference: "N/A",
    image: "/imgs/productos/material electrico/gancho colgador dielectrico.jpg",
    description:
      "El Gancho Colgador Dieléctrico es una herramienta aislante diseñada para colgar y manipular equipos, poleas, líneas, cables y elementos de izaje en estructuras de redes eléctricas aéreas. Su tubo aislante de fibra de vidrio con resina epóxica proporciona protección al operario frente a contactos accidentales con partes energizadas. Su construcción robusta y liviana, junto con el gancho de acero ajustable con seguro, permite adaptarse a diferentes puntos de sujeción y realizar labores de construcción, mantenimiento y reparación de redes eléctricas de forma segura y eficiente.",
    features: [
      "Aislamiento dieléctrico certificado: hasta 35 kV en servicio.",
      "Voltaje máximo de soporte: 34,5 kV en seco.",
      'Longitud total: 45 cm (17,7").',
      "Tubo aislante: fibra de vidrio con resina epóxica.",
      'Diámetro del tubo: 32 mm (1,25").',
      "Gancho: acero forjado y galvanizado.",
      "Apertura ajustable del gancho: 0–57 mm.",
      "Gancho con sistema de seguro para una sujeción confiable.",
      "Extremo inferior con perno transversal de acero para acople de accesorios.",
      "Construcción robusta y liviana.",
      "Color del tubo: rojo.",
      "Peso aproximado: 1,1 kg.",
      "Diseñado para trabajos en redes eléctricas aéreas y subestaciones.",
      "Permite el colgado de poleas, líneas, cables y equipos de izaje.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA GANCHO DIELECTRICO.png",
  },
  {
    id: 51,
    name: "Gancho espiral dieléctrico",
    category: "Material eléctrico",
    reference: "N/A",
    image: "/imgs/productos/material electrico/gancho espiral dielectrico.png",
    description:
      "El Gancho Espiral es una herramienta diseñada para aislar conductores energizados de dispositivos de tracción o equipos, evitando diferencias de potencial durante trabajos en redes eléctricas aéreas. Está compuesto por un bastón aislado en fibra de vidrio, un gancho espiral de acero de alta resistencia y un anillo giratorio que facilita el movimiento y evita torsiones durante la operación. Su sistema de conexión permite acoplar equipos de tracción como garruchas, malacates y tifor, ofreciendo una solución segura y confiable para el tensionamiento de conductores.",
    features: [
      "Modelo: LSG-BTS04.",
      "Longitud total: 2 ft (60 cm).",
      "Bastón aislado fabricado en fibra de vidrio.",
      "Gancho espiral fabricado en acero de alta resistencia.",
      "Apertura del gancho: hasta 50 mm.",
      "Anillo giratorio para evitar torsiones durante la operación.",
      "Carga de trabajo segura (WLL): 2.000 kgf (2 toneladas).",
      "Carga mínima de ruptura (MBL): 5.000 kgf (5 toneladas).",
      "Sistema de conexión universal para equipos de tracción.",
      "Diseño orientado a proporcionar aislamiento eléctrico y seguridad al operario.",
      "Resistente a esfuerzos de tracción durante el tensionamiento de conductores.",
      "Herramienta manual, liviana y de alta resistencia.",
      "Ideal para redes de distribución y transmisión.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA GANCHO ESPIRAL.png",
  },
  {
    id: 52,
    name: "Pisón 2.20 m",
    category: "Material eléctrico",
    reference: "2.20 m",
    image: "/imgs/productos/material electrico/pison 2.20m.png",
    description:
      "El Pisón Manual de 2,20 metros es una herramienta especializada para la compactación manual de tierra en zanjas, canalizaciones y excavaciones con conducciones enterradas. Su longitud permite trabajar en espacios reducidos y alcanzar zonas profundas donde no es posible utilizar maquinaria pesada. Fabricado con tubo de acero al carbono de alta resistencia y una base compactadora de acero macizo, ofrece una transmisión uniforme de la fuerza durante la compactación. Su diseño robusto, acabado industrial y construcción resistente proporcionan durabilidad y un buen desempeño en obras civiles, instalaciones eléctricas y redes de servicios.",
    features: [
      "Longitud total: 2,20 m.",
      "Material del tubo: Acero al carbono.",
      'Diámetro del tubo: 1".',
      'Espesor del tubo: 1/4".',
      "Material de la base: Acero macizo.",
      "Diámetro de la mogolla: 8 cm.",
      'Altura de la mogolla: 1½".',
      "Soldadura: Técnica MIC.",
      "Acabado: Pintura industrial negra.",
      "Diseño robusto para trabajos de compactación manual.",
      "Permite una compactación eficiente en zanjas profundas.",
      "Facilita la manipulación en espacios reducidos.",
      "Alta resistencia al impacto y al uso continuo.",
      "Base compactadora tipo mogolla para transmitir la fuerza de manera uniforme.",
      "Ideal para zanjas y canalizaciones eléctricas.",
      "Aplicable en obras civiles e instalaciones industriales.",
    ],
    technicalSheet:
      "/imgs/fichas-tecnicas/material electrico/FICHA TECNICA PISON 2.20 METROS.png",
  },

  // =========================================================
  // HERRAMIENTA ESPECIALIZADA
  // =========================================================
  {
    id: 53,
    name: "Ampact",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/ampact.png",
    description:
      "Herramienta especializada para aplicaciones en sistemas eléctricos.",
  },
  {
    id: 54,
    name: "Antenalla 1656-20",
    category: "Herramienta especializada",

    reference: "1656-20",
    image: "/imgs/productos/herramienta especializada/antenalla 1656-20.png",
    description: "Antenalla para sujeción y trabajos especializados.",
  },
  {
    id: 55,
    name: "Antenalla 1656-30",
    category: "Herramienta especializada",

    reference: "1656-30",
    image: "/imgs/productos/herramienta especializada/antenalla 1656-30.png",
    description: "Antenalla para sujeción y trabajos especializados.",
  },
  {
    id: 56,
    name: "Antenalla 1656-40",
    category: "Herramienta especializada",

    reference: "1656-40",
    image: "/imgs/productos/herramienta especializada/antenalla 1656-40.png",
    description: "Antenalla para sujeción y trabajos especializados.",
  },
  {
    id: 57,
    name: "Antenalla Haven 1 Ton",
    category: "Herramienta especializada",

    reference: "1 Ton",
    image:
      "/imgs/productos/herramienta especializada/antenalla Haven 1ton - copia (2).jpg",
    description: "Antenalla Haven con capacidad de una tonelada.",
  },
  {
    id: 58,
    name: "Antenalla Haven 2 Ton",
    category: "Herramienta especializada",

    reference: "2 Ton",
    image:
      "/imgs/productos/herramienta especializada/antenalla Haven 2ton - copia.jpg",
    description: "Antenalla Haven con capacidad de dos toneladas.",
  },
  {
    id: 59,
    name: "Antenalla Haven 3 Ton",
    category: "Herramienta especializada",

    reference: "3 Ton",
    image: "/imgs/productos/herramienta especializada/antenalla Haven 3ton.jpg",
    description: "Antenalla Haven con capacidad de tres toneladas.",
  },
  {
    id: 60,
    name: "Antenallas",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/antenallas.png",
    description:
      "Herramienta de sujeción para trabajos eléctricos especializados.",
  },
  {
    id: 61,
    name: "Detector de tensión por contacto",
    category: "Herramienta especializada",

    reference: "N/A",
    image:
      "/imgs/productos/herramienta especializada/detector de tension por contacto.jpg",
    description:
      "Detector de tensión por contacto para comprobaciones eléctricas.",
  },
  {
    id: 62,
    name: "Detector HP277",
    category: "Herramienta especializada",

    reference: "HP277",
    image: "/imgs/productos/herramienta especializada/detector hp277.jpg",
    description:
      "Detector HP277 para aplicaciones y trabajos eléctricos especializados.",
  },
  {
    id: 63,
    name: "Detector SEW",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/detector sew.png",
    description:
      "Detector SEW para comprobación y trabajos en sistemas eléctricos.",
  },
  {
    id: 64,
    name: "Detector tipo lápiz",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/detectortipolapiz.png",
    description: "Detector compacto tipo lápiz para trabajos eléctricos.",
  },
  {
    id: 65,
    name: "Freno Yoke",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/freno yoke.png",
    description: "Freno Yoke para trabajos y aplicaciones especializadas.",
  },
  {
    id: 66,
    name: "Garrucha",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/garrucha.png",
    description: "Garrucha para levantamiento y trabajos especializados.",
  },
  {
    id: 67,
    name: "ID",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/id.png",
    description: "Herramienta especializada para aplicaciones eléctricas.",
  },
  {
    id: 68,
    name: "Jack Jumper",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/jack jumper.png",
    description:
      "Jack Jumper para aplicaciones y trabajos eléctricos especializados.",
  },
  {
    id: 69,
    name: "Load Ranger",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/load ranger.jpg",
    description:
      "Herramienta Load Ranger para trabajos eléctricos especializados.",
  },
  {
    id: 70,
    name: "LoadBuster",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/loadBuster.jpg",
    description:
      "Herramienta LoadBuster para operaciones en sistemas eléctricos.",
  },
  {
    id: 71,
    name: "Pelacable ecológico",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/pelacable ecologico.jpg",
    description:
      "Pelacable ecológico para trabajos de preparación de conductores.",
  },
  {
    id: 72,
    name: "Pinza amperimétrica UNI-T UT202A",
    category: "Herramienta especializada",

    reference: "UT202A",
    image:
      "/imgs/productos/herramienta especializada/pinza amperimetrica unit ut202A.jpg",
    description: "Pinza amperimétrica para medición de parámetros eléctricos.",
  },
  {
    id: 73,
    name: "Pinza SensorLink",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/pinza sensorLink.jpg",
    description: "Pinza SensorLink para medición y trabajos especializados.",
  },
  {
    id: 74,
    name: "Ponchadora hidráulica YQK-300",
    category: "Herramienta especializada",

    reference: "YQK-300",
    image:
      "/imgs/productos/herramienta especializada/ponchadora hidraulica YQK-300.jpg",
    description:
      "Ponchadora hidráulica YQK-300 para trabajos de conexión y terminales.",
  },
  {
    id: 75,
    name: "Ponchadora hidráulica YQK-400",
    category: "Herramienta especializada",

    reference: "YQK-400",
    image:
      "/imgs/productos/herramienta especializada/ponchadora hidraulica YQK-400.jpg.png",
    description:
      "Ponchadora hidráulica YQK-400 para trabajos de conexión y terminales.",
  },
  {
    id: 76,
    name: "Riolas",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/riolas.jpg",
    description:
      "Riolas para trabajos y aplicaciones eléctricas especializadas.",
  },
  {
    id: 77,
    name: "Zunchadora",
    category: "Herramienta especializada",

    reference: "N/A",
    image: "/imgs/productos/herramienta especializada/zunchadora.png",
    description:
      "Herramienta para operaciones de zunchado y trabajos especializados.",
  },
];
