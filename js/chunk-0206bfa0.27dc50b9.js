(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0206bfa0"],{ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},e0a3:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"acordion"},[t._l(t.elements,(function(e,i){return s("div",{key:e.id,staticClass:"p-3 pb-0 p-md-4 pb-md-0 mb-3",class:t.cardClass(e.id)},[s("div",{staticClass:"acordion__header mb-3 mb-md-4",on:{click:function(s){t.selected=t.selected!=e.id?e.id:0},mouseover:function(e){t.mostrarIndicador=(!t.mostrarIndicador||1!==i)&&t.mostrarIndicador}}},[s("div",{staticClass:"d-flex align-items-center"},["a"===t.tipo?s("div",{staticClass:"acordion__accion"},[s("div",{staticClass:"acordion__accion__btn--a h3 mb-0 me-3"},[t.selected===e.id?s("i",{staticClass:"fas fa-minus"}):s("i",{staticClass:"fas fa-plus"}),t.mostrarIndicador&&1===i?s("div",{staticClass:"indicador__container"},[s("div",{staticClass:"indicador--click indicador--sm"})]):t._e()])]):t._e(),s("div",{staticClass:"acordion__titulo"},[s("h3",{staticClass:"mb-0",domProps:{innerHTML:t._s(e.titulo)}})])]),"b"===t.tipo?s("div",{staticClass:"acordion__accion"},[s("div",{staticClass:"acordion__accion__btn--b h3 mb-0"},[t.selected===e.id?s("i",{staticClass:"fas fa-angle-up"}):s("i",{staticClass:"fas fa-angle-down"}),t.mostrarIndicador&&1===i?s("div",{staticClass:"indicador__container indicador--left"},[s("div",{staticClass:"indicador--click indicador--sm"})]):t._e()])]):t._e()]),s("div",{staticClass:"acordion__contenido",style:{height:t.rendered&&t.selected===e.id?t.getActiveHeight(e.id):0}},[s("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"elm.elm"}],ref:e.id,refInFor:!0,staticClass:"acordion__contenido__item pb-3 pb-md-4"})])])})),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],2)},a=[],d=s("ab14"),n={name:"AcordionA",mixins:[d["a"]],props:{claseTarjeta:{type:String,default:""},tipo:{type:String,default:"a"}},data:function(){return{mostrarIndicador:!0}},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.domUpdated()}),5e3)}))},methods:{cardClass:function(t){var e=[];return this.claseTarjeta.length?e.push(this.claseTarjeta):e.push("tarjeta tarjeta--blanca"),this.selected===t&&e.push("acordion__activo"),e}}},r=n,c=s("2877"),o=Object(c["a"])(r,i,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-0206bfa0.27dc50b9.js.map