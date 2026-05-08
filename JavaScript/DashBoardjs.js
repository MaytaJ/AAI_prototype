// ============================================================
// BASE DE DATOS REAL — Historial de Inundaciones CABA
// Fuente: Investigación histórica de inundaciones urbanas,
//         Ciudad Autónoma de Buenos Aires, 1950–2026.
// ============================================================

const db = {

  "c1": {
    name: "Comuna 1",
    streets: [
      {
        id: "c1_retiro", name: "Retiro", grav: "alto",
        kpis: { ev: "18", per: "12.500", viv: "2.300", com: "850", dan: "$ 1,8B" },
        impacto: { soc: "12.500", vic: "3", eco: "$ 1,8B" },
        ultimo: {
          fecha: "08/02/2024 — Retiro",
          desc: "Temporal extremo: Av. del Libertador y calles aledañas a la terminal colapsaron, convirtiéndose en ríos urbanos. Subte C y E interrumpidos por filtraciones en andenes. Mobiliario urbano arrastrado por la corriente."
        },
        historyData: [0,0,1,0,1,1,2,3,4,5,6,7,12,14],
        doughnutData: [40, 40, 20]
      },
      {
        id: "c1_sannicolas", name: "San Nicolás / Microcentro", grav: "medio",
        kpis: { ev: "14", per: "8.000", viv: "1.200", com: "2.100", dan: "$ 1,2B" },
        impacto: { soc: "8.000", vic: "0", eco: "$ 1,2B" },
        ultimo: {
          fecha: "08/02/2024 — San Nicolás",
          desc: "Galerías comerciales del Microcentro anegadas. Peatonales Florida y Lavalle superaron el nivel del cordón. Subtes A, C y D interrumpidos. Cortes de baja tensión en la red subterránea."
        },
        historyData: [0,0,1,1,2,2,3,3,5,6,7,8,10,12],
        doughnutData: [20, 65, 15]
      },
      {
        id: "c1_puertomadero", name: "Puerto Madero", grav: "bajo",
        kpis: { ev: "2", per: "150", viv: "45", com: "20", dan: "$ 8M" },
        impacto: { soc: "150", vic: "0", eco: "$ 8M" },
        ultimo: {
          fecha: "Sin eventos graves recientes — Puerto Madero",
          desc: "Barrio moderno (desarrollado en los 90) con altimetría superior y desagüe directo a diques del Río de la Plata. Sin registros históricos de inundaciones severas en calles o viviendas. Solo charcos de rápida disipación."
        },
        historyData: [0,0,0,0,0,0,0,0,0,1,1,1,2,1],
        doughnutData: [20, 60, 20]
      },
      {
        id: "c1_santelmo", name: "San Telmo", grav: "medio",
        kpis: { ev: "10", per: "3.200", viv: "890", com: "420", dan: "$ 320M" },
        impacto: { soc: "3.200", vic: "0", eco: "$ 320M" },
        ultimo: {
          fecha: "15/04/2026 — San Telmo",
          desc: "Temporal con 160 mm en 3 horas. Desborde de sumideros y acumulación sobre calzada. En 2023, la Escuela Isauro Arancibia fue inundada por fluidos cloacales por obras del Metrobús que obstruyeron conductos. 800 alumnos sin clases."
        },
        historyData: [0,0,1,1,2,2,3,4,5,6,6,7,8,9],
        doughnutData: [45, 35, 20]
      },
      {
        id: "c1_monserrat", name: "Monserrat", grav: "medio",
        kpis: { ev: "12", per: "4.500", viv: "950", com: "780", dan: "$ 480M" },
        impacto: { soc: "4.500", vic: "0", eco: "$ 480M" },
        ultimo: {
          fecha: "08/02/2024 — Monserrat",
          desc: "Gran acumulación de agua en Av. Belgrano y márgenes de Plaza de Mayo. Imposibilitó el cruce peatonal. En 2009, autos con motores dañados por ingreso de agua; intervención de SAME y Bomberos de la Ciudad."
        },
        historyData: [0,1,1,2,2,3,3,4,5,6,7,8,10,11],
        doughnutData: [30, 55, 15]
      },
      {
        id: "c1_constitucion", name: "Constitución", grav: "alto",
        kpis: { ev: "16", per: "18.000", viv: "3.400", com: "1.100", dan: "$ 2,1B" },
        impacto: { soc: "18.000", vic: "2", eco: "$ 2,1B" },
        ultimo: {
          fecha: "08/02/2024 — Constitución",
          desc: "Zona cero: 60 mm caídos exclusivamente sobre Constitución en minutos. Vías del FC Roca anegadas y hall de la terminal bajo el agua. Subte C con cortocircuito en 2017. Principal nodo al GBA colapsado, cientos de miles de trabajadores varados."
        },
        historyData: [0,1,2,2,3,3,4,5,6,8,9,11,13,15],
        doughnutData: [35, 45, 20]
      }
    ]
  },

  "c2": {
    name: "Comuna 2",
    streets: [
      {
        id: "c2_recoleta", name: "Recoleta", grav: "alto",
        kpis: { ev: "12", per: "9.500", viv: "4.200", com: "1.800", dan: "$ 1,5B" },
        impacto: { soc: "9.500", vic: "1", eco: "$ 1,5B" },
        ultimo: {
          fecha: "09/03/2026 — Recoleta",
          desc: "Inundación en estación Pueyrredón (Subte D) por falla en bombas de desagüe. En marzo 2024, muerte de una mujer de 80 años por desprendimiento de baranda en Arenales al 2800 durante temporal. 63.000 usuarios sin luz."
        },
        historyData: [0,0,1,1,2,2,3,4,5,6,7,8,10,11],
        doughnutData: [50, 35, 15]
      }
    ]
  },

  "c3": {
    name: "Comuna 3",
    streets: [
      {
        id: "c3_balvanera", name: "Balvanera / Once / Abasto", grav: "alto",
        kpis: { ev: "15", per: "14.000", viv: "3.800", com: "5.200", dan: "$ 1,9B" },
        impacto: { soc: "14.000", vic: "1", eco: "$ 1,9B" },
        ultimo: {
          fecha: "15/04/2026 — Balvanera",
          desc: "Anegamientos severos. Apagón total en cruce de Corrientes y Pueyrredón. El Arroyo Manso corre entubado bajo el barrio (Anchorena, 24 de Noviembre) y colapsa su capacidad. Mercado mayorista de Once paralizado. Estaciones de Subtes A, B y H afectadas."
        },
        historyData: [1,1,2,2,3,3,4,5,7,8,9,11,13,14],
        doughnutData: [25, 65, 10]
      },
      {
        id: "c3_sancristobal", name: "San Cristóbal", grav: "medio",
        kpis: { ev: "10", per: "5.500", viv: "1.900", com: "1.200", dan: "$ 620M" },
        impacto: { soc: "5.500", vic: "0", eco: "$ 620M" },
        ultimo: {
          fecha: "12/03/2024 — San Cristóbal",
          desc: "Barrio muy afectado: calles anegadas, árboles caídos que bloquearon desagües y cortes masivos de energía. En 2010, colapso del sistema pluvial por casi 100 mm en 2 horas. Vecinos destaparon sumideros por cuenta propia."
        },
        historyData: [0,0,1,1,2,2,3,4,5,6,7,8,9,9],
        doughnutData: [40, 45, 15]
      }
    ]
  },

  "c4": {
    name: "Comuna 4",
    streets: [
      {
        id: "c4_laboca", name: "La Boca", grav: "alto",
        kpis: { ev: "22", per: "8.500", viv: "4.100", com: "980", dan: "$ 890M" },
        impacto: { soc: "8.500", vic: "2", eco: "$ 890M" },
        ultimo: {
          fecha: "17/01/2000 — La Boca",
          desc: "30–50 mm en menos de una hora: anegamientos severos en toda La Boca. Barrio crónicamente vulnerable por sudestadas del Riachuelo. Las casas históricas tienen veredas elevadas y compuertas de chapa instaladas por los vecinos como evidencia arquitectónica de las crecidas recurrentes."
        },
        historyData: [2,3,4,5,6,7,8,9,10,11,13,15,18,21],
        doughnutData: [60, 25, 15]
      },
      {
        id: "c4_barracas", name: "Barracas", grav: "alto",
        kpis: { ev: "18", per: "7.200", viv: "3.200", com: "1.450", dan: "$ 1,1B" },
        impacto: { soc: "7.200", vic: "1", eco: "$ 1,1B" },
        ultimo: {
          fecha: "12/03/2024 — Barracas",
          desc: "Una camioneta Trafic quedó casi totalmente bajo el agua en plena calle. Contenedores metálicos de basura arrastrados por las corrientes. En 2018, cruce de Montes de Oca y Aristóbulo del Valle completamente tapado. Pasos bajo nivel del FC Roca anegados."
        },
        historyData: [1,2,3,4,5,6,7,8,9,10,12,14,16,17],
        doughnutData: [45, 40, 15]
      },
      {
        id: "c4_parquepatricio", name: "Parque Patricios", grav: "medio",
        kpis: { ev: "11", per: "4.800", viv: "2.100", com: "750", dan: "$ 560M" },
        impacto: { soc: "4.800", vic: "0", eco: "$ 560M" },
        ultimo: {
          fecha: "08/02/2024 — Parque Patricios",
          desc: "38 mm en minutos. Automovilistas inmovilizados. Inundación de instalaciones eléctricas (Edesur) con cortes generalizados. Línea H de Subte interrumpida. Impacto en el polo tecnológico del barrio. Sumideros escupiendo agua a presión."
        },
        historyData: [0,0,1,1,2,2,3,4,5,6,8,9,10,10],
        doughnutData: [45, 35, 20]
      },
      {
        id: "c4_nuevapompeya", name: "Nueva Pompeya", grav: "alto",
        kpis: { ev: "14", per: "5.900", viv: "2.800", com: "620", dan: "$ 740M" },
        impacto: { soc: "5.900", vic: "0", eco: "$ 740M" },
        ultimo: {
          fecha: "08/03/2025 — Nueva Pompeya",
          desc: "Barrio más afectado por ráfagas de hasta 75 km/h. Destrucción masiva de cableado aéreo. Junto a Parque Chacabuco concentró la mayor proporción de los 84.000 usuarios sin luz del AMBA. Talleres y depósitos logísticos linderos al Riachuelo sin energía."
        },
        historyData: [0,1,1,2,2,3,4,5,6,7,9,10,12,13],
        doughnutData: [50, 30, 20]
      }
    ]
  },

  "c5": {
    name: "Comuna 5",
    streets: [
      {
        id: "c5_almagro", name: "Almagro", grav: "alto",
        kpis: { ev: "16", per: "11.000", viv: "3.600", com: "2.800", dan: "$ 1,6B" },
        impacto: { soc: "11.000", vic: "1", eco: "$ 1,6B" },
        ultimo: {
          fecha: "15/04/2026 — Almagro",
          desc: "Calles intransitables. En 2024: paso bajo nivel de Yatay completamente inundado (>1,5 m) con un auto flotando a la deriva. Más de 45.000 hogares sin luz. El GCBA instaló nuevos conductos pluviales sobre calle Venezuela a fines de 2024."
        },
        historyData: [0,1,1,2,2,3,4,5,6,8,9,11,14,15],
        doughnutData: [35, 50, 15]
      },
      {
        id: "c5_boedo", name: "Boedo", grav: "medio",
        kpis: { ev: "9", per: "4.200", viv: "1.600", com: "980", dan: "$ 410M" },
        impacto: { soc: "4.200", vic: "0", eco: "$ 410M" },
        ultimo: {
          fecha: "08/02/2024 — Boedo",
          desc: "Más de 60 mm en una hora. Subte Línea E cortado por agua en las vías. Emova estableció servicio de emergencia solo desde estación Boedo hacia Virreyes. Miles de pasajeros del sur sin conexión al microcentro."
        },
        historyData: [0,0,0,1,1,2,2,3,4,5,6,7,8,8],
        doughnutData: [40, 45, 15]
      }
    ]
  },

  "c6": {
    name: "Comuna 6",
    streets: [
      {
        id: "c6_caballito", name: "Caballito", grav: "alto",
        kpis: { ev: "17", per: "15.000", viv: "5.800", com: "3.200", dan: "$ 2,3B" },
        impacto: { soc: "15.000", vic: "2", eco: "$ 2,3B" },
        ultimo: {
          fecha: "08/02/2024 — Caballito",
          desc: "Auto flotando en túnel Yatay/Lezica. Derrumbe fatal en Av. Pedro Goyena y Moreno: 2 hermanos muertos. Subestación Edesur Caballito explotó dejando la zona sin luz ni agua. Línea A de Subte interrumpida. El peor evento registrado para el barrio."
        },
        historyData: [0,1,1,2,3,4,5,6,7,9,10,12,15,16],
        doughnutData: [40, 42, 18]
      }
    ]
  },

  "c7": {
    name: "Comuna 7",
    streets: [
      {
        id: "c7_flores", name: "Flores", grav: "alto",
        kpis: { ev: "14", per: "10.200", viv: "4.500", com: "2.100", dan: "$ 1,4B" },
        impacto: { soc: "10.200", vic: "0", eco: "$ 1,4B" },
        ultimo: {
          fecha: "20/03/2024 — Flores",
          desc: "Tormenta supercelda. Mayor concentración de cortes de luz del barrio. Línea A de Subte interrumpida en tramo Plaza de Mayo–San Pedrito. Caída masiva de árboles en Plaza Flores y Plaza Misericordia. Ramas bloquearon sumideros por días."
        },
        historyData: [0,0,1,2,2,3,4,5,6,7,9,10,12,13],
        doughnutData: [42, 40, 18]
      },
      {
        id: "c7_parquechacabuco", name: "Parque Chacabuco", grav: "medio",
        kpis: { ev: "11", per: "5.800", viv: "2.200", com: "860", dan: "$ 520M" },
        impacto: { soc: "5.800", vic: "0", eco: "$ 520M" },
        ultimo: {
          fecha: "29/04/2018 — Parque Chacabuco",
          desc: "Severo temporal con lluvias y vientos. Barrio entre los más perjudicados de la Ciudad. Semáforos cortados por fallas en la red Edesur. Bocas de tormenta de Av. Asamblea y Eva Perón obstruidas por ramas y hojas arrastradas."
        },
        historyData: [0,0,1,1,2,2,3,4,5,6,7,9,10,10],
        doughnutData: [40, 42, 18]
      }
    ]
  },

  "c8": {
    name: "Comuna 8",
    streets: [
      {
        id: "c8_villasoldati", name: "Villa Soldati", grav: "alto",
        kpis: { ev: "19", per: "22.000", viv: "6.800", com: "1.200", dan: "$ 1,8B" },
        impacto: { soc: "22.000", vic: "2", eco: "$ 1,8B" },
        ultimo: {
          fecha: "12/03/2024 — Villa Soldati",
          desc: "170 mm acumulados. Calles absolutamente intransitables. Video viral: dos vecinos navegaron por las calles inundadas dentro de tanques de agua plásticos. Pérdida total de enseres en hogares vulnerables. Comedores y escuelas cerrados."
        },
        historyData: [1,2,3,4,5,6,7,8,9,11,12,14,17,18],
        doughnutData: [70, 18, 12]
      },
      {
        id: "c8_villalugano", name: "Villa Lugano", grav: "alto",
        kpis: { ev: "17", per: "18.500", viv: "5.900", com: "980", dan: "$ 1,5B" },
        impacto: { soc: "18.500", vic: "1", eco: "$ 1,5B" },
        ultimo: {
          fecha: "12/03/2024 — Villa Lugano",
          desc: "Vías superficiales del sur bajo el agua. Servicio completo del Premetro interrumpido. En 2013: desborde del Arroyo Cildáñez con familias evacuadas. Complejo habitacional Lugano I y II con retroceso cloacal. Barrio desconectado del centro."
        },
        historyData: [1,2,3,4,5,6,7,8,9,11,12,14,16,16],
        doughnutData: [65, 20, 15]
      },
      {
        id: "c8_villariachuelo", name: "Villa Riachuelo", grav: "alto",
        kpis: { ev: "14", per: "8.200", viv: "3.400", com: "520", dan: "$ 780M" },
        impacto: { soc: "8.200", vic: "0", eco: "$ 780M" },
        ultimo: {
          fecha: "20/03/2024 — Villa Riachuelo",
          desc: "Cataratas de agua cayendo desde puentes de Av. General Paz hacia las colectoras. Automovilistas circulando en contramano o sobre parterres elevados. Accesos logísticos al Mercado Central interrumpidos. Estaciones de bombeo del Riachuelo al límite."
        },
        historyData: [1,2,3,4,5,6,7,8,9,10,11,12,13,13],
        doughnutData: [68, 15, 17]
      }
    ]
  },

  "c9": {
    name: "Comuna 9",
    streets: [
      {
        id: "c9_liniers", name: "Liniers", grav: "alto",
        kpis: { ev: "16", per: "9.800", viv: "3.500", com: "2.800", dan: "$ 1,2B" },
        impacto: { soc: "9.800", vic: "2", eco: "$ 1,2B" },
        ultimo: {
          fecha: "12/03/2024 — Liniers",
          desc: "Anegamientos severos en calles de ingreso a la Capital. Terminal de ómnibus y estación ferroviaria colapsadas. En 2013 (155 mm): uno de los epicentros de protestas vecinales por daños. Túneles del FC Sarmiento aislaron el barrio durante los picos."
        },
        historyData: [0,1,2,3,4,5,6,7,8,9,10,12,14,15],
        doughnutData: [35, 55, 10]
      },
      {
        id: "c9_mataderos", name: "Mataderos", grav: "alto",
        kpis: { ev: "13", per: "7.600", viv: "2.900", com: "1.100", dan: "$ 920M" },
        impacto: { soc: "7.600", vic: "0", eco: "$ 920M" },
        ultimo: {
          fecha: "12/03/2024 — Mataderos",
          desc: "Reporte oficial: casi 100 mm, barrio con mayor nivel de precipitaciones del día. Av. Juan B. Alberdi y Directorio convertidas en arroyos. Destrucción de infraestructura aérea por árboles caídos. Corredor logístico de Av. Eva Perón paralizado."
        },
        historyData: [0,1,1,2,3,4,5,6,7,8,10,11,12,12],
        doughnutData: [45, 38, 17]
      },
      {
        id: "c9_parqueavellaneda", name: "Parque Avellaneda", grav: "alto",
        kpis: { ev: "12", per: "6.500", viv: "2.400", com: "680", dan: "$ 750M" },
        impacto: { soc: "6.500", vic: "0", eco: "$ 750M" },
        ultimo: {
          fecha: "12/03/2024 — Parque Avellaneda",
          desc: "Declarado oficialmente el barrio más perjudicado del día: 60 mm en una sola hora. Escuela secundaria Che Guevara inundada en su interior. Cuenca del Arroyo Cildáñez saturada por escurrimiento inusitado. Acceso a Autopista Perito Moreno bloqueado."
        },
        historyData: [0,0,1,1,2,3,4,5,6,7,9,10,11,11],
        doughnutData: [50, 30, 20]
      }
    ]
  },

  "c10": {
    name: "Comuna 10",
    streets: [
      {
        id: "c10_floresta", name: "Floresta", grav: "alto",
        kpis: { ev: "15", per: "8.900", viv: "3.600", com: "1.400", dan: "$ 1,1B" },
        impacto: { soc: "8.900", vic: "0", eco: "$ 1,1B" },
        ultimo: {
          fecha: "12/03/2024 — Floresta",
          desc: "Calles intransitables y cortes masivos de luz. En 2013 (155 mm): autos tapados en garajes subterráneos, barrio a oscuras 48 horas continuas. Las obras del canal aliviador del Maldonado mitigaron el impacto posterior, pero los sumideros siguen colapsando."
        },
        historyData: [0,1,2,3,4,5,6,7,8,9,10,12,13,14],
        doughnutData: [52, 32, 16]
      },
      {
        id: "c10_villaluro", name: "Villa Luro", grav: "alto",
        kpis: { ev: "13", per: "6.200", viv: "2.800", com: "1.050", dan: "$ 850M" },
        impacto: { soc: "6.200", vic: "0", eco: "$ 850M" },
        ultimo: {
          fecha: "12/03/2024 — Villa Luro",
          desc: "Zona crítica del oeste: cortes de luz y anegamientos masivos. En 2013: sin luz por más de 2 días consecutivos. Cuadrillas de Edesur no podían acceder a cámaras eléctricas por estar completamente tapadas de agua. Locales de Av. Lope de Vega inundados."
        },
        historyData: [0,1,2,2,3,4,5,6,7,8,9,11,12,12],
        doughnutData: [48, 38, 14]
      },
      {
        id: "c10_montecastroyeje", name: "Monte Castro / Versalles / Villa Real / Vélez Sársfield", grav: "medio",
        kpis: { ev: "10", per: "4.800", viv: "1.900", com: "520", dan: "$ 480M" },
        impacto: { soc: "4.800", vic: "0", eco: "$ 480M" },
        ultimo: {
          fecha: "25/10/2025 — Eje Residencial Oeste",
          desc: "Temporal primaveral: anegamientos en colectoras y pasos bajo nivel de Av. General Paz. Caída masiva de árboles por vientos huracanados (dic. 2023 y mar. 2024) destruyó cableado aéreo y aplastó vehículos estacionados. Barrios con follaje taponando sumideros."
        },
        historyData: [0,0,1,1,2,2,3,4,5,6,7,8,9,9],
        doughnutData: [55, 25, 20]
      }
    ]
  },

  "c11": {
    name: "Comuna 11",
    streets: [
      {
        id: "c11_villadevoto", name: "Villa Devoto", grav: "alto",
        kpis: { ev: "14", per: "9.200", viv: "3.800", com: "1.100", dan: "$ 1,2B" },
        impacto: { soc: "9.200", vic: "0", eco: "$ 1,2B" },
        ultimo: {
          fecha: "25/10/2025 — Villa Devoto",
          desc: "Más de 100 mm en pocas horas. Superó el promedio mensual en menos de 4 horas. Jefe de Gobierno supervisó personalmente los trabajos en Av. Salvador María del Carril. Pasos bajo nivel de FC San Martín y Urquiza inundados. Polo gastronómico de Plaza Arenales paralizado."
        },
        historyData: [0,0,1,1,2,3,4,5,6,7,9,10,12,13],
        doughnutData: [50, 30, 20]
      },
      {
        id: "c11_villaparque", name: "Villa del Parque", grav: "alto",
        kpis: { ev: "15", per: "11.000", viv: "4.200", com: "1.600", dan: "$ 1,5B" },
        impacto: { soc: "11.000", vic: "3", eco: "$ 1,5B" },
        ultimo: {
          fecha: "25/10/2025 — Villa del Parque",
          desc: "Túneles cerrados preventivamente. En 2013 (155 mm): uno de los seis barrios más devastados de CABA. Agua masiva en comercios, consorcios y garajes. Av. Nazca convertida en río. El túnel de la Av. Nazca quedó inundado en su totalidad."
        },
        historyData: [0,1,2,3,4,5,6,7,8,9,10,12,13,14],
        doughnutData: [48, 35, 17]
      },
      {
        id: "c11_santaritamitre", name: "Villa Santa Rita / Villa Gral. Mitre", grav: "alto",
        kpis: { ev: "12", per: "7.500", viv: "3.100", com: "890", dan: "$ 920M" },
        impacto: { soc: "7.500", vic: "0", eco: "$ 920M" },
        ultimo: {
          fecha: "25/10/2025 — Villa Santa Rita / Villa Gral. Mitre",
          desc: "ENRE: barrios con mayor impacto de cortes de luz de toda la Ciudad. 16.000 familias sin electricidad. Cámaras transformadoras de Edesur inundadas. Cuadrillas debían esperar drenaje completo antes de reenergizar para evitar electrocución en la vía pública."
        },
        historyData: [0,0,1,1,2,2,3,4,5,6,8,9,11,11],
        doughnutData: [52, 32, 16]
      }
    ]
  },

  "c12": {
    name: "Comuna 12",
    streets: [
      {
        id: "c12_saavedra", name: "Saavedra", grav: "alto",
        kpis: { ev: "20", per: "14.500", viv: "5.200", com: "1.800", dan: "$ 2,4B" },
        impacto: { soc: "14.500", vic: "6", eco: "$ 2,4B" },
        ultimo: {
          fecha: "02/04/2013 — Saavedra",
          desc: "Catástrofe histórica: 155 mm, Arroyo Medrano desbordó. Agua superó 1,5 metros dentro de las casas. 6 personas fallecidas. Barrio Mitre sumergido casi en su totalidad. Reclamo vecinal: 'Saavedra no duerme cuando llueve'. Demandas judiciales contra Shopping DOT Baires."
        },
        historyData: [1,2,3,4,5,6,7,8,10,12,14,17,19,19],
        doughnutData: [65, 20, 15]
      },
      {
        id: "c12_villaurquiza", name: "Villa Urquiza", grav: "alto",
        kpis: { ev: "16", per: "9.800", viv: "4.100", com: "2.200", dan: "$ 1,6B" },
        impacto: { soc: "9.800", vic: "2", eco: "$ 1,6B" },
        ultimo: {
          fecha: "12/03/2024 — Villa Urquiza",
          desc: "Calles Monroe y Olazábal inundadas. En 2013: fallecimiento de un vecino cerca de Burela y Le Breton, y un operario del Subte B electrocutado en estación Los Incas. El 2 de abril de 2013 es fecha de duelo institucional para el sindicato Metrodelegados."
        },
        historyData: [0,1,2,3,4,5,6,7,9,10,12,14,15,15],
        doughnutData: [55, 30, 15]
      },
      {
        id: "c12_coghlanpueyrredon", name: "Coghlan / Villa Pueyrredón", grav: "medio",
        kpis: { ev: "11", per: "5.200", viv: "2.100", com: "680", dan: "$ 580M" },
        impacto: { soc: "5.200", vic: "0", eco: "$ 580M" },
        ultimo: {
          fecha: "12/03/2024 — Coghlan / Villa Pueyrredón",
          desc: "Túnel de Av. Constituyentes parcialmente anegado. Cortes preventivos de energía para evitar electrocución en veredas. En 2013: cortes prolongados mientras bajaba el agua. El denso arbolado residencial tapa instantáneamente los sumideros con follaje."
        },
        historyData: [0,0,1,1,2,2,3,4,5,6,8,9,10,10],
        doughnutData: [58, 25, 17]
      }
    ]
  },

  "c13": {
    name: "Comuna 13",
    streets: [
      {
        id: "c13_belgrano", name: "Belgrano", grav: "alto",
        kpis: { ev: "18", per: "13.500", viv: "5.600", com: "3.800", dan: "$ 2,2B" },
        impacto: { soc: "13.500", vic: "2", eco: "$ 2,2B" },
        ultimo: {
          fecha: "12/03/2024 — Belgrano",
          desc: "Ráfagas destructoras en Belgrano R: cientos de árboles centenarios sobre Av. Melián y Cramer. Histórico pre-2019: Av. Cabildo era un río con agua a la cintura. Solución estructural: inauguración del 2do Emisario del Arroyo Vega (2019)."
        },
        historyData: [1,2,3,4,5,6,7,9,10,12,14,16,17,17],
        doughnutData: [42, 45, 13]
      },
      {
        id: "c13_nunez", name: "Núñez", grav: "alto",
        kpis: { ev: "13", per: "7.800", viv: "3.500", com: "1.200", dan: "$ 1,1B" },
        impacto: { soc: "7.800", vic: "0", eco: "$ 1,1B" },
        ultimo: {
          fecha: "12/03/2024 — Núñez",
          desc: "Anegamientos en inmediaciones del Estadio Monumental. Túneles clausurados. Av. Lugones y Cantilo con charcos profundos y despistes vehiculares. En 2013 (cuenca baja del Medrano): subsuelos de edificios en Libertador inundados hasta el techo."
        },
        historyData: [0,1,2,2,3,4,5,6,7,9,10,11,12,12],
        doughnutData: [48, 35, 17]
      },
      {
        id: "c13_colegiales", name: "Colegiales", grav: "medio",
        kpis: { ev: "10", per: "4.600", viv: "1.800", com: "1.400", dan: "$ 620M" },
        impacto: { soc: "4.600", vic: "0", eco: "$ 620M" },
        ultimo: {
          fecha: "17/12/2023 — Colegiales",
          desc: "Temporal huracanado (>100 km/h): decenas de árboles históricos arrancados en Plaza Mafalda, Plaza Clemente, Freire, Zapiola y Conesa. Aplastaron vehículos y destruyeron cables de media tensión. Cortes de luz superiores a 72 horas en algunas manzanas."
        },
        historyData: [0,0,1,1,2,2,3,4,5,6,7,8,9,9],
        doughnutData: [35, 50, 15]
      }
    ]
  },

  "c14": {
    name: "Comuna 14",
    streets: [
      {
        id: "c14_palermo", name: "Palermo", grav: "alto",
        kpis: { ev: "19", per: "16.000", viv: "6.800", com: "5.200", dan: "$ 2,8B" },
        impacto: { soc: "16.000", vic: "1", eco: "$ 2,8B" },
        ultimo: {
          fecha: "17/12/2023 — Palermo",
          desc: "Temporal huracanado: cientos de árboles caídos en Bosques de Palermo y Soho/Hollywood. En 2024: vehículo flotando en túnel de calle Salguero. Pre-2012: Av. Juan B. Justo era un río caudaloso que arrastraba vehículos. Solución: túneles aliviadores del Maldonado (2011–2012)."
        },
        historyData: [1,2,3,4,5,6,7,9,10,12,14,16,18,18],
        doughnutData: [35, 50, 15]
      }
    ]
  },

  "c15": {
    name: "Comuna 15",
    streets: [
      {
        id: "c15_villacrespo", name: "Villa Crespo", grav: "alto",
        kpis: { ev: "17", per: "10.500", viv: "4.200", com: "3.800", dan: "$ 1,9B" },
        impacto: { soc: "10.500", vic: "0", eco: "$ 1,9B" },
        ultimo: {
          fecha: "12/03/2024 — Villa Crespo",
          desc: "Sumideros de Av. Juan B. Justo y Warnes colapsaron; comerciantes tapiaron ingresos y subieron mercadería. Pre-2012: intersección Justo/Corrientes era navegable con autos apilados en filas. El aliviador del Maldonado es la principal defensa del barrio."
        },
        historyData: [1,2,3,4,5,6,7,8,10,12,14,15,16,16],
        doughnutData: [32, 58, 10]
      },
      {
        id: "c15_chacaritaparquechas", name: "Chacarita / Parque Chas", grav: "alto",
        kpis: { ev: "15", per: "9.200", viv: "3.800", com: "1.600", dan: "$ 1,4B" },
        impacto: { soc: "9.200", vic: "1", eco: "$ 1,4B" },
        ultimo: {
          fecha: "12/03/2024 — Chacarita / Parque Chas",
          desc: "Centro de transbordo Federico Lacroze rodeado de agua. Paso bajo nivel de Av. Lacroze cerrado. En 2013: Parque Chas (trazado circular en laberinto) quedó inundado sin salida hídrica. Operario del Subte B electrocutado en estación Los Incas-Parque Chas."
        },
        historyData: [0,1,2,3,4,5,6,7,8,10,11,12,14,14],
        doughnutData: [45, 40, 15]
      },
      {
        id: "c15_lapaternalagronomiavilla", name: "La Paternal / Agronomía / Villa Ortúzar", grav: "alto",
        kpis: { ev: "13", per: "7.800", viv: "3.100", com: "980", dan: "$ 1,1B" },
        impacto: { soc: "7.800", vic: "0", eco: "$ 1,1B" },
        ultimo: {
          fecha: "17/12/2023 — La Paternal / Agronomía / Villa Ortúzar",
          desc: "Supercelda huracanada: muro de la Facultad de Agronomía (UBA) cedió en Av. San Martín aplastando vehículos. Kilómetros de muros y cableado destruidos. Suspensión prolongada de actividades académicas. FC San Martín paralizado por ramas sobre vías."
        },
        historyData: [0,0,1,1,2,3,4,5,6,7,9,10,12,12],
        doughnutData: [48, 35, 17]
      }
    ]
  }

};

// ============================================================
// ORDENAR COMUNAS 1 → 15
// ============================================================
const orderedDb = Object.keys(db).sort((a, b) => {
  const numA = parseInt(db[a].name.replace("Comuna ", ""));
  const numB = parseInt(db[b].name.replace("Comuna ", ""));
  return numA - numB;
}).reduce((obj, key) => {
  obj[key] = db[key];
  return obj;
}, {});

// ============================================================
// 2. CONFIGURACIÓN DE GRÁFICOS
// ============================================================
Chart.defaults.font.family = 'Inter';
Chart.defaults.color = '#718096';

let lineChart, doughnutChart;

function initCharts() {
  const ctxLine = document.getElementById('lineChart').getContext('2d');
  let gradient = ctxLine.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, 'rgba(43, 108, 176, 0.2)');
  gradient.addColorStop(1, 'rgba(43, 108, 176, 0)');

  lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
      labels: ['1900','1910','1920','1930','1940','1950','1960','1970','1980','1990','2000','2010','2020','2024'],
      datasets: [{
        label: 'Eventos',
        data: [],
        borderColor: '#2b6cb0',
        backgroundColor: gradient,
        borderWidth: 2,
        tension: 0.3,
        fill: true,
        pointBackgroundColor: '#2b6cb0',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: '#edf2f7' },
          border: { display: false }
        },
        x: {
          grid: { display: false },
          border: { display: false }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: { mode: 'index', intersect: false }
      },
      interaction: { mode: 'nearest', axis: 'x', intersect: false }
    }
  });

  const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
  doughnutChart = new Chart(ctxDoughnut, {
    type: 'doughnut',
    data: {
      labels: ['Viviendas', 'Comercios', 'Espacios públicos'],
      datasets: [{
        data: [],
        backgroundColor: ['#4299e1', '#48bb78', '#ecc94b'],
        borderWidth: 2,
        borderColor: '#ffffff',
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { usePointStyle: true, boxWidth: 8, padding: 15 }
        }
      },
      cutout: '65%'
    }
  });
}

// ============================================================
// 3. RENDERIZAR BARRA LATERAL
// ============================================================
function renderSidebar() {
  const sidebar = document.getElementById('sidebar-content');
  const svgIcon = `<svg class="icon-building" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 12h3v8h14v-8h3L12 2zm0 2.83L17.17 10H6.83L12 4.83zM14 20h-4v-6h4v6z"/>
  </svg>`;

  for (let key in orderedDb) {
    const comuna = orderedDb[key];
    const group = document.createElement('div');
    group.className = 'comuna-group';

    // Nivel de gravedad dominante para el indicador de la cabecera
    const gravCounts = { alto: 0, medio: 0, bajo: 0 };
    comuna.streets.forEach(s => gravCounts[s.grav]++);
    const mainGrav = gravCounts.alto > 0 ? 'alto' : (gravCounts.medio > 0 ? 'medio' : 'bajo');

    const header = document.createElement('div');
    header.className = 'comuna-header';
    header.innerHTML = `
      <div class="comuna-header-left">
        ${svgIcon} <span>${comuna.name}</span>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:0.6rem; opacity:0.5;">▼</span>
        <span class="dot ${mainGrav}"></span>
      </div>
    `;

    const list = document.createElement('div');
    list.className = 'streets-list';

    comuna.streets.forEach(street => {
      const item = document.createElement('div');
      item.className = 'street-item';
      item.innerHTML = `<span class="dot ${street.grav}" style="margin-right:8px;"></span><span>${street.name}</span>`;
      item.onclick = (e) => {
        e.stopPropagation();
        updateDashboard(street, comuna.name, item);
      };
      list.appendChild(item);
    });

    header.onclick = () => {
      const isActive = group.classList.contains('active');
      document.querySelectorAll('.comuna-group').forEach(g => g.classList.remove('active'));
      if (!isActive) group.classList.add('active');
    };

    group.appendChild(header);
    group.appendChild(list);
    sidebar.appendChild(group);
  }
}

// ============================================================
// 4. ACTUALIZAR DATOS EN PANTALLA
// ============================================================
function updateDashboard(streetData, comunaName, elementRef) {
  document.querySelectorAll('.street-item').forEach(i => i.classList.remove('active'));
  if (elementRef) elementRef.classList.add('active');

  document.getElementById('main-subtitle').innerText = `${comunaName} — ${streetData.name}`;

  document.getElementById('kpi-eventos').innerText   = streetData.kpis.ev;
  document.getElementById('kpi-personas').innerText  = streetData.kpis.per;
  document.getElementById('kpi-viviendas').innerText = streetData.kpis.viv;
  document.getElementById('kpi-comercios').innerText = streetData.kpis.com;
  document.getElementById('kpi-danos').innerText     = streetData.kpis.dan;

  document.getElementById('ultimo-fecha').innerText = streetData.ultimo.fecha;
  document.getElementById('ultimo-desc').innerText  = streetData.ultimo.desc;

  document.getElementById('imp-social-val').innerText = streetData.impacto.soc;
  document.getElementById('imp-vic-val').innerText    = streetData.impacto.vic;
  document.getElementById('imp-eco-val').innerText    = streetData.impacto.eco;

  lineChart.data.datasets[0].data = streetData.historyData;
  lineChart.update();

  doughnutChart.data.datasets[0].data = streetData.doughnutData;
  doughnutChart.update();
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
window.onload = () => {
  initCharts();
  renderSidebar();

  // Abrir la primera comuna y cargar el primer barrio por defecto
  const firstKey   = Object.keys(orderedDb)[0];
  const firstComuna = orderedDb[firstKey];
  const firstGroup  = document.querySelectorAll('.comuna-group')[0];
  if (firstGroup) firstGroup.classList.add('active');

  const firstStreet = firstComuna.streets[0];
  const firstItem   = firstGroup ? firstGroup.querySelector('.street-item') : null;
  updateDashboard(firstStreet, firstComuna.name, firstItem);
};