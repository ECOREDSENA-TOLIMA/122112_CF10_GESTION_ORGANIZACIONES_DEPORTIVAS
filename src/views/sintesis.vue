<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in-down") En resumen, se ha examinado la gestión del talento humano, comenzando por la estructura organizacional y el organigrama, definiendo los roles en el perfil de cargo y el manual de funciones. Además, se abordó la implementación del programa de gestión del talento, el liderazgo y las estrategias de dirección del personal. También se consideraron temas esenciales como la seguridad y salud en el trabajo, la gestión ambiental y la calidad, aspectos cruciales para el bienestar y la sostenibilidad de la organización. Todos estos elementos se combinaron en una perspectiva integral que contribuyó al éxito y al logro de los objetivos de la empresa, como se visualiza en el mapa mental.

    .row.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
