export default {
  global: {
    componenteFormativo:
      'Gestión del talento humano según estructura organizacional',
    descripcionCurso:
      'En el presente componente se abordarán aspectos relevantes del proceso de gestión humana, desde aspectos conceptuales y su aplicabilidad en organizaciones deportivas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Organigrama organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Perfil de cargo y manual de funciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Aplicación del programa de gestión de talento humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Liderazgo organizacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Estrategias en dirección en la gestión del talento humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Sistema de gestión en seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Sistema de gestión ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Sistema de Gestión de Calidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/122112_CF10_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estructura organizacional',
      referencia:
        'Project Management Institute. (2021). <em>Guía de los fundamentos para la dirección de proyectos</em> (7.a ed.). Guía del PMBOK.',
      tipo: 'Libro',
      link: 'https://we-educacion.com/pmbok',
    },
    {
      tema: 'Sistema de gestión en seguridad y salud en el trabajo',
      referencia: 'Ministerio del trabajo. (2015). Decreto 1072 de 2015.',
      tipo: 'Decreto',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      tema: 'Sistema de gestión en seguridad y salud en el trabajo',
      referencia: 'Ministerio del trabajo (2019). Resolución 312 de 2019.',
      tipo: 'Resolución',
      link:
        'https://www.arlsura.com/files/Resolucion_0312_de_2019_Estandares_Minimos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Auditorías de calidad',
      significado:
        'proceso estructurado e independiente para determinar si las actividades del proyecto cumplen las políticas, los procesos y los procedimientos de la organización.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'metodología para el mejoramiento de la calidad basada en el ciclo: planear, hacer, verificar y actuar.',
    },
    {
      termino: 'Gestión',
      significado:
        'proceso que comprende determinadas funciones y actividades organizativas que los gestores deben llevar a cabo, con el fin de lograr los objetivos y metas deseadas.',
    },
    {
      termino: 'Inspección',
      significado:
        'medición para verificar si una actividad, producto o servicio cumple con los requisitos específicos.',
    },
    {
      termino: 'Lecciones aprendidas',
      significado:
        'conocimiento adquirido durante un proyecto, el cual muestra cómo se abordaron o deberían abordarse en el futuro los eventos del proyecto, con el fin de mejorar el desempeño.',
    },
  ],
  referencias: [
    {
      referencia:
        'Daft, R. L. (2011). Teoría y diseño organizacional (10a ed.). Recuperado de',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w23309w/Teoria_Diseno_Organizacional.pdf  ',
    },
    {
      referencia:
        'Diccionario de Ciencias de la Conducta. (s.f.). Liderazgo. Recuperado de',
      link:
        'https://www.ucipfg.com/Repositorio/MAP/MAP2010-2011/MAP01/Semana1/Liderazgo.pdf  ',
    },
    {
      referencia:
        'Ministerio del Trabajo. (s.f.). Decreto 1072 de 2015. Recuperado de',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8  ',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). Resolución 0312 de 2019. Recuperado de',
      link:
        'https://www.arlsura.com/files/Resolucion_0312_de_2019_Estandares_Minimos.pdf ',
    },
    {
      referencia: 'ICONTEC. (2015). NTC ISO 14001. Recuperado de',
      link:
        'https://www.ramajudicial.gov.co/documents/8957139/22744716/NORMA+14001+%281%29%281%29.pdf/c26b5d90-20ba-4af0-8e4a-3ae1c45315e2  ',
    },
    {
      referencia:
        'ICONTEC. (2015) NTC ISO 9000 Sistema de Gestión de la Calidad, fundamentos y vocabulario.',
      link:
        'https://www.ramajudicial.gov.co/documents/5454330/14491339/d2.+NTC+ISO+9000-2015.pdf/ccb4b35c-ee63-44b5-ba1e-7459f8714031 ',
    },
    {
      referencia:
        'Universidad Politécnica de Valencia. (2003). ISO 10006. Directrices para la calidad en la gestión de proyectos. Recuperado de',
      link:
        'https://victoryepes.blogs.upv.es/2014/10/21/la-norma-iso-10006-directrices-para-la-calidad-en-la-gestion-de-proyectos/ ',
    },
    {
      referencia:
        'Proyectum. (2014). Auditorias de calidad (PMBOK). Recuperado de',
      link: 'https://proyectum.com/sistema/blog/auditorias-de-calidad/ ',
    },
    {
      referencia:
        'Montoya, I. (2009). La formación de la estrategia en mintzberg y las posibilidades de su aportación para el futuro.',
      link: 'https://www.redalyc.org/articulo.oa?id=90913042002',
    },
    {
      referencia:
        'PMI, Project Management Institute. (2008). <em>Organizational Project Management Maturity Model</em>. Project Management Institute.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Camilo Andrés Aramburo Parra',
          cargo: 'Experto temático',
          centro: 'Centro de servicios de salud- Regional Antioquia',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseño instruccional',
          centro: 'Centro de Gestión Industrial - Regional Bogotá',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluación instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
