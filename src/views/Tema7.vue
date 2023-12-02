<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Sistema de gestión en seguridad y salud en el trabajo
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema7/1.png")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p La seguridad y salud en el trabajo según el Decreto 1072 de 2015, es entendida como la disciplina encargada de prevenir y proteger a personas, bienes materiales, locativos y en general a toda la organización frente a cualquier posible peligro que se presente en el medio laboral, ocasionado por las tareas laborales, condiciones u ambiente del trabajo. Las organizaciones deportivas se encuentran expuestas a múltiples riesgos que pueden afectar el bienestar de sus empleados e incluso de sus usuarios. Es responsabilidad de los líderes de estas organizaciones, asignar recursos y establecer mecanismos para la implementación de sistema de gestión en seguridad y salud en el trabajo que permitan identificar los peligros y, valorar, evaluar y controlar los riesgos a los que están expuestos para aplicar mejoras que garanticen sistemas eficientes y sostenibles en el tiempo. 
    
    br
    .p-4.p.lg-5.pt-lg-0.pt-0.mt-5(style="background-color:#F6F6F6;")
      .col-xl-8.m-auto.col-lg-10
        .p-3(style="background-color:#12263F;border-radius:20px;position:relative;top:-40px;" data-aos="zoom-in-down")
          p.mb-0.text-white Para implementar un sistema de gestión en seguridad y salud en el trabajo es importante seguir una serie de requerimientos mínimos legales como lo son: 

      .col-xl-10.m-auto.mt-5
        .row.bg-white.p-4.cont_numeral_1(style="border-radius:15px;position:relative;z-index:2;" data-aos="fade-right")
          .col-auto.ps-4.d-none.d-lg-block
            .h-100.p-5.d-flex.flex-wrap.align-content-center.text-center(style="background-color:#FFCA00;border-radius:0px 0px 15px 15px;height:150% !important;max-height:150% !important;position:relative;top:-40px;z-index:2;")
              h1.mb-0(style="font-size:54px;") 1
          .col.mb-4.mb-lg-0(style="place-self:center;")
            p.mb-0 #[strong La Resolución 0312 de 2019], que define los estándares mínimos del sistema de gestión de seguridad y salud en el trabajo en Colombia, de obligatorio cumplimiento de los empleadores y contratantes en los cuales se deben garantizar todas las condiciones para el funcionamiento y desarrollo de las actividades del sistema de gestión de seguridad y salud en el trabajo SGSST.
          .col-auto.d-none.d-md-block
            .h-100(style="background-color:#FFCA00;width:4.5px;height:fit-content;")
          .col-auto.m-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema7/2.svg")
        .row.bg-white.p-4.cont_numeral_2.mt-5(style="border-radius:15px;position:relative;z-index:2;" data-aos="fade-left")
          .col-auto.m-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema7/3.svg")
          .col-auto.d-none.d-md-block
            .h-100(style="background-color:#FE502D;width:4.5px;height:fit-content;")
          .col.mb-4.mb-lg-0(style="place-self:center;")
            p.mb-0 #[strong El Sistema de Gestión de la Seguridad y Salud en el Trabajo según el Decreto 1072 del 2015], está basado en el ciclo PHVA (Planear, Hacer, Verificar y Actuar); consiste en el desarrollo de un proceso lógico y por etapas, basado en la mejora continua y que incluye la política, la organización, la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y salud en el trabajo.
          .col-auto.ps-4.d-none.d-lg-block
            .h-100.p-5.d-flex.flex-wrap.align-content-center.text-center(style="background-color:#FE502D;border-radius:0px 0px 15px 15px;height:150% !important;max-height:150% !important;position:relative;top:-40px;z-index:2;")
              h1.mb-0.text-white(style="font-size:54px;") 2




 

      
      
</template>

<script>
export default {
  name: 'Tema7',
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
.cont_numeral_1, .cont_numeral_1 *
  position: relative
.cont_numeral_1:before
  content: ''
  position: absolute
  width: 17px
  height: 17px
  top: -14px
  left: 35px
  z-index: 0
  transform: rotate(244deg)
  background-color: #D1A90D
  clip-path: polygon(0 100%, 50% 0, 100% 100%)
.cont_numeral_1:after
  content: ''
  position: absolute
  width: 17px
  height: 17px
  top: -13.5px
  left: 170px
  z-index: 0
  transform: rotate(120deg)
  background-color: #D1A90D
  clip-path: polygon(0 100%, 50% 0, 100% 100%)
.cont_numeral_2, .cont_numeral_2 *
  position: relative
.cont_numeral_2:before
  content: ''
  position: absolute
  width: 17px
  height: 17px
  top: -14px
  right: 25px
  z-index: 0
  transform: rotate(120deg)
  background-color: #FE502D
  clip-path: polygon(0 100%, 50% 0, 100% 100%)
.cont_numeral_2:after
  content: ''
  position: absolute
  width: 17px
  height: 17px
  top: -13.5px
  right: 160px
  z-index: 0
  transform: rotate(248deg)
  background-color: #FE502D
  clip-path: polygon(0 100%, 50% 0, 100% 100%)
@media screen and (max-width: 992px)
  .cont_numeral_1:after, .cont_numeral_1:before,.cont_numeral_2:after, .cont_numeral_2:before
    display: none !important
</style>
