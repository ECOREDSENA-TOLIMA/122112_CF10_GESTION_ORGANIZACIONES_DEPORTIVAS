<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Organigrama organizacional
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los organigramas representan gráficamente la estructura organizacional, distribuyendo en departamentos o áreas funcionales de la empresa y las relaciones que existen entre ellos. Como se mencionó anteriormente, existen diferentes tipos de estructuras funcionales. Conforme a ellas, la organización definirá qué tipo de organigrama emplear. El organigrama es de gran importancia, ya que deberá expresar de forma simple, concreta lo que se pretende con la estructura organizacional. 
    
    p.mt-5.fw-bold(data-aos="fade-right") Los organigramas deberán cumplir las siguientes características: 

    .row.mt-5.justify-content-center
      .col-md-8.col-lg.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100(style="box-shadow:0px 3px 15px rgba(0,0,0,.1);")
          .tarjeta-numerada__numero
            .h2(style="color:initial;") 1
          p.text-center.mb-0 Reflejar con exactitud la estructura de la organización evitando información confusa o innecesaria. 
      .col-md-8.col-lg.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-botones.p-5.h-100(style="box-shadow:0px 3px 15px rgba(0,0,0,.1);")
          .tarjeta-numerada__numero
            .h2.text-white 2
          p.text-center.mb-0 A medida que la organización vaya cambiando se deberá ir ajustando el organigrama para mantener dicha información actualizada. 
      .col-md-8.col-lg.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100(style="box-shadow:0px 3px 15px rgba(0,0,0,.1);")
          .tarjeta-numerada__numero
            .h2.text-white 3
          p.text-center.mb-0  Debe ser de fácil comprensión. 
    
    p.mt-5(data-aos="fade-right") Existen diferentes tipos de organigramas que se adaptan conforme a las necesidades de la estructura organizacional.

    .col-xl-10.m-auto.mt-5
      .row.justify-content-center
        .col-xl-7.mb-5(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema2/2.svg")
        .col-xl-5.mb-5(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema2/3.svg")
        .col-xl-8(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema2/4.svg")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/5.png")
      .col-lg-8(data-aos="fade-left")
        p Asimismo, existen dos tipos de estructuras, anchas y altas:
        .row.mt-5.justify-content-center.mt-4
          .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
            .h-100
              .row
                .col-auto.pe-0
                  .h-100.p-2.d-flex.flex-wrap.align-content-center.align-items-center.text-center(style="background-color:#FE502D;border-radius:10px 0px 0px 10px;box-shadow:0px 3px 10px rgba(0,0,0,.12);")
                    figure.m-auto
                      img(src="@/assets/curso/tema1/9.svg" style="max-height:50px;")
                .col.ps-0
                  .h-100.p-4.d-flex.flex-wrap.align-content-center(style="background-color:#F6F6F6;box-shadow:0px 3px 10px rgba(0,0,0,.12);border-radius:0px 10px 10px 0px;")
                    h5.mb-0 Estructura alta
          .col-lg.col-md-8.mb-4.mb-lg-0(data-aos="zoom-in")
            .h-100
              .row
                .col-auto.pe-0
                  .h-100.p-2.d-flex.flex-wrap.align-content-center.align-items-center.text-center(style="background-color:#2D54FE;border-radius:10px 0px 0px 10px;box-shadow:0px 3px 10px rgba(0,0,0,.12)")
                    figure.m-auto
                      img(src="@/assets/curso/tema1/10.svg" style="max-height:50px;")
                .col.ps-0
                  .h-100.p-4.d-flex.flex-wrap.align-content-center(style="background-color:#F6F6F6;box-shadow:0px 3px 10px rgba(0,0,0,.12);border-radius:0px 10px 10px 0px;")
                    h5.mb-0 Estructura ancha
        p.mt-5 Después de tener claridad de la estrategia organizacional se procede a seguir los siguientes pasos para la construcción del organigrama: 

    .cont_2_1.mt-5.pt-5.pb-5
      .col-xl-10.m-auto
        ImagenInfografica.color-primario.imageninfografica2(data-aos="zoom-in-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/6.svg')
          .tarjeta.color-acento-botones.p-4.text-white(x="11%" y="77%" numero="+" style="background-color:#F6F6F6;")
            p.mb-0(style="color:initial !important;") Seleccionar el tipo de departamentalización más conveniente para la empresa.
          .tarjeta.color-acento-botones.p-4.text-white(x="36%" y="77%" numero="+" style="background-color:#F6F6F6;")
            p.mb-0(style="color:initial !important;") Conforme a la departamentalización seleccionada, divida la empresa en grupos que conforman esta departamentalización. 
          .tarjeta.color-acento-botones.p-4.text-white(x="62%" y="77%" numero="+" style="background-color:#F6F6F6;")
            p.mb-0(style="color:initial !important;") Establecer cadena de mando donde quede claro los niveles jerárquicos, la toma de decisiones, los niveles de autoridad.
          .tarjeta.color-acento-botones.p-4.text-white(x="88%" y="77%" numero="+" style="background-color:#F6F6F6;")
            p.mb-0(style="color:initial !important;") Definir líneas de comunicación entre cada uno de los niveles de la organización. 
    
    p.mt-5.text-center(data-aos="zoom-in") Teniendo en cuenta la información anterior, a continuación, se muestra un ejemplo de diferentes tipos de organigramas.

    .row.mt-5
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema2/7.svg")
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema2/8.svg")
      .col-lg.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/tema2/9.svg")

 

      
      
</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background: url(../assets/curso/tema1/2.png)
  background-size: cover
  background-positon: center
.imageninfografica2 .img-infografica__item .img-infografica__item__dot:before, .img-infografica__item .img-infografica__item__dot:after
  background-color: #fff !important
  opacity: 1
.imageninfografica2 .img-infografica__item
  border-radius: 100%
  box-shadow: 0px 0px 15px rgba(0,0,0,.15)
.imageninfografica2 .img-infografica__item, .img-infografica-b__item
  width: 4%
.imageninfografica2.img-infografica.color-primario .img-infografica__item__numero, .img-infografica-b.color-primario .img-infografica__item__numero
  color: #727997
  font-size: 25px
</style>
