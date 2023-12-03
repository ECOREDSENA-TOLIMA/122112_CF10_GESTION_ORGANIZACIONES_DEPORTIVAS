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
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los estándares mínimos se rigen según el tamaño de la empresa conforme al número de trabajadores y se determinan desde la Resolución 312 de 2019. En la siguiente tabla se presentan los estándares mínimos requeridos para las empresas en Colombia en materia de seguridad y salud en el trabajo. 

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="fade-right")
      h5 Tabla 1. 
      span Estándares mínimos Resolución 312 de 2019 
    
    .tabla-a.color-acento-contenido.mt-5(data-aos="zoom-in-up") 
      table
        caption.fw-normal(style="background-color:#E8E8E8;") #[strong Nota.] Adaptado de la Resolución 312 de 2019.
        thead
          tr.bg-white
            th Empresas con < 10 trabajadores 
            th Empresas con 11 a 50 trabajadores 
            th Empresas con >50 trabajadores
        tbody
          tr
            td Asignación de persona que diseña el SGSST.
            td Asignación de persona que diseña el SGSST.
            td Asignación de persona que diseña e implementa el SGSST.
          tr
            td Afiliación al sistema.
            td Afiliación al sistema.
            td Afiliación al sistema.
          tr
            td Capacitación SST.
            td Plan anual de Capacitación SST.
            td Plan anual de Capacitación SST
          tr
            td Plan anual de trabajo.
            td Plan anual de trabajo.
            td Plan anual de trabajo.
          tr
            td 
            td Evaluaciones médicas ocupacionales.
            td Evaluaciones médicas ocupacionales.
          tr
            td 
            td Matriz identificación de peligros, evaluación, valoración riesgos.
            td Matriz identificación de peligros, evaluación, valoración riesgos.
          tr
            td 
            td Medidas de control. 
            td Medidas de control. 
          tr
            td 
            td Asignación de recursos para el SGSST.
            td Asignación de recursos para el SGSST.
          tr
            td 
            td Capacitación COPASST.
            td Capacitación COPASST.
          tr
            td 
            td Inducción y reinducción en SST.
            td Inducción y reinducción en SST.
          tr
            td 
            td Curso virtual en SST 50 horas. 
            td Curso virtual en SST 50 horas. 
          tr
            td 
            td Objetivos de SST.
            td Objetivos de SST.
          tr
            td 
            td Rendición de cuentas.
            td Rendición de cuentas.
          tr
            td 
            td Conformación y funcionamiento de comités: COPASST.
            td Conformación y funcionamiento de comités: COPASST.
          tr
            td 
            td Conformación y funcionamiento de comités: CONVIVENCIA, LABORAL.
            td Conformación y funcionamiento de comités: CONVIVENCIA, LABORAL.
          tr
            td 
            td Política en SST.
            td Política en SST.
          tr
            td 
            td Archivo y retención documental. SST.
            td Archivo y retención documental. SST.
          tr
            td 
            td Descripción sociodemográfica y diagnóstico condiciones de salud.
            td Descripción sociodemográfica y diagnóstico condiciones de salud.
          tr
            td 
            td Actividades de medicina de trabajo, actividades de prevención y promoción de salud. 
            td Actividades de medicina de trabajo, actividades de prevención y promoción de salud. 
          tr
            td 
            td Restricciones y recomendaciones médicas laborales.
            td Restricciones y recomendaciones médicas laborales.
          tr
            td 
            td Reporte de accidentes de trabajo y enfermedades laborales.
            td Reporte de accidentes de trabajo y enfermedades laborales.
          tr
            td 
            td Investigación de incidentes, accidentes, enfermedades laborales.
            td Investigación de incidentes, accidentes, enfermedades laborales.
          tr
            td 
            td Mantenimiento periódico de instalaciones, equipos, máquinas y herramientas.
            td Mantenimiento periódico de instalaciones, equipos, máquinas y herramientas.
          tr
            td 
            td Dotación y capacitación en EPP.
            td Dotación y capacitación en EPP.
          tr
            td 
            td Plan de prevención, preparación y respuestas frente a emergencias.
            td Plan de prevención, preparación y respuestas frente a emergencias.
          tr
            td 
            td Brigada de prevención, preparación y respuestas frente a emergencias.
            td Brigada de prevención, preparación y respuestas frente a emergencias.
          tr
            td 
            td Revisión por la alta dirección.
            td Revisión por la alta dirección.
          tr
            td 
            td 
            td Revisión por la alta dirección alcance de la auditoria de SGSST. 
          tr
            td 
            td 
            td Asignación de responsabilidades en SST.
          tr
            td 
            td 
            td Identificación de trabajadores que se dediquen en forma permanente a actividades de alto riesgo y cotización de pensión especial.
          tr
            td 
            td 
            td Evaluación inicial SST.
          tr
            td 
            td 
            td Matriz legal.
          tr
            td 
            td 
            td Mecanismos de comunicación. 
          tr
            td 
            td 
            td Identificación y evaluación para la adquisición de bienes y servicios.
          tr
            td 
            td 
            td Evaluación y selección de proveedores y contratistas.
          tr
            td 
            td 
            td Gestión del cambio. 
          tr
            td 
            td 
            td Perfiles de cargos.
          tr
            td 
            td 
            td Custodia de historias clínicas. 
          tr
            td 
            td 
            td Estilo de vida y entorno saludable. 
          tr
            td 
            td 
            td Servicios de higiene. 
          tr
            td 
            td 
            td Manejo de residuos. 
          tr
            td 
            td 
            td Registro y análisis estadístico de accidentes y enfermedades laborales. 
          tr
            td 
            td 
            td Frecuencia de accidentalidad. 
          tr
            td 
            td 
            td Severidad de la accidentalidad.
          tr
            td 
            td 
            td Proporción de accidentes mortales. 
          tr
            td 
            td 
            td Prevalencia de enfermedad laboral.
          tr
            td 
            td 
            td Incidencia de enfermedad laboral.
          tr
            td 
            td 
            td Ausentismo por causa médica.
          tr
            td 
            td 
            td Metodología para la identificación de peligros, evaluación y valoración de riesgos.
          tr
            td 
            td 
            td Identificación de sustancias catalogadas como cancerígenas o con toxicidad aguda.
          tr
            td 
            td 
            td Mediciones ambientales. 
          tr
            td 
            td 
            td Aplicación de medidas de prevención y control por parte de los trabajadores.
          tr
            td 
            td 
            td Procedimientos, instructivos internos de seguridad y salud en el trabajo. 
          tr
            td 
            td 
            td Inspecciones a instalaciones, maquinarias y equipos. 
          tr
            td 
            td 
            td Definición de indicadores de SGSST.
          tr
            td 
            td 
            td Auditoría anual. 
          tr
            td 
            td 
            td Planificación de la auditoría con el COPASST.
          tr
            td 
            td 
            td Acciones preventivas y/o correctivas.
          tr
            td 
            td 
            td Acciones de mejora conforme a revisión de alta dirección.
          tr
            td 
            td 
            td Acciones de mejora con base a investigaciones de accidentes de trabajo y enfermedades laborales. 
          tr
            td 
            td 
            td Plan de mejoramiento. 


 

      
      
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
