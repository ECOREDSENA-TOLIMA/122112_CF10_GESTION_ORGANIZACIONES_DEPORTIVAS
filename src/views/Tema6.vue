<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Estrategias en dirección en la gestión del talento humano
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La dirección tradicional, en donde el director es el único que toma las decisiones y el resto de la organización ejecuta, es una forma directiva que ya no va con las empresas actuales. Este tipo de dirección genera que el director se cargue de tantas tareas y pase gran parte de su tiempo apagando incendios, controlando las acciones urgentes y quitando el valioso tiempo para acciones importantes como son las estratégicas en donde el director es imprescindible.

    p.mt-5(data-aos="fade-right") Un dirigente exitoso es quien asume riesgos al iniciar o emprender un proyecto, lo supera, lo convierte en un hábito y después inicia un nuevo reto, después que delega adecuadamente el primero. Un director que no delegue está condenado al fracaso.

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-secundario
          .text-small(numero="1" titulo="Características de la delegación de actividades") 
            ul.lista-ul--separador.mb-0.mt-4
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Confiar encargos y controles a subordinados.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Brindar la libertad en la toma de decisiones.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Señalar los objetivos. 
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Ceder facultades y atribuciones. 
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Confiar responsabilidades.
              li.mb-4.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Asignar funciones.
          .text-small(numero="2" titulo="Barreras y limitaciones para delegar") 
            ul.lista-ul--separador.mb-0.mt-4
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div No conocer bien a su equipo de trabajo. 
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div No confiar en sus capacidades.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Temor en perder su autoridad.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Pensar que solo el director sabe hacer bien las cosas.
              li.mb-4.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Paradigmas y resistencia al cambio. 
          .text-small(numero="3" titulo="Beneficios de delegar") 
            ul.lista-ul--separador.mb-0.mt-4
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Incremento en la formación y desarrollo de los empleados de la organización.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Incrementa los grados de motivación y sentido de pertenencia de los miembros de la organización.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Optimiza la eficacia y eficiencia directiva al aprovechar el tiempo en acciones realmente relevantes para el directivo.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Incrementa el grado de comunicación.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Incrementa la satisfacción del cliente al mejorar la calidad del servicio.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Incrementa la satisfacción laboral fomentando un clima favorecedor al trabajo en equipo.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Mayor sentido de reconocimiento en la empresa.
              li.mb-4.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Estimulo de la creatividad, iniciativa, dando camino a la continua innovación y mejora de la empresa.
          .text-small(numero="4" titulo="Dirección por objetivos y resultados") 
            p.mt-3 En un modelo de dirección tradicional, el director es quien conoce de donde viene la empresa, en donde esta y hacia dónde va, mientras que el resto de las personas que integran la organización solo ejecutan su tarea pero sin conocer hacia dónde va la empresa. 
            p.mt-3 Los objetivos y resultados parten de una estrategia organizacional, que necesariamente deberá involucrar a cada una de las partes que la integran.
            p.mt-3 Por lo tanto, luego de definir la estrategia organizacional se deberán establecer los objetivos y las metas esperadas. En este caso la dirección será orientada a un fin, el mismo fin que persigue la organización con su estrategia. Los objetivos son los fines y resultados que pretenden alcanzarse, son los que determinan el éxito de todo proyecto.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema6/2.png")
    
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema6/3.png")
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-secundario
          .text-small(numero="1" titulo="Elementos para tener en cuenta en la dirección por objetivos") 
            ul.lista-ul--separador.mb-0.mt-4
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Los objetivos deberán elaborarse en conjunto, en equipo contando con las opiniones de cada parte.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Antes de realizar un plan se debe tener claridad hacia donde se pretende ir.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Cuanto más claro se tenga la meta, mayores posibilidades de éxito se tendrá.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div No se trata de hacer es de alcanzar.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Reconocer el esfuerzo y premiar los resultados.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div No se debe decir a la persona o equipo de trabajo que hacer, sino que se espera que logre.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Los resultados se evalúan conforme a los objetivos previamente establecidos.
              li.mb-4.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div El objetivo es una anticipación del resultado esperado.
          .text-small(numero="2" titulo="Pilares clave de la dirección por objetivos") 
            p.mt-3 Participación en la construcción de metas de las personas que serán las encargadas de lograrlas, para garantizar un mayor nivel de compromiso y sentido de pertenencia.
            p.mt-3 Definir claramente lo que se pretende lograr, en lo posible cuantificar. Más que pensar en objetivos, fijar resultados esperados.
            p.mt-3 Dirigir por objetivos es dirigir por resultados y de esta misma forma será la medición y evaluación de cada parte.
          .text-small(numero="3" titulo="Dirección y control del proceso") 
            ul.lista-ul--separador.mb-0.mt-4
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Observación de los logros alcanzados en cada fase según los criterios de medida conforme a los objetivos estipulados.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Adopción de medidas correctivas en caso de identificarlas.
              li.mb-2.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Aplicación de sistemas más convenientes en recompensa y motivación conforme al esfuerzo en el cumplimiento del plan: felicitar, remunerar, disciplinar.
              li.mb-4.d-flex
                i.fas.fa-angle-right(style="color:#FE502D;")
                div Fijar sistemas de información, precisando los datos críticos que se requieren, cuándo, cómo, dónde, por qué y quién los necesita.





 

      
      
</template>

<script>
export default {
  name: 'Tema6',
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
.lista-ol--separador li, .lista-ul--separador li
  border-style: dotted
</style>
