<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #FE502D !important
.curso-main-container > .container
  overflow-x: clip !important
.titulo-segundo:after
  border-left-color: #FE502D !important
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #12263F !important
.banner-principal .tarjeta
  background-color: transparent !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #12263F !important
.banner-principal-decorativo-1
  animation: float1 2s ease-in-out infinite alternate !important
  top: 88% !important
  right: 25% !important
.banner-principal-decorativo-2
  animation: float1 3s ease-in-out infinite alternate !important
  top: 67% !important
  right: 21% !important
.titulo-principal.color-acento-contenido .titulo-principal__numero
  background-color: #FFCA00 !important
.banner-principal .tarjeta
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .banner-principal .tarjeta
    background-size: cover !important
  .cont_1_1:before
    height: 100% !important
</style>
