<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Perfil del cargo y manual de funciones
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/1.png")
      .col-lg-8(data-aos="fade-left")
        p Para definir un cargo al interior de una organización se debe tener clara las funciones que se desempeñarán. El manual de funciones es un documento técnico donde se describe cada una de las funciones presentes en la organización, la relación de autoridad, dependencia y coordinación e incluye cada uno de los puestos de trabajo. Es así, como es importante centrarse en definir y describir los componentes que integran el perfil de cargo. 
        p.mt-4 Una de las principales tareas del proceso de gestión humana es definir claramente cada cargo. Es decir, definir el conjunto de características generales y específicas, rasgos y competencias que debe cumplir una persona para desempeñar bien las tareas asignadas. Son la mejor herramienta para el proceso de selección y reclutamiento de personal.

    .cajon.color-primario.p-4.mt-4(style="background-color:#DFE5FF;" data-aos="flip-up")
      p.mb-0 El perfil de cargo describe en detalle las responsabilidades, funciones y tareas que debe desempeñar la persona en un determinado cargo, por lo que, deberá comprender los siguientes elementos:

    .cont_3_1.mt-5.pt-5.pb-5
      SlyderBCustom(:datos="datosSlyder1")
      
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaFlip: true,
    datosSlyder1: [
      {
        titulo: 'Descripción del cargo ',
        texto:
          'Definición del puesto de trabajo y su rol con la organización.<br><br><strong>Ejemplo:</strong>  entrenador deportivo.',
        imagen: require('@/assets/curso/tema3/2.png'),
      },
      {
        titulo: 'Funciones y tareas',
        texto:
          'Descripción de cada una de las tareas a realizar.<br><br><strong>Ejemplo:</strong><br><br><ul class="lista-ul--separador mb-0"><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Diseñar planes de entrenamiento conforme a la necesidad del deportista.</div></li><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Orientar y dirigir planes de entrenamiento.</div></li></ul>',
        imagen: require('@/assets/curso/tema3/3.png'),
      },
      {
        titulo: 'Ubicación del sitio de trabajo',
        texto:
          'Sitio geográfico y locativo del puesto de trabajo.<br><br><strong>Ejemplo:</strong><br><br><ul class="lista-ul--separador mb-0"><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Desarrollo de actividades deportivas: pista de atletismo.</div></li><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Desarrollo de actividades administrativas: Oficina del club deportivo o teletrabajo.</div></li></ul>',
        imagen: require('@/assets/curso/tema3/4.png'),
      },
      {
        titulo: 'Dependencias y subordinaciones',
        texto:
          'Área, departamentalización a la que pertenece.<br><br><strong>Ejemplo:</strong><br><br><ul class="lista-ul--separador mb-0"><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Dependencia – Área: Actividad física, recreación y deportes.</div></li></ul>',
        imagen: require('@/assets/curso/tema3/5.png'),
      },
      {
        titulo: 'Relaciones con los demás cargos',
        texto:
          'Relaciones según lo dispuesto en el organigrama, entre el mismo nivel u otros niveles de la organización, conforme al nivel jerárquico y poder en toma de decisiones. ',
        imagen: require('@/assets/curso/tema3/6.png'),
      },
      {
        titulo: 'Formación requerida y requisitos de experiencia',
        texto:
          'Competencias, conocimientos y experiencia que debe tener el trabajador.<br><br>Incluir la educación formal y no formal necesaria que garantice el nivel de conocimiento requerido.<br><br><strong>Ejemplo:</strong><br><br><ul class="lista-ul--separador mb-0"><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Licenciado en Educación Física con especialización en entrenamiento deportivo y formación en primer respondiente.</div></li><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Experiencia mínima en cargos relacionados: 2 años.</div></li></ul>',
        imagen: require('@/assets/curso/tema3/7.png'),
      },
      {
        titulo: 'Requisitos físicos',
        texto:
          'Se describen requisitos físicos ideales para llevar a cabo la tarea, los cuales son aplicables a ciertos cargos que requieren condiciones específicas o están sujetos a posibles restricciones, como la altura, la fuerza o las condiciones de salud, entre otros factores. Por lo tanto, estos requisitos solo son relevantes en situaciones particulares, como el trabajo en alturas o la manipulación de cargas, por mencionar algunas. En el ejemplo que presentamos, no se aplican estos requisitos físicos, ya que no existen restricciones de este tipo para desempeñar el cargo de entrenador deportivo.',
        imagen: require('@/assets/curso/tema3/8.png'),
      },
      {
        titulo: 'Responsabilidades',
        texto:
          '<ul class="lista-ul--separador mb-0"><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Se describe qué, cómo y para qué.</div></li><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Qué operaciones se realizan para cumplir la misión del puesto.</div></li><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Cómo hacer lo que debe de hacer, qué herramientas, métodos empleará.</div></li><li class="mb-2 d-flex"><i class="fas fa-angle-right" style="color:#FE502D;"></i><div>Para qué, será la misión del cargo y su aporte para la organización. </div></li></ul>',
        imagen: require('@/assets/curso/tema3/9.png'),
      },
      {
        titulo: 'Condiciones de trabajo',
        texto:
          'Conjunto de factores del medio laboral que actúan sobre el trabajador, como lo son:<br>Ambiente físico: ventilación, climatización, temperatura, ruido, iluminación; biológicos: virus, bacterias, hongos, enfermedades transmisibles; exposición a agentes químicos; cargas ergonómicas, riesgos de seguridad y riesgos psicosociales.<br><br><strong>Ejemplo:</strong> exposición a altos ritmos de trabajo, conflictos interpersonales, exposición a cambios constantes de clima al trabajar a la intemperie, iluminación excesiva y sobresfuerzo de la voz.',
        imagen: require('@/assets/curso/tema3/10.png'),
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #E9EDFF
.lista-ol--separador li, .lista-ul--separador li
  border-style: dotted
</style>
