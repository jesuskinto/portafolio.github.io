<template>
  <div id="app">
    <p-header></p-header>
    <p-content></p-content>
    <p-footer></p-footer>
    <p-modal
      :activate="showModal"
      @close="showModal = false">
      <template slot="content">
        <h1 class="title">Choose a language:</h1>
        <h2 class="subtitle">Elige un idioma:</h2>
        <br>
        <div class="columns button-langs">
          <div class="column">
            <button class="button is-info large"
              @click="changeLang('en')">
              English/Ingles
            </button>
          </div>
          <div class="column">
            <button class="button is-info large"
              @click="changeLang('es')">
              Spanish/Español
            </button>
          </div>
        </div>
      </template>
    </p-modal>
  </div>
</template>

<script>
import PHeader from '@/components/layout/Header.vue'
import PModal from '@/components/shared/Modal.vue'
const PContent = () => import('@/components/layout/Content.vue')
const PFooter = () => import('@/components/layout/Footer.vue')

export default {
  name: 'app',

  data () {
    return {
      $sticky: null,
      $projects: null,
      $contact: null,
      $certific: null,
      showModal: false
    }
  },

  components: {
    PHeader,
    PModal,
    PFooter,
    PContent
  },

  mounted () {
    this.setLang()
    window.addEventListener('scroll', this.handleScroll)
    const tabs = document.getElementById('tabs')
    this.$sticky = tabs.offsetTop
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      if (window.pageYOffset >= this.$sticky) {
        document.getElementById('tabs')
          .classList.add('sticky')
      } else {
        document.getElementById('tabs')
          .classList.remove('sticky')
      }
    },
    changeLang (lang) {
      localStorage.getItem('lang')
      this.$i18n.locale = lang
      this.showModal = false
    },
    setLang () {
      const lang = localStorage.getItem('lang')
      if (lang) this.changeLang(lang)
      else this.showModal = true
    }
  }
}
</script>

<style lang="sass">
@import '@/styles/main.sass'

#tabs
  transition: all .3s ease
.sticky
  position: fixed
  width: 100%
  background-color: $info
  z-index: 10
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)

.pproyect
  margin-top: 30px

#message
  background-color: $grey-darker
  text-align: center
  .title, .subtitle
    color: white
  .container
    padding: 100px 0

#contact
  .social
    max-width: 700px
    margin: 0 auto 20px
    .button
      margin-right: 15px

.or-line
  position: relative
  div
    position: absolute
    left: 47%
    right: 47%
    bottom: -10px
    span
      padding: 0 15px
      background: white

.button-langs
  text-align: center
</style>
