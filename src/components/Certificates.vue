<template>
  <div class="container">
    <h1 class="title">📁 {{ $t('certificates')}}</h1>
    <h2 class="subtitle">
      En un mundo en constante crecimiento, la unica forma de
      de avanzar es <i>"nunca parar de aprender"</i>.
      <br>
      Aca un listado cursos realizados en los ultimos años:
    </h2>
    <div class="buttons has-addons are-small">
      <button class="button" @click="filter = 'all'"> {{ $t('all') }} </button>
      <button class="button" @click="filter = 'back'">Back</button>
      <button class="button" @click="filter = 'js'">Js</button>
      <button class="button" @click="filter = 'python'">Python</button>
      <button class="button" @click="filter = 'vue'">Vue</button>
      <button class="button" @click="filter = 'react'">React</button>
    </div>
    <div class="container pproyect">
      <div class="columns is-mobile is-desktop is-multiline is-1-mobile is-6-tablet is-6-desktop">
        <p-certific v-show="evalFilter(['js'])" href="https://platzi.com/@Jesuskinto/curso/1050-programacion-basica/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoProgramacionBasica.png">
          <h2 slot="title">Curso de Programación Basica</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['all'])" href="https://platzi.com/@Jesuskinto/curso/1220-marca-personal/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoMarcaPersonal.png">
          <h2 slot="title">Curso de Marca Personal</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['all'])" href="https://platzi.com/@Jesuskinto/curso/1350-html5-css3/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoDesarrolloWebOnline.png">
          <h2 slot="title">Curso de Desarrollo Web Online</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js', 'vue'])" href="https://platzi.com/@Jesuskinto/curso/1111-vuejs/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoBasicoVuejs.png">
          <h2 slot="title">Curso Basico Vuejs</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js', 'vue'])" href="https://platzi.com/@Jesuskinto/curso/1145-vuejs-profesional/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoProfesionalVuejs.png">
          <h2 slot="title">Curso Profesional de Vuejs</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js', 'vue'])" href="https://platzi.com/@Jesuskinto/carrera/98-vue/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/carreraVuejs.png">
          <h2 slot="title">Carrera de Vuejs</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['back', 'python'])" href="https://platzi.com/@Jesuskinto/curso/1104-python-basico/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoPython.png">
          <h2 slot="title">Curso basico de Python</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['back', 'python'])" href="https://platzi.com/@Jesuskinto/curso/1378-python/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoPython2.png">
          <h2 slot="title">Curso de Python</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['front'])" href="https://platzi.com/@Jesuskinto/curso/1608-aprender/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoAprenderEnLineaEfectivamente.png">
          <h2 slot="title">Curso aprender en linea</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['back'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoProfesionalGitGithub.png">
          <h2 slot="title">Curso Profesional de git y github</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoClousureAndScope.png">
          <h2 slot="title">Clousure y Scope</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoV8.png">
          <h2 slot="title">V8</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoRouter.png">
          <h2 slot="title">Router</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js'])" href="https://platzi.com/@Jesuskinto/curso/1339-fundamentos-javascript/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoFundamentosDeJavascript.png">
          <h2 slot="title">Fundamentos de Javascript</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoFrontendDeveloper.png">
          <h2 slot="title">Frontend Developer</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoPreworking.png">
          <h2 slot="title">Preworking</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoProfesionalJavascript.png">
          <h2 slot="title">ProfesionalJavascript</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoEMA6.png">
          <h2 slot="title">EMA 6</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js', 'back'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoNode.png">
          <h2 slot="title">Backend Nodejs</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js', 'react'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoReact.png">
          <h2 slot="title">React</h2>
        </p-certific>
        <p-certific v-show="evalFilter(['js', 'react'])" href="https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/">
          <img slot="image" src="@/assets/certifics/cursoReactRouter.png">
          <h2 slot="title">React Router</h2>
        </p-certific>
      </div>
    </div>
  </div>
</template>

<script>
import PCertific from '@/components/Certific.vue'
export default {
  components: {
    PCertific
  },
  data () {
    return {
      filter: 'all'
    }
  },
  methods: {
    evalFilter (filters) {
      if (this.filter === 'all') return true
      return filters.includes(this.filter)
    }
  }
}
</script>

<style>
.button-wrapper {
  margin: 15px 0;
}
</style>
