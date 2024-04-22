<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 9
      h1 Sistema de gestión de calidad
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La calidad es un término que ha venido evolucionando en el tiempo, pasando de la tendencia de proporcionar servicios y productos de calidad hacia la satisfacción de las demandas de calidad de los clientes. Son los clientes quienes definen si el servicio o producto cumple con sus expectativas de calidad, satisfaciendo sus necesidades y requerimientos.
    
    p.mt-4(data-aos="fade-right") La calidad según la ISO 9000, la define como la totalidad de rasgos o características de un producto o servicio que llevan en sí la capacidad de satisfacer las necesidades explícitas o implícitas. Por ende, la gestión de calidad incluye todos los procesos y actividades de la organización, estableciendo políticas, objetivos, responsabilidades de calidad para satisfacer las necesidades que exige el cliente, y para ello, se puede trabajar a partir de enfoques modernos como lo son:
    
    .cont_9_1.my-5
      .col-xl-10.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 5.
          i Enfoques del sistema de gestión de la calidad 
        figure.d-lg-flex.d-none(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema9/3.svg" alt="En la Figura 5 se presentan los enfoques del sistema de gestión de la calidad, que incluyen cliente, prevención, mejora continua, dirección y costos.")
        figure.d-lg-none.d-flex(data-aos="zoom-in-up")
          img(src="@/assets/curso/tema9/3a.svg" alt="En la Figura 5 se presentan los enfoques del sistema de gestión de la calidad, que incluyen cliente, prevención, mejora continua, dirección y costos.")
      br
      .col-xl-7.m-auto.col-lg-9.mt-5
        .p-2.text-white.mt-5(style="background-color:#12263F;border:5px white solid;border-radius:5px;box-shadow:0px 0px 15px rgba(0,0,0,.2);" data-aos="zoom-in-down")
          p.mb-0.text-center A continuación, se presenta la comparación de la calidad del pasado con la calidad de hoy:
    
    
    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-8.col-md-10.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          img(src='@/assets/curso/tema9/4.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-4.p-lg-3.p-sm-4.p-2
            .title.d-flex.align-items-center.justify-content-center.mb-sm-4.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Calidad antes
            ul.lista-ul--separador.mt-3.mb-0.tsmall
              li.d-flex.mb-1
                i.fas.fa-angle-right
                | Inspección de cualquier cosa al final de la línea de producción para determinar si cumple las especificaciones.
              li.d-flex.mb-1
                i.fas.fa-angle-right
                | Establecimiento de metas estadísticas de conformidad.
              li.d-flex.mb-0
                i.fas.fa-angle-right
                | Arreglar (o desechar) los productos no conformes.
      .col-xl-6.col-lg-8.col-md-10.mb-xl-0.mb-4(data-aos="fade-left")
        .tarjetas-up(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          img(src='@/assets/curso/tema9/5.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG06.p-xl-4.p-lg-3.p-sm-4.p-2
            .title.d-flex.align-items-center.justify-content-center.text-white.mb-sm-4.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Calidad ahora
            ul.lista-ul--separador.mt-3.text-white.lista_custom_1.mb-0.tsmall
              li.d-flex.mb-1.text-white
                i.fas.fa-angle-right.text-white
                .text-white Los requerimientos del cliente son la base de la calidad.
              li.d-flex.mb-1.text-white
                i.fas.fa-angle-right.text-white
                .text-white Entender y controlar las variaciones.
              li.d-flex.mb-0.text-white
                i.fas.fa-angle-right.text-white
                .text-white Los productos y los procesos se mejoran permanentemente.

    p.mt-5(data-aos="fade-right") Los siguientes son los objetivos de la gestión de calidad:

    .row.mt-5.justify-content-center
      .col-md-8.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-numerada.color-acento-contenido.p-4.ps-5.h-100(style="box-shadow:0px 3px 15px rgba(0,0,0,.1);")
          .tarjeta-numerada__numero
            .h2(style="color:initial;") 1
          p.text-center.mb-0 Producir productos y ofrecer servicios con las especificaciones y estándares
      .col-md-8.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-numerada.color-acento-botones.p-4.ps-5.h-100(style="box-shadow:0px 3px 15px rgba(0,0,0,.1);")
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.text-center.mb-0 Responder a los requerimientos del cliente y satisfacer sus necesidades 
      .col-md-8.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-numerada.color-primario.p-4.ps-5.h-100(style="box-shadow:0px 3px 15px rgba(0,0,0,.1);")
          .tarjeta-numerada__numero
            .h2.text-white 3
          p.text-center.mb-0 Ser percibidos como exitosos desde el punto de vista de negocio
    
    .cajon.color-primario.p-4.mt-5(style="background-color:#E0F4FE;" data-aos="flip-up")
      p.mb-0 #[strong La gestión de calidad según la norma ISO 10006:2003] incluye: planificar, organizar, realizar seguimiento, controlar, informar y tomar las decisiones correctivas pertinentes necesarias para alcanzar los objetivos de forma continua. En el siguiente recurso, podrás conocer los grupos de procesos para la gestión de la calidad:
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-contenido
          .tarjeta.color-acento-contenido.p-4.p-lg-5(titulo="Inicio" style="background-color:#FFF7D9;")
            .row
              .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
                figure.m-auto.col-6.col-md-7.col-lg-12
                  img(src="@/assets/curso/tema9/7.svg")
              .col-lg-8(style="place-self:center;")
                ul.lista-ul--separador.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Claridad del mandato.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Objetivos y metas.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Premisas y restricciones.
          .tarjeta.color-acento-contenido.p-4.p-lg-5(titulo="Planificación" style="background-color:#FFF7D9;")
            .row
              .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
                figure.m-auto.col-6.col-md-7.col-lg-12
                  img(src="@/assets/curso/tema9/8.svg")
              .col-lg-8(style="place-self:center;")
                ul.lista-ul--separador.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Identificación de las partes interesadas.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Levantamiento de requerimientos.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Priorización de interesados y requerimientos.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Identificación de estándares.
          .tarjeta.color-acento-contenido.p-4.p-lg-5(titulo="Aseguramiento" style="background-color:#FFF7D9;")
            .row
              .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
                figure.m-auto.col-6.col-md-7.col-lg-12
                  img(src="@/assets/curso/tema9/9.svg")
              .col-lg-8(style="place-self:center;")
                ul.lista-ul--separador.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Seleccionar estándares.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Desarrollar las especificaciones.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Definiciones operacionales y métricas.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Proveer los recursos.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Asignar responsabilidades.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Conformar el plan de aseguramiento.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Auditorias de calidad.
          .tarjeta.color-acento-contenido.p-4.p-lg-5(titulo="Control" style="background-color:#FFF7D9;")
            .row
              .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
                figure.m-auto.col-6.col-md-7.col-lg-12
                  img(src="@/assets/curso/tema9/10.svg")
              .col-lg-8(style="place-self:center;")
                ul.lista-ul--separador.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Monitoreo de resultados específicos.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Determinación de varianzas.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Identificación de posibles acciones preventivas y correctivas.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Retroalimentación a los procesos de aseguramiento.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Inspección.
          .tarjeta.color-acento-contenido.p-4.p-lg-5(titulo="Mejora" style="background-color:#FFF7D9;")
            .row
              .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
                figure.m-auto.col-6.col-md-7.col-lg-12
                  img(src="@/assets/curso/tema9/11.svg")
              .col-lg-8(style="place-self:center;")
                ul.lista-ul--separador.mb-0
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Lecciones aprendidas.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Activos de procesos.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div(style="color:initial !important;") Ciclo PHVA. 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema9/6.png")
    
    p.mt-5(data-aos="fade-right") A continuación, se presentan las características generales para la gestión de calidad 

    .col-xl-10.m-auto.mt-4
      .row
        .col-md.pe-md-0.mb-3.mb-md-0(data-aos="fade-right")
          .h-100.p-4.text-center.text-white.cont_flecha_1(style="clip-path: polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 0 50%, 0% 0%);background-color:#FE502D;")
            h5.mb-0 Procesos de inicio de la gestión de calidad
        .col-md.ps-md-0.mb-3.mb-md-0(data-aos="fade-left")
          .h-100.p-4.text-center.text-white.cont_flecha_2(style="clip-path: polygon(90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%, 0% 0%);background-color:#2D54FE;")
            h5.mb-0 Procesos de planificación
    
    p.mt-4(data-aos="fade-right") Partiendo de la base de las características generales es importante conocer el plan de gestión de calidad:

    .cont_9_2.mt-5.pt-4.pb-4
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          .col-lg-8.mb-2
            .p-3(style="position:relative;background-color:#FFCA00;border-radius:4px;")
              div(style="position:absolute;right:0;bottom:-25px;z-index:2;")
                img(src="@/assets/curso/tema9/12.svg" style="width:55px;")
              h5.mb-0 Política de calidad
          .col-lg-9.ps-lg-4.mb-2
            .p-3(style="position:relative;background-color:#FFCA00;border-radius:4px;")
              div(style="position:absolute;right:0;bottom:-25px;z-index:2;")
                img(src="@/assets/curso/tema9/12.svg" style="width:55px;")
              h5.mb-0 Responsabilidades
          .col-lg-10.ps-lg-5.mb-2
            .p-3(style="position:relative;background-color:#FFCA00;border-radius:4px;")
              div(style="position:absolute;right:0;bottom:-25px;z-index:2;")
                img(src="@/assets/curso/tema9/12.svg" style="width:55px;")
              h5.mb-0 Metas
          .col-lg-10.m-auto.ps-lg-5.mb-2
            .p-3(style="background-color:#FFCA00;border-radius:4px;")
              h5.mb-0 Procesos, recursos y estándares 
        .col-lg-7(data-aos="fade-left" style="place-self:center;")
          p.mb-0 El anterior recurso evidencia aspectos que deberá contemplar el plan de gestión de calidad. Partir con las políticas que establecen los lineamientos y directrices de calidad, la forma en cómo estará organizada la empresa para aplicar la gestión de calidad, con sus respectivos responsables y responsabilidades, las metas que deberá alcanzar y lo que se debe hacer para alcanzarlas, estableciendo los recursos, procesos y estándares.
    
    TabsB.color-acento-botones.mt-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Gestión de la calidad" :icono="require('@/assets/curso/tema9/13.svg')")
        .row.p-4
          .col-lg-7.mb-4.mb-lg-0
            ul.lista-ul--separador.mb-0
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div #[strong Identificación de las partes interesadas:] son los individuos, grupos u organizaciones que pueden afectar, o verse afectados por una decisión, actividad o resultado de los productos o servicios ofertados por la organización. 
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div #[strong Priorización de las partes interesadas:] priorizar las partes interesadas conforme al poder e impacto que puedan tener sobre los servicios y productos de la organización. 
              li.mb-0.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div #[strong Identificación de los requerimientos:] detectar las necesidades de cada parte interesada mediante investigación, entrevistas, cuestionarios, observación, entre otros.
          .col-lg-5
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema9/14.png')
      .py-4.py-md-5(titulo="Aseguramiento de la calidad" :icono="require('@/assets/curso/tema9/15.svg')")
        .row.p-4
          .col-lg-7.mb-4.mb-lg-0
            p Según la guía de dirección de proyectos PMBOK el aseguramiento de la calidad consiste en auditar los requisitos de calidad y los resultados de las mediciones de control de calidad, para asegurar que se utilicen las normas de calidad y las definiciones operacionales adecuadas.
            p.mt-3 El plan de aseguramiento deberá incluir
            ul.lista-ul--separador.mb-0.mt-3.ps-lg-3
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Estructuración de desagregación del trabajo EDT.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Identificación de los requerimientos.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Identificación de las especificaciones.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Descripción de la actividad de aseguramiento. 
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Cronograma de actividades de aseguramiento.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Designación de responsables para la ejecución de actividades.
          .col-lg-5
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema9/16.png')
      .py-4.py-md-5(titulo="Auditorías de gestión de la calidad" :icono="require('@/assets/curso/tema9/17.svg')")
        .row.p-4
          .col-lg-7.mb-4.mb-lg-0
            p La auditoría de calidad, según PMBOK, es esencial en la gestión de proyectos. Es un proceso independiente que verifica si las actividades cumplen políticas y procedimientos, enfocándose en la ejecución, no en resultados. Evita confundirse con el control de resultados en la fase de ejecución.
            p.mt-3 Las auditorías pueden ser aplicadas internamente por el equipo de trabajo o externamente por auditores externos a la organización. Y sus objetivos son:
            ul.lista-ul--separador.mb-0.mt-3.ps-lg-3
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Identificar buenas y mejores prácticas.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Identificar las no conformidades, brechas y defectos.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Compartir las buenas prácticas, introducidas o implementadas en proyectos u organizaciones similares.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Contribuir en la mejora de la productividad y aportar al repositorio de las lecciones aprendidas de la organización.
          .col-lg-5
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema9/18.png')
      .py-4.py-md-5(titulo="Procesos de control de la calidad" :icono="require('@/assets/curso/tema9/19.svg')")
        .row.p-4
          .col-lg-7.mb-4.mb-lg-0
            p El control de la calidad según el PMBOK se define como el proceso de monitoreo y registro de los resultados de la ejecución de las actividades de control de la calidad a fin de evaluar el desempeño y recomendar los cambios necesarios. El control se aplica para:
            ul.lista-ul--separador.mb-0.mt-3.ps-lg-3
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Identificar las causas de una calidad deficiente del proceso o del producto y recomendar y/o implementar acciones para eliminarlas.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Validar que los entregables y el trabajo del proyecto cumplan con los requisitos especificados por los interesados clave para la aceptación final.
            p.mt-3 Existen diferentes herramientas para el control de la calidad como lo son:
            .row.mt-3
              .col-lg
                ul.lista-ul--separador.mb-0.ps-lg-3
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div Diagrama de causa efecto.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div Diagramas de flujo.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div Hojas de verificación.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div Diagramas de Pareto.
              .col-lg
                ul.lista-ul--separador.mb-0.ps-lg-3
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div Histogramas.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div Diagramas de control.
                  li.mb-2.d-flex
                    i.fas.fa-angle-right(style="color:#FE502D;")
                    div Diagramas de dispersión.
          .col-lg-5
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema9/20.png')
      .py-4.py-md-5(titulo="Inspección" :icono="require('@/assets/curso/tema9/21.svg')")
        .row.p-4
          .col-lg-7.mb-4.mb-lg-0
            p La inspección consiste en el examen del producto del trabajo o para determinar si cumple con los estándares documentados, pueden inspeccionarse los resultados de actividades particulares o el producto final.
            p.mt-3 Mediante la inspección se pretende:
            ul.lista-ul--separador.mb-0.mt-3.ps-lg-3
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Medir las características físicas del producto.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Examinar los productos para verificar la configuración.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Probar los productos para medir su rendimiento.
          .col-lg-5
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema9/22.png')
      .py-4.py-md-5(titulo="Procesos para la mejora de la calidad" :icono="require('@/assets/curso/tema9/23.svg')")
        .row.p-4
          .col-lg-7.mb-4.mb-lg-0
            p El control de la calidad conlleva hacia las mejoras en la calidad por lo que se denomina mejoramiento continuo. Para que este mejoramiento de la calidad sea permanente y continua se debe cumplir:
            ul.lista-ul--separador.mb-0.mt-3.ps-lg-3
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Reducir las diferencias, mejorar la satisfacción del cliente, mejorar la imagen e incrementar la competitividad.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Mayor eficiencia del tiempo y recursos.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Reducción de costos y mayor competitividad.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Nuevas oportunidades.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div La metodología para el mejoramiento de la calidad está basada en el ciclo PHVA.
          .col-lg-5
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema9/24.png')
      .py-4.py-md-5(titulo="Ciclo PHVA" :icono="require('@/assets/curso/tema9/25.svg')")
        .row.p-4
          .col-lg-7.mb-4.mb-lg-0
            ul.lista-ul--separador.mb-0
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div #[strong Planificar:] se deben identificar las actividades clave del proceso para alcanzar el resultado deseado. Esto implica recopilar datos, especificar detalles y definir las acciones necesarias para lograr el producto o servicio requerido.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div #[strong Hacer:] ejecutar el plan organizando, dirigiendo, asignando los recursos y supervisando la ejecución.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div #[strong Verificar:] recopilar datos de control y analizarlos, compararlos con los especificados inicialmente. Evaluar si se ha producido la mejora.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div #[strong Actuar:] realizar un nuevo ciclo PHVA, aplicar a gran escala las modificaciones, ofrecer retroalimentación y o mejora en la planificación.
          .col-lg-5
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema9/26.png')
    
    .cajon.color-primario.p-4.mt-5(style="background-color:#E0F4FE;" data-aos="flip-up")
      p.mb-0 Para garantizar el sistema de gestión de calidad es importante contar con los requerimientos mínimos legales para su implementación, los cuales se relacionan a continuación: 
    
    .row.justify-content-center.mt-3(@click="indicadorTarjetaFlip2 = false")
      .col-xl-8.col-lg-10.mb-4(data-aos="zoom-in-up")
        .h-100.p-4(style="background-color:#F6F6F6")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 6.
            i Responsabilidad de la dirección
          figure
            img.d-lg-flex.d-none(src="@/assets/curso/tema9/27.svg" alt="En la Figura 6 se presentan las acciones que la dirección debe llevar a cabo, las cuales incluyen el compromiso, enfoque, política, planificación, responsabilidad y revisión por la dirección.")
            img.d-lg-none.d-flex(src="@/assets/curso/tema9/27r.svg" alt="En la Figura 6 se presentan las acciones que la dirección debe llevar a cabo, las cuales incluyen el compromiso, enfoque, política, planificación, responsabilidad y revisión por la dirección.")
      .col-xl-8.col-lg-10.mb-4(data-aos="zoom-in-up")
        .h-100.p-4(style="background-color:#F6F6F6")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 7.
            i Gestión de recursos
          figure
            img.d-lg-flex.d-none(src="@/assets/curso/tema9/28.svg" alt="En la Figura 7 se presentan los componentes que comprende la gestión de recursos, los cuales incluyen provisión, recursos humanos, infraestructura y ambiente de trabajo.")
            img.d-lg-none.d-flex(src="@/assets/curso/tema9/28r.svg" alt="En la Figura 7 se presentan los componentes que comprende la gestión de recursos, los cuales incluyen provisión, recursos humanos, infraestructura y ambiente de trabajo.")
      .col-xl-8.col-lg-10.mb-4(data-aos="zoom-in-up")
        .h-100.p-4(style="background-color:#F6F6F6")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 8.
            i Realización del producto o servicio
          figure
            img.d-lg-flex.d-none(src="@/assets/curso/tema9/29.svg" alt="En la Figura 8 se presentan las actividades que intervienen en la realización de un producto o servicio, desde la planificación hasta el control y seguimiento.")
            img.d-lg-none.d-flex(src="@/assets/curso/tema9/29r.svg" alt="En la Figura 8 se presentan las actividades que intervienen en la realización de un producto o servicio, desde la planificación hasta el control y seguimiento.")
      .col-xl-8.col-lg-10.mb-4(data-aos="zoom-in-up")
        .h-100.p-4(style="background-color:#F6F6F6")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 9.
            i Medición de análisis y mejora
          figure
            img.d-lg-flex.d-none(src="@/assets/curso/tema9/30.svg" alt="En la Figura 9 se presentan las actividades que se deben llevar a cabo en la medición, análisis y mejora, las cuales incluyen generalidades, seguimiento, control, análisis y acciones.")
            img.d-lg-none.d-flex(src="@/assets/curso/tema9/30r.svg" alt="En la Figura 9 se presentan las actividades que se deben llevar a cabo en la medición, análisis y mejora, las cuales incluyen generalidades, seguimiento, control, análisis y acciones.")
      
</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    indicadorTarjetaFlip: true,
    indicadorTarjetaFlip2: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_9_1, .cont_9_1 *
  position: relative
.cont_9_1:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  bottom: 20px
  background: url(../assets/curso/tema9/2.png)
  background-size: cover
  background-positon: center
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  border-radius: 10px
.crd_hover_txt .crd_hover_txt--body
  position: absolute
  padding: 1.5rem
  width: 100%
  bottom: 0
  transition: all .5s ease-in-out
  transform: translateY(calc(100% - 3.85rem))
  background-color: #fff7e6
.crd_hover_txt:hover .crd_hover_txt--body
  transition: all .5s ease-in-out
  transform: translateY(0)
.lista_custom_1.lista-ol--separador li, .lista_custom_1.lista-ul--separador li
  border-color: #fff
.lista-ol--separador li, .lista-ul--separador li
  border-style: dotted
.tabs-a.color-acento-contenido .tabs-a__tab__selected
  color: #12263F !important
.cont_flecha_1
  position: relative
  right: -23px
.cont_flecha_2
  position: relative
  left: -23px
.cont_9_2, .cont_9_2 *
  position: relative
.cont_9_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #F6F6F6
.tabs-b.color-acento-botones .tabs-b__tab--active
  background-color: #FFFAE5
.tabs-b__content-item
  background-color: #FFFAE5
@media screen and (max-width: 768px)
  .cont_flecha_1
    right: 0 !important
  .cont_flecha_2
    left: 0 !important
</style>
