<template>
  <section id="certific" class="section">
    <div class="container">
      <h1 class="title">📁 {{ $t('certificates')}}</h1>
      <h2 class="subtitle">
        A simple container to divide your page into
        <strong>sections</strong>, like the one you're currently reading
      </h2>
      <div class="container pproyect">
        <div class="columns is-multiline is-mobile">
          <p-certific href="https://platzi.com/@Jesuskinto/curso/1050-programacion-basica/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/cursoProgramacionBasica.png">
            <h2 slot="title">Curso de Programación Basica</h2>
          </p-certific>
          <p-certific href="https://platzi.com/@Jesuskinto/curso/1220-marca-personal/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/cursoMarcaPersonal.png">
            <h2 slot="title">Curso de Marca Personal</h2>
          </p-certific>
          <p-certific href="https://platzi.com/@Jesuskinto/curso/1350-html5-css3/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/cursoDesarrolloWebOnline.png">
            <h2 slot="title">Curso de Desarrollo Web Online</h2>
          </p-certific>
          <p-certific href="https://platzi.com/@Jesuskinto/curso/1339-fundamentos-javascript/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/cursoFundamentosDeJavascript.png">
            <h2 slot="title">Curso de Fundamentos de Java...</h2>
          </p-certific>
          <p-certific href="https://platzi.com/@Jesuskinto/curso/1111-vuejs/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/cursoBasicoVuejs.png">
            <h2 slot="title">Curso Basico Vuejs</h2>
          </p-certific>
          <p-certific href="https://platzi.com/@Jesuskinto/curso/1145-vuejs-profesional/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/cursoProfesionalVuejs.png">
            <h2 slot="title">Curso Profesional de Vuejs</h2>
          </p-certific>
          <p-certific href="https://platzi.com/@Jesuskinto/carrera/98-vue/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/carreraVuejs.png">
            <h2 slot="title">Carrera de Vuejs</h2>
          </p-certific>
          <p-certific href="https://platzi.com/@Jesuskinto/curso/1104-python-basico/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/cursoPython.png">
            <h2 slot="title">Curso basico de Python</h2>
          </p-certific>
          <p-certific href="https://platzi.com/@Jesuskinto/curso/1378-python/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/cursoPython2.png">
            <h2 slot="title">Curso de Python</h2>
          </p-certific>
          <p-certific href="https://platzi.com/@Jesuskinto/curso/1608-aprender/diploma/detalle/">
            <img slot="image" src="@/assets/certifics/cursoAprenderEnLineaEfectivamente.png">
            <h2 slot="title">Curso aprender en linea efec...</h2>
          </p-certific>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PCertific from '@/components/Certific.vue'
export default {
  components: {
    PCertific
  }
}
</script>
