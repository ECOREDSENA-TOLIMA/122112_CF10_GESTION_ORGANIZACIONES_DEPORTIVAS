<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Sistema de gestión ambiental
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema8/1.png")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p #[strong El sistema de gestión ambiental, según la ISO 14000], es un sistema estructurado de gestión que incluye la estructura organizativa, la planificación de las actividades, las responsabilidades, las prácticas, los procesos, los procedimientos y los recursos para desarrollar, implantar, llevar a efecto, revisar y mantener al día los compromisos en materia de protección ambiental de una empresa. El compromiso y responsabilidad no solo se limita con el ámbito organizacional sino como responsabilidad de todos los que habitamos en el planeta, de cuidar y proteger nuestros recursos. 
        p.mt-4 Para su implementación, se debe determinar qué elementos se deben considerar para la organización en materia de protección ambiental para garantizar que el desarrollo de sus actividades no afecte negativamente el medio ambiente. Para que al interior de la empresa se pueda establecer el sistema de gestión ambiental se debe tener en cuenta los siguientes requisitos mínimos legales: 
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 #[strong La ISO 14000] es la norma ambiental internacional que establece los requisitos que debe cumplir cualquier organización que desee establecer, documentar, implantar, mantener y mejorar continuamente un sistema de gestión ambiental. Aplicable en organizaciones privadas o públicas, grandes, medianas y pequeñas y en cualquier sector. Se basa en dos elementos, la mejora continua y el cumplimiento legal. Y basado en esto, se centra en los siguientes elementos: 


    .col-xl-10.m-auto.mt-5
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-6.col-8(data-aos="zoom-in-up")
          .h-100.p-4.pt-2.m-auto.text-center(style="background-color:#B0C0D2;box-shadow:0px 4px 15px rgba(0,0,0,.1);border:4px #fff solid;border-radius:8px;")
            .text-end
              span.fw-bold(style="font-size:26px;color:#727997;") 01
            figure.m-auto.col-8.col-lg-12.col-md-12
              img(src="@/assets/curso/tema8/3.svg")
            p.mt-3.mb-0 Política ambiental
        .col-lg.mb-4.mb-lg-0.col-md-6.col-8(data-aos="zoom-in-up")
          .h-100.p-4.pt-2.m-auto.text-center(style="background-color:#FE502D;box-shadow:0px 4px 15px rgba(0,0,0,.1);border:4px #fff solid;border-radius:8px;")
            .text-end
              span.fw-bold(style="font-size:26px;color:#E23A19;") 02
            figure.m-auto.col-8.col-lg-12.col-md-12
              img(src="@/assets/curso/tema8/4.svg")
            p.mt-3.mb-0.text-white Planificación 
        .col-lg.mb-4.mb-lg-0.col-md-6.col-8(data-aos="zoom-in-up")
          .h-100.p-4.pt-2.m-auto.text-center(style="background-color:#2D54FE;box-shadow:0px 4px 15px rgba(0,0,0,.1);border:4px #fff solid;border-radius:8px;")
            .text-end
              span.fw-bold(style="font-size:26px;color:#95AEF0;") 03
            figure.m-auto.col-8.col-lg-12.col-md-12
              img(src="@/assets/curso/tema8/5.svg")
            p.mt-3.mb-0.text-white Implementación 
        .col-lg.mb-4.mb-lg-0.col-md-6.col-8(data-aos="zoom-in-up")
          .h-100.p-4.pt-2.m-auto.text-center(style="background-color:#12263F;box-shadow:0px 4px 15px rgba(0,0,0,.1);border:4px #fff solid;border-radius:8px;")
            .text-end
              span.fw-bold(style="font-size:26px;color:#424A53;") 04
            figure.m-auto.col-8.col-lg-12.col-md-12
              img(src="@/assets/curso/tema8/6.svg")
            p.mt-3.mb-0.text-white Verificación
        .col-lg.mb-4.mb-lg-0.col-md-6.col-8(data-aos="zoom-in-up")
          .h-100.p-4.pt-2.m-auto.text-center(style="background-color:#FFCA00;box-shadow:0px 4px 15px rgba(0,0,0,.1);border:4px #fff solid;border-radius:8px;")
            .text-end
              span.fw-bold(style="font-size:26px;color:#E3B50C;") 05
            figure.m-auto.col-8.col-lg-12.col-md-12
              img(src="@/assets/curso/tema8/7.svg")
            p.mt-3.mb-0 Revisión por la dirección
    
    .col-xl-7.m-auto.col-lg-9.mt-5
      .p-2.text-white.mt-5(style="background-color:#12263F;border:5px white solid;border-radius:5px;box-shadow:0px 0px 15px rgba(0,0,0,.2);" data-aos="zoom-in-down")
        p.mb-0.text-center A continuación, se presenta la documentación requerida para las empresas según la ISO 14000:
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-8.col-lg-10.col-xl-8
          img(src="@/assets/curso/tema8/8.jpg")
      .col-lg-8(style="place-self:center;")
        .row
          .col-lg-6
            .tarjeta-avatar-b.mb-4(data-aos="zoom-in-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema8/9.svg')
              .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
                .p-4
                  p.fw-bold.mb-0 Funciones, responsabilidades y responsables.
          .col-lg-6
            .tarjeta-avatar-b.mb-4(data-aos="zoom-in-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema8/10.svg')
              .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
                .p-4
                  p.fw-bold.mb-0 Registros de mantenimiento y calibración de equipos.
        .row
          .col-lg-6
            .tarjeta-avatar-b.mb-4(data-aos="zoom-in-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema8/11.svg')
              .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
                .p-4
                  p.fw-bold.mb-0 Registros de formación, capacitación, inducción en materia ambiental.
          .col-lg-6
            .tarjeta-avatar-b(data-aos="zoom-in-up")
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema8/12.svg')
              .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
                .p-4
                  p.fw-bold.mb-0 Reporte de incidentes, acciones correctivas y preventivas.
    .row.mt-4
      .col-lg-4
        .tarjeta-avatar-b.mb-4(data-aos="zoom-in-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/13.svg')
          .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
            .p-4
              p.fw-bold.mb-0 Información documentada de la evaluación de aspectos e impactos.
      .col-lg-4
        .tarjeta-avatar-b.mb-4(data-aos="zoom-in-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/14.svg')
          .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
            .p-4
              p.fw-bold.mb-0 Plan de comunicaciones.
      .col-lg-4
        .tarjeta-avatar-b.mb-0(data-aos="zoom-in-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/15.svg')
          .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
            .p-4
              p.fw-bold.mb-0 Evaluación documentada del cumplimiento de requisitos legales.
    .row.mt-4
      .col-lg-4
        .tarjeta-avatar-b.mb-4(data-aos="zoom-in-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/16.svg')
          .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
            .p-4
              p.fw-bold.mb-0 Registros de requisitos legales aplicables y que evidencien su cumplimiento.
      .col-lg-4
        .tarjeta-avatar-b.mb-4(data-aos="zoom-in-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/17.svg')
          .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
            .p-4
              p.fw-bold.mb-0 Procedimientos documentados de las operaciones y actividades que puedan causar impactos medioambientales significativos. 
      .col-lg-4
        .tarjeta-avatar-b.mb-0(data-aos="zoom-in-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/18.svg')
          .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
            .p-4
              p.fw-bold.mb-0 Programa de auditorías internas y registros de auditorías.
    .row.mt-4
      .col-lg-4
        .tarjeta-avatar-b.mb-4(data-aos="zoom-in-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/19.svg')
          .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
            .p-4
              p.fw-bold.mb-0 Política, objetivos, metas y programa.
      .col-lg-4
        .tarjeta-avatar-b.mb-4(data-aos="zoom-in-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/20.svg')
          .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
            .p-4
              p.fw-bold.mb-0 Seguimiento del comportamiento medioambiental, controles operacionales y de conformidad con objetivos y metas.
      .col-lg-4
        .tarjeta-avatar-b.mb-0(data-aos="zoom-in-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema8/21.svg')
          .tarjeta.tarjeta--gris(style="background-color:#F6F6F6;box-shadow:0px 5px 10px rgba(0,0,0,.1);")
            .p-4
              p.fw-bold.mb-0 Registros de revisión del sistema por la dirección. 






 

      
      
</template>

<script>
export default {
  name: 'Tema8',
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
<style lang="sass"></style>
