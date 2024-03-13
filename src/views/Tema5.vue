<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Liderazgo organizacional
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema5/1.png")
      .col-lg-8(data-aos="fade-left")
        p Liderazgo es la capacidad de establecer la dirección e influenciar y alinear a los demás hacia un mismo fin, motivándolos y comprometiéndolos hacia la acción y haciéndolos responsables por su desempeño. El liderazgo es entendido como “cualidades de personalidad y capacidad que favorecen la guía y el control de otros individuos” #[strong (Diccionario de Ciencias de la conducta, 1956)].
        p.mt-4 Los constantes cambios que han sufrido las organizaciones producto de la tecnología, globalización, competencia, hace que las demandas organizacionales requieran de otro tipo de líderes, con una visión del mundo abierta al continuo cambio, que oriente a la organización en la consecución de las metas trazadas. El liderazgo basado en la comunicación fluida, orientación en equipo, estrategias visionarias, toma de decisiones permitiendo la participación, para que todos en una organización sepan de dónde vienen, dónde están y hacia dónde van.
    
    p.mt-4(data-aos="fade-right") La predisposición al cambio y capacidad de innovación permite orientar la empresa al continuo mejoramiento.  A continuación, se presentan algunas habilidades personales que debe poseer un líder:

    .row.mt-4
      .col-lg(data-aos="zoom-in")
        ul.lista-ul--separador.mb-0
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Motivación de logro.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Confianza en sí mismo.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Compromiso.
      .col-lg(data-aos="zoom-in")
        ul.lista-ul--separador.mb-0
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Ejemplo.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Influencia.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Persuasión.
      .col-lg(data-aos="zoom-in")
        ul.lista-ul--separador.mb-0
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Empatía.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Comunicación.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Pensamiento estratégico.
      .col-lg(data-aos="zoom-in")
        ul.lista-ul--separador.mb-0
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div No temer a tomar riesgos.
          li.mb-2.d-flex
            i.fas.fa-angle-right(style="color:#FE502D;")
            div Optimista.
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además de lo anterior, es importante establecer que existen diferentes tipos de liderazgo según la empresa y su estructura organizacional:

    .cont_5_1.mt-5.pt-5.pb-5
      SlyderBCustom.cont_slyder(:datos="datosSlyder1")

    .cajon.color-primario.p-4.mt-5(style="background-color:#DFE5FF;" data-aos="flip-up")
      p.mb-0 El líder debe tener pensamiento estratégico para hacer transformaciones en la gente, inspirarlos hacia metas comunes y valores compartidos, construir equipos eficaces y ganar consensos, pues el líder estratégico entiende a la organización como un todo y sabe comunicar la visión y misión estratégica.


      
      
</template>

<script>
import SlyderBCustom from '../components/SlyderBCustom.vue'
export default {
  name: 'Tema5',
  components: {
    SlyderBCustom,
  },
  data: () => ({
    indicadorTarjetaFlip: true,
    datosSlyder1: [
      {
        titulo: 'Liderazgo autocrático o autoritario',
        texto:
          'El jefe es el único comunicador. Él decide y demanda. No solicita la opinión de sus subordinados y da las instrucciones de cómo, cuándo y dónde llevar a cabo una tarea para luego supervisar su ejecución. Empleado usualmente cuando no existe tiempo para explicar detalles sobre asuntos y/o en organizaciones tradicionales.',
        imagen: require('@/assets/curso/tema5/3.png'),
      },
      {
        titulo: 'Liderazgo participativo',
        texto:
          'El jefe comunica acerca de la situación y resultados, se retroalimenta y toma decisiones. El trabajo en equipo es esencial.',
        imagen: require('@/assets/curso/tema5/4.png'),
      },
      {
        titulo: 'Liderazgo persuasivo',
        texto: 'Intenta convencer a sus subordinados sobre sus ideas.',
        imagen: require('@/assets/curso/tema5/5.png'),
      },
      {
        titulo: 'Liderazgo delegativo',
        texto:
          'Cede a los subordinados la autoridad necesaria para resolver problemas tomar decisiones, dándole una consolidación sólida a la organización, para que no dependa de un líder único, sino que el conocimiento sea distribuido.',
        imagen: require('@/assets/curso/tema5/6.png'),
      },
      {
        titulo: 'Liderazgo transformacional',
        texto:
          'Potencializa el crecimiento personal y profesional de los integrantes de una organización. Permite al líder beneficiarse de los conocimientos y experiencia de los subordinados para tener mejores ideas para cumplir una misión.',
        imagen: require('@/assets/curso/tema5/7.png'),
      },
      {
        titulo: 'Liderazgo transaccional',
        texto:
          'El líder usa técnicas para motivar a los subordinados a trabajar ofreciendo recompensas o amenazando con castigos, asigna tareas por escrito, delinea las condiciones para que una misión se cumpla, da a conocer solamente lo que el subordinado ha hecho incorrectamente. Este tipo de liderazgo genera compromisos a corto plazo del equipo de trabajo y produce temor a tomar riesgos e innovar.',
        imagen: require('@/assets/curso/tema5/8.png'),
      },
    ],
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
.cont_5_1, .cont_5_1 *
  position: relative
.cont_5_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #E9EDFF
.lista-ol--separador li, .lista-ul--separador li
  border-style: dotted
.cont_slyder .row
  flex-direction: row-reverse !important
</style>
