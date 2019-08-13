<template>
  <div id="app">
    <p-header :activated="activated"></p-header>
    <p-content @showModal="showModal = $event"></p-content>
    <p-footer></p-footer>

    <!-- Modales -->
    <p-modals :showModal="showModal" @close="showModal = null"></p-modals>
  </div>
</template>

<script>
import PHeader from '@/components/layout/Header.vue'
const PContent = () => import('@/components/layout/Content.vue')
const PFooter = () => import('@/components/layout/Footer.vue')
const PModals = () => import('@/components/Modals.vue')

export default {
  name: 'app',

  data () {
    return {
      $sticky: null,
      $projects: null,
      $contact: null,
      $certific: null,
      activated: 'tecnoligies',
      showModal: 'lang'
    }
  },

  components: {
    PHeader,
    PModals,
    PFooter,
    PContent
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    const tabs = document.getElementById('tabs')
    const tecnologies = document.getElementById('tecnologies')
    const projects = document.getElementById('projects')
    const certific = document.getElementById('certific')
    const contact = document.getElementById('contact')
    this.$sticky = tabs.offsetTop
    this.$tecnologies = tecnologies.offsetTop
    this.$projects = projects.offsetTop
    this.$certific = certific.offsetTop
    this.$contact = contact.offsetTop
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

      if (this.inRange(this.$tecnologies, this.$projects)) {
        this.activated = 'tecnologies'
      } else if (this.inRange(this.$projects, this.$certific)) {
        this.activated = 'projects'
      } else if (this.inRange(this.$certific, this.$contact)) {
        this.activated = 'certific'
      } else if (this.inRange(this.$contact)) {
        this.activated = 'contact'
      }
    },
    inRange (sectionStart, sectionEnd = null) {
      const offter = 126
      const position = window.pageYOffset + offter
      if (sectionEnd) {
        return (position >= sectionStart && position < sectionEnd)
      }
      return (position >= sectionStart)
    },
    changeLang (lang) {
      this.$i18n.locale = lang
      this.showModal = null
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
  padding-top: 20px
  z-index: 1

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
