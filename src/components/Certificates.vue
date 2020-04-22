<template>
  <div class="container">
    <h1 class="title">📁 {{ $t('certificates')}}</h1>
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
          <img slot="image" :src="c.src">
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
      filter: 'all',
      certifics: [
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1050-programacion-basica/diploma/detalle/',
          src: require('@/assets/certifics/cursoProgramacionBasica.png')
        },
        {
          tags: ['all'],
          href: 'https://platzi.com/@Jesuskinto/curso/1220-marca-personal/diploma/detalle/',
          src: require('@/assets/certifics/cursoMarcaPersonal.png')
        },
        {
          tags: ['all'],
          href: 'https://platzi.com/@Jesuskinto/curso/1350-html5-css3/diploma/detalle/',
          src: require('@/assets/certifics/cursoDesarrolloWebOnline.png')
        },
        {
          tags: ['js', 'vue'],
          href: 'https://platzi.com/@Jesuskinto/curso/1111-vuejs/diploma/detalle/',
          src: require('@/assets/certifics/cursoBasicoVuejs.png')
        },
        {
          tags: ['js', 'vue'],
          href: 'https://platzi.com/@Jesuskinto/curso/1145-vuejs-profesional/diploma/detalle/',
          src: require('@/assets/certifics/cursoProfesionalVuejs.png')
        },
        {
          tags: ['js', 'vue'],
          href: 'https://platzi.com/@Jesuskinto/carrera/98-vue/diploma/detalle/',
          src: require('@/assets/certifics/carreraVuejs.png')
        },
        {
          tags: ['back', 'python'],
          href: 'https://platzi.com/@Jesuskinto/curso/1104-python-basico/diploma/detalle/',
          src: require('@/assets/certifics/cursoPython.png')
        },
        {
          tags: ['back', 'python'],
          href: 'https://platzi.com/@Jesuskinto/curso/1378-python/diploma/detalle/',
          src: require('@/assets/certifics/cursoPython2.png')
        },
        {
          tags: ['front'],
          href: 'https://platzi.com/@Jesuskinto/curso/1608-aprender/diploma/detalle/',
          src: require('@/assets/certifics/cursoAprenderEnLineaEfectivamente.png')
        },
        {
          tags: ['back'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoProfesionalGitGithub.png')
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoClousureAndScope.png')
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoV8.png')
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoRouter.png')
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1339-fundamentos-javascript/diploma/detalle/',
          src: require('@/assets/certifics/cursoFundamentosDeJavascript.png')
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoFrontendDeveloper.png')
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoPreworking.png')
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoProfesionalJavascript.png')
        },
        {
          tags: ['js'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoEMA6.png')
        },
        {
          tags: ['js', 'back'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoNode.png')
        },
        {
          tags: ['js', 'react'],
          href: 'https://platzi.com/@Jesuskinto/curso/1557-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoReact.png')
        },
        {
          tags: ['js', 'react '],
          href: 'https://platzi.com/@Jesuskinto/curso/15 57-git-github/diploma/detalle/',
          src: require('@/assets/certifics/cursoReactRouter.png')
        }
      ]
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
