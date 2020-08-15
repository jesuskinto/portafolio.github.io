<template>
  <div class="container">
    <h1 class="title"># {{ $t('certificates')}}</h1>
    <h2 class="subtitle">
      {{ $t('certificates-message')}}
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
        <p-certific v-for="(c,i) in certifics" :key="i" v-show="evalFilter(c.tags)" :href="c.href">
          <img slot="image" :src="c.src" :alt="c.alt">
        </p-certific>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import PCertific from '@/components/Certific.vue'
export default {
  components: {
    PCertific
  },
  data () {
    return {
      filter: 'all',
      certifics: [
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1050-programacion-basica/diploma/detalle/',
          src: require('@/assets/certifics/cursoProgramacionBasica.png'),
          alt: 'cursoProgramacionBasica'
        },
        {
          tags: ['all'],
          href: 'https://platzi.com/@Jesuskinto/curso/1220-marca-personal/diploma/detalle/',
          src: require('@/assets/certifics/cursoMarcaPersonal.png'),
          alt: 'cursoMarcaPersonal'
        },
        {
          tags: ['all'],
          href: 'https://platzi.com/@Jesuskinto/curso/1350-html5-css3/diploma/detalle/',
          src: require('@/assets/certifics/cursoDesarrolloWebOnline.png'),
          alt: 'cursoDesarrolloWebOnline'
        },
        {
          tags: ['js', 'vue'],
          href: 'https://platzi.com/@Jesuskinto/curso/1111-vuejs/diploma/detalle/',
          src: require('@/assets/certifics/cursoBasicoVuejs.png'),
          alt: 'cursoBasicoVuejs'
        },
        {
          tags: ['js', 'vue'],
          href: 'https://platzi.com/@Jesuskinto/curso/1145-vuejs-profesional/diploma/detalle/',
          src: require('@/assets/certifics/cursoProfesionalVuejs.png'),
          alt: 'cursoProfesionalVuejs'
        },
        {
          tags: ['js', 'vue'],
          href: 'https://platzi.com/@Jesuskinto/carrera/98-vue/diploma/detalle/',
          src: require('@/assets/certifics/carreraVuejs.png'),
          alt: 'carreraVuejs'
        },
        {
          tags: ['back', 'python'],
          href: 'https://platzi.com/@Jesuskinto/curso/1104-python-basico/diploma/detalle/',
          src: require('@/assets/certifics/cursoPython.png'),
          alt: 'cursoPython'
        },
        {
          tags: ['back', 'python'],
          href: 'https://platzi.com/@Jesuskinto/curso/1378-python/diploma/detalle/',
          src: require('@/assets/certifics/cursoPython2.png'),
          alt: 'cursoPython2'
        },
        {
          tags: ['front'],
          href: 'https://platzi.com/@Jesuskinto/curso/1608-aprender/diploma/detalle/',
          src: require('@/assets/certifics/cursoAprenderEnLineaEfectivamente.png'),
          alt: 'cursoAprenderEnLineaEfectivamente'
        },
        {
          tags: ['back'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoProfesionalGitGithub.png'),
          alt: 'cursoProfesionalGitGithub'
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1807-scope/diploma/detalle/',
          src: require('@/assets/certifics/cursoClousureAndScope.png'),
          alt: 'cursoClousureAndScope'
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1798-javascript-navegador/diploma/detalle/',
          src: require('@/assets/certifics/cursoV8.png'),
          alt: 'curso V8',
          date: '19-01-2019'
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoRouter.png'),
          alt: 'Taller de Creación de Router para Single Page App con JavaScript',
          date: '30-01-2019'
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1339-fundamentos-javascript/diploma/detalle/',
          src: require('@/assets/certifics/cursoFundamentosDeJavascript.png'),
          alt: 'Fundamentos de JavaScript',
          date: '19-04-2019'
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1640-frontend-developer/diploma/detalle/',
          src: require('@/assets/certifics/cursoFrontendDeveloper.png'),
          alt: 'Frontend Developer',
          date: '23-09-2019'
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1650-prework/diploma/detalle/',
          src: require('@/assets/certifics/cursoPreworking.png'),
          alt: 'Prework: Buenas Prácticas y Entorno de Desarrollo',
          date: '21-09-2019'
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoProfesionalJavascript.png'),
          alt: 'cursoProfesionalJavascript'
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1815-ecmascript-6/diploma/detalle/',
          src: require('@/assets/certifics/cursoEMA6.png'),
          alt: 'Curso de ECMAScript 6+',
          date: '31-01-2020'
        },
        {
          tags: ['js', 'back'],
          href: 'https://platzi.com/@Jesuskinto/curso/1646-backend-nodejs/diploma/detalle/',
          src: require('@/assets/certifics/cursoNode.png'),
          alt: 'Backend con Node',
          date: '04-12-2019'
        },
        {
          tags: ['js', 'react'],
          href: 'https://platzi.com/@Jesuskinto/curso/1651-react-ejs/diploma/detalle/',
          src: require('@/assets/certifics/cursoReact.png'),
          alt: 'curso React',
          date: '23-10-2019'
        },
        {
          tags: ['js', 'react'],
          href: 'https://platzi.com/@Jesuskinto/curso/1652-react-router-redux/diploma/detalle/',
          src: require('@/assets/certifics/cursoReactRouter.png'),
          alt: 'Curso de React Router y Redux',
          date: '05-11-2019'

        }
      ]
    }
  },
  updated () {
    AOS.refresh()
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
