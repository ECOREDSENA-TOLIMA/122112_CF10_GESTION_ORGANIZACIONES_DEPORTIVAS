<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Estructura organizacional
    
    .row
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/1.png")
      .col-lg-8(data-aos="fade-left")
        p Antes de abordar el concepto de estructura organizacional es importante definir el concepto de empresa. La empresa según la guía de dirección de gestión de proyectos PMBOK (2021), se define como una unidad económica de producción, característica de la economía de mercado, en la cual combinando los factores de capital (herramientas, máquinas, entre otros) y trabajo, se realizan actividades de producción, distribución o realización de servicios, organizados adecuadamente con el objetivo de obtener con riesgo un beneficio.
        p.mt-4 Toda empresa se caracteriza por tener objetivos (definidos o no), que persiguen un fin, sea económico, social u otro. Para el logro de estos objetivos requiere que exista una adecuada interacción, coordinación y sincronización de todos los elementos que la conforman. Además, deberá establecer mecanismos para buscar la eficacia y eficiencia organizacional en la producción de bienes o servicios orientados a satisfacer las necesidades del mercado.

    .cajon.color-primario.p-4.mt-4(style="background-color:#DFE5FF;" data-aos="flip-up")
      p.mb-0 Asimismo, es importante tener en cuenta que existen diferentes tipos de empresa, según su tamaño, el dominio o propiedad de esta, su forma jurídica y según su actividad, como se muestra a continuación, en la siguiente infografía:
    
    .cont_1_1.mt-5.pt-5.pb-5
      .col-xl-10.m-auto
        ImagenInfografica.color-primario.imageninfografica1(data-aos="zoom-in-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/3.svg')
          .tarjeta.color-acento-botones.p-4.text-white(x="12%" y="85%" numero="+" style="background-color:#12263F;")
            .h5.mb-2 Según su tamaño
            ul.lista-ul.mb-0
              li.mb-2.d-flex
                i.fas.fa-angle-right
                | Pequeñas empresas
              li.mb-2.d-flex
                i.fas.fa-angle-right
                | Medianas empresas
              li.mb-2.d-flex
                i.fas.fa-angle-right
                | Grandes empresas
          .tarjeta.color-acento-botones.p-4.text-white(x="38%" y="85%" numero="+" style="background-color:#12263F;")
            .h5.mb-2 Según su propiedad
            ul.lista-ul.mb-0
              li.mb-2.d-flex
                i.fas.fa-angle-right
                div #[strong Privadas:] propiedad de particulares o inversionistas privados.
              li.mb-2.d-flex
                i.fas.fa-angle-right
                div #[strong Públicas:] propiedad del estado o entidades públicas.
              li.mb-2.d-flex
                i.fas.fa-angle-right
                div #[strong Mixtas:] propiedad compartida entre entidades públicas y particulares.
          .tarjeta.color-acento-botones.p-4.text-white(x="63%" y="85%" numero="+" style="background-color:#12263F;")
            .h5.mb-2 Según su forma jurídica
            ul.lista-ul.mb-0
              li.mb-2.d-flex
                i.fas.fa-angle-right
                div #[strong Empresas de persona natural:] empresa regida por una persona – empresario individual.
              li.mb-2.d-flex
                i.fas.fa-angle-right
                div #[strong Empresa social:] empresas con una estructura jurídica independiente, que puede incluir múltiples accionistas o socios.
          .tarjeta.color-acento-botones.p-4.text-white(x="89%" y="85%" numero="+" style="background-color:#12263F;")
            .h5.mb-2 Según su actividad
            ul.lista-ul.mb-0
              li.mb-2.d-flex
                i.fas.fa-angle-right
                div #[strong Sector económico:] empresas que operan en diferentes sectores económicos, como salud, educación, deporte, turismo, transporte, entre otros.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además del concepto de empresa, es importante reconocer el término de organización. La organización según DAFT (1992) es una entidad social orientada hacia la consecución de metas, que se estructura deliberadamente en un sistema de actividades con límites perfectamente identificables. 

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/5.png")
      .col-lg-8(data-aos="fade-left")
        p Toda organización necesariamente deberá tener una estructura funcional que le permita alcanzar sus objetivos. 
        p En las empresas donde no poseen una clara definición de su estructura funcional es común identificar las siguientes problemáticas: 
        ul.lista-ul--separador.mb-0.mt-4
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Sobrecarga laboral del director de la empresa. 
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Ausencia de aspectos estratégicos que permitan ser más competitivos a la empresa.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Confusión en el rol, funciones, responsabilidades y papel de cada integrante de la organización.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Exposición a altos niveles de estrés asociados a riesgos psicosociales por: altos ritmos de trabajo, conflictos interpersonales, multiplicidad de funciones, entre otros riesgos ocasionados por la ausencia de estructura organizacional.

    p.mt-5(data-aos="fade-right") La estructura organizacional según MINTZBERG (2005), es el conjunto de todas las formas en las que se divide el trabajo en tareas distintas, consiguiendo luego la coordinación de las mismas. Las organizaciones se estructuran para ser más eficientes, para alcanzar sus objetivos y responder a las necesidades del mercado y así mismo, definen las políticas empresariales para aprovechar las oportunidades que brinda el entorno, de acuerdo con sus capacidades y recursos. Para la estructuración organizacional se deberá tener en cuenta lo siguiente:

    .row.mt-5.justify-content-center
      .col-md-8.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100(style="box-shadow:0px 3px 15px rgba(0,0,0,.1);")
          .tarjeta-numerada__numero
            .h2(style="color:initial;") 1
          p.text-center.mb-0 Ubicación de tareas especializadas por medio de la agrupación del personal en equipos, procesos, áreas o departamentos según la empresa.
      .col-md-8.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-numerada.color-acento-botones.p-5.h-100(style="box-shadow:0px 3px 15px rgba(0,0,0,.1);")
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.text-center.mb-0 Relaciones de subordinación según la toma de decisiones, niveles de jerarquía y alcance de la supervisión y control.
      .col-md-8.col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta-numerada.color-primario.p-5.h-100(style="box-shadow:0px 3px 15px rgba(0,0,0,.1);")
          .tarjeta-numerada__numero
            .h2.text-white 3
          p.text-center.mb-0 Diseño de los sistemas y mecanismos de coordinación entre individuos y departamentos, tanto a nivel horizontal como vertical.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el recurso anterior se relacionan aspectos importantes para estructurar una organización. Primero, se deberá segmentar, clasificar y agrupar la empresa en áreas, procesos, equipos de trabajo. Esto dependerá del tamaño y tipo de empresa. Segundo, se deberá definir las relaciones de subordinación, autoridad y toma de decisiones.  Por último, el tercer aspecto habla de cómo se coordinará toda esta estructura para alinearse hacia un objetivo común. Con estos, una organización podrá tener una estructura funcional que permita trabajar de forma coordinada y con roles claros dentro de la empresa; sin embargo, a estos tres aspectos es fundamental incluir el aspecto que le permitirá a la empresa ser competitiva, que es el enfoque estratégico.
    
    .cajon.color-primario.p-4.mt-5(style="background-color:#E0F4FE;" data-aos="flip-up")
      p.mb-0 Cuando una empresa trabaja sin estrategia, aunque tenga una estructura organizacional bien definida, se limitará a operar y responder ante las necesidades que le imponga el mercado. Sin embargo, la ausencia de estrategia, no le permitirá aprovechar nuevas oportunidades de crecimiento que le ofrece el mercado, anticiparse y gestionar de la mejor manera los constantes cambios que afectan a una organización. En conclusión, una estructura organizacional sin estrategia se limitará a su capacidad de adaptarse y operar de forma reactiva. Mientras que la inclusión del aspecto estratégico permitirá trabajar de forma proactiva, aprovechando las oportunidades que ofrece el mercado mediante la potencialización de sus fortalezas y control de sus debilidades.  

    .col-xl-7.m-auto.col-lg-9.mt-5
      .p-2.text-white.mt-5(style="background-color:#12263F;border:5px white solid;border-radius:9px;box-shadow:0px 0px 15px rgba(0,0,0,.2);" data-aos="zoom-in-down")
        p.mb-0 Por consiguiente, se presentan los pasos a seguir para definir la estructura organizacional:
    .col-xl-9.m-auto.col-lg-10.mt-5(data-aos="zoom-in-up")
      figure.mt-5
        img(src="@/assets/curso/tema1/7.svg")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/8.png")
      .col-lg-8(data-aos="fade-left")
        p El anterior recurso muestra tres pasos básicos para definir la estructura organizacional. El primer paso parte consiste en definir la estrategia, en donde se define la ruta que seguirá la empresa para que esta logre ser más competitiva, teniendo en cuenta sus características, recursos, fortalezas, aspectos a mejorar e identificando las oportunidades que brinda el mercado. Luego de tener clara la estrategia, se define cómo organizar el recurso humano y el trabajo para lograr el cumplimiento de esta estrategia. Se define el nivel de autoridad, responsabilidad, toma de decisiones, nivel jerárquico y relaciones entre cada una de las partes que conforman la organización. Finalmente, se establecen objetivos enfocados a cumplir la estrategia, involucrando en su diseño a cada parte del talento humano definido en la estructura, estableciendo su papel y responsabilidad para dar cumplimiento a la estrategia y objetivos organizacionales. 
        .cajon.color-primario.p-4.mt-4(style="background-color:#E0F4FE;" data-aos="flip-up")
          p.mb-0 Conforme a lo anterior, la estructura organizacional es fundamental para dar un orden y organización a todo el proceso interno de la empresa. Por medio de la estructura organizacional se logra:

    .row.mt-5.justify-content-center
      .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100
          .row
            .col-auto.pe-0
              .h-100.p-2.d-flex.flex-wrap.align-content-center.align-items-center.text-center(style="background-color:#FE502D;border-radius:10px 0px 0px 10px;box-shadow:0px 3px 10px rgba(0,0,0,.12);")
                figure.m-auto
                  img(src="@/assets/curso/tema1/9.svg" style="max-height:50px;")
            .col.ps-0
              .h-100.p-4.d-flex.flex-wrap.align-content-center(style="background-color:#F6F6F6;box-shadow:0px 3px 10px rgba(0,0,0,.12);border-radius:0px 10px 10px 0px;")
                h5.mb-0 Determinar funciones
      .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100
          .row
            .col-auto.pe-0
              .h-100.p-2.d-flex.flex-wrap.align-content-center.align-items-center.text-center(style="background-color:#2D54FE;border-radius:10px 0px 0px 10px;box-shadow:0px 3px 10px rgba(0,0,0,.12)")
                figure.m-auto
                  img(src="@/assets/curso/tema1/10.svg" style="max-height:50px;")
            .col.ps-0
              .h-100.p-4.d-flex.flex-wrap.align-content-center(style="background-color:#F6F6F6;box-shadow:0px 3px 10px rgba(0,0,0,.12);border-radius:0px 10px 10px 0px;")
                h5.mb-0 Descentralización de las decisiones
      .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100
          .row
            .col-auto.pe-0
              .h-100.p-2.d-flex.flex-wrap.align-content-center.align-items-center.text-center(style="background-color:#FFCA00;border-radius:10px 0px 0px 10px;box-shadow:0px 3px 10px rgba(0,0,0,.12)")
                figure.m-auto
                  img(src="@/assets/curso/tema1/11.svg" style="max-height:50px;")
            .col.ps-0
              .h-100.p-4.d-flex.flex-wrap.align-content-center(style="background-color:#F6F6F6;box-shadow:0px 3px 10px rgba(0,0,0,.12);border-radius:0px 10px 10px 0px;")
                h5.mb-0 Asignación de responsabilidades y resultados
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        p Otro aspecto a considerar al definir la estructura organizacional, cómo clasificar u organizar la empresa en áreas o departamentos, denominado departamentalización. A continuación, se presentan los diferentes tipos que existen. 
        .row.mt-4
          .col-lg
            ul.lista-ul--separador.mb-0
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Departamentalización por funciones.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Departamentalización por territorios.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Departamentalización por productos.
          .col-lg
            ul.lista-ul--separador.mb-0
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Departamentalización por procesos.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Departamentalización por clientes o canales de distribución.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Departamentalización combinada.
      .col-lg-3(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/12.png")

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al definir la estructura organizacional, la empresa deberá decidir el grado y delegación de la responsabilidad, lo cual implica, indicar si la organización es centralizada (cuando la toma de decisiones es absolutamente a cargo del director o descentralizada cuando los niveles más bajos del organigrama se les incrementa la autonomía y responsabilidad al asignarle la posibilidad de tomas de decisiones a su nivel), es decir, si todas las decisiones se centran en alta dirección, esto acarreará altos niveles de carga para este departamento. Si se asignan niveles de responsabilidad a otros niveles la alta dirección podrá evitar la pérdida de tiempo en decisiones rutinarias que se pueden delegar y se podrá dedicar a acciones en las que realmente sí es imprescindible. 
    
    .col-xl-11.m-auto.col-lg-9.mt-5
      .p-2.text-white.mt-5(style="background-color:#12263F;border:5px white solid;border-radius:5px;box-shadow:0px 0px 15px rgba(0,0,0,.2);" data-aos="zoom-in-down")
        p.mb-0.text-center Según la guía de dirección de proyectos PMBOK existen nuevas tendencias en estructuración organizacional, indicando las siguientes características:
    
    SlyderF.mt-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/14.png')
        h5.text-center(style="color:initial;") Estructura flexible y adaptable
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/15.png')
        h5.text-center(style="color:initial;") Autoridad basada en conocimiento
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/16.png')
        h5.text-center(style="color:initial;") Alto grado de descentralización
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/17.png')
        h5.text-center(style="color:initial;") Unidades estructurales pequeñas autogestionadas con capacidad de integración en redes
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/18.png')
        h5.text-center(style="color:initial;") Personal con alta capacidad, creatividad e innovación, alta profesionalidad
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/19.png')
        h5.text-center(style="color:initial;") Alta cooperación e integración
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/20.png')
        h5.text-center(style="color:initial;") Trabajo en equipo
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/21.png')
        h5.text-center(style="color:initial;") Transfuncionalidad
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/22.png')
        h5.text-center(style="color:initial;") Información bidireccional
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/23.png')
        h5.text-center(style="color:initial;") Dirección participativa, cooperativa
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/24.png')
        h5.text-center(style="color:initial;") Discusión sin imposición de jerarquías
      .tarjeta.color-acento-contenido.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema1/25.png')
        h5.text-center(style="color:initial;") Comunicación entre todos los niveles y unidades organizativas en tiempo real
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p La estructura organizacional tradicional de toma de decisiones exclusivas para la alta dirección y nivel estrictamente operativo para el resto de los niveles ya es poco funcional para las empresas del presente, mediadas por la alta competencia producto de una oferta variada y especializada que la tecnología y globalización han permitido.
        p.mt-4 Por lo tanto, las organizaciones no pueden ser limitadas, deberán incentivar la creatividad y el conocimiento para generar procesos de innovación. Se busca fomentar la iniciativa individual, el alto compromiso de los empleados, de forma que dediquen su esfuerzo en colaborar a cumplir los objetivos en común que tiene la organización. Para tal fin, ellos deberán tener el poder de toma de decisiones, información veraz sobre el desarrollo de las actividades de la empresa alineado con su estrategia, y ser recompensados por las actividades que realizan. 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/26.png")
    
    p.mt-4(data-aos="fade-right") Es decir, la tendencia de la estructuración tradicional va cambiando para eliminar la burocracia y niveles jerárquicos, ya que limitan el nivel de eficacia e innovación. Estas dan paso a equipos de trabajo multidisciplinarios, encargados de procesos comunicándose en redes horizontales.

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema1/27.png")
      .col-lg-7(data-aos="fade-left")
        p A continuación, se describen los cambios que han surgido en los últimos años en la estructura organizacional:
        ul.lista-ul--separador.mb-0.mt-4
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Disminución de distancias entre los niveles organizacionales.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Disminución de jerarquías.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Acceso a la toma de decisiones en cada uno de los niveles en la organización. 
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Acceso a la información y a rutas estratégicas. 
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Descentralización de las tareas.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Aparición del teletrabajo.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Tendencia a la subcontratación.
          li.mb-0.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Mejora de relaciones con clientes, proveedores y distribuidores.

    .cajon.color-primario.p-4.mt-5(style="background-color:#DFE5FF;" data-aos="flip-up")
      p.mb-0 Las estructuras organizacionales están diseñadas para orientar a cada miembro de la empresa sobre su rol tanto en la empresa como en cada proceso en el que interviene y el orden jerárquico de dependencia. Se encuentran estructuras organizacionales piramidales donde predomina el orden jerárquico y la organización por áreas de trabajo. En otras estructuras no importa tanto el orden jerárquico sino el rol que desempeña en un proceso determinado. La estructura debe permitir la interacción entre los procesos con las líneas de negocio de la empresa, orientando a la organización al cumplimiento de los resultados más que en la tarea para lograrlos. 
        
      


 

      
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    indicadorTarjetaFlip: true,
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
.cont_1_1
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background: url(../assets/curso/tema1/2.png)
  background-size: cover
  background-positon: center
.imageninfografica1 .img-infografica__item .img-infografica__item__dot:before, .img-infografica__item .img-infografica__item__dot:after
  background-color: #12263F !important
  opacity: 1
.imageninfografica1 .img-infografica__item
  border-radius: 100%
.imageninfografica1 .img-infografica__item, .img-infografica-b__item
  width: 4%
.imageninfografica1.img-infografica.color-primario .img-infografica__item__numero, .img-infografica-b.color-primario .img-infografica__item__numero
  color: #fff
.lista-ol--separador li, .lista-ul--separador li
  border-style: dotted
.slyder-f__btn i
  color: #5A5A5A
</style>
